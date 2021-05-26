/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Plan for the managed application. */
export interface Plan {
  /** The plan name. */
  name: string;
  /** The publisher ID. */
  publisher: string;
  /** The product code. */
  product: string;
  /** The promotion code. */
  promotionCode?: string;
  /** The plan's version. */
  version: string;
}

/** SKU for the resource. */
export interface Sku {
  /** The SKU name. */
  name: string;
  /** The SKU tier. */
  tier?: string;
  /** The SKU size. */
  size?: string;
  /** The SKU family. */
  family?: string;
  /** The SKU model. */
  model?: string;
  /** The SKU capacity. */
  capacity?: number;
}

/** Identity for the resource. */
export interface Identity {
  /**
   * The principal ID of resource identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The tenant ID of resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** The identity type. */
  type?: "SystemAssigned";
}

/** Resource information. */
export interface Resource {
  /**
   * Resource ID
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Resource name
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Resource type
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** Resource location */
  location?: string;
  /** Resource tags */
  tags?: { [propertyName: string]: string };
}

/** Error response indicates managed application is not able to process the incoming request. The reason is provided in the error message. */
export interface ErrorResponse {
  /** Http status code. */
  httpStatus?: string;
  /** Error code. */
  errorCode?: string;
  /** Error message indicating why the operation failed. */
  errorMessage?: string;
}

/** The managed application provider authorization. */
export interface ApplicationProviderAuthorization {
  /** The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the managed application resources. */
  principalId: string;
  /** The provider's role definition identifier. This role will define all the permissions that the provider must have on the managed application's container resource group. This role definition cannot have permission to delete the resource group. */
  roleDefinitionId: string;
}

/** Managed application artifact. */
export interface ApplicationArtifact {
  /** The managed application artifact name. */
  name?: string;
  /** The managed application artifact blob uri. */
  uri?: string;
  /** The managed application artifact type. */
  type?: ApplicationArtifactType;
}

/** List of managed application definitions. */
export interface ApplicationDefinitionListResult {
  /** The array of managed application definitions. */
  value?: ApplicationDefinition[];
  /** The URL to use for getting the next set of results. */
  nextLink?: string;
}

/** List of managed applications. */
export interface ApplicationListResult {
  /** The array of managed applications. */
  value?: Application[];
  /** The URL to use for getting the next set of results. */
  nextLink?: string;
}

/** Plan for the managed application. */
export interface PlanPatchable {
  /** The plan name. */
  name?: string;
  /** The publisher ID. */
  publisher?: string;
  /** The product code. */
  product?: string;
  /** The promotion code. */
  promotionCode?: string;
  /** The plan's version. */
  version?: string;
}

/** Resource information. */
export type GenericResource = Resource & {
  /** ID of the resource that manages this resource. */
  managedBy?: string;
  /** The SKU of the resource. */
  sku?: Sku;
  /** The identity of the resource. */
  identity?: Identity;
};

