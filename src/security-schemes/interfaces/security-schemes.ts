import { Authorizer } from "./authorizer";

/**
 * OpenApi v3 `components/securitySchemes` definition.
 *
 * @see https://swagger.io/docs/specification/authentication/#how
 */
 export type SecuritySchemes = Record<string, Authorizer>;
