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
  SyncDatabaseIdProperties,
  SyncGroupsListSyncDatabaseIdsNextOptionalParams,
  SyncGroupsListSyncDatabaseIdsOptionalParams,
  SyncFullSchemaProperties,
  SyncGroupsListHubSchemasNextOptionalParams,
  SyncGroupsListHubSchemasOptionalParams,
  SyncGroupLogProperties,
  Enum21,
  SyncGroupsListLogsNextOptionalParams,
  SyncGroupsListLogsOptionalParams,
  SyncGroup,
  SyncGroupsListByDatabaseNextOptionalParams,
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
    typeParam: Enum21,
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
  refreshHubSchema(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: SyncGroupsRefreshHubSchemaOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
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
  ): Promise<coreHttp.RestResponse>;
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
  ): Promise<coreHttp.RestResponse>;
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
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    parameters: SyncGroup,
    options?: SyncGroupsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SyncGroupsCreateOrUpdateResponse>,
      SyncGroupsCreateOrUpdateResponse
    >
  >;
  /**
   * Deletes a sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: SyncGroupsDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
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
  update(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    parameters: SyncGroup,
    options?: SyncGroupsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SyncGroupsUpdateResponse>,
      SyncGroupsUpdateResponse
    >
  >;
}
