/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PartitionKeyRangeId } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";
import {
  PartitionMetric,
  PartitionKeyRangeIdListMetricsOptionalParams,
  PartitionKeyRangeIdListMetricsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a PartitionKeyRangeId. */
export class PartitionKeyRangeIdImpl implements PartitionKeyRangeId {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Initialize a new instance of the class PartitionKeyRangeId class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the metrics determined by the given filter for the given partition key range id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param partitionKeyRangeId Partition Key Range Id for which to get data.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  public listMetrics(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    partitionKeyRangeId: string,
    filter: string,
    options?: PartitionKeyRangeIdListMetricsOptionalParams
  ): PagedAsyncIterableIterator<PartitionMetric> {
    const iter = this.listMetricsPagingAll(
      resourceGroupName,
      accountName,
      databaseRid,
      collectionRid,
      partitionKeyRangeId,
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
          databaseRid,
          collectionRid,
          partitionKeyRangeId,
          filter,
          options
        );
      }
    };
  }

  private async *listMetricsPagingPage(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    partitionKeyRangeId: string,
    filter: string,
    options?: PartitionKeyRangeIdListMetricsOptionalParams
  ): AsyncIterableIterator<PartitionMetric[]> {
    let result = await this._listMetrics(
      resourceGroupName,
      accountName,
      databaseRid,
      collectionRid,
      partitionKeyRangeId,
      filter,
      options
    );
    yield result.value || [];
  }

  private async *listMetricsPagingAll(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    partitionKeyRangeId: string,
    filter: string,
    options?: PartitionKeyRangeIdListMetricsOptionalParams
  ): AsyncIterableIterator<PartitionMetric> {
    for await (const page of this.listMetricsPagingPage(
      resourceGroupName,
      accountName,
      databaseRid,
      collectionRid,
      partitionKeyRangeId,
      filter,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves the metrics determined by the given filter for the given partition key range id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param partitionKeyRangeId Partition Key Range Id for which to get data.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  private _listMetrics(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    partitionKeyRangeId: string,
    filter: string,
    options?: PartitionKeyRangeIdListMetricsOptionalParams
  ): Promise<PartitionKeyRangeIdListMetricsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      databaseRid,
      collectionRid,
      partitionKeyRangeId,
      filter,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listMetricsOperationSpec
    ) as Promise<PartitionKeyRangeIdListMetricsResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listMetricsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/partitionKeyRangeId/{partitionKeyRangeId}/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PartitionMetricListResult
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
    Parameters.partitionKeyRangeId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
