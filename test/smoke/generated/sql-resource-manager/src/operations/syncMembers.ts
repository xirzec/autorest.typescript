/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SyncMembers } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  SyncMember,
  SyncMembersListBySyncGroupNextOptionalParams,
  SyncMembersListBySyncGroupOptionalParams,
  SyncFullSchemaProperties,
  SyncMembersListMemberSchemasNextOptionalParams,
  SyncMembersListMemberSchemasOptionalParams,
  SyncMembersGetOptionalParams,
  SyncMembersGetResponse,
  SyncMembersCreateOrUpdateOptionalParams,
  SyncMembersCreateOrUpdateResponse,
  SyncMembersDeleteOptionalParams,
  SyncMembersUpdateOptionalParams,
  SyncMembersUpdateResponse,
  SyncMembersListBySyncGroupResponse,
  SyncMembersListMemberSchemasResponse,
  SyncMembersRefreshMemberSchemaOptionalParams,
  SyncMembersListBySyncGroupNextResponse,
  SyncMembersListMemberSchemasNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a SyncMembers. */
export class SyncMembersImpl implements SyncMembers {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class SyncMembers class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists sync members in the given sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  public listBySyncGroup(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: SyncMembersListBySyncGroupOptionalParams
  ): PagedAsyncIterableIterator<SyncMember> {
    const iter = this.listBySyncGroupPagingAll(
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
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
        return this.listBySyncGroupPagingPage(
          resourceGroupName,
          serverName,
          databaseName,
          syncGroupName,
          options
        );
      }
    };
  }

  private async *listBySyncGroupPagingPage(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: SyncMembersListBySyncGroupOptionalParams
  ): AsyncIterableIterator<SyncMember[]> {
    let result = await this._listBySyncGroup(
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySyncGroupNext(
        resourceGroupName,
        serverName,
        databaseName,
        syncGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySyncGroupPagingAll(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: SyncMembersListBySyncGroupOptionalParams
  ): AsyncIterableIterator<SyncMember> {
    for await (const page of this.listBySyncGroupPagingPage(
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a sync member database schema.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param options The options parameters.
   */
  public listMemberSchemas(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    options?: SyncMembersListMemberSchemasOptionalParams
  ): PagedAsyncIterableIterator<SyncFullSchemaProperties> {
    const iter = this.listMemberSchemasPagingAll(
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      syncMemberName,
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
        return this.listMemberSchemasPagingPage(
          resourceGroupName,
          serverName,
          databaseName,
          syncGroupName,
          syncMemberName,
          options
        );
      }
    };
  }

  private async *listMemberSchemasPagingPage(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    options?: SyncMembersListMemberSchemasOptionalParams
  ): AsyncIterableIterator<SyncFullSchemaProperties[]> {
    let result = await this._listMemberSchemas(
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      syncMemberName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listMemberSchemasNext(
        resourceGroupName,
        serverName,
        databaseName,
        syncGroupName,
        syncMemberName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listMemberSchemasPagingAll(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    options?: SyncMembersListMemberSchemasOptionalParams
  ): AsyncIterableIterator<SyncFullSchemaProperties> {
    for await (const page of this.listMemberSchemasPagingPage(
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      syncMemberName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a sync member.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    options?: SyncMembersGetOptionalParams
  ): Promise<SyncMembersGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      syncMemberName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<SyncMembersGetResponse>;
  }

  /**
   * Creates or updates a sync member.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param parameters The requested sync member resource state.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    parameters: SyncMember,
    options?: SyncMembersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SyncMembersCreateOrUpdateResponse>,
      SyncMembersCreateOrUpdateResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      syncMemberName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        SyncMembersCreateOrUpdateResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      createOrUpdateOperationSpec,
      sendOperation
    );
  }

  /**
   * Deletes a sync member.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    options?: SyncMembersDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      syncMemberName,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      deleteOperationSpec,
      sendOperation
    );
  }

  /**
   * Updates an existing sync member.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param parameters The requested sync member resource state.
   * @param options The options parameters.
   */
  async update(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    parameters: SyncMember,
    options?: SyncMembersUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SyncMembersUpdateResponse>,
      SyncMembersUpdateResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      syncMemberName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        SyncMembersUpdateResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      updateOperationSpec,
      sendOperation
    );
  }

  /**
   * Lists sync members in the given sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  private _listBySyncGroup(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: SyncMembersListBySyncGroupOptionalParams
  ): Promise<SyncMembersListBySyncGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listBySyncGroupOperationSpec
    ) as Promise<SyncMembersListBySyncGroupResponse>;
  }

  /**
   * Gets a sync member database schema.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param options The options parameters.
   */
  private _listMemberSchemas(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    options?: SyncMembersListMemberSchemasOptionalParams
  ): Promise<SyncMembersListMemberSchemasResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      syncMemberName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listMemberSchemasOperationSpec
    ) as Promise<SyncMembersListMemberSchemasResponse>;
  }

  /**
   * Refreshes a sync member database schema.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param options The options parameters.
   */
  async refreshMemberSchema(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    options?: SyncMembersRefreshMemberSchemaOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      syncMemberName,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      refreshMemberSchemaOperationSpec,
      sendOperation
    );
  }

  /**
   * ListBySyncGroupNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param nextLink The nextLink from the previous successful call to the ListBySyncGroup method.
   * @param options The options parameters.
   */
  private _listBySyncGroupNext(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    nextLink: string,
    options?: SyncMembersListBySyncGroupNextOptionalParams
  ): Promise<SyncMembersListBySyncGroupNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listBySyncGroupNextOperationSpec
    ) as Promise<SyncMembersListBySyncGroupNextResponse>;
  }

  /**
   * ListMemberSchemasNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param nextLink The nextLink from the previous successful call to the ListMemberSchemas method.
   * @param options The options parameters.
   */
  private _listMemberSchemasNext(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    syncMemberName: string,
    nextLink: string,
    options?: SyncMembersListMemberSchemasNextOptionalParams
  ): Promise<SyncMembersListMemberSchemasNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      syncMemberName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listMemberSchemasNextOperationSpec
    ) as Promise<SyncMembersListMemberSchemasNextResponse>;
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncMember
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName,
    Parameters.syncMemberName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SyncMember
    },
    201: {
      bodyMapper: Mappers.SyncMember
    },
    202: {
      bodyMapper: Mappers.SyncMember
    },
    204: {
      bodyMapper: Mappers.SyncMember
    },
    default: {}
  },
  requestBody: Parameters.parameters24,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName,
    Parameters.syncMemberName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName,
    Parameters.syncMemberName
  ],
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SyncMember
    },
    201: {
      bodyMapper: Mappers.SyncMember
    },
    202: {
      bodyMapper: Mappers.SyncMember
    },
    204: {
      bodyMapper: Mappers.SyncMember
    },
    default: {}
  },
  requestBody: Parameters.parameters24,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName,
    Parameters.syncMemberName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySyncGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncMemberListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMemberSchemasOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}/schemas",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncFullSchemaPropertiesListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName,
    Parameters.syncMemberName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const refreshMemberSchemaOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}/refreshSchema",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName,
    Parameters.syncMemberName
  ],
  serializer
};
const listBySyncGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncMemberListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.nextLink,
    Parameters.syncGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMemberSchemasNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncFullSchemaPropertiesListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.nextLink,
    Parameters.syncGroupName,
    Parameters.syncMemberName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
