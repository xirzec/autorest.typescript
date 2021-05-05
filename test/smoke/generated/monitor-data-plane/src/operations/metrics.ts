/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Metrics } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClientContext } from "../monitorClientContext";
import {
  AzureMetricsDocument,
  MetricsCreateOptionalParams,
  MetricsCreateResponse
} from "../models";

/** Class representing a Metrics. */
export class MetricsImpl implements Metrics {
  private readonly client: MonitorClientContext;

  /**
   * Initialize a new instance of the class Metrics class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClientContext) {
    this.client = client;
  }

  /**
   * **Post the metric values for a resource**.
   * @param contentType Supports application/json and application/x-ndjson
   * @param contentLength Content length of the payload
   * @param authorization Authorization token issue for issued for audience
   *                      "https:\\monitoring.azure.com\"
   * @param subscriptionId The azure subscription id
   * @param resourceGroupName The ARM resource group name
   * @param resourceProvider The ARM resource provider name
   * @param resourceTypeName The ARM resource type name
   * @param resourceName The ARM resource name
   * @param body The Azure metrics document json payload
   * @param options The options parameters.
   */
  create(
    contentType: string,
    contentLength: number,
    authorization: string,
    subscriptionId: string,
    resourceGroupName: string,
    resourceProvider: string,
    resourceTypeName: string,
    resourceName: string,
    body: AzureMetricsDocument,
    options?: MetricsCreateOptionalParams
  ): Promise<MetricsCreateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      contentType,
      contentLength,
      authorization,
      subscriptionId,
      resourceGroupName,
      resourceProvider,
      resourceTypeName,
      resourceName,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOperationSpec
    ) as Promise<MetricsCreateResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const createOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProvider}/{resourceTypeName}/{resourceName}/metrics",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AzureMetricsResult
    },
    default: {
      bodyMapper: Mappers.AzureMetricsResult
    }
  },
  requestBody: Parameters.body,
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceProvider,
    Parameters.resourceTypeName,
    Parameters.resourceName
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.contentType1,
    Parameters.contentLength,
    Parameters.authorization
  ],
  mediaType: "json",
  serializer
};
