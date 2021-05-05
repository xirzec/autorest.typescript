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
  InboundNatRule,
  InboundNatRulesListNextOptionalParams,
  InboundNatRulesListOptionalParams,
  InboundNatRulesDeleteOptionalParams,
  InboundNatRulesGetOptionalParams,
  InboundNatRulesGetResponse,
  InboundNatRulesCreateOrUpdateOptionalParams,
  InboundNatRulesCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a InboundNatRules. */
export interface InboundNatRules {
  /**
   * Gets all the inbound nat rules in a load balancer.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    loadBalancerName: string,
    options?: InboundNatRulesListOptionalParams
  ): PagedAsyncIterableIterator<InboundNatRule>;
  /**
   * Deletes the specified load balancer inbound nat rule.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param inboundNatRuleName The name of the inbound nat rule.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    loadBalancerName: string,
    inboundNatRuleName: string,
    options?: InboundNatRulesDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets the specified load balancer inbound nat rule.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param inboundNatRuleName The name of the inbound nat rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    loadBalancerName: string,
    inboundNatRuleName: string,
    options?: InboundNatRulesGetOptionalParams
  ): Promise<InboundNatRulesGetResponse>;
  /**
   * Creates or updates a load balancer inbound nat rule.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param inboundNatRuleName The name of the inbound nat rule.
   * @param inboundNatRuleParameters Parameters supplied to the create or update inbound nat rule
   *                                 operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    loadBalancerName: string,
    inboundNatRuleName: string,
    inboundNatRuleParameters: InboundNatRule,
    options?: InboundNatRulesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<InboundNatRulesCreateOrUpdateResponse>,
      InboundNatRulesCreateOrUpdateResponse
    >
  >;
}
