/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { StringOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyStringClient } from "../bodyStringClient";
import {
  StringGetNullOptionalParams,
  StringGetNullResponse,
  StringPutNullOptionalParams,
  StringGetEmptyOptionalParams,
  StringGetEmptyResponse,
  StringPutEmptyOptionalParams,
  StringGetMbcsOptionalParams,
  StringGetMbcsResponse,
  StringPutMbcsOptionalParams,
  StringGetWhitespaceOptionalParams,
  StringGetWhitespaceResponse,
  StringPutWhitespaceOptionalParams,
  StringGetNotProvidedOptionalParams,
  StringGetNotProvidedResponse,
  StringGetBase64EncodedOptionalParams,
  StringGetBase64EncodedResponse,
  StringGetBase64UrlEncodedOptionalParams,
  StringGetBase64UrlEncodedResponse,
  StringPutBase64UrlEncodedOptionalParams,
  StringGetNullBase64UrlEncodedOptionalParams,
  StringGetNullBase64UrlEncodedResponse
} from "../models";

/** Class containing StringOperations operations. */
export class StringOperationsImpl implements StringOperations {
  private readonly client: BodyStringClient;

  /**
   * Initialize a new instance of the class StringOperations class.
   * @param client Reference to the service client
   */
  constructor(client: BodyStringClient) {
    this.client = client;
  }

  /**
   * Get null string value value
   * @param options The options parameters.
   */
  getNull(
    options?: StringGetNullOptionalParams
  ): Promise<StringGetNullResponse> {
    return this.client.sendOperationRequest({ options }, getNullOperationSpec);
  }

  /**
   * Set string value null
   * @param options The options parameters.
   */
  putNull(options?: StringPutNullOptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, putNullOperationSpec);
  }

  /**
   * Get empty string value value ''
   * @param options The options parameters.
   */
  getEmpty(
    options?: StringGetEmptyOptionalParams
  ): Promise<StringGetEmptyResponse> {
    return this.client.sendOperationRequest({ options }, getEmptyOperationSpec);
  }

  /**
   * Set string value empty ''
   * @param options The options parameters.
   */
  putEmpty(options?: StringPutEmptyOptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, putEmptyOperationSpec);
  }

  /**
   * Get mbcs string value '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€'
   * @param options The options parameters.
   */
  getMbcs(
    options?: StringGetMbcsOptionalParams
  ): Promise<StringGetMbcsResponse> {
    return this.client.sendOperationRequest({ options }, getMbcsOperationSpec);
  }

  /**
   * Set string value mbcs '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€'
   * @param options The options parameters.
   */
  putMbcs(options?: StringPutMbcsOptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, putMbcsOperationSpec);
  }

  /**
   * Get string value with leading and trailing whitespace '<tab><space><space>Now is the time for all
   * good men to come to the aid of their country<tab><space><space>'
   * @param options The options parameters.
   */
  getWhitespace(
    options?: StringGetWhitespaceOptionalParams
  ): Promise<StringGetWhitespaceResponse> {
    return this.client.sendOperationRequest(
      { options },
      getWhitespaceOperationSpec
    );
  }

  /**
   * Set String value with leading and trailing whitespace '<tab><space><space>Now is the time for all
   * good men to come to the aid of their country<tab><space><space>'
   * @param options The options parameters.
   */
  putWhitespace(options?: StringPutWhitespaceOptionalParams): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      putWhitespaceOperationSpec
    );
  }

  /**
   * Get String value when no string value is sent in response payload
   * @param options The options parameters.
   */
  getNotProvided(
    options?: StringGetNotProvidedOptionalParams
  ): Promise<StringGetNotProvidedResponse> {
    return this.client.sendOperationRequest(
      { options },
      getNotProvidedOperationSpec
    );
  }

  /**
   * Get value that is base64 encoded
   * @param options The options parameters.
   */
  getBase64Encoded(
    options?: StringGetBase64EncodedOptionalParams
  ): Promise<StringGetBase64EncodedResponse> {
    return this.client.sendOperationRequest(
      { options },
      getBase64EncodedOperationSpec
    );
  }

  /**
   * Get value that is base64url encoded
   * @param options The options parameters.
   */
  getBase64UrlEncoded(
    options?: StringGetBase64UrlEncodedOptionalParams
  ): Promise<StringGetBase64UrlEncodedResponse> {
    return this.client.sendOperationRequest(
      { options },
      getBase64UrlEncodedOperationSpec
    );
  }

  /**
   * Put value that is base64url encoded
   * @param stringBody string body
   * @param options The options parameters.
   */
  putBase64UrlEncoded(
    stringBody: Uint8Array,
    options?: StringPutBase64UrlEncodedOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { stringBody, options },
      putBase64UrlEncodedOperationSpec
    );
  }

  /**
   * Get null value that is expected to be base64url encoded
   * @param options The options parameters.
   */
  getNullBase64UrlEncoded(
    options?: StringGetNullBase64UrlEncodedOptionalParams
  ): Promise<StringGetNullBase64UrlEncodedResponse> {
    return this.client.sendOperationRequest(
      { options },
      getNullBase64UrlEncodedOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getNullOperationSpec: coreClient.OperationSpec = {
  path: "/string/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putNullOperationSpec: coreClient.OperationSpec = {
  path: "/string/null",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.stringBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getEmptyOperationSpec: coreClient.OperationSpec = {
  path: "/string/empty",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putEmptyOperationSpec: coreClient.OperationSpec = {
  path: "/string/empty",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.stringBody1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getMbcsOperationSpec: coreClient.OperationSpec = {
  path: "/string/mbcs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putMbcsOperationSpec: coreClient.OperationSpec = {
  path: "/string/mbcs",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.stringBody2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getWhitespaceOperationSpec: coreClient.OperationSpec = {
  path: "/string/whitespace",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putWhitespaceOperationSpec: coreClient.OperationSpec = {
  path: "/string/whitespace",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.stringBody3,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getNotProvidedOperationSpec: coreClient.OperationSpec = {
  path: "/string/notProvided",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getBase64EncodedOperationSpec: coreClient.OperationSpec = {
  path: "/string/base64Encoding",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "ByteArray" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getBase64UrlEncodedOperationSpec: coreClient.OperationSpec = {
  path: "/string/base64UrlEncoding",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Base64Url" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putBase64UrlEncodedOperationSpec: coreClient.OperationSpec = {
  path: "/string/base64UrlEncoding",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.stringBody4,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getNullBase64UrlEncodedOperationSpec: coreClient.OperationSpec = {
  path: "/string/nullBase64UrlEncoding",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Base64Url" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
