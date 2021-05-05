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
  VirtualNetworkTap,
  VirtualNetworkTapsListAllNextOptionalParams,
  VirtualNetworkTapsListAllOptionalParams,
  VirtualNetworkTapsListByResourceGroupNextOptionalParams,
  VirtualNetworkTapsListByResourceGroupOptionalParams,
  VirtualNetworkTapsDeleteOptionalParams,
  VirtualNetworkTapsGetOptionalParams,
  VirtualNetworkTapsGetResponse,
  VirtualNetworkTapsCreateOrUpdateOptionalParams,
  VirtualNetworkTapsCreateOrUpdateResponse,
  TagsObject,
  VirtualNetworkTapsUpdateTagsOptionalParams,
  VirtualNetworkTapsUpdateTagsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualNetworkTaps. */
export interface VirtualNetworkTaps {
  /**
   * Gets all the VirtualNetworkTaps in a subscription.
   * @param options The options parameters.
   */
  listAll(
    options?: VirtualNetworkTapsListAllOptionalParams
  ): PagedAsyncIterableIterator<VirtualNetworkTap>;
  /**
   * Gets all the VirtualNetworkTaps in a subscription.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: VirtualNetworkTapsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<VirtualNetworkTap>;
  /**
   * Deletes the specified virtual network tap.
   * @param resourceGroupName The name of the resource group.
   * @param tapName The name of the virtual network tap.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    tapName: string,
    options?: VirtualNetworkTapsDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets information about the specified virtual network tap.
   * @param resourceGroupName The name of the resource group.
   * @param tapName The name of virtual network tap.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    tapName: string,
    options?: VirtualNetworkTapsGetOptionalParams
  ): Promise<VirtualNetworkTapsGetResponse>;
  /**
   * Creates or updates a Virtual Network Tap.
   * @param resourceGroupName The name of the resource group.
   * @param tapName The name of the virtual network tap.
   * @param parameters Parameters supplied to the create or update virtual network tap operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    tapName: string,
    parameters: VirtualNetworkTap,
    options?: VirtualNetworkTapsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualNetworkTapsCreateOrUpdateResponse>,
      VirtualNetworkTapsCreateOrUpdateResponse
    >
  >;
  /**
   * Updates an VirtualNetworkTap tags.
   * @param resourceGroupName The name of the resource group.
   * @param tapName The name of the tap.
   * @param tapParameters Parameters supplied to update VirtualNetworkTap tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    tapName: string,
    tapParameters: TagsObject,
    options?: VirtualNetworkTapsUpdateTagsOptionalParams
  ): Promise<VirtualNetworkTapsUpdateTagsResponse>;
}
