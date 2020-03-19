/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Parameters from "./models/parameters";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { ReportClientContext } from "./reportClientContext";

class ReportClient extends ReportClientContext {
  /**
   * Initializes a new instance of the ReportClient class.
   * @param options The parameter options
   */
  constructor(options?: Models.ReportClientOptionalParams) {
    super(options);
  }

  /**
   * Get test coverage report
   * @param options The options parameters.
   */
  getReport(
    options?: Models.ReportClientGetReportOptionalParams
  ): Promise<Models.ReportClientGetReportResponse> {
    return this.sendOperationRequest(
      { options },
      getReportOperationSpec
    ) as Promise<Models.ReportClientGetReportResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getReportOperationSpec: coreHttp.OperationSpec = {
  path: "/report/azure",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" }, serializedName: "Integer" }
        },
        serializedName: "DictionaryOfInteger"
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.qualifier],
  urlParameters: [Parameters.$host],
  serializer
};

// Operation Specifications

export {
  ReportClient,
  ReportClientContext,
  Models as ReportModels,
  Mappers as ReportMappers
};
