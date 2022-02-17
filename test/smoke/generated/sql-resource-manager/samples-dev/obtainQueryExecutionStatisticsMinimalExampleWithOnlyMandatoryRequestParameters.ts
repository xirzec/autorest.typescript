/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Get query execution statistics by query id.
 *
 * @summary Get query execution statistics by query id.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ManagedInstanceQueryStatisticsListMin.json
 */
import {
  ManagedDatabaseQueriesListByQueryOptionalParams,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function obtainQueryExecutionStatisticsMinimalExampleWithOnlyMandatoryRequestParameters() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "sqlcrudtest-7398";
  const managedInstanceName = "sqlcrudtest-4645";
  const databaseName = "database_1";
  const queryId = "42";
  const interval = "PT1H";
  const options: ManagedDatabaseQueriesListByQueryOptionalParams = { interval };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedDatabaseQueries.listByQuery(
    resourceGroupName,
    managedInstanceName,
    databaseName,
    queryId,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

obtainQueryExecutionStatisticsMinimalExampleWithOnlyMandatoryRequestParameters().catch(
  console.error
);