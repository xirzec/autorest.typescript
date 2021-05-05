/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  MongoDBDatabaseGetResults,
  MongoDBResourcesListMongoDBDatabasesOptionalParams,
  MongoDBCollectionGetResults,
  MongoDBResourcesListMongoDBCollectionsOptionalParams,
  MongoDBResourcesGetMongoDBDatabaseOptionalParams,
  MongoDBResourcesGetMongoDBDatabaseResponse,
  MongoDBDatabaseCreateUpdateParameters,
  MongoDBResourcesCreateUpdateMongoDBDatabaseOptionalParams,
  MongoDBResourcesCreateUpdateMongoDBDatabaseResponse,
  MongoDBResourcesDeleteMongoDBDatabaseOptionalParams,
  MongoDBResourcesGetMongoDBDatabaseThroughputOptionalParams,
  MongoDBResourcesGetMongoDBDatabaseThroughputResponse,
  ThroughputSettingsUpdateParameters,
  MongoDBResourcesUpdateMongoDBDatabaseThroughputOptionalParams,
  MongoDBResourcesUpdateMongoDBDatabaseThroughputResponse,
  MongoDBResourcesGetMongoDBCollectionOptionalParams,
  MongoDBResourcesGetMongoDBCollectionResponse,
  MongoDBCollectionCreateUpdateParameters,
  MongoDBResourcesCreateUpdateMongoDBCollectionOptionalParams,
  MongoDBResourcesCreateUpdateMongoDBCollectionResponse,
  MongoDBResourcesDeleteMongoDBCollectionOptionalParams,
  MongoDBResourcesGetMongoDBCollectionThroughputOptionalParams,
  MongoDBResourcesGetMongoDBCollectionThroughputResponse,
  MongoDBResourcesUpdateMongoDBCollectionThroughputOptionalParams,
  MongoDBResourcesUpdateMongoDBCollectionThroughputResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a MongoDBResources. */
export interface MongoDBResources {
  /**
   * Lists the MongoDB databases under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  listMongoDBDatabases(
    resourceGroupName: string,
    accountName: string,
    options?: MongoDBResourcesListMongoDBDatabasesOptionalParams
  ): PagedAsyncIterableIterator<MongoDBDatabaseGetResults>;
  /**
   * Lists the MongoDB collection under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param options The options parameters.
   */
  listMongoDBCollections(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    options?: MongoDBResourcesListMongoDBCollectionsOptionalParams
  ): PagedAsyncIterableIterator<MongoDBCollectionGetResults>;
  /**
   * Gets the MongoDB databases under an existing Azure Cosmos DB database account with the provided
   * name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param options The options parameters.
   */
  getMongoDBDatabase(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    options?: MongoDBResourcesGetMongoDBDatabaseOptionalParams
  ): Promise<MongoDBResourcesGetMongoDBDatabaseResponse>;
  /**
   * Create or updates Azure Cosmos DB MongoDB database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param createUpdateMongoDBDatabaseParameters The parameters to provide for the current MongoDB
   *                                              database.
   * @param options The options parameters.
   */
  createUpdateMongoDBDatabase(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    createUpdateMongoDBDatabaseParameters: MongoDBDatabaseCreateUpdateParameters,
    options?: MongoDBResourcesCreateUpdateMongoDBDatabaseOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<MongoDBResourcesCreateUpdateMongoDBDatabaseResponse>,
      MongoDBResourcesCreateUpdateMongoDBDatabaseResponse
    >
  >;
  /**
   * Deletes an existing Azure Cosmos DB MongoDB database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param options The options parameters.
   */
  deleteMongoDBDatabase(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    options?: MongoDBResourcesDeleteMongoDBDatabaseOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets the RUs per second of the MongoDB database under an existing Azure Cosmos DB database account
   * with the provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param options The options parameters.
   */
  getMongoDBDatabaseThroughput(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    options?: MongoDBResourcesGetMongoDBDatabaseThroughputOptionalParams
  ): Promise<MongoDBResourcesGetMongoDBDatabaseThroughputResponse>;
  /**
   * Update RUs per second of the an Azure Cosmos DB MongoDB database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
   *                                   MongoDB database.
   * @param options The options parameters.
   */
  updateMongoDBDatabaseThroughput(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: MongoDBResourcesUpdateMongoDBDatabaseThroughputOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        MongoDBResourcesUpdateMongoDBDatabaseThroughputResponse
      >,
      MongoDBResourcesUpdateMongoDBDatabaseThroughputResponse
    >
  >;
  /**
   * Gets the MongoDB collection under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param collectionName Cosmos DB collection name.
   * @param options The options parameters.
   */
  getMongoDBCollection(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    collectionName: string,
    options?: MongoDBResourcesGetMongoDBCollectionOptionalParams
  ): Promise<MongoDBResourcesGetMongoDBCollectionResponse>;
  /**
   * Create or update an Azure Cosmos DB MongoDB Collection
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param collectionName Cosmos DB collection name.
   * @param createUpdateMongoDBCollectionParameters The parameters to provide for the current MongoDB
   *                                                Collection.
   * @param options The options parameters.
   */
  createUpdateMongoDBCollection(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    collectionName: string,
    createUpdateMongoDBCollectionParameters: MongoDBCollectionCreateUpdateParameters,
    options?: MongoDBResourcesCreateUpdateMongoDBCollectionOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<MongoDBResourcesCreateUpdateMongoDBCollectionResponse>,
      MongoDBResourcesCreateUpdateMongoDBCollectionResponse
    >
  >;
  /**
   * Deletes an existing Azure Cosmos DB MongoDB Collection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param collectionName Cosmos DB collection name.
   * @param options The options parameters.
   */
  deleteMongoDBCollection(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    collectionName: string,
    options?: MongoDBResourcesDeleteMongoDBCollectionOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets the RUs per second of the MongoDB collection under an existing Azure Cosmos DB database account
   * with the provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param collectionName Cosmos DB collection name.
   * @param options The options parameters.
   */
  getMongoDBCollectionThroughput(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    collectionName: string,
    options?: MongoDBResourcesGetMongoDBCollectionThroughputOptionalParams
  ): Promise<MongoDBResourcesGetMongoDBCollectionThroughputResponse>;
  /**
   * Update the RUs per second of an Azure Cosmos DB MongoDB collection
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param collectionName Cosmos DB collection name.
   * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
   *                                   MongoDB collection.
   * @param options The options parameters.
   */
  updateMongoDBCollectionThroughput(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    collectionName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: MongoDBResourcesUpdateMongoDBCollectionThroughputOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        MongoDBResourcesUpdateMongoDBCollectionThroughputResponse
      >,
      MongoDBResourcesUpdateMongoDBCollectionThroughputResponse
    >
  >;
}
