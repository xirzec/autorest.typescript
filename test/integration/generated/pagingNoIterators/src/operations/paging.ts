/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Paging } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PagingNoIteratorsClientContext } from "../pagingNoIteratorsClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  PagingGetNoItemNamePagesOptionalParams,
  PagingGetNoItemNamePagesResponse,
  PagingGetNullNextLinkNamePagesOptionalParams,
  PagingGetNullNextLinkNamePagesResponse,
  PagingGetSinglePagesOptionalParams,
  PagingGetSinglePagesResponse,
  PagingFirstResponseEmptyOptionalParams,
  PagingFirstResponseEmptyResponse,
  PagingGetMultiplePagesOptionalParams,
  PagingGetMultiplePagesResponse,
  PagingGetWithQueryParamsOptionalParams,
  PagingGetWithQueryParamsResponse,
  PagingNextOperationWithQueryParamsOptionalParams,
  PagingNextOperationWithQueryParamsResponse,
  PagingGetOdataMultiplePagesOptionalParams,
  PagingGetOdataMultiplePagesResponse,
  PagingGetMultiplePagesWithOffsetOptions,
  PagingGetMultiplePagesWithOffsetOptionalParams,
  PagingGetMultiplePagesWithOffsetResponse,
  PagingGetMultiplePagesRetryFirstOptionalParams,
  PagingGetMultiplePagesRetryFirstResponse,
  PagingGetMultiplePagesRetrySecondOptionalParams,
  PagingGetMultiplePagesRetrySecondResponse,
  PagingGetSinglePagesFailureOptionalParams,
  PagingGetSinglePagesFailureResponse,
  PagingGetMultiplePagesFailureOptionalParams,
  PagingGetMultiplePagesFailureResponse,
  PagingGetMultiplePagesFailureUriOptionalParams,
  PagingGetMultiplePagesFailureUriResponse,
  PagingGetMultiplePagesFragmentNextLinkOptionalParams,
  PagingGetMultiplePagesFragmentNextLinkResponse,
  CustomParameterGroup,
  PagingGetMultiplePagesFragmentWithGroupingNextLinkOptionalParams,
  PagingGetMultiplePagesFragmentWithGroupingNextLinkResponse,
  PagingGetMultiplePagesLROOptionalParams,
  PagingGetMultiplePagesLROResponse,
  PagingNextFragmentOptionalParams,
  PagingNextFragmentResponse,
  PagingNextFragmentWithGroupingOptionalParams,
  PagingNextFragmentWithGroupingResponse,
  PagingGetPagingModelWithItemNameWithXMSClientNameOptionalParams,
  PagingGetPagingModelWithItemNameWithXMSClientNameResponse,
  PagingGetNoItemNamePagesNextOptionalParams,
  PagingGetNoItemNamePagesNextResponse,
  PagingGetSinglePagesNextOptionalParams,
  PagingGetSinglePagesNextResponse,
  PagingFirstResponseEmptyNextOptionalParams,
  PagingFirstResponseEmptyNextResponse,
  PagingGetMultiplePagesNextOptionalParams,
  PagingGetMultiplePagesNextResponse,
  PagingGetOdataMultiplePagesNextOptionalParams,
  PagingGetOdataMultiplePagesNextResponse,
  PagingGetMultiplePagesWithOffsetNextOptionalParams,
  PagingGetMultiplePagesWithOffsetNextResponse,
  PagingGetMultiplePagesRetryFirstNextOptionalParams,
  PagingGetMultiplePagesRetryFirstNextResponse,
  PagingGetMultiplePagesRetrySecondNextOptionalParams,
  PagingGetMultiplePagesRetrySecondNextResponse,
  PagingGetSinglePagesFailureNextOptionalParams,
  PagingGetSinglePagesFailureNextResponse,
  PagingGetMultiplePagesFailureNextOptionalParams,
  PagingGetMultiplePagesFailureNextResponse,
  PagingGetMultiplePagesFailureUriNextOptionalParams,
  PagingGetMultiplePagesFailureUriNextResponse,
  PagingGetMultiplePagesLRONextOptionalParams,
  PagingGetMultiplePagesLRONextResponse,
  PagingGetPagingModelWithItemNameWithXMSClientNameNextOptionalParams,
  PagingGetPagingModelWithItemNameWithXMSClientNameNextResponse
} from "../models";

