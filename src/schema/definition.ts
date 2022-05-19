import { HeaderObject, LinkObject, OpenAPI3, ParameterObject, PathItemObject, ReferenceObject, RequestBody, ResponseObject, SchemaObject } from 'openapi-typescript';
import { XAmazonApigatewayAuthorizer } from "../x-amazon-apigateway/authorizer";
import { XAmazonApigatewayAuthType } from "../x-amazon-apigateway/authtype";

export interface SchemaDefinition extends OpenAPI3 {
  /**
   * OpenApi specification version used.
   * Only major version `3` currently supported.
   *
   * @example
   * '3.0.0'
   */
  openapi: string;

  /**
   * OpenApi info object.
   *
   * @example
   * {
   *   title: "FancyPants API",
   *   version: "1.23.105",
   * }
   */
  info?: InfoObject;

  /**
   * API paths with their respective configurations.
   *
   * @todo PathItemObject should have index signature (to support `x-` extensions).
   */
  paths?: Record<string, PathItemObject>;

  /**
   * OpenApi component definitions.
   */
  components?: {
    schemas?: Record<string, ReferenceObject | SchemaObject>;
    responses?: Record<string, ReferenceObject | ResponseObject>;
    parameters?: Record<string, ReferenceObject | ParameterObject>;
    requestBodies?: Record<string, ReferenceObject | RequestBody>;
    headers?: Record<string, ReferenceObject | HeaderObject>;
    links?: Record<string, ReferenceObject | LinkObject>;
    securitySchemes?: Record<string, SecurityScheme>;
  };
}

/**
 * OpenApi info object.
 */
export interface InfoObject {

  /** The title of the API. */
  title: string;

  /** The version of the OpenAPI document (which is distinct from the OpenAPI Specification version or the API implementation version). */
  version: string;

  /** A short description of the API. CommonMark syntax MAY be used for rich text representation. */
  description?: string;

  /** A URL to the Terms of Service for the API. MUST be in the format of a URL. */
  termsOfService?: string;

  /** The contact information for the exposed API. */
  contact?: ContactObject;

  /** The license information for the exposed API. */
  license?: LicenseObject;
}

/** The contact information for the exposed API. */
export interface ContactObject {

  /** The identifying name of the contact person/organization. */
  name?: string;

  /** The URL pointing to the contact information. MUST be in the format of a URL. */
  url?: string;

  /** The email address of the contact person/organization. MUST be in the format of an email address. */
  email?: string;
}

/** The license information for the exposed API. */
export interface LicenseObject {

  /** The license name used for the API. */
  name: string;

  /** A URL to the license used for the API. MUST be in the format of a URL. */
  url?: string;
}




/**
 * Describes an authorizer defined in `securitySchemes` OpenApi 3 schema.
 *
 * @see https://swagger.io/specification/#security-scheme-object
 */
export interface SecurityScheme {

  /**
   * The type of the security scheme.
   *
   * OpenAPI v3 allows "apiKey", "http", "oauth2", "openIdConnect" but apparently APIGW only allows "apiKey".
   *
   * @example
   * 'apiKey'
   */
  type: 'apiKey';

  /**
   * A short description for security scheme. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;

  /**
   * The name of the header, query or cookie parameter to be used.
   * Applicable for the authorizer of the `apiKey` type only.
   *
   * @example
   * 'Authorization'
   */
  name?: string;

  /**
   * The location of the API key. Valid values are "query", "header" or "cookie".
   * Applicable for the authorizer of the `apiKey` type only.
   *
   * @example
   * 'header'
   */
  in?: 'query'|'header'|'cookie';

  'x-amazon-apigateway-authtype'?: XAmazonApigatewayAuthType;

  'x-amazon-apigateway-authorizer'?: XAmazonApigatewayAuthorizer;
}
