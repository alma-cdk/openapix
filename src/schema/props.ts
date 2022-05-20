/**
 * Props given to `new Schema`. Essentially an OpenApi v3 "source" without
 * `x-amazon-apigateway-` extensions.
 *
 */
export interface SchemaProps {
  /**
   * This string MUST be the semantic version number of the OpenAPI Specification version that the OpenAPI document uses. The openapi field SHOULD be used by tooling specifications and clients to interpret the OpenAPI document. This is not related to the API info.version string.
   *
   * @example
   * '3.0.0'
   */
  readonly openapi: string;

  /**
   * Provides metadata about the API. The metadata MAY be used by tooling as required.
   *
   * @example
   * {
   *   title: "FancyPants API",
   *   version: "1.23.105",
   * }
   */
  readonly info: InfoObject;

  /**
   * The available paths and operations for the API.
   *
   */
  readonly paths: PathsObject;

  /**
   * An array of Server Objects, which provide connectivity information to a target server. If the servers property is not provided, or is an empty array, the default value would be a Server Object with a url value of /.
   */
  readonly servers?: ServerObject[];

  /** An element to hold various schemas for the specification. */
  readonly components?: ComponentsObject;

  /** A declaration of which security mechanisms can be used across the API. The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. Individual operations can override this definition. To make security optional, an empty security requirement ({}) can be included in the array. */
  readonly security?: SecurityRequirementObject[];

  /** A list of tags used by the specification with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the Operation Object must be declared. The tags that are not declared MAY be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique. */
  readonly tags?: TagObject[];

  /** Additional external documentation. */
  readonly externalDocs?: ExternalDocumentationObject;

}


/** The object provides metadata about the API. The metadata MAY be used by the clients if needed, and MAY be presented in editing or documentation generation tools for convenience. */
export interface InfoObject {

  /** The title of the API. */
  readonly title: string;

  /** The version of the OpenAPI document (which is distinct from the OpenAPI Specification version or the API implementation version). */
  readonly version: string;

  /** A short description of the API. CommonMark syntax MAY be used for rich text representation. */
  readonly description?: string;

  /** A URL to the Terms of Service for the API. MUST be in the format of a URL. */
  readonly termsOfService?: string;

  /** The contact information for the exposed API. */
  readonly contact?: ContactObject;

  /** The license information for the exposed API. */
  readonly license?: LicenseObject;
}

/** The contact information for the exposed API. */
export interface ContactObject {

  /** The identifying name of the contact person/organization. */
  readonly name?: string;

  /** The URL pointing to the contact information. MUST be in the format of a URL. */
  readonly url?: string;

  /** The email address of the contact person/organization. MUST be in the format of an email address. */
  readonly email?: string;
}

/** The license information for the exposed API. */
export interface LicenseObject {

  /** The license name used for the API. */
  readonly name: string;

  /** A URL to the license used for the API. MUST be in the format of a URL. */
  readonly url?: string;
}


/** Holds the relative paths to the individual endpoints and their operations. The path is appended to the URL from the Server Object in order to construct the full URL. The Paths MAY be empty, due to ACL constraints. */
export interface PathsObject {

  /** A relative path to an individual endpoint. The field name MUST begin with a forward slash (/). The path is appended (no relative URL resolution) to the expanded URL from the Server Object's url field in order to construct the full URL. Path templating is allowed. When matching URLs, concrete (non-templated) paths would be matched before their templated counterparts. Templated paths with the same hierarchy but different templated names MUST NOT exist as they are identical. In case of ambiguous matching, it's up to the tooling to decide which one to use. */
  readonly [path: string]: PathItemObject | ReferenceObject;
}

/** Describes the operations available on a single path. A Path Item MAY be empty, due to ACL constraints. The path itself is still exposed to the documentation viewer but they will not know which operations and parameters are available. */
export interface PathItemObject {

  /** An optional, string summary, intended to apply to all operations in this path. */
  readonly summary?: string;

