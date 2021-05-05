/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ServiceEndpointPolicies } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ServiceEndpointPolicy,
  ServiceEndpointPoliciesListNextOptionalParams,
  ServiceEndpointPoliciesListOptionalParams,
  ServiceEndpointPoliciesListByResourceGroupNextOptionalParams,
  ServiceEndpointPoliciesListByResourceGroupOptionalParams,
  ServiceEndpointPoliciesDeleteOptionalParams,
  ServiceEndpointPoliciesGetOptionalParams,
  ServiceEndpointPoliciesGetResponse,
  ServiceEndpointPoliciesCreateOrUpdateOptionalParams,
  ServiceEndpointPoliciesCreateOrUpdateResponse,
  TagsObject,
  ServiceEndpointPoliciesUpdateTagsOptionalParams,
  ServiceEndpointPoliciesUpdateTagsResponse,
  ServiceEndpointPoliciesListResponse,
  ServiceEndpointPoliciesListByResourceGroupResponse,
  ServiceEndpointPoliciesListNextResponse,
  ServiceEndpointPoliciesListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a ServiceEndpointPolicies. */
export class ServiceEndpointPoliciesImpl implements ServiceEndpointPolicies {
  private readonly client: NetworkManagementClientContext;

  /**
   * Initialize a new instance of the class ServiceEndpointPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the service endpoint policies in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ServiceEndpointPoliciesListOptionalParams
  ): PagedAsyncIterableIterator<ServiceEndpointPolicy> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: ServiceEndpointPoliciesListOptionalParams
  ): AsyncIterableIterator<ServiceEndpointPolicy[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: ServiceEndpointPoliciesListOptionalParams
  ): AsyncIterableIterator<ServiceEndpointPolicy> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets all service endpoint Policies in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ServiceEndpointPoliciesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ServiceEndpointPolicy> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ServiceEndpointPoliciesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ServiceEndpointPolicy[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ServiceEndpointPoliciesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ServiceEndpointPolicy> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified service endpoint policy.
   * @param resourceGroupName The name of the resource group.
   * @param serviceEndpointPolicyName The name of the service endpoint policy.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    serviceEndpointPolicyName: string,
    options?: ServiceEndpointPoliciesDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serviceEndpointPolicyName,
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
   * Gets the specified service Endpoint Policies in a specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param serviceEndpointPolicyName The name of the service endpoint policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceEndpointPolicyName: string,
    options?: ServiceEndpointPoliciesGetOptionalParams
  ): Promise<ServiceEndpointPoliciesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serviceEndpointPolicyName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<ServiceEndpointPoliciesGetResponse>;
  }

  /**
   * Creates or updates a service Endpoint Policies.
   * @param resourceGroupName The name of the resource group.
   * @param serviceEndpointPolicyName The name of the service endpoint policy.
   * @param parameters Parameters supplied to the create or update service endpoint policy operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    serviceEndpointPolicyName: string,
    parameters: ServiceEndpointPolicy,
    options?: ServiceEndpointPoliciesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServiceEndpointPoliciesCreateOrUpdateResponse>,
      ServiceEndpointPoliciesCreateOrUpdateResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serviceEndpointPolicyName,
      parameters,
      options: this.getOperationOptions(options, "azure-async-operation")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        ServiceEndpointPoliciesCreateOrUpdateResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      createOrUpdateOperationSpec,
      sendOperation,
      "azure-async-operation"
    );
  }

  /**
   * Updates tags of a service endpoint policy.
   * @param resourceGroupName The name of the resource group.
   * @param serviceEndpointPolicyName The name of the service endpoint policy.
   * @param parameters Parameters supplied to update service endpoint policy tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    serviceEndpointPolicyName: string,
    parameters: TagsObject,
    options?: ServiceEndpointPoliciesUpdateTagsOptionalParams
  ): Promise<ServiceEndpointPoliciesUpdateTagsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serviceEndpointPolicyName,
      parameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateTagsOperationSpec
    ) as Promise<ServiceEndpointPoliciesUpdateTagsResponse>;
  }

  /**
   * Gets all the service endpoint policies in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: ServiceEndpointPoliciesListOptionalParams
  ): Promise<ServiceEndpointPoliciesListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<ServiceEndpointPoliciesListResponse>;
  }

  /**
   * Gets all service endpoint Policies in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ServiceEndpointPoliciesListByResourceGroupOptionalParams
  ): Promise<ServiceEndpointPoliciesListByResourceGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupOperationSpec
    ) as Promise<ServiceEndpointPoliciesListByResourceGroupResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ServiceEndpointPoliciesListNextOptionalParams
  ): Promise<ServiceEndpointPoliciesListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<ServiceEndpointPoliciesListNextResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ServiceEndpointPoliciesListByResourceGroupNextOptionalParams
  ): Promise<ServiceEndpointPoliciesListByResourceGroupNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupNextOperationSpec
    ) as Promise<ServiceEndpointPoliciesListByResourceGroupNextResponse>;
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/serviceEndpointPolicies/{serviceEndpointPolicyName}",
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
    Parameters.serviceEndpointPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/serviceEndpointPolicies/{serviceEndpointPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceEndpointPolicy
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
    Parameters.serviceEndpointPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/serviceEndpointPolicies/{serviceEndpointPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceEndpointPolicy
    },
    201: {
      bodyMapper: Mappers.ServiceEndpointPolicy
    },
    202: {
      bodyMapper: Mappers.ServiceEndpointPolicy
    },
    204: {
      bodyMapper: Mappers.ServiceEndpointPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters46,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceEndpointPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/serviceEndpointPolicies/{serviceEndpointPolicyName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceEndpointPolicy
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
    Parameters.serviceEndpointPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/ServiceEndpointPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceEndpointPolicyListResult
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
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/serviceEndpointPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceEndpointPolicyListResult
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
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceEndpointPolicyListResult
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
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceEndpointPolicyListResult
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