/** Information about managed application. */
export type Application = GenericResource & {
  /** The plan information. */
  plan?: Plan;
  /** The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog. */
  kind: string;
  /** The managed resource group Id. */
  managedResourceGroupId: string;
  /** The fully qualified path of managed application definition Id. */
  applicationDefinitionId?: string;
  /** Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string. */
  parameters?: any;
  /**
   * Name and value pairs that define the managed application outputs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly outputs?: any;
  /**
   * The managed application provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
};

/** Information about managed application definition. */
export type ApplicationDefinition = GenericResource & {
  /** The managed application lock level. */
  lockLevel: ApplicationLockLevel;
  /** The managed application definition display name. */
  displayName?: string;
  /** A value indicating whether the package is enabled or not. */
  isEnabled?: string;
  /** The managed application provider authorizations. */
  authorizations: ApplicationProviderAuthorization[];
  /** The collection of managed application artifacts. The portal will use the files specified as artifacts to construct the user experience of creating a managed application from a managed application definition. */
  artifacts?: ApplicationArtifact[];
  /** The managed application definition description. */
  description?: string;
  /** The managed application definition package file Uri. Use this element */
  packageFileUri?: string;
  /** The inline main template json which has resources to be provisioned. It can be a JObject or well-formed JSON string. */
  mainTemplate?: any;
  /** The createUiDefinition json for the backing template with Microsoft.Solutions/applications resource. It can be a JObject or well-formed JSON string. */
  createUiDefinition?: any;
};

/** Information about managed application. */
export type ApplicationPatchable = GenericResource & {
  /** The plan information. */
  plan?: PlanPatchable;
  /** The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog. */
  kind?: string;
  /** The managed resource group Id. */
  managedResourceGroupId?: string;
  /** The fully qualified path of managed application definition Id. */
  applicationDefinitionId?: string;
  /** Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string. */
  parameters?: any;
  /**
   * Name and value pairs that define the managed application outputs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly outputs?: any;
  /**
   * The managed application provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
};

/** Known values of {@link ProvisioningState} that the service accepts. */
export const enum KnownProvisioningState {
  Accepted = "Accepted",
  Running = "Running",
  Ready = "Ready",
  Creating = "Creating",
  Created = "Created",
  Deleting = "Deleting",
  Deleted = "Deleted",
  Canceled = "Canceled",
  Failed = "Failed",
  Succeeded = "Succeeded",
  Updating = "Updating"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **Accepted** \
 * **Running** \
 * **Ready** \
 * **Creating** \
 * **Created** \
 * **Deleting** \
 * **Deleted** \
 * **Canceled** \
 * **Failed** \
 * **Succeeded** \
 * **Updating**
 */
export type ProvisioningState = string;
/** Defines values for ApplicationLockLevel. */
export type ApplicationLockLevel = "CanNotDelete" | "ReadOnly" | "None";
/** Defines values for ApplicationArtifactType. */
export type ApplicationArtifactType = "Template" | "Custom";

/** Optional parameters. */
export interface ApplicationsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ApplicationsGetResponse = Application;

/** Optional parameters. */
export interface ApplicationsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ApplicationsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type ApplicationsCreateOrUpdateResponse = Application;

/** Optional parameters. */
export interface ApplicationsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Parameters supplied to update an existing managed application. */
  parameters?: Application;
}

/** Contains response data for the update operation. */
export type ApplicationsUpdateResponse = Application;

/** Optional parameters. */
export interface ApplicationsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type ApplicationsListByResourceGroupResponse = ApplicationListResult;

/** Optional parameters. */
export interface ApplicationsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type ApplicationsListBySubscriptionResponse = ApplicationListResult;

/** Optional parameters. */
export interface ApplicationsGetByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getById operation. */
export type ApplicationsGetByIdResponse = Application;

/** Optional parameters. */
export interface ApplicationsDeleteByIdOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ApplicationsCreateOrUpdateByIdOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdateById operation. */
export type ApplicationsCreateOrUpdateByIdResponse = Application;

/** Optional parameters. */
export interface ApplicationsUpdateByIdOptionalParams
  extends coreClient.OperationOptions {
  /** Parameters supplied to update an existing managed application. */
  parameters?: Application;
}

/** Contains response data for the updateById operation. */
export type ApplicationsUpdateByIdResponse = Application;

/** Optional parameters. */
export interface ApplicationsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type ApplicationsListByResourceGroupNextResponse = ApplicationListResult;

/** Optional parameters. */
export interface ApplicationsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type ApplicationsListBySubscriptionNextResponse = ApplicationListResult;

/** Optional parameters. */
export interface ApplicationDefinitionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ApplicationDefinitionsGetResponse = ApplicationDefinition;

/** Optional parameters. */
export interface ApplicationDefinitionsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ApplicationDefinitionsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type ApplicationDefinitionsCreateOrUpdateResponse = ApplicationDefinition;

/** Optional parameters. */
export interface ApplicationDefinitionsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type ApplicationDefinitionsListByResourceGroupResponse = ApplicationDefinitionListResult;

/** Optional parameters. */
export interface ApplicationDefinitionsGetByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getById operation. */
export type ApplicationDefinitionsGetByIdResponse = ApplicationDefinition;

/** Optional parameters. */
export interface ApplicationDefinitionsDeleteByIdOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ApplicationDefinitionsCreateOrUpdateByIdOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdateById operation. */
export type ApplicationDefinitionsCreateOrUpdateByIdResponse = ApplicationDefinition;

/** Optional parameters. */
export interface ApplicationDefinitionsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type ApplicationDefinitionsListByResourceGroupNextResponse = ApplicationDefinitionListResult;

/** Optional parameters. */
export interface ApplicationClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
