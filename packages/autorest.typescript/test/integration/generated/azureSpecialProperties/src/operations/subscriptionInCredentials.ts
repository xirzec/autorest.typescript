/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SubscriptionInCredentials } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureSpecialPropertiesClient } from "../azureSpecialPropertiesClient";
import {
  SubscriptionInCredentialsPostMethodGlobalValidOptionalParams,
  SubscriptionInCredentialsPostMethodGlobalNullOptionalParams,
  SubscriptionInCredentialsPostMethodGlobalNotProvidedValidOptionalParams,
  SubscriptionInCredentialsPostPathGlobalValidOptionalParams,
  SubscriptionInCredentialsPostSwaggerGlobalValidOptionalParams
} from "../models";

/** Class containing SubscriptionInCredentials operations. */
export class SubscriptionInCredentialsImpl
  implements SubscriptionInCredentials {
  private readonly client: AzureSpecialPropertiesClient;

  /**
   * Initialize a new instance of the class SubscriptionInCredentials class.
   * @param client Reference to the service client
   */
  constructor(client: AzureSpecialPropertiesClient) {
    this.client = client;
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to
   * '1234-5678-9012-3456' to succeed
   * @param options The options parameters.
   */
  postMethodGlobalValid(
    options?: SubscriptionInCredentialsPostMethodGlobalValidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postMethodGlobalValidOperationSpec
    );
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to null,
   * and client-side validation should prevent you from making this call
   * @param options The options parameters.
   */
  postMethodGlobalNull(
    options?: SubscriptionInCredentialsPostMethodGlobalNullOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postMethodGlobalNullOperationSpec
    );
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to
   * '1234-5678-9012-3456' to succeed
   * @param options The options parameters.
   */
  postMethodGlobalNotProvidedValid(
    options?: SubscriptionInCredentialsPostMethodGlobalNotProvidedValidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postMethodGlobalNotProvidedValidOperationSpec
    );
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to
   * '1234-5678-9012-3456' to succeed
   * @param options The options parameters.
   */
  postPathGlobalValid(
    options?: SubscriptionInCredentialsPostPathGlobalValidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postPathGlobalValidOperationSpec
    );
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to
   * '1234-5678-9012-3456' to succeed
   * @param options The options parameters.
   */
  postSwaggerGlobalValid(
    options?: SubscriptionInCredentialsPostSwaggerGlobalValidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postSwaggerGlobalValidOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const postMethodGlobalValidOperationSpec: coreClient.OperationSpec = {
  path:
    "/azurespecials/subscriptionId/method/string/none/path/global/1234-5678-9012-3456/{subscriptionId}",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const postMethodGlobalNullOperationSpec: coreClient.OperationSpec = {
  path:
    "/azurespecials/subscriptionId/method/string/none/path/global/null/{subscriptionId}",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const postMethodGlobalNotProvidedValidOperationSpec: coreClient.OperationSpec = {
  path:
    "/azurespecials/subscriptionId/method/string/none/path/globalNotProvided/1234-5678-9012-3456/{subscriptionId}",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const postPathGlobalValidOperationSpec: coreClient.OperationSpec = {
  path:
    "/azurespecials/subscriptionId/path/string/none/path/global/1234-5678-9012-3456/{subscriptionId}",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const postSwaggerGlobalValidOperationSpec: coreClient.OperationSpec = {
  path:
    "/azurespecials/subscriptionId/swagger/string/none/path/global/1234-5678-9012-3456/{subscriptionId}",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