  /** An optional, string description, intended to apply to all operations in this path. CommonMark syntax MAY be used for rich text representation. */
  readonly description?: string;

  /** A definition of a GET operation on this path. */
  readonly get?: OperationObject;

  /** A definition of a PUT operation on this path. */
  readonly put?: OperationObject;

  /** A definition of a POST operation on this path. */
  readonly post?: OperationObject;

  /** A definition of a DELETE operation on this path. */
  readonly delete?: OperationObject;

  /** A definition of a OPTIONS operation on this path. */
  readonly options?: OperationObject;

  /** A definition of a HEAD operation on this path. */
  readonly head?: OperationObject;

  /** A definition of a PATCH operation on this path. */
  readonly patch?: OperationObject;

  /** A definition of a TRACE operation on this path. */
  readonly trace?: OperationObject;

  /** A list of parameters that are applicable for all the operations described under this path. These parameters can be overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object's components/parameters. */
  readonly parameters?: (ParameterObject | ReferenceObject)[];

  // Servers not allowed since we're using API Gateway where you can't have path specific "servers".
  // readonly servers?: ServerObject[];
}

/** Describes a single API operation on a path. */
export interface OperationObject {

  /** The list of possible responses as they are returned from executing this operation. */
  readonly responses: ResponsesObject;

  /** A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier. */
  readonly tags?: string[];

  /** A short summary of what the operation does. */
  readonly summary?: string;

  /** A verbose explanation of the operation behavior. CommonMark syntax MAY be used for rich text representation. */
  readonly description?: string;

  /** Additional external documentation for this operation. */
  readonly externalDocs?: ExternalDocumentationObject;

  /** Unique string used to identify the operation. The id MUST be unique among all operations described in the API. The operationId value is case-sensitive. Tools and libraries MAY use the operationId to uniquely identify an operation, therefore, it is RECOMMENDED to follow common programming naming conventions. */
  readonly operationId?: string;

  /** A list of parameters that are applicable for this operation. If a parameter is already defined at the Path Item, the new definition will override it but can never remove it. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object's components/parameters. */
  readonly parameters?: (ParameterObject | ReferenceObject)[];

  /** The request body applicable for this operation. The requestBody is only supported in HTTP methods where the HTTP 1.1 specification RFC7231 has explicitly defined semantics for request bodies. In other cases where the HTTP spec is vague, requestBody SHALL be ignored by consumers. */
  readonly requestBody?: RequestBodyObject | ReferenceObject;

  /** A map of possible out-of band callbacks related to the parent operation. The key is a unique identifier for the Callback Object. Each value in the map is a Callback Object that describes a request that may be initiated by the API provider and the expected responses. */
  readonly callbacks?: Record<string, CallbackObject | ReferenceObject>;

  /** Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation. Default value is false. */
  readonly deprecated?: boolean;

  /** A declaration of which security mechanisms can be used for this operation. The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. To make security optional, an empty security requirement ({}) can be included in the array. This definition overrides any declared top-level security. To remove a top-level security declaration, an empty array can be used. */
  readonly security?: SecurityRequirementObject[];

  // Servers not allowed since we're using API Gateway where you can't have operation specific "servers".
  // readonly servers?: ServerObject[];
}

/**
 * A container for the expected responses of an operation. The container maps a HTTP response code to the expected response.
 * The documentation is not necessarily expected to cover all possible HTTP response codes because they may not be known in advance. However, documentation is expected to cover a successful operation response and any known errors.
 * The default MAY be used as a default response object for all HTTP codes that are not covered individually by the specification.
 * The Responses Object MUST contain at least one response code, and it SHOULD be the response for a successful operation call.
 */
export interface ResponsesObject {

