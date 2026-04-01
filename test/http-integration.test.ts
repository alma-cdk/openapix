import * as cdk from "aws-cdk-lib";
import { HttpIntegration } from "../src";

describe("HttpIntegration", () => {
  test("defaults to GET and HTTP_PROXY", () => {
    const stack = new cdk.Stack();
    const integration = new HttpIntegration(stack, "https://example.com");

    expect(integration.xAmazonApigatewayIntegration).toMatchObject({
      httpMethod: "GET",
      type: "HTTP_PROXY",
      uri: "https://example.com",
    });
  });

  test("supports explicit HTTP methods, non-proxy mode, and validators", () => {
    const stack = new cdk.Stack();
    const integration = new HttpIntegration(
      stack,
      "https://example.com/items",
      {
        httpMethod: "PATCH",
        proxy: false,
        validator: "params-only",
      },
    );

    expect(integration.xAmazonApigatewayIntegration).toMatchObject({
      httpMethod: "PATCH",
      type: "HTTP",
      uri: "https://example.com/items",
    });
    expect(integration.validator).toBe("params-only");
  });
});
