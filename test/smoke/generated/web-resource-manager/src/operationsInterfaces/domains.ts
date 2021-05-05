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
  Domain,
  DomainsListNextOptionalParams,
  DomainsListOptionalParams,
  NameIdentifier,
  DomainRecommendationSearchParameters,
  DomainsListRecommendationsNextOptionalParams,
  DomainsListRecommendationsOptionalParams,
  DomainsListByResourceGroupNextOptionalParams,
  DomainsListByResourceGroupOptionalParams,
  DomainOwnershipIdentifier,
  DomainsListOwnershipIdentifiersNextOptionalParams,
  DomainsListOwnershipIdentifiersOptionalParams,
  DomainsCheckAvailabilityOptionalParams,
  DomainsCheckAvailabilityResponse,
  DomainsGetControlCenterSsoRequestOptionalParams,
  DomainsGetControlCenterSsoRequestResponse,
  DomainsGetOptionalParams,
  DomainsGetResponse,
  DomainsCreateOrUpdateOptionalParams,
  DomainsCreateOrUpdateResponse,
  DomainsDeleteOptionalParams,
  DomainPatchResource,
  DomainsUpdateOptionalParams,
  DomainsUpdateResponse,
  DomainsGetOwnershipIdentifierOptionalParams,
  DomainsGetOwnershipIdentifierResponse,
  DomainsCreateOrUpdateOwnershipIdentifierOptionalParams,
  DomainsCreateOrUpdateOwnershipIdentifierResponse,
  DomainsDeleteOwnershipIdentifierOptionalParams,
  DomainsUpdateOwnershipIdentifierOptionalParams,
  DomainsUpdateOwnershipIdentifierResponse,
  DomainsRenewOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Domains. */
export interface Domains {
  /**
   * Description for Get all domains in a subscription.
   * @param options The options parameters.
   */
  list(options?: DomainsListOptionalParams): PagedAsyncIterableIterator<Domain>;
  /**
   * Description for Get domain name recommendations based on keywords.
   * @param parameters Search parameters for domain name recommendations.
   * @param options The options parameters.
   */
  listRecommendations(
    parameters: DomainRecommendationSearchParameters,
    options?: DomainsListRecommendationsOptionalParams
  ): PagedAsyncIterableIterator<NameIdentifier>;
  /**
   * Description for Get all domains in a resource group.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: DomainsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Domain>;
  /**
   * Description for Lists domain ownership identifiers.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param options The options parameters.
   */
  listOwnershipIdentifiers(
    resourceGroupName: string,
    domainName: string,
    options?: DomainsListOwnershipIdentifiersOptionalParams
  ): PagedAsyncIterableIterator<DomainOwnershipIdentifier>;
  /**
   * Description for Check if a domain is available for registration.
   * @param identifier Name of the domain.
   * @param options The options parameters.
   */
  checkAvailability(
    identifier: NameIdentifier,
    options?: DomainsCheckAvailabilityOptionalParams
  ): Promise<DomainsCheckAvailabilityResponse>;
  /**
   * Description for Generate a single sign-on request for the domain management portal.
   * @param options The options parameters.
   */
  getControlCenterSsoRequest(
    options?: DomainsGetControlCenterSsoRequestOptionalParams
  ): Promise<DomainsGetControlCenterSsoRequestResponse>;
  /**
   * Description for Get a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    domainName: string,
    options?: DomainsGetOptionalParams
  ): Promise<DomainsGetResponse>;
  /**
   * Description for Creates or updates a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param domain Domain registration information.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    domainName: string,
    domain: Domain,
    options?: DomainsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DomainsCreateOrUpdateResponse>,
      DomainsCreateOrUpdateResponse
    >
  >;
  /**
   * Description for Delete a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    domainName: string,
    options?: DomainsDeleteOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Description for Creates or updates a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param domain Domain registration information.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    domainName: string,
    domain: DomainPatchResource,
    options?: DomainsUpdateOptionalParams
  ): Promise<DomainsUpdateResponse>;
  /**
   * Description for Get ownership identifier for domain
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param name Name of identifier.
   * @param options The options parameters.
   */
  getOwnershipIdentifier(
    resourceGroupName: string,
    domainName: string,
    name: string,
    options?: DomainsGetOwnershipIdentifierOptionalParams
  ): Promise<DomainsGetOwnershipIdentifierResponse>;
  /**
   * Description for Creates an ownership identifier for a domain or updates identifier details for an
   * existing identifer
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param name Name of identifier.
   * @param domainOwnershipIdentifier A JSON representation of the domain ownership properties.
   * @param options The options parameters.
   */
  createOrUpdateOwnershipIdentifier(
    resourceGroupName: string,
    domainName: string,
    name: string,
    domainOwnershipIdentifier: DomainOwnershipIdentifier,
    options?: DomainsCreateOrUpdateOwnershipIdentifierOptionalParams
  ): Promise<DomainsCreateOrUpdateOwnershipIdentifierResponse>;
  /**
   * Description for Delete ownership identifier for domain
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param name Name of identifier.
   * @param options The options parameters.
   */
  deleteOwnershipIdentifier(
    resourceGroupName: string,
    domainName: string,
    name: string,
    options?: DomainsDeleteOwnershipIdentifierOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Description for Creates an ownership identifier for a domain or updates identifier details for an
   * existing identifer
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param name Name of identifier.
   * @param domainOwnershipIdentifier A JSON representation of the domain ownership properties.
   * @param options The options parameters.
   */
  updateOwnershipIdentifier(
    resourceGroupName: string,
    domainName: string,
    name: string,
    domainOwnershipIdentifier: DomainOwnershipIdentifier,
    options?: DomainsUpdateOwnershipIdentifierOptionalParams
  ): Promise<DomainsUpdateOwnershipIdentifierResponse>;
  /**
   * Description for Renew a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  renew(
    resourceGroupName: string,
    domainName: string,
    options?: DomainsRenewOptionalParams
  ): Promise<coreHttp.RestResponse>;
}
