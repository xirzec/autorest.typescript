/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const AzureMetricsDocument: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureMetricsDocument",
    modelProperties: {
      time: {
        serializedName: "time",
        required: true,
        type: {
          name: "String"
        }
      },
      data: {
        serializedName: "data",
        type: {
          name: "Composite",
          className: "AzureMetricsData"
        }
      }
    }
  }
};

export const AzureMetricsData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureMetricsData",
    modelProperties: {
      baseData: {
        serializedName: "baseData",
        type: {
          name: "Composite",
          className: "AzureMetricsBaseData"
        }
      }
    }
  }
};

export const AzureMetricsBaseData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureMetricsBaseData",
    modelProperties: {
      metric: {
        serializedName: "metric",
        required: true,
        type: {
          name: "String"
        }
      },
      namespace: {
        serializedName: "namespace",
        required: true,
        type: {
          name: "String"
        }
      },
      dimNames: {
        serializedName: "dimNames",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      series: {
        serializedName: "series",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AzureTimeSeriesData"
            }
          }
        }
      }
    }
  }
};

export const AzureTimeSeriesData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureTimeSeriesData",
    modelProperties: {
      dimValues: {
        serializedName: "dimValues",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      min: {
        serializedName: "min",
        required: true,
        type: {
          name: "Number"
        }
      },
      max: {
        serializedName: "max",
        required: true,
        type: {
          name: "Number"
        }
      },
      sum: {
        serializedName: "sum",
        required: true,
        type: {
          name: "Number"
        }
      },
      count: {
        serializedName: "count",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AzureMetricsResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureMetricsResult",
    modelProperties: {
      statusCode: {
        serializedName: "statusCode",
        type: {
          name: "Number"
        }
      },
      apiFailureResponse: {
        serializedName: "apiFailureResponse",
        type: {
          name: "Composite",
          className: "ApiFailureResponse"
        }
      }
    }
  }
};

export const ApiFailureResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiFailureResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ApiError"
        }
      }
    }
  }
};

export const ApiError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiError",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};