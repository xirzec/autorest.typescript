## API Report File for "@msinternal/widget_dpg"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';

// @public (undocumented)
export interface AnalyzeResult {
    // (undocumented)
    summary: string;
}

// @public (undocumented)
export interface AnalyzeWidgetOptions extends OperationOptions {
}

// @public (undocumented)
export type ColorType = "red" | "blue";

// @public (undocumented)
export interface CreateWidgetOptions extends OperationOptions {
}

// @public (undocumented)
export interface DeleteWidgetOptions extends OperationOptions {
}

// @public (undocumented)
export interface GetWidgetOptions extends OperationOptions {
}

// @public (undocumented)
export interface ListWidgetsOptions extends OperationOptions {
}

// @public (undocumented)
export interface UpdateWidgetOptions extends OperationOptions {
    color?: ColorType;
    weight?: number;
}

// @public (undocumented)
export interface Widget {
    color: ColorType;
    id: string;
    weight: number;
}

// @public (undocumented)
export class WidgetServiceClient {
    constructor(endpoint: string, options?: WidgetServiceClientOptions);
    analyzeWidget(id: string, options?: AnalyzeWidgetOptions): Promise<AnalyzeResult>;
    createWidget(weight: number, color: ColorType, options?: CreateWidgetOptions): Promise<Widget>;
    deleteWidget(id: string, options?: DeleteWidgetOptions): Promise<void>;
    getWidget(id: string, options?: GetWidgetOptions): Promise<Widget>;
    listWidgets(options?: ListWidgetsOptions): Promise<Widget[]>;
    updateWidget(id: string, options?: UpdateWidgetOptions): Promise<Widget>;
}

// @public (undocumented)
export interface WidgetServiceClientOptions extends ClientOptions {
}

// (No @packageDocumentation comment for this package)

```
