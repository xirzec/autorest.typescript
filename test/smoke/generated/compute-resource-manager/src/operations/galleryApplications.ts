/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { GalleryApplications } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  GalleryApplication,
  GalleryApplicationsListByGalleryNextOptionalParams,
  GalleryApplicationsListByGalleryOptionalParams,
  GalleryApplicationsCreateOrUpdateOptionalParams,
  GalleryApplicationsCreateOrUpdateResponse,
  GalleryApplicationUpdate,
  GalleryApplicationsUpdateOptionalParams,
  GalleryApplicationsUpdateResponse,
  GalleryApplicationsGetOptionalParams,
  GalleryApplicationsGetResponse,
  GalleryApplicationsDeleteOptionalParams,
  GalleryApplicationsListByGalleryResponse,
  GalleryApplicationsListByGalleryNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a GalleryApplications. */
export class GalleryApplicationsImpl implements GalleryApplications {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class GalleryApplications class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * List gallery Application Definitions in a gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery from which Application Definitions are
   *                    to be listed.
   * @param options The options parameters.
   */
  public listByGallery(
    resourceGroupName: string,
    galleryName: string,
    options?: GalleryApplicationsListByGalleryOptionalParams
  ): PagedAsyncIterableIterator<GalleryApplication> {
    const iter = this.listByGalleryPagingAll(
      resourceGroupName,
      galleryName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByGalleryPagingPage(
          resourceGroupName,
          galleryName,
          options
        );
      }
    };
  }

  private async *listByGalleryPagingPage(
    resourceGroupName: string,
    galleryName: string,
    options?: GalleryApplicationsListByGalleryOptionalParams
  ): AsyncIterableIterator<GalleryApplication[]> {
    let result = await this._listByGallery(
      resourceGroupName,
      galleryName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByGalleryNext(
        resourceGroupName,
        galleryName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByGalleryPagingAll(
    resourceGroupName: string,
    galleryName: string,
    options?: GalleryApplicationsListByGalleryOptionalParams
  ): AsyncIterableIterator<GalleryApplication> {
    for await (const page of this.listByGalleryPagingPage(
      resourceGroupName,
      galleryName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create or update a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition is
   *                    to be created.
   * @param galleryApplicationName The name of the gallery Application Definition to be created or
   *                               updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in
   *                               the middle. The maximum length is 80 characters.
   * @param galleryApplication Parameters supplied to the create or update gallery Application operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplication: GalleryApplication,
    options?: GalleryApplicationsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GalleryApplicationsCreateOrUpdateResponse>,
      GalleryApplicationsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<GalleryApplicationsCreateOrUpdateResponse> => {
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
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplication,
        options
      },
      createOrUpdateOperationSpec,
      sendOperation
    );
  }

  /**
   * Create or update a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition is
   *                    to be created.
   * @param galleryApplicationName The name of the gallery Application Definition to be created or
   *                               updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in
   *                               the middle. The maximum length is 80 characters.
   * @param galleryApplication Parameters supplied to the create or update gallery Application operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplication: GalleryApplication,
    options?: GalleryApplicationsCreateOrUpdateOptionalParams
  ): Promise<GalleryApplicationsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      galleryName,
      galleryApplicationName,
      galleryApplication,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition is
   *                    to be updated.
   * @param galleryApplicationName The name of the gallery Application Definition to be updated. The
   *                               allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle.
   *                               The maximum length is 80 characters.
   * @param galleryApplication Parameters supplied to the update gallery Application operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplication: GalleryApplicationUpdate,
    options?: GalleryApplicationsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GalleryApplicationsUpdateResponse>,
      GalleryApplicationsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<GalleryApplicationsUpdateResponse> => {
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
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplication,
        options
      },
      updateOperationSpec,
      sendOperation
    );
  }

  /**
   * Update a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition is
   *                    to be updated.
   * @param galleryApplicationName The name of the gallery Application Definition to be updated. The
   *                               allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle.
   *                               The maximum length is 80 characters.
   * @param galleryApplication Parameters supplied to the update gallery Application operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplication: GalleryApplicationUpdate,
    options?: GalleryApplicationsUpdateOptionalParams
  ): Promise<GalleryApplicationsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      galleryName,
      galleryApplicationName,
      galleryApplication,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves information about a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery from which the Application Definitions
   *                    are to be retrieved.
   * @param galleryApplicationName The name of the gallery Application Definition to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    options?: GalleryApplicationsGetOptionalParams
  ): Promise<GalleryApplicationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, galleryName, galleryApplicationName, options },
      getOperationSpec
    );
  }

  /**
   * Delete a gallery Application.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition is
   *                    to be deleted.
   * @param galleryApplicationName The name of the gallery Application Definition to be deleted.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    options?: GalleryApplicationsDeleteOptionalParams
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
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { resourceGroupName, galleryName, galleryApplicationName, options },
      deleteOperationSpec,
      sendOperation
    );
  }

  /**
   * Delete a gallery Application.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition is
   *                    to be deleted.
   * @param galleryApplicationName The name of the gallery Application Definition to be deleted.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    options?: GalleryApplicationsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      galleryName,
      galleryApplicationName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List gallery Application Definitions in a gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery from which Application Definitions are
   *                    to be listed.
   * @param options The options parameters.
   */
  private _listByGallery(
    resourceGroupName: string,
    galleryName: string,
    options?: GalleryApplicationsListByGalleryOptionalParams
  ): Promise<GalleryApplicationsListByGalleryResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, galleryName, options },
      listByGalleryOperationSpec
    );
  }

  /**
   * ListByGalleryNext
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery from which Application Definitions are
   *                    to be listed.
   * @param nextLink The nextLink from the previous successful call to the ListByGallery method.
   * @param options The options parameters.
   */
  private _listByGalleryNext(
    resourceGroupName: string,
    galleryName: string,
    nextLink: string,
    options?: GalleryApplicationsListByGalleryNextOptionalParams
  ): Promise<GalleryApplicationsListByGalleryNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, galleryName, nextLink, options },
      listByGalleryNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplication
    },
    201: {
      bodyMapper: Mappers.GalleryApplication
    },
    202: {
      bodyMapper: Mappers.GalleryApplication
    },
    204: {
      bodyMapper: Mappers.GalleryApplication
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.galleryApplication,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName,
    Parameters.galleryApplicationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplication
    },
    201: {
      bodyMapper: Mappers.GalleryApplication
    },
    202: {
      bodyMapper: Mappers.GalleryApplication
    },
    204: {
      bodyMapper: Mappers.GalleryApplication
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.galleryApplication1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName,
    Parameters.galleryApplicationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplication
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName,
    Parameters.galleryApplicationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}",
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
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName,
    Parameters.galleryApplicationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByGalleryOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByGalleryNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.galleryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
