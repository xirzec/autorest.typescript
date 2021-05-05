/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export interface ErrorModel {
  status?: number;
  message?: string;
}

/** Optional parameters. */
export interface BoolGetTrueOptionalParams extends coreHttp.OperationOptions {}

/** Contains response data for the getTrue operation. */
export type BoolGetTrueResponse = {
  /** The parsed response body. */
  body: boolean;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: boolean;
  };
};

/** Optional parameters. */
export interface BoolPutTrueOptionalParams extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface BoolGetFalseOptionalParams extends coreHttp.OperationOptions {}

/** Contains response data for the getFalse operation. */
export type BoolGetFalseResponse = {
  /** The parsed response body. */
  body: boolean;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: boolean;
  };
};

/** Optional parameters. */
export interface BoolPutFalseOptionalParams extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface BoolGetNullOptionalParams extends coreHttp.OperationOptions {}

/** Contains response data for the getNull operation. */
export type BoolGetNullResponse = {
  /** The parsed response body. */
  body: boolean;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: boolean;
  };
};

/** Optional parameters. */
export interface BoolGetInvalidOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getInvalid operation. */
export type BoolGetInvalidResponse = {
  /** The parsed response body. */
  body: boolean;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: boolean;
  };
};

/** Optional parameters. */
export interface BodyBooleanClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
