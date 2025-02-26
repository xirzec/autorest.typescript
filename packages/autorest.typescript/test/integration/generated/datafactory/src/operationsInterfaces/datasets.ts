import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DatasetResource,
  DatasetsListByFactoryOptionalParams,
  DatasetsCreateOrUpdateOptionalParams,
  DatasetsCreateOrUpdateResponse,
  DatasetsGetOptionalParams,
  DatasetsGetResponse,
  DatasetsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Datasets. */
export interface Datasets {
  /**
   * Lists datasets.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: DatasetsListByFactoryOptionalParams
  ): PagedAsyncIterableIterator<DatasetResource>;
  /**
   * Creates or updates a dataset.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param datasetName The dataset name.
   * @param dataset Dataset resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    datasetName: string,
    dataset: DatasetResource,
    options?: DatasetsCreateOrUpdateOptionalParams
  ): Promise<DatasetsCreateOrUpdateResponse>;
  /**
   * Gets a dataset.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param datasetName The dataset name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    datasetName: string,
    options?: DatasetsGetOptionalParams
  ): Promise<DatasetsGetResponse>;
  /**
   * Deletes a dataset.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param datasetName The dataset name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    datasetName: string,
    options?: DatasetsDeleteOptionalParams
  ): Promise<void>;
}
