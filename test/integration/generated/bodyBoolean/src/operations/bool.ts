/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Bool } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyBooleanClientContext } from "../bodyBooleanClientContext";
import {
  BoolGetTrueOptionalParams,
  BoolGetTrueResponse,
  BoolPutTrueOptionalParams,
  BoolGetFalseOptionalParams,
  BoolGetFalseResponse,
  BoolPutFalseOptionalParams,
  BoolGetNullOptionalParams,
  BoolGetNullResponse,
  BoolGetInvalidOptionalParams,
  BoolGetInvalidResponse
} from "../models";

/** Class representing a Bool. */
export class BoolImpl implements Bool {
  private readonly client: BodyBooleanClientContext;

  /**
   * Initialize a new instance of the class Bool class.
   * @param client Reference to the service client
   */
  constructor(client: BodyBooleanClientContext) {
    this.client = client;
  }

  /**
   * Get true Boolean value
   * @param options The options parameters.
   */
  getTrue(options?: BoolGetTrueOptionalParams): Promise<BoolGetTrueResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getTrueOperationSpec
    ) as Promise<BoolGetTrueResponse>;
  }

  /**
   * Set Boolean value true
   * @param options The options parameters.
   */
  putTrue(options?: BoolPutTrueOptionalParams): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      putTrueOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get false Boolean value
   * @param options The options parameters.
   */
  getFalse(
    options?: BoolGetFalseOptionalParams
  ): Promise<BoolGetFalseResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getFalseOperationSpec
    ) as Promise<BoolGetFalseResponse>;
  }

  /**
   * Set Boolean value false
   * @param options The options parameters.
   */
  putFalse(
    options?: BoolPutFalseOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      putFalseOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get null Boolean value
   * @param options The options parameters.
   */
  getNull(options?: BoolGetNullOptionalParams): Promise<BoolGetNullResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getNullOperationSpec
    ) as Promise<BoolGetNullResponse>;
  }

  /**
   * Get invalid Boolean value
   * @param options The options parameters.
   */
  getInvalid(
    options?: BoolGetInvalidOptionalParams
  ): Promise<BoolGetInvalidResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getInvalidOperationSpec
    ) as Promise<BoolGetInvalidResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getTrueOperationSpec: coreHttp.OperationSpec = {
  path: "/bool/true",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Boolean" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putTrueOperationSpec: coreHttp.OperationSpec = {
  path: "/bool/true",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.boolBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getFalseOperationSpec: coreHttp.OperationSpec = {
  path: "/bool/false",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Boolean" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putFalseOperationSpec: coreHttp.OperationSpec = {
  path: "/bool/false",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.boolBody1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getNullOperationSpec: coreHttp.OperationSpec = {
  path: "/bool/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Boolean" } }
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
  path: "/bool/invalid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Boolean" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