  /**
   * Any HTTP status code can be used as the property name, but only one property per code, to describe the expected
   * response for that HTTP status code. A Reference Object can link to a response that is defined in the OpenAPI
   * Object's components/responses section. This field MUST be enclosed in quotation marks (for example, "200") for
   * compatibility between JSON and YAML. To define a range of response codes, this field MAY contain the uppercase
   * wildcard character X. For example, 2XX represents all response codes between [200-299]. Only the following range
   * definitions are allowed: 1XX, 2XX, 3XX, 4XX, and 5XX. If a response is defined using an explicit code, the explicit
   * code definition takes precedence over the range definition for that code.
   *
   * Use `default` for the documentation of responses other than the ones declared for specific HTTP response codes.
   * Use this field to cover undeclared responses. A Reference Object can link to a response that the OpenAPI Object's
   * components/responses section defines.
   */
  readonly [httpStatusCode: string]: ResponseObject | ReferenceObject;
}

/** Allows referencing an external resource for extended documentation. */
export interface ExternalDocumentationObject {

  /** The URL for the target documentation. Value MUST be in the format of a URL. */
  readonly url: string;

  /**	A short description of the target documentation. CommonMark syntax MAY be used for rich text representation. */
  readonly description?: string;
}

/** Describes a single request body. */
export interface RequestBodyObject {

  /** The content of the request body. The key is a media type or media type range and the value describes it. For requests that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/* */
  readonly content: Record<string, MediaTypeObject>;

  /** A brief description of the request body. This could contain examples of use. CommonMark syntax MAY be used for rich text representation. */
  readonly description?: string;

  /** Determines if the request body is required in the request. Defaults to false. */
  readonly required?: boolean;
}

/** Each Media Type Object provides schema and examples for the media type identified by its key. */
export interface MediaTypeObject {

  /** The schema defining the content of the request, response, or parameter. */
  readonly schema?: SchemaObject | ReferenceObject;

  /** Example of the media type. The example object SHOULD be in the correct format as specified by the media type. The example field is mutually exclusive of the examples field. Furthermore, if referencing a schema which contains an example, the example value SHALL override the example provided by the schema. */
  readonly example?: any;

  /** Examples of the media type. Each example object SHOULD match the media type and specified schema if present. The examples field is mutually exclusive of the example field. Furthermore, if referencing a schema which contains an example, the examples value SHALL override the example provided by the schema. */
  readonly examples?: Record<string, ExampleObject | ReferenceObject>;

  /** A map between a property name and its encoding information. The key, being the property name, MUST exist in the schema as a property. The encoding object SHALL only apply to requestBody objects when the media type is multipart or application/x-www-form-urlencoded. */
  readonly encoding?: Record<string, EncodingObject>;
}

/** The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is an extended subset of the JSON Schema Specification Wright Draft 00. For more information about the properties, see JSON Schema Core and JSON Schema Validation. Unless stated otherwise, the property definitions follow the JSON Schema. */
export interface SchemaObject {

  /** A true value adds "null" to the allowed type specified by the type keyword, only if type is explicitly defined within the same Schema Object. Other Schema Object constraints retain their defined behavior, and therefore may disallow the use of null as a value. A false value leaves the specified or default type unmodified. The default value is false. */
  readonly nullable?: boolean;

  /** Adds support for polymorphism. The discriminator is an object name that is used to differentiate between other schemas which may satisfy the payload description. See Composition and Inheritance for more details. */
  readonly discriminator?: DiscriminatorObject;

  /** Relevant only for Schema "properties" definitions. Declares the property as "read only". This means that it MAY be sent as part of a response but SHOULD NOT be sent as part of the request. If the property is marked as readOnly being true and is in the required list, the required will take effect on the response only. A property MUST NOT be marked as both readOnly and writeOnly being true. Default value is false. */
  readonly readOnly?: boolean;

  /** Relevant only for Schema "properties" definitions. Declares the property as "write only". Therefore, it MAY be sent as part of a request but SHOULD NOT be sent as part of the response. If the property is marked as writeOnly being true and is in the required list, the required will take effect on the request only. A property MUST NOT be marked as both readOnly and writeOnly being true. Default value is false. */
  readonly writeOnly?: boolean;

