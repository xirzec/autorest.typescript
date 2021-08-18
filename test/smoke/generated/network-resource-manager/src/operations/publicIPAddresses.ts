/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PublicIPAddresses } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  PublicIPAddress,
  PublicIPAddressesListAllNextOptionalParams,
  PublicIPAddressesListAllOptionalParams,
  PublicIPAddressesListNextOptionalParams,
  PublicIPAddressesListOptionalParams,
  PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesNextOptionalParams,
  PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesOptionalParams,
  PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesNextOptionalParams,
  PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesOptionalParams,
  PublicIPAddressesDeleteOptionalParams,
  PublicIPAddressesGetOptionalParams,
  PublicIPAddressesGetResponse,
  PublicIPAddressesCreateOrUpdateOptionalParams,
  PublicIPAddressesCreateOrUpdateResponse,
  TagsObject,
  PublicIPAddressesUpdateTagsOptionalParams,
  PublicIPAddressesUpdateTagsResponse,
  PublicIPAddressesListAllResponse,
  PublicIPAddressesListResponse,
  PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesResponse,
  PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesResponse,
  PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressOptionalParams,
  PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressResponse,
  PublicIPAddressesListAllNextResponse,
  PublicIPAddressesListNextResponse,
  PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesNextResponse,
  PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PublicIPAddresses operations. */
export class PublicIPAddressesImpl implements PublicIPAddresses {
  private readonly client: NetworkManagementClientContext;

