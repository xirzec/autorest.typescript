/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Odata } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureSpecialPropertiesClient } from "../azureSpecialPropertiesClient";
import { OdataGetWithFilterOptionalParams } from "../models";

/** Class containing Odata operations. */
export class OdataImpl implements Odata {
  private readonly client: AzureSpecialPropertiesClient;

  /**
   * Initialize a new instance of the class Odata class.
   * @param client Reference to the service client
   */
  constructor(client: AzureSpecialPropertiesClient) {
    this.client = client;
  }

  /**
   * Specify filter parameter with value '$filter=id gt 5 and name eq 'foo'&$orderby=id&$top=10'
   * @param options The options parameters.
   */
  getWithFilter(options?: OdataGetWithFilterOptionalParams): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getWithFilterOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getWithFilterOperationSpec: coreClient.OperationSpec = {
  path: "/azurespecials/odata/filter",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.filter, Parameters.top, Parameters.orderby],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};