  /** This MAY be used only on properties schemas. It has no effect on root schemas. Adds additional metadata to describe the XML representation of this property. */
  readonly xml?: XmlObject;

  /** Additional external documentation for this schema. */
  readonly externalDocs?: ExternalDocumentationObject;

  /** A free-form property to include an example of an instance for this schema. To represent examples that cannot be naturally represented in JSON or YAML, a string value can be used to contain the example with escaping where necessary. */
  readonly example?: any;

  /** Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is false. */
  readonly deprecated?: boolean;

}

/** When request bodies or response payloads may be one of a number of different schemas, a discriminator object can be used to aid in serialization, deserialization, and validation. The discriminator is a specific object in a schema which is used to inform the consumer of the specification of an alternative schema based on the value associated with it. When using the discriminator, inline schemas will not be considered. */
export interface DiscriminatorObject {

  /** The name of the property in the payload that will hold the discriminator value. */
  readonly propertyName: string;

  /** An object to hold mappings between payload values and schema names or references. */
  readonly mapping?: Record<string, string>;
}

/** A metadata object that allows for more fine-tuned XML model definitions. When using arrays, XML element names are not inferred (for singular/plural forms) and the name property SHOULD be used to add that information. See examples for expected behavior. */
export interface XmlObject {

  /** Replaces the name of the element/attribute used for the described schema property. When defined within items, it will affect the name of the individual XML elements within the list. When defined alongside type being array (outside the items), it will affect the wrapping element and only if wrapped is true. If wrapped is false, it will be ignored. */
  readonly name?: string;

  /** The URI of the namespace definition. Value MUST be in the form of an absolute URI. */
  readonly namespace?: string;

  /** The prefix to be used for the name. */
  readonly prefix?: string;

  /** Declares whether the property definition translates to an attribute instead of an element. Default value is false. */
  readonly attribute?: boolean;

  /** MAY be used only for an array definition. Signifies whether the array is wrapped (for example, <books><book/><book/></books>) or unwrapped (<book/><book/>). Default value is false. The definition takes effect only when defined alongside type being array (outside the items). */
  readonly wrapped?: boolean;
}


/** Example Object */
export interface ExampleObject {

  /** Short description for the example. */
  readonly summary?: string;

  /** Long description for the example. CommonMark syntax MAY be used for rich text representation. */
  readonly description?: string;

  /** Embedded literal example. The value field and externalValue field are mutually exclusive. To represent examples of media types that cannot naturally represented in JSON or YAML, use a string value to contain the example, escaping where necessary. */
  readonly value?: any;

  /** A URL that points to the literal example. This provides the capability to reference examples that cannot easily be included in JSON or YAML documents. The value field and externalValue field are mutually exclusive. */
  readonly externalValue?: string;
}

/** A single encoding definition applied to a single schema property. */
export interface EncodingObject {

  /** The Content-Type for encoding a specific property. Default value depends on the property type: for string with format being binary – application/octet-stream; for other primitive types – text/plain; for object - application/json; for array – the default is defined based on the inner type. The value can be a specific media type (e.g. application/json), a wildcard media type (e.g. image/*), or a comma-separated list of the two types. */
  readonly contentType?: string;

  /** A map allowing additional information to be provided as headers, for example Content-Disposition. Content-Type is described separately and SHALL be ignored in this section. This property SHALL be ignored if the request body media type is not a multipart. */
  readonly headers?: Record<string, HeaderObject | ReferenceObject>;

  /** Describes how a specific property value will be serialized depending on its type. See Parameter Object for details on the style property. The behavior follows the same values as query parameters, including default values. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded. */
  readonly style?: string;

  /** When this is true, property values of type array or object generate separate parameters for each value of the array, or key-value-pair of the map. For other types of properties this property has no effect. When style is form, the default value is true. For all other styles, the default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded. */
  readonly explode?: boolean;

  /** Determines whether the parameter value SHOULD allow reserved characters, as defined by RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding. The default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded. */
  readonly allowReserved?: boolean;
}

