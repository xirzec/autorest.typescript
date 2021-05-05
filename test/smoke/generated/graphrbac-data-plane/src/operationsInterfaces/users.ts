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
  User,
  UsersListNextOptionalParams,
  UsersListOptionalParams,
  UserGetMemberGroupsParameters,
  UsersGetMemberGroupsOptionalParams,
  UserCreateParameters,
  UsersCreateOptionalParams,
  UsersCreateResponse,
  UsersGetOptionalParams,
  UsersGetResponse,
  UserUpdateParameters,
  UsersUpdateOptionalParams,
  UsersDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Users. */
export interface Users {
  /**
   * Gets list of users for the current tenant.
   * @param options The options parameters.
   */
  list(options?: UsersListOptionalParams): PagedAsyncIterableIterator<User>;
  /**
   * Gets a collection that contains the object IDs of the groups of which the user is a member.
   * @param objectId The object ID of the user for which to get group membership.
   * @param parameters User filtering parameters.
   * @param options The options parameters.
   */
  listMemberGroups(
    objectId: string,
    parameters: UserGetMemberGroupsParameters,
    options?: UsersGetMemberGroupsOptionalParams
  ): PagedAsyncIterableIterator<string>;
  /**
   * Gets a list of users for the current tenant.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: UsersListNextOptionalParams
  ): PagedAsyncIterableIterator<User>;
  /**
   * Create a new user.
   * @param parameters Parameters to create a user.
   * @param options The options parameters.
   */
  create(
    parameters: UserCreateParameters,
    options?: UsersCreateOptionalParams
  ): Promise<UsersCreateResponse>;
  /**
   * Gets user information from the directory.
   * @param upnOrObjectId The object ID or principal name of the user for which to get information.
   * @param options The options parameters.
   */
  get(
    upnOrObjectId: string,
    options?: UsersGetOptionalParams
  ): Promise<UsersGetResponse>;
  /**
   * Updates a user.
   * @param upnOrObjectId The object ID or principal name of the user to update.
   * @param parameters Parameters to update an existing user.
   * @param options The options parameters.
   */
  update(
    upnOrObjectId: string,
    parameters: UserUpdateParameters,
    options?: UsersUpdateOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Delete a user.
   * @param upnOrObjectId The object ID or principal name of the user to delete.
   * @param options The options parameters.
   */
  delete(
    upnOrObjectId: string,
    options?: UsersDeleteOptionalParams
  ): Promise<coreHttp.RestResponse>;
}
