/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Parameters from "./models/parameters";
import { LicenseHeaderClientContext } from "./licenseHeaderClientContext";
import {
  LicenseHeaderClientOptionalParams,
  Enum0,
  LicenseHeaderClientApiV1ValueGetOptionalParams,
  LicenseHeaderClientApiV1ValueGetResponse
} from "./models";

export class LicenseHeaderClient extends LicenseHeaderClientContext {
  /**
   * Initializes a new instance of the LicenseHeaderClient class.
   * @param $host server parameter
   * @param apiVersion
   * @param options The parameter options
   */
  constructor(
    $host: string,
    apiVersion: Enum0,
    options?: LicenseHeaderClientOptionalParams
  ) {
    super($host, apiVersion, options);
  }

  /** @param options The options parameters. */
  apiV1ValueGet(
    options?: LicenseHeaderClientApiV1ValueGetOptionalParams
  ): Promise<LicenseHeaderClientApiV1ValueGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      apiV1ValueGetOperationSpec
    ) as Promise<LicenseHeaderClientApiV1ValueGetResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer({}, /* isXml */ false);

const apiV1ValueGetOperationSpec: coreHttp.OperationSpec = {
  path: "/api/v1/value",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.apiVersion],
  serializer
};
