/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { CassandraResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  CassandraKeyspaceGetResults,
  CassandraResourcesListCassandraKeyspacesOptionalParams,
  CassandraTableGetResults,
  CassandraResourcesListCassandraTablesOptionalParams,
  CassandraResourcesListCassandraKeyspacesResponse,
  CassandraResourcesGetCassandraKeyspaceOptionalParams,
  CassandraResourcesGetCassandraKeyspaceResponse,
  CassandraKeyspaceCreateUpdateParameters,
  CassandraResourcesCreateUpdateCassandraKeyspaceOptionalParams,
  CassandraResourcesCreateUpdateCassandraKeyspaceResponse,
  CassandraResourcesDeleteCassandraKeyspaceOptionalParams,
  CassandraResourcesGetCassandraKeyspaceThroughputOptionalParams,
  CassandraResourcesGetCassandraKeyspaceThroughputResponse,
  ThroughputSettingsUpdateParameters,
  CassandraResourcesUpdateCassandraKeyspaceThroughputOptionalParams,
  CassandraResourcesUpdateCassandraKeyspaceThroughputResponse,
  CassandraResourcesListCassandraTablesResponse,
  CassandraResourcesGetCassandraTableOptionalParams,
  CassandraResourcesGetCassandraTableResponse,
  CassandraTableCreateUpdateParameters,
  CassandraResourcesCreateUpdateCassandraTableOptionalParams,
  CassandraResourcesCreateUpdateCassandraTableResponse,
  CassandraResourcesDeleteCassandraTableOptionalParams,
  CassandraResourcesGetCassandraTableThroughputOptionalParams,
  CassandraResourcesGetCassandraTableThroughputResponse,
  CassandraResourcesUpdateCassandraTableThroughputOptionalParams,
  CassandraResourcesUpdateCassandraTableThroughputResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a CassandraResources. */
export class CassandraResourcesImpl implements CassandraResources {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Initialize a new instance of the class CassandraResources class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the Cassandra keyspaces under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  public listCassandraKeyspaces(
    resourceGroupName: string,
    accountName: string,
    options?: CassandraResourcesListCassandraKeyspacesOptionalParams
  ): PagedAsyncIterableIterator<CassandraKeyspaceGetResults> {
    const iter = this.listCassandraKeyspacesPagingAll(
      resourceGroupName,
      accountName,
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
        return this.listCassandraKeyspacesPagingPage(
          resourceGroupName,
          accountName,
          options
        );
      }
    };
  }

  private async *listCassandraKeyspacesPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: CassandraResourcesListCassandraKeyspacesOptionalParams
  ): AsyncIterableIterator<CassandraKeyspaceGetResults[]> {
    let result = await this._listCassandraKeyspaces(
      resourceGroupName,
      accountName,
      options
    );
    yield result.value || [];
  }

  private async *listCassandraKeyspacesPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: CassandraResourcesListCassandraKeyspacesOptionalParams
  ): AsyncIterableIterator<CassandraKeyspaceGetResults> {
    for await (const page of this.listCassandraKeyspacesPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the Cassandra table under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param options The options parameters.
   */
  public listCassandraTables(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: CassandraResourcesListCassandraTablesOptionalParams
  ): PagedAsyncIterableIterator<CassandraTableGetResults> {
    const iter = this.listCassandraTablesPagingAll(
      resourceGroupName,
      accountName,
      keyspaceName,
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
        return this.listCassandraTablesPagingPage(
          resourceGroupName,
          accountName,
          keyspaceName,
          options
        );
      }
    };
  }

  private async *listCassandraTablesPagingPage(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: CassandraResourcesListCassandraTablesOptionalParams
  ): AsyncIterableIterator<CassandraTableGetResults[]> {
    let result = await this._listCassandraTables(
      resourceGroupName,
      accountName,
      keyspaceName,
      options
    );
    yield result.value || [];
  }

  private async *listCassandraTablesPagingAll(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: CassandraResourcesListCassandraTablesOptionalParams
  ): AsyncIterableIterator<CassandraTableGetResults> {
    for await (const page of this.listCassandraTablesPagingPage(
      resourceGroupName,
      accountName,
      keyspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the Cassandra keyspaces under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  private _listCassandraKeyspaces(
    resourceGroupName: string,
    accountName: string,
    options?: CassandraResourcesListCassandraKeyspacesOptionalParams
  ): Promise<CassandraResourcesListCassandraKeyspacesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listCassandraKeyspacesOperationSpec
    );
  }

  /**
   * Gets the Cassandra keyspaces under an existing Azure Cosmos DB database account with the provided
   * name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param options The options parameters.
   */
  getCassandraKeyspace(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: CassandraResourcesGetCassandraKeyspaceOptionalParams
  ): Promise<CassandraResourcesGetCassandraKeyspaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, keyspaceName, options },
      getCassandraKeyspaceOperationSpec
    );
  }

  /**
   * Create or update an Azure Cosmos DB Cassandra keyspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param createUpdateCassandraKeyspaceParameters The parameters to provide for the current Cassandra
   *                                                keyspace.
   * @param options The options parameters.
   */
  async beginCreateUpdateCassandraKeyspace(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    createUpdateCassandraKeyspaceParameters: CassandraKeyspaceCreateUpdateParameters,
    options?: CassandraResourcesCreateUpdateCassandraKeyspaceOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        CassandraResourcesCreateUpdateCassandraKeyspaceResponse
      >,
      CassandraResourcesCreateUpdateCassandraKeyspaceResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CassandraResourcesCreateUpdateCassandraKeyspaceResponse> => {
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
        accountName,
        keyspaceName,
        createUpdateCassandraKeyspaceParameters,
        options
      },
      createUpdateCassandraKeyspaceOperationSpec,
      sendOperation
    );
  }

  /**
   * Create or update an Azure Cosmos DB Cassandra keyspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param createUpdateCassandraKeyspaceParameters The parameters to provide for the current Cassandra
   *                                                keyspace.
   * @param options The options parameters.
   */
  async beginCreateUpdateCassandraKeyspaceAndWait(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    createUpdateCassandraKeyspaceParameters: CassandraKeyspaceCreateUpdateParameters,
    options?: CassandraResourcesCreateUpdateCassandraKeyspaceOptionalParams
  ): Promise<CassandraResourcesCreateUpdateCassandraKeyspaceResponse> {
    const poller = await this.beginCreateUpdateCassandraKeyspace(
      resourceGroupName,
      accountName,
      keyspaceName,
      createUpdateCassandraKeyspaceParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing Azure Cosmos DB Cassandra keyspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param options The options parameters.
   */
  async beginDeleteCassandraKeyspace(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: CassandraResourcesDeleteCassandraKeyspaceOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      { resourceGroupName, accountName, keyspaceName, options },
      deleteCassandraKeyspaceOperationSpec,
      sendOperation
    );
  }

  /**
   * Deletes an existing Azure Cosmos DB Cassandra keyspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param options The options parameters.
   */
  async beginDeleteCassandraKeyspaceAndWait(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: CassandraResourcesDeleteCassandraKeyspaceOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteCassandraKeyspace(
      resourceGroupName,
      accountName,
      keyspaceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the RUs per second of the Cassandra Keyspace under an existing Azure Cosmos DB database account
   * with the provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param options The options parameters.
   */
  getCassandraKeyspaceThroughput(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: CassandraResourcesGetCassandraKeyspaceThroughputOptionalParams
  ): Promise<CassandraResourcesGetCassandraKeyspaceThroughputResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, keyspaceName, options },
      getCassandraKeyspaceThroughputOperationSpec
    );
  }

  /**
   * Update RUs per second of an Azure Cosmos DB Cassandra Keyspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
   *                                   Cassandra Keyspace.
   * @param options The options parameters.
   */
  async beginUpdateCassandraKeyspaceThroughput(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: CassandraResourcesUpdateCassandraKeyspaceThroughputOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        CassandraResourcesUpdateCassandraKeyspaceThroughputResponse
      >,
      CassandraResourcesUpdateCassandraKeyspaceThroughputResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CassandraResourcesUpdateCassandraKeyspaceThroughputResponse> => {
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
        accountName,
        keyspaceName,
        updateThroughputParameters,
        options
      },
      updateCassandraKeyspaceThroughputOperationSpec,
      sendOperation
    );
  }

  /**
   * Update RUs per second of an Azure Cosmos DB Cassandra Keyspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
   *                                   Cassandra Keyspace.
   * @param options The options parameters.
   */
  async beginUpdateCassandraKeyspaceThroughputAndWait(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: CassandraResourcesUpdateCassandraKeyspaceThroughputOptionalParams
  ): Promise<CassandraResourcesUpdateCassandraKeyspaceThroughputResponse> {
    const poller = await this.beginUpdateCassandraKeyspaceThroughput(
      resourceGroupName,
      accountName,
      keyspaceName,
      updateThroughputParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists the Cassandra table under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param options The options parameters.
   */
  private _listCassandraTables(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: CassandraResourcesListCassandraTablesOptionalParams
  ): Promise<CassandraResourcesListCassandraTablesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, keyspaceName, options },
      listCassandraTablesOperationSpec
    );
  }

  /**
   * Gets the Cassandra table under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  getCassandraTable(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    options?: CassandraResourcesGetCassandraTableOptionalParams
  ): Promise<CassandraResourcesGetCassandraTableResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, keyspaceName, tableName, options },
      getCassandraTableOperationSpec
    );
  }

  /**
   * Create or update an Azure Cosmos DB Cassandra Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param createUpdateCassandraTableParameters The parameters to provide for the current Cassandra
   *                                             Table.
   * @param options The options parameters.
   */
  async beginCreateUpdateCassandraTable(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    createUpdateCassandraTableParameters: CassandraTableCreateUpdateParameters,
    options?: CassandraResourcesCreateUpdateCassandraTableOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CassandraResourcesCreateUpdateCassandraTableResponse>,
      CassandraResourcesCreateUpdateCassandraTableResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CassandraResourcesCreateUpdateCassandraTableResponse> => {
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
        accountName,
        keyspaceName,
        tableName,
        createUpdateCassandraTableParameters,
        options
      },
      createUpdateCassandraTableOperationSpec,
      sendOperation
    );
  }

  /**
   * Create or update an Azure Cosmos DB Cassandra Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param createUpdateCassandraTableParameters The parameters to provide for the current Cassandra
   *                                             Table.
   * @param options The options parameters.
   */
  async beginCreateUpdateCassandraTableAndWait(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    createUpdateCassandraTableParameters: CassandraTableCreateUpdateParameters,
    options?: CassandraResourcesCreateUpdateCassandraTableOptionalParams
  ): Promise<CassandraResourcesCreateUpdateCassandraTableResponse> {
    const poller = await this.beginCreateUpdateCassandraTable(
      resourceGroupName,
      accountName,
      keyspaceName,
      tableName,
      createUpdateCassandraTableParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing Azure Cosmos DB Cassandra table.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  async beginDeleteCassandraTable(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    options?: CassandraResourcesDeleteCassandraTableOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      { resourceGroupName, accountName, keyspaceName, tableName, options },
      deleteCassandraTableOperationSpec,
      sendOperation
    );
  }

  /**
   * Deletes an existing Azure Cosmos DB Cassandra table.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  async beginDeleteCassandraTableAndWait(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    options?: CassandraResourcesDeleteCassandraTableOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteCassandraTable(
      resourceGroupName,
      accountName,
      keyspaceName,
      tableName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the RUs per second of the Cassandra table under an existing Azure Cosmos DB database account
   * with the provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  getCassandraTableThroughput(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    options?: CassandraResourcesGetCassandraTableThroughputOptionalParams
  ): Promise<CassandraResourcesGetCassandraTableThroughputResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, keyspaceName, tableName, options },
      getCassandraTableThroughputOperationSpec
    );
  }

  /**
   * Update RUs per second of an Azure Cosmos DB Cassandra table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
   *                                   Cassandra table.
   * @param options The options parameters.
   */
  async beginUpdateCassandraTableThroughput(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: CassandraResourcesUpdateCassandraTableThroughputOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        CassandraResourcesUpdateCassandraTableThroughputResponse
      >,
      CassandraResourcesUpdateCassandraTableThroughputResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CassandraResourcesUpdateCassandraTableThroughputResponse> => {
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
        accountName,
        keyspaceName,
        tableName,
        updateThroughputParameters,
        options
      },
      updateCassandraTableThroughputOperationSpec,
      sendOperation
    );
  }

  /**
   * Update RUs per second of an Azure Cosmos DB Cassandra table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
   *                                   Cassandra table.
   * @param options The options parameters.
   */
  async beginUpdateCassandraTableThroughputAndWait(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: CassandraResourcesUpdateCassandraTableThroughputOptionalParams
  ): Promise<CassandraResourcesUpdateCassandraTableThroughputResponse> {
    const poller = await this.beginUpdateCassandraTableThroughput(
      resourceGroupName,
      accountName,
      keyspaceName,
      tableName,
      updateThroughputParameters,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listCassandraKeyspacesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CassandraKeyspaceListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getCassandraKeyspaceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CassandraKeyspaceGetResults
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.keyspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createUpdateCassandraKeyspaceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CassandraKeyspaceGetResults
    },
    201: {
      bodyMapper: Mappers.CassandraKeyspaceGetResults
    },
    202: {
      bodyMapper: Mappers.CassandraKeyspaceGetResults
    },
    204: {
      bodyMapper: Mappers.CassandraKeyspaceGetResults
    }
  },
  requestBody: Parameters.createUpdateCassandraKeyspaceParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.keyspaceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteCassandraKeyspaceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.keyspaceName
  ],
  serializer
};
const getCassandraKeyspaceThroughputOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/throughputSettings/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.keyspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateCassandraKeyspaceThroughputOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/throughputSettings/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    201: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    202: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    204: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    }
  },
  requestBody: Parameters.updateThroughputParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.keyspaceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listCassandraTablesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CassandraTableListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.keyspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getCassandraTableOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CassandraTableGetResults
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName,
    Parameters.keyspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createUpdateCassandraTableOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CassandraTableGetResults
    },
    201: {
      bodyMapper: Mappers.CassandraTableGetResults
    },
    202: {
      bodyMapper: Mappers.CassandraTableGetResults
    },
    204: {
      bodyMapper: Mappers.CassandraTableGetResults
    }
  },
  requestBody: Parameters.createUpdateCassandraTableParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName,
    Parameters.keyspaceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteCassandraTableOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName,
    Parameters.keyspaceName
  ],
  serializer
};
const getCassandraTableThroughputOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}/throughputSettings/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName,
    Parameters.keyspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateCassandraTableThroughputOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}/throughputSettings/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    201: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    202: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    204: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    }
  },
  requestBody: Parameters.updateThroughputParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName,
    Parameters.keyspaceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
