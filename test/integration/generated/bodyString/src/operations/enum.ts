/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Enum } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyStringClientContext } from "../bodyStringClientContext";
import {
  EnumGetNotExpandableOptionalParams,
  EnumGetNotExpandableResponse,
  Colors,
  EnumPutNotExpandableOptionalParams,
  EnumGetReferencedOptionalParams,
  EnumGetReferencedResponse,
  EnumPutReferencedOptionalParams,
  EnumGetReferencedConstantOptionalParams,
  EnumGetReferencedConstantResponse,
  RefColorConstant,
  EnumPutReferencedConstantOptionalParams
} from "../models";

/** Class representing a Enum. */
export class EnumImpl implements Enum {
  private readonly client: BodyStringClientContext;

  /**
   * Initialize a new instance of the class Enum class.
   * @param client Reference to the service client
   */
  constructor(client: BodyStringClientContext) {
    this.client = client;
  }

  /**
   * Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'.
   * @param options The options parameters.
   */
  getNotExpandable(
    options?: EnumGetNotExpandableOptionalParams
  ): Promise<EnumGetNotExpandableResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getNotExpandableOperationSpec
    ) as Promise<EnumGetNotExpandableResponse>;
  }

  /**
   * Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'
   * @param stringBody string body
   * @param options The options parameters.
   */
  putNotExpandable(
    stringBody: Colors,
    options?: EnumPutNotExpandableOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      stringBody,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      putNotExpandableOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'.
   * @param options The options parameters.
   */
  getReferenced(
    options?: EnumGetReferencedOptionalParams
  ): Promise<EnumGetReferencedResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getReferencedOperationSpec
    ) as Promise<EnumGetReferencedResponse>;
  }

  /**
   * Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'
   * @param enumStringBody enum string body
   * @param options The options parameters.
   */
  putReferenced(
    enumStringBody: Colors,
    options?: EnumPutReferencedOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      enumStringBody,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      putReferencedOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get value 'green-color' from the constant.
   * @param options The options parameters.
   */
  getReferencedConstant(
    options?: EnumGetReferencedConstantOptionalParams
  ): Promise<EnumGetReferencedConstantResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getReferencedConstantOperationSpec
    ) as Promise<EnumGetReferencedConstantResponse>;
  }

  /**
   * Sends value 'green-color' from a constant
   * @param enumStringBody enum string body
   * @param options The options parameters.
   */
  putReferencedConstant(
    enumStringBody: RefColorConstant,
    options?: EnumPutReferencedConstantOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      enumStringBody,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      putReferencedConstantOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getNotExpandableOperationSpec: coreHttp.OperationSpec = {
  path: "/string/enum/notExpandable",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Enum",
          allowedValues: ["red color", "green-color", "blue_color"]
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putNotExpandableOperationSpec: coreHttp.OperationSpec = {
  path: "/string/enum/notExpandable",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.stringBody5,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getReferencedOperationSpec: coreHttp.OperationSpec = {
  path: "/string/enum/Referenced",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Enum",
          allowedValues: ["red color", "green-color", "blue_color"]
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putReferencedOperationSpec: coreHttp.OperationSpec = {
  path: "/string/enum/Referenced",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.enumStringBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getReferencedConstantOperationSpec: coreHttp.OperationSpec = {
  path: "/string/enum/ReferencedConstant",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RefColorConstant
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putReferencedConstantOperationSpec: coreHttp.OperationSpec = {
  path: "/string/enum/ReferencedConstant",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.enumStringBody1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
