/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { DurationImpl } from "./operations";
import { Duration } from "./operationsInterfaces";
import { BodyDurationClientOptionalParams } from "./models";

export class BodyDurationClient extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the BodyDurationClient class.
   * @param options The parameter options
   */
  constructor(options?: BodyDurationClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: BodyDurationClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-body-duration/1.0.0-preview1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint: options.endpoint ?? options.baseUri ?? "http://localhost:3000"
    };
    super(optionsWithDefaults);

    // Assigning values to Constant parameters
    this.$host = options.$host || "http://localhost:3000";
    this.duration = new DurationImpl(this);
  }

  duration: Duration;
}
