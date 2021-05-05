/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  VirtualNetworkGatewayConnection,
  VirtualNetworkGatewayConnectionsListNextOptionalParams,
  VirtualNetworkGatewayConnectionsListOptionalParams,
  VirtualNetworkGatewayConnectionsCreateOrUpdateOptionalParams,
  VirtualNetworkGatewayConnectionsCreateOrUpdateResponse,
  VirtualNetworkGatewayConnectionsGetOptionalParams,
  VirtualNetworkGatewayConnectionsGetResponse,
  VirtualNetworkGatewayConnectionsDeleteOptionalParams,
  TagsObject,
  VirtualNetworkGatewayConnectionsUpdateTagsOptionalParams,
  VirtualNetworkGatewayConnectionsUpdateTagsResponse,
  ConnectionSharedKey,
  VirtualNetworkGatewayConnectionsSetSharedKeyOptionalParams,
  VirtualNetworkGatewayConnectionsSetSharedKeyResponse,
  VirtualNetworkGatewayConnectionsGetSharedKeyOptionalParams,
  VirtualNetworkGatewayConnectionsGetSharedKeyResponse,
  ConnectionResetSharedKey,
  VirtualNetworkGatewayConnectionsResetSharedKeyOptionalParams,
  VirtualNetworkGatewayConnectionsResetSharedKeyResponse,
  VirtualNetworkGatewayConnectionsStartPacketCaptureOptionalParams,
  VirtualNetworkGatewayConnectionsStartPacketCaptureResponse,
  VpnPacketCaptureStopParameters,
  VirtualNetworkGatewayConnectionsStopPacketCaptureOptionalParams,
  VirtualNetworkGatewayConnectionsStopPacketCaptureResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualNetworkGatewayConnections. */
export interface VirtualNetworkGatewayConnections {
  /**
   * The List VirtualNetworkGatewayConnections operation retrieves all the virtual network gateways
   * connections created.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: VirtualNetworkGatewayConnectionsListOptionalParams
  ): PagedAsyncIterableIterator<VirtualNetworkGatewayConnection>;
  /**
   * Creates or updates a virtual network gateway connection in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
   * @param parameters Parameters supplied to the create or update virtual network gateway connection
   *                   operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    virtualNetworkGatewayConnectionName: string,
    parameters: VirtualNetworkGatewayConnection,
    options?: VirtualNetworkGatewayConnectionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        VirtualNetworkGatewayConnectionsCreateOrUpdateResponse
      >,
      VirtualNetworkGatewayConnectionsCreateOrUpdateResponse
    >
  >;
  /**
   * Gets the specified virtual network gateway connection by resource group.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    virtualNetworkGatewayConnectionName: string,
    options?: VirtualNetworkGatewayConnectionsGetOptionalParams
  ): Promise<VirtualNetworkGatewayConnectionsGetResponse>;
  /**
   * Deletes the specified virtual network Gateway connection.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    virtualNetworkGatewayConnectionName: string,
    options?: VirtualNetworkGatewayConnectionsDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Updates a virtual network gateway connection tags.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
   * @param parameters Parameters supplied to update virtual network gateway connection tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    virtualNetworkGatewayConnectionName: string,
    parameters: TagsObject,
    options?: VirtualNetworkGatewayConnectionsUpdateTagsOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualNetworkGatewayConnectionsUpdateTagsResponse>,
      VirtualNetworkGatewayConnectionsUpdateTagsResponse
    >
  >;
  /**
   * The Put VirtualNetworkGatewayConnectionSharedKey operation sets the virtual network gateway
   * connection shared key for passed virtual network gateway connection in the specified resource group
   * through Network resource provider.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The virtual network gateway connection name.
   * @param parameters Parameters supplied to the Begin Set Virtual Network Gateway connection Shared key
   *                   operation throughNetwork resource provider.
   * @param options The options parameters.
   */
  setSharedKey(
    resourceGroupName: string,
    virtualNetworkGatewayConnectionName: string,
    parameters: ConnectionSharedKey,
    options?: VirtualNetworkGatewayConnectionsSetSharedKeyOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualNetworkGatewayConnectionsSetSharedKeyResponse>,
      VirtualNetworkGatewayConnectionsSetSharedKeyResponse
    >
  >;
  /**
   * The Get VirtualNetworkGatewayConnectionSharedKey operation retrieves information about the specified
   * virtual network gateway connection shared key through Network resource provider.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The virtual network gateway connection shared key name.
   * @param options The options parameters.
   */
  getSharedKey(
    resourceGroupName: string,
    virtualNetworkGatewayConnectionName: string,
    options?: VirtualNetworkGatewayConnectionsGetSharedKeyOptionalParams
  ): Promise<VirtualNetworkGatewayConnectionsGetSharedKeyResponse>;
  /**
   * The VirtualNetworkGatewayConnectionResetSharedKey operation resets the virtual network gateway
   * connection shared key for passed virtual network gateway connection in the specified resource group
   * through Network resource provider.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The virtual network gateway connection reset shared key
   *                                            Name.
   * @param parameters Parameters supplied to the begin reset virtual network gateway connection shared
   *                   key operation through network resource provider.
   * @param options The options parameters.
   */
  resetSharedKey(
    resourceGroupName: string,
    virtualNetworkGatewayConnectionName: string,
    parameters: ConnectionResetSharedKey,
    options?: VirtualNetworkGatewayConnectionsResetSharedKeyOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        VirtualNetworkGatewayConnectionsResetSharedKeyResponse
      >,
      VirtualNetworkGatewayConnectionsResetSharedKeyResponse
    >
  >;
  /**
   * Starts packet capture on virtual network gateway connection in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
   * @param options The options parameters.
   */
  startPacketCapture(
    resourceGroupName: string,
    virtualNetworkGatewayConnectionName: string,
    options?: VirtualNetworkGatewayConnectionsStartPacketCaptureOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        VirtualNetworkGatewayConnectionsStartPacketCaptureResponse
      >,
      VirtualNetworkGatewayConnectionsStartPacketCaptureResponse
    >
  >;
  /**
   * Stops packet capture on virtual network gateway connection in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway Connection.
   * @param parameters Virtual network gateway packet capture parameters supplied to stop packet capture
   *                   on gateway connection.
   * @param options The options parameters.
   */
  stopPacketCapture(
    resourceGroupName: string,
    virtualNetworkGatewayConnectionName: string,
    parameters: VpnPacketCaptureStopParameters,
    options?: VirtualNetworkGatewayConnectionsStopPacketCaptureOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        VirtualNetworkGatewayConnectionsStopPacketCaptureResponse
      >,
      VirtualNetworkGatewayConnectionsStopPacketCaptureResponse
    >
  >;
}
