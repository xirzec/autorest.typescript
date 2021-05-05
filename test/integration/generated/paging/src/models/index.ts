/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export interface ProductResultValue {
  value?: Product[];
  nextLink?: string;
}

export interface Product {
  properties?: ProductProperties;
}

export interface ProductProperties {
  id?: number;
  name?: string;
}

export interface ProductResult {
  values?: Product[];
  nextLink?: string;
}

export interface OdataProductResult {
  values?: Product[];
  odataNextLink?: string;
}

export interface ProductResultValueWithXMSClientName {
  indexes?: Product[];
  nextLink?: string;
}

export interface OperationResult {
  /** The status of the request */
  status?: OperationResultStatus;
}

/** Parameter group */
export interface PagingGetMultiplePagesOptions {
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

/** Parameter group */
export interface PagingGetOdataMultiplePagesOptions {
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

/** Parameter group */
export interface PagingGetMultiplePagesWithOffsetOptions {
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Offset of return value */
  offset: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

/** Parameter group */
export interface CustomParameterGroup {
  /** Sets the api version to use. */
  apiVersion: string;
  /** Sets the tenant to use. */
  tenant: string;
}

/** Parameter group */
export interface PagingGetMultiplePagesLroOptions {
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

/** Known values of {@link OperationResultStatus} that the service accepts. */
export const enum KnownOperationResultStatus {
  Succeeded = "Succeeded",
  Failed = "Failed",
  Canceled = "canceled",
  Accepted = "Accepted",
  Creating = "Creating",
  Created = "Created",
  Updating = "Updating",
  Updated = "Updated",
  Deleting = "Deleting",
  Deleted = "Deleted",
  OK = "OK"
}

/**
 * Defines values for OperationResultStatus. \
 * {@link KnownOperationResultStatus} can be used interchangeably with OperationResultStatus,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **canceled** \
 * **Accepted** \
 * **Creating** \
 * **Created** \
 * **Updating** \
 * **Updated** \
 * **Deleting** \
 * **Deleted** \
 * **OK**
 */
export type OperationResultStatus = string;

/** Optional parameters. */
export interface PagingGetNoItemNamePagesOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getNoItemNamePages operation. */
export type PagingGetNoItemNamePagesResponse = ProductResultValue & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResultValue;
  };
};

/** Optional parameters. */
export interface PagingGetNullNextLinkNamePagesOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getNullNextLinkNamePages operation. */
export type PagingGetNullNextLinkNamePagesResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetSinglePagesOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getSinglePages operation. */
export type PagingGetSinglePagesResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingFirstResponseEmptyOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the firstResponseEmpty operation. */
export type PagingFirstResponseEmptyResponse = ProductResultValue & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResultValue;
  };
};

/** Optional parameters. */
export interface PagingGetMultiplePagesOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  pagingGetMultiplePagesOptions?: PagingGetMultiplePagesOptions;
  clientRequestId?: string;
}

/** Contains response data for the getMultiplePages operation. */
export type PagingGetMultiplePagesResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetWithQueryParamsOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getWithQueryParams operation. */
export type PagingGetWithQueryParamsResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingNextOperationWithQueryParamsOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the nextOperationWithQueryParams operation. */
export type PagingNextOperationWithQueryParamsResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetOdataMultiplePagesOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  pagingGetOdataMultiplePagesOptions?: PagingGetOdataMultiplePagesOptions;
  clientRequestId?: string;
}

/** Contains response data for the getOdataMultiplePages operation. */
export type PagingGetOdataMultiplePagesResponse = OdataProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: OdataProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetMultiplePagesWithOffsetOptionalParams
  extends coreHttp.OperationOptions {
  clientRequestId?: string;
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

/** Contains response data for the getMultiplePagesWithOffset operation. */
export type PagingGetMultiplePagesWithOffsetResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetMultiplePagesRetryFirstOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getMultiplePagesRetryFirst operation. */
export type PagingGetMultiplePagesRetryFirstResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetMultiplePagesRetrySecondOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getMultiplePagesRetrySecond operation. */
export type PagingGetMultiplePagesRetrySecondResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetSinglePagesFailureOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getSinglePagesFailure operation. */
export type PagingGetSinglePagesFailureResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetMultiplePagesFailureOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getMultiplePagesFailure operation. */
export type PagingGetMultiplePagesFailureResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetMultiplePagesFailureUriOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getMultiplePagesFailureUri operation. */
export type PagingGetMultiplePagesFailureUriResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetMultiplePagesFragmentNextLinkOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getMultiplePagesFragmentNextLink operation. */
export type PagingGetMultiplePagesFragmentNextLinkResponse = OdataProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: OdataProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetMultiplePagesFragmentWithGroupingNextLinkOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getMultiplePagesFragmentWithGroupingNextLink operation. */
export type PagingGetMultiplePagesFragmentWithGroupingNextLinkResponse = OdataProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: OdataProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetMultiplePagesLROOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  pagingGetMultiplePagesLroOptions?: PagingGetMultiplePagesLroOptions;
  clientRequestId?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the getMultiplePagesLRO operation. */
export type PagingGetMultiplePagesLROResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingNextFragmentOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the nextFragment operation. */
export type PagingNextFragmentResponse = OdataProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: OdataProductResult;
  };
};

