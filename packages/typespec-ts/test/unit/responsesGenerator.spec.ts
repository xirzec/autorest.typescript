import { assert } from "chai";
import { emitResponsesFromCadl } from "./util/emitUtil.js";
import { assertEqualContent } from "./util/testUtil.js";

describe("Responses.ts", () => {
  describe("property name generation", () => {
    it("should generate property name with custome name", async () => {
      const responses = await emitResponsesFromCadl(`
        model SimpleModel {}
        @doc("Metadata for long running operation status monitor locations")
        model LongRunningStatusLocation {
            @doc("The location for monitoring the operation state.")
            @header("Operation-Location")
            operationLocation: ResourceLocation<SimpleModel>;
        }
        op read(): LongRunningStatusLocation;
    `);
      assert.ok(responses);
      assertEqualContent(
        responses!.content,
        `
    import { RawHttpHeaders } from "@azure/core-rest-pipeline";
    import { HttpResponse } from "@azure-rest/core-client";
    
    export interface Read204Headers {
      /** The location for monitoring the operation state. */
      "operation-location": string;
    }
    
    /** Metadata for long running operation status monitor locations */
    export interface Read204Response extends HttpResponse {
      status: "204";
      headers: RawHttpHeaders & Read204Headers;
    }`
      );
    });

    it("should generate property name without custome name", async () => {
      const responses = await emitResponsesFromCadl(`
        model SimpleModel {}
        @doc("Metadata for long running operation status monitor locations")
        model LongRunningStatusLocation {
            @doc("The location for monitoring the operation state.")
            @header
            operationLocation: ResourceLocation<SimpleModel>;
        }
        op read(): LongRunningStatusLocation;
    `);
      assert.ok(responses);
      assertEqualContent(
        responses!.content,
        `
    import { RawHttpHeaders } from "@azure/core-rest-pipeline";
    import { HttpResponse } from "@azure-rest/core-client";
    
    export interface Read204Headers {
      /** The location for monitoring the operation state. */
      "operation-location": string;
    }
    
    /** Metadata for long running operation status monitor locations */
    export interface Read204Response extends HttpResponse {
      status: "204";
      headers: RawHttpHeaders & Read204Headers;
    }`
      );
    });
  });

  describe("statusCode generation", () => {
    it("should generate property name with custome name", async () => {
      const responses = await emitResponsesFromCadl(`
      @doc("Error")
      @error
      model Error {
        code: int32;
        message: string;
      }
      model Key {
        key: string;
      }
      op read(): Key | Error;
    `);
      assert.ok(responses);
      assertEqualContent(
        responses!.content,
        `
      import { HttpResponse } from "@azure-rest/core-client";
      import { KeyOutput, ErrorModelOutput } from "./outputModels";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: KeyOutput;
      }
      
      export interface ReadDefaultResponse extends HttpResponse {
        status: string;
        body: ErrorModelOutput;
      }
      `
      );
    });
  });

  describe("body generation", () => {
    it("unknown array response generation", async () => {
      const parameters = await emitResponsesFromCadl(`
      @post op read():  unknown[];
      `);
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { HttpResponse } from "@azure-rest/core-client";
    
        /** The request has succeeded. */
        export interface Read200Response extends HttpResponse {
          status: "200";
          body: any[];
        }
      `
      );
    });

    it("Record<SimpleModel> response generation", async () => {
      const parameters = await emitResponsesFromCadl(`
      model SimpleModel {
        prop1: string;
        prop2: int32;
      }
      @post op read(@body body: SimpleModel[]): Record<SimpleModel>;
      `);
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { HttpResponse } from "@azure-rest/core-client";
        import { SimpleModelOutput } from "./outputModels";
    
        /** The request has succeeded. */
        export interface Read200Response extends HttpResponse {
          status: "200";
          body: Record<string, SimpleModelOutput>;
        }
      `
      );
    });

    it("should generate Record<unknown> as body property", async () => {
      const responses = await emitResponsesFromCadl(`
        op read(): Record<unknown>;
    `);
      assert.ok(responses);
      assertEqualContent(
        responses!.content,
        `
    import { HttpResponse } from "@azure-rest/core-client";
    
    /** The request has succeeded. */
    export interface Read200Response extends HttpResponse {
      status: "200";
      body: Record<string, any>;
    }
    `
      );
    });
    it("@header contentType not json or text should set format to binary(finally unit8array)", async () => {
      const responses = await emitResponsesFromCadl(`
      @get op read(): {@header contentType: "image/png", @body body: bytes};
      `);
      assert.ok(responses);
      assertEqualContent(
        responses!.content,
        `
      import { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        /** Value may contain any sequence of octets */
        body: Uint8Array;
      }
      `
      );
    });
    it("@header contentType text/plain should keep format to byte(finally string)", async () => {
      const responses = await emitResponsesFromCadl(`
      @get op read(): {@header contentType: "text/plain", @body body: bytes};
      `);
      assert.ok(responses);
      assertEqualContent(
        responses!.content,
        `
      import { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: string;
      }
      `
      );
    });
  });

  describe("headers generation", () => {
    it("merges headers from multiple responses", async () => {
      const responses = await emitResponsesFromCadl(`
      model Key {
        key: string;
      }
      @get op read():
          | { @body body: Key, @header foo: string }
          | {@header contentType: "image/png", @body body: bytes, @header bar: string };
      `);
      assert.ok(responses);
      assertEqualContent(
        responses!.content,
        `
      import { RawHttpHeaders } from "@azure/core-rest-pipeline";
      import { HttpResponse } from "@azure-rest/core-client";
      import { KeyOutput } from "./outputModels";
      
      export interface Read200Headers {
        foo: string;
        bar: string;
      }
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        /** Value may contain any sequence of octets */
        body: KeyOutput | Uint8Array;
        headers: RawHttpHeaders & Read200Headers;
      }
      `
      );
    });
  });

  describe("Array generation", () => {
    it("verify string array from responses", async () => {
      const responses = await emitResponsesFromCadl(`
      @get op read(): string[];
      `);
      assert.ok(responses);
      assertEqualContent(
        responses!.content,
        `
      import { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: string[];
      }
      `
      );
    });

    it("verify int32 array from responses", async () => {
      const responses = await emitResponsesFromCadl(`
      @get op read(): int32[];
      `);
      assert.ok(responses);
      assertEqualContent(
        responses!.content,
        `
      import { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: number[];
      }
      `
      );
    });

    it("verify int64 array from responses", async () => {
      const responses = await emitResponsesFromCadl(`
      @get op read(): int64[];
      `);
      assert.ok(responses);
      assertEqualContent(
        responses!.content,
        `
      import { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: number[];
      }
      `
      );
    });

    it("verify float32 array from responses", async () => {
      const responses = await emitResponsesFromCadl(`
      @get op read(): float32[];
      `);
      assert.ok(responses);
      assertEqualContent(
        responses!.content,
        `
      import { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: number[];
      }
      `
      );
    });

    it("verify boolean array from responses", async () => {
      const responses = await emitResponsesFromCadl(`
      @get op read(): boolean[];
      `);
      assert.ok(responses);
      assertEqualContent(
        responses!.content,
        `
      import { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: boolean[];
      }
      `
      );
    });

    it("verify bytes array from responses", async () => {
      const responses = await emitResponsesFromCadl(`
      @get op read(): bytes[];
      `);
      assert.ok(responses);
      assertEqualContent(
        responses!.content,
        `
      import { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: string[];
      }
      `
      );
    });

    it("verify plainDate array from responses", async () => {
      const responses = await emitResponsesFromCadl(`
      @get op read(): plainDate[];
      `);
      assert.ok(responses);
      assertEqualContent(
        responses!.content,
        `
      import { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: string[];
      }
      `
      );
    });

    it("verify datetime array from responses", async () => {
      const responses = await emitResponsesFromCadl(`
      @get op read(): utcDateTime[];
      `);
      assert.ok(responses);
      assertEqualContent(
        responses!.content,
        `
      import { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: string[];
      }
      `
      );
    });

    it("verify duration array from responses", async () => {
      const responses = await emitResponsesFromCadl(`
      @get op read(): duration[];
      `);
      assert.ok(responses);
      assertEqualContent(
        responses!.content,
        `
      import { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: string[];
      }
      `
      );
    });

    it("verify SimpleModel array from responses", async () => {
      const responses = await emitResponsesFromCadl(`
      model SimpleModel {
        prop1: string;
        prop2: int32;
      }
      @get op read(): SimpleModel[];
      `);
      assert.ok(responses);
      assertEqualContent(
        responses!.content,
        `
      import { HttpResponse } from "@azure-rest/core-client";
      import { SimpleModelOutput } from "./outputModels";

      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: Array<SimpleModelOutput>;
      }
      `
      );
    });

    it("verify InnerModel array from responses", async () => {
      const responses = await emitResponsesFromCadl(`
      model InnerModel {
        property: string;
        children?: InnerModel[];
      }
      @get op read(): InnerModel[];
      `);
      assert.ok(responses);
      assertEqualContent(
        responses!.content,
        `
      import { HttpResponse } from "@azure-rest/core-client";
      import { InnerModelOutput } from "./outputModels";

      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: Array<InnerModelOutput>;
      }
      `
      );
    });
  });
});
