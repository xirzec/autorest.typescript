/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  DatetimeGetNullOptionalParams,
  DatetimeGetNullResponse,
  DatetimeGetInvalidOptionalParams,
  DatetimeGetInvalidResponse,
  DatetimeGetOverflowOptionalParams,
  DatetimeGetOverflowResponse,
  DatetimeGetUnderflowOptionalParams,
  DatetimeGetUnderflowResponse,
  DatetimePutUtcMaxDateTimeOptionalParams,
  DatetimePutUtcMaxDateTime7DigitsOptionalParams,
  DatetimeGetUtcLowercaseMaxDateTimeOptionalParams,
  DatetimeGetUtcLowercaseMaxDateTimeResponse,
  DatetimeGetUtcUppercaseMaxDateTimeOptionalParams,
  DatetimeGetUtcUppercaseMaxDateTimeResponse,
  DatetimeGetUtcUppercaseMaxDateTime7DigitsOptionalParams,
  DatetimeGetUtcUppercaseMaxDateTime7DigitsResponse,
  DatetimePutLocalPositiveOffsetMaxDateTimeOptionalParams,
  DatetimeGetLocalPositiveOffsetLowercaseMaxDateTimeOptionalParams,
  DatetimeGetLocalPositiveOffsetLowercaseMaxDateTimeResponse,
  DatetimeGetLocalPositiveOffsetUppercaseMaxDateTimeOptionalParams,
  DatetimeGetLocalPositiveOffsetUppercaseMaxDateTimeResponse,
  DatetimePutLocalNegativeOffsetMaxDateTimeOptionalParams,
  DatetimeGetLocalNegativeOffsetUppercaseMaxDateTimeOptionalParams,
  DatetimeGetLocalNegativeOffsetUppercaseMaxDateTimeResponse,
  DatetimeGetLocalNegativeOffsetLowercaseMaxDateTimeOptionalParams,
  DatetimeGetLocalNegativeOffsetLowercaseMaxDateTimeResponse,
  DatetimePutUtcMinDateTimeOptionalParams,
  DatetimeGetUtcMinDateTimeOptionalParams,
  DatetimeGetUtcMinDateTimeResponse,
  DatetimePutLocalPositiveOffsetMinDateTimeOptionalParams,
  DatetimeGetLocalPositiveOffsetMinDateTimeOptionalParams,
  DatetimeGetLocalPositiveOffsetMinDateTimeResponse,
  DatetimePutLocalNegativeOffsetMinDateTimeOptionalParams,
  DatetimeGetLocalNegativeOffsetMinDateTimeOptionalParams,
  DatetimeGetLocalNegativeOffsetMinDateTimeResponse,
  DatetimeGetLocalNoOffsetMinDateTimeOptionalParams,
  DatetimeGetLocalNoOffsetMinDateTimeResponse
} from "../models";