/** Optional parameters. */
export interface PagingNextFragmentWithGroupingOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the nextFragmentWithGrouping operation. */
export type PagingNextFragmentWithGroupingResponse = OdataProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: OdataProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetPagingModelWithItemNameWithXMSClientNameOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getPagingModelWithItemNameWithXMSClientName operation. */
export type PagingGetPagingModelWithItemNameWithXMSClientNameResponse = ProductResultValueWithXMSClientName & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResultValueWithXMSClientName;
  };
};

/** Optional parameters. */
export interface PagingGetNoItemNamePagesNextOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getNoItemNamePagesNext operation. */
export type PagingGetNoItemNamePagesNextResponse = ProductResultValue & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResultValue;
  };
};

/** Optional parameters. */
export interface PagingGetSinglePagesNextOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getSinglePagesNext operation. */
export type PagingGetSinglePagesNextResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingFirstResponseEmptyNextOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the firstResponseEmptyNext operation. */
export type PagingFirstResponseEmptyNextResponse = ProductResultValue & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResultValue;
  };
};

/** Optional parameters. */
export interface PagingGetMultiplePagesNextOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  pagingGetMultiplePagesOptions?: PagingGetMultiplePagesOptions;
  clientRequestId?: string;
}

/** Contains response data for the getMultiplePagesNext operation. */
export type PagingGetMultiplePagesNextResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetOdataMultiplePagesNextOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  pagingGetOdataMultiplePagesOptions?: PagingGetOdataMultiplePagesOptions;
  clientRequestId?: string;
}

/** Contains response data for the getOdataMultiplePagesNext operation. */
export type PagingGetOdataMultiplePagesNextResponse = OdataProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: OdataProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetMultiplePagesWithOffsetNextOptionalParams
  extends coreHttp.OperationOptions {
  clientRequestId?: string;
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

/** Contains response data for the getMultiplePagesWithOffsetNext operation. */
export type PagingGetMultiplePagesWithOffsetNextResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetMultiplePagesRetryFirstNextOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getMultiplePagesRetryFirstNext operation. */
export type PagingGetMultiplePagesRetryFirstNextResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetMultiplePagesRetrySecondNextOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getMultiplePagesRetrySecondNext operation. */
export type PagingGetMultiplePagesRetrySecondNextResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetSinglePagesFailureNextOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getSinglePagesFailureNext operation. */
export type PagingGetSinglePagesFailureNextResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetMultiplePagesFailureNextOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getMultiplePagesFailureNext operation. */
export type PagingGetMultiplePagesFailureNextResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetMultiplePagesFailureUriNextOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getMultiplePagesFailureUriNext operation. */
export type PagingGetMultiplePagesFailureUriNextResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetMultiplePagesLRONextOptionalParams
  extends coreHttp.OperationOptions {
  /** Parameter group */
  pagingGetMultiplePagesLroOptions?: PagingGetMultiplePagesLroOptions;
  clientRequestId?: string;
}

/** Contains response data for the getMultiplePagesLRONext operation. */
export type PagingGetMultiplePagesLRONextResponse = ProductResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResult;
  };
};

/** Optional parameters. */
export interface PagingGetPagingModelWithItemNameWithXMSClientNameNextOptionalParams
  extends coreHttp.OperationOptions {}

/** Contains response data for the getPagingModelWithItemNameWithXMSClientNameNext operation. */
export type PagingGetPagingModelWithItemNameWithXMSClientNameNextResponse = ProductResultValueWithXMSClientName & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ProductResultValueWithXMSClientName;
  };
};

/** Optional parameters. */
export interface PagingClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
