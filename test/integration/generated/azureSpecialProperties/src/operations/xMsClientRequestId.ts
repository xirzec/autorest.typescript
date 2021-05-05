/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { XMsClientRequestId } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureSpecialPropertiesClientContext } from "../azureSpecialPropertiesClientContext";
import {
  XMsClientRequestIdGetOptionalParams,
  XMsClientRequestIdParamGetOptionalParams
} from "../models";

/** Class representing a XMsClientRequestId. */
export class XMsClientRequestIdImpl implements XMsClientRequestId {
  private readonly client: AzureSpecialPropertiesClientContext;

  /**
   * Initialize a new instance of the class XMsClientRequestId class.
   * @param client Reference to the service client
   */
  constructor(client: AzureSpecialPropertiesClientContext) {
    this.client = client;
  }

  /**
   * Get method that overwrites x-ms-client-request header with value
   * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   * @param options The options parameters.
   */
  get(
    options?: XMsClientRequestIdGetOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get method that overwrites x-ms-client-request header with value
   * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   * @param xMsClientRequestId This should appear as a method parameter, use value
   *                           '9C4D50EE-2D56-4CD3-8152-34347DC9F2B0'
   * @param options The options parameters.
   */
  paramGet(
    xMsClientRequestId: string,
    options?: XMsClientRequestIdParamGetOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      xMsClientRequestId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      paramGetOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getOperationSpec: coreHttp.OperationSpec = {
  path: "/azurespecials/overwrite/x-ms-client-request-id/method/",
  httpMethod: "GET",
  responses: { 200: {}, default: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const paramGetOperationSpec: coreHttp.OperationSpec = {
  path: "/azurespecials/overwrite/x-ms-client-request-id/via-param/method/",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.xMsClientRequestId],
  serializer
};
