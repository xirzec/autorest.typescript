/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";
import {
  Certificate,
  CertificatesListResponse,
  CertificatesListByResourceGroupResponse,
  CertificatesGetResponse,
  CertificatesCreateOrUpdateResponse,
  CertificatePatchResource,
  CertificatesUpdateResponse,
  CertificatesListNextResponse,
  CertificatesListByResourceGroupNextResponse
} from "../models";

/** Class representing a Certificates. */
export class Certificates {
  private readonly client: WebSiteManagementClientContext;

  /**
   * Initialize a new instance of the class Certificates class.
   * @param client Reference to the service client
   */
  constructor(client: WebSiteManagementClientContext) {
    this.client = client;
  }

  /**
   * Description for Get all certificates for a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Certificate> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Certificate[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Certificate> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Description for Get all certificates in a resource group.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Certificate> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Certificate[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Certificate> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Description for Get all certificates for a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: coreHttp.OperationOptions
  ): Promise<CertificatesListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<CertificatesListResponse>;
  }

  /**
   * Description for Get all certificates in a resource group.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<CertificatesListByResourceGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupOperationSpec
    ) as Promise<CertificatesListByResourceGroupResponse>;
  }

  /**
   * Description for Get a certificate.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the certificate.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): Promise<CertificatesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      name,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<CertificatesGetResponse>;
  }

  /**
   * Description for Create or update a certificate.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the certificate.
   * @param certificateEnvelope Details of certificate, if it exists already.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    name: string,
    certificateEnvelope: Certificate,
    options?: coreHttp.OperationOptions
  ): Promise<CertificatesCreateOrUpdateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      name,
      certificateEnvelope,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOrUpdateOperationSpec
    ) as Promise<CertificatesCreateOrUpdateResponse>;
  }

  /**
   * Description for Delete a certificate.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the certificate.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      name,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Description for Create or update a certificate.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the certificate.
   * @param certificateEnvelope Details of certificate, if it exists already.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    name: string,
    certificateEnvelope: CertificatePatchResource,
    options?: coreHttp.OperationOptions
  ): Promise<CertificatesUpdateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      name,
      certificateEnvelope,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateOperationSpec
    ) as Promise<CertificatesUpdateResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<CertificatesListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<CertificatesListNextResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<CertificatesListByResourceGroupNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupNextOperationSpec
    ) as Promise<CertificatesListByResourceGroupNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Web/certificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.certificateEnvelope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.certificateEnvelope1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
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
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
