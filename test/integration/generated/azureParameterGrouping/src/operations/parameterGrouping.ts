/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ParameterGrouping } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureParameterGroupingClientContext } from "../azureParameterGroupingClientContext";
import {
  ParameterGroupingPostRequiredParameters,
  ParameterGroupingPostRequiredOptionalParams,
  ParameterGroupingPostOptionalOptionalParams,
  ParameterGroupingPostReservedWordsOptionalParams,
  ParameterGroupingPostMultiParamGroupsOptionalParams,
  ParameterGroupingPostSharedParameterGroupObjectOptionalParams
} from "../models";

/** Class containing ParameterGrouping operations. */
export class ParameterGroupingImpl implements ParameterGrouping {
  private readonly client: AzureParameterGroupingClientContext;

  /**
   * Initialize a new instance of the class ParameterGrouping class.
   * @param client Reference to the service client
   */
  constructor(client: AzureParameterGroupingClientContext) {
    this.client = client;
  }

  /**
   * Post a bunch of required parameters grouped
   * @param parameterGroupingPostRequiredParameters Parameter group
   * @param options The options parameters.
   */
  postRequired(
    parameterGroupingPostRequiredParameters: ParameterGroupingPostRequiredParameters,
    options?: ParameterGroupingPostRequiredOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { parameterGroupingPostRequiredParameters, options },
      postRequiredOperationSpec
    );
  }

  /**
   * Post a bunch of optional parameters grouped
   * @param options The options parameters.
   */
  postOptional(
    options?: ParameterGroupingPostOptionalOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postOptionalOperationSpec
    );
  }

  /**
   * Post a grouped parameters with reserved words
   * @param options The options parameters.
   */
  postReservedWords(
    options?: ParameterGroupingPostReservedWordsOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postReservedWordsOperationSpec
    );
  }

  /**
   * Post parameters from multiple different parameter groups
   * @param options The options parameters.
   */
  postMultiParamGroups(
    options?: ParameterGroupingPostMultiParamGroupsOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postMultiParamGroupsOperationSpec
    );
  }

  /**
   * Post parameters with a shared parameter group object
   * @param options The options parameters.
   */
  postSharedParameterGroupObject(
    options?: ParameterGroupingPostSharedParameterGroupObjectOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postSharedParameterGroupObjectOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const postRequiredOperationSpec: coreClient.OperationSpec = {
  path: "/parameterGrouping/postRequired/{path}",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.query],
  urlParameters: [Parameters.$host, Parameters.path],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.customHeader
  ],
  mediaType: "json",
  serializer
};
const postOptionalOperationSpec: coreClient.OperationSpec = {
  path: "/parameterGrouping/postOptional",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.query1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.customHeader1],
  serializer
};
const postReservedWordsOperationSpec: coreClient.OperationSpec = {
  path: "/parameterGrouping/postReservedWords",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.fromParam, Parameters.accept1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const postMultiParamGroupsOperationSpec: coreClient.OperationSpec = {
  path: "/parameterGrouping/postMultipleParameterGroups",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.queryOne, Parameters.queryTwo],
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.accept,
    Parameters.headerOne,
    Parameters.headerTwo
  ],
  serializer
};
const postSharedParameterGroupObjectOperationSpec: coreClient.OperationSpec = {
  path: "/parameterGrouping/sharedParameterGroupObject",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.queryOne],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.headerOne],
  serializer
};
