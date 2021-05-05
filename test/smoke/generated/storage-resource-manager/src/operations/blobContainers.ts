/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { BlobContainers } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClientContext } from "../storageManagementClientContext";
import {
  ListContainerItem,
  BlobContainersListNextOptionalParams,
  BlobContainersListOptionalParams,
  BlobContainersListResponse,
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
  BlobContainersLeaseResponse,
  BlobContainersListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a BlobContainers. */
export class BlobContainersImpl implements BlobContainers {
  private readonly client: StorageManagementClientContext;

  /**
   * Initialize a new instance of the class BlobContainers class.
   * @param client Reference to the service client
   */
  constructor(client: StorageManagementClientContext) {
    this.client = client;
  }

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
  public list(
    resourceGroupName: string,
    accountName: string,
    options?: BlobContainersListOptionalParams
  ): PagedAsyncIterableIterator<ListContainerItem> {
    const iter = this.listPagingAll(resourceGroupName, accountName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, accountName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: BlobContainersListOptionalParams
  ): AsyncIterableIterator<ListContainerItem[]> {
    let result = await this._list(resourceGroupName, accountName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: BlobContainersListOptionalParams
  ): AsyncIterableIterator<ListContainerItem> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

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
  private _list(
    resourceGroupName: string,
    accountName: string,
    options?: BlobContainersListOptionalParams
  ): Promise<BlobContainersListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<BlobContainersListResponse>;
  }

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
  ): Promise<BlobContainersCreateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      containerName,
      blobContainer,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOperationSpec
    ) as Promise<BlobContainersCreateResponse>;
  }

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
  ): Promise<BlobContainersUpdateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      containerName,
      blobContainer,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateOperationSpec
    ) as Promise<BlobContainersUpdateResponse>;
  }

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
  ): Promise<BlobContainersGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      containerName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<BlobContainersGetResponse>;
  }

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
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      containerName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

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
  ): Promise<BlobContainersSetLegalHoldResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      containerName,
      legalHold,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      setLegalHoldOperationSpec
    ) as Promise<BlobContainersSetLegalHoldResponse>;
  }

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
  ): Promise<BlobContainersClearLegalHoldResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      containerName,
      legalHold,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      clearLegalHoldOperationSpec
    ) as Promise<BlobContainersClearLegalHoldResponse>;
  }

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
  ): Promise<BlobContainersCreateOrUpdateImmutabilityPolicyResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      containerName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOrUpdateImmutabilityPolicyOperationSpec
    ) as Promise<BlobContainersCreateOrUpdateImmutabilityPolicyResponse>;
  }

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
  ): Promise<BlobContainersGetImmutabilityPolicyResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      containerName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getImmutabilityPolicyOperationSpec
    ) as Promise<BlobContainersGetImmutabilityPolicyResponse>;
  }

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
  ): Promise<BlobContainersDeleteImmutabilityPolicyResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      containerName,
      ifMatch,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteImmutabilityPolicyOperationSpec
    ) as Promise<BlobContainersDeleteImmutabilityPolicyResponse>;
  }

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
  ): Promise<BlobContainersLockImmutabilityPolicyResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      containerName,
      ifMatch,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      lockImmutabilityPolicyOperationSpec
    ) as Promise<BlobContainersLockImmutabilityPolicyResponse>;
  }

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
  ): Promise<BlobContainersExtendImmutabilityPolicyResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      containerName,
      ifMatch,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      extendImmutabilityPolicyOperationSpec
    ) as Promise<BlobContainersExtendImmutabilityPolicyResponse>;
  }

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
  ): Promise<BlobContainersLeaseResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      containerName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      leaseOperationSpec
    ) as Promise<BlobContainersLeaseResponse>;
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: BlobContainersListNextOptionalParams
  ): Promise<BlobContainersListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<BlobContainersListNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListContainerItems
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxpagesize,
    Parameters.filter
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BlobContainer
    },
    201: {
      bodyMapper: Mappers.BlobContainer
    }
  },
  requestBody: Parameters.blobContainer,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.containerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.BlobContainer
    }
  },
  requestBody: Parameters.blobContainer,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.containerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BlobContainer
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.containerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.containerName
  ],
  serializer
};
const setLegalHoldOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/setLegalHold",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.LegalHold
    }
  },
  requestBody: Parameters.legalHold,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.containerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const clearLegalHoldOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/clearLegalHold",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.LegalHold
    }
  },
  requestBody: Parameters.legalHold,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.containerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const createOrUpdateImmutabilityPolicyOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/{immutabilityPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ImmutabilityPolicy,
      headersMapper:
        Mappers.BlobContainersCreateOrUpdateImmutabilityPolicyHeaders
    }
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.containerName,
    Parameters.immutabilityPolicyName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const getImmutabilityPolicyOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/{immutabilityPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImmutabilityPolicy,
      headersMapper: Mappers.BlobContainersGetImmutabilityPolicyHeaders
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.containerName,
    Parameters.immutabilityPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch],
  serializer
};
const deleteImmutabilityPolicyOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/{immutabilityPolicyName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.ImmutabilityPolicy,
      headersMapper: Mappers.BlobContainersDeleteImmutabilityPolicyHeaders
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.containerName,
    Parameters.immutabilityPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer
};
const lockImmutabilityPolicyOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/default/lock",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ImmutabilityPolicy,
      headersMapper: Mappers.BlobContainersLockImmutabilityPolicyHeaders
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.containerName
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer
};
const extendImmutabilityPolicyOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/default/extend",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ImmutabilityPolicy,
      headersMapper: Mappers.BlobContainersExtendImmutabilityPolicyHeaders
    }
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.containerName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch1
  ],
  mediaType: "json",
  serializer
};
const leaseOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/lease",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.LeaseContainerResponse
    }
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.containerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListContainerItems
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxpagesize,
    Parameters.filter
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
