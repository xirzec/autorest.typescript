/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ManagedInstanceKey,
  ManagedInstanceKeysListByInstanceOptionalParams,
  ManagedInstanceKeysGetOptionalParams,
  ManagedInstanceKeysGetResponse,
  ManagedInstanceKeysCreateOrUpdateOptionalParams,
  ManagedInstanceKeysCreateOrUpdateResponse,
  ManagedInstanceKeysDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedInstanceKeys. */
export interface ManagedInstanceKeys {
  /**
   * Gets a list of managed instance keys.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceKeysListByInstanceOptionalParams
  ): PagedAsyncIterableIterator<ManagedInstanceKey>;
  /**
   * Gets a managed instance key.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param keyName The name of the managed instance key to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    keyName: string,
    options?: ManagedInstanceKeysGetOptionalParams
  ): Promise<ManagedInstanceKeysGetResponse>;
  /**
   * Creates or updates a managed instance key.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param keyName The name of the managed instance key to be operated on (updated or created).
   * @param parameters The requested managed instance key resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    keyName: string,
    parameters: ManagedInstanceKey,
    options?: ManagedInstanceKeysCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ManagedInstanceKeysCreateOrUpdateResponse>,
      ManagedInstanceKeysCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a managed instance key.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param keyName The name of the managed instance key to be operated on (updated or created).
   * @param parameters The requested managed instance key resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    keyName: string,
    parameters: ManagedInstanceKey,
    options?: ManagedInstanceKeysCreateOrUpdateOptionalParams
  ): Promise<ManagedInstanceKeysCreateOrUpdateResponse>;
  /**
   * Deletes the managed instance key with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param keyName The name of the managed instance key to be deleted.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    managedInstanceName: string,
    keyName: string,
    options?: ManagedInstanceKeysDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the managed instance key with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param keyName The name of the managed instance key to be deleted.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    keyName: string,
    options?: ManagedInstanceKeysDeleteOptionalParams
  ): Promise<void>;
}
