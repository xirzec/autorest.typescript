/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  LRORetrysPut201CreatingSucceeded200OptionalParams,
  LRORetrysPut201CreatingSucceeded200Response,
  LRORetrysPutAsyncRelativeRetrySucceededOptionalParams,
  LRORetrysPutAsyncRelativeRetrySucceededResponse,
  LRORetrysDeleteProvisioning202Accepted200SucceededOptionalParams,
  LRORetrysDeleteProvisioning202Accepted200SucceededResponse,
  LRORetrysDelete202Retry200OptionalParams,
  LRORetrysDelete202Retry200Response,
  LRORetrysDeleteAsyncRelativeRetrySucceededOptionalParams,
  LRORetrysDeleteAsyncRelativeRetrySucceededResponse,
  LRORetrysPost202Retry200OptionalParams,
  LRORetrysPost202Retry200Response,
  LRORetrysPostAsyncRelativeRetrySucceededOptionalParams,
  LRORetrysPostAsyncRelativeRetrySucceededResponse
} from "../models";

/** Interface representing a LRORetrys. */
export interface LRORetrys {
  /**
   * Long running put request, service returns a 500, then a 201 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a
   * ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  beginPut201CreatingSucceeded200(
    options?: LRORetrysPut201CreatingSucceeded200OptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<LRORetrysPut201CreatingSucceeded200Response>,
      LRORetrysPut201CreatingSucceeded200Response
    >
  >;
  /**
   * Long running put request, service returns a 500, then a 201 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a
   * ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  beginPut201CreatingSucceeded200AndWait(
    options?: LRORetrysPut201CreatingSucceeded200OptionalParams
  ): Promise<LRORetrysPut201CreatingSucceeded200Response>;
  /**
   * Long running put request, service returns a 500, then a 200 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation
   * header for operation status
   * @param options The options parameters.
   */
  beginPutAsyncRelativeRetrySucceeded(
    options?: LRORetrysPutAsyncRelativeRetrySucceededOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<LRORetrysPutAsyncRelativeRetrySucceededResponse>,
      LRORetrysPutAsyncRelativeRetrySucceededResponse
    >
  >;
  /**
   * Long running put request, service returns a 500, then a 200 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation
   * header for operation status
   * @param options The options parameters.
   */
  beginPutAsyncRelativeRetrySucceededAndWait(
    options?: LRORetrysPutAsyncRelativeRetrySucceededOptionalParams
  ): Promise<LRORetrysPutAsyncRelativeRetrySucceededResponse>;
  /**
   * Long running delete request, service returns a 500, then a  202 to the initial request, with an
   * entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll
   * returns a ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  beginDeleteProvisioning202Accepted200Succeeded(
    options?: LRORetrysDeleteProvisioning202Accepted200SucceededOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<
        LRORetrysDeleteProvisioning202Accepted200SucceededResponse
      >,
      LRORetrysDeleteProvisioning202Accepted200SucceededResponse
    >
  >;
  /**
   * Long running delete request, service returns a 500, then a  202 to the initial request, with an
   * entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll
   * returns a ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  beginDeleteProvisioning202Accepted200SucceededAndWait(
    options?: LRORetrysDeleteProvisioning202Accepted200SucceededOptionalParams
  ): Promise<LRORetrysDeleteProvisioning202Accepted200SucceededResponse>;
  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Polls return
   * this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  beginDelete202Retry200(
    options?: LRORetrysDelete202Retry200OptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<LRORetrysDelete202Retry200Response>,
      LRORetrysDelete202Retry200Response
    >
  >;
  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Polls return
   * this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  beginDelete202Retry200AndWait(
    options?: LRORetrysDelete202Retry200OptionalParams
  ): Promise<LRORetrysDelete202Retry200Response>;
  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Poll the
   * endpoint indicated in the Azure-AsyncOperation header for operation status
   * @param options The options parameters.
   */
  beginDeleteAsyncRelativeRetrySucceeded(
    options?: LRORetrysDeleteAsyncRelativeRetrySucceededOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<LRORetrysDeleteAsyncRelativeRetrySucceededResponse>,
      LRORetrysDeleteAsyncRelativeRetrySucceededResponse
    >
  >;
  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Poll the
   * endpoint indicated in the Azure-AsyncOperation header for operation status
   * @param options The options parameters.
   */
  beginDeleteAsyncRelativeRetrySucceededAndWait(
    options?: LRORetrysDeleteAsyncRelativeRetrySucceededOptionalParams
  ): Promise<LRORetrysDeleteAsyncRelativeRetrySucceededResponse>;
  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with 'Location'
   * and 'Retry-After' headers, Polls return a 200 with a response body after success
   * @param options The options parameters.
   */
  beginPost202Retry200(
    options?: LRORetrysPost202Retry200OptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<LRORetrysPost202Retry200Response>,
      LRORetrysPost202Retry200Response
    >
  >;
  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with 'Location'
   * and 'Retry-After' headers, Polls return a 200 with a response body after success
   * @param options The options parameters.
   */
  beginPost202Retry200AndWait(
    options?: LRORetrysPost202Retry200OptionalParams
  ): Promise<LRORetrysPost202Retry200Response>;
  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation
   * header for operation status
   * @param options The options parameters.
   */
  beginPostAsyncRelativeRetrySucceeded(
    options?: LRORetrysPostAsyncRelativeRetrySucceededOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<LRORetrysPostAsyncRelativeRetrySucceededResponse>,
      LRORetrysPostAsyncRelativeRetrySucceededResponse
    >
  >;
  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation
   * header for operation status
   * @param options The options parameters.
   */
  beginPostAsyncRelativeRetrySucceededAndWait(
    options?: LRORetrysPostAsyncRelativeRetrySucceededOptionalParams
  ): Promise<LRORetrysPostAsyncRelativeRetrySucceededResponse>;
}