  /**
   * Initialize a new instance of the class PublicIPAddresses class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the public IP addresses in a subscription.
   * @param options The options parameters.
   */
  public listAll(
    options?: PublicIPAddressesListAllOptionalParams
  ): PagedAsyncIterableIterator<PublicIPAddress> {
    const iter = this.listAllPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAllPagingPage(options);
      }
    };
  }

  private async *listAllPagingPage(
    options?: PublicIPAddressesListAllOptionalParams
  ): AsyncIterableIterator<PublicIPAddress[]> {
    let result = await this._listAll(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAllNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAllPagingAll(
    options?: PublicIPAddressesListAllOptionalParams
  ): AsyncIterableIterator<PublicIPAddress> {
    for await (const page of this.listAllPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets all public IP addresses in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: PublicIPAddressesListOptionalParams
  ): PagedAsyncIterableIterator<PublicIPAddress> {
    const iter = this.listPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    options?: PublicIPAddressesListOptionalParams
  ): AsyncIterableIterator<PublicIPAddress[]> {
    let result = await this._list(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    options?: PublicIPAddressesListOptionalParams
  ): AsyncIterableIterator<PublicIPAddress> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * Gets information about all public IP addresses on a virtual machine scale set level.
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param options The options parameters.
   */
  public listVirtualMachineScaleSetPublicIPAddresses(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    options?: PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesOptionalParams
  ): PagedAsyncIterableIterator<PublicIPAddress> {
    const iter = this.listVirtualMachineScaleSetPublicIPAddressesPagingAll(
      resourceGroupName,
      virtualMachineScaleSetName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listVirtualMachineScaleSetPublicIPAddressesPagingPage(
          resourceGroupName,
          virtualMachineScaleSetName,
          options
        );
      }
    };
  }

  private async *listVirtualMachineScaleSetPublicIPAddressesPagingPage(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    options?: PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesOptionalParams
  ): AsyncIterableIterator<PublicIPAddress[]> {
    let result = await this._listVirtualMachineScaleSetPublicIPAddresses(
      resourceGroupName,
      virtualMachineScaleSetName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listVirtualMachineScaleSetPublicIPAddressesNext(
        resourceGroupName,
        virtualMachineScaleSetName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listVirtualMachineScaleSetPublicIPAddressesPagingAll(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    options?: PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesOptionalParams
  ): AsyncIterableIterator<PublicIPAddress> {
    for await (const page of this.listVirtualMachineScaleSetPublicIPAddressesPagingPage(
      resourceGroupName,
      virtualMachineScaleSetName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets information about all public IP addresses in a virtual machine IP configuration in a virtual
   * machine scale set.
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param virtualmachineIndex The virtual machine index.
   * @param networkInterfaceName The network interface name.
   * @param ipConfigurationName The IP configuration name.
   * @param options The options parameters.
   */
  public listVirtualMachineScaleSetVMPublicIPAddresses(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    virtualmachineIndex: string,
    networkInterfaceName: string,
    ipConfigurationName: string,
    options?: PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesOptionalParams
  ): PagedAsyncIterableIterator<PublicIPAddress> {
    const iter = this.listVirtualMachineScaleSetVMPublicIPAddressesPagingAll(
      resourceGroupName,
      virtualMachineScaleSetName,
      virtualmachineIndex,
      networkInterfaceName,
      ipConfigurationName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listVirtualMachineScaleSetVMPublicIPAddressesPagingPage(
          resourceGroupName,
          virtualMachineScaleSetName,
          virtualmachineIndex,
          networkInterfaceName,
          ipConfigurationName,
          options
        );
      }
    };
  }

  private async *listVirtualMachineScaleSetVMPublicIPAddressesPagingPage(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    virtualmachineIndex: string,
    networkInterfaceName: string,
    ipConfigurationName: string,
    options?: PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesOptionalParams
  ): AsyncIterableIterator<PublicIPAddress[]> {
    let result = await this._listVirtualMachineScaleSetVMPublicIPAddresses(
      resourceGroupName,
      virtualMachineScaleSetName,
      virtualmachineIndex,
      networkInterfaceName,
      ipConfigurationName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listVirtualMachineScaleSetVMPublicIPAddressesNext(
        resourceGroupName,
        virtualMachineScaleSetName,
        virtualmachineIndex,
        networkInterfaceName,
        ipConfigurationName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listVirtualMachineScaleSetVMPublicIPAddressesPagingAll(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    virtualmachineIndex: string,
    networkInterfaceName: string,
    ipConfigurationName: string,
    options?: PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesOptionalParams
  ): AsyncIterableIterator<PublicIPAddress> {
    for await (const page of this.listVirtualMachineScaleSetVMPublicIPAddressesPagingPage(
      resourceGroupName,
      virtualMachineScaleSetName,
      virtualmachineIndex,
      networkInterfaceName,
      ipConfigurationName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified public IP address.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpAddressName The name of the subnet.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    publicIpAddressName: string,
    options?: PublicIPAddressesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, publicIpAddressName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Deletes the specified public IP address.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpAddressName The name of the subnet.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    publicIpAddressName: string,
    options?: PublicIPAddressesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      publicIpAddressName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the specified public IP address in a specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpAddressName The name of the subnet.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    publicIpAddressName: string,
    options?: PublicIPAddressesGetOptionalParams
  ): Promise<PublicIPAddressesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, publicIpAddressName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a static or dynamic public IP address.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpAddressName The name of the public IP address.
   * @param parameters Parameters supplied to the create or update public IP address operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    publicIpAddressName: string,
    parameters: PublicIPAddress,
    options?: PublicIPAddressesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PublicIPAddressesCreateOrUpdateResponse>,
      PublicIPAddressesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PublicIPAddressesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, publicIpAddressName, parameters, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Creates or updates a static or dynamic public IP address.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpAddressName The name of the public IP address.
   * @param parameters Parameters supplied to the create or update public IP address operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    publicIpAddressName: string,
    parameters: PublicIPAddress,
    options?: PublicIPAddressesCreateOrUpdateOptionalParams
  ): Promise<PublicIPAddressesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      publicIpAddressName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates public IP address tags.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpAddressName The name of the public IP address.
   * @param parameters Parameters supplied to update public IP address tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    publicIpAddressName: string,
    parameters: TagsObject,
    options?: PublicIPAddressesUpdateTagsOptionalParams
  ): Promise<PublicIPAddressesUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, publicIpAddressName, parameters, options },
      updateTagsOperationSpec
    );
  }

  /**
   * Gets all the public IP addresses in a subscription.
   * @param options The options parameters.
   */
  private _listAll(
    options?: PublicIPAddressesListAllOptionalParams
  ): Promise<PublicIPAddressesListAllResponse> {
    return this.client.sendOperationRequest({ options }, listAllOperationSpec);
  }

  /**
   * Gets all public IP addresses in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: PublicIPAddressesListOptionalParams
  ): Promise<PublicIPAddressesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listOperationSpec
    );
  }

  /**
   * Gets information about all public IP addresses on a virtual machine scale set level.
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param options The options parameters.
   */
  private _listVirtualMachineScaleSetPublicIPAddresses(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    options?: PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesOptionalParams
  ): Promise<
    PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesResponse
  > {
    return this.client.sendOperationRequest(
      { resourceGroupName, virtualMachineScaleSetName, options },
      listVirtualMachineScaleSetPublicIPAddressesOperationSpec
    );
  }

  /**
   * Gets information about all public IP addresses in a virtual machine IP configuration in a virtual
   * machine scale set.
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param virtualmachineIndex The virtual machine index.
   * @param networkInterfaceName The network interface name.
   * @param ipConfigurationName The IP configuration name.
   * @param options The options parameters.
   */
  private _listVirtualMachineScaleSetVMPublicIPAddresses(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    virtualmachineIndex: string,
    networkInterfaceName: string,
    ipConfigurationName: string,
    options?: PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesOptionalParams
  ): Promise<
    PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesResponse
  > {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualMachineScaleSetName,
        virtualmachineIndex,
        networkInterfaceName,
        ipConfigurationName,
        options
      },
      listVirtualMachineScaleSetVMPublicIPAddressesOperationSpec
    );
  }

  /**
   * Get the specified public IP address in a virtual machine scale set.
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param virtualmachineIndex The virtual machine index.
   * @param networkInterfaceName The name of the network interface.
   * @param ipConfigurationName The name of the IP configuration.
   * @param publicIpAddressName The name of the public IP Address.
   * @param options The options parameters.
   */
  getVirtualMachineScaleSetPublicIPAddress(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    virtualmachineIndex: string,
    networkInterfaceName: string,
    ipConfigurationName: string,
    publicIpAddressName: string,
    options?: PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressOptionalParams
  ): Promise<
    PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressResponse
  > {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualMachineScaleSetName,
        virtualmachineIndex,
        networkInterfaceName,
        ipConfigurationName,
        publicIpAddressName,
        options
      },
      getVirtualMachineScaleSetPublicIPAddressOperationSpec
    );
  }

  /**
   * ListAllNext
   * @param nextLink The nextLink from the previous successful call to the ListAll method.
   * @param options The options parameters.
   */
  private _listAllNext(
    nextLink: string,
    options?: PublicIPAddressesListAllNextOptionalParams
  ): Promise<PublicIPAddressesListAllNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listAllNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: PublicIPAddressesListNextOptionalParams
  ): Promise<PublicIPAddressesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListVirtualMachineScaleSetPublicIPAddressesNext
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListVirtualMachineScaleSetPublicIPAddresses method.
   * @param options The options parameters.
   */
  private _listVirtualMachineScaleSetPublicIPAddressesNext(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    nextLink: string,
    options?: PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesNextOptionalParams
  ): Promise<
    PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesNextResponse
  > {
    return this.client.sendOperationRequest(
      { resourceGroupName, virtualMachineScaleSetName, nextLink, options },
      listVirtualMachineScaleSetPublicIPAddressesNextOperationSpec
    );
  }

  /**
   * ListVirtualMachineScaleSetVMPublicIPAddressesNext
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param virtualmachineIndex The virtual machine index.
   * @param networkInterfaceName The network interface name.
   * @param ipConfigurationName The IP configuration name.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListVirtualMachineScaleSetVMPublicIPAddresses method.
   * @param options The options parameters.
   */
  private _listVirtualMachineScaleSetVMPublicIPAddressesNext(
    resourceGroupName: string,
    virtualMachineScaleSetName: string,
    virtualmachineIndex: string,
    networkInterfaceName: string,
    ipConfigurationName: string,
    nextLink: string,
    options?: PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesNextOptionalParams
  ): Promise<
    PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesNextResponse
  > {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualMachineScaleSetName,
        virtualmachineIndex,
        networkInterfaceName,
        ipConfigurationName,
        nextLink,
        options
      },
      listVirtualMachineScaleSetVMPublicIPAddressesNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPAddresses/{publicIpAddressName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.publicIpAddressName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPAddresses/{publicIpAddressName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPAddress
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.publicIpAddressName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPAddresses/{publicIpAddressName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPAddress
    },
    201: {
      bodyMapper: Mappers.PublicIPAddress
    },
    202: {
      bodyMapper: Mappers.PublicIPAddress
    },
    204: {
      bodyMapper: Mappers.PublicIPAddress
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters42,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.publicIpAddressName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPAddresses/{publicIpAddressName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPAddress
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.publicIpAddressName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listAllOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/publicIPAddresses",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPAddressListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPAddresses",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPAddressListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listVirtualMachineScaleSetPublicIPAddressesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/publicipaddresses",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPAddressListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualMachineScaleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listVirtualMachineScaleSetVMPublicIPAddressesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines/{virtualmachineIndex}/networkInterfaces/{networkInterfaceName}/ipconfigurations/{ipConfigurationName}/publicipaddresses",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPAddressListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkInterfaceName,
    Parameters.virtualMachineScaleSetName,
    Parameters.virtualmachineIndex,
    Parameters.ipConfigurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getVirtualMachineScaleSetPublicIPAddressOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines/{virtualmachineIndex}/networkInterfaces/{networkInterfaceName}/ipconfigurations/{ipConfigurationName}/publicipaddresses/{publicIpAddressName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPAddress
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.expand, Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkInterfaceName,
    Parameters.virtualMachineScaleSetName,
    Parameters.virtualmachineIndex,
    Parameters.ipConfigurationName,
    Parameters.publicIpAddressName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAllNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPAddressListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPAddressListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listVirtualMachineScaleSetPublicIPAddressesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPAddressListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.virtualMachineScaleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listVirtualMachineScaleSetVMPublicIPAddressesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPAddressListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.networkInterfaceName,
    Parameters.virtualMachineScaleSetName,
    Parameters.virtualmachineIndex,
    Parameters.ipConfigurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