/** Class containing Paging operations. */
export class PagingImpl implements Paging {
  private readonly client: PagingNoIteratorsClientContext;

  /**
   * Initialize a new instance of the class Paging class.
   * @param client Reference to the service client
   */
  constructor(client: PagingNoIteratorsClientContext) {
    this.client = client;
  }

  /**
   * A paging operation that must return result of the default 'value' node.
   * @param options The options parameters.
   */
  getNoItemNamePages(
    options?: PagingGetNoItemNamePagesOptionalParams
  ): Promise<PagingGetNoItemNamePagesResponse> {
    return this.client.sendOperationRequest(
      { options },
      getNoItemNamePagesOperationSpec
    );
  }

  /**
   * A paging operation that must ignore any kind of nextLink, and stop after page 1.
   * @param options The options parameters.
   */
  getNullNextLinkNamePages(
    options?: PagingGetNullNextLinkNamePagesOptionalParams
  ): Promise<PagingGetNullNextLinkNamePagesResponse> {
    return this.client.sendOperationRequest(
      { options },
      getNullNextLinkNamePagesOperationSpec
    );
  }

  /**
   * A paging operation that finishes on the first call without a nextlink
   * @param options The options parameters.
   */
  getSinglePages(
    options?: PagingGetSinglePagesOptionalParams
  ): Promise<PagingGetSinglePagesResponse> {
    return this.client.sendOperationRequest(
      { options },
      getSinglePagesOperationSpec
    );
  }

  /**
   * A paging operation whose first response's items list is empty, but still returns a next link. Second
   * (and final) call, will give you an items list of 1.
   * @param options The options parameters.
   */
  firstResponseEmpty(
    options?: PagingFirstResponseEmptyOptionalParams
  ): Promise<PagingFirstResponseEmptyResponse> {
    return this.client.sendOperationRequest(
      { options },
      firstResponseEmptyOperationSpec
    );
  }

  /**
   * A paging operation that includes a nextLink that has 10 pages
   * @param options The options parameters.
   */
  getMultiplePages(
    options?: PagingGetMultiplePagesOptionalParams
  ): Promise<PagingGetMultiplePagesResponse> {
    return this.client.sendOperationRequest(
      { options },
      getMultiplePagesOperationSpec
    );
  }

  /**
   * A paging operation that includes a next operation. It has a different query parameter from it's next
   * operation nextOperationWithQueryParams. Returns a ProductResult
   * @param requiredQueryParameter A required integer query parameter. Put in value '100' to pass test.
   * @param options The options parameters.
   */
  getWithQueryParams(
    requiredQueryParameter: number,
    options?: PagingGetWithQueryParamsOptionalParams
  ): Promise<PagingGetWithQueryParamsResponse> {
    return this.client.sendOperationRequest(
      { requiredQueryParameter, options },
      getWithQueryParamsOperationSpec
    );
  }

  /**
   * Next operation for getWithQueryParams. Pass in next=True to pass test. Returns a ProductResult
   * @param options The options parameters.
   */
  nextOperationWithQueryParams(
    options?: PagingNextOperationWithQueryParamsOptionalParams
  ): Promise<PagingNextOperationWithQueryParamsResponse> {
    return this.client.sendOperationRequest(
      { options },
      nextOperationWithQueryParamsOperationSpec
    );
  }

  /**
   * A paging operation that includes a nextLink in odata format that has 10 pages
   * @param options The options parameters.
   */
  getOdataMultiplePages(
    options?: PagingGetOdataMultiplePagesOptionalParams
  ): Promise<PagingGetOdataMultiplePagesResponse> {
    return this.client.sendOperationRequest(
      { options },
      getOdataMultiplePagesOperationSpec
    );
  }

