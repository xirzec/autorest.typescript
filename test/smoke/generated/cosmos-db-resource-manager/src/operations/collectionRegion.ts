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
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";
import { Metric, CollectionRegionListMetricsResponse } from "../models";

/** Class representing a CollectionRegion. */
export class CollectionRegion {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Initialize a new instance of the class CollectionRegion class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the metrics determined by the given filter for the given database account, collection and
   * region.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param region Cosmos DB region, with spaces between words and each word capitalized.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  public listMetrics(
    resourceGroupName: string,
    accountName: string,
    region: string,
    databaseRid: string,
    collectionRid: string,
    filter: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Metric> {
    const iter = this.listMetricsPagingAll(
      resourceGroupName,
      accountName,
      region,
      databaseRid,
      collectionRid,
      filter,
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
        return this.listMetricsPagingPage(
          resourceGroupName,
          accountName,
          region,
          databaseRid,
          collectionRid,
          filter,
          options
        );
      }
    };
  }

  private async *listMetricsPagingPage(
    resourceGroupName: string,
    accountName: string,
    region: string,
    databaseRid: string,
    collectionRid: string,
    filter: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Metric[]> {
    let result = await this._listMetrics(
      resourceGroupName,
      accountName,
      region,
      databaseRid,
      collectionRid,
      filter,
      options
    );
    yield result.value || [];
  }

  private async *listMetricsPagingAll(
    resourceGroupName: string,
    accountName: string,
    region: string,
    databaseRid: string,
    collectionRid: string,
    filter: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Metric> {
    for await (const page of this.listMetricsPagingPage(
      resourceGroupName,
      accountName,
      region,
      databaseRid,
      collectionRid,
      filter,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves the metrics determined by the given filter for the given database account, collection and
   * region.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param region Cosmos DB region, with spaces between words and each word capitalized.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  private _listMetrics(
    resourceGroupName: string,
    accountName: string,
    region: string,
    databaseRid: string,
    collectionRid: string,
    filter: string,
    options?: coreHttp.OperationOptions
  ): Promise<CollectionRegionListMetricsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      region,
      databaseRid,
      collectionRid,
      filter,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listMetricsOperationSpec
    ) as Promise<CollectionRegionListMetricsResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listMetricsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/region/{region}/databases/{databaseRid}/collections/{collectionRid}/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.databaseRid,
    Parameters.collectionRid,
    Parameters.region
  ],
  headerParameters: [Parameters.accept],
  serializer
};
