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
  FirewallPolicy,
  FirewallPoliciesListNextOptionalParams,
  FirewallPoliciesListOptionalParams,
  FirewallPoliciesListAllNextOptionalParams,
  FirewallPoliciesListAllOptionalParams,
  FirewallPoliciesDeleteOptionalParams,
  FirewallPoliciesGetOptionalParams,
  FirewallPoliciesGetResponse,
  FirewallPoliciesCreateOrUpdateOptionalParams,
  FirewallPoliciesCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FirewallPolicies. */
export interface FirewallPolicies {
  /**
   * Lists all Firewall Policies in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: FirewallPoliciesListOptionalParams
  ): PagedAsyncIterableIterator<FirewallPolicy>;
  /**
   * Gets all the Firewall Policies in a subscription.
   * @param options The options parameters.
   */
  listAll(
    options?: FirewallPoliciesListAllOptionalParams
  ): PagedAsyncIterableIterator<FirewallPolicy>;
  /**
   * Deletes the specified Firewall Policy.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    firewallPolicyName: string,
    options?: FirewallPoliciesDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets the specified Firewall Policy.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    firewallPolicyName: string,
    options?: FirewallPoliciesGetOptionalParams
  ): Promise<FirewallPoliciesGetResponse>;
  /**
   * Creates or updates the specified Firewall Policy.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param parameters Parameters supplied to the create or update Firewall Policy operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    firewallPolicyName: string,
    parameters: FirewallPolicy,
    options?: FirewallPoliciesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<FirewallPoliciesCreateOrUpdateResponse>,
      FirewallPoliciesCreateOrUpdateResponse
    >
  >;
}