/**
 * The Header Object follows the structure of the Parameter Object with the following changes:
 *
 * 1. name MUST NOT be specified, it is given in the corresponding headers map.
 * 2. in MUST NOT be specified, it is implicitly in header.
 * 3. All traits that are affected by the location MUST be applicable to a location of header (for example, style).
 */
export interface HeaderObject {

  /** A brief description of the parameter. This could contain examples of use. CommonMark syntax MAY be used for rich text representation. */
  readonly description?: string;

  /** Determines whether this parameter is mandatory. If the parameter location is "path", this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be included and its default value is false. */
  readonly required?: boolean;

  /** Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is false. */
  readonly deprecated?: boolean;

  /** Sets the ability to pass empty-valued parameters. This is valid only for query parameters and allows sending a parameter with an empty value. Default value is false. If style is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision. */
  readonly allowEmptyValue?: boolean;
}

/** A map of possible out-of band callbacks related to the parent operation. Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation. */
export interface CallbackObject {

  /**
   * A Path Item Object used to define a callback request and expected responses.
   *
   * The key that identifies the Path Item Object is a runtime expression that can be evaluated in the context of a runtime HTTP request/response to identify the URL to be used for the callback request. A simple example might be $request.body#/url. However, using a runtime expression the complete HTTP message can be accessed. This includes accessing any part of a body that a JSON Pointer RFC6901 can reference.
   */
  readonly [expression: string]: PathItemObject;
}

/** Holds a set of reusable objects for different aspects of the OAS. All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object. */
export interface ComponentsObject {

  /** An object to hold reusable Schema Objects. */
  readonly schemas?: Record<string, SchemaObject | ReferenceObject>;

  /** An object to hold reusable Response Objects. */
  readonly responses?: Record<string, ResponseObject | ReferenceObject>;

  /** An object to hold reusable Parameter Objects. */
  readonly parameters?: Record<string, ParameterObject | ReferenceObject>;

  /** An object to hold reusable Example Objects. */
  readonly examples?: Record<string, ExampleObject | ReferenceObject>;

  /** An object to hold reusable Request Body Objects. */
  readonly requestBodies?: Record<string, RequestBodyObject | ReferenceObject>;

  /** An object to hold reusable Header Objects. */
  readonly headers?: Record<string, HeaderObject | ReferenceObject>;

  /** An object to hold reusable Security Scheme Objects. */
  readonly securitySchemes?: Record<string, SecuritySchemeObject | ReferenceObject>;

  /** An object to hold reusable Link Objects. */
  readonly links?: Record<string, LinkObject | ReferenceObject>;

  /** An object to hold reusable Callback Objects. */
  readonly callbacks?: Record<string, CallbackObject | ReferenceObject>;
}

/** Describes a single response from an API Operation, including design-time, static links to operations based on the response. */
export interface ResponseObject {

  /** A short description of the response. CommonMark syntax MAY be used for rich text representation. */
  readonly description: string;

  /** Maps a header name to its definition. RFC7230 states header names are case insensitive. If a response header is defined with the name "Content-Type", it SHALL be ignored. */
  readonly headers?: Record<string, HeaderObject | ReferenceObject>;

  /** A map containing descriptions of potential response payloads. The key is a media type or media type range and the value describes it. For responses that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/* */
  readonly content?: Record<string, MediaTypeObject | ReferenceObject>;

  /** A map of operations links that can be followed from the response. The key of the map is a short name for the link, following the naming constraints of the names for Component Objects. */
  readonly links?: Record<string, LinkObject | ReferenceObject>;
}

/** Defines a security scheme that can be used by the operations. Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), OAuth2's common flows (implicit, password, client credentials and authorization code) as defined in RFC6749, and OpenID Connect Discovery. */
export interface SecuritySchemeObject {

  /** The type of the security scheme. Valid values are "apiKey", "http", "oauth2", "openIdConnect". */
  readonly type: string;

