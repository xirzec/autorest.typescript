/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VirtualMachineSizes } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import {
  VirtualMachineSize,
  VirtualMachineSizesListOptionalParams,
  VirtualMachineSizesListResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing VirtualMachineSizes operations. */
export class VirtualMachineSizesImpl implements VirtualMachineSizes {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class VirtualMachineSizes class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * This API is deprecated. Use [Resources
   * Skus](https://docs.microsoft.com/en-us/rest/api/compute/resourceskus/list)
   * @param location The location upon which virtual-machine-sizes is queried.
   * @param options The options parameters.
   */
  public list(
    location: string,
    options?: VirtualMachineSizesListOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineSize> {
    const iter = this.listPagingAll(location, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(location, options);
      }
    };
  }

  private async *listPagingPage(
    location: string,
    options?: VirtualMachineSizesListOptionalParams
  ): AsyncIterableIterator<VirtualMachineSize[]> {
    let result = await this._list(location, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    location: string,
    options?: VirtualMachineSizesListOptionalParams
  ): AsyncIterableIterator<VirtualMachineSize> {
    for await (const page of this.listPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * This API is deprecated. Use [Resources
   * Skus](https://docs.microsoft.com/en-us/rest/api/compute/resourceskus/list)
   * @param location The location upon which virtual-machine-sizes is queried.
   * @param options The options parameters.
   */
  private _list(
    location: string,
    options?: VirtualMachineSizesListOptionalParams
  ): Promise<VirtualMachineSizesListResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/vmSizes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineSizeListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
