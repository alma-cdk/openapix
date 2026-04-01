import * as openapix from "../src";
import { getMethodsFromSchemaPath, getSchemaPaths } from "../src/api/utils";

function createSchema(paths: Record<string, any>) {
  return new openapix.Schema({
    openapi: "3.0.1",
    info: {
      title: "TestApi",
      version: "0.0.0",
    },
    paths,
  });
}

describe("api utils", () => {
  test("getSchemaPaths excludes vendor extension keys", () => {
    const schema = createSchema({
      "/foo": {
        get: {
          responses: {},
        },
      },
      "x-internal": {
        foo: "bar",
      },
      "/bar": {
        post: {
          responses: {},
        },
      },
    });

    expect(getSchemaPaths(schema)).toEqual({
      "/foo": {
        get: {
          responses: {},
        },
      },
      "/bar": {
        post: {
          responses: {},
        },
      },
    });
  });

  test("getMethodsFromSchemaPath only returns HTTP methods", () => {
    expect(
      getMethodsFromSchemaPath({
        summary: "Some path",
        parameters: [{ name: "id", in: "path" }],
        get: { responses: {} },
        post: { responses: {} },
        "x-meta": { foo: "bar" },
      }),
    ).toEqual({
      get: { responses: {} },
      post: { responses: {} },
    });
  });
});
