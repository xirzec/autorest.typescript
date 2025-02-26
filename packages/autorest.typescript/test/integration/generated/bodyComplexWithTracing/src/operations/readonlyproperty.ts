/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing";
import { Readonlyproperty } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyComplexWithTracing } from "../bodyComplexWithTracing";
import {
  ReadonlypropertyGetValidOptionalParams,
  ReadonlypropertyGetValidResponse,
  ReadonlyObj,
  ReadonlypropertyPutValidOptionalParams
} from "../models";

/** Class containing Readonlyproperty operations. */
export class ReadonlypropertyImpl implements Readonlyproperty {
  private readonly client: BodyComplexWithTracing;

  /**
   * Initialize a new instance of the class Readonlyproperty class.
   * @param client Reference to the service client
   */
  constructor(client: BodyComplexWithTracing) {
    this.client = client;
  }

  /**
   * Get complex types that have readonly properties
   * @param options The options parameters.
   */
  async getValid(
    options?: ReadonlypropertyGetValidOptionalParams
  ): Promise<ReadonlypropertyGetValidResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getValid",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getValidOperationSpec
        ) as Promise<ReadonlypropertyGetValidResponse>;
      }
    );
  }

  /**
   * Put complex types that have readonly properties
   * @param complexBody
   * @param options The options parameters.
   */
  async putValid(
    complexBody: ReadonlyObj,
    options?: ReadonlypropertyPutValidOptionalParams
  ): Promise<void> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.putValid",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { complexBody, options },
          putValidOperationSpec
        ) as Promise<void>;
      }
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getValidOperationSpec: coreClient.OperationSpec = {
  path: "/complex/readonlyproperty/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReadonlyObj
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putValidOperationSpec: coreClient.OperationSpec = {
  path: "/complex/readonlyproperty/valid",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody17,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
