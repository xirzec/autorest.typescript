/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreAuth from "@azure/core-auth";
import { ApplicationsImpl, ApplicationDefinitionsImpl } from "./operations";
import { Applications, ApplicationDefinitions } from "./operationsInterfaces";
import { ApplicationClientContext } from "./applicationClientContext";
import { ApplicationClientOptionalParams } from "./models";

export class ApplicationClient extends ApplicationClientContext {
  /**
   * Initializes a new instance of the ApplicationClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: ApplicationClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.applications = new ApplicationsImpl(this);
    this.applicationDefinitions = new ApplicationDefinitionsImpl(this);
  }

  applications: Applications;
  applicationDefinitions: ApplicationDefinitions;
}
