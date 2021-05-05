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
  ListContainerItem,
  BlobContainersListNextOptionalParams,
  BlobContainersListOptionalParams,
  BlobContainer,
  BlobContainersCreateOptionalParams,
  BlobContainersCreateResponse,
  BlobContainersUpdateOptionalParams,
  BlobContainersUpdateResponse,
  BlobContainersGetOptionalParams,
  BlobContainersGetResponse,
  BlobContainersDeleteOptionalParams,
  LegalHold,
  BlobContainersSetLegalHoldOptionalParams,
  BlobContainersSetLegalHoldResponse,
  BlobContainersClearLegalHoldOptionalParams,
  BlobContainersClearLegalHoldResponse,
  BlobContainersCreateOrUpdateImmutabilityPolicyOptionalParams,
  BlobContainersCreateOrUpdateImmutabilityPolicyResponse,
  BlobContainersGetImmutabilityPolicyOptionalParams,
  BlobContainersGetImmutabilityPolicyResponse,
  BlobContainersDeleteImmutabilityPolicyOptionalParams,
  BlobContainersDeleteImmutabilityPolicyResponse,
  BlobContainersLockImmutabilityPolicyOptionalParams,
  BlobContainersLockImmutabilityPolicyResponse,
  BlobContainersExtendImmutabilityPolicyOptionalParams,
  BlobContainersExtendImmutabilityPolicyResponse,
  BlobContainersLeaseOptionalParams,
  BlobContainersLeaseResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BlobContainers. */
