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
import { BodyDurationClientContext } from "../bodyDurationClientContext";
import {
  DurationGetNullResponse,
  DurationGetPositiveDurationResponse,
  DurationGetInvalidResponse
} from "../models";

/** Class representing a Duration. */
export class Duration {
  private readonly client: BodyDurationClientContext;

  /**
   * Initialize a new instance of the class Duration class.
   * @param client Reference to the service client
   */
  constructor(client: BodyDurationClientContext) {
    this.client = client;
  }

  /**
   * Get null duration value
   * @param options The options parameters.
   */
  getNull(
    options?: coreHttp.OperationOptions
  ): Promise<DurationGetNullResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getNullOperationSpec
    ) as Promise<DurationGetNullResponse>;
  }

  /**
   * Put a positive duration value
   * @param durationBody duration body
   * @param options The options parameters.
   */
  putPositiveDuration(
    durationBody: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      durationBody,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      putPositiveDurationOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get a positive duration value
   * @param options The options parameters.
   */
  getPositiveDuration(
    options?: coreHttp.OperationOptions
  ): Promise<DurationGetPositiveDurationResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getPositiveDurationOperationSpec
    ) as Promise<DurationGetPositiveDurationResponse>;
  }

  /**
   * Get an invalid duration value
   * @param options The options parameters.
   */
  getInvalid(
    options?: coreHttp.OperationOptions
  ): Promise<DurationGetInvalidResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getInvalidOperationSpec
    ) as Promise<DurationGetInvalidResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getNullOperationSpec: coreHttp.OperationSpec = {
  path: "/duration/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "TimeSpan" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putPositiveDurationOperationSpec: coreHttp.OperationSpec = {
  path: "/duration/positiveduration",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.durationBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getPositiveDurationOperationSpec: coreHttp.OperationSpec = {
  path: "/duration/positiveduration",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "TimeSpan" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getInvalidOperationSpec: coreHttp.OperationSpec = {
  path: "/duration/invalid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "TimeSpan" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
