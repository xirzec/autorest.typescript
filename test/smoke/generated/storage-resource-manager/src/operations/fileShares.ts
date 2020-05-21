/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClient } from "../storageManagementClient";
import {
  FileSharesListOptionalParams,
  FileSharesListResponse,
  FileShare,
  FileSharesCreateResponse,
  FileSharesUpdateResponse,
  FileSharesGetResponse,
  DeletedShare,
  FileSharesListNextOptionalParams,
  FileSharesListNextResponse
} from "../models";

/**
 * Class representing a FileShares.
 */
export class FileShares {
  private readonly client: StorageManagementClient;

  /**
   * Initialize a new instance of the class FileShares class.
   * @param client Reference to the service client
   */
  constructor(client: StorageManagementClient) {
    this.client = client;
  }

  /**
   * Lists all shares.
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
    options?: FileSharesListOptionalParams
  ): Promise<FileSharesListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options: operationOptions },
      listOperationSpec
    ) as Promise<FileSharesListResponse>;
  }

  /**
   * Creates a new share under the specified account as described by request body. The share resource
   * includes metadata and properties for that share. It does not include a list of the files contained
   * by the share.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param shareName The name of the file share within the specified storage account. File share names
   *                  must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only.
   *                  Every dash (-) character must be immediately preceded and followed by a letter or number.
   * @param fileShare Properties of the file share to create.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    accountName: string,
    shareName: string,
    fileShare: FileShare,
    options?: coreHttp.OperationOptions
  ): Promise<FileSharesCreateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        fileShare,
        options: operationOptions
      },
      createOperationSpec
    ) as Promise<FileSharesCreateResponse>;
  }

  /**
   * Updates share properties as specified in request body. Properties not mentioned in the request will
   * not be changed. Update fails if the specified share does not already exist.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param shareName The name of the file share within the specified storage account. File share names
   *                  must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only.
   *                  Every dash (-) character must be immediately preceded and followed by a letter or number.
   * @param fileShare Properties to update for the file share.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    shareName: string,
    fileShare: FileShare,
    options?: coreHttp.OperationOptions
  ): Promise<FileSharesUpdateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        fileShare,
        options: operationOptions
      },
      updateOperationSpec
    ) as Promise<FileSharesUpdateResponse>;
  }

  /**
   * Gets properties of a specified share.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param shareName The name of the file share within the specified storage account. File share names
   *                  must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only.
   *                  Every dash (-) character must be immediately preceded and followed by a letter or number.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    shareName: string,
    options?: coreHttp.OperationOptions
  ): Promise<FileSharesGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, shareName, options: operationOptions },
      getOperationSpec
    ) as Promise<FileSharesGetResponse>;
  }

  /**
   * Deletes specified share under its account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param shareName The name of the file share within the specified storage account. File share names
   *                  must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only.
   *                  Every dash (-) character must be immediately preceded and followed by a letter or number.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    shareName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, shareName, options: operationOptions },
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Restore a file share within a valid retention days if share soft delete is enabled
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param shareName The name of the file share within the specified storage account. File share names
   *                  must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only.
   *                  Every dash (-) character must be immediately preceded and followed by a letter or number.
   * @param deletedShare The deleted share to be restored.
   * @param options The options parameters.
   */
  restore(
    resourceGroupName: string,
    accountName: string,
    shareName: string,
    deletedShare: DeletedShare,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        deletedShare,
        options: operationOptions
      },
      restoreOperationSpec
    ) as Promise<coreHttp.RestResponse>;
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
  listNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: FileSharesListNextOptionalParams
  ): Promise<FileSharesListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<FileSharesListNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FileShareItems
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxpagesize,
    Parameters.filter,
    Parameters.expand2
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1
  ],
  serializer
};
const createOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.FileShare
    },
    201: {
      bodyMapper: Mappers.FileShare
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.fileShare,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.shareName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.FileShare
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.fileShare,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.shareName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FileShare
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.shareName
  ],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.shareName
  ],
  serializer
};
const restoreOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}/restore",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.deletedShare,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.shareName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FileShareItems
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxpagesize,
    Parameters.filter,
    Parameters.expand2
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.nextLink
  ],
  serializer
};