export interface BlobContainers {
  /**
   * Lists all containers and does not support a prefix like data plane. Also SRP today does not return
   * continuation token.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: BlobContainersListOptionalParams
  ): PagedAsyncIterableIterator<ListContainerItem>;
  /**
   * Creates a new container under the specified account as described by request body. The container
   * resource includes metadata and properties for that container. It does not include a list of the
   * blobs contained by the container.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param containerName The name of the blob container within the specified storage account. Blob
   *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
   *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   *                      number.
   * @param blobContainer Properties of the blob container to create.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    accountName: string,
    containerName: string,
    blobContainer: BlobContainer,
    options?: BlobContainersCreateOptionalParams
  ): Promise<BlobContainersCreateResponse>;
  /**
   * Updates container properties as specified in request body. Properties not mentioned in the request
   * will be unchanged. Update fails if the specified container doesn't already exist.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param containerName The name of the blob container within the specified storage account. Blob
   *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
   *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   *                      number.
   * @param blobContainer Properties to update for the blob container.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    containerName: string,
    blobContainer: BlobContainer,
    options?: BlobContainersUpdateOptionalParams
  ): Promise<BlobContainersUpdateResponse>;
  /**
   * Gets properties of a specified container.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param containerName The name of the blob container within the specified storage account. Blob
   *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
   *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   *                      number.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    containerName: string,
    options?: BlobContainersGetOptionalParams
  ): Promise<BlobContainersGetResponse>;
  /**
   * Deletes specified container under its account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param containerName The name of the blob container within the specified storage account. Blob
   *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
   *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   *                      number.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    containerName: string,
    options?: BlobContainersDeleteOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Sets legal hold tags. Setting the same tag results in an idempotent operation. SetLegalHold follows
   * an append pattern and does not clear out the existing tags that are not specified in the request.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param containerName The name of the blob container within the specified storage account. Blob
   *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
   *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   *                      number.
   * @param legalHold The LegalHold property that will be set to a blob container.
   * @param options The options parameters.
   */
  setLegalHold(
    resourceGroupName: string,
    accountName: string,
    containerName: string,
    legalHold: LegalHold,
    options?: BlobContainersSetLegalHoldOptionalParams
  ): Promise<BlobContainersSetLegalHoldResponse>;
  /**
   * Clears legal hold tags. Clearing the same or non-existent tag results in an idempotent operation.
   * ClearLegalHold clears out only the specified tags in the request.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param containerName The name of the blob container within the specified storage account. Blob
   *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
   *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   *                      number.
   * @param legalHold The LegalHold property that will be clear from a blob container.
   * @param options The options parameters.
   */
  clearLegalHold(
    resourceGroupName: string,
    accountName: string,
    containerName: string,
    legalHold: LegalHold,
    options?: BlobContainersClearLegalHoldOptionalParams
  ): Promise<BlobContainersClearLegalHoldResponse>;
  /**
   * Creates or updates an unlocked immutability policy. ETag in If-Match is honored if given but not
   * required for this operation.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param containerName The name of the blob container within the specified storage account. Blob
   *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
   *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   *                      number.
   * @param options The options parameters.
   */
  createOrUpdateImmutabilityPolicy(
    resourceGroupName: string,
    accountName: string,
    containerName: string,
    options?: BlobContainersCreateOrUpdateImmutabilityPolicyOptionalParams
  ): Promise<BlobContainersCreateOrUpdateImmutabilityPolicyResponse>;
  /**
   * Gets the existing immutability policy along with the corresponding ETag in response headers and
   * body.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param containerName The name of the blob container within the specified storage account. Blob
   *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
   *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   *                      number.
   * @param options The options parameters.
   */
  getImmutabilityPolicy(
    resourceGroupName: string,
    accountName: string,
    containerName: string,
    options?: BlobContainersGetImmutabilityPolicyOptionalParams
  ): Promise<BlobContainersGetImmutabilityPolicyResponse>;
  /**
   * Aborts an unlocked immutability policy. The response of delete has
   * immutabilityPeriodSinceCreationInDays set to 0. ETag in If-Match is required for this operation.
   * Deleting a locked immutability policy is not allowed, only way is to delete the container after
   * deleting all blobs inside the container.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param containerName The name of the blob container within the specified storage account. Blob
   *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
   *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   *                      number.
   * @param ifMatch The entity state (ETag) version of the immutability policy to update. A value of "*"
   *                can be used to apply the operation only if the immutability policy already exists. If omitted, this
   *                operation will always be applied.
   * @param options The options parameters.
   */
  deleteImmutabilityPolicy(
    resourceGroupName: string,
    accountName: string,
    containerName: string,
    ifMatch: string,
    options?: BlobContainersDeleteImmutabilityPolicyOptionalParams
  ): Promise<BlobContainersDeleteImmutabilityPolicyResponse>;
  /**
   * Sets the ImmutabilityPolicy to Locked state. The only action allowed on a Locked policy is
   * ExtendImmutabilityPolicy action. ETag in If-Match is required for this operation.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param containerName The name of the blob container within the specified storage account. Blob
   *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
   *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   *                      number.
   * @param ifMatch The entity state (ETag) version of the immutability policy to update. A value of "*"
   *                can be used to apply the operation only if the immutability policy already exists. If omitted, this
   *                operation will always be applied.
   * @param options The options parameters.
   */
  lockImmutabilityPolicy(
    resourceGroupName: string,
    accountName: string,
    containerName: string,
    ifMatch: string,
    options?: BlobContainersLockImmutabilityPolicyOptionalParams
  ): Promise<BlobContainersLockImmutabilityPolicyResponse>;
  /**
   * Extends the immutabilityPeriodSinceCreationInDays of a locked immutabilityPolicy. The only action
   * allowed on a Locked policy will be this action. ETag in If-Match is required for this operation.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param containerName The name of the blob container within the specified storage account. Blob
   *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
   *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   *                      number.
   * @param ifMatch The entity state (ETag) version of the immutability policy to update. A value of "*"
   *                can be used to apply the operation only if the immutability policy already exists. If omitted, this
   *                operation will always be applied.
   * @param options The options parameters.
   */
  extendImmutabilityPolicy(
    resourceGroupName: string,
    accountName: string,
    containerName: string,
    ifMatch: string,
    options?: BlobContainersExtendImmutabilityPolicyOptionalParams
  ): Promise<BlobContainersExtendImmutabilityPolicyResponse>;
  /**
   * The Lease Container operation establishes and manages a lock on a container for delete operations.
   * The lock duration can be 15 to 60 seconds, or can be infinite.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param containerName The name of the blob container within the specified storage account. Blob
   *                      container names must be between 3 and 63 characters in length and use numbers, lower-case letters
   *                      and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or
   *                      number.
   * @param options The options parameters.
   */
  lease(
    resourceGroupName: string,
    accountName: string,
    containerName: string,
    options?: BlobContainersLeaseOptionalParams
  ): Promise<BlobContainersLeaseResponse>;
}
