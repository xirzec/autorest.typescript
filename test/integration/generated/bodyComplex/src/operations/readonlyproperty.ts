/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyComplexClient } from "../bodyComplexClient";

/**
 * Class representing a Readonlyproperty.
 */
export class Readonlyproperty {
  private readonly client: BodyComplexClient;

  /**
   * Initialize a new instance of the class Readonlyproperty class.
   * @param client Reference to the service client
   */
  constructor(client: BodyComplexClient) {
    this.client = client;
  }

  /**
   * Get complex types that have readonly properties
   * @param options The options parameters.
   */
  getValid(
    options?: coreHttp.OperationOptions
  ): Promise<Models.ReadonlypropertyGetValidResponse> {
    return this.client.sendOperationRequest(
      { options },
      getValidOperationSpec
    ) as Promise<Models.ReadonlypropertyGetValidResponse>;
  }

  /**
   * Put complex types that have readonly properties
   * @param complexBody
   * @param options The options parameters.
   */
  putValid(
    complexBody: Models.ReadonlyObj,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getValidOperationSpec: coreHttp.OperationSpec = {
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
  serializer
};
const putValidOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/readonlyproperty/valid",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody17,
  serializer
};
