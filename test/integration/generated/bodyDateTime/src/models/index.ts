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
export interface DatetimeGetNullOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getNull operation. */
export type DatetimeGetNullResponse = {
  /** The parsed response body. */
  body: Date;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date;
  };
};

/** Optional parameters. */
export interface DatetimeGetInvalidOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getInvalid operation. */
export type DatetimeGetInvalidResponse = {
  /** The parsed response body. */
  body: Date;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date;
  };
};

/** Optional parameters. */
export interface DatetimeGetOverflowOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getOverflow operation. */
export type DatetimeGetOverflowResponse = {
  /** The parsed response body. */
  body: Date;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date;
  };
};

/** Optional parameters. */
export interface DatetimeGetUnderflowOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getUnderflow operation. */
export type DatetimeGetUnderflowResponse = {
  /** The parsed response body. */
  body: Date;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date;
  };
};

/** Optional parameters. */
export interface DatetimePutUtcMaxDateTimeOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface DatetimePutUtcMaxDateTime7DigitsOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface DatetimeGetUtcLowercaseMaxDateTimeOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getUtcLowercaseMaxDateTime operation. */
export type DatetimeGetUtcLowercaseMaxDateTimeResponse = {
  /** The parsed response body. */
  body: Date;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date;
  };
};

/** Optional parameters. */
export interface DatetimeGetUtcUppercaseMaxDateTimeOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getUtcUppercaseMaxDateTime operation. */
export type DatetimeGetUtcUppercaseMaxDateTimeResponse = {
  /** The parsed response body. */
  body: Date;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date;
  };
};

/** Optional parameters. */
export interface DatetimeGetUtcUppercaseMaxDateTime7DigitsOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getUtcUppercaseMaxDateTime7Digits operation. */
export type DatetimeGetUtcUppercaseMaxDateTime7DigitsResponse = {
  /** The parsed response body. */
  body: Date;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date;
  };
};

/** Optional parameters. */
export interface DatetimePutLocalPositiveOffsetMaxDateTimeOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface DatetimeGetLocalPositiveOffsetLowercaseMaxDateTimeOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getLocalPositiveOffsetLowercaseMaxDateTime operation. */
export type DatetimeGetLocalPositiveOffsetLowercaseMaxDateTimeResponse = {
  /** The parsed response body. */
  body: Date;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date;
  };
};

/** Optional parameters. */
export interface DatetimeGetLocalPositiveOffsetUppercaseMaxDateTimeOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getLocalPositiveOffsetUppercaseMaxDateTime operation. */
export type DatetimeGetLocalPositiveOffsetUppercaseMaxDateTimeResponse = {
  /** The parsed response body. */
  body: Date;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date;
  };
};

/** Optional parameters. */
export interface DatetimePutLocalNegativeOffsetMaxDateTimeOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface DatetimeGetLocalNegativeOffsetUppercaseMaxDateTimeOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getLocalNegativeOffsetUppercaseMaxDateTime operation. */
export type DatetimeGetLocalNegativeOffsetUppercaseMaxDateTimeResponse = {
  /** The parsed response body. */
  body: Date;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date;
  };
};

/** Optional parameters. */
export interface DatetimeGetLocalNegativeOffsetLowercaseMaxDateTimeOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getLocalNegativeOffsetLowercaseMaxDateTime operation. */
export type DatetimeGetLocalNegativeOffsetLowercaseMaxDateTimeResponse = {
  /** The parsed response body. */
  body: Date;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date;
  };
};

/** Optional parameters. */
export interface DatetimePutUtcMinDateTimeOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface DatetimeGetUtcMinDateTimeOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getUtcMinDateTime operation. */
export type DatetimeGetUtcMinDateTimeResponse = {
  /** The parsed response body. */
  body: Date;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date;
  };
};

/** Optional parameters. */
export interface DatetimePutLocalPositiveOffsetMinDateTimeOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface DatetimeGetLocalPositiveOffsetMinDateTimeOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getLocalPositiveOffsetMinDateTime operation. */
export type DatetimeGetLocalPositiveOffsetMinDateTimeResponse = {
  /** The parsed response body. */
  body: Date;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date;
  };
};

/** Optional parameters. */
export interface DatetimePutLocalNegativeOffsetMinDateTimeOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface DatetimeGetLocalNegativeOffsetMinDateTimeOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getLocalNegativeOffsetMinDateTime operation. */
export type DatetimeGetLocalNegativeOffsetMinDateTimeResponse = {
  /** The parsed response body. */
  body: Date;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date;
  };
};

/** Optional parameters. */
export interface DatetimeGetLocalNoOffsetMinDateTimeOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getLocalNoOffsetMinDateTime operation. */
export type DatetimeGetLocalNoOffsetMinDateTimeResponse = {
  /** The parsed response body. */
  body: Date;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Date;
  };
};

/** Optional parameters. */
export interface BodyDateTimeClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
