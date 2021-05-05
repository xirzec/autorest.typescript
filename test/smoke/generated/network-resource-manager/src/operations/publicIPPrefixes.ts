/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PublicIPPrefixes } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  PublicIPPrefix,
  PublicIPPrefixesListAllNextOptionalParams,
  PublicIPPrefixesListAllOptionalParams,
  PublicIPPrefixesListNextOptionalParams,
  PublicIPPrefixesListOptionalParams,
  PublicIPPrefixesDeleteOptionalParams,
  PublicIPPrefixesGetOptionalParams,
  PublicIPPrefixesGetResponse,
  PublicIPPrefixesCreateOrUpdateOptionalParams,
  PublicIPPrefixesCreateOrUpdateResponse,
  TagsObject,
  PublicIPPrefixesUpdateTagsOptionalParams,
  PublicIPPrefixesUpdateTagsResponse,
  PublicIPPrefixesListAllResponse,
  PublicIPPrefixesListResponse,
  PublicIPPrefixesListAllNextResponse,
  PublicIPPrefixesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a PublicIPPrefixes. */
export class PublicIPPrefixesImpl implements PublicIPPrefixes {
  private readonly client: NetworkManagementClientContext;

  /**
   * Initialize a new instance of the class PublicIPPrefixes class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the public IP prefixes in a subscription.
   * @param options The options parameters.
   */
  public listAll(
    options?: PublicIPPrefixesListAllOptionalParams
  ): PagedAsyncIterableIterator<PublicIPPrefix> {
    const iter = this.listAllPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAllPagingPage(options);
      }
    };
  }

  private async *listAllPagingPage(
    options?: PublicIPPrefixesListAllOptionalParams
  ): AsyncIterableIterator<PublicIPPrefix[]> {
    let result = await this._listAll(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAllNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAllPagingAll(
    options?: PublicIPPrefixesListAllOptionalParams
  ): AsyncIterableIterator<PublicIPPrefix> {
    for await (const page of this.listAllPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets all public IP prefixes in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: PublicIPPrefixesListOptionalParams
  ): PagedAsyncIterableIterator<PublicIPPrefix> {
    const iter = this.listPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    options?: PublicIPPrefixesListOptionalParams
  ): AsyncIterableIterator<PublicIPPrefix[]> {
    let result = await this._list(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    options?: PublicIPPrefixesListOptionalParams
  ): AsyncIterableIterator<PublicIPPrefix> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * Deletes the specified public IP prefix.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the PublicIpPrefix.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    publicIpPrefixName: string,
    options?: PublicIPPrefixesDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      publicIpPrefixName,
      options: this.getOperationOptions(options, "location")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      deleteOperationSpec,
      sendOperation,
      "location"
    );
  }

  /**
   * Gets the specified public IP prefix in a specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the public IP prefix.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    publicIpPrefixName: string,
    options?: PublicIPPrefixesGetOptionalParams
  ): Promise<PublicIPPrefixesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      publicIpPrefixName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<PublicIPPrefixesGetResponse>;
  }

  /**
   * Creates or updates a static or dynamic public IP prefix.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the public IP prefix.
   * @param parameters Parameters supplied to the create or update public IP prefix operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    publicIpPrefixName: string,
    parameters: PublicIPPrefix,
    options?: PublicIPPrefixesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PublicIPPrefixesCreateOrUpdateResponse>,
      PublicIPPrefixesCreateOrUpdateResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      publicIpPrefixName,
      parameters,
      options: this.getOperationOptions(options, "location")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        PublicIPPrefixesCreateOrUpdateResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      createOrUpdateOperationSpec,
      sendOperation,
      "location"
    );
  }

  /**
   * Updates public IP prefix tags.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the public IP prefix.
   * @param parameters Parameters supplied to update public IP prefix tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    publicIpPrefixName: string,
    parameters: TagsObject,
    options?: PublicIPPrefixesUpdateTagsOptionalParams
  ): Promise<PublicIPPrefixesUpdateTagsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      publicIpPrefixName,
      parameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateTagsOperationSpec
    ) as Promise<PublicIPPrefixesUpdateTagsResponse>;
  }

  /**
   * Gets all the public IP prefixes in a subscription.
   * @param options The options parameters.
   */
  private _listAll(
    options?: PublicIPPrefixesListAllOptionalParams
  ): Promise<PublicIPPrefixesListAllResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listAllOperationSpec
    ) as Promise<PublicIPPrefixesListAllResponse>;
  }

  /**
   * Gets all public IP prefixes in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: PublicIPPrefixesListOptionalParams
  ): Promise<PublicIPPrefixesListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<PublicIPPrefixesListResponse>;
  }

  /**
   * ListAllNext
   * @param nextLink The nextLink from the previous successful call to the ListAll method.
   * @param options The options parameters.
   */
  private _listAllNext(
    nextLink: string,
    options?: PublicIPPrefixesListAllNextOptionalParams
  ): Promise<PublicIPPrefixesListAllNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listAllNextOperationSpec
    ) as Promise<PublicIPPrefixesListAllNextResponse>;
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: PublicIPPrefixesListNextOptionalParams
  ): Promise<PublicIPPrefixesListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<PublicIPPrefixesListNextResponse>;
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

const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIpPrefixName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.publicIpPrefixName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIpPrefixName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPPrefix
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.publicIpPrefixName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIpPrefixName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPPrefix
    },
    201: {
      bodyMapper: Mappers.PublicIPPrefix
    },
    202: {
      bodyMapper: Mappers.PublicIPPrefix
    },
    204: {
      bodyMapper: Mappers.PublicIPPrefix
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters43,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.publicIpPrefixName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIpPrefixName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPPrefix
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.publicIpPrefixName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listAllOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/publicIPPrefixes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPPrefixListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPPrefixListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAllNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPPrefixListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPPrefixListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
