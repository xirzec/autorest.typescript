/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { CapacityReservationGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import {
  CapacityReservationGroup,
  CapacityReservationGroupsListByResourceGroupNextOptionalParams,
  CapacityReservationGroupsListByResourceGroupOptionalParams,
  CapacityReservationGroupsListBySubscriptionNextOptionalParams,
  CapacityReservationGroupsListBySubscriptionOptionalParams,
  CapacityReservationGroupsCreateOrUpdateOptionalParams,
  CapacityReservationGroupsCreateOrUpdateResponse,
  CapacityReservationGroupUpdate,
  CapacityReservationGroupsUpdateOptionalParams,
  CapacityReservationGroupsUpdateResponse,
  CapacityReservationGroupsDeleteOptionalParams,
  CapacityReservationGroupsGetOptionalParams,
  CapacityReservationGroupsGetResponse,
  CapacityReservationGroupsListByResourceGroupResponse,
  CapacityReservationGroupsListBySubscriptionResponse,
  CapacityReservationGroupsListByResourceGroupNextResponse,
  CapacityReservationGroupsListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing CapacityReservationGroups operations. */
export class CapacityReservationGroupsImpl
  implements CapacityReservationGroups {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class CapacityReservationGroups class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the capacity reservation groups in the specified resource group. Use the nextLink
   * property in the response to get the next page of capacity reservation groups.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: CapacityReservationGroupsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<CapacityReservationGroup> {
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
    options?: CapacityReservationGroupsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<CapacityReservationGroup[]> {
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
    options?: CapacityReservationGroupsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<CapacityReservationGroup> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the capacity reservation groups in the subscription. Use the nextLink property in the
   * response to get the next page of capacity reservation groups.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: CapacityReservationGroupsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<CapacityReservationGroup> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: CapacityReservationGroupsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<CapacityReservationGroup[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: CapacityReservationGroupsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<CapacityReservationGroup> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * The operation to create or update a capacity reservation group. When updating a capacity reservation
   * group, only tags may be modified. Please refer to https://aka.ms/CapacityReservation for more
   * details.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param parameters Parameters supplied to the Create capacity reservation Group.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    parameters: CapacityReservationGroup,
    options?: CapacityReservationGroupsCreateOrUpdateOptionalParams
  ): Promise<CapacityReservationGroupsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, capacityReservationGroupName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * The operation to update a capacity reservation group. When updating a capacity reservation group,
   * only tags may be modified.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param parameters Parameters supplied to the Update capacity reservation Group operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    parameters: CapacityReservationGroupUpdate,
    options?: CapacityReservationGroupsUpdateOptionalParams
  ): Promise<CapacityReservationGroupsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, capacityReservationGroupName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * The operation to delete a capacity reservation group. This operation is allowed only if all the
   * associated resources are disassociated from the reservation group and all capacity reservations
   * under the reservation group have also been deleted. Please refer to
   * https://aka.ms/CapacityReservation for more details.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    options?: CapacityReservationGroupsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, capacityReservationGroupName, options },
      deleteOperationSpec
    );
  }

  /**
   * The operation that retrieves information about a capacity reservation group.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    options?: CapacityReservationGroupsGetOptionalParams
  ): Promise<CapacityReservationGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, capacityReservationGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Lists all of the capacity reservation groups in the specified resource group. Use the nextLink
   * property in the response to get the next page of capacity reservation groups.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: CapacityReservationGroupsListByResourceGroupOptionalParams
  ): Promise<CapacityReservationGroupsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Lists all of the capacity reservation groups in the subscription. Use the nextLink property in the
   * response to get the next page of capacity reservation groups.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: CapacityReservationGroupsListBySubscriptionOptionalParams
  ): Promise<CapacityReservationGroupsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
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
    options?: CapacityReservationGroupsListByResourceGroupNextOptionalParams
  ): Promise<CapacityReservationGroupsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: CapacityReservationGroupsListBySubscriptionNextOptionalParams
  ): Promise<CapacityReservationGroupsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservationGroup
    },
    201: {
      bodyMapper: Mappers.CapacityReservationGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters24,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.capacityReservationGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservationGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters25,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.capacityReservationGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
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
    Parameters.capacityReservationGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservationGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand4],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.capacityReservationGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservationGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand5],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/capacityReservationGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservationGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand5],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservationGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand5],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservationGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};