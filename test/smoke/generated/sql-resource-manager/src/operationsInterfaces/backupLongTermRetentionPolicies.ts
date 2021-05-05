/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  LongTermRetentionPolicyName,
  BackupLongTermRetentionPoliciesGetOptionalParams,
  BackupLongTermRetentionPoliciesGetResponse,
  BackupLongTermRetentionPolicy,
  BackupLongTermRetentionPoliciesCreateOrUpdateOptionalParams,
  BackupLongTermRetentionPoliciesCreateOrUpdateResponse,
  BackupLongTermRetentionPoliciesListByDatabaseOptionalParams,
  BackupLongTermRetentionPoliciesListByDatabaseResponse
} from "../models";

/** Interface representing a BackupLongTermRetentionPolicies. */
export interface BackupLongTermRetentionPolicies {
  /**
   * Gets a database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param policyName The policy name. Should always be Default.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    policyName: LongTermRetentionPolicyName,
    options?: BackupLongTermRetentionPoliciesGetOptionalParams
  ): Promise<BackupLongTermRetentionPoliciesGetResponse>;
  /**
   * Sets a database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param policyName The policy name. Should always be Default.
   * @param parameters The long term retention policy info.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    policyName: LongTermRetentionPolicyName,
    parameters: BackupLongTermRetentionPolicy,
    options?: BackupLongTermRetentionPoliciesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<BackupLongTermRetentionPoliciesCreateOrUpdateResponse>,
      BackupLongTermRetentionPoliciesCreateOrUpdateResponse
    >
  >;
  /**
   * Gets a database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: BackupLongTermRetentionPoliciesListByDatabaseOptionalParams
  ): Promise<BackupLongTermRetentionPoliciesListByDatabaseResponse>;
}