  /** A short description for security scheme. CommonMark syntax MAY be used for rich text representation. */
  readonly description?: string;

  /**
   * The name of the header, query or cookie parameter to be used.
   * REQUIRED for apiKey.
   */
  readonly name?: string;

  /**
   * The location of the API key. Valid values are "query", "header" or "cookie".
   * REQUIRED for apiKey.
   */
  readonly in?: string;

  /**
   * The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235. The values used SHOULD be registered in the IANA Authentication Scheme registry.
   * REQUIRED for http.
   */
  readonly scheme?: string;

  /** A hint to the client to identify how the bearer token is formatted. Bearer tokens are usually generated by an authorization server, so this information is primarily for documentation purposes. */
  readonly bearerFormat?: string;

  /**
   * An object containing configuration information for the flow types supported.
   * REQUIRED for oauth2.
   */
  readonly flow?: OAuthFlowsObject;

  /**
   * OpenId Connect URL to discover OAuth2 configuration values. This MUST be in the form of a URL.
   * REQUIRED for openIdConnect.
   */
  readonly openIdConnectUrl?: string;

}

/** Allows configuration of the supported OAuth Flows. */
export interface OAuthFlowsObject {

  /** Configuration for the OAuth Implicit flow */
  readonly implicit?: OAuthFlowObject;

  /** Configuration for the OAuth Resource Owner Password flow */
  readonly password?: OAuthFlowObject;

  /** Configuration for the OAuth Client Credentials flow. Previously called application in OpenAPI 2.0. */
  readonly clientCredentials?: OAuthFlowObject;

  /** Configuration for the OAuth Authorization Code flow. Previously called accessCode in OpenAPI 2.0. */
  readonly authorizationCode?: OAuthFlowObject;
}

/** Configuration details for a supported OAuth Flow */
export interface OAuthFlowObject {

  /** The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it. The map MAY be empty. */
  readonly scopes: Record<string, string>;

  /**
   * The authorization URL to be used for this flow. This MUST be in the form of a URL.
   * REQUIRED for oauth2 ("implicit", "authorizationCode").
   */
  readonly authorizationUrl?: string;

  /**
   * The token URL to be used for this flow. This MUST be in the form of a URL.
   * REQUIRED for oauth2 ("password", "clientCredentials", "authorizationCode").
   */
  readonly tokenUrl?: string;

  /** The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL. */
  readonly refreshUrl?: string;

}

/**
 * The Link object represents a possible design-time link for a response. The presence of a link does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.
 * Unlike dynamic links (i.e. links provided in the response payload), the OAS linking mechanism does not require link information in the runtime response.
 * For computing links, and providing instructions to execute them, a runtime expression is used for accessing values in an operation and using them as parameters while invoking the linked operation.
 */
export interface LinkObject {

  /** A relative or absolute URI reference to an OAS operation. This field is mutually exclusive of the operationId field, and MUST point to an Operation Object. Relative operationRef values MAY be used to locate an existing Operation Object in the OpenAPI definition. */
  readonly operationRef?: string;

  /** The name of an existing, resolvable OAS operation, as defined with a unique operationId. This field is mutually exclusive of the operationRef field. */
  readonly operationId?: string;

  /** A map representing parameters to pass to an operation as specified with operationId or identified via operationRef. The key is the parameter name to be used, whereas the value can be a constant or an expression to be evaluated and passed to the linked operation. The parameter name can be qualified using the parameter location [{in}.]{name} for operations that use the same parameter name in different locations (e.g. path.id). */
  readonly parameters?: Record<string, any>;

  /** A literal value or {expression} to use as a request body when calling the target operation. */
  readonly requestBody?: any;

  /** A description of the link. CommonMark syntax MAY be used for rich text representation. */
  readonly description?: string;

  /** A server object to be used by the target operation. */
  readonly server?: ServerObject;
}

