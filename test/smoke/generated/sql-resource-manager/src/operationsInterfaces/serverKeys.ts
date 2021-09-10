/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ServerKey,
  ServerKeysListByServerOptionalParams,
  ServerKeysGetOptionalParams,
  ServerKeysGetResponse,
  ServerKeysCreateOrUpdateOptionalParams,
  ServerKeysCreateOrUpdateResponse,
  ServerKeysDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServerKeys. */
export interface ServerKeys {
  /**
   * Gets a list of server keys.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerKeysListByServerOptionalParams
  ): PagedAsyncIterableIterator<ServerKey>;
  /**
   * Gets a server key.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param keyName The name of the server key to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    keyName: string,
    options?: ServerKeysGetOptionalParams
  ): Promise<ServerKeysGetResponse>;
  /**
   * Creates or updates a server key.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param keyName The name of the server key to be operated on (updated or created). The key name is
   *                required to be in the format of 'vault_key_version'. For example, if the keyId is
   *                https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901, then the
   *                server key name should be formatted as: YourVaultName_YourKeyName_01234567890123456789012345678901
   * @param parameters The requested server key resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    keyName: string,
    parameters: ServerKey,
    options?: ServerKeysCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServerKeysCreateOrUpdateResponse>,
      ServerKeysCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a server key.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param keyName The name of the server key to be operated on (updated or created). The key name is
   *                required to be in the format of 'vault_key_version'. For example, if the keyId is
   *                https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901, then the
   *                server key name should be formatted as: YourVaultName_YourKeyName_01234567890123456789012345678901
   * @param parameters The requested server key resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    keyName: string,
    parameters: ServerKey,
    options?: ServerKeysCreateOrUpdateOptionalParams
  ): Promise<ServerKeysCreateOrUpdateResponse>;
  /**
   * Deletes the server key with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param keyName The name of the server key to be deleted.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serverName: string,
    keyName: string,
    options?: ServerKeysDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the server key with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param keyName The name of the server key to be deleted.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    keyName: string,
    options?: ServerKeysDeleteOptionalParams
  ): Promise<void>;
}
