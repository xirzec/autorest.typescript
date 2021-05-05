import {
  HttpMethods,
  HttpOperationResponse,
  OperationArguments,
  OperationResponse,
  OperationSpec
} from "@azure/core-http";
import { terminalStates } from "./constants";
import { BaseResult, LROConfig, LROMode, SendOperationFn } from "./models";

/**
 * We need to selectively deserialize our responses, only deserializing if we
 * are in a final LRO response, not deserializing any polling non-terminal responses
 */
export function shouldDeserializeLRO(finalStateVia?: string) {
  let initialOperationInfo: LROResponseInfo | undefined;
  let isInitialRequest = true;

  return (response: HttpOperationResponse) => {
    if (response.status < 200 || response.status >= 300) {
      return true;
    }

    if (!initialOperationInfo) {
      initialOperationInfo = getLROData(response);
    } else {
      isInitialRequest = false;
    }

    if (
      initialOperationInfo.azureAsyncOperation ||
      initialOperationInfo.operationLocation
    ) {
      return (
        !isInitialRequest &&
        isAsyncOperationFinalResponse(
          response,
          initialOperationInfo,
          finalStateVia
        )
      );
    }

    if (initialOperationInfo.location) {
      return isLocationFinalResponse(response);
    }

    if (initialOperationInfo.requestMethod === "PUT") {
      return isBodyPollingFinalResponse(response);
    }

    return true;
  };
}

function isAsyncOperationFinalResponse(
  response: HttpOperationResponse,
  initialOperationInfo: LROResponseInfo,
  finalStateVia?: string
): boolean {
  const status: string = response.parsedBody?.status || "Succeeded";
  if (!terminalStates.includes(status.toLowerCase())) {
    return false;
  }

  if (initialOperationInfo.requestMethod === "DELETE") {
    return true;
  }

  if (
    initialOperationInfo.requestMethod === "PUT" &&
    finalStateVia &&
    finalStateVia.toLowerCase() === "azure-asyncoperation"
  ) {
    return true;
  }

  if (
    initialOperationInfo.requestMethod !== "PUT" &&
    !initialOperationInfo.location
  ) {
    return true;
  }

  return false;
}

function isLocationFinalResponse(response: HttpOperationResponse): boolean {
  return response.status !== 202;
}

function isBodyPollingFinalResponse(response: HttpOperationResponse): boolean {
  const provisioningState: string =
    response.parsedBody?.properties?.provisioningState || "Succeeded";

  if (terminalStates.includes(provisioningState.toLowerCase())) {
    return true;
  }

  return false;
}

interface LROResponseInfo {
  requestMethod: HttpMethods;
  azureAsyncOperation?: string;
  operationLocation?: string;
  location?: string;
}

function getLROData(result: HttpOperationResponse): LROResponseInfo {
  return {
    azureAsyncOperation: result.headers.get("azure-asyncoperation"),
    operationLocation: result.headers.get("operation-location"),
    location: result.headers.get("location"),
    requestMethod: result.request.method
  };
}

/**
 * Detects where the continuation token is and returns it. Notice that azure-asyncoperation
 * must be checked first before the other location headers because there are scenarios
 * where both azure-asyncoperation and location could be present in the same response but
 * azure-asyncoperation should be the one to use for polling.
 */
export function getPollingURL<TResult extends BaseResult>(
  result: TResult,
  defaultPath: string
): string {
  return (
    getAzureAsyncoperation(result) ??
    getLocation(result) ??
    getOperationLocation(result) ??
    defaultPath
  );
}

export function getLocation<TResult extends BaseResult>(
  result: TResult
): string | undefined {
  return result._response.headers?.get("location");
}

export function getOperationLocation<TResult extends BaseResult>(
  result: TResult
): string | undefined {
  return result._response.headers?.get("operation-location");
}

export function getAzureAsyncoperation<TResult extends BaseResult>(
  result: TResult
): string | undefined {
  return result._response.headers?.get("azure-asyncoperation");
}