/**
 * Lists the required security schemes to execute this operation. The name used for each property MUST correspond to a security scheme declared in the Security Schemes under the Components Object.
 * Security Requirement Objects that contain multiple schemes require that all schemes MUST be satisfied for a request to be authorized. This enables support for scenarios where multiple query parameters or HTTP headers are required to convey security information.
 * When a list of Security Requirement Objects is defined on the OpenAPI Object or Operation Object, only one of the Security Requirement Objects in the list needs to be satisfied to authorize the request.
 */
export interface SecurityRequirementObject {

  /** Each name MUST correspond to a security scheme which is declared in the Security Schemes under the Components Object. If the security scheme is of type "oauth2" or "openIdConnect", then the value is a list of scope names required for the execution, and the list MAY be empty if authorization does not require a specified scope. For other security scheme types, the array MUST be empty. */
  readonly [name: string]: string[];
}


/** Describes a single operation parameter. A unique parameter is defined by a combination of a name and location. */
export interface ParameterObject {

  /**
   * The name of the parameter. Parameter names are case sensitive.
   *
   * If in is "path", the name field MUST correspond to a template expression occurring within the path field in the Paths Object. See Path Templating for further information.
   * If in is "header" and the name field is "Accept", "Content-Type" or "Authorization", the parameter definition SHALL be ignored.
   * For all other cases, the name corresponds to the parameter name used by the in property.
   */
  readonly name: string;

  /** The location of the parameter. Possible values are "query", "header", "path" or "cookie". */
  readonly in: string;

  /** A brief description of the parameter. This could contain examples of use. CommonMark syntax MAY be used for rich text representation. */
  readonly description?: string;

  /** Determines whether this parameter is mandatory. If the parameter location is "path", this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be included and its default value is false. */
  readonly required?: boolean;

  /** Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is false. */
  readonly deprecated?: boolean;

  /** Sets the ability to pass empty-valued parameters. This is valid only for query parameters and allows sending a parameter with an empty value. Default value is false. If style is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision. */
  readonly allowEmptyValue?: boolean;
}

/** A simple object to allow referencing other components in the specification, internally and externally. */
export interface ReferenceObject {

  /**
   * The reference string.
   *
   * Defined via index signature because JSII 8002 validation requires camelCase names for members (not allowing $ prefix).
   *
   * @example
   * {
   *   $ref: '../resources/users.yaml',
   * }
   */
  readonly [key: string]: string;
  //readonly $ref: string; can't be done because JSII 8002
}


/** An object representing a Server. */
export interface ServerObject {

  /** REQUIRED. A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that the host location is relative to the location where the OpenAPI document is being served. Variable substitutions will be made when a variable is named in {brackets}. */
  readonly url: string;

  /** An optional string describing the host designated by the URL. CommonMark syntax MAY be used for rich text representation. */
  readonly description?: string;

  /** A map between a variable name and its value. The value is used for substitution in the server's URL template. */
  readonly variables?: Record<string, ServerVariableObject>;
}

/** An object representing a Server Variable for server URL template substitution. */
export interface ServerVariableObject {

  /** The default value to use for substitution, which SHALL be sent if an alternate value is not supplied. Note this behavior is different than the Schema Object's treatment of default values, because in those cases parameter values are optional. If the enum is defined, the value SHOULD exist in the enum's values. */
  readonly default: string;

  /** An enumeration of string values to be used if the substitution options are from a limited set. The array SHOULD NOT be empty. */
  readonly enum?: string[];

  /** An optional description for the server variable. CommonMark syntax MAY be used for rich text representation. */
  readonly description?: string;

}

/** Adds metadata to a single tag that is used by the Operation Object. It is not mandatory to have a Tag Object per tag defined in the Operation Object instances. */
export interface TagObject {

  /** The name of the tag. */
  readonly name: string;

  /** A short description for the tag. CommonMark syntax MAY be used for rich text representation. */
  readonly description?: string;

  /** Additional external documentation for this tag. */
  readonly externalDocs?: ExternalDocumentationObject;

}
