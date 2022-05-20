# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### OpenApi <a name="@alma-cdk/openapix.OpenApi" id="almacdkopenapixopenapi"></a>

#### Initializers <a name="@alma-cdk/openapix.OpenApi.Initializer" id="almacdkopenapixopenapiinitializer"></a>

```typescript
import { OpenApi } from '@alma-cdk/openapix'

new OpenApi(scope: Construct, id: string, props: OpenApiProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#almacdkopenapixopenapiparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#almacdkopenapixopenapiparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#almacdkopenapixopenapiparameterprops)<span title="Required">*</span> | [`@alma-cdk/openapix.OpenApiProps`](#@alma-cdk/openapix.OpenApiProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@alma-cdk/openapix.OpenApi.parameter.scope" id="almacdkopenapixopenapiparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@alma-cdk/openapix.OpenApi.parameter.id" id="almacdkopenapixopenapiparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@alma-cdk/openapix.OpenApi.parameter.props" id="almacdkopenapixopenapiparameterprops"></a>

- *Type:* [`@alma-cdk/openapix.OpenApiProps`](#@alma-cdk/openapix.OpenApiProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`api`](#almacdkopenapixopenapipropertyapi)<span title="Required">*</span> | [`aws-cdk-lib.aws_apigateway.IRestApi`](#aws-cdk-lib.aws_apigateway.IRestApi) | *No description.* |

---

##### `api`<sup>Required</sup> <a name="@alma-cdk/openapix.OpenApi.property.api" id="almacdkopenapixopenapipropertyapi"></a>

```typescript
public readonly api: IRestApi;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.IRestApi`](#aws-cdk-lib.aws_apigateway.IRestApi)

---


## Structs <a name="Structs" id="structs"></a>

### AuthorizerConfig <a name="@alma-cdk/openapix.AuthorizerConfig" id="almacdkopenapixauthorizerconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AuthorizerConfig } from '@alma-cdk/openapix'

const authorizerConfig: AuthorizerConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`xAmazonApigatewayAuthorizer`](#almacdkopenapixauthorizerconfigpropertyxamazonapigatewayauthorizer)<span title="Required">*</span> | [`@alma-cdk/openapix.XAmazonApigatewayAuthorizer`](#@alma-cdk/openapix.XAmazonApigatewayAuthorizer) | *No description.* |
| [`xAmazonApigatewayAuthtype`](#almacdkopenapixauthorizerconfigpropertyxamazonapigatewayauthtype)<span title="Required">*</span> | `string` | *No description.* |
| [`id`](#almacdkopenapixauthorizerconfigpropertyid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `xAmazonApigatewayAuthorizer`<sup>Required</sup> <a name="@alma-cdk/openapix.AuthorizerConfig.property.xAmazonApigatewayAuthorizer" id="almacdkopenapixauthorizerconfigpropertyxamazonapigatewayauthorizer"></a>

```typescript
public readonly xAmazonApigatewayAuthorizer: XAmazonApigatewayAuthorizer;
```

- *Type:* [`@alma-cdk/openapix.XAmazonApigatewayAuthorizer`](#@alma-cdk/openapix.XAmazonApigatewayAuthorizer)

---

##### `xAmazonApigatewayAuthtype`<sup>Required</sup> <a name="@alma-cdk/openapix.AuthorizerConfig.property.xAmazonApigatewayAuthtype" id="almacdkopenapixauthorizerconfigpropertyxamazonapigatewayauthtype"></a>

```typescript
public readonly xAmazonApigatewayAuthtype: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@alma-cdk/openapix.AuthorizerConfig.property.id" id="almacdkopenapixauthorizerconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

### AuthorizerExtensions <a name="@alma-cdk/openapix.AuthorizerExtensions" id="almacdkopenapixauthorizerextensions"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AuthorizerExtensions } from '@alma-cdk/openapix'

