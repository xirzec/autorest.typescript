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
import {
  DeploymentOperation,
  DeploymentOperationsListAtScopeNextOptionalParams,
  DeploymentOperationsListAtScopeOptionalParams,
  DeploymentOperationsListAtTenantScopeNextOptionalParams,
  DeploymentOperationsListAtTenantScopeOptionalParams,
  DeploymentOperationsListAtManagementGroupScopeNextOptionalParams,
  DeploymentOperationsListAtManagementGroupScopeOptionalParams,
  DeploymentOperationsListAtSubscriptionScopeNextOptionalParams,
  DeploymentOperationsListAtSubscriptionScopeOptionalParams,
  DeploymentOperationsListNextOptionalParams,
  DeploymentOperationsListOptionalParams,
  DeploymentOperationsGetAtScopeOptionalParams,
  DeploymentOperationsGetAtScopeResponse,
  DeploymentOperationsGetAtTenantScopeOptionalParams,
  DeploymentOperationsGetAtTenantScopeResponse,
  DeploymentOperationsGetAtManagementGroupScopeOptionalParams,
  DeploymentOperationsGetAtManagementGroupScopeResponse,
  DeploymentOperationsGetAtSubscriptionScopeOptionalParams,
  DeploymentOperationsGetAtSubscriptionScopeResponse,
  DeploymentOperationsGetOptionalParams,
  DeploymentOperationsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DeploymentOperations. */
export interface DeploymentOperations {
  /**
   * Gets all deployments operations for a deployment.
   * @param scope The scope of a deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  listAtScope(
    scope: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation>;
  /**
   * Gets all deployments operations for a deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  listAtTenantScope(
    deploymentName: string,
    options?: DeploymentOperationsListAtTenantScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation>;
  /**
   * Gets all deployments operations for a deployment.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  listAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtManagementGroupScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation>;
  /**
   * Gets all deployments operations for a deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  listAtSubscriptionScope(
    deploymentName: string,
    options?: DeploymentOperationsListAtSubscriptionScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation>;
  /**
   * Gets all deployments operations for a deployment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentOperationsListOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation>;
  /**
   * Gets a deployments operation.
   * @param scope The scope of a deployment.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The options parameters.
   */
  getAtScope(
    scope: string,
    deploymentName: string,
    operationId: string,
    options?: DeploymentOperationsGetAtScopeOptionalParams
  ): Promise<DeploymentOperationsGetAtScopeResponse>;
  /**
   * Gets a deployments operation.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The options parameters.
   */
  getAtTenantScope(
    deploymentName: string,
    operationId: string,
    options?: DeploymentOperationsGetAtTenantScopeOptionalParams
  ): Promise<DeploymentOperationsGetAtTenantScopeResponse>;
  /**
   * Gets a deployments operation.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The options parameters.
   */
  getAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    operationId: string,
    options?: DeploymentOperationsGetAtManagementGroupScopeOptionalParams
  ): Promise<DeploymentOperationsGetAtManagementGroupScopeResponse>;
  /**
   * Gets a deployments operation.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The options parameters.
   */
  getAtSubscriptionScope(
    deploymentName: string,
    operationId: string,
    options?: DeploymentOperationsGetAtSubscriptionScopeOptionalParams
  ): Promise<DeploymentOperationsGetAtSubscriptionScopeResponse>;
  /**
   * Gets a deployments operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    deploymentName: string,
    operationId: string,
    options?: DeploymentOperationsGetOptionalParams
  ): Promise<DeploymentOperationsGetResponse>;
}
