/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SignedInUser } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GraphRbacManagementClientContext } from "../graphRbacManagementClientContext";
import {
  DirectoryObjectUnion,
  SignedInUserListOwnedObjectsNextOptionalParams,
  SignedInUserListOwnedObjectsOptionalParams,
  SignedInUserGetOptionalParams,
  SignedInUserGetResponse,
  SignedInUserListOwnedObjectsResponse,
  SignedInUserListOwnedObjectsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a SignedInUser. */
export class SignedInUserImpl implements SignedInUser {
  private readonly client: GraphRbacManagementClientContext;

  /**
   * Initialize a new instance of the class SignedInUser class.
   * @param client Reference to the service client
   */
  constructor(client: GraphRbacManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the list of directory objects that are owned by the user.
   * @param options The options parameters.
   */
  public listOwnedObjects(
    options?: SignedInUserListOwnedObjectsOptionalParams
  ): PagedAsyncIterableIterator<DirectoryObjectUnion> {
    const iter = this.listOwnedObjectsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listOwnedObjectsPagingPage(options);
      }
    };
  }

  private async *listOwnedObjectsPagingPage(
    options?: SignedInUserListOwnedObjectsOptionalParams
  ): AsyncIterableIterator<DirectoryObjectUnion[]> {
    let result = await this._listOwnedObjects(options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listOwnedObjectsNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listOwnedObjectsPagingAll(
    options?: SignedInUserListOwnedObjectsOptionalParams
  ): AsyncIterableIterator<DirectoryObjectUnion> {
    for await (const page of this.listOwnedObjectsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get the list of directory objects that are owned by the user.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  public listOwnedObjectsNext(
    nextLink: string,
    options?: SignedInUserListOwnedObjectsNextOptionalParams
  ): PagedAsyncIterableIterator<DirectoryObjectUnion> {
    const iter = this.listOwnedObjectsNextPagingAll(nextLink, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listOwnedObjectsNextPagingPage(nextLink, options);
      }
    };
  }

  private async *listOwnedObjectsNextPagingPage(
    nextLink: string,
    options?: SignedInUserListOwnedObjectsNextOptionalParams
  ): AsyncIterableIterator<DirectoryObjectUnion[]> {
    let result = await this._listOwnedObjectsNext(nextLink, options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listOwnedObjectsNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listOwnedObjectsNextPagingAll(
    nextLink: string,
    options?: SignedInUserListOwnedObjectsNextOptionalParams
  ): AsyncIterableIterator<DirectoryObjectUnion> {
    for await (const page of this.listOwnedObjectsNextPagingPage(
      nextLink,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the details for the currently logged-in user.
   * @param options The options parameters.
   */
  get(
    options?: SignedInUserGetOptionalParams
  ): Promise<SignedInUserGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<SignedInUserGetResponse>;
  }

  /**
   * Get the list of directory objects that are owned by the user.
   * @param options The options parameters.
   */
  private _listOwnedObjects(
    options?: SignedInUserListOwnedObjectsOptionalParams
  ): Promise<SignedInUserListOwnedObjectsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOwnedObjectsOperationSpec
    ) as Promise<SignedInUserListOwnedObjectsResponse>;
  }

  /**
   * Get the list of directory objects that are owned by the user.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  private _listOwnedObjectsNext(
    nextLink: string,
    options?: SignedInUserListOwnedObjectsNextOptionalParams
  ): Promise<SignedInUserListOwnedObjectsNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOwnedObjectsNextOperationSpec
    ) as Promise<SignedInUserListOwnedObjectsNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/me",
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
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept],
  serializer
};
const listOwnedObjectsOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/me/ownedObjects",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept],
  serializer
};
const listOwnedObjectsNextOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
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