const authorizerExtensions: AuthorizerExtensions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`xAmazonApigatewayAuthorizer`](#almacdkopenapixauthorizerextensionspropertyxamazonapigatewayauthorizer)<span title="Required">*</span> | [`@alma-cdk/openapix.XAmazonApigatewayAuthorizer`](#@alma-cdk/openapix.XAmazonApigatewayAuthorizer) | *No description.* |
| [`xAmazonApigatewayAuthtype`](#almacdkopenapixauthorizerextensionspropertyxamazonapigatewayauthtype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `xAmazonApigatewayAuthorizer`<sup>Required</sup> <a name="@alma-cdk/openapix.AuthorizerExtensions.property.xAmazonApigatewayAuthorizer" id="almacdkopenapixauthorizerextensionspropertyxamazonapigatewayauthorizer"></a>

```typescript
public readonly xAmazonApigatewayAuthorizer: XAmazonApigatewayAuthorizer;
```

- *Type:* [`@alma-cdk/openapix.XAmazonApigatewayAuthorizer`](#@alma-cdk/openapix.XAmazonApigatewayAuthorizer)

---

##### `xAmazonApigatewayAuthtype`<sup>Required</sup> <a name="@alma-cdk/openapix.AuthorizerExtensions.property.xAmazonApigatewayAuthtype" id="almacdkopenapixauthorizerextensionspropertyxamazonapigatewayauthtype"></a>

```typescript
public readonly xAmazonApigatewayAuthtype: string;
```

- *Type:* `string`

---

### AwsIntegrationProps <a name="@alma-cdk/openapix.AwsIntegrationProps" id="almacdkopenapixawsintegrationprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AwsIntegrationProps } from '@alma-cdk/openapix'

const awsIntegrationProps: AwsIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`service`](#almacdkopenapixawsintegrationpropspropertyservice)<span title="Required">*</span> | `string` | The name of the integrated AWS service (e.g. `s3`). |
| [`action`](#almacdkopenapixawsintegrationpropspropertyaction) | `string` | The AWS action to perform in the integration. |
| [`actionParameters`](#almacdkopenapixawsintegrationpropspropertyactionparameters) | {[ key: string ]: `string`} | Parameters for the action. |
| [`integrationHttpMethod`](#almacdkopenapixawsintegrationpropspropertyintegrationhttpmethod) | `string` | The integration's HTTP method type. |
| [`options`](#almacdkopenapixawsintegrationpropspropertyoptions) | [`aws-cdk-lib.aws_apigateway.IntegrationOptions`](#aws-cdk-lib.aws_apigateway.IntegrationOptions) | Integration options, such as content handling, request/response mapping, etc. |
| [`path`](#almacdkopenapixawsintegrationpropspropertypath) | `string` | The path to use for path-base APIs. |
| [`proxy`](#almacdkopenapixawsintegrationpropspropertyproxy) | `boolean` | Use AWS_PROXY integration. |
| [`region`](#almacdkopenapixawsintegrationpropspropertyregion) | `string` | The region of the integrated AWS service. |
| [`subdomain`](#almacdkopenapixawsintegrationpropspropertysubdomain) | `string` | A designated subdomain supported by certain AWS service for fast host-name lookup. |
| [`validator`](#almacdkopenapixawsintegrationpropspropertyvalidator) | `string` | Validator identifier for method integration. This will override the default validator if one configured. |

---

##### `service`<sup>Required</sup> <a name="@alma-cdk/openapix.AwsIntegrationProps.property.service" id="almacdkopenapixawsintegrationpropspropertyservice"></a>

```typescript
public readonly service: string;
```

- *Type:* `string`

The name of the integrated AWS service (e.g. `s3`).

---

##### `action`<sup>Optional</sup> <a name="@alma-cdk/openapix.AwsIntegrationProps.property.action" id="almacdkopenapixawsintegrationpropspropertyaction"></a>

```typescript
public readonly action: string;
```

- *Type:* `string`

The AWS action to perform in the integration.

Use `actionParams` to specify key-value params for the action.  Mutually exclusive with `path`.

---

##### `actionParameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.AwsIntegrationProps.property.actionParameters" id="almacdkopenapixawsintegrationpropspropertyactionparameters"></a>

```typescript
public readonly actionParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Parameters for the action.

`action` must be set, and `path` must be undefined. The action params will be URL encoded.

---

##### `integrationHttpMethod`<sup>Optional</sup> <a name="@alma-cdk/openapix.AwsIntegrationProps.property.integrationHttpMethod" id="almacdkopenapixawsintegrationpropspropertyintegrationhttpmethod"></a>

```typescript
public readonly integrationHttpMethod: string;
```

- *Type:* `string`
- *Default:* POST

The integration's HTTP method type.

---

##### `options`<sup>Optional</sup> <a name="@alma-cdk/openapix.AwsIntegrationProps.property.options" id="almacdkopenapixawsintegrationpropspropertyoptions"></a>

```typescript
public readonly options: IntegrationOptions;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.IntegrationOptions`](#aws-cdk-lib.aws_apigateway.IntegrationOptions)

Integration options, such as content handling, request/response mapping, etc.

---

##### `path`<sup>Optional</sup> <a name="@alma-cdk/openapix.AwsIntegrationProps.property.path" id="almacdkopenapixawsintegrationpropspropertypath"></a>

```typescript
public readonly path: string;
```

- *Type:* `string`

The path to use for path-base APIs.

For example, for S3 GET, you can set path to `bucket/key`. For lambda, you can set path to `2015-03-31/functions/${function-arn}/invocations`  Mutually exclusive with the `action` options.

---

##### `proxy`<sup>Optional</sup> <a name="@alma-cdk/openapix.AwsIntegrationProps.property.proxy" id="almacdkopenapixawsintegrationpropspropertyproxy"></a>

```typescript
public readonly proxy: boolean;
```

- *Type:* `boolean`
- *Default:* false

Use AWS_PROXY integration.

---

##### `region`<sup>Optional</sup> <a name="@alma-cdk/openapix.AwsIntegrationProps.property.region" id="almacdkopenapixawsintegrationpropspropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`
- *Default:* same region as the stack

The region of the integrated AWS service.

---

##### `subdomain`<sup>Optional</sup> <a name="@alma-cdk/openapix.AwsIntegrationProps.property.subdomain" id="almacdkopenapixawsintegrationpropspropertysubdomain"></a>

```typescript
public readonly subdomain: string;
```

- *Type:* `string`

A designated subdomain supported by certain AWS service for fast host-name lookup.

---

##### `validator`<sup>Optional</sup> <a name="@alma-cdk/openapix.AwsIntegrationProps.property.validator" id="almacdkopenapixawsintegrationpropspropertyvalidator"></a>

```typescript
public readonly validator: string;
```

- *Type:* `string`

Validator identifier for method integration. This will override the default validator if one configured.

Should match a key from OpenApi schema `components.securitySchemas`.

---

### CorsIntegrationProps <a name="@alma-cdk/openapix.CorsIntegrationProps" id="almacdkopenapixcorsintegrationprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { CorsIntegrationProps } from '@alma-cdk/openapix'

const corsIntegrationProps: CorsIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`validator`](#almacdkopenapixcorsintegrationpropspropertyvalidator) | `string` | Validator identifier for method integration. This will override the default validator if one configured. |
| [`headers`](#almacdkopenapixcorsintegrationpropspropertyheaders)<span title="Required">*</span> | `string` | *No description.* |
| [`methods`](#almacdkopenapixcorsintegrationpropspropertymethods)<span title="Required">*</span> | `string` | *No description.* |
| [`origins`](#almacdkopenapixcorsintegrationpropspropertyorigins)<span title="Required">*</span> | `string` | *No description.* |

---

##### `validator`<sup>Optional</sup> <a name="@alma-cdk/openapix.CorsIntegrationProps.property.validator" id="almacdkopenapixcorsintegrationpropspropertyvalidator"></a>

```typescript
public readonly validator: string;
```

- *Type:* `string`

Validator identifier for method integration. This will override the default validator if one configured.

Should match a key from OpenApi schema `components.securitySchemas`.

---

##### `headers`<sup>Required</sup> <a name="@alma-cdk/openapix.CorsIntegrationProps.property.headers" id="almacdkopenapixcorsintegrationpropspropertyheaders"></a>

```typescript
public readonly headers: string;
```

- *Type:* `string`

---

##### `methods`<sup>Required</sup> <a name="@alma-cdk/openapix.CorsIntegrationProps.property.methods" id="almacdkopenapixcorsintegrationpropspropertymethods"></a>

```typescript
public readonly methods: string;
```

- *Type:* `string`

---

##### `origins`<sup>Required</sup> <a name="@alma-cdk/openapix.CorsIntegrationProps.property.origins" id="almacdkopenapixcorsintegrationpropspropertyorigins"></a>

```typescript
public readonly origins: string;
```

- *Type:* `string`

---

### HttpIntegrationProps <a name="@alma-cdk/openapix.HttpIntegrationProps" id="almacdkopenapixhttpintegrationprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { HttpIntegrationProps } from '@alma-cdk/openapix'

const httpIntegrationProps: HttpIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`httpMethod`](#almacdkopenapixhttpintegrationpropspropertyhttpmethod) | `string` | HTTP method to use when invoking the backend URL. |
| [`options`](#almacdkopenapixhttpintegrationpropspropertyoptions) | [`aws-cdk-lib.aws_apigateway.IntegrationOptions`](#aws-cdk-lib.aws_apigateway.IntegrationOptions) | Integration options, such as request/resopnse mapping, content handling, etc. |
| [`proxy`](#almacdkopenapixhttpintegrationpropspropertyproxy) | `boolean` | Determines whether to use proxy integration or custom integration. |
| [`validator`](#almacdkopenapixhttpintegrationpropspropertyvalidator) | `string` | Validator identifier for method integration. This will override the default validator if one configured. |

---

##### `httpMethod`<sup>Optional</sup> <a name="@alma-cdk/openapix.HttpIntegrationProps.property.httpMethod" id="almacdkopenapixhttpintegrationpropspropertyhttpmethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* `string`
- *Default:* GET

HTTP method to use when invoking the backend URL.

---

##### `options`<sup>Optional</sup> <a name="@alma-cdk/openapix.HttpIntegrationProps.property.options" id="almacdkopenapixhttpintegrationpropspropertyoptions"></a>

```typescript
public readonly options: IntegrationOptions;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.IntegrationOptions`](#aws-cdk-lib.aws_apigateway.IntegrationOptions)
- *Default:* defaults based on `IntegrationOptions` defaults

Integration options, such as request/resopnse mapping, content handling, etc.

---

##### `proxy`<sup>Optional</sup> <a name="@alma-cdk/openapix.HttpIntegrationProps.property.proxy" id="almacdkopenapixhttpintegrationpropspropertyproxy"></a>

```typescript
public readonly proxy: boolean;
```

- *Type:* `boolean`
- *Default:* true

Determines whether to use proxy integration or custom integration.

---

##### `validator`<sup>Optional</sup> <a name="@alma-cdk/openapix.HttpIntegrationProps.property.validator" id="almacdkopenapixhttpintegrationpropspropertyvalidator"></a>

```typescript
public readonly validator: string;
```

- *Type:* `string`

Validator identifier for method integration. This will override the default validator if one configured.

Should match a key from OpenApi schema `components.securitySchemas`.

---

### IntegrationConfig <a name="@alma-cdk/openapix.IntegrationConfig" id="almacdkopenapixintegrationconfig"></a>

Base integration config.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { IntegrationConfig } from '@alma-cdk/openapix'

const integrationConfig: IntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`validator`](#almacdkopenapixintegrationconfigpropertyvalidator) | `string` | Validator identifier for method integration. This will override the default validator if one configured. |
| [`type`](#almacdkopenapixintegrationconfigpropertytype)<span title="Required">*</span> | [`@alma-cdk/openapix.InternalIntegrationType`](#@alma-cdk/openapix.InternalIntegrationType) | *No description.* |

---

##### `validator`<sup>Optional</sup> <a name="@alma-cdk/openapix.IntegrationConfig.property.validator" id="almacdkopenapixintegrationconfigpropertyvalidator"></a>

```typescript
public readonly validator: string;
```

- *Type:* `string`

Validator identifier for method integration. This will override the default validator if one configured.

Should match a key from OpenApi schema `components.securitySchemas`.

---

##### `type`<sup>Required</sup> <a name="@alma-cdk/openapix.IntegrationConfig.property.type" id="almacdkopenapixintegrationconfigpropertytype"></a>

```typescript
public readonly type: InternalIntegrationType;
```

- *Type:* [`@alma-cdk/openapix.InternalIntegrationType`](#@alma-cdk/openapix.InternalIntegrationType)

---

### LambdaIntegrationOptions <a name="@alma-cdk/openapix.LambdaIntegrationOptions" id="almacdkopenapixlambdaintegrationoptions"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { LambdaIntegrationOptions } from '@alma-cdk/openapix'

const lambdaIntegrationOptions: LambdaIntegrationOptions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`cacheKeyParameters`](#almacdkopenapixlambdaintegrationoptionspropertycachekeyparameters) | `string`[] | A list of request parameters whose values are to be cached. |
| [`cacheNamespace`](#almacdkopenapixlambdaintegrationoptionspropertycachenamespace) | `string` | An API-specific tag group of related cached parameters. |
| [`connectionType`](#almacdkopenapixlambdaintegrationoptionspropertyconnectiontype) | [`aws-cdk-lib.aws_apigateway.ConnectionType`](#aws-cdk-lib.aws_apigateway.ConnectionType) | The type of network connection to the integration endpoint. |
| [`contentHandling`](#almacdkopenapixlambdaintegrationoptionspropertycontenthandling) | [`aws-cdk-lib.aws_apigateway.ContentHandling`](#aws-cdk-lib.aws_apigateway.ContentHandling) | Specifies how to handle request payload content type conversions. |
| [`credentialsPassthrough`](#almacdkopenapixlambdaintegrationoptionspropertycredentialspassthrough) | `boolean` | Requires that the caller's identity be passed through from the request. |
| [`credentialsRole`](#almacdkopenapixlambdaintegrationoptionspropertycredentialsrole) | [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole) | An IAM role that API Gateway assumes. |
| [`integrationResponses`](#almacdkopenapixlambdaintegrationoptionspropertyintegrationresponses) | [`aws-cdk-lib.aws_apigateway.IntegrationResponse`](#aws-cdk-lib.aws_apigateway.IntegrationResponse)[] | The response that API Gateway provides after a method's backend completes processing a request. |
| [`passthroughBehavior`](#almacdkopenapixlambdaintegrationoptionspropertypassthroughbehavior) | [`aws-cdk-lib.aws_apigateway.PassthroughBehavior`](#aws-cdk-lib.aws_apigateway.PassthroughBehavior) | Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. |
| [`requestParameters`](#almacdkopenapixlambdaintegrationoptionspropertyrequestparameters) | {[ key: string ]: `string`} | The request parameters that API Gateway sends with the backend request. |
| [`requestTemplates`](#almacdkopenapixlambdaintegrationoptionspropertyrequesttemplates) | {[ key: string ]: `string`} | A map of Apache Velocity templates that are applied on the request payload. |
| [`timeout`](#almacdkopenapixlambdaintegrationoptionspropertytimeout) | [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration) | The maximum amount of time an integration will run before it returns without a response. |
| [`vpcLink`](#almacdkopenapixlambdaintegrationoptionspropertyvpclink) | [`aws-cdk-lib.aws_apigateway.IVpcLink`](#aws-cdk-lib.aws_apigateway.IVpcLink) | The VpcLink used for the integration. |
| [`allowTestInvoke`](#almacdkopenapixlambdaintegrationoptionspropertyallowtestinvoke) | `boolean` | Allow invoking method from AWS Console UI (for testing purposes). |
| [`proxy`](#almacdkopenapixlambdaintegrationoptionspropertyproxy) | `boolean` | Use proxy integration or normal (request/response mapping) integration. |
| [`validator`](#almacdkopenapixlambdaintegrationoptionspropertyvalidator) | `string` | Validator identifier for method integration. This will override the default validator if one configured. |

---

##### `cacheKeyParameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.LambdaIntegrationOptions.property.cacheKeyParameters" id="almacdkopenapixlambdaintegrationoptionspropertycachekeyparameters"></a>

```typescript
public readonly cacheKeyParameters: string[];
```

- *Type:* `string`[]

A list of request parameters whose values are to be cached.

It determines request parameters that will make it into the cache key.

---

##### `cacheNamespace`<sup>Optional</sup> <a name="@alma-cdk/openapix.LambdaIntegrationOptions.property.cacheNamespace" id="almacdkopenapixlambdaintegrationoptionspropertycachenamespace"></a>

```typescript
public readonly cacheNamespace: string;
```

- *Type:* `string`

An API-specific tag group of related cached parameters.

---

##### `connectionType`<sup>Optional</sup> <a name="@alma-cdk/openapix.LambdaIntegrationOptions.property.connectionType" id="almacdkopenapixlambdaintegrationoptionspropertyconnectiontype"></a>

```typescript
public readonly connectionType: ConnectionType;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.ConnectionType`](#aws-cdk-lib.aws_apigateway.ConnectionType)
- *Default:* ConnectionType.VPC_LINK if `vpcLink` property is configured; ConnectionType.Internet otherwise.

The type of network connection to the integration endpoint.

---

##### `contentHandling`<sup>Optional</sup> <a name="@alma-cdk/openapix.LambdaIntegrationOptions.property.contentHandling" id="almacdkopenapixlambdaintegrationoptionspropertycontenthandling"></a>

```typescript
public readonly contentHandling: ContentHandling;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.ContentHandling`](#aws-cdk-lib.aws_apigateway.ContentHandling)
- *Default:* none if this property isn't defined, the request payload is passed through from the method request to the integration request without modification, provided that the `passthroughBehaviors` property is configured to support payload pass-through.

Specifies how to handle request payload content type conversions.

---

##### `credentialsPassthrough`<sup>Optional</sup> <a name="@alma-cdk/openapix.LambdaIntegrationOptions.property.credentialsPassthrough" id="almacdkopenapixlambdaintegrationoptionspropertycredentialspassthrough"></a>

```typescript
public readonly credentialsPassthrough: boolean;
```

- *Type:* `boolean`
- *Default:* Caller identity is not passed through

Requires that the caller's identity be passed through from the request.

---

##### `credentialsRole`<sup>Optional</sup> <a name="@alma-cdk/openapix.LambdaIntegrationOptions.property.credentialsRole" id="almacdkopenapixlambdaintegrationoptionspropertycredentialsrole"></a>

```typescript
public readonly credentialsRole: IRole;
```

- *Type:* [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole)
- *Default:* A role is not assumed

An IAM role that API Gateway assumes.

Mutually exclusive with `credentialsPassThrough`.

---

##### `integrationResponses`<sup>Optional</sup> <a name="@alma-cdk/openapix.LambdaIntegrationOptions.property.integrationResponses" id="almacdkopenapixlambdaintegrationoptionspropertyintegrationresponses"></a>

```typescript
public readonly integrationResponses: IntegrationResponse[];
```

- *Type:* [`aws-cdk-lib.aws_apigateway.IntegrationResponse`](#aws-cdk-lib.aws_apigateway.IntegrationResponse)[]

The response that API Gateway provides after a method's backend completes processing a request.

API Gateway intercepts the response from the backend so that you can control how API Gateway surfaces backend responses. For example, you can map the backend status codes to codes that you define.

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="@alma-cdk/openapix.LambdaIntegrationOptions.property.passthroughBehavior" id="almacdkopenapixlambdaintegrationoptionspropertypassthroughbehavior"></a>

```typescript
public readonly passthroughBehavior: PassthroughBehavior;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.PassthroughBehavior`](#aws-cdk-lib.aws_apigateway.PassthroughBehavior)

Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource.

There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER.

---

##### `requestParameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.LambdaIntegrationOptions.property.requestParameters" id="almacdkopenapixlambdaintegrationoptionspropertyrequestparameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

The request parameters that API Gateway sends with the backend request.

Specify request parameters as key-value pairs (string-to-string mappings), with a destination as the key and a source as the value.  Specify the destination by using the following pattern integration.request.location.name, where location is querystring, path, or header, and name is a valid, unique parameter name.  The source must be an existing method request parameter or a static value. You must enclose static values in single quotation marks and pre-encode these values based on their destination in the request.

---

##### `requestTemplates`<sup>Optional</sup> <a name="@alma-cdk/openapix.LambdaIntegrationOptions.property.requestTemplates" id="almacdkopenapixlambdaintegrationoptionspropertyrequesttemplates"></a>

```typescript
public readonly requestTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

A map of Apache Velocity templates that are applied on the request payload.

The template that API Gateway uses is based on the value of the Content-Type header that's sent by the client. The content type value is the key, and the template is the value (specified as a string), such as the following snippet:  ```    { "application/json": "{ \"statusCode\": 200 }" } ```

> http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html

---

##### `timeout`<sup>Optional</sup> <a name="@alma-cdk/openapix.LambdaIntegrationOptions.property.timeout" id="almacdkopenapixlambdaintegrationoptionspropertytimeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration)
- *Default:* Duration.seconds(29)

The maximum amount of time an integration will run before it returns without a response.

Must be between 50 milliseconds and 29 seconds.

---

##### `vpcLink`<sup>Optional</sup> <a name="@alma-cdk/openapix.LambdaIntegrationOptions.property.vpcLink" id="almacdkopenapixlambdaintegrationoptionspropertyvpclink"></a>

```typescript
public readonly vpcLink: IVpcLink;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.IVpcLink`](#aws-cdk-lib.aws_apigateway.IVpcLink)

The VpcLink used for the integration.

Required if connectionType is VPC_LINK

---

##### `allowTestInvoke`<sup>Optional</sup> <a name="@alma-cdk/openapix.LambdaIntegrationOptions.property.allowTestInvoke" id="almacdkopenapixlambdaintegrationoptionspropertyallowtestinvoke"></a>

```typescript
public readonly allowTestInvoke: boolean;
```

- *Type:* `boolean`
- *Default:* true

Allow invoking method from AWS Console UI (for testing purposes).

This will add another permission to the AWS Lambda resource policy which will allow the `test-invoke-stage` stage to invoke this handler. If this is set to `false`, the function will only be usable from the deployment endpoint.

---

##### `proxy`<sup>Optional</sup> <a name="@alma-cdk/openapix.LambdaIntegrationOptions.property.proxy" id="almacdkopenapixlambdaintegrationoptionspropertyproxy"></a>

```typescript
public readonly proxy: boolean;
```

- *Type:* `boolean`
- *Default:* true

Use proxy integration or normal (request/response mapping) integration.

> https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-output-format

---

##### `validator`<sup>Optional</sup> <a name="@alma-cdk/openapix.LambdaIntegrationOptions.property.validator" id="almacdkopenapixlambdaintegrationoptionspropertyvalidator"></a>

```typescript
public readonly validator: string;
```

- *Type:* `string`

Validator identifier for method integration. This will override the default validator if one configured.

Should match a key from OpenApi schema `components.securitySchemas`.

---

### MockIntegrationProps <a name="@alma-cdk/openapix.MockIntegrationProps" id="almacdkopenapixmockintegrationprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { MockIntegrationProps } from '@alma-cdk/openapix'

const mockIntegrationProps: MockIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`type`](#almacdkopenapixmockintegrationpropspropertytype)<span title="Required">*</span> | [`aws-cdk-lib.aws_apigateway.IntegrationType`](#aws-cdk-lib.aws_apigateway.IntegrationType) | Specifies an API method integration type. |
| [`integrationHttpMethod`](#almacdkopenapixmockintegrationpropspropertyintegrationhttpmethod) | `string` | The integration's HTTP method type. |
| [`options`](#almacdkopenapixmockintegrationpropspropertyoptions) | [`aws-cdk-lib.aws_apigateway.IntegrationOptions`](#aws-cdk-lib.aws_apigateway.IntegrationOptions) | Integration options. |
| [`uri`](#almacdkopenapixmockintegrationpropspropertyuri) | `any` | The Uniform Resource Identifier (URI) for the integration. |
| [`validator`](#almacdkopenapixmockintegrationpropspropertyvalidator) | `string` | Validator identifier for method integration. This will override the default validator if one configured. |

---

##### `type`<sup>Required</sup> <a name="@alma-cdk/openapix.MockIntegrationProps.property.type" id="almacdkopenapixmockintegrationpropspropertytype"></a>

```typescript
public readonly type: IntegrationType;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.IntegrationType`](#aws-cdk-lib.aws_apigateway.IntegrationType)

Specifies an API method integration type.

---

##### `integrationHttpMethod`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegrationProps.property.integrationHttpMethod" id="almacdkopenapixmockintegrationpropspropertyintegrationhttpmethod"></a>

```typescript
public readonly integrationHttpMethod: string;
```

- *Type:* `string`

The integration's HTTP method type.

Required unless you use a MOCK integration.

---

##### `options`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegrationProps.property.options" id="almacdkopenapixmockintegrationpropspropertyoptions"></a>

```typescript
public readonly options: IntegrationOptions;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.IntegrationOptions`](#aws-cdk-lib.aws_apigateway.IntegrationOptions)

Integration options.

---

##### `uri`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegrationProps.property.uri" id="almacdkopenapixmockintegrationpropspropertyuri"></a>

```typescript
public readonly uri: any;
```

- *Type:* `any`

The Uniform Resource Identifier (URI) for the integration.

If you specify HTTP for the `type` property, specify the API endpoint URL. - If you specify MOCK for the `type` property, don't specify this property. - If you specify AWS for the `type` property, specify an AWS service that    follows this form: `arn:partition:apigateway:region:subdomain.service|service:path|action/service_api.`    For example, a Lambda function URI follows this form:    arn:partition:apigateway:region:lambda:path/path. The path is usually in the    form /2015-03-31/functions/LambdaFunctionARN/invocations.

> https://docs.aws.amazon.com/apigateway/api-reference/resource/integration/#uri

---

##### `validator`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegrationProps.property.validator" id="almacdkopenapixmockintegrationpropspropertyvalidator"></a>

```typescript
public readonly validator: string;
```

- *Type:* `string`

Validator identifier for method integration. This will override the default validator if one configured.

Should match a key from OpenApi schema `components.securitySchemas`.

---

### OpenApiBaseProps <a name="@alma-cdk/openapix.OpenApiBaseProps" id="almacdkopenapixopenapibaseprops"></a>

BaseProps for the `OpenApi` construct without `RestApiProps`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OpenApiBaseProps } from '@alma-cdk/openapix'

const openApiBaseProps: OpenApiBaseProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`source`](#almacdkopenapixopenapibasepropspropertysource)<span title="Required">*</span> | `string` | OpenApi Schema Definition source configuration. |
| [`authorizers`](#almacdkopenapixopenapibasepropspropertyauthorizers) | {[ key: string ]: [`@alma-cdk/openapix.AuthorizerConfig`](#@alma-cdk/openapix.AuthorizerConfig)} | Cognito User Pool or Custom Lambda based Authorizer configurations. |
| [`defaultCors`](#almacdkopenapixopenapibasepropspropertydefaultcors) | [`@alma-cdk/openapix.CorsIntegration`](#@alma-cdk/openapix.CorsIntegration) | Default CORS configuration. Applied to all path integrations. |
| [`injections`](#almacdkopenapixopenapibasepropspropertyinjections) | {[ key: string ]: `any`} | Inject any OpenApi v3 data to given schema definition object paths. |
| [`paths`](#almacdkopenapixopenapibasepropspropertypaths) | {[ key: string ]: {[ key: string ]: [`@alma-cdk/openapix.Integration`](#@alma-cdk/openapix.Integration)}} | Integrations for OpenApi Path definitions. |
| [`rejections`](#almacdkopenapixopenapibasepropspropertyrejections) | `string`[] | Reject fields by absolute object path from generated definition. |
| [`rejectionsDeep`](#almacdkopenapixopenapibasepropspropertyrejectionsdeep) | `string`[] | Reject all matching fields from generated definition. |
| [`upload`](#almacdkopenapixopenapibasepropspropertyupload) | `boolean` | Schema Definition location (inline vs. |
| [`validators`](#almacdkopenapixopenapibasepropspropertyvalidators) | {[ key: string ]: [`@alma-cdk/openapix.Validator`](#@alma-cdk/openapix.Validator)} | Configure availalbe request validators. API Gateway REST APIs can perform request parameter and request body validation. |

---

##### `source`<sup>Required</sup> <a name="@alma-cdk/openapix.OpenApiBaseProps.property.source" id="almacdkopenapixopenapibasepropspropertysource"></a>

```typescript
public readonly source: string;
```

- *Type:* `string`

OpenApi Schema Definition source configuration.

Provide either string path to source or an instance of `openapix.Schema`.

---

##### `authorizers`<sup>Optional</sup> <a name="@alma-cdk/openapix.OpenApiBaseProps.property.authorizers" id="almacdkopenapixopenapibasepropspropertyauthorizers"></a>

```typescript
public readonly authorizers: {[ key: string ]: AuthorizerConfig};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.AuthorizerConfig`](#@alma-cdk/openapix.AuthorizerConfig)}

Cognito User Pool or Custom Lambda based Authorizer configurations.

> https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html

---

##### `defaultCors`<sup>Optional</sup> <a name="@alma-cdk/openapix.OpenApiBaseProps.property.defaultCors" id="almacdkopenapixopenapibasepropspropertydefaultcors"></a>

```typescript
public readonly defaultCors: CorsIntegration;
```

- *Type:* [`@alma-cdk/openapix.CorsIntegration`](#@alma-cdk/openapix.CorsIntegration)

Default CORS configuration. Applied to all path integrations.

You can add path specific overrides by adding an `OPTIONS` method with `new openapix.CorsIntegration(...)` integration.

---

##### `injections`<sup>Optional</sup> <a name="@alma-cdk/openapix.OpenApiBaseProps.property.injections" id="almacdkopenapixopenapibasepropspropertyinjections"></a>

```typescript
public readonly injections: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

Inject any OpenApi v3 data to given schema definition object paths.

---

##### `paths`<sup>Optional</sup> <a name="@alma-cdk/openapix.OpenApiBaseProps.property.paths" id="almacdkopenapixopenapibasepropspropertypaths"></a>

```typescript
public readonly paths: {[ key: string ]: {[ key: string ]: Integration}};
```

- *Type:* {[ key: string ]: {[ key: string ]: [`@alma-cdk/openapix.Integration`](#@alma-cdk/openapix.Integration)}}

Integrations for OpenApi Path definitions.

---

##### `rejections`<sup>Optional</sup> <a name="@alma-cdk/openapix.OpenApiBaseProps.property.rejections" id="almacdkopenapixopenapibasepropspropertyrejections"></a>

```typescript
public readonly rejections: string[];
```

- *Type:* `string`[]

Reject fields by absolute object path from generated definition.

---

##### `rejectionsDeep`<sup>Optional</sup> <a name="@alma-cdk/openapix.OpenApiBaseProps.property.rejectionsDeep" id="almacdkopenapixopenapibasepropspropertyrejectionsdeep"></a>

```typescript
public readonly rejectionsDeep: string[];
```

- *Type:* `string`[]

Reject all matching fields from generated definition.

---

##### `upload`<sup>Optional</sup> <a name="@alma-cdk/openapix.OpenApiBaseProps.property.upload" id="almacdkopenapixopenapibasepropspropertyupload"></a>

```typescript
public readonly upload: boolean;
```

- *Type:* `boolean`
- *Default:* false

Schema Definition location (inline vs.

S3 location). Set `true` to upload to S3 or `false` (default) to inline it into resulting CloudFormation template.

---

##### `validators`<sup>Optional</sup> <a name="@alma-cdk/openapix.OpenApiBaseProps.property.validators" id="almacdkopenapixopenapibasepropspropertyvalidators"></a>

```typescript
public readonly validators: {[ key: string ]: Validator};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.Validator`](#@alma-cdk/openapix.Validator)}

Configure availalbe request validators. API Gateway REST APIs can perform request parameter and request body validation.

You can optionally specify one of them with `default: true` to promote it as the default validator applied to all integrations.  For non-default validators, you must specify `validator: '<name>'` prop in every integration you wish to use the given validator.

> https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html

---

### OpenApiProps <a name="@alma-cdk/openapix.OpenApiProps" id="almacdkopenapixopenapiprops"></a>

Props to configure `new openapix.OpenApi`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OpenApiProps } from '@alma-cdk/openapix'

const openApiProps: OpenApiProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`source`](#almacdkopenapixopenapipropspropertysource)<span title="Required">*</span> | `string` | OpenApi Schema Definition source configuration. |
| [`authorizers`](#almacdkopenapixopenapipropspropertyauthorizers) | {[ key: string ]: [`@alma-cdk/openapix.AuthorizerConfig`](#@alma-cdk/openapix.AuthorizerConfig)} | Cognito User Pool or Custom Lambda based Authorizer configurations. |
| [`defaultCors`](#almacdkopenapixopenapipropspropertydefaultcors) | [`@alma-cdk/openapix.CorsIntegration`](#@alma-cdk/openapix.CorsIntegration) | Default CORS configuration. Applied to all path integrations. |
| [`injections`](#almacdkopenapixopenapipropspropertyinjections) | {[ key: string ]: `any`} | Inject any OpenApi v3 data to given schema definition object paths. |
| [`paths`](#almacdkopenapixopenapipropspropertypaths) | {[ key: string ]: {[ key: string ]: [`@alma-cdk/openapix.Integration`](#@alma-cdk/openapix.Integration)}} | Integrations for OpenApi Path definitions. |
| [`rejections`](#almacdkopenapixopenapipropspropertyrejections) | `string`[] | Reject fields by absolute object path from generated definition. |
| [`rejectionsDeep`](#almacdkopenapixopenapipropspropertyrejectionsdeep) | `string`[] | Reject all matching fields from generated definition. |
| [`upload`](#almacdkopenapixopenapipropspropertyupload) | `boolean` | Schema Definition location (inline vs. |
| [`validators`](#almacdkopenapixopenapipropspropertyvalidators) | {[ key: string ]: [`@alma-cdk/openapix.Validator`](#@alma-cdk/openapix.Validator)} | Configure availalbe request validators. API Gateway REST APIs can perform request parameter and request body validation. |
| [`restApiProps`](#almacdkopenapixopenapipropspropertyrestapiprops) | [`aws-cdk-lib.aws_apigateway.RestApiProps`](#aws-cdk-lib.aws_apigateway.RestApiProps) | Props to configure the underlying CDK `apigateway.RestApi`. |

---

##### `source`<sup>Required</sup> <a name="@alma-cdk/openapix.OpenApiProps.property.source" id="almacdkopenapixopenapipropspropertysource"></a>

```typescript
public readonly source: string;
```

- *Type:* `string`

OpenApi Schema Definition source configuration.

Provide either string path to source or an instance of `openapix.Schema`.

---

##### `authorizers`<sup>Optional</sup> <a name="@alma-cdk/openapix.OpenApiProps.property.authorizers" id="almacdkopenapixopenapipropspropertyauthorizers"></a>

```typescript
public readonly authorizers: {[ key: string ]: AuthorizerConfig};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.AuthorizerConfig`](#@alma-cdk/openapix.AuthorizerConfig)}

Cognito User Pool or Custom Lambda based Authorizer configurations.

> https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html

---

##### `defaultCors`<sup>Optional</sup> <a name="@alma-cdk/openapix.OpenApiProps.property.defaultCors" id="almacdkopenapixopenapipropspropertydefaultcors"></a>

```typescript
public readonly defaultCors: CorsIntegration;
```

- *Type:* [`@alma-cdk/openapix.CorsIntegration`](#@alma-cdk/openapix.CorsIntegration)

Default CORS configuration. Applied to all path integrations.

You can add path specific overrides by adding an `OPTIONS` method with `new openapix.CorsIntegration(...)` integration.

---

##### `injections`<sup>Optional</sup> <a name="@alma-cdk/openapix.OpenApiProps.property.injections" id="almacdkopenapixopenapipropspropertyinjections"></a>

```typescript
public readonly injections: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

Inject any OpenApi v3 data to given schema definition object paths.

---

##### `paths`<sup>Optional</sup> <a name="@alma-cdk/openapix.OpenApiProps.property.paths" id="almacdkopenapixopenapipropspropertypaths"></a>

```typescript
public readonly paths: {[ key: string ]: {[ key: string ]: Integration}};
```

- *Type:* {[ key: string ]: {[ key: string ]: [`@alma-cdk/openapix.Integration`](#@alma-cdk/openapix.Integration)}}

Integrations for OpenApi Path definitions.

---

##### `rejections`<sup>Optional</sup> <a name="@alma-cdk/openapix.OpenApiProps.property.rejections" id="almacdkopenapixopenapipropspropertyrejections"></a>

```typescript
public readonly rejections: string[];
```

- *Type:* `string`[]

Reject fields by absolute object path from generated definition.

---

##### `rejectionsDeep`<sup>Optional</sup> <a name="@alma-cdk/openapix.OpenApiProps.property.rejectionsDeep" id="almacdkopenapixopenapipropspropertyrejectionsdeep"></a>

```typescript
public readonly rejectionsDeep: string[];
```

- *Type:* `string`[]

Reject all matching fields from generated definition.

---

##### `upload`<sup>Optional</sup> <a name="@alma-cdk/openapix.OpenApiProps.property.upload" id="almacdkopenapixopenapipropspropertyupload"></a>

```typescript
public readonly upload: boolean;
```

- *Type:* `boolean`
- *Default:* false

Schema Definition location (inline vs.

S3 location). Set `true` to upload to S3 or `false` (default) to inline it into resulting CloudFormation template.

---

##### `validators`<sup>Optional</sup> <a name="@alma-cdk/openapix.OpenApiProps.property.validators" id="almacdkopenapixopenapipropspropertyvalidators"></a>

```typescript
public readonly validators: {[ key: string ]: Validator};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.Validator`](#@alma-cdk/openapix.Validator)}

Configure availalbe request validators. API Gateway REST APIs can perform request parameter and request body validation.

You can optionally specify one of them with `default: true` to promote it as the default validator applied to all integrations.  For non-default validators, you must specify `validator: '<name>'` prop in every integration you wish to use the given validator.

> https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html

---

##### `restApiProps`<sup>Optional</sup> <a name="@alma-cdk/openapix.OpenApiProps.property.restApiProps" id="almacdkopenapixopenapipropspropertyrestapiprops"></a>

```typescript
public readonly restApiProps: RestApiProps;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.RestApiProps`](#aws-cdk-lib.aws_apigateway.RestApiProps)

Props to configure the underlying CDK `apigateway.RestApi`.

---

### Validator <a name="@alma-cdk/openapix.Validator" id="almacdkopenapixvalidator"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { Validator } from '@alma-cdk/openapix'

const validator: Validator = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`validateRequestBody`](#almacdkopenapixvalidatorpropertyvalidaterequestbody)<span title="Required">*</span> | `boolean` | *No description.* |
| [`validateRequestParameters`](#almacdkopenapixvalidatorpropertyvalidaterequestparameters)<span title="Required">*</span> | `boolean` | *No description.* |
| [`default`](#almacdkopenapixvalidatorpropertydefault) | `boolean` | *No description.* |

---

##### `validateRequestBody`<sup>Required</sup> <a name="@alma-cdk/openapix.Validator.property.validateRequestBody" id="almacdkopenapixvalidatorpropertyvalidaterequestbody"></a>

```typescript
public readonly validateRequestBody: boolean;
```

- *Type:* `boolean`

---

##### `validateRequestParameters`<sup>Required</sup> <a name="@alma-cdk/openapix.Validator.property.validateRequestParameters" id="almacdkopenapixvalidatorpropertyvalidaterequestparameters"></a>

```typescript
public readonly validateRequestParameters: boolean;
```

- *Type:* `boolean`

---

##### `default`<sup>Optional</sup> <a name="@alma-cdk/openapix.Validator.property.default" id="almacdkopenapixvalidatorpropertydefault"></a>

```typescript
public readonly default: boolean;
```

- *Type:* `boolean`

---

### ValidatorConfig <a name="@alma-cdk/openapix.ValidatorConfig" id="almacdkopenapixvalidatorconfig"></a>

Method integration validator configuration.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ValidatorConfig } from '@alma-cdk/openapix'

const validatorConfig: ValidatorConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`validator`](#almacdkopenapixvalidatorconfigpropertyvalidator) | `string` | Validator identifier for method integration. This will override the default validator if one configured. |

---

##### `validator`<sup>Optional</sup> <a name="@alma-cdk/openapix.ValidatorConfig.property.validator" id="almacdkopenapixvalidatorconfigpropertyvalidator"></a>

```typescript
public readonly validator: string;
```

- *Type:* `string`

Validator identifier for method integration. This will override the default validator if one configured.

Should match a key from OpenApi schema `components.securitySchemas`.

---

### XAmazonApigatewayAuthorizer <a name="@alma-cdk/openapix.XAmazonApigatewayAuthorizer" id="almacdkopenapixxamazonapigatewayauthorizer"></a>

Describes the `x-amazon-apigateway-authorizer` value.

> https://awslabs.github.io/smithy/1.0/spec/aws/amazon-apigateway.html

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { XAmazonApigatewayAuthorizer } from '@alma-cdk/openapix'

const xAmazonApigatewayAuthorizer: XAmazonApigatewayAuthorizer = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`type`](#almacdkopenapixxamazonapigatewayauthorizerpropertytype)<span title="Required">*</span> | `string` | The type of the authorizer. This is a required property. |
| [`authorizerCredentials`](#almacdkopenapixxamazonapigatewayauthorizerpropertyauthorizercredentials) | `string` | The credentials required for invoking the authorizer, if any, in the form of an ARN of an IAM execution role. |
| [`authorizerResultTtlInSeconds`](#almacdkopenapixxamazonapigatewayauthorizerpropertyauthorizerresultttlinseconds) | `number` | The number of seconds during which authorizer result is cached. |
| [`authorizerUri`](#almacdkopenapixxamazonapigatewayauthorizerpropertyauthorizeruri) | `string` | The Uniform Resource Identifier (URI) of the authorizer Lambda function. |
| [`identitySource`](#almacdkopenapixxamazonapigatewayauthorizerpropertyidentitysource) | `string` | A comma-separated list of mapping expressions of the request parameters as the identity source. |
| [`identityValidationExpression`](#almacdkopenapixxamazonapigatewayauthorizerpropertyidentityvalidationexpression) | `string` | A regular expression for validating the token as the incoming identity. |
| [`providerARNs`](#almacdkopenapixxamazonapigatewayauthorizerpropertyproviderarns) | `string`[] | List of Cognito User Pool ARNs. |

---

##### `type`<sup>Required</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.type" id="almacdkopenapixxamazonapigatewayauthorizerpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

The type of the authorizer. This is a required property.

For REST APIs, specify `token` for an authorizer with the caller identity embedded in an authorization token. Specify `request` for an authorizer with the caller identity contained in request parameters.

---

##### `authorizerCredentials`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.authorizerCredentials" id="almacdkopenapixxamazonapigatewayauthorizerpropertyauthorizercredentials"></a>

```typescript
public readonly authorizerCredentials: string;
```

- *Type:* `string`

The credentials required for invoking the authorizer, if any, in the form of an ARN of an IAM execution role.

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.authorizerResultTtlInSeconds" id="almacdkopenapixxamazonapigatewayauthorizerpropertyauthorizerresultttlinseconds"></a>

```typescript
public readonly authorizerResultTtlInSeconds: number;
```

- *Type:* `number`

The number of seconds during which authorizer result is cached.

---

##### `authorizerUri`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.authorizerUri" id="almacdkopenapixxamazonapigatewayauthorizerpropertyauthorizeruri"></a>

```typescript
public readonly authorizerUri: string;
```

- *Type:* `string`

The Uniform Resource Identifier (URI) of the authorizer Lambda function.

---

##### `identitySource`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.identitySource" id="almacdkopenapixxamazonapigatewayauthorizerpropertyidentitysource"></a>

```typescript
public readonly identitySource: string;
```

- *Type:* `string`

A comma-separated list of mapping expressions of the request parameters as the identity source.

Applicable for the authorizer of the `request` and `jwt` type only.

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.identityValidationExpression" id="almacdkopenapixxamazonapigatewayauthorizerpropertyidentityvalidationexpression"></a>

```typescript
public readonly identityValidationExpression: string;
```

- *Type:* `string`

A regular expression for validating the token as the incoming identity.

---

##### `providerARNs`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.providerARNs" id="almacdkopenapixxamazonapigatewayauthorizerpropertyproviderarns"></a>

```typescript
public readonly providerARNs: string[];
```

- *Type:* `string`[]

List of Cognito User Pool ARNs.

Applicable for the authorizer of the `cognito_user_pools` type only.

---

### XAmazonApigatewayIntegration <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration" id="almacdkopenapixxamazonapigatewayintegration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { XAmazonApigatewayIntegration } from '@alma-cdk/openapix'

const xAmazonApigatewayIntegration: XAmazonApigatewayIntegration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`httpMethod`](#almacdkopenapixxamazonapigatewayintegrationpropertyhttpmethod)<span title="Required">*</span> | `string` | *No description.* |
| [`type`](#almacdkopenapixxamazonapigatewayintegrationpropertytype)<span title="Required">*</span> | [`aws-cdk-lib.aws_apigateway.IntegrationType`](#aws-cdk-lib.aws_apigateway.IntegrationType) | *No description.* |
| [`uri`](#almacdkopenapixxamazonapigatewayintegrationpropertyuri)<span title="Required">*</span> | `string` | *No description.* |
| [`cacheKeyParameters`](#almacdkopenapixxamazonapigatewayintegrationpropertycachekeyparameters) | `any`[] | *No description.* |
| [`cacheNamespace`](#almacdkopenapixxamazonapigatewayintegrationpropertycachenamespace) | `string` | *No description.* |
| [`credentials`](#almacdkopenapixxamazonapigatewayintegrationpropertycredentials) | `string` | *No description.* |
| [`passthroughBehavior`](#almacdkopenapixxamazonapigatewayintegrationpropertypassthroughbehavior) | [`aws-cdk-lib.aws_apigateway.PassthroughBehavior`](#aws-cdk-lib.aws_apigateway.PassthroughBehavior) | *No description.* |
| [`requestParameters`](#almacdkopenapixxamazonapigatewayintegrationpropertyrequestparameters) | {[ key: string ]: `string`} | *No description.* |
| [`requestTemplates`](#almacdkopenapixxamazonapigatewayintegrationpropertyrequesttemplates) | {[ key: string ]: `string`} | *No description.* |
| [`responses`](#almacdkopenapixxamazonapigatewayintegrationpropertyresponses) | {[ key: string ]: [`@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse`](#@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse)} | *No description.* |

---

##### `httpMethod`<sup>Required</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.httpMethod" id="almacdkopenapixxamazonapigatewayintegrationpropertyhttpmethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.type" id="almacdkopenapixxamazonapigatewayintegrationpropertytype"></a>

```typescript
public readonly type: IntegrationType;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.IntegrationType`](#aws-cdk-lib.aws_apigateway.IntegrationType)

---

##### `uri`<sup>Required</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.uri" id="almacdkopenapixxamazonapigatewayintegrationpropertyuri"></a>

```typescript
public readonly uri: string;
```

- *Type:* `string`

---

##### `cacheKeyParameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.cacheKeyParameters" id="almacdkopenapixxamazonapigatewayintegrationpropertycachekeyparameters"></a>

```typescript
public readonly cacheKeyParameters: any[];
```

- *Type:* `any`[]

---

##### `cacheNamespace`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.cacheNamespace" id="almacdkopenapixxamazonapigatewayintegrationpropertycachenamespace"></a>

```typescript
public readonly cacheNamespace: string;
```

- *Type:* `string`

---

##### `credentials`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.credentials" id="almacdkopenapixxamazonapigatewayintegrationpropertycredentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* `string`

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.passthroughBehavior" id="almacdkopenapixxamazonapigatewayintegrationpropertypassthroughbehavior"></a>

```typescript
public readonly passthroughBehavior: PassthroughBehavior;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.PassthroughBehavior`](#aws-cdk-lib.aws_apigateway.PassthroughBehavior)

---

##### `requestParameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.requestParameters" id="almacdkopenapixxamazonapigatewayintegrationpropertyrequestparameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.requestTemplates" id="almacdkopenapixxamazonapigatewayintegrationpropertyrequesttemplates"></a>

```typescript
public readonly requestTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `responses`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.responses" id="almacdkopenapixxamazonapigatewayintegrationpropertyresponses"></a>

```typescript
public readonly responses: {[ key: string ]: XAmazonApigatewayIntegrationResponse};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse`](#@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse)}

---

### XAmazonApigatewayIntegrationResponse <a name="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse" id="almacdkopenapixxamazonapigatewayintegrationresponse"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { XAmazonApigatewayIntegrationResponse } from '@alma-cdk/openapix'

const xAmazonApigatewayIntegrationResponse: XAmazonApigatewayIntegrationResponse = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`statusCode`](#almacdkopenapixxamazonapigatewayintegrationresponsepropertystatuscode)<span title="Required">*</span> | `string` | *No description.* |
| [`responseParameters`](#almacdkopenapixxamazonapigatewayintegrationresponsepropertyresponseparameters) | {[ key: string ]: `string`} | *No description.* |
| [`responseTemplates`](#almacdkopenapixxamazonapigatewayintegrationresponsepropertyresponsetemplates) | {[ key: string ]: `string`} | *No description.* |

---

##### `statusCode`<sup>Required</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse.property.statusCode" id="almacdkopenapixxamazonapigatewayintegrationresponsepropertystatuscode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* `string`

---

##### `responseParameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse.property.responseParameters" id="almacdkopenapixxamazonapigatewayintegrationresponsepropertyresponseparameters"></a>

```typescript
public readonly responseParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse.property.responseTemplates" id="almacdkopenapixxamazonapigatewayintegrationresponsepropertyresponsetemplates"></a>

```typescript
public readonly responseTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

### XAmazonApigatewayRequestValidator <a name="@alma-cdk/openapix.XAmazonApigatewayRequestValidator" id="almacdkopenapixxamazonapigatewayrequestvalidator"></a>

Request validator configuration.

> https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-request-validators.html

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { XAmazonApigatewayRequestValidator } from '@alma-cdk/openapix'

const xAmazonApigatewayRequestValidator: XAmazonApigatewayRequestValidator = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`validateRequestBody`](#almacdkopenapixxamazonapigatewayrequestvalidatorpropertyvalidaterequestbody)<span title="Required">*</span> | `boolean` | *No description.* |
| [`validateRequestParameters`](#almacdkopenapixxamazonapigatewayrequestvalidatorpropertyvalidaterequestparameters)<span title="Required">*</span> | `boolean` | *No description.* |

---

##### `validateRequestBody`<sup>Required</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayRequestValidator.property.validateRequestBody" id="almacdkopenapixxamazonapigatewayrequestvalidatorpropertyvalidaterequestbody"></a>

```typescript
public readonly validateRequestBody: boolean;
```

- *Type:* `boolean`

---

##### `validateRequestParameters`<sup>Required</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayRequestValidator.property.validateRequestParameters" id="almacdkopenapixxamazonapigatewayrequestvalidatorpropertyvalidaterequestparameters"></a>

```typescript
public readonly validateRequestParameters: boolean;
```

- *Type:* `boolean`

---

## Classes <a name="Classes" id="classes"></a>

### AwsIntegration <a name="@alma-cdk/openapix.AwsIntegration" id="almacdkopenapixawsintegration"></a>

Defines direct AWS service integration.

#### Initializers <a name="@alma-cdk/openapix.AwsIntegration.Initializer" id="almacdkopenapixawsintegrationinitializer"></a>

```typescript
import { AwsIntegration } from '@alma-cdk/openapix'

new AwsIntegration(scope: Construct, props: AwsIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#almacdkopenapixawsintegrationparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`props`](#almacdkopenapixawsintegrationparameterprops)<span title="Required">*</span> | [`@alma-cdk/openapix.AwsIntegrationProps`](#@alma-cdk/openapix.AwsIntegrationProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@alma-cdk/openapix.AwsIntegration.parameter.scope" id="almacdkopenapixawsintegrationparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `props`<sup>Required</sup> <a name="@alma-cdk/openapix.AwsIntegration.parameter.props" id="almacdkopenapixawsintegrationparameterprops"></a>

- *Type:* [`@alma-cdk/openapix.AwsIntegrationProps`](#@alma-cdk/openapix.AwsIntegrationProps)

---





### CorsIntegration <a name="@alma-cdk/openapix.CorsIntegration" id="almacdkopenapixcorsintegration"></a>

Defines `OPTIONS` integration used in Cross-Origin Resource Sharing (CORS).

> https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html#mapping-response-parameters

#### Initializers <a name="@alma-cdk/openapix.CorsIntegration.Initializer" id="almacdkopenapixcorsintegrationinitializer"></a>

```typescript
import { CorsIntegration } from '@alma-cdk/openapix'

new CorsIntegration(_: Construct, props: CorsIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`_`](#almacdkopenapixcorsintegrationparameter)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`props`](#almacdkopenapixcorsintegrationparameterprops)<span title="Required">*</span> | [`@alma-cdk/openapix.CorsIntegrationProps`](#@alma-cdk/openapix.CorsIntegrationProps) | *No description.* |

---

##### `_`<sup>Required</sup> <a name="@alma-cdk/openapix.CorsIntegration.parameter._" id="almacdkopenapixcorsintegrationparameter"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `props`<sup>Required</sup> <a name="@alma-cdk/openapix.CorsIntegration.parameter.props" id="almacdkopenapixcorsintegrationparameterprops"></a>

- *Type:* [`@alma-cdk/openapix.CorsIntegrationProps`](#@alma-cdk/openapix.CorsIntegrationProps)

---





### HttpIntegration <a name="@alma-cdk/openapix.HttpIntegration" id="almacdkopenapixhttpintegration"></a>

Defines a HTTP(S) integration.

#### Initializers <a name="@alma-cdk/openapix.HttpIntegration.Initializer" id="almacdkopenapixhttpintegrationinitializer"></a>

```typescript
import { HttpIntegration } from '@alma-cdk/openapix'

new HttpIntegration(_: Construct, url: string, props?: HttpIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`_`](#almacdkopenapixhttpintegrationparameter)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`url`](#almacdkopenapixhttpintegrationparameterurl)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#almacdkopenapixhttpintegrationparameterprops) | [`@alma-cdk/openapix.HttpIntegrationProps`](#@alma-cdk/openapix.HttpIntegrationProps) | *No description.* |

---

##### `_`<sup>Required</sup> <a name="@alma-cdk/openapix.HttpIntegration.parameter._" id="almacdkopenapixhttpintegrationparameter"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `url`<sup>Required</sup> <a name="@alma-cdk/openapix.HttpIntegration.parameter.url" id="almacdkopenapixhttpintegrationparameterurl"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="@alma-cdk/openapix.HttpIntegration.parameter.props" id="almacdkopenapixhttpintegrationparameterprops"></a>

- *Type:* [`@alma-cdk/openapix.HttpIntegrationProps`](#@alma-cdk/openapix.HttpIntegrationProps)

---





### Integration <a name="@alma-cdk/openapix.Integration" id="almacdkopenapixintegration"></a>

- *Implements:* [`@alma-cdk/openapix.IBaseIntegration`](#@alma-cdk/openapix.IBaseIntegration)

Essentially responsible for converting CDK `IntegrationProps` into API Gateway OpenApi integration extension ()`XAmazonApigatewayIntegration`).

Also defines few basic methods (`getIntegration` & `getValidatorId`) used by derivative classes.

#### Initializers <a name="@alma-cdk/openapix.Integration.Initializer" id="almacdkopenapixintegrationinitializer"></a>

```typescript
import { Integration } from '@alma-cdk/openapix'

new Integration(props: IntegrationProps, config: IntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`props`](#almacdkopenapixintegrationparameterprops)<span title="Required">*</span> | [`aws-cdk-lib.aws_apigateway.IntegrationProps`](#aws-cdk-lib.aws_apigateway.IntegrationProps) | *No description.* |
| [`config`](#almacdkopenapixintegrationparameterconfig)<span title="Required">*</span> | [`@alma-cdk/openapix.IntegrationConfig`](#@alma-cdk/openapix.IntegrationConfig) | *No description.* |

---

##### `props`<sup>Required</sup> <a name="@alma-cdk/openapix.Integration.parameter.props" id="almacdkopenapixintegrationparameterprops"></a>

- *Type:* [`aws-cdk-lib.aws_apigateway.IntegrationProps`](#aws-cdk-lib.aws_apigateway.IntegrationProps)

---

##### `config`<sup>Required</sup> <a name="@alma-cdk/openapix.Integration.parameter.config" id="almacdkopenapixintegrationparameterconfig"></a>

- *Type:* [`@alma-cdk/openapix.IntegrationConfig`](#@alma-cdk/openapix.IntegrationConfig)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`type`](#almacdkopenapixintegrationpropertytype)<span title="Required">*</span> | [`@alma-cdk/openapix.InternalIntegrationType`](#@alma-cdk/openapix.InternalIntegrationType) | Identifier to enable internal type checks. |
| [`xAmazonApigatwayIntegration`](#almacdkopenapixintegrationpropertyxamazonapigatwayintegration)<span title="Required">*</span> | [`@alma-cdk/openapix.XAmazonApigatewayIntegration`](#@alma-cdk/openapix.XAmazonApigatewayIntegration) | *No description.* |
| [`validator`](#almacdkopenapixintegrationpropertyvalidator) | `string` | *No description.* |

---

##### `type`<sup>Required</sup> <a name="@alma-cdk/openapix.Integration.property.type" id="almacdkopenapixintegrationpropertytype"></a>

```typescript
public readonly type: InternalIntegrationType;
```

- *Type:* [`@alma-cdk/openapix.InternalIntegrationType`](#@alma-cdk/openapix.InternalIntegrationType)

Identifier to enable internal type checks.

---

##### `xAmazonApigatwayIntegration`<sup>Required</sup> <a name="@alma-cdk/openapix.Integration.property.xAmazonApigatwayIntegration" id="almacdkopenapixintegrationpropertyxamazonapigatwayintegration"></a>

```typescript
public readonly xAmazonApigatwayIntegration: XAmazonApigatewayIntegration;
```

- *Type:* [`@alma-cdk/openapix.XAmazonApigatewayIntegration`](#@alma-cdk/openapix.XAmazonApigatewayIntegration)

---

##### `validator`<sup>Optional</sup> <a name="@alma-cdk/openapix.Integration.property.validator" id="almacdkopenapixintegrationpropertyvalidator"></a>

```typescript
public readonly validator: string;
```

- *Type:* `string`

---


### LambdaIntegration <a name="@alma-cdk/openapix.LambdaIntegration" id="almacdkopenapixlambdaintegration"></a>

Defines an AWS Lambda integration.

#### Initializers <a name="@alma-cdk/openapix.LambdaIntegration.Initializer" id="almacdkopenapixlambdaintegrationinitializer"></a>

```typescript
import { LambdaIntegration } from '@alma-cdk/openapix'

new LambdaIntegration(scope: Construct, fn: IFunction, props?: LambdaIntegrationOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#almacdkopenapixlambdaintegrationparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`fn`](#almacdkopenapixlambdaintegrationparameterfn)<span title="Required">*</span> | [`aws-cdk-lib.aws_lambda.IFunction`](#aws-cdk-lib.aws_lambda.IFunction) | *No description.* |
| [`props`](#almacdkopenapixlambdaintegrationparameterprops) | [`@alma-cdk/openapix.LambdaIntegrationOptions`](#@alma-cdk/openapix.LambdaIntegrationOptions) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@alma-cdk/openapix.LambdaIntegration.parameter.scope" id="almacdkopenapixlambdaintegrationparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `fn`<sup>Required</sup> <a name="@alma-cdk/openapix.LambdaIntegration.parameter.fn" id="almacdkopenapixlambdaintegrationparameterfn"></a>

- *Type:* [`aws-cdk-lib.aws_lambda.IFunction`](#aws-cdk-lib.aws_lambda.IFunction)

---

##### `props`<sup>Optional</sup> <a name="@alma-cdk/openapix.LambdaIntegration.parameter.props" id="almacdkopenapixlambdaintegrationparameterprops"></a>

- *Type:* [`@alma-cdk/openapix.LambdaIntegrationOptions`](#@alma-cdk/openapix.LambdaIntegrationOptions)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`grantFunctionInvoke`](#almacdkopenapixlambdaintegrationgrantfunctioninvoke) | Allow Lambda invoke action to be performed by given identity. |

---

##### `grantFunctionInvoke` <a name="@alma-cdk/openapix.LambdaIntegration.grantFunctionInvoke" id="almacdkopenapixlambdaintegrationgrantfunctioninvoke"></a>

```typescript
public grantFunctionInvoke(identity: IGrantable)
```

###### `identity`<sup>Required</sup> <a name="@alma-cdk/openapix.LambdaIntegration.parameter.identity" id="almacdkopenapixlambdaintegrationparameteridentity"></a>

- *Type:* [`aws-cdk-lib.aws_iam.IGrantable`](#aws-cdk-lib.aws_iam.IGrantable)

---




### MockIntegration <a name="@alma-cdk/openapix.MockIntegration" id="almacdkopenapixmockintegration"></a>

Defines Mock integration.

#### Initializers <a name="@alma-cdk/openapix.MockIntegration.Initializer" id="almacdkopenapixmockintegrationinitializer"></a>

```typescript
import { MockIntegration } from '@alma-cdk/openapix'

new MockIntegration(_: Construct, props?: MockIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`_`](#almacdkopenapixmockintegrationparameter)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`props`](#almacdkopenapixmockintegrationparameterprops) | [`@alma-cdk/openapix.MockIntegrationProps`](#@alma-cdk/openapix.MockIntegrationProps) | *No description.* |

---

##### `_`<sup>Required</sup> <a name="@alma-cdk/openapix.MockIntegration.parameter._" id="almacdkopenapixmockintegrationparameter"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `props`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegration.parameter.props" id="almacdkopenapixmockintegrationparameterprops"></a>

- *Type:* [`@alma-cdk/openapix.MockIntegrationProps`](#@alma-cdk/openapix.MockIntegrationProps)

---





### Schema <a name="@alma-cdk/openapix.Schema" id="almacdkopenapixschema"></a>

Represents an OpenApi v3 Schema which can be deserialized from YAML-file, modified and then serialized back to YAML.

#### Initializers <a name="@alma-cdk/openapix.Schema.Initializer" id="almacdkopenapixschemainitializer"></a>

```typescript
import { Schema } from '@alma-cdk/openapix'

new Schema(definition: ISchemaDefinition)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`definition`](#almacdkopenapixschemaparameterdefinition)<span title="Required">*</span> | [`@alma-cdk/openapix.ISchemaDefinition`](#@alma-cdk/openapix.ISchemaDefinition) | *No description.* |

---

##### `definition`<sup>Required</sup> <a name="@alma-cdk/openapix.Schema.parameter.definition" id="almacdkopenapixschemaparameterdefinition"></a>

- *Type:* [`@alma-cdk/openapix.ISchemaDefinition`](#@alma-cdk/openapix.ISchemaDefinition)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`get`](#almacdkopenapixschemaget) | Get a value from given object path. |
| [`has`](#almacdkopenapixschemahas) | Check if definition has a value in given object path. |
| [`inject`](#almacdkopenapixschemainject) | Inject multiple values to given paths. |
| [`reject`](#almacdkopenapixschemareject) | Reject – i.e. remove values – from given object paths. |
| [`rejectDeep`](#almacdkopenapixschemarejectdeep) | Reject deep within object – i.e. remove all nested object paths. |
| [`set`](#almacdkopenapixschemaset) | Set a value to given object path. |
| [`toYaml`](#almacdkopenapixschematoyaml) | Serialize to YAML string. |

---

##### `get` <a name="@alma-cdk/openapix.Schema.get" id="almacdkopenapixschemaget"></a>

```typescript
public get(path: string)
```

###### `path`<sup>Required</sup> <a name="@alma-cdk/openapix.Schema.parameter.path" id="almacdkopenapixschemaparameterpath"></a>

- *Type:* `string`

---

##### `has` <a name="@alma-cdk/openapix.Schema.has" id="almacdkopenapixschemahas"></a>

```typescript
public has(path: string)
```

###### `path`<sup>Required</sup> <a name="@alma-cdk/openapix.Schema.parameter.path" id="almacdkopenapixschemaparameterpath"></a>

- *Type:* `string`

---

##### `inject` <a name="@alma-cdk/openapix.Schema.inject" id="almacdkopenapixschemainject"></a>

```typescript
public inject(records: {[ key: string ]: any})
```

###### `records`<sup>Required</sup> <a name="@alma-cdk/openapix.Schema.parameter.records" id="almacdkopenapixschemaparameterrecords"></a>

- *Type:* {[ key: string ]: `any`}

---

##### `reject` <a name="@alma-cdk/openapix.Schema.reject" id="almacdkopenapixschemareject"></a>

```typescript
public reject(paths: string[])
```

###### `paths`<sup>Required</sup> <a name="@alma-cdk/openapix.Schema.parameter.paths" id="almacdkopenapixschemaparameterpaths"></a>

- *Type:* `string`[]

---

##### `rejectDeep` <a name="@alma-cdk/openapix.Schema.rejectDeep" id="almacdkopenapixschemarejectdeep"></a>

```typescript
public rejectDeep(paths: string[])
```

###### `paths`<sup>Required</sup> <a name="@alma-cdk/openapix.Schema.parameter.paths" id="almacdkopenapixschemaparameterpaths"></a>

- *Type:* `string`[]

---

##### `set` <a name="@alma-cdk/openapix.Schema.set" id="almacdkopenapixschemaset"></a>

```typescript
public set(path: string, value: any)
```

###### `path`<sup>Required</sup> <a name="@alma-cdk/openapix.Schema.parameter.path" id="almacdkopenapixschemaparameterpath"></a>

- *Type:* `string`

---

###### `value`<sup>Required</sup> <a name="@alma-cdk/openapix.Schema.parameter.value" id="almacdkopenapixschemaparametervalue"></a>

- *Type:* `any`

---

##### `toYaml` <a name="@alma-cdk/openapix.Schema.toYaml" id="almacdkopenapixschematoyaml"></a>

```typescript
public toYaml()
```

#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`fromAsset`](#almacdkopenapixschemafromasset) | Parse OpenApi v3 schema by loading a YAML file from given path. |
| [`fromInline`](#almacdkopenapixschemafrominline) | Parse OpenApi v3 schema from inline YAML content. |

---

##### `fromAsset` <a name="@alma-cdk/openapix.Schema.fromAsset" id="almacdkopenapixschemafromasset"></a>

```typescript
import { Schema } from '@alma-cdk/openapix'

Schema.fromAsset(path: string)
```

###### `path`<sup>Required</sup> <a name="@alma-cdk/openapix.Schema.parameter.path" id="almacdkopenapixschemaparameterpath"></a>

- *Type:* `string`

---

##### `fromInline` <a name="@alma-cdk/openapix.Schema.fromInline" id="almacdkopenapixschemafrominline"></a>

```typescript
import { Schema } from '@alma-cdk/openapix'

Schema.fromInline(content: string)
```

###### `content`<sup>Required</sup> <a name="@alma-cdk/openapix.Schema.parameter.content" id="almacdkopenapixschemaparametercontent"></a>

- *Type:* `string`

---



## Protocols <a name="Protocols" id="protocols"></a>

### IBaseIntegration <a name="@alma-cdk/openapix.IBaseIntegration" id="almacdkopenapixibaseintegration"></a>

- *Implemented By:* [`@alma-cdk/openapix.AwsIntegration`](#@alma-cdk/openapix.AwsIntegration), [`@alma-cdk/openapix.CorsIntegration`](#@alma-cdk/openapix.CorsIntegration), [`@alma-cdk/openapix.HttpIntegration`](#@alma-cdk/openapix.HttpIntegration), [`@alma-cdk/openapix.Integration`](#@alma-cdk/openapix.Integration), [`@alma-cdk/openapix.LambdaIntegration`](#@alma-cdk/openapix.LambdaIntegration), [`@alma-cdk/openapix.MockIntegration`](#@alma-cdk/openapix.MockIntegration), [`@alma-cdk/openapix.IBaseIntegration`](#@alma-cdk/openapix.IBaseIntegration)

Interface implemented by all integrations.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`type`](#almacdkopenapixibaseintegrationpropertytype)<span title="Required">*</span> | [`@alma-cdk/openapix.InternalIntegrationType`](#@alma-cdk/openapix.InternalIntegrationType) | Identifier to enable internal type checks. |
| [`xAmazonApigatwayIntegration`](#almacdkopenapixibaseintegrationpropertyxamazonapigatwayintegration)<span title="Required">*</span> | [`@alma-cdk/openapix.XAmazonApigatewayIntegration`](#@alma-cdk/openapix.XAmazonApigatewayIntegration) | *No description.* |
| [`validator`](#almacdkopenapixibaseintegrationpropertyvalidator) | `string` | *No description.* |

---

##### `type`<sup>Required</sup> <a name="@alma-cdk/openapix.IBaseIntegration.property.type" id="almacdkopenapixibaseintegrationpropertytype"></a>

```typescript
public readonly type: InternalIntegrationType;
```

- *Type:* [`@alma-cdk/openapix.InternalIntegrationType`](#@alma-cdk/openapix.InternalIntegrationType)

Identifier to enable internal type checks.

---

##### `xAmazonApigatwayIntegration`<sup>Required</sup> <a name="@alma-cdk/openapix.IBaseIntegration.property.xAmazonApigatwayIntegration" id="almacdkopenapixibaseintegrationpropertyxamazonapigatwayintegration"></a>

```typescript
public readonly xAmazonApigatwayIntegration: XAmazonApigatewayIntegration;
```

- *Type:* [`@alma-cdk/openapix.XAmazonApigatewayIntegration`](#@alma-cdk/openapix.XAmazonApigatewayIntegration)

---

##### `validator`<sup>Optional</sup> <a name="@alma-cdk/openapix.IBaseIntegration.property.validator" id="almacdkopenapixibaseintegrationpropertyvalidator"></a>

```typescript
public readonly validator: string;
```

- *Type:* `string`

---

### IContactObject <a name="@alma-cdk/openapix.IContactObject" id="almacdkopenapixicontactobject"></a>

- *Implemented By:* [`@alma-cdk/openapix.IContactObject`](#@alma-cdk/openapix.IContactObject)

The contact information for the exposed API.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`email`](#almacdkopenapixicontactobjectpropertyemail) | `string` | The email address of the contact person/organization. |
| [`name`](#almacdkopenapixicontactobjectpropertyname) | `string` | The identifying name of the contact person/organization. |
| [`url`](#almacdkopenapixicontactobjectpropertyurl) | `string` | The URL pointing to the contact information. |

---

##### `email`<sup>Optional</sup> <a name="@alma-cdk/openapix.IContactObject.property.email" id="almacdkopenapixicontactobjectpropertyemail"></a>

```typescript
public readonly email: string;
```

- *Type:* `string`

The email address of the contact person/organization.

MUST be in the format of an email address.

---

##### `name`<sup>Optional</sup> <a name="@alma-cdk/openapix.IContactObject.property.name" id="almacdkopenapixicontactobjectpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The identifying name of the contact person/organization.

---

##### `url`<sup>Optional</sup> <a name="@alma-cdk/openapix.IContactObject.property.url" id="almacdkopenapixicontactobjectpropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

The URL pointing to the contact information.

MUST be in the format of a URL.

---

### IInfoObject <a name="@alma-cdk/openapix.IInfoObject" id="almacdkopenapixiinfoobject"></a>

- *Implemented By:* [`@alma-cdk/openapix.IInfoObject`](#@alma-cdk/openapix.IInfoObject)

OpenApi info object.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`title`](#almacdkopenapixiinfoobjectpropertytitle)<span title="Required">*</span> | `string` | The title of the API. |
| [`version`](#almacdkopenapixiinfoobjectpropertyversion)<span title="Required">*</span> | `string` | The version of the OpenAPI document (which is distinct from the OpenAPI Specification version or the API implementation version). |
| [`contact`](#almacdkopenapixiinfoobjectpropertycontact) | [`@alma-cdk/openapix.IContactObject`](#@alma-cdk/openapix.IContactObject) | The contact information for the exposed API. |
| [`description`](#almacdkopenapixiinfoobjectpropertydescription) | `string` | A short description of the API. |
| [`license`](#almacdkopenapixiinfoobjectpropertylicense) | [`@alma-cdk/openapix.ILicenseObject`](#@alma-cdk/openapix.ILicenseObject) | The license information for the exposed API. |
| [`termsOfService`](#almacdkopenapixiinfoobjectpropertytermsofservice) | `string` | A URL to the Terms of Service for the API. |

---

##### `title`<sup>Required</sup> <a name="@alma-cdk/openapix.IInfoObject.property.title" id="almacdkopenapixiinfoobjectpropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

The title of the API.

---

##### `version`<sup>Required</sup> <a name="@alma-cdk/openapix.IInfoObject.property.version" id="almacdkopenapixiinfoobjectpropertyversion"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

The version of the OpenAPI document (which is distinct from the OpenAPI Specification version or the API implementation version).

---

##### `contact`<sup>Optional</sup> <a name="@alma-cdk/openapix.IInfoObject.property.contact" id="almacdkopenapixiinfoobjectpropertycontact"></a>

```typescript
public readonly contact: IContactObject;
```

- *Type:* [`@alma-cdk/openapix.IContactObject`](#@alma-cdk/openapix.IContactObject)

The contact information for the exposed API.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.IInfoObject.property.description" id="almacdkopenapixiinfoobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A short description of the API.

CommonMark syntax MAY be used for rich text representation.

---

##### `license`<sup>Optional</sup> <a name="@alma-cdk/openapix.IInfoObject.property.license" id="almacdkopenapixiinfoobjectpropertylicense"></a>

```typescript
public readonly license: ILicenseObject;
```

- *Type:* [`@alma-cdk/openapix.ILicenseObject`](#@alma-cdk/openapix.ILicenseObject)

The license information for the exposed API.

---

##### `termsOfService`<sup>Optional</sup> <a name="@alma-cdk/openapix.IInfoObject.property.termsOfService" id="almacdkopenapixiinfoobjectpropertytermsofservice"></a>

```typescript
public readonly termsOfService: string;
```

- *Type:* `string`

A URL to the Terms of Service for the API.

MUST be in the format of a URL.

---

### ILicenseObject <a name="@alma-cdk/openapix.ILicenseObject" id="almacdkopenapixilicenseobject"></a>

- *Implemented By:* [`@alma-cdk/openapix.ILicenseObject`](#@alma-cdk/openapix.ILicenseObject)

The license information for the exposed API.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`name`](#almacdkopenapixilicenseobjectpropertyname)<span title="Required">*</span> | `string` | The license name used for the API. |
| [`url`](#almacdkopenapixilicenseobjectpropertyurl) | `string` | A URL to the license used for the API. |

---

##### `name`<sup>Required</sup> <a name="@alma-cdk/openapix.ILicenseObject.property.name" id="almacdkopenapixilicenseobjectpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The license name used for the API.

---

##### `url`<sup>Optional</sup> <a name="@alma-cdk/openapix.ILicenseObject.property.url" id="almacdkopenapixilicenseobjectpropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

A URL to the license used for the API.

MUST be in the format of a URL.

---

### ISchemaDefinition <a name="@alma-cdk/openapix.ISchemaDefinition" id="almacdkopenapixischemadefinition"></a>

- *Implemented By:* [`@alma-cdk/openapix.ISchemaDefinition`](#@alma-cdk/openapix.ISchemaDefinition)


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`openapi`](#almacdkopenapixischemadefinitionpropertyopenapi)<span title="Required">*</span> | `string` | OpenApi specification version used. |
| [`components`](#almacdkopenapixischemadefinitionpropertycomponents) | {[ key: string ]: `any`} | OpenApi component definitions. |
| [`info`](#almacdkopenapixischemadefinitionpropertyinfo) | [`@alma-cdk/openapix.IInfoObject`](#@alma-cdk/openapix.IInfoObject) | OpenApi info object. |
| [`paths`](#almacdkopenapixischemadefinitionpropertypaths) | {[ key: string ]: `any`} | API paths with their respective configurations. |

---

##### `openapi`<sup>Required</sup> <a name="@alma-cdk/openapix.ISchemaDefinition.property.openapi" id="almacdkopenapixischemadefinitionpropertyopenapi"></a>

```typescript
public readonly openapi: string;
```

- *Type:* `string`

OpenApi specification version used.

Only major version `3` currently supported.

---

##### `components`<sup>Optional</sup> <a name="@alma-cdk/openapix.ISchemaDefinition.property.components" id="almacdkopenapixischemadefinitionpropertycomponents"></a>

```typescript
public readonly components: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

OpenApi component definitions.

---

##### `info`<sup>Optional</sup> <a name="@alma-cdk/openapix.ISchemaDefinition.property.info" id="almacdkopenapixischemadefinitionpropertyinfo"></a>

```typescript
public readonly info: IInfoObject;
```

- *Type:* [`@alma-cdk/openapix.IInfoObject`](#@alma-cdk/openapix.IInfoObject)

OpenApi info object.

---

##### `paths`<sup>Optional</sup> <a name="@alma-cdk/openapix.ISchemaDefinition.property.paths" id="almacdkopenapixischemadefinitionpropertypaths"></a>

```typescript
public readonly paths: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

API paths with their respective configurations.

---

## Enums <a name="Enums" id="enums"></a>

### InternalIntegrationType <a name="InternalIntegrationType" id="internalintegrationtype"></a>

| **Name** | **Description** |
| --- | --- |
| [`AWS`](#almacdkopenapixinternalintegrationtypeaws) | *No description.* |
| [`CORS`](#almacdkopenapixinternalintegrationtypecors) | *No description.* |
| [`HTTP`](#almacdkopenapixinternalintegrationtypehttp) | *No description.* |
| [`LAMBDA`](#almacdkopenapixinternalintegrationtypelambda) | *No description.* |
| [`MOCK`](#almacdkopenapixinternalintegrationtypemock) | *No description.* |

---

#### `AWS` <a name="@alma-cdk/openapix.InternalIntegrationType.AWS" id="almacdkopenapixinternalintegrationtypeaws"></a>

---


#### `CORS` <a name="@alma-cdk/openapix.InternalIntegrationType.CORS" id="almacdkopenapixinternalintegrationtypecors"></a>

---


#### `HTTP` <a name="@alma-cdk/openapix.InternalIntegrationType.HTTP" id="almacdkopenapixinternalintegrationtypehttp"></a>

---


#### `LAMBDA` <a name="@alma-cdk/openapix.InternalIntegrationType.LAMBDA" id="almacdkopenapixinternalintegrationtypelambda"></a>

---


#### `MOCK` <a name="@alma-cdk/openapix.InternalIntegrationType.MOCK" id="almacdkopenapixinternalintegrationtypemock"></a>

---

