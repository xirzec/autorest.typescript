/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DiskEncryptionSets } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DiskEncryptionSet,
  DiskEncryptionSetsListByResourceGroupNextOptionalParams,
  DiskEncryptionSetsListByResourceGroupOptionalParams,
  DiskEncryptionSetsListNextOptionalParams,
  DiskEncryptionSetsListOptionalParams,
  DiskEncryptionSetsCreateOrUpdateOptionalParams,
  DiskEncryptionSetsCreateOrUpdateResponse,
  DiskEncryptionSetUpdate,
  DiskEncryptionSetsUpdateOptionalParams,
  DiskEncryptionSetsUpdateResponse,
  DiskEncryptionSetsGetOptionalParams,
  DiskEncryptionSetsGetResponse,
  DiskEncryptionSetsDeleteOptionalParams,
  DiskEncryptionSetsListByResourceGroupResponse,
  DiskEncryptionSetsListResponse,
  DiskEncryptionSetsListByResourceGroupNextResponse,
  DiskEncryptionSetsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DiskEncryptionSets operations. */
export class DiskEncryptionSetsImpl implements DiskEncryptionSets {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class DiskEncryptionSets class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all the disk encryption sets under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: DiskEncryptionSetsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DiskEncryptionSet> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: DiskEncryptionSetsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DiskEncryptionSet[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: DiskEncryptionSetsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DiskEncryptionSet> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the disk encryption sets under a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: DiskEncryptionSetsListOptionalParams
  ): PagedAsyncIterableIterator<DiskEncryptionSet> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: DiskEncryptionSetsListOptionalParams
  ): AsyncIterableIterator<DiskEncryptionSet[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: DiskEncryptionSetsListOptionalParams
  ): AsyncIterableIterator<DiskEncryptionSet> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Creates or updates a disk encryption set
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   *                              can't be changed after the disk encryption set is created. Supported characters for the name are
   *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
   * @param diskEncryptionSet disk encryption set object supplied in the body of the Put disk encryption
   *                          set operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    diskEncryptionSetName: string,
    diskEncryptionSet: DiskEncryptionSet,
    options?: DiskEncryptionSetsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DiskEncryptionSetsCreateOrUpdateResponse>,
      DiskEncryptionSetsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DiskEncryptionSetsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, diskEncryptionSetName, diskEncryptionSet, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates or updates a disk encryption set
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   *                              can't be changed after the disk encryption set is created. Supported characters for the name are
   *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
   * @param diskEncryptionSet disk encryption set object supplied in the body of the Put disk encryption
   *                          set operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    diskEncryptionSetName: string,
    diskEncryptionSet: DiskEncryptionSet,
    options?: DiskEncryptionSetsCreateOrUpdateOptionalParams
  ): Promise<DiskEncryptionSetsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      diskEncryptionSetName,
      diskEncryptionSet,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates (patches) a disk encryption set.
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   *                              can't be changed after the disk encryption set is created. Supported characters for the name are
   *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
   * @param diskEncryptionSet disk encryption set object supplied in the body of the Patch disk
   *                          encryption set operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    diskEncryptionSetName: string,
    diskEncryptionSet: DiskEncryptionSetUpdate,
    options?: DiskEncryptionSetsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DiskEncryptionSetsUpdateResponse>,
      DiskEncryptionSetsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DiskEncryptionSetsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, diskEncryptionSetName, diskEncryptionSet, options },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Updates (patches) a disk encryption set.
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   *                              can't be changed after the disk encryption set is created. Supported characters for the name are
   *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
   * @param diskEncryptionSet disk encryption set object supplied in the body of the Patch disk
   *                          encryption set operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    diskEncryptionSetName: string,
    diskEncryptionSet: DiskEncryptionSetUpdate,
    options?: DiskEncryptionSetsUpdateOptionalParams
  ): Promise<DiskEncryptionSetsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      diskEncryptionSetName,
      diskEncryptionSet,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about a disk encryption set.
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   *                              can't be changed after the disk encryption set is created. Supported characters for the name are
   *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    diskEncryptionSetName: string,
    options?: DiskEncryptionSetsGetOptionalParams
  ): Promise<DiskEncryptionSetsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, diskEncryptionSetName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes a disk encryption set.
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   *                              can't be changed after the disk encryption set is created. Supported characters for the name are
   *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    diskEncryptionSetName: string,
    options?: DiskEncryptionSetsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, diskEncryptionSetName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes a disk encryption set.
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   *                              can't be changed after the disk encryption set is created. Supported characters for the name are
   *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    diskEncryptionSetName: string,
    options?: DiskEncryptionSetsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      diskEncryptionSetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists all the disk encryption sets under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: DiskEncryptionSetsListByResourceGroupOptionalParams
  ): Promise<DiskEncryptionSetsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Lists all the disk encryption sets under a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: DiskEncryptionSetsListOptionalParams
  ): Promise<DiskEncryptionSetsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DiskEncryptionSetsListByResourceGroupNextOptionalParams
  ): Promise<DiskEncryptionSetsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: DiskEncryptionSetsListNextOptionalParams
  ): Promise<DiskEncryptionSetsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DiskEncryptionSet
    },
    201: {
      bodyMapper: Mappers.DiskEncryptionSet
    },
    202: {
      bodyMapper: Mappers.DiskEncryptionSet
    },
    204: {
      bodyMapper: Mappers.DiskEncryptionSet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.diskEncryptionSet,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskEncryptionSetName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DiskEncryptionSet
    },
    201: {
      bodyMapper: Mappers.DiskEncryptionSet
    },
    202: {
      bodyMapper: Mappers.DiskEncryptionSet
    },
    204: {
      bodyMapper: Mappers.DiskEncryptionSet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.diskEncryptionSet1,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskEncryptionSetName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiskEncryptionSet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskEncryptionSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskEncryptionSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiskEncryptionSetList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/diskEncryptionSets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiskEncryptionSetList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiskEncryptionSetList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiskEncryptionSetList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