  /**
   * A paging operation that includes a nextLink that has 10 pages
   * @param pagingGetMultiplePagesWithOffsetOptions Parameter group
   * @param options The options parameters.
   */
  getMultiplePagesWithOffset(
    pagingGetMultiplePagesWithOffsetOptions: PagingGetMultiplePagesWithOffsetOptions,
    options?: PagingGetMultiplePagesWithOffsetOptionalParams
  ): Promise<PagingGetMultiplePagesWithOffsetResponse> {
    return this.client.sendOperationRequest(
      { pagingGetMultiplePagesWithOffsetOptions, options },
      getMultiplePagesWithOffsetOperationSpec
    );
  }

  /**
   * A paging operation that fails on the first call with 500 and then retries and then get a response
   * including a nextLink that has 10 pages
   * @param options The options parameters.
   */
  getMultiplePagesRetryFirst(
    options?: PagingGetMultiplePagesRetryFirstOptionalParams
  ): Promise<PagingGetMultiplePagesRetryFirstResponse> {
    return this.client.sendOperationRequest(
      { options },
      getMultiplePagesRetryFirstOperationSpec
    );
  }

  /**
   * A paging operation that includes a nextLink that has 10 pages, of which the 2nd call fails first
   * with 500. The client should retry and finish all 10 pages eventually.
   * @param options The options parameters.
   */
  getMultiplePagesRetrySecond(
    options?: PagingGetMultiplePagesRetrySecondOptionalParams
  ): Promise<PagingGetMultiplePagesRetrySecondResponse> {
    return this.client.sendOperationRequest(
      { options },
      getMultiplePagesRetrySecondOperationSpec
    );
  }

  /**
   * A paging operation that receives a 400 on the first call
   * @param options The options parameters.
   */
  getSinglePagesFailure(
    options?: PagingGetSinglePagesFailureOptionalParams
  ): Promise<PagingGetSinglePagesFailureResponse> {
    return this.client.sendOperationRequest(
      { options },
      getSinglePagesFailureOperationSpec
    );
  }

  /**
   * A paging operation that receives a 400 on the second call
   * @param options The options parameters.
   */
  getMultiplePagesFailure(
    options?: PagingGetMultiplePagesFailureOptionalParams
  ): Promise<PagingGetMultiplePagesFailureResponse> {
    return this.client.sendOperationRequest(
      { options },
      getMultiplePagesFailureOperationSpec
    );
  }

  /**
   * A paging operation that receives an invalid nextLink
   * @param options The options parameters.
   */
  getMultiplePagesFailureUri(
    options?: PagingGetMultiplePagesFailureUriOptionalParams
  ): Promise<PagingGetMultiplePagesFailureUriResponse> {
    return this.client.sendOperationRequest(
      { options },
      getMultiplePagesFailureUriOperationSpec
    );
  }

  /**
   * A paging operation that doesn't return a full URL, just a fragment
   * @param apiVersion Sets the api version to use.
   * @param tenant Sets the tenant to use.
   * @param options The options parameters.
   */
  getMultiplePagesFragmentNextLink(
    apiVersion: string,
    tenant: string,
    options?: PagingGetMultiplePagesFragmentNextLinkOptionalParams
  ): Promise<PagingGetMultiplePagesFragmentNextLinkResponse> {
    return this.client.sendOperationRequest(
      { apiVersion, tenant, options },
      getMultiplePagesFragmentNextLinkOperationSpec
    );
  }

  /**
   * A paging operation that doesn't return a full URL, just a fragment with parameters grouped
   * @param customParameterGroup Parameter group
   * @param options The options parameters.
   */
  getMultiplePagesFragmentWithGroupingNextLink(
    customParameterGroup: CustomParameterGroup,
    options?: PagingGetMultiplePagesFragmentWithGroupingNextLinkOptionalParams
  ): Promise<PagingGetMultiplePagesFragmentWithGroupingNextLinkResponse> {
    return this.client.sendOperationRequest(
      { customParameterGroup, options },
      getMultiplePagesFragmentWithGroupingNextLinkOperationSpec
    );
  }

