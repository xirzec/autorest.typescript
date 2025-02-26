// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface TestMulti200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface TestCsv200Response extends HttpResponse {
  status: "200";
  body: string;
}
