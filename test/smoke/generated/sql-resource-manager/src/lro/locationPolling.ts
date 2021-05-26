/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FullOperationResponse } from "@azure/core-client";
import { LROState } from "./stateMachine";

function isLocationPollingDone(rawResponse: FullOperationResponse) {
  const code = rawResponse.status;
  if (![202, 200].includes(code)) {
    throw new Error(`Operation failed`);
  }
  return code !== 202;
}

export function processLocationPollingOperationResult<TResult>(
  rawResponse: FullOperationResponse,
  flatResponse: TResult
): LROState<TResult> {
  return {
    rawResponse,
    flatResponse,
    done: isLocationPollingDone(rawResponse)
  };
}
