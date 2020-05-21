/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DeploymentScriptsClient } from "../deploymentScriptsClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  DeploymentScriptUnion,
  DeploymentScriptsCreateResponse,
  DeploymentScriptsUpdateOptionalParams,
  DeploymentScriptsUpdateResponse,
  DeploymentScriptsGetResponse,
  DeploymentScriptsListBySubscriptionResponse,
  DeploymentScriptsGetLogsResponse,
  DeploymentScriptsGetLogsDefaultOptionalParams,
  DeploymentScriptsGetLogsDefaultResponse,
  DeploymentScriptsListByResourceGroupResponse,
  DeploymentScriptsListBySubscriptionNextResponse,
  DeploymentScriptsListByResourceGroupNextResponse
} from "../models";

/**
 * Class representing a DeploymentScripts.
 */
export class DeploymentScripts {
  private readonly client: DeploymentScriptsClient;

  /**
   * Initialize a new instance of the class DeploymentScripts class.
   * @param client Reference to the service client
   */
  constructor(client: DeploymentScriptsClient) {
    this.client = client;
  }

  /**
   * Creates a deployment script.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param deploymentScript Deployment script supplied to the operation.
   * @param options The options parameters.
   */
  async create(
    resourceGroupName: string,
    scriptName: string,
    deploymentScript: DeploymentScriptUnion,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<DeploymentScriptsCreateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      scriptName,
      deploymentScript,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        DeploymentScriptsCreateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      createOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: createOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Updates deployment script tags with specified values.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    scriptName: string,
    options?: DeploymentScriptsUpdateOptionalParams
  ): Promise<DeploymentScriptsUpdateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, scriptName, options: operationOptions },
      updateOperationSpec
    ) as Promise<DeploymentScriptsUpdateResponse>;
  }

  /**
   * Gets a deployment script with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    scriptName: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeploymentScriptsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, scriptName, options: operationOptions },
      getOperationSpec
    ) as Promise<DeploymentScriptsGetResponse>;
  }

  /**
   * Deletes a deployment script. When operation completes, status code 200 returned without content.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    scriptName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, scriptName, options: operationOptions },
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Lists all deployment scripts for a given subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: coreHttp.OperationOptions
  ): Promise<DeploymentScriptsListBySubscriptionResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listBySubscriptionOperationSpec
    ) as Promise<DeploymentScriptsListBySubscriptionResponse>;
  }

  /**
   * Gets deployment script logs for a given deployment script name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  getLogs(
    resourceGroupName: string,
    scriptName: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeploymentScriptsGetLogsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, scriptName, options: operationOptions },
      getLogsOperationSpec
    ) as Promise<DeploymentScriptsGetLogsResponse>;
  }

  /**
   * Gets deployment script logs for a given deployment script name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  getLogsDefault(
    resourceGroupName: string,
    scriptName: string,
    options?: DeploymentScriptsGetLogsDefaultOptionalParams
  ): Promise<DeploymentScriptsGetLogsDefaultResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, scriptName, options: operationOptions },
      getLogsDefaultOperationSpec
    ) as Promise<DeploymentScriptsGetLogsDefaultResponse>;
  }

  /**
   * Lists deployments scripts.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeploymentScriptsListByResourceGroupResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, options: operationOptions },
      listByResourceGroupOperationSpec
    ) as Promise<DeploymentScriptsListByResourceGroupResponse>;
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  listBySubscriptionNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeploymentScriptsListBySubscriptionNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listBySubscriptionNextOperationSpec
    ) as Promise<DeploymentScriptsListBySubscriptionNextResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeploymentScriptsListByResourceGroupNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options: operationOptions },
      listByResourceGroupNextOperationSpec
    ) as Promise<DeploymentScriptsListByResourceGroupNextResponse>;
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const createOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScript
    },
    201: {
      bodyMapper: Mappers.DeploymentScript
    },
    202: {
      bodyMapper: Mappers.DeploymentScript
    },
    204: {
      bodyMapper: Mappers.DeploymentScript
    }
  },
  requestBody: Parameters.deploymentScript,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scriptName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScript
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  requestBody: Parameters.deploymentScript1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scriptName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScript
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scriptName
  ],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scriptName
  ],
  serializer
};
const listBySubscriptionOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/deploymentScripts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScriptListResult
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const getLogsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}/logs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScriptLogsList
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scriptName
  ],
  serializer
};
const getLogsDefaultOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}/logs/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScriptLog
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.tail],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scriptName
  ],
  serializer
};
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScriptListResult
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  serializer
};
const listBySubscriptionNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScriptListResult
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  serializer
};
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScriptListResult
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  serializer
};
