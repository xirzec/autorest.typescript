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
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import {
  ExpressRoutePortsLocation,
  ExpressRoutePortsLocationsListResponse,
  ExpressRoutePortsLocationsGetResponse,
  ExpressRoutePortsLocationsListNextResponse
} from "../models";

/** Class representing a ExpressRoutePortsLocations. */
export class ExpressRoutePortsLocations {
  private readonly client: NetworkManagementClientContext;

  /**
   * Initialize a new instance of the class ExpressRoutePortsLocations class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves all ExpressRoutePort peering locations. Does not return available bandwidths for each
   * location. Available bandwidths can only be obtained when retrieving a specific peering location.
   * @param options The options parameters.
   */
  public list(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ExpressRoutePortsLocation> {
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
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<ExpressRoutePortsLocation[]> {
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
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<ExpressRoutePortsLocation> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Retrieves all ExpressRoutePort peering locations. Does not return available bandwidths for each
   * location. Available bandwidths can only be obtained when retrieving a specific peering location.
   * @param options The options parameters.
   */
  private _list(
    options?: coreHttp.OperationOptions
  ): Promise<ExpressRoutePortsLocationsListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<ExpressRoutePortsLocationsListResponse>;
  }

  /**
   * Retrieves a single ExpressRoutePort peering location, including the list of available bandwidths
   * available at said peering location.
   * @param locationName Name of the requested ExpressRoutePort peering location.
   * @param options The options parameters.
   */
  get(
    locationName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ExpressRoutePortsLocationsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      locationName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<ExpressRoutePortsLocationsGetResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ExpressRoutePortsLocationsListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<ExpressRoutePortsLocationsListNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/ExpressRoutePortsLocations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRoutePortsLocationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/ExpressRoutePortsLocations/{locationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRoutePortsLocation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRoutePortsLocationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
