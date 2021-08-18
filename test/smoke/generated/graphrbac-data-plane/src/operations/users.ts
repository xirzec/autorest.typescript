/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Users } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GraphRbacManagementClientContext } from "../graphRbacManagementClientContext";
import {
  User,
  UsersListNextOptionalParams,
  UsersListOptionalParams,
  UserGetMemberGroupsParameters,
  UsersGetMemberGroupsOptionalParams,
  UserCreateParameters,
  UsersCreateOptionalParams,
  UsersCreateResponse,
  UsersListResponse,
  UsersGetOptionalParams,
  UsersGetResponse,
  UserUpdateParameters,
  UsersUpdateOptionalParams,
  UsersDeleteOptionalParams,
  UsersGetMemberGroupsResponse,
  UsersListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Users operations. */
export class UsersImpl implements Users {
  private readonly client: GraphRbacManagementClientContext;

  /**
   * Initialize a new instance of the class Users class.
   * @param client Reference to the service client
   */
  constructor(client: GraphRbacManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets list of users for the current tenant.
   * @param options The options parameters.
   */
  public list(
    options?: UsersListOptionalParams
  ): PagedAsyncIterableIterator<User> {
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
    options?: UsersListOptionalParams
  ): AsyncIterableIterator<User[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: UsersListOptionalParams
  ): AsyncIterableIterator<User> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a collection that contains the object IDs of the groups of which the user is a member.
   * @param objectId The object ID of the user for which to get group membership.
   * @param parameters User filtering parameters.
   * @param options The options parameters.
   */
  public listMemberGroups(
    objectId: string,
    parameters: UserGetMemberGroupsParameters,
    options?: UsersGetMemberGroupsOptionalParams
  ): PagedAsyncIterableIterator<string> {
    const iter = this.getMemberGroupsPagingAll(objectId, parameters, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getMemberGroupsPagingPage(objectId, parameters, options);
      }
    };
  }

  private async *getMemberGroupsPagingPage(
    objectId: string,
    parameters: UserGetMemberGroupsParameters,
    options?: UsersGetMemberGroupsOptionalParams
  ): AsyncIterableIterator<string[]> {
    let result = await this._getMemberGroups(objectId, parameters, options);
    yield result.value || [];
  }

  private async *getMemberGroupsPagingAll(
    objectId: string,
    parameters: UserGetMemberGroupsParameters,
    options?: UsersGetMemberGroupsOptionalParams
  ): AsyncIterableIterator<string> {
    for await (const page of this.getMemberGroupsPagingPage(
      objectId,
      parameters,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of users for the current tenant.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  public listNext(
    nextLink: string,
    options?: UsersListNextOptionalParams
  ): PagedAsyncIterableIterator<User> {
    const iter = this.listNextPagingAll(nextLink, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listNextPagingPage(nextLink, options);
      }
    };
  }

  private async *listNextPagingPage(
    nextLink: string,
    options?: UsersListNextOptionalParams
  ): AsyncIterableIterator<User[]> {
    let result = await this._listNext(nextLink, options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listNextPagingAll(
    nextLink: string,
    options?: UsersListNextOptionalParams
  ): AsyncIterableIterator<User> {
    for await (const page of this.listNextPagingPage(nextLink, options)) {
      yield* page;
    }
  }

  /**
   * Create a new user.
   * @param parameters Parameters to create a user.
   * @param options The options parameters.
   */
  create(
    parameters: UserCreateParameters,
    options?: UsersCreateOptionalParams
  ): Promise<UsersCreateResponse> {
    return this.client.sendOperationRequest(
      { parameters, options },
      createOperationSpec
    );
  }

  /**
   * Gets list of users for the current tenant.
   * @param options The options parameters.
   */
  private _list(options?: UsersListOptionalParams): Promise<UsersListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets user information from the directory.
   * @param upnOrObjectId The object ID or principal name of the user for which to get information.
   * @param options The options parameters.
   */
  get(
    upnOrObjectId: string,
    options?: UsersGetOptionalParams
  ): Promise<UsersGetResponse> {
    return this.client.sendOperationRequest(
      { upnOrObjectId, options },
      getOperationSpec
    );
  }

  /**
   * Updates a user.
   * @param upnOrObjectId The object ID or principal name of the user to update.
   * @param parameters Parameters to update an existing user.
   * @param options The options parameters.
   */
  update(
    upnOrObjectId: string,
    parameters: UserUpdateParameters,
    options?: UsersUpdateOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { upnOrObjectId, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Delete a user.
   * @param upnOrObjectId The object ID or principal name of the user to delete.
   * @param options The options parameters.
   */
  delete(
    upnOrObjectId: string,
    options?: UsersDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { upnOrObjectId, options },
      deleteOperationSpec
    );
  }

  /**
   * Gets a collection that contains the object IDs of the groups of which the user is a member.
   * @param objectId The object ID of the user for which to get group membership.
   * @param parameters User filtering parameters.
   * @param options The options parameters.
   */
  private _getMemberGroups(
    objectId: string,
    parameters: UserGetMemberGroupsParameters,
    options?: UsersGetMemberGroupsOptionalParams
  ): Promise<UsersGetMemberGroupsResponse> {
    return this.client.sendOperationRequest(
      { objectId, parameters, options },
      getMemberGroupsOperationSpec
    );
  }

  /**
   * Gets a list of users for the current tenant.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: UsersListNextOptionalParams
  ): Promise<UsersListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/users",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.User
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters11,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/users",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expand
  ],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/users/{upnOrObjectId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.User
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.upnOrObjectId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/users/{upnOrObjectId}",
  httpMethod: "PATCH",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.upnOrObjectId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/users/{upnOrObjectId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.upnOrObjectId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getMemberGroupsOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/users/{objectId}/getMemberGroups",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.UserGetMemberGroupsResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