/** Interface representing a Datetime. */
export interface Datetime {
  /**
   * Get null datetime value
   * @param options The options parameters.
   */
  getNull(
    options?: DatetimeGetNullOptionalParams
  ): Promise<DatetimeGetNullResponse>;
  /**
   * Get invalid datetime value
   * @param options The options parameters.
   */
  getInvalid(
    options?: DatetimeGetInvalidOptionalParams
  ): Promise<DatetimeGetInvalidResponse>;
  /**
   * Get overflow datetime value
   * @param options The options parameters.
   */
  getOverflow(
    options?: DatetimeGetOverflowOptionalParams
  ): Promise<DatetimeGetOverflowResponse>;
  /**
   * Get underflow datetime value
   * @param options The options parameters.
   */
  getUnderflow(
    options?: DatetimeGetUnderflowOptionalParams
  ): Promise<DatetimeGetUnderflowResponse>;
  /**
   * Put max datetime value 9999-12-31T23:59:59.999Z
   * @param datetimeBody datetime body
   * @param options The options parameters.
   */
  putUtcMaxDateTime(
    datetimeBody: Date,
    options?: DatetimePutUtcMaxDateTimeOptionalParams
  ): Promise<void>;
  /**
   * This is against the recommendation that asks for 3 digits, but allow to test what happens in that
   * scenario
   * @param datetimeBody datetime body
   * @param options The options parameters.
   */
  putUtcMaxDateTime7Digits(
    datetimeBody: Date,
    options?: DatetimePutUtcMaxDateTime7DigitsOptionalParams
  ): Promise<void>;
  /**
   * Get max datetime value 9999-12-31t23:59:59.999z
   * @param options The options parameters.
   */
  getUtcLowercaseMaxDateTime(
    options?: DatetimeGetUtcLowercaseMaxDateTimeOptionalParams
  ): Promise<DatetimeGetUtcLowercaseMaxDateTimeResponse>;
  /**
   * Get max datetime value 9999-12-31T23:59:59.999Z
   * @param options The options parameters.
   */
  getUtcUppercaseMaxDateTime(
    options?: DatetimeGetUtcUppercaseMaxDateTimeOptionalParams
  ): Promise<DatetimeGetUtcUppercaseMaxDateTimeResponse>;
  /**
   * This is against the recommendation that asks for 3 digits, but allow to test what happens in that
   * scenario
   * @param options The options parameters.
   */
  getUtcUppercaseMaxDateTime7Digits(
    options?: DatetimeGetUtcUppercaseMaxDateTime7DigitsOptionalParams
  ): Promise<DatetimeGetUtcUppercaseMaxDateTime7DigitsResponse>;
  /**
   * Put max datetime value with positive numoffset 9999-12-31t23:59:59.999+14:00
   * @param datetimeBody datetime body
   * @param options The options parameters.
   */
  putLocalPositiveOffsetMaxDateTime(
    datetimeBody: Date,
    options?: DatetimePutLocalPositiveOffsetMaxDateTimeOptionalParams
  ): Promise<void>;
  /**
   * Get max datetime value with positive num offset 9999-12-31t23:59:59.999+14:00
   * @param options The options parameters.
   */
  getLocalPositiveOffsetLowercaseMaxDateTime(
    options?: DatetimeGetLocalPositiveOffsetLowercaseMaxDateTimeOptionalParams
  ): Promise<DatetimeGetLocalPositiveOffsetLowercaseMaxDateTimeResponse>;
  /**
   * Get max datetime value with positive num offset 9999-12-31T23:59:59.999+14:00
   * @param options The options parameters.
   */
  getLocalPositiveOffsetUppercaseMaxDateTime(
    options?: DatetimeGetLocalPositiveOffsetUppercaseMaxDateTimeOptionalParams
  ): Promise<DatetimeGetLocalPositiveOffsetUppercaseMaxDateTimeResponse>;
  /**
   * Put max datetime value with positive numoffset 9999-12-31t23:59:59.999-14:00
   * @param datetimeBody datetime body
   * @param options The options parameters.
   */
  putLocalNegativeOffsetMaxDateTime(
    datetimeBody: Date,
    options?: DatetimePutLocalNegativeOffsetMaxDateTimeOptionalParams
  ): Promise<void>;
  /**
   * Get max datetime value with positive num offset 9999-12-31T23:59:59.999-14:00
   * @param options The options parameters.
   */
  getLocalNegativeOffsetUppercaseMaxDateTime(
    options?: DatetimeGetLocalNegativeOffsetUppercaseMaxDateTimeOptionalParams
  ): Promise<DatetimeGetLocalNegativeOffsetUppercaseMaxDateTimeResponse>;
  /**
   * Get max datetime value with positive num offset 9999-12-31t23:59:59.999-14:00
   * @param options The options parameters.
   */
  getLocalNegativeOffsetLowercaseMaxDateTime(
    options?: DatetimeGetLocalNegativeOffsetLowercaseMaxDateTimeOptionalParams
  ): Promise<DatetimeGetLocalNegativeOffsetLowercaseMaxDateTimeResponse>;
  /**
   * Put min datetime value 0001-01-01T00:00:00Z
   * @param datetimeBody datetime body
   * @param options The options parameters.
   */
  putUtcMinDateTime(
    datetimeBody: Date,
    options?: DatetimePutUtcMinDateTimeOptionalParams
  ): Promise<void>;
  /**
   * Get min datetime value 0001-01-01T00:00:00Z
   * @param options The options parameters.
   */
  getUtcMinDateTime(
    options?: DatetimeGetUtcMinDateTimeOptionalParams
  ): Promise<DatetimeGetUtcMinDateTimeResponse>;
  /**
   * Put min datetime value 0001-01-01T00:00:00+14:00
   * @param datetimeBody datetime body
   * @param options The options parameters.
   */
  putLocalPositiveOffsetMinDateTime(
    datetimeBody: Date,
    options?: DatetimePutLocalPositiveOffsetMinDateTimeOptionalParams
  ): Promise<void>;
  /**
   * Get min datetime value 0001-01-01T00:00:00+14:00
   * @param options The options parameters.
   */
  getLocalPositiveOffsetMinDateTime(
    options?: DatetimeGetLocalPositiveOffsetMinDateTimeOptionalParams
  ): Promise<DatetimeGetLocalPositiveOffsetMinDateTimeResponse>;
  /**
   * Put min datetime value 0001-01-01T00:00:00-14:00
   * @param datetimeBody datetime body
   * @param options The options parameters.
   */
  putLocalNegativeOffsetMinDateTime(
    datetimeBody: Date,
    options?: DatetimePutLocalNegativeOffsetMinDateTimeOptionalParams
  ): Promise<void>;
  /**
   * Get min datetime value 0001-01-01T00:00:00-14:00
   * @param options The options parameters.
   */
  getLocalNegativeOffsetMinDateTime(
    options?: DatetimeGetLocalNegativeOffsetMinDateTimeOptionalParams
  ): Promise<DatetimeGetLocalNegativeOffsetMinDateTimeResponse>;
  /**
   * Get min datetime value 0001-01-01T00:00:00
   * @param options The options parameters.
   */
  getLocalNoOffsetMinDateTime(
    options?: DatetimeGetLocalNoOffsetMinDateTimeOptionalParams
  ): Promise<DatetimeGetLocalNoOffsetMinDateTimeResponse>;
}