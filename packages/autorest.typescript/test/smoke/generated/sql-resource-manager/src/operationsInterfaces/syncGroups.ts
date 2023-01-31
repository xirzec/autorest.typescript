/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  SyncDatabaseIdProperties,
  SyncGroupsListSyncDatabaseIdsOptionalParams,
  SyncFullSchemaProperties,
  SyncGroupsListHubSchemasOptionalParams,
  SyncGroupLogProperties,
  SyncGroupsType,
  SyncGroupsListLogsOptionalParams,
  SyncGroup,
  SyncGroupsListByDatabaseOptionalParams,
  SyncGroupsRefreshHubSchemaOptionalParams,
  SyncGroupsCancelSyncOptionalParams,
  SyncGroupsTriggerSyncOptionalParams,
  SyncGroupsGetOptionalParams,
  SyncGroupsGetResponse,
  SyncGroupsCreateOrUpdateOptionalParams,
  SyncGroupsCreateOrUpdateResponse,
  SyncGroupsDeleteOptionalParams,
  SyncGroupsUpdateOptionalParams,
  SyncGroupsUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SyncGroups. */
export interface SyncGroups {
  /**
   * Gets a collection of sync database ids.
   * @param locationName The name of the region where the resource is located.
   * @param options The options parameters.
   */
  listSyncDatabaseIds(
    locationName: string,
    options?: SyncGroupsListSyncDatabaseIdsOptionalParams
  ): PagedAsyncIterableIterator<SyncDatabaseIdProperties>;
  /**
   * Gets a collection of hub database schemas.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  listHubSchemas(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: SyncGroupsListHubSchemasOptionalParams
  ): PagedAsyncIterableIterator<SyncFullSchemaProperties>;
  /**
   * Gets a collection of sync group logs.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param startTime Get logs generated after this time.
   * @param endTime Get logs generated before this time.
   * @param typeParam The types of logs to retrieve.
   * @param options The options parameters.
   */
  listLogs(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    startTime: string,
    endTime: string,
    typeParam: SyncGroupsType,
    options?: SyncGroupsListLogsOptionalParams
  ): PagedAsyncIterableIterator<SyncGroupLogProperties>;
  /**
   * Lists sync groups under a hub database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param options The options parameters.
   */
  listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: SyncGroupsListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<SyncGroup>;
  /**
   * Refreshes a hub database schema.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  beginRefreshHubSchema(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: SyncGroupsRefreshHubSchemaOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Refreshes a hub database schema.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  beginRefreshHubSchemaAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: SyncGroupsRefreshHubSchemaOptionalParams
  ): Promise<void>;
  /**
   * Cancels a sync group synchronization.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  cancelSync(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: SyncGroupsCancelSyncOptionalParams
  ): Promise<void>;
  /**
   * Triggers a sync group synchronization.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  triggerSync(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: SyncGroupsTriggerSyncOptionalParams
  ): Promise<void>;
  /**
   * Gets a sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: SyncGroupsGetOptionalParams
  ): Promise<SyncGroupsGetResponse>;
  /**
   * Creates or updates a sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param parameters The requested sync group resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    parameters: SyncGroup,
    options?: SyncGroupsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SyncGroupsCreateOrUpdateResponse>,
      SyncGroupsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param parameters The requested sync group resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    parameters: SyncGroup,
    options?: SyncGroupsCreateOrUpdateOptionalParams
  ): Promise<SyncGroupsCreateOrUpdateResponse>;
  /**
   * Deletes a sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: SyncGroupsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: SyncGroupsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates a sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param parameters The requested sync group resource state.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    parameters: SyncGroup,
    options?: SyncGroupsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SyncGroupsUpdateResponse>,
      SyncGroupsUpdateResponse
    >
  >;
  /**
   * Updates a sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param parameters The requested sync group resource state.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    parameters: SyncGroup,
    options?: SyncGroupsUpdateOptionalParams
  ): Promise<SyncGroupsUpdateResponse>;
}
