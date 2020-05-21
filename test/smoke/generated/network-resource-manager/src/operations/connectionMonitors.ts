/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClient } from "../networkManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  ConnectionMonitor,
  ConnectionMonitorsCreateOrUpdateResponse,
  ConnectionMonitorsGetResponse,
  TagsObject,
  ConnectionMonitorsUpdateTagsResponse,
  ConnectionMonitorsQueryResponse,
  ConnectionMonitorsListResponse
} from "../models";

/**
 * Class representing a ConnectionMonitors.
 */
export class ConnectionMonitors {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class ConnectionMonitors class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Create or update a connection monitor.
   * @param resourceGroupName The name of the resource group containing Network Watcher.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param connectionMonitorName The name of the connection monitor.
   * @param parameters Parameters that define the operation to create a connection monitor.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    networkWatcherName: string,
    connectionMonitorName: string,
    parameters: ConnectionMonitor,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<ConnectionMonitorsCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "azure-async-operation"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      connectionMonitorName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        ConnectionMonitorsCreateOrUpdateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      createOrUpdateOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "azure-async-operation"
    });
  }

  /**
   * Gets a connection monitor by name.
   * @param resourceGroupName The name of the resource group containing Network Watcher.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param connectionMonitorName The name of the connection monitor.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkWatcherName: string,
    connectionMonitorName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ConnectionMonitorsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkWatcherName,
        connectionMonitorName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<ConnectionMonitorsGetResponse>;
  }

  /**
   * Deletes the specified connection monitor.
   * @param resourceGroupName The name of the resource group containing Network Watcher.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param connectionMonitorName The name of the connection monitor.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    networkWatcherName: string,
    connectionMonitorName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      connectionMonitorName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      deleteOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: deleteOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Update tags of the specified connection monitor.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param connectionMonitorName The name of the connection monitor.
   * @param parameters Parameters supplied to update connection monitor tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    networkWatcherName: string,
    connectionMonitorName: string,
    parameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<ConnectionMonitorsUpdateTagsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkWatcherName,
        connectionMonitorName,
        parameters,
        options: operationOptions
      },
      updateTagsOperationSpec
    ) as Promise<ConnectionMonitorsUpdateTagsResponse>;
  }

  /**
   * Stops the specified connection monitor.
   * @param resourceGroupName The name of the resource group containing Network Watcher.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param connectionMonitorName The name of the connection monitor.
   * @param options The options parameters.
   */
  async stop(
    resourceGroupName: string,
    networkWatcherName: string,
    connectionMonitorName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      connectionMonitorName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(args, stopOperationSpec);

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: stopOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Starts the specified connection monitor.
   * @param resourceGroupName The name of the resource group containing Network Watcher.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param connectionMonitorName The name of the connection monitor.
   * @param options The options parameters.
   */
  async start(
    resourceGroupName: string,
    networkWatcherName: string,
    connectionMonitorName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      connectionMonitorName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      startOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: startOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Query a snapshot of the most recent connection states.
   * @param resourceGroupName The name of the resource group containing Network Watcher.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param connectionMonitorName The name given to the connection monitor.
   * @param options The options parameters.
   */
  async query(
    resourceGroupName: string,
    networkWatcherName: string,
    connectionMonitorName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<ConnectionMonitorsQueryResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      connectionMonitorName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        ConnectionMonitorsQueryResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      queryOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: queryOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Lists all connection monitors for the specified Network Watcher.
   * @param resourceGroupName The name of the resource group containing Network Watcher.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    networkWatcherName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ConnectionMonitorsListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, networkWatcherName, options: operationOptions },
      listOperationSpec
    ) as Promise<ConnectionMonitorsListResponse>;
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

const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/connectionMonitors/{connectionMonitorName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionMonitorResult
    },
    201: {
      bodyMapper: Mappers.ConnectionMonitorResult
    },
    202: {
      bodyMapper: Mappers.ConnectionMonitorResult
    },
    204: {
      bodyMapper: Mappers.ConnectionMonitorResult
    }
  },
  requestBody: Parameters.parameters35,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName,
    Parameters.connectionMonitorName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/connectionMonitors/{connectionMonitorName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionMonitorResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName,
    Parameters.connectionMonitorName
  ],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/connectionMonitors/{connectionMonitorName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName,
    Parameters.connectionMonitorName
  ],
  serializer
};
const updateTagsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/connectionMonitors/{connectionMonitorName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionMonitorResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName,
    Parameters.connectionMonitorName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const stopOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/connectionMonitors/{connectionMonitorName}/stop",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName,
    Parameters.connectionMonitorName
  ],
  serializer
};
const startOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/connectionMonitors/{connectionMonitorName}/start",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName,
    Parameters.connectionMonitorName
  ],
  serializer
};
const queryOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/connectionMonitors/{connectionMonitorName}/query",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionMonitorQueryResult
    },
    201: {
      bodyMapper: Mappers.ConnectionMonitorQueryResult
    },
    202: {
      bodyMapper: Mappers.ConnectionMonitorQueryResult
    },
    204: {
      bodyMapper: Mappers.ConnectionMonitorQueryResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName,
    Parameters.connectionMonitorName
  ],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/connectionMonitors",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionMonitorListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  serializer
};
