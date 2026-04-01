import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as cdk from "aws-cdk-lib";
import * as openapix from "../src";
import { SchemaAsset } from "../src/schema/asset";

describe("Schema behavior", () => {
  test("parses inline YAML and exposes the OpenAPI version", () => {
    const schema = openapix.Schema.fromInline(`
openapi: "3.0.1"
info:
  title: TestApi
  version: "0.0.0"
paths: {}
`);

    expect(schema.openApiVersion).toBe("3.0.1");
    expect(schema.toDocument()).toMatchObject({
      openapi: "3.0.1",
      info: {
        title: "TestApi",
        version: "0.0.0",
      },
      paths: {},
    });
  });

  test("loads schemas from files and serializes them to JSON and YAML", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "openapix-schema-"));
    const schemaPath = path.join(dir, "schema.yaml");

    fs.writeFileSync(
      schemaPath,
      [
        'openapi: "3.0.1"',
        "info:",
        "  title: TestApi",
        '  version: "0.0.0"',
        "paths: {}",
        "",
      ].join("\n"),
      "utf-8",
    );

    const schema = openapix.Schema.fromAsset(schemaPath);

    expect(schema.toJson()).toBe(
      JSON.stringify({
        openapi: "3.0.1",
        info: {
          title: "TestApi",
          version: "0.0.0",
        },
        paths: {},
      }),
    );
    expect(schema.toYaml()).toContain("openapi: 3.0.1");
    expect(schema.toYaml()).toContain("title: TestApi");
  });

  test("supports has/get/set/inject/reject/rejectDeep operations", () => {
    const schema = new openapix.Schema({
      openapi: "3.0.1",
      info: {
        title: "TestApi",
        version: "0.0.0",
        description: "Initial description",
      },
      paths: {
        "/foo": {
          get: {
            responses: {
              200: {
                description: "ok",
                content: {
                  "application/json": {
                    example: {
                      foo: "bar",
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    expect(schema.has("info.description")).toBe(true);
    expect(schema.get("info.title")).toBe("TestApi");

    schema.set("info.title", "UpdatedApi");
    schema.inject({
      "info.summary": "Summary",
      "paths./foo.get.tags": ["foo"],
    });
    schema.reject(["info.description"]);
    schema.rejectDeep(["example"]);

    expect(schema.toDocument()).toMatchObject({
      openapi: "3.0.1",
      info: {
        title: "UpdatedApi",
        version: "0.0.0",
        summary: "Summary",
      },
      paths: {
        "/foo": {
          get: {
            tags: ["foo"],
            responses: {
              200: {
                description: "ok",
                content: {
                  "application/json": {},
                },
              },
            },
          },
        },
      },
    });
    expect(schema.has("info.description")).toBe(false);
  });

  test("creates schema assets through Schema.toAsset", () => {
    const stack = new cdk.Stack();
    const schema = new openapix.Schema({
      openapi: "3.0.1",
      info: {
        title: "TestApi",
        version: "0.0.0",
      },
      paths: {},
    });

    const asset = schema.toAsset(stack, "SchemaAsset");

    expect(asset).toBeInstanceOf(SchemaAsset);
    expect((asset as SchemaAsset).cloudFormationDocument).toEqual({
      openapi: "3.0.1",
      info: {
        title: "TestApi",
        version: "0.0.0",
      },
      paths: {},
    });
  });
});
