/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Collection } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";
import {
  Metric,
  CollectionListMetricsOptionalParams,
  Usage,
  CollectionListUsagesOptionalParams,
  MetricDefinition,
  CollectionListMetricDefinitionsOptionalParams,
  CollectionListMetricsResponse,
  CollectionListUsagesResponse,
  CollectionListMetricDefinitionsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a Collection. */
export class CollectionImpl implements Collection {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Initialize a new instance of the class Collection class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the metrics determined by the given filter for the given database account and collection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
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
    databaseRid: string,
    collectionRid: string,
    filter: string,
    options?: CollectionListMetricsOptionalParams
  ): PagedAsyncIterableIterator<Metric> {
    const iter = this.listMetricsPagingAll(
      resourceGroupName,
      accountName,
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
    databaseRid: string,
    collectionRid: string,
    filter: string,
    options?: CollectionListMetricsOptionalParams
  ): AsyncIterableIterator<Metric[]> {
    let result = await this._listMetrics(
      resourceGroupName,
      accountName,
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
    databaseRid: string,
    collectionRid: string,
    filter: string,
    options?: CollectionListMetricsOptionalParams
  ): AsyncIterableIterator<Metric> {
    for await (const page of this.listMetricsPagingPage(
      resourceGroupName,
      accountName,
      databaseRid,
      collectionRid,
      filter,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves the usages (most recent storage data) for the given collection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param options The options parameters.
   */
  public listUsages(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    options?: CollectionListUsagesOptionalParams
  ): PagedAsyncIterableIterator<Usage> {
    const iter = this.listUsagesPagingAll(
      resourceGroupName,
      accountName,
      databaseRid,
      collectionRid,
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
        return this.listUsagesPagingPage(
          resourceGroupName,
          accountName,
          databaseRid,
          collectionRid,
          options
        );
      }
    };
  }

  private async *listUsagesPagingPage(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    options?: CollectionListUsagesOptionalParams
  ): AsyncIterableIterator<Usage[]> {
    let result = await this._listUsages(
      resourceGroupName,
      accountName,
      databaseRid,
      collectionRid,
      options
    );
    yield result.value || [];
  }

  private async *listUsagesPagingAll(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    options?: CollectionListUsagesOptionalParams
  ): AsyncIterableIterator<Usage> {
    for await (const page of this.listUsagesPagingPage(
      resourceGroupName,
      accountName,
      databaseRid,
      collectionRid,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves metric definitions for the given collection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param options The options parameters.
   */
  public listMetricDefinitions(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    options?: CollectionListMetricDefinitionsOptionalParams
  ): PagedAsyncIterableIterator<MetricDefinition> {
    const iter = this.listMetricDefinitionsPagingAll(
      resourceGroupName,
      accountName,
      databaseRid,
      collectionRid,
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
        return this.listMetricDefinitionsPagingPage(
          resourceGroupName,
          accountName,
          databaseRid,
          collectionRid,
          options
        );
      }
    };
  }

  private async *listMetricDefinitionsPagingPage(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    options?: CollectionListMetricDefinitionsOptionalParams
  ): AsyncIterableIterator<MetricDefinition[]> {
    let result = await this._listMetricDefinitions(
      resourceGroupName,
      accountName,
      databaseRid,
      collectionRid,
      options
    );
    yield result.value || [];
  }

  private async *listMetricDefinitionsPagingAll(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    options?: CollectionListMetricDefinitionsOptionalParams
  ): AsyncIterableIterator<MetricDefinition> {
    for await (const page of this.listMetricDefinitionsPagingPage(
      resourceGroupName,
      accountName,
      databaseRid,
      collectionRid,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves the metrics determined by the given filter for the given database account and collection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
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
    databaseRid: string,
    collectionRid: string,
    filter: string,
    options?: CollectionListMetricsOptionalParams
  ): Promise<CollectionListMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        databaseRid,
        collectionRid,
        filter,
        options
      },
      listMetricsOperationSpec
    );
  }

  /**
   * Retrieves the usages (most recent storage data) for the given collection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param options The options parameters.
   */
  private _listUsages(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    options?: CollectionListUsagesOptionalParams
  ): Promise<CollectionListUsagesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, databaseRid, collectionRid, options },
      listUsagesOperationSpec
    );
  }

  /**
   * Retrieves metric definitions for the given collection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param options The options parameters.
   */
  private _listMetricDefinitions(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    options?: CollectionListMetricDefinitionsOptionalParams
  ): Promise<CollectionListMetricDefinitionsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, databaseRid, collectionRid, options },
      listMetricDefinitionsOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listMetricsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/metrics",
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
    Parameters.collectionRid
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listUsagesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/usages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsagesResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.databaseRid,
    Parameters.collectionRid
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMetricDefinitionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/metricDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricDefinitionsListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.databaseRid,
    Parameters.collectionRid
  ],
  headerParameters: [Parameters.accept],
  serializer
};
