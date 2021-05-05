/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import {
  DataMaskingRule,
  DataMaskingRulesListByDatabaseOptionalParams,
  DataMaskingRulesCreateOrUpdateOptionalParams,
  DataMaskingRulesCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DataMaskingRules. */
export interface DataMaskingRules {
  /**
   * Gets a list of database data masking rules.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DataMaskingRulesListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<DataMaskingRule>;
  /**
   * Creates or updates a database data masking rule.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param dataMaskingRuleName The name of the data masking rule.
   * @param parameters The required parameters for creating or updating a data masking rule.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    dataMaskingRuleName: string,
    parameters: DataMaskingRule,
    options?: DataMaskingRulesCreateOrUpdateOptionalParams
  ): Promise<DataMaskingRulesCreateOrUpdateResponse>;
}
