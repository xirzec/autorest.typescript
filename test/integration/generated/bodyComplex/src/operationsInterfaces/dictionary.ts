/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import {
  DictionaryGetValidOptionalParams,
  DictionaryGetValidResponse,
  DictionaryWrapper,
  DictionaryPutValidOptionalParams,
  DictionaryGetEmptyOptionalParams,
  DictionaryGetEmptyResponse,
  DictionaryPutEmptyOptionalParams,
  DictionaryGetNullOptionalParams,
  DictionaryGetNullResponse,
  DictionaryGetNotProvidedOptionalParams,
  DictionaryGetNotProvidedResponse
} from "../models";

/** Interface representing a Dictionary. */
export interface Dictionary {
  /**
   * Get complex types with dictionary property
   * @param options The options parameters.
   */
  getValid(
    options?: DictionaryGetValidOptionalParams
  ): Promise<DictionaryGetValidResponse>;
  /**
   * Put complex types with dictionary property
   * @param complexBody Please put a dictionary with 5 key-value pairs: "txt":"notepad", "bmp":"mspaint",
   *                    "xls":"excel", "exe":"", "":null
   * @param options The options parameters.
   */
  putValid(
    complexBody: DictionaryWrapper,
    options?: DictionaryPutValidOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get complex types with dictionary property which is empty
   * @param options The options parameters.
   */
  getEmpty(
    options?: DictionaryGetEmptyOptionalParams
  ): Promise<DictionaryGetEmptyResponse>;
  /**
   * Put complex types with dictionary property which is empty
   * @param complexBody Please put an empty dictionary
   * @param options The options parameters.
   */
  putEmpty(
    complexBody: DictionaryWrapper,
    options?: DictionaryPutEmptyOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Get complex types with dictionary property which is null
   * @param options The options parameters.
   */
  getNull(
    options?: DictionaryGetNullOptionalParams
  ): Promise<DictionaryGetNullResponse>;
  /**
   * Get complex types with dictionary property while server doesn't provide a response payload
   * @param options The options parameters.
   */
  getNotProvided(
    options?: DictionaryGetNotProvidedOptionalParams
  ): Promise<DictionaryGetNotProvidedResponse>;
}
