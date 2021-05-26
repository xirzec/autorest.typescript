/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DatabaseAccountRegion } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";
import {
  Metric,
  DatabaseAccountRegionListMetricsOptionalParams,
  DatabaseAccountRegionListMetricsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a DatabaseAccountRegion. */
export class DatabaseAccountRegionImpl implements DatabaseAccountRegion {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Initialize a new instance of the class DatabaseAccountRegion class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the metrics determined by the given filter for the given database account and region.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param region Cosmos DB region, with spaces between words and each word capitalized.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  public listMetrics(
    resourceGroupName: string,
    accountName: string,
    region: string,
    filter: string,
    options?: DatabaseAccountRegionListMetricsOptionalParams
  ): PagedAsyncIterableIterator<Metric> {
    const iter = this.listMetricsPagingAll(
      resourceGroupName,
      accountName,
      region,
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
    filter: string,
    options?: DatabaseAccountRegionListMetricsOptionalParams
  ): AsyncIterableIterator<Metric[]> {
    let result = await this._listMetrics(
      resourceGroupName,
      accountName,
      region,
      filter,
      options
    );
    yield result.value || [];
  }

  private async *listMetricsPagingAll(
    resourceGroupName: string,
    accountName: string,
    region: string,
    filter: string,
    options?: DatabaseAccountRegionListMetricsOptionalParams
  ): AsyncIterableIterator<Metric> {
    for await (const page of this.listMetricsPagingPage(
      resourceGroupName,
      accountName,
      region,
      filter,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves the metrics determined by the given filter for the given database account and region.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param region Cosmos DB region, with spaces between words and each word capitalized.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  private _listMetrics(
    resourceGroupName: string,
    accountName: string,
    region: string,
    filter: string,
    options?: DatabaseAccountRegionListMetricsOptionalParams
  ): Promise<DatabaseAccountRegionListMetricsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, region, filter, options },
      listMetricsOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listMetricsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/region/{region}/metrics",
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
    Parameters.region
  ],
  headerParameters: [Parameters.accept],
  serializer
};
