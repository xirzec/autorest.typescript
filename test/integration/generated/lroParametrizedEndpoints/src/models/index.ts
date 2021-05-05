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

/** Defines headers for LroParametrizedEndpointsClient_pollWithParameterizedEndpoints operation. */
export interface LroParametrizedEndpointsClientPollWithParameterizedEndpointsHeaders {
  /** Url to retrieve the final update resource. Is a relative link */
  location?: string;
}

/** Optional parameters. */
export interface LroParametrizedEndpointsClientPollWithParameterizedEndpointsOptionalParams
  extends coreHttp.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the pollWithParameterizedEndpoints operation. */
export type LroParametrizedEndpointsClientPollWithParameterizedEndpointsResponse = {
  /** The parsed response body. */
  body: string;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: string;
  };
};

/** Optional parameters. */
export interface LroParametrizedEndpointsClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** A string value that is used as a global part of the parameterized host. Pass in 'host:3000' to pass test. */
  host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
