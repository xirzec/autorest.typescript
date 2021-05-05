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
import {
  LoadBalancingRule,
  LoadBalancerLoadBalancingRulesListNextOptionalParams,
  LoadBalancerLoadBalancingRulesListOptionalParams,
  LoadBalancerLoadBalancingRulesGetOptionalParams,
  LoadBalancerLoadBalancingRulesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a LoadBalancerLoadBalancingRules. */
export interface LoadBalancerLoadBalancingRules {
  /**
   * Gets all the load balancing rules in a load balancer.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    loadBalancerName: string,
    options?: LoadBalancerLoadBalancingRulesListOptionalParams
  ): PagedAsyncIterableIterator<LoadBalancingRule>;
  /**
   * Gets the specified load balancer load balancing rule.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param loadBalancingRuleName The name of the load balancing rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    loadBalancerName: string,
    loadBalancingRuleName: string,
    options?: LoadBalancerLoadBalancingRulesGetOptionalParams
  ): Promise<LoadBalancerLoadBalancingRulesGetResponse>;
}
