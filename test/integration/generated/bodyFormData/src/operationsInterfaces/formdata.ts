/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import {
  FormdataUploadFileOptionalParams,
  FormdataUploadFileResponse,
  FormdataUploadFileViaBodyOptionalParams,
  FormdataUploadFileViaBodyResponse,
  FormdataUploadFilesOptionalParams,
  FormdataUploadFilesResponse
} from "../models";

/** Interface representing a Formdata. */
export interface Formdata {
  /**
   * Upload file
   * @param fileContent File to upload.
   * @param fileName File name to upload. Name has to be spelled exactly as written here.
   * @param options The options parameters.
   */
  uploadFile(
    fileContent: coreHttp.HttpRequestBody,
    fileName: string,
    options?: FormdataUploadFileOptionalParams
  ): Promise<FormdataUploadFileResponse>;
  /**
   * Upload file
   * @param fileContent File to upload.
   * @param options The options parameters.
   */
  uploadFileViaBody(
    fileContent: coreHttp.HttpRequestBody,
    options?: FormdataUploadFileViaBodyOptionalParams
  ): Promise<FormdataUploadFileViaBodyResponse>;
  /**
   * Upload multiple files
   * @param fileContent Files to upload.
   * @param options The options parameters.
   */
  uploadFiles(
    fileContent: coreHttp.HttpRequestBody[],
    options?: FormdataUploadFilesOptionalParams
  ): Promise<FormdataUploadFilesResponse>;
}
