import { Duration } from "aws-cdk-lib";
import { MockIntegration } from "../src";

describe("Integration base mapping", () => {
  test("maps timeout values to milliseconds", () => {
    const integration = new MockIntegration({
      timeout: Duration.seconds(12),
    });

    expect(integration.xAmazonApigatewayIntegration.timeoutInMillis).toBe(
      12000,
    );
  });

  test("uses the default response key for a single integration response", () => {
    const integration = new MockIntegration({
      integrationResponses: [
        {
          statusCode: "204",
          responseParameters: {
            "method.response.header.Content-Type": "'application/json'",
          },
          responseTemplates: {
            "application/json": "{}",
          },
        },
      ],
    });

    expect(integration.xAmazonApigatewayIntegration.responses).toEqual({
      default: {
        statusCode: "204",
        responseParameters: {
          "method.response.header.Content-Type": "'application/json'",
        },
        responseTemplates: {
          "application/json": "{}",
        },
        contentHandling: undefined,
      },
    });
  });

  test("uses explicit selection patterns for multiple integration responses", () => {
    const integration = new MockIntegration({
      integrationResponses: [
        {
          statusCode: "200",
          selectionPattern: "2\\\\d{2}",
        },
        {
          statusCode: "500",
          selectionPattern: "5\\\\d{2}",
        },
      ],
    });

    expect(integration.xAmazonApigatewayIntegration.responses).toEqual({
      "2\\\\d{2}": {
        statusCode: "200",
        responseParameters: undefined,
        responseTemplates: undefined,
        contentHandling: undefined,
      },
      "5\\\\d{2}": {
        statusCode: "500",
        responseParameters: undefined,
        responseTemplates: undefined,
        contentHandling: undefined,
      },
    });
  });

  test("throws when multiple integration responses are missing selection patterns", () => {
    expect(
      () =>
        new MockIntegration({
          integrationResponses: [
            {
              statusCode: "200",
            },
            {
              statusCode: "500",
            },
          ],
        }),
    ).toThrow(
      "You must provide a selectionPattern when multiple integration responses defined",
    );
  });
});
