import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationParameter = {
  parameterPath: "apiVersion",
  mapper: {
    serializedName: "api-version",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const pageRange: OperationQueryParameter = {
  parameterPath: ["options", "pageRange"],
  mapper: {
    serializedName: "pageRange",
    type: {
      name: "Sequence",
      element: {
        constraints: {
          Pattern: new RegExp("^\\d+(-\\d+)?$"),
          MaxLength: 24,
          MinLength: 1
        },
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "CSV"
};
