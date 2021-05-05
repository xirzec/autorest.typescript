/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CanonicalCode } from "@opentelemetry/api";
import { createSpan } from "../tracing";
import * as coreHttp from "@azure/core-http";
import {
  BasicGetValidOptionalParams,
  BasicGetValidResponse,
  BasicDef,
  BasicPutValidOptionalParams,
  BasicGetInvalidOptionalParams,
  BasicGetInvalidResponse,
  BasicGetEmptyOptionalParams,
  BasicGetEmptyResponse,
  BasicGetNullOptionalParams,
  BasicGetNullResponse,
  BasicGetNotProvidedOptionalParams,
  BasicGetNotProvidedResponse
} from "../models";

/** Interface representing a Basic. */
export interface Basic {
  /**
   * Get complex type {id: 2, name: 'abc', color: 'YELLOW'}
   * @param options The options parameters.
   */
  getValid(
    options?: BasicGetValidOptionalParams
  ): Promise<BasicGetValidResponse>;
  /**
   * Please put {id: 2, name: 'abc', color: 'Magenta'}
   * @param complexBody Please put {id: 2, name: 'abc', color: 'Magenta'}
   * @param options The options parameters.
   */
  putValid(
    complexBody: BasicDef,
    options?: BasicPutValidOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get a basic complex type that is invalid for the local strong type
   * @param options The options parameters.
   */
  getInvalid(
    options?: BasicGetInvalidOptionalParams
  ): Promise<BasicGetInvalidResponse>;
  /**
   * Get a basic complex type that is empty
   * @param options The options parameters.
   */
  getEmpty(
    options?: BasicGetEmptyOptionalParams
  ): Promise<BasicGetEmptyResponse>;
  /**
   * Get a basic complex type whose properties are null
   * @param options The options parameters.
   */
  getNull(options?: BasicGetNullOptionalParams): Promise<BasicGetNullResponse>;
  /**
   * Get a basic complex type while the server doesn't provide a response payload
   * @param options The options parameters.
   */
  getNotProvided(
    options?: BasicGetNotProvidedOptionalParams
  ): Promise<BasicGetNotProvidedResponse>;
}
