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
  Product,
  PagingGetPagesPartialUrlNextOptionalParams,
  PagingGetPagesPartialUrlOptionalParams,
  PagingGetPagesPartialUrlOperationNextOptionalParams,
  PagingGetPagesPartialUrlOperationOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Paging. */
export interface Paging {
  /**
   * A paging operation that combines custom url, paging and partial URL and expect to concat after host
   * @param accountName Account Name
   * @param options The options parameters.
   */
  listPagesPartialUrl(
    accountName: string,
    options?: PagingGetPagesPartialUrlOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that combines custom url, paging and partial URL with next operation
   * @param accountName Account Name
   * @param options The options parameters.
   */
  listPagesPartialUrlOperation(
    accountName: string,
    options?: PagingGetPagesPartialUrlOperationOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that combines custom url, paging and partial URL
   * @param accountName Account Name
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  listPagesPartialUrlOperationNext(
    accountName: string,
    nextLink: string,
    options?: PagingGetPagesPartialUrlOperationNextOptionalParams
  ): PagedAsyncIterableIterator<Product>;
}
