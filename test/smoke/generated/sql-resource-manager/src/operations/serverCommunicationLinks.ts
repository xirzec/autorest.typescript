/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ServerCommunicationLinks } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ServerCommunicationLink,
  ServerCommunicationLinksListByServerOptionalParams,
  ServerCommunicationLinksDeleteOptionalParams,
  ServerCommunicationLinksGetOptionalParams,
  ServerCommunicationLinksGetResponse,
  ServerCommunicationLinksCreateOrUpdateOptionalParams,
  ServerCommunicationLinksCreateOrUpdateResponse,
  ServerCommunicationLinksListByServerResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a ServerCommunicationLinks. */
export class ServerCommunicationLinksImpl implements ServerCommunicationLinks {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class ServerCommunicationLinks class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of server communication links.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerCommunicationLinksListByServerOptionalParams
  ): PagedAsyncIterableIterator<ServerCommunicationLink> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      serverName,
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
        return this.listByServerPagingPage(
          resourceGroupName,
          serverName,
          options
        );
      }
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    options?: ServerCommunicationLinksListByServerOptionalParams
  ): AsyncIterableIterator<ServerCommunicationLink[]> {
    let result = await this._listByServer(
      resourceGroupName,
      serverName,
      options
    );
    yield result.value || [];
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    options?: ServerCommunicationLinksListByServerOptionalParams
  ): AsyncIterableIterator<ServerCommunicationLink> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Deletes a server communication link.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param communicationLinkName The name of the server communication link.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serverName: string,
    communicationLinkName: string,
    options?: ServerCommunicationLinksDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, communicationLinkName, options },
      deleteOperationSpec
    );
  }

  /**
   * Returns a server communication link.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param communicationLinkName The name of the server communication link.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    communicationLinkName: string,
    options?: ServerCommunicationLinksGetOptionalParams
  ): Promise<ServerCommunicationLinksGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, communicationLinkName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a server communication link.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param communicationLinkName The name of the server communication link.
   * @param parameters The required parameters for creating a server communication link.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    communicationLinkName: string,
    parameters: ServerCommunicationLink,
    options?: ServerCommunicationLinksCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServerCommunicationLinksCreateOrUpdateResponse>,
      ServerCommunicationLinksCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ServerCommunicationLinksCreateOrUpdateResponse> => {
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
        serverName,
        communicationLinkName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      sendOperation
    );
  }

  /**
   * Creates a server communication link.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param communicationLinkName The name of the server communication link.
   * @param parameters The required parameters for creating a server communication link.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    communicationLinkName: string,
    parameters: ServerCommunicationLink,
    options?: ServerCommunicationLinksCreateOrUpdateOptionalParams
  ): Promise<ServerCommunicationLinksCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serverName,
      communicationLinkName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a list of server communication links.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerCommunicationLinksListByServerOptionalParams
  ): Promise<ServerCommunicationLinksListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      listByServerOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/communicationLinks/{communicationLinkName}",
  httpMethod: "DELETE",
  responses: { 200: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.communicationLinkName
  ],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/communicationLinks/{communicationLinkName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerCommunicationLink
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.communicationLinkName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/communicationLinks/{communicationLinkName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServerCommunicationLink
    },
    201: {
      bodyMapper: Mappers.ServerCommunicationLink
    },
    202: {
      bodyMapper: Mappers.ServerCommunicationLink
    },
    204: {
      bodyMapper: Mappers.ServerCommunicationLink
    }
  },
  requestBody: Parameters.parameters15,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.communicationLinkName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByServerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/communicationLinks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerCommunicationLinkListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
