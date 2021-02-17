/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GraphRbacManagementClientContext } from "../graphRbacManagementClientContext";
import {
  Application,
  DeletedApplicationsListOptionalParams,
  DeletedApplicationsRestoreResponse,
  DeletedApplicationsListResponse,
  DeletedApplicationsListNextResponse
} from "../models";

/** Class representing a DeletedApplications. */
export class DeletedApplications {
  private readonly client: GraphRbacManagementClientContext;

  /**
   * Initialize a new instance of the class DeletedApplications class.
   * @param client Reference to the service client
   */
  constructor(client: GraphRbacManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of deleted applications in the directory.
   * @param options The options parameters.
   */
  public list(
    options?: DeletedApplicationsListOptionalParams
  ): PagedAsyncIterableIterator<Application> {
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
    options?: DeletedApplicationsListOptionalParams
  ): AsyncIterableIterator<Application[]> {
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
    options?: DeletedApplicationsListOptionalParams
  ): AsyncIterableIterator<Application> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of deleted applications in the directory.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  public listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Application> {
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
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Application[]> {
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
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Application> {
    for await (const page of this.listNextPagingPage(nextLink, options)) {
      yield* page;
    }
  }

  /**
   * Restores the deleted application in the directory.
   * @param objectId Application object ID.
   * @param options The options parameters.
   */
  restore(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeletedApplicationsRestoreResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      objectId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      restoreOperationSpec
    ) as Promise<DeletedApplicationsRestoreResponse>;
  }

  /**
   * Gets a list of deleted applications in the directory.
   * @param options The options parameters.
   */
  private _list(
    options?: DeletedApplicationsListOptionalParams
  ): Promise<DeletedApplicationsListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<DeletedApplicationsListResponse>;
  }

  /**
   * Hard-delete an application.
   * @param applicationObjectId Application object ID.
   * @param options The options parameters.
   */
  hardDelete(
    applicationObjectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      applicationObjectId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      hardDeleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets a list of deleted applications in the directory.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeletedApplicationsListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<DeletedApplicationsListNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const restoreOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/deletedApplications/{objectId}/restore",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/deletedApplications",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept],
  serializer
};
const hardDeleteOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/deletedApplications/{applicationObjectId}",
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
    Parameters.applicationObjectId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult
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
