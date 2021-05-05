/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export interface ErrorModel {
  status?: number;
  message?: string;
}

export interface IntWrapper {
  value: number;
}

export interface IntOptionalWrapper {
  value?: number;
}

export interface StringWrapper {
  value: string;
}

export interface StringOptionalWrapper {
  value?: string;
}

export interface Product {
  id: number;
  name?: string;
}

export interface ClassWrapper {
  value: Product;
}

export interface ClassOptionalWrapper {
  value?: Product;
}

export interface ArrayWrapper {
  value: string[];
}

export interface ArrayOptionalWrapper {
  value?: string[];
}

/** Optional parameters. */
export interface ImplicitGetRequiredPathOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface ImplicitPutOptionalQueryOptionalParams
  extends coreHttp.OperationOptions {
  queryParameter?: string;
}

/** Optional parameters. */
export interface ImplicitPutOptionalHeaderOptionalParams
  extends coreHttp.OperationOptions {
  queryParameter?: string;
}

/** Optional parameters. */
export interface ImplicitPutOptionalBodyOptionalParams
  extends coreHttp.OperationOptions {
  bodyParameter?: string;
}

/** Optional parameters. */
export interface ImplicitPutOptionalBinaryBodyOptionalParams
  extends coreHttp.OperationOptions {
  bodyParameter?: coreHttp.HttpRequestBody;
}

/** Optional parameters. */
export interface ImplicitGetRequiredGlobalPathOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface ImplicitGetRequiredGlobalQueryOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface ImplicitGetOptionalGlobalQueryOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPutOptionalBinaryBodyOptionalParams
  extends coreHttp.OperationOptions {
  bodyParameter?: coreHttp.HttpRequestBody;
}

/** Optional parameters. */
export interface ExplicitPutRequiredBinaryBodyOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostRequiredIntegerParameterOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalIntegerParameterOptionalParams
  extends coreHttp.OperationOptions {
  bodyParameter?: number;
}

/** Optional parameters. */
export interface ExplicitPostRequiredIntegerPropertyOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalIntegerPropertyOptionalParams
  extends coreHttp.OperationOptions {
  bodyParameter?: IntOptionalWrapper;
}

/** Optional parameters. */
export interface ExplicitPostRequiredIntegerHeaderOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalIntegerHeaderOptionalParams
  extends coreHttp.OperationOptions {
  headerParameter?: number;
}

/** Optional parameters. */
export interface ExplicitPostRequiredStringParameterOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalStringParameterOptionalParams
  extends coreHttp.OperationOptions {
  bodyParameter?: string;
}

/** Optional parameters. */
export interface ExplicitPostRequiredStringPropertyOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalStringPropertyOptionalParams
  extends coreHttp.OperationOptions {
  bodyParameter?: StringOptionalWrapper;
}

/** Optional parameters. */
export interface ExplicitPostRequiredStringHeaderOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalStringHeaderOptionalParams
  extends coreHttp.OperationOptions {
  bodyParameter?: string;
}

/** Optional parameters. */
export interface ExplicitPostRequiredClassParameterOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalClassParameterOptionalParams
  extends coreHttp.OperationOptions {
  bodyParameter?: Product;
}

/** Optional parameters. */
export interface ExplicitPostRequiredClassPropertyOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalClassPropertyOptionalParams
  extends coreHttp.OperationOptions {
  bodyParameter?: ClassOptionalWrapper;
}

/** Optional parameters. */
export interface ExplicitPostRequiredArrayParameterOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalArrayParameterOptionalParams
  extends coreHttp.OperationOptions {
  /** Array of String */
  bodyParameter?: string[];
}

/** Optional parameters. */
export interface ExplicitPostRequiredArrayPropertyOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalArrayPropertyOptionalParams
  extends coreHttp.OperationOptions {
  bodyParameter?: ArrayOptionalWrapper;
}

/** Optional parameters. */
export interface ExplicitPostRequiredArrayHeaderOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface ExplicitPostOptionalArrayHeaderOptionalParams
  extends coreHttp.OperationOptions {
  /** Array of String */
  headerParameter?: string[];
}

/** Optional parameters. */
export interface RequiredOptionalClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** number of items to skip */
  optionalGlobalQuery?: number;
  /** Overrides client endpoint. */
  endpoint?: string;
}
