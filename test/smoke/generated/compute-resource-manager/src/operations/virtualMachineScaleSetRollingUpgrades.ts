/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { VirtualMachineScaleSetRollingUpgrades } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  VirtualMachineScaleSetRollingUpgradesCancelOptionalParams,
  VirtualMachineScaleSetRollingUpgradesStartOSUpgradeOptionalParams,
  VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeOptionalParams,
  VirtualMachineScaleSetRollingUpgradesGetLatestOptionalParams,
  VirtualMachineScaleSetRollingUpgradesGetLatestResponse
} from "../models";

/** Class representing a VirtualMachineScaleSetRollingUpgrades. */
export class VirtualMachineScaleSetRollingUpgradesImpl
  implements VirtualMachineScaleSetRollingUpgrades {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class VirtualMachineScaleSetRollingUpgrades class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Cancels the current virtual machine scale set rolling upgrade.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async cancel(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetRollingUpgradesCancelOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      vmScaleSetName,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      cancelOperationSpec,
      sendOperation
    );
  }

  /**
   * Starts a rolling upgrade to move all virtual machine scale set instances to the latest available
   * Platform Image OS version. Instances which are already running the latest available OS version are
   * not affected.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async startOSUpgrade(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetRollingUpgradesStartOSUpgradeOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      vmScaleSetName,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      startOSUpgradeOperationSpec,
      sendOperation
    );
  }

  /**
   * Starts a rolling upgrade to move all extensions for all virtual machine scale set instances to the
   * latest available extension version. Instances which are already running the latest extension
   * versions are not affected.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async startExtensionUpgrade(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      vmScaleSetName,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      startExtensionUpgradeOperationSpec,
      sendOperation
    );
  }

  /**
   * Gets the status of the latest virtual machine scale set rolling upgrade.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  getLatest(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetRollingUpgradesGetLatestOptionalParams
  ): Promise<VirtualMachineScaleSetRollingUpgradesGetLatestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      vmScaleSetName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getLatestOperationSpec
    ) as Promise<VirtualMachineScaleSetRollingUpgradesGetLatestResponse>;
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

const cancelOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/rollingUpgrades/cancel",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  serializer
};
const startOSUpgradeOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/osRollingUpgrade",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  serializer
};
const startExtensionUpgradeOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensionRollingUpgrade",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  serializer
};
const getLatestOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/rollingUpgrades/latest",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RollingUpgradeStatusInfo
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
