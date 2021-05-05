/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Formdata } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyFormDataClientContext } from "../bodyFormDataClientContext";
import {
  FormdataUploadFileOptionalParams,
  FormdataUploadFileResponse,
  FormdataUploadFileViaBodyOptionalParams,
  FormdataUploadFileViaBodyResponse,
  FormdataUploadFilesOptionalParams,
  FormdataUploadFilesResponse
} from "../models";

/** Class representing a Formdata. */
export class FormdataImpl implements Formdata {
  private readonly client: BodyFormDataClientContext;

  /**
   * Initialize a new instance of the class Formdata class.
   * @param client Reference to the service client
   */
  constructor(client: BodyFormDataClientContext) {
    this.client = client;
  }

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
  ): Promise<FormdataUploadFileResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      fileContent,
      fileName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      uploadFileOperationSpec
    ) as Promise<FormdataUploadFileResponse>;
  }

  /**
   * Upload file
   * @param fileContent File to upload.
   * @param options The options parameters.
   */
  uploadFileViaBody(
    fileContent: coreHttp.HttpRequestBody,
    options?: FormdataUploadFileViaBodyOptionalParams
  ): Promise<FormdataUploadFileViaBodyResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      fileContent,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      uploadFileViaBodyOperationSpec
    ) as Promise<FormdataUploadFileViaBodyResponse>;
  }

  /**
   * Upload multiple files
   * @param fileContent Files to upload.
   * @param options The options parameters.
   */
  uploadFiles(
    fileContent: coreHttp.HttpRequestBody[],
    options?: FormdataUploadFilesOptionalParams
  ): Promise<FormdataUploadFilesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      fileContent,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      uploadFilesOperationSpec
    ) as Promise<FormdataUploadFilesResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const uploadFileOperationSpec: coreHttp.OperationSpec = {
  path: "/formdata/stream/uploadfile",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  formDataParameters: [Parameters.fileContent, Parameters.fileName],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  serializer
};
const uploadFileViaBodyOperationSpec: coreHttp.OperationSpec = {
  path: "/formdata/stream/uploadfile",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.fileContent1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  mediaType: "binary",
  serializer
};
const uploadFilesOperationSpec: coreHttp.OperationSpec = {
  path: "/formdata/stream/uploadfiles",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  formDataParameters: [Parameters.fileContent2],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  serializer
};