export function getRequestMethod<TResult extends BaseResult>(
  result: TResult
): HttpMethods {
  return result._response.request.method;
}

export function getProvisioningStateIfDefined(
  result: HttpOperationResponse
): string | undefined {
  const { properties, provisioningState } =
    result.parsedBody ??
    (result.bodyAsText ? JSON.parse(result.bodyAsText) : {});
  const state: string | undefined =
    properties?.provisioningState ?? provisioningState;
  return state?.toLowerCase();
}

export function getProvisioningState(result: HttpOperationResponse): string {
  return getProvisioningStateIfDefined(result) ?? "succeeded";
}

export function getResponseStatus(result: HttpOperationResponse): string {
  const { status } =
    result.parsedBody ??
    (result.bodyAsText ? JSON.parse(result.bodyAsText) : {});
  return status?.toLowerCase() ?? "succeeded";
}

/**
 * Polling calls will always return a status object i.e. {"status": "success"}
 * these intermediate responses are not described in the swagger so we need to
 * pass custom mappers at runtime.
 * This function replaces all the existing mappers to be able to deserialize a status object
 * @param responses Original set of responses defined in the operation
 */
function getCompositeMappers(responses: {
  [responseCode: string]: OperationResponse;
}): {
  [responseCode: string]: OperationResponse;
} {
  return Object.keys(responses).reduce((acc, statusCode) => {
    return {
      ...acc,
      [statusCode]: {
        ...responses[statusCode],
        bodyMapper: {
          type: {
            name: "Composite",
            modelProperties: {
              status: {
                serializedName: "status",
                type: {
                  name: "String"
                }
              }
            }
          }
        }
      }
    };
  }, {} as { [responseCode: string]: OperationResponse });
}

export function createPollOnce<TResult extends BaseResult>(
  sendOperationFn: SendOperationFn<TResult>,
  args: OperationArguments,
  spec: OperationSpec,
  mode?: LROMode
): (path?: string) => Promise<TResult> {
  // Make sure we don't send any body to the get request
  const { requestBody, responses, ...restSpec } = spec;
  if (mode === "AzureAsync") {
    return async (path?: string) => {
      return sendOperationFn(args, {
        ...restSpec,
        responses: getCompositeMappers(responses),
        httpMethod: "GET",
        ...(path && { path })
      });
    };
  }
  return async (path?: string) => {
    return sendOperationFn(args, {
      ...restSpec,
      responses: responses,
      httpMethod: "GET",
      ...(path && { path })
    });
  };
}

export function createRetrieveAzureAsyncResource<TResult extends BaseResult>(
  sendOperationFn: SendOperationFn<TResult>,
  args: OperationArguments,
  spec: OperationSpec
): (path?: string) => Promise<TResult> {
  const updatedArgs = { ...args };
  if (updatedArgs.options) {
    updatedArgs.options.shouldDeserialize = true;
  }
  return createPollOnce(sendOperationFn, updatedArgs, spec);
}

export function inferLROMode<TResult extends BaseResult>(
  result: TResult
): LROConfig {
  if (getAzureAsyncoperation(result) !== undefined) {
    const requestMethod = getRequestMethod(result);
    return {
      mode: "AzureAsync",
      resourceLocation:
        requestMethod === "PUT"
          ? result._response.request.url
          : requestMethod === "POST"
          ? getLocation(result)
          : undefined
    };
  } else if (
    getLocation(result) !== undefined ||
    getOperationLocation(result) !== undefined
  ) {
    return {
      mode: "Location"
    };
  } else if (["PUT", "PATCH"].includes(getRequestMethod(result))) {
    return {
      mode: "Body"
    };
  }
  return {};
}

export function isBodyPollingDone<TResult extends BaseResult>(result: TResult) {
  return terminalStates.includes(getProvisioningState(result._response));
}
