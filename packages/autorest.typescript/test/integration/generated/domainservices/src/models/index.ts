import * as coreClient from "@azure/core-client";

/** The list of domain service operation response. */
export interface OperationEntityListResult {
  /** The list of operations. */
  value?: OperationEntity[];
  /**
   * The continuation token for the next page of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** The operation supported by Domain Services. */
export interface OperationEntity {
  /** Operation name: {provider}/{resource}/{operation}. */
  name?: string;
  /** The operation supported by Domain Services. */
  display?: OperationDisplayInfo;
  /** The origin of the operation. */
  origin?: string;
}

/** The operation supported by Domain Services. */
export interface OperationDisplayInfo {
  /** The description of the operation. */
  description?: string;
  /** The action that users can perform, based on their permission level. */
  operation?: string;
  /** Service provider: Domain Services. */
  provider?: string;
  /** Resource on which the operation is performed. */
  resource?: string;
}

/** An error response from the Domain Services. */
export interface CloudError {
  /** An error response from the Domain Services. */
  error?: CloudErrorBody;
}

/** An error response from the Domain Services. */
export interface CloudErrorBody {
  /** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
  code?: string;
  /** A message describing the error, intended to be suitable for display in a user interface. */
  message?: string;
  /** The target of the particular error. For example, the name of the property in error. */
  target?: string;
  /** A list of additional details about the error. */
  details?: CloudErrorBody[];
}

/** The response from the List Domain Services operation. */
export interface DomainServiceListResult {
  /** the list of domain services. */
  value?: DomainService[];
  /**
   * The continuation token for the next page of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Replica Set Definition */
export interface ReplicaSet {
  /**
   * ReplicaSet Id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly replicaSetId?: string;
  /** Virtual network location */
  location?: string;
  /**
   * Virtual network site id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly vnetSiteId?: string;
  /** The name of the virtual network that Domain Services will be deployed on. The id of the subnet that Domain Services will be deployed on. /virtualNetwork/vnetName/subnets/subnetName. */
  subnetId?: string;
  /**
   * List of Domain Controller IP Address
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly domainControllerIpAddress?: string[];
  /**
   * External access ip address.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly externalAccessIpAddress?: string;
  /**
   * Status of Domain Service instance
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly serviceStatus?: string;
  /**
   * Last domain evaluation run DateTime
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly healthLastEvaluated?: Date;
  /**
   * List of Domain Health Monitors
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly healthMonitors?: HealthMonitor[];
  /**
   * List of Domain Health Alerts
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly healthAlerts?: HealthAlert[];
}

/** Health Monitor Description */
export interface HealthMonitor {
  /**
   * Health Monitor Id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Health Monitor Name
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Health Monitor Details
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: string;
}

/** Health Alert Description */
export interface HealthAlert {
  /**
   * Health Alert Id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Health Alert Name
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Health Alert Issue
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly issue?: string;
  /**
   * Health Alert Severity
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly severity?: string;
  /**
   * Health Alert Raised DateTime
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly raised?: Date;
  /**
   * Health Alert Last Detected DateTime
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastDetected?: Date;
  /**
   * Health Alert TSG Link
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resolutionUri?: string;
}

/** Secure LDAP Settings */
export interface LdapsSettings {
  /** A flag to determine whether or not Secure LDAP is enabled or disabled. */
  ldaps?: Ldaps;
  /** The certificate required to configure Secure LDAP. The parameter passed here should be a base64encoded representation of the certificate pfx file. */
  pfxCertificate?: string;
  /** The password to decrypt the provided Secure LDAP certificate pfx file. */
  pfxCertificatePassword?: string;
  /**
   * Public certificate used to configure secure ldap.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly publicCertificate?: string;
  /**
   * Thumbprint of configure ldaps certificate.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly certificateThumbprint?: string;
  /**
   * NotAfter DateTime of configure ldaps certificate.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly certificateNotAfter?: Date;
  /** A flag to determine whether or not Secure LDAP access over the internet is enabled or disabled. */
  externalAccess?: ExternalAccess;
}

/** Settings for Resource Forest */
export interface ResourceForestSettings {
  /** List of settings for Resource Forest */
  settings?: ForestTrust[];
  /** Resource Forest */
  resourceForest?: string;
}

/** Forest Trust Setting */
export interface ForestTrust {
  /** Trusted Domain FQDN */
  trustedDomainFqdn?: string;
  /** Trust Direction */
  trustDirection?: string;
  /** Friendly Name */
  friendlyName?: string;
  /** Remote Dns ips */
  remoteDnsIps?: string;
  /** Trust Password */
  trustPassword?: string;
}

/** Domain Security Settings */
export interface DomainSecuritySettings {
  /** A flag to determine whether or not NtlmV1 is enabled or disabled. */
  ntlmV1?: NtlmV1;
  /** A flag to determine whether or not TlsV1 is enabled or disabled. */
  tlsV1?: TlsV1;
  /** A flag to determine whether or not SyncNtlmPasswords is enabled or disabled. */
  syncNtlmPasswords?: SyncNtlmPasswords;
  /** A flag to determine whether or not SyncKerberosPasswords is enabled or disabled. */
  syncKerberosPasswords?: SyncKerberosPasswords;
  /** A flag to determine whether or not SyncOnPremPasswords is enabled or disabled. */
  syncOnPremPasswords?: SyncOnPremPasswords;
  /** A flag to determine whether or not KerberosRc4Encryption is enabled or disabled. */
  kerberosRc4Encryption?: KerberosRc4Encryption;
  /** A flag to determine whether or not KerberosArmoring is enabled or disabled. */
  kerberosArmoring?: KerberosArmoring;
}

/** Settings for notification */
export interface NotificationSettings {
  /** Should global admins be notified */
  notifyGlobalAdmins?: NotifyGlobalAdmins;
  /** Should domain controller admins be notified */
  notifyDcAdmins?: NotifyDcAdmins;
  /** The list of additional recipients */
  additionalRecipients?: string[];
}

/** Migration Properties */
export interface MigrationProperties {
  /**
   * Old Subnet Id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly oldSubnetId?: string;
  /**
   * Old Vnet Site Id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly oldVnetSiteId?: string;
  /**
   * Migration Progress
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly migrationProgress?: MigrationProgress;
}

/** Migration Progress */
export interface MigrationProgress {
  /** Completion Percentage */
  completionPercentage?: number;
  /** Progress Message */
  progressMessage?: string;
}

/** Configuration Diagnostics */
export interface ConfigDiagnostics {
  /** Last domain configuration diagnostics DateTime */
  lastExecuted?: Date;
  /** List of Configuration Diagnostics validator results. */
  validatorResults?: ConfigDiagnosticsValidatorResult[];
}

/** Config Diagnostics validator result data */
export interface ConfigDiagnosticsValidatorResult {
  /** Validator identifier */
  validatorId?: string;
  /** Replica set location and subnet name */
  replicaSetSubnetDisplayName?: string;
  /** Status for individual validator after running diagnostics. */
  status?: Status;
  /** List of resource config validation issues. */
  issues?: ConfigDiagnosticsValidatorResultIssue[];
}

/** Specific issue for a particular config diagnostics validator */
export interface ConfigDiagnosticsValidatorResultIssue {
  /** Validation issue identifier. */
  id?: string;
  /** List of domain resource property name or values used to compose a rich description. */
  descriptionParams?: string[];
}

/** The Resource model definition. */
export interface Resource {
  /**
   * Resource Id
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
  /** Resource etag */
  etag?: string;
  /**
   * The system meta data relating to this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** The response from the List OuContainer operation. */
export interface OuContainerListResult {
  /** The list of OuContainer. */
  value?: OuContainer[];
  /**
   * The continuation token for the next page of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Container Account Description */
export interface ContainerAccount {
  /** The account name */
  accountName?: string;
  /** The account spn */
  spn?: string;
  /** The account password */
  password?: string;
}

/** Domain service. */
export interface DomainService extends Resource {
  /**
   * Data Model Version
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly version?: number;
  /**
   * Azure Active Directory Tenant Id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** The name of the Azure domain that the user would like to deploy Domain Services to. */
  domainName?: string;
  /**
   * Deployment Id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly deploymentId?: string;
  /**
   * SyncOwner ReplicaSet Id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly syncOwner?: string;
  /** List of ReplicaSets */
  replicaSets?: ReplicaSet[];
  /** Secure LDAP Settings */
  ldapsSettings?: LdapsSettings;
  /** Resource Forest Settings */
  resourceForestSettings?: ResourceForestSettings;
  /** DomainSecurity Settings */
  domainSecuritySettings?: DomainSecuritySettings;
  /** Domain Configuration Type */
  domainConfigurationType?: string;
  /** Sku Type */
  sku?: string;
  /** Enabled or Disabled flag to turn on Group-based filtered sync */
  filteredSync?: FilteredSync;
  /** Notification Settings */
  notificationSettings?: NotificationSettings;
  /**
   * Migration Properties
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly migrationProperties?: MigrationProperties;
  /**
   * the current deployment or provisioning state, which only appears in the response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: string;
  /** Configuration diagnostics data containing latest execution from client. */
  configDiagnostics?: ConfigDiagnostics;
}

/** Resource for OuContainer. */
export interface OuContainer extends Resource {
  /**
   * Azure Active Directory tenant id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /**
   * The domain name of Domain Services.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly domainName?: string;
  /**
   * The Deployment id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly deploymentId?: string;
  /**
   * The OuContainer name
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly containerId?: string;
  /** The list of container accounts */
  accounts?: ContainerAccount[];
  /**
   * Status of OuContainer instance
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly serviceStatus?: string;
  /**
   * Distinguished Name of OuContainer instance
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly distinguishedName?: string;
  /**
   * The current deployment or provisioning state, which only appears in the response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: string;
}

/** Known values of {@link Ldaps} that the service accepts. */
export enum KnownLdaps {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled"
}

/**
 * Defines values for Ldaps. \
 * {@link KnownLdaps} can be used interchangeably with Ldaps,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type Ldaps = string;

/** Known values of {@link ExternalAccess} that the service accepts. */
export enum KnownExternalAccess {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled"
}

/**
 * Defines values for ExternalAccess. \
 * {@link KnownExternalAccess} can be used interchangeably with ExternalAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type ExternalAccess = string;

/** Known values of {@link NtlmV1} that the service accepts. */
export enum KnownNtlmV1 {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled"
}

/**
 * Defines values for NtlmV1. \
 * {@link KnownNtlmV1} can be used interchangeably with NtlmV1,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type NtlmV1 = string;

/** Known values of {@link TlsV1} that the service accepts. */
export enum KnownTlsV1 {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled"
}

/**
 * Defines values for TlsV1. \
 * {@link KnownTlsV1} can be used interchangeably with TlsV1,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type TlsV1 = string;

/** Known values of {@link SyncNtlmPasswords} that the service accepts. */
export enum KnownSyncNtlmPasswords {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled"
}

/**
 * Defines values for SyncNtlmPasswords. \
 * {@link KnownSyncNtlmPasswords} can be used interchangeably with SyncNtlmPasswords,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type SyncNtlmPasswords = string;

/** Known values of {@link SyncKerberosPasswords} that the service accepts. */
export enum KnownSyncKerberosPasswords {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled"
}

/**
 * Defines values for SyncKerberosPasswords. \
 * {@link KnownSyncKerberosPasswords} can be used interchangeably with SyncKerberosPasswords,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type SyncKerberosPasswords = string;

/** Known values of {@link SyncOnPremPasswords} that the service accepts. */
export enum KnownSyncOnPremPasswords {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled"
}

/**
 * Defines values for SyncOnPremPasswords. \
 * {@link KnownSyncOnPremPasswords} can be used interchangeably with SyncOnPremPasswords,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type SyncOnPremPasswords = string;

/** Known values of {@link KerberosRc4Encryption} that the service accepts. */
export enum KnownKerberosRc4Encryption {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled"
}

/**
 * Defines values for KerberosRc4Encryption. \
 * {@link KnownKerberosRc4Encryption} can be used interchangeably with KerberosRc4Encryption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type KerberosRc4Encryption = string;

/** Known values of {@link KerberosArmoring} that the service accepts. */
export enum KnownKerberosArmoring {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled"
}

/**
 * Defines values for KerberosArmoring. \
 * {@link KnownKerberosArmoring} can be used interchangeably with KerberosArmoring,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type KerberosArmoring = string;

/** Known values of {@link FilteredSync} that the service accepts. */
export enum KnownFilteredSync {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled"
}

/**
 * Defines values for FilteredSync. \
 * {@link KnownFilteredSync} can be used interchangeably with FilteredSync,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type FilteredSync = string;

/** Known values of {@link NotifyGlobalAdmins} that the service accepts. */
export enum KnownNotifyGlobalAdmins {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled"
}

/**
 * Defines values for NotifyGlobalAdmins. \
 * {@link KnownNotifyGlobalAdmins} can be used interchangeably with NotifyGlobalAdmins,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type NotifyGlobalAdmins = string;

/** Known values of {@link NotifyDcAdmins} that the service accepts. */
export enum KnownNotifyDcAdmins {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled"
}

/**
 * Defines values for NotifyDcAdmins. \
 * {@link KnownNotifyDcAdmins} can be used interchangeably with NotifyDcAdmins,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type NotifyDcAdmins = string;

/** Known values of {@link Status} that the service accepts. */
export enum KnownStatus {
  /** None */
  None = "None",
  /** Running */
  Running = "Running",
  /** OK */
  OK = "OK",
  /** Failure */
  Failure = "Failure",
  /** Warning */
  Warning = "Warning",
  /** Skipped */
  Skipped = "Skipped"
}

/**
 * Defines values for Status. \
 * {@link KnownStatus} can be used interchangeably with Status,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Running** \
 * **OK** \
 * **Failure** \
 * **Warning** \
 * **Skipped**
 */
export type Status = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Optional parameters. */
export interface DomainServiceOperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type DomainServiceOperationsListResponse = OperationEntityListResult;

/** Optional parameters. */
export interface DomainServiceOperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type DomainServiceOperationsListNextResponse = OperationEntityListResult;

/** Optional parameters. */
export interface DomainServicesListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type DomainServicesListResponse = DomainServiceListResult;

/** Optional parameters. */
export interface DomainServicesListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type DomainServicesListByResourceGroupResponse = DomainServiceListResult;

/** Optional parameters. */
export interface DomainServicesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type DomainServicesCreateOrUpdateResponse = DomainService;

/** Optional parameters. */
export interface DomainServicesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type DomainServicesGetResponse = DomainService;

/** Optional parameters. */
export interface DomainServicesDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface DomainServicesUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type DomainServicesUpdateResponse = DomainService;

/** Optional parameters. */
export interface DomainServicesListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type DomainServicesListNextResponse = DomainServiceListResult;

/** Optional parameters. */
export interface DomainServicesListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type DomainServicesListByResourceGroupNextResponse = DomainServiceListResult;

/** Optional parameters. */
export interface OuContainerOperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OuContainerOperationsListResponse = OperationEntityListResult;

/** Optional parameters. */
export interface OuContainerOperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OuContainerOperationsListNextResponse = OperationEntityListResult;

/** Optional parameters. */
export interface OuContainerListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OuContainerListResponse = OuContainerListResult;

/** Optional parameters. */
export interface OuContainerGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type OuContainerGetResponse = OuContainer;

/** Optional parameters. */
export interface OuContainerCreateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type OuContainerCreateResponse = OuContainer;

/** Optional parameters. */
export interface OuContainerDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface OuContainerUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type OuContainerUpdateResponse = OuContainer;

/** Optional parameters. */
export interface OuContainerListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OuContainerListNextResponse = OuContainerListResult;

/** Optional parameters. */
export interface DomainServicesClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
