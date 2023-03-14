// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { PlayFabClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `PlayFabClient`
 * @param endpoint type: string, The endpoint of your PlayFab service
 * @param options type: ClientOptions, the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  options: ClientOptions = {}
): PlayFabClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;

  const userAgentInfo = `azsdk-js-playfab-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
  };

  const client = getClient(baseUrl, options) as PlayFabClient;

  return client;
}