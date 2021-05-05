/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Array } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyComplexClientContext } from "../bodyComplexClientContext";
import {
  ArrayGetValidOptionalParams,
  ArrayGetValidResponse,
  ArrayWrapper,
  ArrayPutValidOptionalParams,
  ArrayGetEmptyOptionalParams,
  ArrayGetEmptyResponse,
  ArrayPutEmptyOptionalParams,
  ArrayGetNotProvidedOptionalParams,
  ArrayGetNotProvidedResponse
} from "../models";

/** Class representing a Array. */
export class ArrayImpl implements Array {
  private readonly client: BodyComplexClientContext;

  /**
   * Initialize a new instance of the class Array class.
   * @param client Reference to the service client
   */
  constructor(client: BodyComplexClientContext) {
    this.client = client;
  }

  /**
   * Get complex types with array property
   * @param options The options parameters.
   */
  getValid(
    options?: ArrayGetValidOptionalParams
  ): Promise<ArrayGetValidResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getValidOperationSpec
    ) as Promise<ArrayGetValidResponse>;
  }

  /**
   * Put complex types with array property
   * @param complexBody Please put an array with 4 items: "1, 2, 3, 4", "", null, "&S#$(*Y", "The quick
   *                    brown fox jumps over the lazy dog"
   * @param options The options parameters.
   */
  putValid(
    complexBody: ArrayWrapper,
    options?: ArrayPutValidOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      complexBody,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      putValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get complex types with array property which is empty
   * @param options The options parameters.
   */
  getEmpty(
    options?: ArrayGetEmptyOptionalParams
  ): Promise<ArrayGetEmptyResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getEmptyOperationSpec
    ) as Promise<ArrayGetEmptyResponse>;
  }

  /**
   * Put complex types with array property which is empty
   * @param complexBody Please put an empty array
   * @param options The options parameters.
   */
  putEmpty(
    complexBody: ArrayWrapper,
    options?: ArrayPutEmptyOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      complexBody,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      putEmptyOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get complex types with array property while server doesn't provide a response payload
   * @param options The options parameters.
   */
  getNotProvided(
    options?: ArrayGetNotProvidedOptionalParams
  ): Promise<ArrayGetNotProvidedResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getNotProvidedOperationSpec
    ) as Promise<ArrayGetNotProvidedResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getValidOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/array/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArrayWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putValidOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/array/valid",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody12,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getEmptyOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/array/empty",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArrayWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putEmptyOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/array/empty",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody12,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getNotProvidedOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/array/notprovided",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArrayWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