  /**
   * A long-running paging operation that includes a nextLink that has 10 pages
   * @param options The options parameters.
   */
  async getMultiplePagesLRO(
    options?: PagingGetMultiplePagesLROOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PagingGetMultiplePagesLROResponse>,
      PagingGetMultiplePagesLROResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PagingGetMultiplePagesLROResponse> => {
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
      { options },
      getMultiplePagesLROOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * A paging operation that doesn't return a full URL, just a fragment
   * @param apiVersion Sets the api version to use.
   * @param tenant Sets the tenant to use.
   * @param nextLink Next link for list operation.
   * @param options The options parameters.
   */
  nextFragment(
    apiVersion: string,
    tenant: string,
    nextLink: string,
    options?: PagingNextFragmentOptionalParams
  ): Promise<PagingNextFragmentResponse> {
    return this.client.sendOperationRequest(
      { apiVersion, tenant, nextLink, options },
      nextFragmentOperationSpec
    );
  }

  /**
   * A paging operation that doesn't return a full URL, just a fragment
   * @param nextLink Next link for list operation.
   * @param customParameterGroup Parameter group
   * @param options The options parameters.
   */
  nextFragmentWithGrouping(
    nextLink: string,
    customParameterGroup: CustomParameterGroup,
    options?: PagingNextFragmentWithGroupingOptionalParams
  ): Promise<PagingNextFragmentWithGroupingResponse> {
    return this.client.sendOperationRequest(
      { nextLink, customParameterGroup, options },
      nextFragmentWithGroupingOperationSpec
    );
  }

  /**
   * A paging operation that returns a paging model whose item name is is overriden by x-ms-client-name
   * 'indexes'.
   * @param options The options parameters.
   */
  getPagingModelWithItemNameWithXMSClientName(
    options?: PagingGetPagingModelWithItemNameWithXMSClientNameOptionalParams
  ): Promise<PagingGetPagingModelWithItemNameWithXMSClientNameResponse> {
    return this.client.sendOperationRequest(
      { options },
      getPagingModelWithItemNameWithXMSClientNameOperationSpec
    );
  }

  /**
   * GetNoItemNamePagesNext
   * @param nextLink The nextLink from the previous successful call to the GetNoItemNamePages method.
   * @param options The options parameters.
   */
  getNoItemNamePagesNext(
    nextLink: string,
    options?: PagingGetNoItemNamePagesNextOptionalParams
  ): Promise<PagingGetNoItemNamePagesNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getNoItemNamePagesNextOperationSpec
    );
  }

