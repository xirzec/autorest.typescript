/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";
import {
  PrivateLinkResource,
  PrivateLinkResourcesListByDatabaseAccountResponse,
  PrivateLinkResourcesGetResponse
} from "../models";

/** Class representing a PrivateLinkResources. */
export class PrivateLinkResources {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Initialize a new instance of the class PrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the private link resources that need to be created for a Cosmos DB account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  public listByDatabaseAccount(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<PrivateLinkResource> {
    const iter = this.listByDatabaseAccountPagingAll(
      resourceGroupName,
      accountName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByDatabaseAccountPagingPage(
          resourceGroupName,
          accountName,
          options
        );
      }
    };
  }

  private async *listByDatabaseAccountPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<PrivateLinkResource[]> {
    let result = await this._listByDatabaseAccount(
      resourceGroupName,
      accountName,
      options
    );
    yield result.value || [];
  }

  private async *listByDatabaseAccountPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<PrivateLinkResource> {
    for await (const page of this.listByDatabaseAccountPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the private link resources that need to be created for a Cosmos DB account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  private _listByDatabaseAccount(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateLinkResourcesListByDatabaseAccountResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByDatabaseAccountOperationSpec
    ) as Promise<PrivateLinkResourcesListByDatabaseAccountResponse>;
  }

  /**
   * Gets the private link resources that need to be created for a Cosmos DB account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param groupName The name of the private link resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    groupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateLinkResourcesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      groupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<PrivateLinkResourcesGetResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listByDatabaseAccountOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateLinkResources/{groupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResource
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.groupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
