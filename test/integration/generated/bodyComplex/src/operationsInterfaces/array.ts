/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import {
  ArrayGetValidOptionalParams,
  ArrayGetValidResponse,
  ArrayWrapper,
  ArrayPutValidOptionalParams,
  ArrayGetEmptyOptionalParams,
  ArrayGetEmptyResponse,
  ArrayPutEmptyOptionalParams,
  ArrayGetNotProvidedOptionalParams,
  ArrayGetNotProvidedResponse
} from "../models";

/** Interface representing a Array. */
export interface Array {
  /**
   * Get complex types with array property
   * @param options The options parameters.
   */
  getValid(
    options?: ArrayGetValidOptionalParams
  ): Promise<ArrayGetValidResponse>;
  /**
   * Put complex types with array property
   * @param complexBody Please put an array with 4 items: "1, 2, 3, 4", "", null, "&S#$(*Y", "The quick
   *                    brown fox jumps over the lazy dog"
   * @param options The options parameters.
   */
  putValid(
    complexBody: ArrayWrapper,
    options?: ArrayPutValidOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get complex types with array property which is empty
   * @param options The options parameters.
   */
  getEmpty(
    options?: ArrayGetEmptyOptionalParams
  ): Promise<ArrayGetEmptyResponse>;
  /**
   * Put complex types with array property which is empty
   * @param complexBody Please put an empty array
   * @param options The options parameters.
   */
  putEmpty(
    complexBody: ArrayWrapper,
    options?: ArrayPutEmptyOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get complex types with array property while server doesn't provide a response payload
   * @param options The options parameters.
   */
  getNotProvided(
    options?: ArrayGetNotProvidedOptionalParams
  ): Promise<ArrayGetNotProvidedResponse>;
}