  /**
   * GetSinglePagesNext
   * @param nextLink The nextLink from the previous successful call to the GetSinglePages method.
   * @param options The options parameters.
   */
  getSinglePagesNext(
    nextLink: string,
    options?: PagingGetSinglePagesNextOptionalParams
  ): Promise<PagingGetSinglePagesNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getSinglePagesNextOperationSpec
    );
  }

  /**
   * FirstResponseEmptyNext
   * @param nextLink The nextLink from the previous successful call to the FirstResponseEmpty method.
   * @param options The options parameters.
   */
  firstResponseEmptyNext(
    nextLink: string,
    options?: PagingFirstResponseEmptyNextOptionalParams
  ): Promise<PagingFirstResponseEmptyNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      firstResponseEmptyNextOperationSpec
    );
  }

  /**
   * GetMultiplePagesNext
   * @param nextLink The nextLink from the previous successful call to the GetMultiplePages method.
   * @param options The options parameters.
   */
  getMultiplePagesNext(
    nextLink: string,
    options?: PagingGetMultiplePagesNextOptionalParams
  ): Promise<PagingGetMultiplePagesNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getMultiplePagesNextOperationSpec
    );
  }

  /**
   * GetOdataMultiplePagesNext
   * @param nextLink The nextLink from the previous successful call to the GetOdataMultiplePages method.
   * @param options The options parameters.
   */
  getOdataMultiplePagesNext(
    nextLink: string,
    options?: PagingGetOdataMultiplePagesNextOptionalParams
  ): Promise<PagingGetOdataMultiplePagesNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getOdataMultiplePagesNextOperationSpec
    );
  }

  /**
   * GetMultiplePagesWithOffsetNext
   * @param pagingGetMultiplePagesWithOffsetOptions Parameter group
   * @param nextLink The nextLink from the previous successful call to the GetMultiplePagesWithOffset
   *                 method.
   * @param options The options parameters.
   */
  getMultiplePagesWithOffsetNext(
    pagingGetMultiplePagesWithOffsetOptions: PagingGetMultiplePagesWithOffsetOptions,
    nextLink: string,
    options?: PagingGetMultiplePagesWithOffsetNextOptionalParams
  ): Promise<PagingGetMultiplePagesWithOffsetNextResponse> {
    return this.client.sendOperationRequest(
      { pagingGetMultiplePagesWithOffsetOptions, nextLink, options },
      getMultiplePagesWithOffsetNextOperationSpec
    );
  }

  /**
   * GetMultiplePagesRetryFirstNext
   * @param nextLink The nextLink from the previous successful call to the GetMultiplePagesRetryFirst
   *                 method.
   * @param options The options parameters.
   */
  getMultiplePagesRetryFirstNext(
    nextLink: string,
    options?: PagingGetMultiplePagesRetryFirstNextOptionalParams
  ): Promise<PagingGetMultiplePagesRetryFirstNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getMultiplePagesRetryFirstNextOperationSpec
    );
  }

  /**
   * GetMultiplePagesRetrySecondNext
   * @param nextLink The nextLink from the previous successful call to the GetMultiplePagesRetrySecond
   *                 method.
   * @param options The options parameters.
   */
  getMultiplePagesRetrySecondNext(
    nextLink: string,
    options?: PagingGetMultiplePagesRetrySecondNextOptionalParams
  ): Promise<PagingGetMultiplePagesRetrySecondNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getMultiplePagesRetrySecondNextOperationSpec
    );
  }

  /**
   * GetSinglePagesFailureNext
   * @param nextLink The nextLink from the previous successful call to the GetSinglePagesFailure method.
   * @param options The options parameters.
   */
  getSinglePagesFailureNext(
    nextLink: string,
    options?: PagingGetSinglePagesFailureNextOptionalParams
  ): Promise<PagingGetSinglePagesFailureNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getSinglePagesFailureNextOperationSpec
    );
  }

  /**
   * GetMultiplePagesFailureNext
   * @param nextLink The nextLink from the previous successful call to the GetMultiplePagesFailure
   *                 method.
   * @param options The options parameters.
   */
  getMultiplePagesFailureNext(
    nextLink: string,
    options?: PagingGetMultiplePagesFailureNextOptionalParams
  ): Promise<PagingGetMultiplePagesFailureNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getMultiplePagesFailureNextOperationSpec
    );
  }

  /**
   * GetMultiplePagesFailureUriNext
   * @param nextLink The nextLink from the previous successful call to the GetMultiplePagesFailureUri
   *                 method.
   * @param options The options parameters.
   */
  getMultiplePagesFailureUriNext(
    nextLink: string,
    options?: PagingGetMultiplePagesFailureUriNextOptionalParams
  ): Promise<PagingGetMultiplePagesFailureUriNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getMultiplePagesFailureUriNextOperationSpec
    );
  }

  /**
   * GetMultiplePagesLRONext
   * @param nextLink The nextLink from the previous successful call to the GetMultiplePagesLRO method.
   * @param options The options parameters.
   */
  getMultiplePagesLRONext(
    nextLink: string,
    options?: PagingGetMultiplePagesLRONextOptionalParams
  ): Promise<PagingGetMultiplePagesLRONextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getMultiplePagesLRONextOperationSpec
    );
  }

  /**
   * GetPagingModelWithItemNameWithXMSClientNameNext
   * @param nextLink The nextLink from the previous successful call to the
   *                 GetPagingModelWithItemNameWithXMSClientName method.
   * @param options The options parameters.
   */
  getPagingModelWithItemNameWithXMSClientNameNext(
    nextLink: string,
    options?: PagingGetPagingModelWithItemNameWithXMSClientNameNextOptionalParams
  ): Promise<PagingGetPagingModelWithItemNameWithXMSClientNameNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getPagingModelWithItemNameWithXMSClientNameNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getNoItemNamePagesOperationSpec: coreClient.OperationSpec = {
  path: "/paging/noitemname",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResultValue
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getNullNextLinkNamePagesOperationSpec: coreClient.OperationSpec = {
  path: "/paging/nullnextlink",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getSinglePagesOperationSpec: coreClient.OperationSpec = {
  path: "/paging/single",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const firstResponseEmptyOperationSpec: coreClient.OperationSpec = {
  path: "/paging/firstResponseEmpty/1",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResultValue
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesOperationSpec: coreClient.OperationSpec = {
  path: "/paging/multiple",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.maxresults,
    Parameters.timeout
  ],
  serializer
};
const getWithQueryParamsOperationSpec: coreClient.OperationSpec = {
  path: "/paging/multiple/getWithQueryParams",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.requiredQueryParameter,
    Parameters.queryConstant
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const nextOperationWithQueryParamsOperationSpec: coreClient.OperationSpec = {
  path: "/paging/multiple/nextOperationWithQueryParams",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  queryParameters: [Parameters.queryConstant],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getOdataMultiplePagesOperationSpec: coreClient.OperationSpec = {
  path: "/paging/multiple/odata",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OdataProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.maxresults1,
    Parameters.timeout1
  ],
  serializer
};
const getMultiplePagesWithOffsetOperationSpec: coreClient.OperationSpec = {
  path: "/paging/multiple/withpath/{offset}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.offset],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.maxresults2,
    Parameters.timeout2
  ],
  serializer
};
const getMultiplePagesRetryFirstOperationSpec: coreClient.OperationSpec = {
  path: "/paging/multiple/retryfirst",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesRetrySecondOperationSpec: coreClient.OperationSpec = {
  path: "/paging/multiple/retrysecond",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getSinglePagesFailureOperationSpec: coreClient.OperationSpec = {
  path: "/paging/single/failure",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesFailureOperationSpec: coreClient.OperationSpec = {
  path: "/paging/multiple/failure",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesFailureUriOperationSpec: coreClient.OperationSpec = {
  path: "/paging/multiple/failureuri",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesFragmentNextLinkOperationSpec: coreClient.OperationSpec = {
  path: "/paging/multiple/fragment/{tenant}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OdataProductResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenant],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesFragmentWithGroupingNextLinkOperationSpec: coreClient.OperationSpec = {
  path: "/paging/multiple/fragmentwithgrouping/{tenant}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OdataProductResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.tenant1],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesLROOperationSpec: coreClient.OperationSpec = {
  path: "/paging/multiple/lro",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    201: {
      bodyMapper: Mappers.ProductResult
    },
    202: {
      bodyMapper: Mappers.ProductResult
    },
    204: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.maxresults3,
    Parameters.timeout3
  ],
  serializer
};
const nextFragmentOperationSpec: coreClient.OperationSpec = {
  path: "/paging/multiple/fragment/{tenant}/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OdataProductResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenant, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const nextFragmentWithGroupingOperationSpec: coreClient.OperationSpec = {
  path: "/paging/multiple/fragmentwithgrouping/{tenant}/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OdataProductResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.tenant1, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getPagingModelWithItemNameWithXMSClientNameOperationSpec: coreClient.OperationSpec = {
  path: "/paging/itemNameWithXMSClientName",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResultValueWithXMSClientName
    },
    default: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getNoItemNamePagesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResultValue
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getSinglePagesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const firstResponseEmptyNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResultValue
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.maxresults,
    Parameters.timeout
  ],
  serializer
};
const getOdataMultiplePagesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OdataProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.maxresults1,
    Parameters.timeout1
  ],
  serializer
};
const getMultiplePagesWithOffsetNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.offset, Parameters.nextLink],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.maxresults2,
    Parameters.timeout2
  ],
  serializer
};
const getMultiplePagesRetryFirstNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesRetrySecondNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getSinglePagesFailureNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesFailureNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesFailureUriNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultiplePagesLRONextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    202: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.maxresults3,
    Parameters.timeout3
  ],
  serializer
};
const getPagingModelWithItemNameWithXMSClientNameNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResultValueWithXMSClientName
    },
    default: {}
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
