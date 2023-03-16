# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### Api <a name="@alma-cdk/openapix.Api" id="almacdkopenapixapi"></a>

AWS API Gateway REST API defined with OpenApi v3 schema.

#### Initializers <a name="@alma-cdk/openapix.Api.Initializer" id="almacdkopenapixapiinitializer"></a>

```typescript
import { Api } from '@alma-cdk/openapix'

new Api(scope: Construct, id: string, props: ApiProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#almacdkopenapixapiparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#almacdkopenapixapiparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#almacdkopenapixapiparameterprops)<span title="Required">*</span> | [`@alma-cdk/openapix.ApiProps`](#@alma-cdk/openapix.ApiProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@alma-cdk/openapix.Api.parameter.scope" id="almacdkopenapixapiparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@alma-cdk/openapix.Api.parameter.id" id="almacdkopenapixapiparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@alma-cdk/openapix.Api.parameter.props" id="almacdkopenapixapiparameterprops"></a>

- *Type:* [`@alma-cdk/openapix.ApiProps`](#@alma-cdk/openapix.ApiProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`document`](#almacdkopenapixapipropertydocument)<span title="Required">*</span> | [`@alma-cdk/openapix.IDocument`](#@alma-cdk/openapix.IDocument) | The final OpenApi v3 document used to generate the AWS API Gateway. |

---

##### `document`<sup>Required</sup> <a name="@alma-cdk/openapix.Api.property.document" id="almacdkopenapixapipropertydocument"></a>

```typescript
public readonly document: IDocument;
```

- *Type:* [`@alma-cdk/openapix.IDocument`](#@alma-cdk/openapix.IDocument)

The final OpenApi v3 document used to generate the AWS API Gateway.

---


### CognitoUserPoolsAuthorizer <a name="@alma-cdk/openapix.CognitoUserPoolsAuthorizer" id="almacdkopenapixcognitouserpoolsauthorizer"></a>

#### Initializers <a name="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.Initializer" id="almacdkopenapixcognitouserpoolsauthorizerinitializer"></a>

```typescript
import { CognitoUserPoolsAuthorizer } from '@alma-cdk/openapix'

new CognitoUserPoolsAuthorizer(scope: Construct, id: string, props: CognitoUserPoolsAuthorizerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#almacdkopenapixcognitouserpoolsauthorizerparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#almacdkopenapixcognitouserpoolsauthorizerparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#almacdkopenapixcognitouserpoolsauthorizerparameterprops)<span title="Required">*</span> | [`@alma-cdk/openapix.CognitoUserPoolsAuthorizerProps`](#@alma-cdk/openapix.CognitoUserPoolsAuthorizerProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.parameter.scope" id="almacdkopenapixcognitouserpoolsauthorizerparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.parameter.id" id="almacdkopenapixcognitouserpoolsauthorizerparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.parameter.props" id="almacdkopenapixcognitouserpoolsauthorizerparameterprops"></a>

- *Type:* [`@alma-cdk/openapix.CognitoUserPoolsAuthorizerProps`](#@alma-cdk/openapix.CognitoUserPoolsAuthorizerProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#almacdkopenapixcognitouserpoolsauthorizerpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`xAmazonApigatewayAuthorizer`](#almacdkopenapixcognitouserpoolsauthorizerpropertyxamazonapigatewayauthorizer)<span title="Required">*</span> | [`@alma-cdk/openapix.XAmazonApigatewayAuthorizer`](#@alma-cdk/openapix.XAmazonApigatewayAuthorizer) | *No description.* |
| [`xAmazonApigatewayAuthtype`](#almacdkopenapixcognitouserpoolsauthorizerpropertyxamazonapigatewayauthtype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.property.id" id="almacdkopenapixcognitouserpoolsauthorizerpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `xAmazonApigatewayAuthorizer`<sup>Required</sup> <a name="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.property.xAmazonApigatewayAuthorizer" id="almacdkopenapixcognitouserpoolsauthorizerpropertyxamazonapigatewayauthorizer"></a>

```typescript
public readonly xAmazonApigatewayAuthorizer: XAmazonApigatewayAuthorizer;
```

- *Type:* [`@alma-cdk/openapix.XAmazonApigatewayAuthorizer`](#@alma-cdk/openapix.XAmazonApigatewayAuthorizer)

---

##### `xAmazonApigatewayAuthtype`<sup>Required</sup> <a name="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.property.xAmazonApigatewayAuthtype" id="almacdkopenapixcognitouserpoolsauthorizerpropertyxamazonapigatewayauthtype"></a>

```typescript
public readonly xAmazonApigatewayAuthtype: string;
```

- *Type:* `string`

---


### LambdaAuthorizer <a name="@alma-cdk/openapix.LambdaAuthorizer" id="almacdkopenapixlambdaauthorizer"></a>

#### Initializers <a name="@alma-cdk/openapix.LambdaAuthorizer.Initializer" id="almacdkopenapixlambdaauthorizerinitializer"></a>

```typescript
import { LambdaAuthorizer } from '@alma-cdk/openapix'

new LambdaAuthorizer(scope: Construct, id: string, props: LambdaAuthorizerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#almacdkopenapixlambdaauthorizerparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#almacdkopenapixlambdaauthorizerparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#almacdkopenapixlambdaauthorizerparameterprops)<span title="Required">*</span> | [`@alma-cdk/openapix.LambdaAuthorizerProps`](#@alma-cdk/openapix.LambdaAuthorizerProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@alma-cdk/openapix.LambdaAuthorizer.parameter.scope" id="almacdkopenapixlambdaauthorizerparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@alma-cdk/openapix.LambdaAuthorizer.parameter.id" id="almacdkopenapixlambdaauthorizerparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@alma-cdk/openapix.LambdaAuthorizer.parameter.props" id="almacdkopenapixlambdaauthorizerparameterprops"></a>

- *Type:* [`@alma-cdk/openapix.LambdaAuthorizerProps`](#@alma-cdk/openapix.LambdaAuthorizerProps)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`grantFunctionInvoke`](#almacdkopenapixlambdaauthorizergrantfunctioninvoke) | Allow Lambda invoke action to be performed by given identity. |

---

##### `grantFunctionInvoke` <a name="@alma-cdk/openapix.LambdaAuthorizer.grantFunctionInvoke" id="almacdkopenapixlambdaauthorizergrantfunctioninvoke"></a>

```typescript
public grantFunctionInvoke(api: IRestApi)
```

###### `api`<sup>Required</sup> <a name="@alma-cdk/openapix.LambdaAuthorizer.parameter.api" id="almacdkopenapixlambdaauthorizerparameterapi"></a>

- *Type:* [`aws-cdk-lib.aws_apigateway.IRestApi`](#aws-cdk-lib.aws_apigateway.IRestApi)

---


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`fn`](#almacdkopenapixlambdaauthorizerpropertyfn)<span title="Required">*</span> | [`aws-cdk-lib.aws_lambda.IFunction`](#aws-cdk-lib.aws_lambda.IFunction) | *No description.* |
| [`id`](#almacdkopenapixlambdaauthorizerpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`xAmazonApigatewayAuthorizer`](#almacdkopenapixlambdaauthorizerpropertyxamazonapigatewayauthorizer)<span title="Required">*</span> | [`@alma-cdk/openapix.XAmazonApigatewayAuthorizer`](#@alma-cdk/openapix.XAmazonApigatewayAuthorizer) | *No description.* |
| [`xAmazonApigatewayAuthtype`](#almacdkopenapixlambdaauthorizerpropertyxamazonapigatewayauthtype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `fn`<sup>Required</sup> <a name="@alma-cdk/openapix.LambdaAuthorizer.property.fn" id="almacdkopenapixlambdaauthorizerpropertyfn"></a>

```typescript
public readonly fn: IFunction;
```

- *Type:* [`aws-cdk-lib.aws_lambda.IFunction`](#aws-cdk-lib.aws_lambda.IFunction)

---

##### `id`<sup>Required</sup> <a name="@alma-cdk/openapix.LambdaAuthorizer.property.id" id="almacdkopenapixlambdaauthorizerpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `xAmazonApigatewayAuthorizer`<sup>Required</sup> <a name="@alma-cdk/openapix.LambdaAuthorizer.property.xAmazonApigatewayAuthorizer" id="almacdkopenapixlambdaauthorizerpropertyxamazonapigatewayauthorizer"></a>

```typescript
public readonly xAmazonApigatewayAuthorizer: XAmazonApigatewayAuthorizer;
```

- *Type:* [`@alma-cdk/openapix.XAmazonApigatewayAuthorizer`](#@alma-cdk/openapix.XAmazonApigatewayAuthorizer)

---

##### `xAmazonApigatewayAuthtype`<sup>Required</sup> <a name="@alma-cdk/openapix.LambdaAuthorizer.property.xAmazonApigatewayAuthtype" id="almacdkopenapixlambdaauthorizerpropertyxamazonapigatewayauthtype"></a>

```typescript
public readonly xAmazonApigatewayAuthtype: string;
```

- *Type:* `string`

---


## Structs <a name="Structs" id="structs"></a>

### ApiBaseProps <a name="@alma-cdk/openapix.ApiBaseProps" id="almacdkopenapixapibaseprops"></a>

BaseProps for the `Api` construct without `RestApiProps`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ApiBaseProps } from '@alma-cdk/openapix'

const apiBaseProps: ApiBaseProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`source`](#almacdkopenapixapibasepropspropertysource)<span title="Required">*</span> | `string` \| [`@alma-cdk/openapix.Schema`](#@alma-cdk/openapix.Schema) | OpenApi Schema Definition source configuration. |
| [`authorizers`](#almacdkopenapixapibasepropspropertyauthorizers) | [`@alma-cdk/openapix.AuthorizerConfig`](#@alma-cdk/openapix.AuthorizerConfig)[] | Cognito User Pool or Custom Lambda based Authorizer configurations. |
| [`defaultCors`](#almacdkopenapixapibasepropspropertydefaultcors) | [`@alma-cdk/openapix.CorsIntegration`](#@alma-cdk/openapix.CorsIntegration) | Default CORS configuration. Applied to all path integrations. |
| [`defaultIntegration`](#almacdkopenapixapibasepropspropertydefaultintegration) | [`@alma-cdk/openapix.Integration`](#@alma-cdk/openapix.Integration) | Add a default integration for paths without explicitly defined integrations. |
| [`injections`](#almacdkopenapixapibasepropspropertyinjections) | {[ key: string ]: `any`} | Inject any OpenApi v3 data to given schema definition object paths. |
| [`paths`](#almacdkopenapixapibasepropspropertypaths) | [`@alma-cdk/openapix.Paths`](#@alma-cdk/openapix.Paths) | Integrations for OpenApi Path definitions. |
| [`rejections`](#almacdkopenapixapibasepropspropertyrejections) | `string`[] | Reject fields by absolute object path from generated definition. |
| [`rejectionsDeep`](#almacdkopenapixapibasepropspropertyrejectionsdeep) | `string`[] | Reject all matching fields from generated definition. |
| [`upload`](#almacdkopenapixapibasepropspropertyupload) | `boolean` | Schema Definition location (inline vs. |
| [`validators`](#almacdkopenapixapibasepropspropertyvalidators) | {[ key: string ]: [`@alma-cdk/openapix.Validator`](#@alma-cdk/openapix.Validator)} | Configure availalbe request validators. API Gateway REST APIs can perform request parameter and request body validation. |

---

##### `source`<sup>Required</sup> <a name="@alma-cdk/openapix.ApiBaseProps.property.source" id="almacdkopenapixapibasepropspropertysource"></a>

```typescript
public readonly source: string | Schema;
```

- *Type:* `string` | [`@alma-cdk/openapix.Schema`](#@alma-cdk/openapix.Schema)

OpenApi Schema Definition source configuration.

Provide either string path to source or an instance of `openapix.Schema`.

---

##### `authorizers`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiBaseProps.property.authorizers" id="almacdkopenapixapibasepropspropertyauthorizers"></a>

```typescript
public readonly authorizers: AuthorizerConfig[];
```

- *Type:* [`@alma-cdk/openapix.AuthorizerConfig`](#@alma-cdk/openapix.AuthorizerConfig)[]

Cognito User Pool or Custom Lambda based Authorizer configurations.

> https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html

---

##### `defaultCors`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiBaseProps.property.defaultCors" id="almacdkopenapixapibasepropspropertydefaultcors"></a>

```typescript
public readonly defaultCors: CorsIntegration;
```

- *Type:* [`@alma-cdk/openapix.CorsIntegration`](#@alma-cdk/openapix.CorsIntegration)

Default CORS configuration. Applied to all path integrations.

You can add path specific overrides by adding an `options` method with `new openapix.CorsIntegration(...)` integration.

---

##### `defaultIntegration`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiBaseProps.property.defaultIntegration" id="almacdkopenapixapibasepropspropertydefaultintegration"></a>

```typescript
public readonly defaultIntegration: Integration;
```

- *Type:* [`@alma-cdk/openapix.Integration`](#@alma-cdk/openapix.Integration)

Add a default integration for paths without explicitly defined integrations.

---

##### `injections`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiBaseProps.property.injections" id="almacdkopenapixapibasepropspropertyinjections"></a>

```typescript
public readonly injections: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

Inject any OpenApi v3 data to given schema definition object paths.

---

##### `paths`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiBaseProps.property.paths" id="almacdkopenapixapibasepropspropertypaths"></a>

```typescript
public readonly paths: Paths;
```

- *Type:* [`@alma-cdk/openapix.Paths`](#@alma-cdk/openapix.Paths)

Integrations for OpenApi Path definitions.

---

##### `rejections`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiBaseProps.property.rejections" id="almacdkopenapixapibasepropspropertyrejections"></a>

```typescript
public readonly rejections: string[];
```

- *Type:* `string`[]

Reject fields by absolute object path from generated definition.

---

##### `rejectionsDeep`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiBaseProps.property.rejectionsDeep" id="almacdkopenapixapibasepropspropertyrejectionsdeep"></a>

```typescript
public readonly rejectionsDeep: string[];
```

- *Type:* `string`[]

Reject all matching fields from generated definition.

---

##### `upload`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiBaseProps.property.upload" id="almacdkopenapixapibasepropspropertyupload"></a>

```typescript
public readonly upload: boolean;
```

- *Type:* `boolean`
- *Default:* false

Schema Definition location (inline vs.

S3 location). Set `true` to upload to S3 or `false` (default) to inline it into resulting CloudFormation template.

---

##### `validators`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiBaseProps.property.validators" id="almacdkopenapixapibasepropspropertyvalidators"></a>

```typescript
public readonly validators: {[ key: string ]: Validator};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.Validator`](#@alma-cdk/openapix.Validator)}

Configure availalbe request validators. API Gateway REST APIs can perform request parameter and request body validation.

You can optionally specify one of them with `default: true` to promote it as the default validator applied to all integrations.  For non-default validators, you must specify `validator: '<name>'` prop in every integration you wish to use the given validator.

> https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html

---

### ApiProps <a name="@alma-cdk/openapix.ApiProps" id="almacdkopenapixapiprops"></a>

Props to configure `new openapix.Api`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ApiProps } from '@alma-cdk/openapix'

const apiProps: ApiProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`source`](#almacdkopenapixapipropspropertysource)<span title="Required">*</span> | `string` \| [`@alma-cdk/openapix.Schema`](#@alma-cdk/openapix.Schema) | OpenApi Schema Definition source configuration. |
| [`authorizers`](#almacdkopenapixapipropspropertyauthorizers) | [`@alma-cdk/openapix.AuthorizerConfig`](#@alma-cdk/openapix.AuthorizerConfig)[] | Cognito User Pool or Custom Lambda based Authorizer configurations. |
| [`defaultCors`](#almacdkopenapixapipropspropertydefaultcors) | [`@alma-cdk/openapix.CorsIntegration`](#@alma-cdk/openapix.CorsIntegration) | Default CORS configuration. Applied to all path integrations. |
| [`defaultIntegration`](#almacdkopenapixapipropspropertydefaultintegration) | [`@alma-cdk/openapix.Integration`](#@alma-cdk/openapix.Integration) | Add a default integration for paths without explicitly defined integrations. |
| [`injections`](#almacdkopenapixapipropspropertyinjections) | {[ key: string ]: `any`} | Inject any OpenApi v3 data to given schema definition object paths. |
| [`paths`](#almacdkopenapixapipropspropertypaths) | [`@alma-cdk/openapix.Paths`](#@alma-cdk/openapix.Paths) | Integrations for OpenApi Path definitions. |
| [`rejections`](#almacdkopenapixapipropspropertyrejections) | `string`[] | Reject fields by absolute object path from generated definition. |
| [`rejectionsDeep`](#almacdkopenapixapipropspropertyrejectionsdeep) | `string`[] | Reject all matching fields from generated definition. |
| [`upload`](#almacdkopenapixapipropspropertyupload) | `boolean` | Schema Definition location (inline vs. |
| [`validators`](#almacdkopenapixapipropspropertyvalidators) | {[ key: string ]: [`@alma-cdk/openapix.Validator`](#@alma-cdk/openapix.Validator)} | Configure availalbe request validators. API Gateway REST APIs can perform request parameter and request body validation. |
| [`restApiProps`](#almacdkopenapixapipropspropertyrestapiprops) | [`aws-cdk-lib.aws_apigateway.RestApiProps`](#aws-cdk-lib.aws_apigateway.RestApiProps) | Props to configure the underlying CDK `apigateway.RestApi`. |

---

##### `source`<sup>Required</sup> <a name="@alma-cdk/openapix.ApiProps.property.source" id="almacdkopenapixapipropspropertysource"></a>

```typescript
public readonly source: string | Schema;
```

- *Type:* `string` | [`@alma-cdk/openapix.Schema`](#@alma-cdk/openapix.Schema)

OpenApi Schema Definition source configuration.

Provide either string path to source or an instance of `openapix.Schema`.

---

##### `authorizers`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiProps.property.authorizers" id="almacdkopenapixapipropspropertyauthorizers"></a>

```typescript
public readonly authorizers: AuthorizerConfig[];
```

- *Type:* [`@alma-cdk/openapix.AuthorizerConfig`](#@alma-cdk/openapix.AuthorizerConfig)[]

Cognito User Pool or Custom Lambda based Authorizer configurations.

> https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html

---

##### `defaultCors`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiProps.property.defaultCors" id="almacdkopenapixapipropspropertydefaultcors"></a>

```typescript
public readonly defaultCors: CorsIntegration;
```

- *Type:* [`@alma-cdk/openapix.CorsIntegration`](#@alma-cdk/openapix.CorsIntegration)

Default CORS configuration. Applied to all path integrations.

You can add path specific overrides by adding an `options` method with `new openapix.CorsIntegration(...)` integration.

---

##### `defaultIntegration`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiProps.property.defaultIntegration" id="almacdkopenapixapipropspropertydefaultintegration"></a>

```typescript
public readonly defaultIntegration: Integration;
```

- *Type:* [`@alma-cdk/openapix.Integration`](#@alma-cdk/openapix.Integration)

Add a default integration for paths without explicitly defined integrations.

---

##### `injections`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiProps.property.injections" id="almacdkopenapixapipropspropertyinjections"></a>

```typescript
public readonly injections: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

Inject any OpenApi v3 data to given schema definition object paths.

---

##### `paths`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiProps.property.paths" id="almacdkopenapixapipropspropertypaths"></a>

```typescript
public readonly paths: Paths;
```

- *Type:* [`@alma-cdk/openapix.Paths`](#@alma-cdk/openapix.Paths)

Integrations for OpenApi Path definitions.

---

##### `rejections`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiProps.property.rejections" id="almacdkopenapixapipropspropertyrejections"></a>

```typescript
public readonly rejections: string[];
```

- *Type:* `string`[]

Reject fields by absolute object path from generated definition.

---

##### `rejectionsDeep`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiProps.property.rejectionsDeep" id="almacdkopenapixapipropspropertyrejectionsdeep"></a>

```typescript
public readonly rejectionsDeep: string[];
```

- *Type:* `string`[]

Reject all matching fields from generated definition.

---

##### `upload`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiProps.property.upload" id="almacdkopenapixapipropspropertyupload"></a>

```typescript
public readonly upload: boolean;
```

- *Type:* `boolean`
- *Default:* false

Schema Definition location (inline vs.

S3 location). Set `true` to upload to S3 or `false` (default) to inline it into resulting CloudFormation template.

---

##### `validators`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiProps.property.validators" id="almacdkopenapixapipropspropertyvalidators"></a>

```typescript
public readonly validators: {[ key: string ]: Validator};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.Validator`](#@alma-cdk/openapix.Validator)}

Configure availalbe request validators. API Gateway REST APIs can perform request parameter and request body validation.

You can optionally specify one of them with `default: true` to promote it as the default validator applied to all integrations.  For non-default validators, you must specify `validator: '<name>'` prop in every integration you wish to use the given validator.

> https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html

---

##### `restApiProps`<sup>Optional</sup> <a name="@alma-cdk/openapix.ApiProps.property.restApiProps" id="almacdkopenapixapipropspropertyrestapiprops"></a>

```typescript
public readonly restApiProps: RestApiProps;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.RestApiProps`](#aws-cdk-lib.aws_apigateway.RestApiProps)

Props to configure the underlying CDK `apigateway.RestApi`.

---

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

### CallbackObject <a name="@alma-cdk/openapix.CallbackObject" id="almacdkopenapixcallbackobject"></a>

A map of possible out-of band callbacks related to the parent operation.

Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { CallbackObject } from '@alma-cdk/openapix'

const callbackObject: CallbackObject = { ... }
```


### CognitoUserPoolsAuthorizerProps <a name="@alma-cdk/openapix.CognitoUserPoolsAuthorizerProps" id="almacdkopenapixcognitouserpoolsauthorizerprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { CognitoUserPoolsAuthorizerProps } from '@alma-cdk/openapix'

const cognitoUserPoolsAuthorizerProps: CognitoUserPoolsAuthorizerProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`cognitoUserPools`](#almacdkopenapixcognitouserpoolsauthorizerpropspropertycognitouserpools)<span title="Required">*</span> | [`aws-cdk-lib.aws_cognito.IUserPool`](#aws-cdk-lib.aws_cognito.IUserPool)[] | *No description.* |
| [`resultsCacheTtl`](#almacdkopenapixcognitouserpoolsauthorizerpropspropertyresultscachettl) | [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration) | *No description.* |

---

##### `cognitoUserPools`<sup>Required</sup> <a name="@alma-cdk/openapix.CognitoUserPoolsAuthorizerProps.property.cognitoUserPools" id="almacdkopenapixcognitouserpoolsauthorizerpropspropertycognitouserpools"></a>

```typescript
public readonly cognitoUserPools: IUserPool[];
```

- *Type:* [`aws-cdk-lib.aws_cognito.IUserPool`](#aws-cdk-lib.aws_cognito.IUserPool)[]

---

##### `resultsCacheTtl`<sup>Optional</sup> <a name="@alma-cdk/openapix.CognitoUserPoolsAuthorizerProps.property.resultsCacheTtl" id="almacdkopenapixcognitouserpoolsauthorizerpropspropertyresultscachettl"></a>

```typescript
public readonly resultsCacheTtl: Duration;
```

- *Type:* [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration)

---

### ComponentsObject <a name="@alma-cdk/openapix.ComponentsObject" id="almacdkopenapixcomponentsobject"></a>

Holds a set of reusable objects for different aspects of the OAS.

All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ComponentsObject } from '@alma-cdk/openapix'

const componentsObject: ComponentsObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`callbacks`](#almacdkopenapixcomponentsobjectpropertycallbacks) | {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.CallbackObject`](#@alma-cdk/openapix.CallbackObject)} | An object to hold reusable Callback Objects. |
| [`examples`](#almacdkopenapixcomponentsobjectpropertyexamples) | {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.ExampleObject`](#@alma-cdk/openapix.ExampleObject)} | An object to hold reusable Example Objects. |
| [`headers`](#almacdkopenapixcomponentsobjectpropertyheaders) | {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.HeaderObject`](#@alma-cdk/openapix.HeaderObject)} | An object to hold reusable Header Objects. |
| [`links`](#almacdkopenapixcomponentsobjectpropertylinks) | {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.LinkObject`](#@alma-cdk/openapix.LinkObject)} | An object to hold reusable Link Objects. |
| [`parameters`](#almacdkopenapixcomponentsobjectpropertyparameters) | {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.ParameterObject`](#@alma-cdk/openapix.ParameterObject)} | An object to hold reusable Parameter Objects. |
| [`requestBodies`](#almacdkopenapixcomponentsobjectpropertyrequestbodies) | {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.RequestBodyObject`](#@alma-cdk/openapix.RequestBodyObject)} | An object to hold reusable Request Body Objects. |
| [`responses`](#almacdkopenapixcomponentsobjectpropertyresponses) | {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.ResponseObject`](#@alma-cdk/openapix.ResponseObject)} | An object to hold reusable Response Objects. |
| [`schemas`](#almacdkopenapixcomponentsobjectpropertyschemas) | {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.SchemaObject`](#@alma-cdk/openapix.SchemaObject)} | An object to hold reusable Schema Objects. |
| [`securitySchemes`](#almacdkopenapixcomponentsobjectpropertysecurityschemes) | {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.SecuritySchemeObject`](#@alma-cdk/openapix.SecuritySchemeObject)} | An object to hold reusable Security Scheme Objects. |

---

##### `callbacks`<sup>Optional</sup> <a name="@alma-cdk/openapix.ComponentsObject.property.callbacks" id="almacdkopenapixcomponentsobjectpropertycallbacks"></a>

```typescript
public readonly callbacks: {[ key: string ]: ReferenceObject | CallbackObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.CallbackObject`](#@alma-cdk/openapix.CallbackObject)}

An object to hold reusable Callback Objects.

---

##### `examples`<sup>Optional</sup> <a name="@alma-cdk/openapix.ComponentsObject.property.examples" id="almacdkopenapixcomponentsobjectpropertyexamples"></a>

```typescript
public readonly examples: {[ key: string ]: ReferenceObject | ExampleObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.ExampleObject`](#@alma-cdk/openapix.ExampleObject)}

An object to hold reusable Example Objects.

---

##### `headers`<sup>Optional</sup> <a name="@alma-cdk/openapix.ComponentsObject.property.headers" id="almacdkopenapixcomponentsobjectpropertyheaders"></a>

```typescript
public readonly headers: {[ key: string ]: ReferenceObject | HeaderObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.HeaderObject`](#@alma-cdk/openapix.HeaderObject)}

An object to hold reusable Header Objects.

---

##### `links`<sup>Optional</sup> <a name="@alma-cdk/openapix.ComponentsObject.property.links" id="almacdkopenapixcomponentsobjectpropertylinks"></a>

```typescript
public readonly links: {[ key: string ]: ReferenceObject | LinkObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.LinkObject`](#@alma-cdk/openapix.LinkObject)}

An object to hold reusable Link Objects.

---

##### `parameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.ComponentsObject.property.parameters" id="almacdkopenapixcomponentsobjectpropertyparameters"></a>

```typescript
public readonly parameters: {[ key: string ]: ReferenceObject | ParameterObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.ParameterObject`](#@alma-cdk/openapix.ParameterObject)}

An object to hold reusable Parameter Objects.

---

##### `requestBodies`<sup>Optional</sup> <a name="@alma-cdk/openapix.ComponentsObject.property.requestBodies" id="almacdkopenapixcomponentsobjectpropertyrequestbodies"></a>

```typescript
public readonly requestBodies: {[ key: string ]: ReferenceObject | RequestBodyObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.RequestBodyObject`](#@alma-cdk/openapix.RequestBodyObject)}

An object to hold reusable Request Body Objects.

---

##### `responses`<sup>Optional</sup> <a name="@alma-cdk/openapix.ComponentsObject.property.responses" id="almacdkopenapixcomponentsobjectpropertyresponses"></a>

```typescript
public readonly responses: {[ key: string ]: ReferenceObject | ResponseObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.ResponseObject`](#@alma-cdk/openapix.ResponseObject)}

An object to hold reusable Response Objects.

---

##### `schemas`<sup>Optional</sup> <a name="@alma-cdk/openapix.ComponentsObject.property.schemas" id="almacdkopenapixcomponentsobjectpropertyschemas"></a>

```typescript
public readonly schemas: {[ key: string ]: ReferenceObject | SchemaObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.SchemaObject`](#@alma-cdk/openapix.SchemaObject)}

An object to hold reusable Schema Objects.

---

##### `securitySchemes`<sup>Optional</sup> <a name="@alma-cdk/openapix.ComponentsObject.property.securitySchemes" id="almacdkopenapixcomponentsobjectpropertysecurityschemes"></a>

```typescript
public readonly securitySchemes: {[ key: string ]: ReferenceObject | SecuritySchemeObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.SecuritySchemeObject`](#@alma-cdk/openapix.SecuritySchemeObject)}

An object to hold reusable Security Scheme Objects.

---

### ContactObject <a name="@alma-cdk/openapix.ContactObject" id="almacdkopenapixcontactobject"></a>

The contact information for the exposed API.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ContactObject } from '@alma-cdk/openapix'

const contactObject: ContactObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`email`](#almacdkopenapixcontactobjectpropertyemail) | `string` | The email address of the contact person/organization. |
| [`name`](#almacdkopenapixcontactobjectpropertyname) | `string` | The identifying name of the contact person/organization. |
| [`url`](#almacdkopenapixcontactobjectpropertyurl) | `string` | The URL pointing to the contact information. |

---

##### `email`<sup>Optional</sup> <a name="@alma-cdk/openapix.ContactObject.property.email" id="almacdkopenapixcontactobjectpropertyemail"></a>

```typescript
public readonly email: string;
```

- *Type:* `string`

The email address of the contact person/organization.

MUST be in the format of an email address.

---

##### `name`<sup>Optional</sup> <a name="@alma-cdk/openapix.ContactObject.property.name" id="almacdkopenapixcontactobjectpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The identifying name of the contact person/organization.

---

##### `url`<sup>Optional</sup> <a name="@alma-cdk/openapix.ContactObject.property.url" id="almacdkopenapixcontactobjectpropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

The URL pointing to the contact information.

MUST be in the format of a URL.

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

### DiscriminatorObject <a name="@alma-cdk/openapix.DiscriminatorObject" id="almacdkopenapixdiscriminatorobject"></a>

When request bodies or response payloads may be one of a number of different schemas, a discriminator object can be used to aid in serialization, deserialization, and validation.

The discriminator is a specific object in a schema which is used to inform the consumer of the specification of an alternative schema based on the value associated with it. When using the discriminator, inline schemas will not be considered.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DiscriminatorObject } from '@alma-cdk/openapix'

const discriminatorObject: DiscriminatorObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`propertyName`](#almacdkopenapixdiscriminatorobjectpropertypropertyname)<span title="Required">*</span> | `string` | The name of the property in the payload that will hold the discriminator value. |
| [`mapping`](#almacdkopenapixdiscriminatorobjectpropertymapping) | {[ key: string ]: `string`} | An object to hold mappings between payload values and schema names or references. |

---

##### `propertyName`<sup>Required</sup> <a name="@alma-cdk/openapix.DiscriminatorObject.property.propertyName" id="almacdkopenapixdiscriminatorobjectpropertypropertyname"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* `string`

The name of the property in the payload that will hold the discriminator value.

---

##### `mapping`<sup>Optional</sup> <a name="@alma-cdk/openapix.DiscriminatorObject.property.mapping" id="almacdkopenapixdiscriminatorobjectpropertymapping"></a>

```typescript
public readonly mapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

An object to hold mappings between payload values and schema names or references.

---

### EncodingObject <a name="@alma-cdk/openapix.EncodingObject" id="almacdkopenapixencodingobject"></a>

A single encoding definition applied to a single schema property.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { EncodingObject } from '@alma-cdk/openapix'

const encodingObject: EncodingObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`allowReserved`](#almacdkopenapixencodingobjectpropertyallowreserved) | `boolean` | Determines whether the parameter value SHOULD allow reserved characters, as defined by RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding. The default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded. |
| [`contentType`](#almacdkopenapixencodingobjectpropertycontenttype) | `string` | The Content-Type for encoding a specific property. |
| [`explode`](#almacdkopenapixencodingobjectpropertyexplode) | `boolean` | When this is true, property values of type array or object generate separate parameters for each value of the array, or key-value-pair of the map. |
| [`headers`](#almacdkopenapixencodingobjectpropertyheaders) | {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.HeaderObject`](#@alma-cdk/openapix.HeaderObject)} | A map allowing additional information to be provided as headers, for example Content-Disposition. |
| [`style`](#almacdkopenapixencodingobjectpropertystyle) | `string` | Describes how a specific property value will be serialized depending on its type. |

---

##### `allowReserved`<sup>Optional</sup> <a name="@alma-cdk/openapix.EncodingObject.property.allowReserved" id="almacdkopenapixencodingobjectpropertyallowreserved"></a>

```typescript
public readonly allowReserved: boolean;
```

- *Type:* `boolean`

Determines whether the parameter value SHOULD allow reserved characters, as defined by RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding. The default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded.

---

##### `contentType`<sup>Optional</sup> <a name="@alma-cdk/openapix.EncodingObject.property.contentType" id="almacdkopenapixencodingobjectpropertycontenttype"></a>

```typescript
public readonly contentType: string;
```

- *Type:* `string`

The Content-Type for encoding a specific property.

Default value depends on the property type: for string with format being binary – application/octet-stream; for other primitive types – text/plain; for object - application/json; for array – the default is defined based on the inner type. The value can be a specific media type (e.g. application/json), a wildcard media type (e.g. image/*), or a comma-separated list of the two types.

---

##### `explode`<sup>Optional</sup> <a name="@alma-cdk/openapix.EncodingObject.property.explode" id="almacdkopenapixencodingobjectpropertyexplode"></a>

```typescript
public readonly explode: boolean;
```

- *Type:* `boolean`

When this is true, property values of type array or object generate separate parameters for each value of the array, or key-value-pair of the map.

For other types of properties this property has no effect. When style is form, the default value is true. For all other styles, the default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded.

---

##### `headers`<sup>Optional</sup> <a name="@alma-cdk/openapix.EncodingObject.property.headers" id="almacdkopenapixencodingobjectpropertyheaders"></a>

```typescript
public readonly headers: {[ key: string ]: ReferenceObject | HeaderObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.HeaderObject`](#@alma-cdk/openapix.HeaderObject)}

A map allowing additional information to be provided as headers, for example Content-Disposition.

Content-Type is described separately and SHALL be ignored in this section. This property SHALL be ignored if the request body media type is not a multipart.

---

##### `style`<sup>Optional</sup> <a name="@alma-cdk/openapix.EncodingObject.property.style" id="almacdkopenapixencodingobjectpropertystyle"></a>

```typescript
public readonly style: string;
```

- *Type:* `string`

Describes how a specific property value will be serialized depending on its type.

See Parameter Object for details on the style property. The behavior follows the same values as query parameters, including default values. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded.

---

### ExampleObject <a name="@alma-cdk/openapix.ExampleObject" id="almacdkopenapixexampleobject"></a>

Example Object.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ExampleObject } from '@alma-cdk/openapix'

const exampleObject: ExampleObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`description`](#almacdkopenapixexampleobjectpropertydescription) | `string` | Long description for the example. |
| [`externalValue`](#almacdkopenapixexampleobjectpropertyexternalvalue) | `string` | A URL that points to the literal example. |
| [`summary`](#almacdkopenapixexampleobjectpropertysummary) | `string` | Short description for the example. |
| [`value`](#almacdkopenapixexampleobjectpropertyvalue) | `any` | Embedded literal example. |

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.ExampleObject.property.description" id="almacdkopenapixexampleobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Long description for the example.

CommonMark syntax MAY be used for rich text representation.

---

##### `externalValue`<sup>Optional</sup> <a name="@alma-cdk/openapix.ExampleObject.property.externalValue" id="almacdkopenapixexampleobjectpropertyexternalvalue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* `string`

A URL that points to the literal example.

This provides the capability to reference examples that cannot easily be included in JSON or YAML documents. The value field and externalValue field are mutually exclusive.

---

##### `summary`<sup>Optional</sup> <a name="@alma-cdk/openapix.ExampleObject.property.summary" id="almacdkopenapixexampleobjectpropertysummary"></a>

```typescript
public readonly summary: string;
```

- *Type:* `string`

Short description for the example.

---

##### `value`<sup>Optional</sup> <a name="@alma-cdk/openapix.ExampleObject.property.value" id="almacdkopenapixexampleobjectpropertyvalue"></a>

```typescript
public readonly value: any;
```

- *Type:* `any`

Embedded literal example.

The value field and externalValue field are mutually exclusive. To represent examples of media types that cannot naturally represented in JSON or YAML, use a string value to contain the example, escaping where necessary.

---

### Extensible <a name="@alma-cdk/openapix.Extensible" id="almacdkopenapixextensible"></a>

Allow Open Api Extensions via `x-` prefixed values.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { Extensible } from '@alma-cdk/openapix'

const extensible: Extensible = { ... }
```


### ExternalDocumentationObject <a name="@alma-cdk/openapix.ExternalDocumentationObject" id="almacdkopenapixexternaldocumentationobject"></a>

Allows referencing an external resource for extended documentation.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ExternalDocumentationObject } from '@alma-cdk/openapix'

const externalDocumentationObject: ExternalDocumentationObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`url`](#almacdkopenapixexternaldocumentationobjectpropertyurl)<span title="Required">*</span> | `string` | The URL for the target documentation. |
| [`description`](#almacdkopenapixexternaldocumentationobjectpropertydescription) | `string` | A short description of the target documentation. |

---

##### `url`<sup>Required</sup> <a name="@alma-cdk/openapix.ExternalDocumentationObject.property.url" id="almacdkopenapixexternaldocumentationobjectpropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

The URL for the target documentation.

Value MUST be in the format of a URL.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.ExternalDocumentationObject.property.description" id="almacdkopenapixexternaldocumentationobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A short description of the target documentation.

CommonMark syntax MAY be used for rich text representation.

---

### HeaderObject <a name="@alma-cdk/openapix.HeaderObject" id="almacdkopenapixheaderobject"></a>

The Header Object follows the structure of the Parameter Object with the following changes:.

1. name MUST NOT be specified, it is given in the corresponding headers map. 2. in MUST NOT be specified, it is implicitly in header. 3. All traits that are affected by the location MUST be applicable to a location of header (for example, style).

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { HeaderObject } from '@alma-cdk/openapix'

const headerObject: HeaderObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`allowEmptyValue`](#almacdkopenapixheaderobjectpropertyallowemptyvalue) | `boolean` | Sets the ability to pass empty-valued parameters. |
| [`deprecated`](#almacdkopenapixheaderobjectpropertydeprecated) | `boolean` | Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. |
| [`description`](#almacdkopenapixheaderobjectpropertydescription) | `string` | A brief description of the parameter. |
| [`required`](#almacdkopenapixheaderobjectpropertyrequired) | `boolean` | Determines whether this parameter is mandatory. |

---

##### `allowEmptyValue`<sup>Optional</sup> <a name="@alma-cdk/openapix.HeaderObject.property.allowEmptyValue" id="almacdkopenapixheaderobjectpropertyallowemptyvalue"></a>

```typescript
public readonly allowEmptyValue: boolean;
```

- *Type:* `boolean`

Sets the ability to pass empty-valued parameters.

This is valid only for query parameters and allows sending a parameter with an empty value. Default value is false. If style is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.

---

##### `deprecated`<sup>Optional</sup> <a name="@alma-cdk/openapix.HeaderObject.property.deprecated" id="almacdkopenapixheaderobjectpropertydeprecated"></a>

```typescript
public readonly deprecated: boolean;
```

- *Type:* `boolean`

Specifies that a parameter is deprecated and SHOULD be transitioned out of usage.

Default value is false.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.HeaderObject.property.description" id="almacdkopenapixheaderobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A brief description of the parameter.

This could contain examples of use. CommonMark syntax MAY be used for rich text representation.

---

##### `required`<sup>Optional</sup> <a name="@alma-cdk/openapix.HeaderObject.property.required" id="almacdkopenapixheaderobjectpropertyrequired"></a>

```typescript
public readonly required: boolean;
```

- *Type:* `boolean`

Determines whether this parameter is mandatory.

If the parameter location is "path", this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be included and its default value is false.

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

### InfoObject <a name="@alma-cdk/openapix.InfoObject" id="almacdkopenapixinfoobject"></a>

The object provides metadata about the API.

The metadata MAY be used by the clients if needed, and MAY be presented in editing or documentation generation tools for convenience.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { InfoObject } from '@alma-cdk/openapix'

const infoObject: InfoObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`title`](#almacdkopenapixinfoobjectpropertytitle)<span title="Required">*</span> | `string` | The title of the API. |
| [`version`](#almacdkopenapixinfoobjectpropertyversion)<span title="Required">*</span> | `string` | The version of the OpenAPI document (which is distinct from the OpenAPI Specification version or the API implementation version). |
| [`contact`](#almacdkopenapixinfoobjectpropertycontact) | [`@alma-cdk/openapix.ContactObject`](#@alma-cdk/openapix.ContactObject) | The contact information for the exposed API. |
| [`description`](#almacdkopenapixinfoobjectpropertydescription) | `string` | A short description of the API. |
| [`license`](#almacdkopenapixinfoobjectpropertylicense) | [`@alma-cdk/openapix.LicenseObject`](#@alma-cdk/openapix.LicenseObject) | The license information for the exposed API. |
| [`termsOfService`](#almacdkopenapixinfoobjectpropertytermsofservice) | `string` | A URL to the Terms of Service for the API. |

---

##### `title`<sup>Required</sup> <a name="@alma-cdk/openapix.InfoObject.property.title" id="almacdkopenapixinfoobjectpropertytitle"></a>

```typescript
public readonly title: string;
```

- *Type:* `string`

The title of the API.

---

##### `version`<sup>Required</sup> <a name="@alma-cdk/openapix.InfoObject.property.version" id="almacdkopenapixinfoobjectpropertyversion"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

The version of the OpenAPI document (which is distinct from the OpenAPI Specification version or the API implementation version).

---

##### `contact`<sup>Optional</sup> <a name="@alma-cdk/openapix.InfoObject.property.contact" id="almacdkopenapixinfoobjectpropertycontact"></a>

```typescript
public readonly contact: ContactObject;
```

- *Type:* [`@alma-cdk/openapix.ContactObject`](#@alma-cdk/openapix.ContactObject)

The contact information for the exposed API.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.InfoObject.property.description" id="almacdkopenapixinfoobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A short description of the API.

CommonMark syntax MAY be used for rich text representation.

---

##### `license`<sup>Optional</sup> <a name="@alma-cdk/openapix.InfoObject.property.license" id="almacdkopenapixinfoobjectpropertylicense"></a>

```typescript
public readonly license: LicenseObject;
```

- *Type:* [`@alma-cdk/openapix.LicenseObject`](#@alma-cdk/openapix.LicenseObject)

The license information for the exposed API.

---

##### `termsOfService`<sup>Optional</sup> <a name="@alma-cdk/openapix.InfoObject.property.termsOfService" id="almacdkopenapixinfoobjectpropertytermsofservice"></a>

```typescript
public readonly termsOfService: string;
```

- *Type:* `string`

A URL to the Terms of Service for the API.

MUST be in the format of a URL.

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

### LambdaAuthorizerProps <a name="@alma-cdk/openapix.LambdaAuthorizerProps" id="almacdkopenapixlambdaauthorizerprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { LambdaAuthorizerProps } from '@alma-cdk/openapix'

const lambdaAuthorizerProps: LambdaAuthorizerProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`authType`](#almacdkopenapixlambdaauthorizerpropspropertyauthtype)<span title="Required">*</span> | `string` | *No description.* |
| [`fn`](#almacdkopenapixlambdaauthorizerpropspropertyfn)<span title="Required">*</span> | [`aws-cdk-lib.aws_lambda.IFunction`](#aws-cdk-lib.aws_lambda.IFunction) | *No description.* |
| [`identitySource`](#almacdkopenapixlambdaauthorizerpropspropertyidentitysource)<span title="Required">*</span> | `string` | *No description.* |
| [`type`](#almacdkopenapixlambdaauthorizerpropspropertytype)<span title="Required">*</span> | `string` | *No description.* |
| [`resultsCacheTtl`](#almacdkopenapixlambdaauthorizerpropspropertyresultscachettl) | [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration) | *No description.* |

---

##### `authType`<sup>Required</sup> <a name="@alma-cdk/openapix.LambdaAuthorizerProps.property.authType" id="almacdkopenapixlambdaauthorizerpropspropertyauthtype"></a>

```typescript
public readonly authType: string;
```

- *Type:* `string`

---

##### `fn`<sup>Required</sup> <a name="@alma-cdk/openapix.LambdaAuthorizerProps.property.fn" id="almacdkopenapixlambdaauthorizerpropspropertyfn"></a>

```typescript
public readonly fn: IFunction;
```

- *Type:* [`aws-cdk-lib.aws_lambda.IFunction`](#aws-cdk-lib.aws_lambda.IFunction)

---

##### `identitySource`<sup>Required</sup> <a name="@alma-cdk/openapix.LambdaAuthorizerProps.property.identitySource" id="almacdkopenapixlambdaauthorizerpropspropertyidentitysource"></a>

```typescript
public readonly identitySource: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@alma-cdk/openapix.LambdaAuthorizerProps.property.type" id="almacdkopenapixlambdaauthorizerpropspropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `resultsCacheTtl`<sup>Optional</sup> <a name="@alma-cdk/openapix.LambdaAuthorizerProps.property.resultsCacheTtl" id="almacdkopenapixlambdaauthorizerpropspropertyresultscachettl"></a>

```typescript
public readonly resultsCacheTtl: Duration;
```

- *Type:* [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration)

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

### LicenseObject <a name="@alma-cdk/openapix.LicenseObject" id="almacdkopenapixlicenseobject"></a>

The license information for the exposed API.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { LicenseObject } from '@alma-cdk/openapix'

const licenseObject: LicenseObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`name`](#almacdkopenapixlicenseobjectpropertyname)<span title="Required">*</span> | `string` | The license name used for the API. |
| [`url`](#almacdkopenapixlicenseobjectpropertyurl) | `string` | A URL to the license used for the API. |

---

##### `name`<sup>Required</sup> <a name="@alma-cdk/openapix.LicenseObject.property.name" id="almacdkopenapixlicenseobjectpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The license name used for the API.

---

##### `url`<sup>Optional</sup> <a name="@alma-cdk/openapix.LicenseObject.property.url" id="almacdkopenapixlicenseobjectpropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

A URL to the license used for the API.

MUST be in the format of a URL.

---

### LinkObject <a name="@alma-cdk/openapix.LinkObject" id="almacdkopenapixlinkobject"></a>

The Link object represents a possible design-time link for a response.

The presence of a link does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations. Unlike dynamic links (i.e. links provided in the response payload), the OAS linking mechanism does not require link information in the runtime response. For computing links, and providing instructions to execute them, a runtime expression is used for accessing values in an operation and using them as parameters while invoking the linked operation.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { LinkObject } from '@alma-cdk/openapix'

const linkObject: LinkObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`description`](#almacdkopenapixlinkobjectpropertydescription) | `string` | A description of the link. |
| [`operationId`](#almacdkopenapixlinkobjectpropertyoperationid) | `string` | The name of an existing, resolvable OAS operation, as defined with a unique operationId. |
| [`operationRef`](#almacdkopenapixlinkobjectpropertyoperationref) | `string` | A relative or absolute URI reference to an OAS operation. |
| [`parameters`](#almacdkopenapixlinkobjectpropertyparameters) | {[ key: string ]: `any`} | A map representing parameters to pass to an operation as specified with operationId or identified via operationRef. |
| [`requestBody`](#almacdkopenapixlinkobjectpropertyrequestbody) | `any` | A literal value or {expression} to use as a request body when calling the target operation. |
| [`server`](#almacdkopenapixlinkobjectpropertyserver) | [`@alma-cdk/openapix.ServerObject`](#@alma-cdk/openapix.ServerObject) | A server object to be used by the target operation. |

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.LinkObject.property.description" id="almacdkopenapixlinkobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A description of the link.

CommonMark syntax MAY be used for rich text representation.

---

##### `operationId`<sup>Optional</sup> <a name="@alma-cdk/openapix.LinkObject.property.operationId" id="almacdkopenapixlinkobjectpropertyoperationid"></a>

```typescript
public readonly operationId: string;
```

- *Type:* `string`

The name of an existing, resolvable OAS operation, as defined with a unique operationId.

This field is mutually exclusive of the operationRef field.

---

##### `operationRef`<sup>Optional</sup> <a name="@alma-cdk/openapix.LinkObject.property.operationRef" id="almacdkopenapixlinkobjectpropertyoperationref"></a>

```typescript
public readonly operationRef: string;
```

- *Type:* `string`

A relative or absolute URI reference to an OAS operation.

This field is mutually exclusive of the operationId field, and MUST point to an Operation Object. Relative operationRef values MAY be used to locate an existing Operation Object in the OpenAPI definition.

---

##### `parameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.LinkObject.property.parameters" id="almacdkopenapixlinkobjectpropertyparameters"></a>

```typescript
public readonly parameters: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

A map representing parameters to pass to an operation as specified with operationId or identified via operationRef.

The key is the parameter name to be used, whereas the value can be a constant or an expression to be evaluated and passed to the linked operation. The parameter name can be qualified using the parameter location [{in}.]{name} for operations that use the same parameter name in different locations (e.g. path.id).

---

##### `requestBody`<sup>Optional</sup> <a name="@alma-cdk/openapix.LinkObject.property.requestBody" id="almacdkopenapixlinkobjectpropertyrequestbody"></a>

```typescript
public readonly requestBody: any;
```

- *Type:* `any`

A literal value or {expression} to use as a request body when calling the target operation.

---

##### `server`<sup>Optional</sup> <a name="@alma-cdk/openapix.LinkObject.property.server" id="almacdkopenapixlinkobjectpropertyserver"></a>

```typescript
public readonly server: ServerObject;
```

- *Type:* [`@alma-cdk/openapix.ServerObject`](#@alma-cdk/openapix.ServerObject)

A server object to be used by the target operation.

---

### MediaTypeObject <a name="@alma-cdk/openapix.MediaTypeObject" id="almacdkopenapixmediatypeobject"></a>

Each Media Type Object provides schema and examples for the media type identified by its key.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { MediaTypeObject } from '@alma-cdk/openapix'

const mediaTypeObject: MediaTypeObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`encoding`](#almacdkopenapixmediatypeobjectpropertyencoding) | {[ key: string ]: [`@alma-cdk/openapix.EncodingObject`](#@alma-cdk/openapix.EncodingObject)} | A map between a property name and its encoding information. |
| [`example`](#almacdkopenapixmediatypeobjectpropertyexample) | `any` | Example of the media type. |
| [`examples`](#almacdkopenapixmediatypeobjectpropertyexamples) | {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.ExampleObject`](#@alma-cdk/openapix.ExampleObject)} | Examples of the media type. |
| [`schema`](#almacdkopenapixmediatypeobjectpropertyschema) | [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.SchemaObject`](#@alma-cdk/openapix.SchemaObject) | The schema defining the content of the request, response, or parameter. |

---

##### `encoding`<sup>Optional</sup> <a name="@alma-cdk/openapix.MediaTypeObject.property.encoding" id="almacdkopenapixmediatypeobjectpropertyencoding"></a>

```typescript
public readonly encoding: {[ key: string ]: EncodingObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.EncodingObject`](#@alma-cdk/openapix.EncodingObject)}

A map between a property name and its encoding information.

The key, being the property name, MUST exist in the schema as a property. The encoding object SHALL only apply to requestBody objects when the media type is multipart or application/x-www-form-urlencoded.

---

##### `example`<sup>Optional</sup> <a name="@alma-cdk/openapix.MediaTypeObject.property.example" id="almacdkopenapixmediatypeobjectpropertyexample"></a>

```typescript
public readonly example: any;
```

- *Type:* `any`

Example of the media type.

The example object SHOULD be in the correct format as specified by the media type. The example field is mutually exclusive of the examples field. Furthermore, if referencing a schema which contains an example, the example value SHALL override the example provided by the schema.

---

##### `examples`<sup>Optional</sup> <a name="@alma-cdk/openapix.MediaTypeObject.property.examples" id="almacdkopenapixmediatypeobjectpropertyexamples"></a>

```typescript
public readonly examples: {[ key: string ]: ReferenceObject | ExampleObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.ExampleObject`](#@alma-cdk/openapix.ExampleObject)}

Examples of the media type.

Each example object SHOULD match the media type and specified schema if present. The examples field is mutually exclusive of the example field. Furthermore, if referencing a schema which contains an example, the examples value SHALL override the example provided by the schema.

---

##### `schema`<sup>Optional</sup> <a name="@alma-cdk/openapix.MediaTypeObject.property.schema" id="almacdkopenapixmediatypeobjectpropertyschema"></a>

```typescript
public readonly schema: ReferenceObject | SchemaObject;
```

- *Type:* [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.SchemaObject`](#@alma-cdk/openapix.SchemaObject)

The schema defining the content of the request, response, or parameter.

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
| [`cacheKeyParameters`](#almacdkopenapixmockintegrationpropspropertycachekeyparameters) | `string`[] | A list of request parameters whose values are to be cached. |
| [`cacheNamespace`](#almacdkopenapixmockintegrationpropspropertycachenamespace) | `string` | An API-specific tag group of related cached parameters. |
| [`connectionType`](#almacdkopenapixmockintegrationpropspropertyconnectiontype) | [`aws-cdk-lib.aws_apigateway.ConnectionType`](#aws-cdk-lib.aws_apigateway.ConnectionType) | The type of network connection to the integration endpoint. |
| [`contentHandling`](#almacdkopenapixmockintegrationpropspropertycontenthandling) | [`aws-cdk-lib.aws_apigateway.ContentHandling`](#aws-cdk-lib.aws_apigateway.ContentHandling) | Specifies how to handle request payload content type conversions. |
| [`credentialsPassthrough`](#almacdkopenapixmockintegrationpropspropertycredentialspassthrough) | `boolean` | Requires that the caller's identity be passed through from the request. |
| [`credentialsRole`](#almacdkopenapixmockintegrationpropspropertycredentialsrole) | [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole) | An IAM role that API Gateway assumes. |
| [`integrationResponses`](#almacdkopenapixmockintegrationpropspropertyintegrationresponses) | [`aws-cdk-lib.aws_apigateway.IntegrationResponse`](#aws-cdk-lib.aws_apigateway.IntegrationResponse)[] | The response that API Gateway provides after a method's backend completes processing a request. |
| [`passthroughBehavior`](#almacdkopenapixmockintegrationpropspropertypassthroughbehavior) | [`aws-cdk-lib.aws_apigateway.PassthroughBehavior`](#aws-cdk-lib.aws_apigateway.PassthroughBehavior) | Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. |
| [`requestParameters`](#almacdkopenapixmockintegrationpropspropertyrequestparameters) | {[ key: string ]: `string`} | The request parameters that API Gateway sends with the backend request. |
| [`requestTemplates`](#almacdkopenapixmockintegrationpropspropertyrequesttemplates) | {[ key: string ]: `string`} | A map of Apache Velocity templates that are applied on the request payload. |
| [`timeout`](#almacdkopenapixmockintegrationpropspropertytimeout) | [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration) | The maximum amount of time an integration will run before it returns without a response. |
| [`vpcLink`](#almacdkopenapixmockintegrationpropspropertyvpclink) | [`aws-cdk-lib.aws_apigateway.IVpcLink`](#aws-cdk-lib.aws_apigateway.IVpcLink) | The VpcLink used for the integration. |
| [`validator`](#almacdkopenapixmockintegrationpropspropertyvalidator) | `string` | Validator identifier for method integration. This will override the default validator if one configured. |

---

##### `cacheKeyParameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegrationProps.property.cacheKeyParameters" id="almacdkopenapixmockintegrationpropspropertycachekeyparameters"></a>

```typescript
public readonly cacheKeyParameters: string[];
```

- *Type:* `string`[]

A list of request parameters whose values are to be cached.

It determines request parameters that will make it into the cache key.

---

##### `cacheNamespace`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegrationProps.property.cacheNamespace" id="almacdkopenapixmockintegrationpropspropertycachenamespace"></a>

```typescript
public readonly cacheNamespace: string;
```

- *Type:* `string`

An API-specific tag group of related cached parameters.

---

##### `connectionType`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegrationProps.property.connectionType" id="almacdkopenapixmockintegrationpropspropertyconnectiontype"></a>

```typescript
public readonly connectionType: ConnectionType;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.ConnectionType`](#aws-cdk-lib.aws_apigateway.ConnectionType)
- *Default:* ConnectionType.VPC_LINK if `vpcLink` property is configured; ConnectionType.Internet otherwise.

The type of network connection to the integration endpoint.

---

##### `contentHandling`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegrationProps.property.contentHandling" id="almacdkopenapixmockintegrationpropspropertycontenthandling"></a>

```typescript
public readonly contentHandling: ContentHandling;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.ContentHandling`](#aws-cdk-lib.aws_apigateway.ContentHandling)
- *Default:* none if this property isn't defined, the request payload is passed through from the method request to the integration request without modification, provided that the `passthroughBehaviors` property is configured to support payload pass-through.

Specifies how to handle request payload content type conversions.

---

##### `credentialsPassthrough`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegrationProps.property.credentialsPassthrough" id="almacdkopenapixmockintegrationpropspropertycredentialspassthrough"></a>

```typescript
public readonly credentialsPassthrough: boolean;
```

- *Type:* `boolean`
- *Default:* Caller identity is not passed through

Requires that the caller's identity be passed through from the request.

---

##### `credentialsRole`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegrationProps.property.credentialsRole" id="almacdkopenapixmockintegrationpropspropertycredentialsrole"></a>

```typescript
public readonly credentialsRole: IRole;
```

- *Type:* [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole)
- *Default:* A role is not assumed

An IAM role that API Gateway assumes.

Mutually exclusive with `credentialsPassThrough`.

---

##### `integrationResponses`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegrationProps.property.integrationResponses" id="almacdkopenapixmockintegrationpropspropertyintegrationresponses"></a>

```typescript
public readonly integrationResponses: IntegrationResponse[];
```

- *Type:* [`aws-cdk-lib.aws_apigateway.IntegrationResponse`](#aws-cdk-lib.aws_apigateway.IntegrationResponse)[]

The response that API Gateway provides after a method's backend completes processing a request.

API Gateway intercepts the response from the backend so that you can control how API Gateway surfaces backend responses. For example, you can map the backend status codes to codes that you define.

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegrationProps.property.passthroughBehavior" id="almacdkopenapixmockintegrationpropspropertypassthroughbehavior"></a>

```typescript
public readonly passthroughBehavior: PassthroughBehavior;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.PassthroughBehavior`](#aws-cdk-lib.aws_apigateway.PassthroughBehavior)

Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource.

There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER.

---

##### `requestParameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegrationProps.property.requestParameters" id="almacdkopenapixmockintegrationpropspropertyrequestparameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

The request parameters that API Gateway sends with the backend request.

Specify request parameters as key-value pairs (string-to-string mappings), with a destination as the key and a source as the value.  Specify the destination by using the following pattern integration.request.location.name, where location is querystring, path, or header, and name is a valid, unique parameter name.  The source must be an existing method request parameter or a static value. You must enclose static values in single quotation marks and pre-encode these values based on their destination in the request.

---

##### `requestTemplates`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegrationProps.property.requestTemplates" id="almacdkopenapixmockintegrationpropspropertyrequesttemplates"></a>

```typescript
public readonly requestTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

A map of Apache Velocity templates that are applied on the request payload.

The template that API Gateway uses is based on the value of the Content-Type header that's sent by the client. The content type value is the key, and the template is the value (specified as a string), such as the following snippet:  ```    { "application/json": "{ \"statusCode\": 200 }" } ```

> http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html

---

##### `timeout`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegrationProps.property.timeout" id="almacdkopenapixmockintegrationpropspropertytimeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration)
- *Default:* Duration.seconds(29)

The maximum amount of time an integration will run before it returns without a response.

Must be between 50 milliseconds and 29 seconds.

---

##### `vpcLink`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegrationProps.property.vpcLink" id="almacdkopenapixmockintegrationpropspropertyvpclink"></a>

```typescript
public readonly vpcLink: IVpcLink;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.IVpcLink`](#aws-cdk-lib.aws_apigateway.IVpcLink)

The VpcLink used for the integration.

Required if connectionType is VPC_LINK

---

##### `validator`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegrationProps.property.validator" id="almacdkopenapixmockintegrationpropspropertyvalidator"></a>

```typescript
public readonly validator: string;
```

- *Type:* `string`

Validator identifier for method integration. This will override the default validator if one configured.

Should match a key from OpenApi schema `components.securitySchemas`.

---

### OAuthFlowObject <a name="@alma-cdk/openapix.OAuthFlowObject" id="almacdkopenapixoauthflowobject"></a>

Configuration details for a supported OAuth Flow.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OAuthFlowObject } from '@alma-cdk/openapix'

const oAuthFlowObject: OAuthFlowObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scopes`](#almacdkopenapixoauthflowobjectpropertyscopes)<span title="Required">*</span> | {[ key: string ]: `string`} | The available scopes for the OAuth2 security scheme. |
| [`authorizationUrl`](#almacdkopenapixoauthflowobjectpropertyauthorizationurl) | `string` | The authorization URL to be used for this flow. |
| [`refreshUrl`](#almacdkopenapixoauthflowobjectpropertyrefreshurl) | `string` | The URL to be used for obtaining refresh tokens. |
| [`tokenUrl`](#almacdkopenapixoauthflowobjectpropertytokenurl) | `string` | The token URL to be used for this flow. |

---

##### `scopes`<sup>Required</sup> <a name="@alma-cdk/openapix.OAuthFlowObject.property.scopes" id="almacdkopenapixoauthflowobjectpropertyscopes"></a>

```typescript
public readonly scopes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

The available scopes for the OAuth2 security scheme.

A map between the scope name and a short description for it. The map MAY be empty.

---

##### `authorizationUrl`<sup>Optional</sup> <a name="@alma-cdk/openapix.OAuthFlowObject.property.authorizationUrl" id="almacdkopenapixoauthflowobjectpropertyauthorizationurl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* `string`

The authorization URL to be used for this flow.

This MUST be in the form of a URL. REQUIRED for oauth2 ("implicit", "authorizationCode").

---

##### `refreshUrl`<sup>Optional</sup> <a name="@alma-cdk/openapix.OAuthFlowObject.property.refreshUrl" id="almacdkopenapixoauthflowobjectpropertyrefreshurl"></a>

```typescript
public readonly refreshUrl: string;
```

- *Type:* `string`

The URL to be used for obtaining refresh tokens.

This MUST be in the form of a URL.

---

##### `tokenUrl`<sup>Optional</sup> <a name="@alma-cdk/openapix.OAuthFlowObject.property.tokenUrl" id="almacdkopenapixoauthflowobjectpropertytokenurl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* `string`

The token URL to be used for this flow.

This MUST be in the form of a URL. REQUIRED for oauth2 ("password", "clientCredentials", "authorizationCode").

---

### OAuthFlowsObject <a name="@alma-cdk/openapix.OAuthFlowsObject" id="almacdkopenapixoauthflowsobject"></a>

Allows configuration of the supported OAuth Flows.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OAuthFlowsObject } from '@alma-cdk/openapix'

const oAuthFlowsObject: OAuthFlowsObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`authorizationCode`](#almacdkopenapixoauthflowsobjectpropertyauthorizationcode) | [`@alma-cdk/openapix.OAuthFlowObject`](#@alma-cdk/openapix.OAuthFlowObject) | Configuration for the OAuth Authorization Code flow. |
| [`clientCredentials`](#almacdkopenapixoauthflowsobjectpropertyclientcredentials) | [`@alma-cdk/openapix.OAuthFlowObject`](#@alma-cdk/openapix.OAuthFlowObject) | Configuration for the OAuth Client Credentials flow. |
| [`implicit`](#almacdkopenapixoauthflowsobjectpropertyimplicit) | [`@alma-cdk/openapix.OAuthFlowObject`](#@alma-cdk/openapix.OAuthFlowObject) | Configuration for the OAuth Implicit flow. |
| [`password`](#almacdkopenapixoauthflowsobjectpropertypassword) | [`@alma-cdk/openapix.OAuthFlowObject`](#@alma-cdk/openapix.OAuthFlowObject) | Configuration for the OAuth Resource Owner Password flow. |

---

##### `authorizationCode`<sup>Optional</sup> <a name="@alma-cdk/openapix.OAuthFlowsObject.property.authorizationCode" id="almacdkopenapixoauthflowsobjectpropertyauthorizationcode"></a>

```typescript
public readonly authorizationCode: OAuthFlowObject;
```

- *Type:* [`@alma-cdk/openapix.OAuthFlowObject`](#@alma-cdk/openapix.OAuthFlowObject)

Configuration for the OAuth Authorization Code flow.

Previously called accessCode in OpenAPI 2.0.

---

##### `clientCredentials`<sup>Optional</sup> <a name="@alma-cdk/openapix.OAuthFlowsObject.property.clientCredentials" id="almacdkopenapixoauthflowsobjectpropertyclientcredentials"></a>

```typescript
public readonly clientCredentials: OAuthFlowObject;
```

- *Type:* [`@alma-cdk/openapix.OAuthFlowObject`](#@alma-cdk/openapix.OAuthFlowObject)

Configuration for the OAuth Client Credentials flow.

Previously called application in OpenAPI 2.0.

---

##### `implicit`<sup>Optional</sup> <a name="@alma-cdk/openapix.OAuthFlowsObject.property.implicit" id="almacdkopenapixoauthflowsobjectpropertyimplicit"></a>

```typescript
public readonly implicit: OAuthFlowObject;
```

- *Type:* [`@alma-cdk/openapix.OAuthFlowObject`](#@alma-cdk/openapix.OAuthFlowObject)

Configuration for the OAuth Implicit flow.

---

##### `password`<sup>Optional</sup> <a name="@alma-cdk/openapix.OAuthFlowsObject.property.password" id="almacdkopenapixoauthflowsobjectpropertypassword"></a>

```typescript
public readonly password: OAuthFlowObject;
```

- *Type:* [`@alma-cdk/openapix.OAuthFlowObject`](#@alma-cdk/openapix.OAuthFlowObject)

Configuration for the OAuth Resource Owner Password flow.

---

### OperationObject <a name="@alma-cdk/openapix.OperationObject" id="almacdkopenapixoperationobject"></a>

Describes a single API operation on a path.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OperationObject } from '@alma-cdk/openapix'

const operationObject: OperationObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`responses`](#almacdkopenapixoperationobjectpropertyresponses)<span title="Required">*</span> | [`@alma-cdk/openapix.ResponsesObject`](#@alma-cdk/openapix.ResponsesObject) | The list of possible responses as they are returned from executing this operation. |
| [`callbacks`](#almacdkopenapixoperationobjectpropertycallbacks) | {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.CallbackObject`](#@alma-cdk/openapix.CallbackObject)} | A map of possible out-of band callbacks related to the parent operation. |
| [`deprecated`](#almacdkopenapixoperationobjectpropertydeprecated) | `boolean` | Declares this operation to be deprecated. |
| [`description`](#almacdkopenapixoperationobjectpropertydescription) | `string` | A verbose explanation of the operation behavior. |
| [`externalDocs`](#almacdkopenapixoperationobjectpropertyexternaldocs) | [`@alma-cdk/openapix.ExternalDocumentationObject`](#@alma-cdk/openapix.ExternalDocumentationObject) | Additional external documentation for this operation. |
| [`operationId`](#almacdkopenapixoperationobjectpropertyoperationid) | `string` | Unique string used to identify the operation. |
| [`parameters`](#almacdkopenapixoperationobjectpropertyparameters) | [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.ParameterObject`](#@alma-cdk/openapix.ParameterObject)[] | A list of parameters that are applicable for this operation. |
| [`requestBody`](#almacdkopenapixoperationobjectpropertyrequestbody) | [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.RequestBodyObject`](#@alma-cdk/openapix.RequestBodyObject) | The request body applicable for this operation. |
| [`security`](#almacdkopenapixoperationobjectpropertysecurity) | [`@alma-cdk/openapix.SecurityRequirementObject`](#@alma-cdk/openapix.SecurityRequirementObject)[] | A declaration of which security mechanisms can be used for this operation. |
| [`summary`](#almacdkopenapixoperationobjectpropertysummary) | `string` | A short summary of what the operation does. |
| [`tags`](#almacdkopenapixoperationobjectpropertytags) | `string`[] | A list of tags for API documentation control. |

---

##### `responses`<sup>Required</sup> <a name="@alma-cdk/openapix.OperationObject.property.responses" id="almacdkopenapixoperationobjectpropertyresponses"></a>

```typescript
public readonly responses: ResponsesObject;
```

- *Type:* [`@alma-cdk/openapix.ResponsesObject`](#@alma-cdk/openapix.ResponsesObject)

The list of possible responses as they are returned from executing this operation.

---

##### `callbacks`<sup>Optional</sup> <a name="@alma-cdk/openapix.OperationObject.property.callbacks" id="almacdkopenapixoperationobjectpropertycallbacks"></a>

```typescript
public readonly callbacks: {[ key: string ]: ReferenceObject | CallbackObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.CallbackObject`](#@alma-cdk/openapix.CallbackObject)}

A map of possible out-of band callbacks related to the parent operation.

The key is a unique identifier for the Callback Object. Each value in the map is a Callback Object that describes a request that may be initiated by the API provider and the expected responses.

---

##### `deprecated`<sup>Optional</sup> <a name="@alma-cdk/openapix.OperationObject.property.deprecated" id="almacdkopenapixoperationobjectpropertydeprecated"></a>

```typescript
public readonly deprecated: boolean;
```

- *Type:* `boolean`

Declares this operation to be deprecated.

Consumers SHOULD refrain from usage of the declared operation. Default value is false.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.OperationObject.property.description" id="almacdkopenapixoperationobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A verbose explanation of the operation behavior.

CommonMark syntax MAY be used for rich text representation.

---

##### `externalDocs`<sup>Optional</sup> <a name="@alma-cdk/openapix.OperationObject.property.externalDocs" id="almacdkopenapixoperationobjectpropertyexternaldocs"></a>

```typescript
public readonly externalDocs: ExternalDocumentationObject;
```

- *Type:* [`@alma-cdk/openapix.ExternalDocumentationObject`](#@alma-cdk/openapix.ExternalDocumentationObject)

Additional external documentation for this operation.

---

##### `operationId`<sup>Optional</sup> <a name="@alma-cdk/openapix.OperationObject.property.operationId" id="almacdkopenapixoperationobjectpropertyoperationid"></a>

```typescript
public readonly operationId: string;
```

- *Type:* `string`

Unique string used to identify the operation.

The id MUST be unique among all operations described in the API. The operationId value is case-sensitive. Tools and libraries MAY use the operationId to uniquely identify an operation, therefore, it is RECOMMENDED to follow common programming naming conventions.

---

##### `parameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.OperationObject.property.parameters" id="almacdkopenapixoperationobjectpropertyparameters"></a>

```typescript
public readonly parameters: ReferenceObject | ParameterObject[];
```

- *Type:* [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.ParameterObject`](#@alma-cdk/openapix.ParameterObject)[]

A list of parameters that are applicable for this operation.

If a parameter is already defined at the Path Item, the new definition will override it but can never remove it. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object's components/parameters.

---

##### `requestBody`<sup>Optional</sup> <a name="@alma-cdk/openapix.OperationObject.property.requestBody" id="almacdkopenapixoperationobjectpropertyrequestbody"></a>

```typescript
public readonly requestBody: ReferenceObject | RequestBodyObject;
```

- *Type:* [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.RequestBodyObject`](#@alma-cdk/openapix.RequestBodyObject)

The request body applicable for this operation.

The requestBody is only supported in HTTP methods where the HTTP 1.1 specification RFC7231 has explicitly defined semantics for request bodies. In other cases where the HTTP spec is vague, requestBody SHALL be ignored by consumers.

---

##### `security`<sup>Optional</sup> <a name="@alma-cdk/openapix.OperationObject.property.security" id="almacdkopenapixoperationobjectpropertysecurity"></a>

```typescript
public readonly security: SecurityRequirementObject[];
```

- *Type:* [`@alma-cdk/openapix.SecurityRequirementObject`](#@alma-cdk/openapix.SecurityRequirementObject)[]

A declaration of which security mechanisms can be used for this operation.

The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. To make security optional, an empty security requirement ({}) can be included in the array. This definition overrides any declared top-level security. To remove a top-level security declaration, an empty array can be used.

---

##### `summary`<sup>Optional</sup> <a name="@alma-cdk/openapix.OperationObject.property.summary" id="almacdkopenapixoperationobjectpropertysummary"></a>

```typescript
public readonly summary: string;
```

- *Type:* `string`

A short summary of what the operation does.

---

##### `tags`<sup>Optional</sup> <a name="@alma-cdk/openapix.OperationObject.property.tags" id="almacdkopenapixoperationobjectpropertytags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* `string`[]

A list of tags for API documentation control.

Tags can be used for logical grouping of operations by resources or any other qualifier.

---

### ParameterObject <a name="@alma-cdk/openapix.ParameterObject" id="almacdkopenapixparameterobject"></a>

Describes a single operation parameter.

A unique parameter is defined by a combination of a name and location.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ParameterObject } from '@alma-cdk/openapix'

const parameterObject: ParameterObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`in`](#almacdkopenapixparameterobjectpropertyin)<span title="Required">*</span> | `string` | The location of the parameter. |
| [`name`](#almacdkopenapixparameterobjectpropertyname)<span title="Required">*</span> | `string` | The name of the parameter. Parameter names are case sensitive. |
| [`allowEmptyValue`](#almacdkopenapixparameterobjectpropertyallowemptyvalue) | `boolean` | Sets the ability to pass empty-valued parameters. |
| [`deprecated`](#almacdkopenapixparameterobjectpropertydeprecated) | `boolean` | Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. |
| [`description`](#almacdkopenapixparameterobjectpropertydescription) | `string` | A brief description of the parameter. |
| [`required`](#almacdkopenapixparameterobjectpropertyrequired) | `boolean` | Determines whether this parameter is mandatory. |

---

##### `in`<sup>Required</sup> <a name="@alma-cdk/openapix.ParameterObject.property.in" id="almacdkopenapixparameterobjectpropertyin"></a>

```typescript
public readonly in: string;
```

- *Type:* `string`

The location of the parameter.

Possible values are "query", "header", "path" or "cookie".

---

##### `name`<sup>Required</sup> <a name="@alma-cdk/openapix.ParameterObject.property.name" id="almacdkopenapixparameterobjectpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the parameter. Parameter names are case sensitive.

If in is "path", the name field MUST correspond to a template expression occurring within the path field in the Paths Object. See Path Templating for further information. If in is "header" and the name field is "Accept", "Content-Type" or "Authorization", the parameter definition SHALL be ignored. For all other cases, the name corresponds to the parameter name used by the in property.

---

##### `allowEmptyValue`<sup>Optional</sup> <a name="@alma-cdk/openapix.ParameterObject.property.allowEmptyValue" id="almacdkopenapixparameterobjectpropertyallowemptyvalue"></a>

```typescript
public readonly allowEmptyValue: boolean;
```

- *Type:* `boolean`

Sets the ability to pass empty-valued parameters.

This is valid only for query parameters and allows sending a parameter with an empty value. Default value is false. If style is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.

---

##### `deprecated`<sup>Optional</sup> <a name="@alma-cdk/openapix.ParameterObject.property.deprecated" id="almacdkopenapixparameterobjectpropertydeprecated"></a>

```typescript
public readonly deprecated: boolean;
```

- *Type:* `boolean`

Specifies that a parameter is deprecated and SHOULD be transitioned out of usage.

Default value is false.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.ParameterObject.property.description" id="almacdkopenapixparameterobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A brief description of the parameter.

This could contain examples of use. CommonMark syntax MAY be used for rich text representation.

---

##### `required`<sup>Optional</sup> <a name="@alma-cdk/openapix.ParameterObject.property.required" id="almacdkopenapixparameterobjectpropertyrequired"></a>

```typescript
public readonly required: boolean;
```

- *Type:* `boolean`

Determines whether this parameter is mandatory.

If the parameter location is "path", this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be included and its default value is false.

---

### PathItemObject <a name="@alma-cdk/openapix.PathItemObject" id="almacdkopenapixpathitemobject"></a>

Describes the operations available on a single path.

A Path Item MAY be empty, due to ACL constraints. The path itself is still exposed to the documentation viewer but they will not know which operations and parameters are available.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PathItemObject } from '@alma-cdk/openapix'

const pathItemObject: PathItemObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`delete`](#almacdkopenapixpathitemobjectpropertydelete) | [`@alma-cdk/openapix.OperationObject`](#@alma-cdk/openapix.OperationObject) | A definition of a DELETE operation on this path. |
| [`description`](#almacdkopenapixpathitemobjectpropertydescription) | `string` | An optional, string description, intended to apply to all operations in this path. |
| [`get`](#almacdkopenapixpathitemobjectpropertyget) | [`@alma-cdk/openapix.OperationObject`](#@alma-cdk/openapix.OperationObject) | A definition of a GET operation on this path. |
| [`head`](#almacdkopenapixpathitemobjectpropertyhead) | [`@alma-cdk/openapix.OperationObject`](#@alma-cdk/openapix.OperationObject) | A definition of a HEAD operation on this path. |
| [`options`](#almacdkopenapixpathitemobjectpropertyoptions) | [`@alma-cdk/openapix.OperationObject`](#@alma-cdk/openapix.OperationObject) | A definition of a OPTIONS operation on this path. |
| [`parameters`](#almacdkopenapixpathitemobjectpropertyparameters) | [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.ParameterObject`](#@alma-cdk/openapix.ParameterObject)[] | A list of parameters that are applicable for all the operations described under this path. |
| [`patch`](#almacdkopenapixpathitemobjectpropertypatch) | [`@alma-cdk/openapix.OperationObject`](#@alma-cdk/openapix.OperationObject) | A definition of a PATCH operation on this path. |
| [`post`](#almacdkopenapixpathitemobjectpropertypost) | [`@alma-cdk/openapix.OperationObject`](#@alma-cdk/openapix.OperationObject) | A definition of a POST operation on this path. |
| [`put`](#almacdkopenapixpathitemobjectpropertyput) | [`@alma-cdk/openapix.OperationObject`](#@alma-cdk/openapix.OperationObject) | A definition of a PUT operation on this path. |
| [`summary`](#almacdkopenapixpathitemobjectpropertysummary) | `string` | An optional, string summary, intended to apply to all operations in this path. |
| [`trace`](#almacdkopenapixpathitemobjectpropertytrace) | [`@alma-cdk/openapix.OperationObject`](#@alma-cdk/openapix.OperationObject) | A definition of a TRACE operation on this path. |

---

##### `delete`<sup>Optional</sup> <a name="@alma-cdk/openapix.PathItemObject.property.delete" id="almacdkopenapixpathitemobjectpropertydelete"></a>

```typescript
public readonly delete: OperationObject;
```

- *Type:* [`@alma-cdk/openapix.OperationObject`](#@alma-cdk/openapix.OperationObject)

A definition of a DELETE operation on this path.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.PathItemObject.property.description" id="almacdkopenapixpathitemobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

An optional, string description, intended to apply to all operations in this path.

CommonMark syntax MAY be used for rich text representation.

---

##### `get`<sup>Optional</sup> <a name="@alma-cdk/openapix.PathItemObject.property.get" id="almacdkopenapixpathitemobjectpropertyget"></a>

```typescript
public readonly get: OperationObject;
```

- *Type:* [`@alma-cdk/openapix.OperationObject`](#@alma-cdk/openapix.OperationObject)

A definition of a GET operation on this path.

---

##### `head`<sup>Optional</sup> <a name="@alma-cdk/openapix.PathItemObject.property.head" id="almacdkopenapixpathitemobjectpropertyhead"></a>

```typescript
public readonly head: OperationObject;
```

- *Type:* [`@alma-cdk/openapix.OperationObject`](#@alma-cdk/openapix.OperationObject)

A definition of a HEAD operation on this path.

---

##### `options`<sup>Optional</sup> <a name="@alma-cdk/openapix.PathItemObject.property.options" id="almacdkopenapixpathitemobjectpropertyoptions"></a>

```typescript
public readonly options: OperationObject;
```

- *Type:* [`@alma-cdk/openapix.OperationObject`](#@alma-cdk/openapix.OperationObject)

A definition of a OPTIONS operation on this path.

---

##### `parameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.PathItemObject.property.parameters" id="almacdkopenapixpathitemobjectpropertyparameters"></a>

```typescript
public readonly parameters: ReferenceObject | ParameterObject[];
```

- *Type:* [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.ParameterObject`](#@alma-cdk/openapix.ParameterObject)[]

A list of parameters that are applicable for all the operations described under this path.

These parameters can be overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object's components/parameters.

---

##### `patch`<sup>Optional</sup> <a name="@alma-cdk/openapix.PathItemObject.property.patch" id="almacdkopenapixpathitemobjectpropertypatch"></a>

```typescript
public readonly patch: OperationObject;
```

- *Type:* [`@alma-cdk/openapix.OperationObject`](#@alma-cdk/openapix.OperationObject)

A definition of a PATCH operation on this path.

---

##### `post`<sup>Optional</sup> <a name="@alma-cdk/openapix.PathItemObject.property.post" id="almacdkopenapixpathitemobjectpropertypost"></a>

```typescript
public readonly post: OperationObject;
```

- *Type:* [`@alma-cdk/openapix.OperationObject`](#@alma-cdk/openapix.OperationObject)

A definition of a POST operation on this path.

---

##### `put`<sup>Optional</sup> <a name="@alma-cdk/openapix.PathItemObject.property.put" id="almacdkopenapixpathitemobjectpropertyput"></a>

```typescript
public readonly put: OperationObject;
```

- *Type:* [`@alma-cdk/openapix.OperationObject`](#@alma-cdk/openapix.OperationObject)

A definition of a PUT operation on this path.

---

##### `summary`<sup>Optional</sup> <a name="@alma-cdk/openapix.PathItemObject.property.summary" id="almacdkopenapixpathitemobjectpropertysummary"></a>

```typescript
public readonly summary: string;
```

- *Type:* `string`

An optional, string summary, intended to apply to all operations in this path.

---

##### `trace`<sup>Optional</sup> <a name="@alma-cdk/openapix.PathItemObject.property.trace" id="almacdkopenapixpathitemobjectpropertytrace"></a>

```typescript
public readonly trace: OperationObject;
```

- *Type:* [`@alma-cdk/openapix.OperationObject`](#@alma-cdk/openapix.OperationObject)

A definition of a TRACE operation on this path.

---

### Paths <a name="@alma-cdk/openapix.Paths" id="almacdkopenapixpaths"></a>

Paths with methods containing integrations.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { Paths } from '@alma-cdk/openapix'

const paths: Paths = { ... }
```


### PathsObject <a name="@alma-cdk/openapix.PathsObject" id="almacdkopenapixpathsobject"></a>

Holds the relative paths to the individual endpoints and their operations.

The path is appended to the URL from the Server Object in order to construct the full URL. The Paths MAY be empty, due to ACL constraints.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PathsObject } from '@alma-cdk/openapix'

const pathsObject: PathsObject = { ... }
```


### ReferenceObject <a name="@alma-cdk/openapix.ReferenceObject" id="almacdkopenapixreferenceobject"></a>

A simple object to allow referencing other components in the specification, internally and externally.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ReferenceObject } from '@alma-cdk/openapix'

const referenceObject: ReferenceObject = { ... }
```


### RequestBodyObject <a name="@alma-cdk/openapix.RequestBodyObject" id="almacdkopenapixrequestbodyobject"></a>

Describes a single request body.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { RequestBodyObject } from '@alma-cdk/openapix'

const requestBodyObject: RequestBodyObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`content`](#almacdkopenapixrequestbodyobjectpropertycontent)<span title="Required">*</span> | {[ key: string ]: [`@alma-cdk/openapix.MediaTypeObject`](#@alma-cdk/openapix.MediaTypeObject)} | The content of the request body. |
| [`description`](#almacdkopenapixrequestbodyobjectpropertydescription) | `string` | A brief description of the request body. |
| [`required`](#almacdkopenapixrequestbodyobjectpropertyrequired) | `boolean` | Determines if the request body is required in the request. |

---

##### `content`<sup>Required</sup> <a name="@alma-cdk/openapix.RequestBodyObject.property.content" id="almacdkopenapixrequestbodyobjectpropertycontent"></a>

```typescript
public readonly content: {[ key: string ]: MediaTypeObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.MediaTypeObject`](#@alma-cdk/openapix.MediaTypeObject)}

The content of the request body.

The key is a media type or media type range and the value describes it. For requests that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.RequestBodyObject.property.description" id="almacdkopenapixrequestbodyobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A brief description of the request body.

This could contain examples of use. CommonMark syntax MAY be used for rich text representation.

---

##### `required`<sup>Optional</sup> <a name="@alma-cdk/openapix.RequestBodyObject.property.required" id="almacdkopenapixrequestbodyobjectpropertyrequired"></a>

```typescript
public readonly required: boolean;
```

- *Type:* `boolean`

Determines if the request body is required in the request.

Defaults to false.

---

### ResponseObject <a name="@alma-cdk/openapix.ResponseObject" id="almacdkopenapixresponseobject"></a>

Describes a single response from an API Operation, including design-time, static links to operations based on the response.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ResponseObject } from '@alma-cdk/openapix'

const responseObject: ResponseObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`description`](#almacdkopenapixresponseobjectpropertydescription)<span title="Required">*</span> | `string` | A short description of the response. |
| [`content`](#almacdkopenapixresponseobjectpropertycontent) | {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.MediaTypeObject`](#@alma-cdk/openapix.MediaTypeObject)} | A map containing descriptions of potential response payloads. |
| [`headers`](#almacdkopenapixresponseobjectpropertyheaders) | {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.HeaderObject`](#@alma-cdk/openapix.HeaderObject)} | Maps a header name to its definition. |
| [`links`](#almacdkopenapixresponseobjectpropertylinks) | {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) \| [`@alma-cdk/openapix.LinkObject`](#@alma-cdk/openapix.LinkObject)} | A map of operations links that can be followed from the response. |

---

##### `description`<sup>Required</sup> <a name="@alma-cdk/openapix.ResponseObject.property.description" id="almacdkopenapixresponseobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A short description of the response.

CommonMark syntax MAY be used for rich text representation.

---

##### `content`<sup>Optional</sup> <a name="@alma-cdk/openapix.ResponseObject.property.content" id="almacdkopenapixresponseobjectpropertycontent"></a>

```typescript
public readonly content: {[ key: string ]: ReferenceObject | MediaTypeObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.MediaTypeObject`](#@alma-cdk/openapix.MediaTypeObject)}

A map containing descriptions of potential response payloads.

The key is a media type or media type range and the value describes it. For responses that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*

---

##### `headers`<sup>Optional</sup> <a name="@alma-cdk/openapix.ResponseObject.property.headers" id="almacdkopenapixresponseobjectpropertyheaders"></a>

```typescript
public readonly headers: {[ key: string ]: ReferenceObject | HeaderObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.HeaderObject`](#@alma-cdk/openapix.HeaderObject)}

Maps a header name to its definition.

RFC7230 states header names are case insensitive. If a response header is defined with the name "Content-Type", it SHALL be ignored.

---

##### `links`<sup>Optional</sup> <a name="@alma-cdk/openapix.ResponseObject.property.links" id="almacdkopenapixresponseobjectpropertylinks"></a>

```typescript
public readonly links: {[ key: string ]: ReferenceObject | LinkObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.ReferenceObject`](#@alma-cdk/openapix.ReferenceObject) | [`@alma-cdk/openapix.LinkObject`](#@alma-cdk/openapix.LinkObject)}

A map of operations links that can be followed from the response.

The key of the map is a short name for the link, following the naming constraints of the names for Component Objects.

---

### ResponsesObject <a name="@alma-cdk/openapix.ResponsesObject" id="almacdkopenapixresponsesobject"></a>

A container for the expected responses of an operation.

The container maps a HTTP response code to the expected response. The documentation is not necessarily expected to cover all possible HTTP response codes because they may not be known in advance. However, documentation is expected to cover a successful operation response and any known errors. The default MAY be used as a default response object for all HTTP codes that are not covered individually by the specification. The Responses Object MUST contain at least one response code, and it SHOULD be the response for a successful operation call.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ResponsesObject } from '@alma-cdk/openapix'

const responsesObject: ResponsesObject = { ... }
```


### SchemaObject <a name="@alma-cdk/openapix.SchemaObject" id="almacdkopenapixschemaobject"></a>

The Schema Object allows the definition of input and output data types.

These types can be objects, but also primitives and arrays. This object is an extended subset of the JSON Schema Specification Wright Draft 00. For more information about the properties, see JSON Schema Core and JSON Schema Validation. Unless stated otherwise, the property definitions follow the JSON Schema.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SchemaObject } from '@alma-cdk/openapix'

const schemaObject: SchemaObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`deprecated`](#almacdkopenapixschemaobjectpropertydeprecated) | `boolean` | Specifies that a schema is deprecated and SHOULD be transitioned out of usage. |
| [`discriminator`](#almacdkopenapixschemaobjectpropertydiscriminator) | [`@alma-cdk/openapix.DiscriminatorObject`](#@alma-cdk/openapix.DiscriminatorObject) | Adds support for polymorphism. |
| [`example`](#almacdkopenapixschemaobjectpropertyexample) | `any` | A free-form property to include an example of an instance for this schema. |
| [`externalDocs`](#almacdkopenapixschemaobjectpropertyexternaldocs) | [`@alma-cdk/openapix.ExternalDocumentationObject`](#@alma-cdk/openapix.ExternalDocumentationObject) | Additional external documentation for this schema. |
| [`nullable`](#almacdkopenapixschemaobjectpropertynullable) | `boolean` | A true value adds "null" to the allowed type specified by the type keyword, only if type is explicitly defined within the same Schema Object. |
| [`readOnly`](#almacdkopenapixschemaobjectpropertyreadonly) | `boolean` | Relevant only for Schema "properties" definitions. |
| [`writeOnly`](#almacdkopenapixschemaobjectpropertywriteonly) | `boolean` | Relevant only for Schema "properties" definitions. |
| [`xml`](#almacdkopenapixschemaobjectpropertyxml) | [`@alma-cdk/openapix.XmlObject`](#@alma-cdk/openapix.XmlObject) | This MAY be used only on properties schemas. |

---

##### `deprecated`<sup>Optional</sup> <a name="@alma-cdk/openapix.SchemaObject.property.deprecated" id="almacdkopenapixschemaobjectpropertydeprecated"></a>

```typescript
public readonly deprecated: boolean;
```

- *Type:* `boolean`

Specifies that a schema is deprecated and SHOULD be transitioned out of usage.

Default value is false.

---

##### `discriminator`<sup>Optional</sup> <a name="@alma-cdk/openapix.SchemaObject.property.discriminator" id="almacdkopenapixschemaobjectpropertydiscriminator"></a>

```typescript
public readonly discriminator: DiscriminatorObject;
```

- *Type:* [`@alma-cdk/openapix.DiscriminatorObject`](#@alma-cdk/openapix.DiscriminatorObject)

Adds support for polymorphism.

The discriminator is an object name that is used to differentiate between other schemas which may satisfy the payload description. See Composition and Inheritance for more details.

---

##### `example`<sup>Optional</sup> <a name="@alma-cdk/openapix.SchemaObject.property.example" id="almacdkopenapixschemaobjectpropertyexample"></a>

```typescript
public readonly example: any;
```

- *Type:* `any`

A free-form property to include an example of an instance for this schema.

To represent examples that cannot be naturally represented in JSON or YAML, a string value can be used to contain the example with escaping where necessary.

---

##### `externalDocs`<sup>Optional</sup> <a name="@alma-cdk/openapix.SchemaObject.property.externalDocs" id="almacdkopenapixschemaobjectpropertyexternaldocs"></a>

```typescript
public readonly externalDocs: ExternalDocumentationObject;
```

- *Type:* [`@alma-cdk/openapix.ExternalDocumentationObject`](#@alma-cdk/openapix.ExternalDocumentationObject)

Additional external documentation for this schema.

---

##### `nullable`<sup>Optional</sup> <a name="@alma-cdk/openapix.SchemaObject.property.nullable" id="almacdkopenapixschemaobjectpropertynullable"></a>

```typescript
public readonly nullable: boolean;
```

- *Type:* `boolean`

A true value adds "null" to the allowed type specified by the type keyword, only if type is explicitly defined within the same Schema Object.

Other Schema Object constraints retain their defined behavior, and therefore may disallow the use of null as a value. A false value leaves the specified or default type unmodified. The default value is false.

---

##### `readOnly`<sup>Optional</sup> <a name="@alma-cdk/openapix.SchemaObject.property.readOnly" id="almacdkopenapixschemaobjectpropertyreadonly"></a>

```typescript
public readonly readOnly: boolean;
```

- *Type:* `boolean`

Relevant only for Schema "properties" definitions.

Declares the property as "read only". This means that it MAY be sent as part of a response but SHOULD NOT be sent as part of the request. If the property is marked as readOnly being true and is in the required list, the required will take effect on the response only. A property MUST NOT be marked as both readOnly and writeOnly being true. Default value is false.

---

##### `writeOnly`<sup>Optional</sup> <a name="@alma-cdk/openapix.SchemaObject.property.writeOnly" id="almacdkopenapixschemaobjectpropertywriteonly"></a>

```typescript
public readonly writeOnly: boolean;
```

- *Type:* `boolean`

Relevant only for Schema "properties" definitions.

Declares the property as "write only". Therefore, it MAY be sent as part of a request but SHOULD NOT be sent as part of the response. If the property is marked as writeOnly being true and is in the required list, the required will take effect on the request only. A property MUST NOT be marked as both readOnly and writeOnly being true. Default value is false.

---

##### `xml`<sup>Optional</sup> <a name="@alma-cdk/openapix.SchemaObject.property.xml" id="almacdkopenapixschemaobjectpropertyxml"></a>

```typescript
public readonly xml: XmlObject;
```

- *Type:* [`@alma-cdk/openapix.XmlObject`](#@alma-cdk/openapix.XmlObject)

This MAY be used only on properties schemas.

It has no effect on root schemas. Adds additional metadata to describe the XML representation of this property.

---

### SchemaProps <a name="@alma-cdk/openapix.SchemaProps" id="almacdkopenapixschemaprops"></a>

Props given to `new Schema`.

Essentially an OpenApi v3 "source" without `x-amazon-apigateway-` extensions.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SchemaProps } from '@alma-cdk/openapix'

const schemaProps: SchemaProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`info`](#almacdkopenapixschemapropspropertyinfo)<span title="Required">*</span> | [`@alma-cdk/openapix.InfoObject`](#@alma-cdk/openapix.InfoObject) | Provides metadata about the API. |
| [`openapi`](#almacdkopenapixschemapropspropertyopenapi)<span title="Required">*</span> | `string` | This string MUST be the semantic version number of the OpenAPI Specification version that the OpenAPI document uses. |
| [`paths`](#almacdkopenapixschemapropspropertypaths)<span title="Required">*</span> | [`@alma-cdk/openapix.PathsObject`](#@alma-cdk/openapix.PathsObject) | The available paths and operations for the API. |
| [`components`](#almacdkopenapixschemapropspropertycomponents) | [`@alma-cdk/openapix.ComponentsObject`](#@alma-cdk/openapix.ComponentsObject) | An element to hold various schemas for the specification. |
| [`externalDocs`](#almacdkopenapixschemapropspropertyexternaldocs) | [`@alma-cdk/openapix.ExternalDocumentationObject`](#@alma-cdk/openapix.ExternalDocumentationObject) | Additional external documentation. |
| [`security`](#almacdkopenapixschemapropspropertysecurity) | [`@alma-cdk/openapix.SecurityRequirementObject`](#@alma-cdk/openapix.SecurityRequirementObject)[] | A declaration of which security mechanisms can be used across the API. |
| [`servers`](#almacdkopenapixschemapropspropertyservers) | [`@alma-cdk/openapix.ServerObject`](#@alma-cdk/openapix.ServerObject)[] | An array of Server Objects, which provide connectivity information to a target server. |
| [`tags`](#almacdkopenapixschemapropspropertytags) | [`@alma-cdk/openapix.TagObject`](#@alma-cdk/openapix.TagObject)[] | A list of tags used by the specification with additional metadata. |

---

##### `info`<sup>Required</sup> <a name="@alma-cdk/openapix.SchemaProps.property.info" id="almacdkopenapixschemapropspropertyinfo"></a>

```typescript
public readonly info: InfoObject;
```

- *Type:* [`@alma-cdk/openapix.InfoObject`](#@alma-cdk/openapix.InfoObject)

Provides metadata about the API.

The metadata MAY be used by tooling as required.

---

##### `openapi`<sup>Required</sup> <a name="@alma-cdk/openapix.SchemaProps.property.openapi" id="almacdkopenapixschemapropspropertyopenapi"></a>

```typescript
public readonly openapi: string;
```

- *Type:* `string`

This string MUST be the semantic version number of the OpenAPI Specification version that the OpenAPI document uses.

The openapi field SHOULD be used by tooling specifications and clients to interpret the OpenAPI document. This is not related to the API info.version string.

---

##### `paths`<sup>Required</sup> <a name="@alma-cdk/openapix.SchemaProps.property.paths" id="almacdkopenapixschemapropspropertypaths"></a>

```typescript
public readonly paths: PathsObject;
```

- *Type:* [`@alma-cdk/openapix.PathsObject`](#@alma-cdk/openapix.PathsObject)

The available paths and operations for the API.

---

##### `components`<sup>Optional</sup> <a name="@alma-cdk/openapix.SchemaProps.property.components" id="almacdkopenapixschemapropspropertycomponents"></a>

```typescript
public readonly components: ComponentsObject;
```

- *Type:* [`@alma-cdk/openapix.ComponentsObject`](#@alma-cdk/openapix.ComponentsObject)

An element to hold various schemas for the specification.

---

##### `externalDocs`<sup>Optional</sup> <a name="@alma-cdk/openapix.SchemaProps.property.externalDocs" id="almacdkopenapixschemapropspropertyexternaldocs"></a>

```typescript
public readonly externalDocs: ExternalDocumentationObject;
```

- *Type:* [`@alma-cdk/openapix.ExternalDocumentationObject`](#@alma-cdk/openapix.ExternalDocumentationObject)

Additional external documentation.

---

##### `security`<sup>Optional</sup> <a name="@alma-cdk/openapix.SchemaProps.property.security" id="almacdkopenapixschemapropspropertysecurity"></a>

```typescript
public readonly security: SecurityRequirementObject[];
```

- *Type:* [`@alma-cdk/openapix.SecurityRequirementObject`](#@alma-cdk/openapix.SecurityRequirementObject)[]

A declaration of which security mechanisms can be used across the API.

The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. Individual operations can override this definition. To make security optional, an empty security requirement ({}) can be included in the array.

---

##### `servers`<sup>Optional</sup> <a name="@alma-cdk/openapix.SchemaProps.property.servers" id="almacdkopenapixschemapropspropertyservers"></a>

```typescript
public readonly servers: ServerObject[];
```

- *Type:* [`@alma-cdk/openapix.ServerObject`](#@alma-cdk/openapix.ServerObject)[]

An array of Server Objects, which provide connectivity information to a target server.

If the servers property is not provided, or is an empty array, the default value would be a Server Object with a url value of /.

---

##### `tags`<sup>Optional</sup> <a name="@alma-cdk/openapix.SchemaProps.property.tags" id="almacdkopenapixschemapropspropertytags"></a>

```typescript
public readonly tags: TagObject[];
```

- *Type:* [`@alma-cdk/openapix.TagObject`](#@alma-cdk/openapix.TagObject)[]

A list of tags used by the specification with additional metadata.

The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the Operation Object must be declared. The tags that are not declared MAY be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique.

---

### SecurityRequirementObject <a name="@alma-cdk/openapix.SecurityRequirementObject" id="almacdkopenapixsecurityrequirementobject"></a>

Lists the required security schemes to execute this operation.

The name used for each property MUST correspond to a security scheme declared in the Security Schemes under the Components Object. Security Requirement Objects that contain multiple schemes require that all schemes MUST be satisfied for a request to be authorized. This enables support for scenarios where multiple query parameters or HTTP headers are required to convey security information. When a list of Security Requirement Objects is defined on the OpenAPI Object or Operation Object, only one of the Security Requirement Objects in the list needs to be satisfied to authorize the request.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SecurityRequirementObject } from '@alma-cdk/openapix'

const securityRequirementObject: SecurityRequirementObject = { ... }
```


### SecuritySchemeObject <a name="@alma-cdk/openapix.SecuritySchemeObject" id="almacdkopenapixsecurityschemeobject"></a>

Defines a security scheme that can be used by the operations.

Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), OAuth2's common flows (implicit, password, client credentials and authorization code) as defined in RFC6749, and OpenID Connect Discovery.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SecuritySchemeObject } from '@alma-cdk/openapix'

const securitySchemeObject: SecuritySchemeObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`type`](#almacdkopenapixsecurityschemeobjectpropertytype)<span title="Required">*</span> | `string` | The type of the security scheme. |
| [`bearerFormat`](#almacdkopenapixsecurityschemeobjectpropertybearerformat) | `string` | A hint to the client to identify how the bearer token is formatted. |
| [`description`](#almacdkopenapixsecurityschemeobjectpropertydescription) | `string` | A short description for security scheme. |
| [`flow`](#almacdkopenapixsecurityschemeobjectpropertyflow) | [`@alma-cdk/openapix.OAuthFlowsObject`](#@alma-cdk/openapix.OAuthFlowsObject) | An object containing configuration information for the flow types supported. |
| [`in`](#almacdkopenapixsecurityschemeobjectpropertyin) | `string` | The location of the API key. |
| [`name`](#almacdkopenapixsecurityschemeobjectpropertyname) | `string` | The name of the header, query or cookie parameter to be used. |
| [`openIdConnectUrl`](#almacdkopenapixsecurityschemeobjectpropertyopenidconnecturl) | `string` | OpenId Connect URL to discover OAuth2 configuration values. |
| [`scheme`](#almacdkopenapixsecurityschemeobjectpropertyscheme) | `string` | The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235. |

---

##### `type`<sup>Required</sup> <a name="@alma-cdk/openapix.SecuritySchemeObject.property.type" id="almacdkopenapixsecurityschemeobjectpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

The type of the security scheme.

Valid values are "apiKey", "http", "oauth2", "openIdConnect".

---

##### `bearerFormat`<sup>Optional</sup> <a name="@alma-cdk/openapix.SecuritySchemeObject.property.bearerFormat" id="almacdkopenapixsecurityschemeobjectpropertybearerformat"></a>

```typescript
public readonly bearerFormat: string;
```

- *Type:* `string`

A hint to the client to identify how the bearer token is formatted.

Bearer tokens are usually generated by an authorization server, so this information is primarily for documentation purposes.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.SecuritySchemeObject.property.description" id="almacdkopenapixsecurityschemeobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A short description for security scheme.

CommonMark syntax MAY be used for rich text representation.

---

##### `flow`<sup>Optional</sup> <a name="@alma-cdk/openapix.SecuritySchemeObject.property.flow" id="almacdkopenapixsecurityschemeobjectpropertyflow"></a>

```typescript
public readonly flow: OAuthFlowsObject;
```

- *Type:* [`@alma-cdk/openapix.OAuthFlowsObject`](#@alma-cdk/openapix.OAuthFlowsObject)

An object containing configuration information for the flow types supported.

REQUIRED for oauth2.

---

##### `in`<sup>Optional</sup> <a name="@alma-cdk/openapix.SecuritySchemeObject.property.in" id="almacdkopenapixsecurityschemeobjectpropertyin"></a>

```typescript
public readonly in: string;
```

- *Type:* `string`

The location of the API key.

Valid values are "query", "header" or "cookie". REQUIRED for apiKey.

---

##### `name`<sup>Optional</sup> <a name="@alma-cdk/openapix.SecuritySchemeObject.property.name" id="almacdkopenapixsecurityschemeobjectpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the header, query or cookie parameter to be used.

REQUIRED for apiKey.

---

##### `openIdConnectUrl`<sup>Optional</sup> <a name="@alma-cdk/openapix.SecuritySchemeObject.property.openIdConnectUrl" id="almacdkopenapixsecurityschemeobjectpropertyopenidconnecturl"></a>

```typescript
public readonly openIdConnectUrl: string;
```

- *Type:* `string`

OpenId Connect URL to discover OAuth2 configuration values.

This MUST be in the form of a URL. REQUIRED for openIdConnect.

---

##### `scheme`<sup>Optional</sup> <a name="@alma-cdk/openapix.SecuritySchemeObject.property.scheme" id="almacdkopenapixsecurityschemeobjectpropertyscheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* `string`

The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235.

The values used SHOULD be registered in the IANA Authentication Scheme registry. REQUIRED for http.

---

### ServerObject <a name="@alma-cdk/openapix.ServerObject" id="almacdkopenapixserverobject"></a>

An object representing a Server.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ServerObject } from '@alma-cdk/openapix'

const serverObject: ServerObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`url`](#almacdkopenapixserverobjectpropertyurl)<span title="Required">*</span> | `string` | REQUIRED. |
| [`description`](#almacdkopenapixserverobjectpropertydescription) | `string` | An optional string describing the host designated by the URL. |
| [`variables`](#almacdkopenapixserverobjectpropertyvariables) | {[ key: string ]: [`@alma-cdk/openapix.ServerVariableObject`](#@alma-cdk/openapix.ServerVariableObject)} | A map between a variable name and its value. |

---

##### `url`<sup>Required</sup> <a name="@alma-cdk/openapix.ServerObject.property.url" id="almacdkopenapixserverobjectpropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

REQUIRED.

A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that the host location is relative to the location where the OpenAPI document is being served. Variable substitutions will be made when a variable is named in {brackets}.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.ServerObject.property.description" id="almacdkopenapixserverobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

An optional string describing the host designated by the URL.

CommonMark syntax MAY be used for rich text representation.

---

##### `variables`<sup>Optional</sup> <a name="@alma-cdk/openapix.ServerObject.property.variables" id="almacdkopenapixserverobjectpropertyvariables"></a>

```typescript
public readonly variables: {[ key: string ]: ServerVariableObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.ServerVariableObject`](#@alma-cdk/openapix.ServerVariableObject)}

A map between a variable name and its value.

The value is used for substitution in the server's URL template.

---

### ServerVariableObject <a name="@alma-cdk/openapix.ServerVariableObject" id="almacdkopenapixservervariableobject"></a>

An object representing a Server Variable for server URL template substitution.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ServerVariableObject } from '@alma-cdk/openapix'

const serverVariableObject: ServerVariableObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`default`](#almacdkopenapixservervariableobjectpropertydefault)<span title="Required">*</span> | `string` | The default value to use for substitution, which SHALL be sent if an alternate value is not supplied. |
| [`description`](#almacdkopenapixservervariableobjectpropertydescription) | `string` | An optional description for the server variable. |
| [`enum`](#almacdkopenapixservervariableobjectpropertyenum) | `string`[] | An enumeration of string values to be used if the substitution options are from a limited set. |

---

##### `default`<sup>Required</sup> <a name="@alma-cdk/openapix.ServerVariableObject.property.default" id="almacdkopenapixservervariableobjectpropertydefault"></a>

```typescript
public readonly default: string;
```

- *Type:* `string`

The default value to use for substitution, which SHALL be sent if an alternate value is not supplied.

Note this behavior is different than the Schema Object's treatment of default values, because in those cases parameter values are optional. If the enum is defined, the value SHOULD exist in the enum's values.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.ServerVariableObject.property.description" id="almacdkopenapixservervariableobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

An optional description for the server variable.

CommonMark syntax MAY be used for rich text representation.

---

##### `enum`<sup>Optional</sup> <a name="@alma-cdk/openapix.ServerVariableObject.property.enum" id="almacdkopenapixservervariableobjectpropertyenum"></a>

```typescript
public readonly enum: string[];
```

- *Type:* `string`[]

An enumeration of string values to be used if the substitution options are from a limited set.

The array SHOULD NOT be empty.

---

### TagObject <a name="@alma-cdk/openapix.TagObject" id="almacdkopenapixtagobject"></a>

Adds metadata to a single tag that is used by the Operation Object.

It is not mandatory to have a Tag Object per tag defined in the Operation Object instances.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { TagObject } from '@alma-cdk/openapix'

const tagObject: TagObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`name`](#almacdkopenapixtagobjectpropertyname)<span title="Required">*</span> | `string` | The name of the tag. |
| [`description`](#almacdkopenapixtagobjectpropertydescription) | `string` | A short description for the tag. |
| [`externalDocs`](#almacdkopenapixtagobjectpropertyexternaldocs) | [`@alma-cdk/openapix.ExternalDocumentationObject`](#@alma-cdk/openapix.ExternalDocumentationObject) | Additional external documentation for this tag. |

---

##### `name`<sup>Required</sup> <a name="@alma-cdk/openapix.TagObject.property.name" id="almacdkopenapixtagobjectpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the tag.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.TagObject.property.description" id="almacdkopenapixtagobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A short description for the tag.

CommonMark syntax MAY be used for rich text representation.

---

##### `externalDocs`<sup>Optional</sup> <a name="@alma-cdk/openapix.TagObject.property.externalDocs" id="almacdkopenapixtagobjectpropertyexternaldocs"></a>

```typescript
public readonly externalDocs: ExternalDocumentationObject;
```

- *Type:* [`@alma-cdk/openapix.ExternalDocumentationObject`](#@alma-cdk/openapix.ExternalDocumentationObject)

Additional external documentation for this tag.

---

### Validator <a name="@alma-cdk/openapix.Validator" id="almacdkopenapixvalidator"></a>

Validator configuration.

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

Specifies details of the backend integration used for this method.

This extension is an extended property of the OpenAPI Operation object. The result is an API Gateway integration object.

> https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration.html

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { XAmazonApigatewayIntegration } from '@alma-cdk/openapix'

const xAmazonApigatewayIntegration: XAmazonApigatewayIntegration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`httpMethod`](#almacdkopenapixxamazonapigatewayintegrationpropertyhttpmethod)<span title="Required">*</span> | `string` | The HTTP method used in the integration request. |
| [`type`](#almacdkopenapixxamazonapigatewayintegrationpropertytype)<span title="Required">*</span> | [`aws-cdk-lib.aws_apigateway.IntegrationType`](#aws-cdk-lib.aws_apigateway.IntegrationType) | The type of integration with the specified backend. |
| [`uri`](#almacdkopenapixxamazonapigatewayintegrationpropertyuri)<span title="Required">*</span> | `string` | The endpoint URI of the backend. |
| [`cacheKeyParameters`](#almacdkopenapixxamazonapigatewayintegrationpropertycachekeyparameters) | `string`[] | A list of request parameters whose values are to be cached. |
| [`cacheNamespace`](#almacdkopenapixxamazonapigatewayintegrationpropertycachenamespace) | `string` | An API-specific tag group of related cached parameters. |
| [`connectionId`](#almacdkopenapixxamazonapigatewayintegrationpropertyconnectionid) | `string` | The ID of a VpcLink for the private integration. |
| [`connectionType`](#almacdkopenapixxamazonapigatewayintegrationpropertyconnectiontype) | [`aws-cdk-lib.aws_apigateway.ConnectionType`](#aws-cdk-lib.aws_apigateway.ConnectionType) | The integration connection type. |
| [`contentHandling`](#almacdkopenapixxamazonapigatewayintegrationpropertycontenthandling) | [`aws-cdk-lib.aws_apigateway.ContentHandling`](#aws-cdk-lib.aws_apigateway.ContentHandling) | Response payload encoding conversion types. |
| [`credentials`](#almacdkopenapixxamazonapigatewayintegrationpropertycredentials) | `string` | For AWS IAM role-based credentials, specify the ARN of an appropriate IAM role. |
| [`passthroughBehavior`](#almacdkopenapixxamazonapigatewayintegrationpropertypassthroughbehavior) | [`aws-cdk-lib.aws_apigateway.PassthroughBehavior`](#aws-cdk-lib.aws_apigateway.PassthroughBehavior) | Specifies how a request payload of unmapped content type is passed through the integration request without modification. |
| [`requestParameters`](#almacdkopenapixxamazonapigatewayintegrationpropertyrequestparameters) | [`@alma-cdk/openapix.XAmazonApigatewayIntegrationRequestParameters`](#@alma-cdk/openapix.XAmazonApigatewayIntegrationRequestParameters) | Specifies mappings from method request parameters to integration request parameters. |
| [`requestTemplates`](#almacdkopenapixxamazonapigatewayintegrationpropertyrequesttemplates) | [`@alma-cdk/openapix.XAmazonApigatewayIntegrationRequestTemplates`](#@alma-cdk/openapix.XAmazonApigatewayIntegrationRequestTemplates) | Mapping templates for a request payload of specified MIME types. |
| [`responses`](#almacdkopenapixxamazonapigatewayintegrationpropertyresponses) | [`@alma-cdk/openapix.XAmazonApigatewayIntegrationResponses`](#@alma-cdk/openapix.XAmazonApigatewayIntegrationResponses) | Defines the method's responses and specifies desired parameter mappings or payload mappings from integration responses to method responses. |
| [`timeoutInMillis`](#almacdkopenapixxamazonapigatewayintegrationpropertytimeoutinmillis) | `number` | Integration timeouts between 50 ms and 29,000 ms. |
| [`tlsConfig`](#almacdkopenapixxamazonapigatewayintegrationpropertytlsconfig) | [`@alma-cdk/openapix.XAmazonApigatewayIntegrationTlsConfig`](#@alma-cdk/openapix.XAmazonApigatewayIntegrationTlsConfig) | Specifies the TLS configuration for an integration. |

---

##### `httpMethod`<sup>Required</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.httpMethod" id="almacdkopenapixxamazonapigatewayintegrationpropertyhttpmethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* `string`
- *Default:* 'POST'

The HTTP method used in the integration request.

For Lambda function invocations, the value must be POST.

---

##### `type`<sup>Required</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.type" id="almacdkopenapixxamazonapigatewayintegrationpropertytype"></a>

```typescript
public readonly type: IntegrationType;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.IntegrationType`](#aws-cdk-lib.aws_apigateway.IntegrationType)

The type of integration with the specified backend.

Valid values are: - `http` or `http_proxy`, for integration with an HTTP backend. - `aws_proxy`, for integration with AWS Lambda functions. - `aws`, for integration with AWS Lambda functions or other AWS services, such as Amazon DynamoDB, Amazon Simple Notification Service, or Amazon Simple Queue Service. - `mock`, for integration with API Gateway without invoking any backend.

---

##### `uri`<sup>Required</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.uri" id="almacdkopenapixxamazonapigatewayintegrationpropertyuri"></a>

```typescript
public readonly uri: string;
```

- *Type:* `string`

The endpoint URI of the backend.

For integrations of the aws type, this is an ARN value. For the HTTP integration, this is the URL of the HTTP endpoint including the https or http scheme.

---

##### `cacheKeyParameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.cacheKeyParameters" id="almacdkopenapixxamazonapigatewayintegrationpropertycachekeyparameters"></a>

```typescript
public readonly cacheKeyParameters: string[];
```

- *Type:* `string`[]

A list of request parameters whose values are to be cached.

---

##### `cacheNamespace`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.cacheNamespace" id="almacdkopenapixxamazonapigatewayintegrationpropertycachenamespace"></a>

```typescript
public readonly cacheNamespace: string;
```

- *Type:* `string`

An API-specific tag group of related cached parameters.

---

##### `connectionId`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.connectionId" id="almacdkopenapixxamazonapigatewayintegrationpropertyconnectionid"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* `string`

The ID of a VpcLink for the private integration.

---

##### `connectionType`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.connectionType" id="almacdkopenapixxamazonapigatewayintegrationpropertyconnectiontype"></a>

```typescript
public readonly connectionType: ConnectionType;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.ConnectionType`](#aws-cdk-lib.aws_apigateway.ConnectionType)

The integration connection type.

The valid value is "VPC_LINK" for private integration or "INTERNET", otherwise.

---

##### `contentHandling`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.contentHandling" id="almacdkopenapixxamazonapigatewayintegrationpropertycontenthandling"></a>

```typescript
public readonly contentHandling: ContentHandling;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.ContentHandling`](#aws-cdk-lib.aws_apigateway.ContentHandling)

Response payload encoding conversion types.

Valid values are 1) CONVERT_TO_TEXT, for converting a binary payload into a base64-encoded string or converting a text payload into a utf-8-encoded string or passing through the text payload natively without modification, and 2) CONVERT_TO_BINARY, for converting a text payload into a base64-decoded blob or passing through a binary payload natively without modification.

---

##### `credentials`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.credentials" id="almacdkopenapixxamazonapigatewayintegrationpropertycredentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* `string`

For AWS IAM role-based credentials, specify the ARN of an appropriate IAM role.

If unspecified, credentials default to resource-based permissions that must be added manually to allow the API to access the resource. For more information, see Granting Permissions Using a Resource Policy.  Note: When using IAM credentials, make sure that AWS STS Regional endpoints are enabled for the Region where this API is deployed for best performance.

> https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#intro-permission-model-access-policy

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.passthroughBehavior" id="almacdkopenapixxamazonapigatewayintegrationpropertypassthroughbehavior"></a>

```typescript
public readonly passthroughBehavior: PassthroughBehavior;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.PassthroughBehavior`](#aws-cdk-lib.aws_apigateway.PassthroughBehavior)

Specifies how a request payload of unmapped content type is passed through the integration request without modification.

Supported values are when_no_templates, when_no_match, and never

---

##### `requestParameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.requestParameters" id="almacdkopenapixxamazonapigatewayintegrationpropertyrequestparameters"></a>

```typescript
public readonly requestParameters: XAmazonApigatewayIntegrationRequestParameters;
```

- *Type:* [`@alma-cdk/openapix.XAmazonApigatewayIntegrationRequestParameters`](#@alma-cdk/openapix.XAmazonApigatewayIntegrationRequestParameters)

Specifies mappings from method request parameters to integration request parameters.

Supported request parameters are querystring, path, header, and body.

---

##### `requestTemplates`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.requestTemplates" id="almacdkopenapixxamazonapigatewayintegrationpropertyrequesttemplates"></a>

```typescript
public readonly requestTemplates: XAmazonApigatewayIntegrationRequestTemplates;
```

- *Type:* [`@alma-cdk/openapix.XAmazonApigatewayIntegrationRequestTemplates`](#@alma-cdk/openapix.XAmazonApigatewayIntegrationRequestTemplates)

Mapping templates for a request payload of specified MIME types.

---

##### `responses`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.responses" id="almacdkopenapixxamazonapigatewayintegrationpropertyresponses"></a>

```typescript
public readonly responses: XAmazonApigatewayIntegrationResponses;
```

- *Type:* [`@alma-cdk/openapix.XAmazonApigatewayIntegrationResponses`](#@alma-cdk/openapix.XAmazonApigatewayIntegrationResponses)

Defines the method's responses and specifies desired parameter mappings or payload mappings from integration responses to method responses.

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.timeoutInMillis" id="almacdkopenapixxamazonapigatewayintegrationpropertytimeoutinmillis"></a>

```typescript
public readonly timeoutInMillis: number;
```

- *Type:* `number`

Integration timeouts between 50 ms and 29,000 ms.

---

##### `tlsConfig`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.tlsConfig" id="almacdkopenapixxamazonapigatewayintegrationpropertytlsconfig"></a>

```typescript
public readonly tlsConfig: XAmazonApigatewayIntegrationTlsConfig;
```

- *Type:* [`@alma-cdk/openapix.XAmazonApigatewayIntegrationTlsConfig`](#@alma-cdk/openapix.XAmazonApigatewayIntegrationTlsConfig)

Specifies the TLS configuration for an integration.

---

### XAmazonApigatewayIntegrationRequestParameters <a name="@alma-cdk/openapix.XAmazonApigatewayIntegrationRequestParameters" id="almacdkopenapixxamazonapigatewayintegrationrequestparameters"></a>

Specifies mappings from named method request parameters to integration request parameters.

The method request parameters must be defined before being referenced.

> https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration-requestParameters.html

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { XAmazonApigatewayIntegrationRequestParameters } from '@alma-cdk/openapix'

const xAmazonApigatewayIntegrationRequestParameters: XAmazonApigatewayIntegrationRequestParameters = { ... }
```


### XAmazonApigatewayIntegrationRequestTemplates <a name="@alma-cdk/openapix.XAmazonApigatewayIntegrationRequestTemplates" id="almacdkopenapixxamazonapigatewayintegrationrequesttemplates"></a>

Specifies mapping templates for a request payload of the specified MIME types.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { XAmazonApigatewayIntegrationRequestTemplates } from '@alma-cdk/openapix'

const xAmazonApigatewayIntegrationRequestTemplates: XAmazonApigatewayIntegrationRequestTemplates = { ... }
```


### XAmazonApigatewayIntegrationResponse <a name="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse" id="almacdkopenapixxamazonapigatewayintegrationresponse"></a>

Defines a response and specifies parameter mappings or payload mappings from the integration response to the method response.

> https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration-response.html

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { XAmazonApigatewayIntegrationResponse } from '@alma-cdk/openapix'

const xAmazonApigatewayIntegrationResponse: XAmazonApigatewayIntegrationResponse = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`statusCode`](#almacdkopenapixxamazonapigatewayintegrationresponsepropertystatuscode)<span title="Required">*</span> | `string` | HTTP status code for the method response. |
| [`contentHandling`](#almacdkopenapixxamazonapigatewayintegrationresponsepropertycontenthandling) | [`aws-cdk-lib.aws_apigateway.ContentHandling`](#aws-cdk-lib.aws_apigateway.ContentHandling) | Response payload encoding conversion types. |
| [`responseParameters`](#almacdkopenapixxamazonapigatewayintegrationresponsepropertyresponseparameters) | [`@alma-cdk/openapix.XAmazonApigatewayIntegrationResponseParameters`](#@alma-cdk/openapix.XAmazonApigatewayIntegrationResponseParameters) | Specifies parameter mappings for the response. |
| [`responseTemplates`](#almacdkopenapixxamazonapigatewayintegrationresponsepropertyresponsetemplates) | [`@alma-cdk/openapix.XAmazonApigatewayIntegrationResponseTemplates`](#@alma-cdk/openapix.XAmazonApigatewayIntegrationResponseTemplates) | Specifies MIME type-specific mapping templates for the response’s payload. |

---

##### `statusCode`<sup>Required</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse.property.statusCode" id="almacdkopenapixxamazonapigatewayintegrationresponsepropertystatuscode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* `string`

HTTP status code for the method response.

This must correspond to a matching response in the OpenAPI Operation responses field.

---

##### `contentHandling`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse.property.contentHandling" id="almacdkopenapixxamazonapigatewayintegrationresponsepropertycontenthandling"></a>

```typescript
public readonly contentHandling: ContentHandling;
```

- *Type:* [`aws-cdk-lib.aws_apigateway.ContentHandling`](#aws-cdk-lib.aws_apigateway.ContentHandling)

Response payload encoding conversion types.

Valid values are 1) CONVERT_TO_TEXT, for converting a binary payload into a base64-encoded string or converting a text payload into a utf-8-encoded string or passing through the text payload natively without modification, and 2) CONVERT_TO_BINARY, for converting a text payload into a base64-decoded blob or passing through a binary payload natively without modification.

---

##### `responseParameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse.property.responseParameters" id="almacdkopenapixxamazonapigatewayintegrationresponsepropertyresponseparameters"></a>

```typescript
public readonly responseParameters: XAmazonApigatewayIntegrationResponseParameters;
```

- *Type:* [`@alma-cdk/openapix.XAmazonApigatewayIntegrationResponseParameters`](#@alma-cdk/openapix.XAmazonApigatewayIntegrationResponseParameters)

Specifies parameter mappings for the response.

Only the header and body parameters of the integration response can be mapped to the header parameters of the method.

---

##### `responseTemplates`<sup>Optional</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse.property.responseTemplates" id="almacdkopenapixxamazonapigatewayintegrationresponsepropertyresponsetemplates"></a>

```typescript
public readonly responseTemplates: XAmazonApigatewayIntegrationResponseTemplates;
```

- *Type:* [`@alma-cdk/openapix.XAmazonApigatewayIntegrationResponseTemplates`](#@alma-cdk/openapix.XAmazonApigatewayIntegrationResponseTemplates)

Specifies MIME type-specific mapping templates for the response’s payload.

---

### XAmazonApigatewayIntegrationResponseParameters <a name="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponseParameters" id="almacdkopenapixxamazonapigatewayintegrationresponseparameters"></a>

Specifies mappings from integration method response parameters to method response parameters.

You can map header, body, or static values to the header type of the method response.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { XAmazonApigatewayIntegrationResponseParameters } from '@alma-cdk/openapix'

const xAmazonApigatewayIntegrationResponseParameters: XAmazonApigatewayIntegrationResponseParameters = { ... }
```


### XAmazonApigatewayIntegrationResponses <a name="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponses" id="almacdkopenapixxamazonapigatewayintegrationresponses"></a>

Defines the method's responses and specifies parameter mappings or payload mappings from integration responses to method responses.

> https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration-responses.html

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { XAmazonApigatewayIntegrationResponses } from '@alma-cdk/openapix'

const xAmazonApigatewayIntegrationResponses: XAmazonApigatewayIntegrationResponses = { ... }
```


### XAmazonApigatewayIntegrationResponseTemplates <a name="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponseTemplates" id="almacdkopenapixxamazonapigatewayintegrationresponsetemplates"></a>

Specifies a mapping template to transform the integration response body to the method response body for a given MIME type.

> https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html#models-mappings-mappings

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { XAmazonApigatewayIntegrationResponseTemplates } from '@alma-cdk/openapix'

const xAmazonApigatewayIntegrationResponseTemplates: XAmazonApigatewayIntegrationResponseTemplates = { ... }
```


### XAmazonApigatewayIntegrationTlsConfig <a name="@alma-cdk/openapix.XAmazonApigatewayIntegrationTlsConfig" id="almacdkopenapixxamazonapigatewayintegrationtlsconfig"></a>

Specifies the TLS configuration for an integration.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { XAmazonApigatewayIntegrationTlsConfig } from '@alma-cdk/openapix'

const xAmazonApigatewayIntegrationTlsConfig: XAmazonApigatewayIntegrationTlsConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`insecureSkipVerification`](#almacdkopenapixxamazonapigatewayintegrationtlsconfigpropertyinsecureskipverification)<span title="Required">*</span> | `boolean` | Specifies whether or not API Gateway skips verification that the certificate for an integration endpoint is issued by a supported c ertificate authority. |

---

##### `insecureSkipVerification`<sup>Required</sup> <a name="@alma-cdk/openapix.XAmazonApigatewayIntegrationTlsConfig.property.insecureSkipVerification" id="almacdkopenapixxamazonapigatewayintegrationtlsconfigpropertyinsecureskipverification"></a>

```typescript
public readonly insecureSkipVerification: boolean;
```

- *Type:* `boolean`

Specifies whether or not API Gateway skips verification that the certificate for an integration endpoint is issued by a supported c ertificate authority.

This isn’t recommended, but it enables you to use certificates that are signed by private certificate authorities, or certificates that are self-signed. If enabled, API Gateway still performs basic certificate validation, which includes checking the certificate's expiration date, hostname, and presence of a root certificate authority. Supported only for HTTP and HTTP_PROXY integrations.

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

### XmlObject <a name="@alma-cdk/openapix.XmlObject" id="almacdkopenapixxmlobject"></a>

A metadata object that allows for more fine-tuned XML model definitions.

When using arrays, XML element names are not inferred (for singular/plural forms) and the name property SHOULD be used to add that information. See examples for expected behavior.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { XmlObject } from '@alma-cdk/openapix'

const xmlObject: XmlObject = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`attribute`](#almacdkopenapixxmlobjectpropertyattribute) | `boolean` | Declares whether the property definition translates to an attribute instead of an element. |
| [`name`](#almacdkopenapixxmlobjectpropertyname) | `string` | Replaces the name of the element/attribute used for the described schema property. |
| [`namespace`](#almacdkopenapixxmlobjectpropertynamespace) | `string` | The URI of the namespace definition. |
| [`prefix`](#almacdkopenapixxmlobjectpropertyprefix) | `string` | The prefix to be used for the name. |
| [`wrapped`](#almacdkopenapixxmlobjectpropertywrapped) | `boolean` | MAY be used only for an array definition. |

---

##### `attribute`<sup>Optional</sup> <a name="@alma-cdk/openapix.XmlObject.property.attribute" id="almacdkopenapixxmlobjectpropertyattribute"></a>

```typescript
public readonly attribute: boolean;
```

- *Type:* `boolean`

Declares whether the property definition translates to an attribute instead of an element.

Default value is false.

---

##### `name`<sup>Optional</sup> <a name="@alma-cdk/openapix.XmlObject.property.name" id="almacdkopenapixxmlobjectpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Replaces the name of the element/attribute used for the described schema property.

When defined within items, it will affect the name of the individual XML elements within the list. When defined alongside type being array (outside the items), it will affect the wrapping element and only if wrapped is true. If wrapped is false, it will be ignored.

---

##### `namespace`<sup>Optional</sup> <a name="@alma-cdk/openapix.XmlObject.property.namespace" id="almacdkopenapixxmlobjectpropertynamespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* `string`

The URI of the namespace definition.

Value MUST be in the form of an absolute URI.

---

##### `prefix`<sup>Optional</sup> <a name="@alma-cdk/openapix.XmlObject.property.prefix" id="almacdkopenapixxmlobjectpropertyprefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* `string`

The prefix to be used for the name.

---

##### `wrapped`<sup>Optional</sup> <a name="@alma-cdk/openapix.XmlObject.property.wrapped" id="almacdkopenapixxmlobjectpropertywrapped"></a>

```typescript
public readonly wrapped: boolean;
```

- *Type:* `boolean`

MAY be used only for an array definition.

Signifies whether the array is wrapped (for example, <books><book/><book/></books>) or unwrapped (<book/><book/>). Default value is false. The definition takes effect only when defined alongside type being array (outside the items).

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





### CorsHeaders <a name="@alma-cdk/openapix.CorsHeaders" id="almacdkopenapixcorsheaders"></a>

#### Initializers <a name="@alma-cdk/openapix.CorsHeaders.Initializer" id="almacdkopenapixcorsheadersinitializer"></a>

```typescript
import { CorsHeaders } from '@alma-cdk/openapix'

new CorsHeaders()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`from`](#almacdkopenapixcorsheadersfrom) | *No description.* |

---

##### `from` <a name="@alma-cdk/openapix.CorsHeaders.from" id="almacdkopenapixcorsheadersfrom"></a>

```typescript
import { CorsHeaders } from '@alma-cdk/openapix'

CorsHeaders.from(scope: Construct, values: string)
```

###### `scope`<sup>Required</sup> <a name="@alma-cdk/openapix.CorsHeaders.parameter.scope" id="almacdkopenapixcorsheadersparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `values`<sup>Required</sup> <a name="@alma-cdk/openapix.CorsHeaders.parameter.values" id="almacdkopenapixcorsheadersparametervalues"></a>

- *Type:* `string`

---


#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`ANY`](#almacdkopenapixcorsheaderspropertyany)<span title="Required">*</span> | `string` | *No description.* |

---

##### `ANY` <a name="@alma-cdk/openapix.CorsHeaders.property.ANY" id="almacdkopenapixcorsheaderspropertyany"></a>

- *Type:* `string`

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





### CorsMethods <a name="@alma-cdk/openapix.CorsMethods" id="almacdkopenapixcorsmethods"></a>

#### Initializers <a name="@alma-cdk/openapix.CorsMethods.Initializer" id="almacdkopenapixcorsmethodsinitializer"></a>

```typescript
import { CorsMethods } from '@alma-cdk/openapix'

new CorsMethods()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`from`](#almacdkopenapixcorsmethodsfrom) | *No description.* |

---

##### `from` <a name="@alma-cdk/openapix.CorsMethods.from" id="almacdkopenapixcorsmethodsfrom"></a>

```typescript
import { CorsMethods } from '@alma-cdk/openapix'

CorsMethods.from(scope: Construct, values: string)
```

###### `scope`<sup>Required</sup> <a name="@alma-cdk/openapix.CorsMethods.parameter.scope" id="almacdkopenapixcorsmethodsparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `values`<sup>Required</sup> <a name="@alma-cdk/openapix.CorsMethods.parameter.values" id="almacdkopenapixcorsmethodsparametervalues"></a>

- *Type:* `string`

---


#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`ANY`](#almacdkopenapixcorsmethodspropertyany)<span title="Required">*</span> | `string` | *No description.* |

---

##### `ANY` <a name="@alma-cdk/openapix.CorsMethods.property.ANY" id="almacdkopenapixcorsmethodspropertyany"></a>

- *Type:* `string`

---

### CorsOrigins <a name="@alma-cdk/openapix.CorsOrigins" id="almacdkopenapixcorsorigins"></a>

#### Initializers <a name="@alma-cdk/openapix.CorsOrigins.Initializer" id="almacdkopenapixcorsoriginsinitializer"></a>

```typescript
import { CorsOrigins } from '@alma-cdk/openapix'

new CorsOrigins()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`from`](#almacdkopenapixcorsoriginsfrom) | *No description.* |

---

##### `from` <a name="@alma-cdk/openapix.CorsOrigins.from" id="almacdkopenapixcorsoriginsfrom"></a>

```typescript
import { CorsOrigins } from '@alma-cdk/openapix'

CorsOrigins.from(scope: Construct, values: string)
```

###### `scope`<sup>Required</sup> <a name="@alma-cdk/openapix.CorsOrigins.parameter.scope" id="almacdkopenapixcorsoriginsparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `values`<sup>Required</sup> <a name="@alma-cdk/openapix.CorsOrigins.parameter.values" id="almacdkopenapixcorsoriginsparametervalues"></a>

- *Type:* `string`

---


#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`ANY`](#almacdkopenapixcorsoriginspropertyany)<span title="Required">*</span> | `string` | *No description.* |

---

##### `ANY` <a name="@alma-cdk/openapix.CorsOrigins.property.ANY" id="almacdkopenapixcorsoriginspropertyany"></a>

- *Type:* `string`

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
| [`xAmazonApigatewayIntegration`](#almacdkopenapixintegrationpropertyxamazonapigatewayintegration)<span title="Required">*</span> | [`@alma-cdk/openapix.XAmazonApigatewayIntegration`](#@alma-cdk/openapix.XAmazonApigatewayIntegration) | *No description.* |
| [`validator`](#almacdkopenapixintegrationpropertyvalidator) | `string` | *No description.* |

---

##### `type`<sup>Required</sup> <a name="@alma-cdk/openapix.Integration.property.type" id="almacdkopenapixintegrationpropertytype"></a>

```typescript
public readonly type: InternalIntegrationType;
```

- *Type:* [`@alma-cdk/openapix.InternalIntegrationType`](#@alma-cdk/openapix.InternalIntegrationType)

Identifier to enable internal type checks.

---

##### `xAmazonApigatewayIntegration`<sup>Required</sup> <a name="@alma-cdk/openapix.Integration.property.xAmazonApigatewayIntegration" id="almacdkopenapixintegrationpropertyxamazonapigatewayintegration"></a>

```typescript
public readonly xAmazonApigatewayIntegration: XAmazonApigatewayIntegration;
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
public grantFunctionInvoke(scope: Construct, executeApiArn: string)
```

###### `scope`<sup>Required</sup> <a name="@alma-cdk/openapix.LambdaIntegration.parameter.scope" id="almacdkopenapixlambdaintegrationparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `executeApiArn`<sup>Required</sup> <a name="@alma-cdk/openapix.LambdaIntegration.parameter.executeApiArn" id="almacdkopenapixlambdaintegrationparameterexecuteapiarn"></a>

- *Type:* `string`

---


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`fn`](#almacdkopenapixlambdaintegrationpropertyfn)<span title="Required">*</span> | [`aws-cdk-lib.aws_lambda.IFunction`](#aws-cdk-lib.aws_lambda.IFunction) | *No description.* |

---

##### `fn`<sup>Required</sup> <a name="@alma-cdk/openapix.LambdaIntegration.property.fn" id="almacdkopenapixlambdaintegrationpropertyfn"></a>

```typescript
public readonly fn: IFunction;
```

- *Type:* [`aws-cdk-lib.aws_lambda.IFunction`](#aws-cdk-lib.aws_lambda.IFunction)

---


### MockIntegration <a name="@alma-cdk/openapix.MockIntegration" id="almacdkopenapixmockintegration"></a>

Defines Mock integration.

#### Initializers <a name="@alma-cdk/openapix.MockIntegration.Initializer" id="almacdkopenapixmockintegrationinitializer"></a>

```typescript
import { MockIntegration } from '@alma-cdk/openapix'

new MockIntegration(props?: MockIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`props`](#almacdkopenapixmockintegrationparameterprops) | [`@alma-cdk/openapix.MockIntegrationProps`](#@alma-cdk/openapix.MockIntegrationProps) | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="@alma-cdk/openapix.MockIntegration.parameter.props" id="almacdkopenapixmockintegrationparameterprops"></a>

- *Type:* [`@alma-cdk/openapix.MockIntegrationProps`](#@alma-cdk/openapix.MockIntegrationProps)

---





### Schema <a name="@alma-cdk/openapix.Schema" id="almacdkopenapixschema"></a>

Represents an OpenApi v3 Schema which can be deserialized from YAML-file, modified and then serialized back to YAML.

#### Initializers <a name="@alma-cdk/openapix.Schema.Initializer" id="almacdkopenapixschemainitializer"></a>

```typescript
import { Schema } from '@alma-cdk/openapix'

new Schema(props: SchemaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`props`](#almacdkopenapixschemaparameterprops)<span title="Required">*</span> | [`@alma-cdk/openapix.SchemaProps`](#@alma-cdk/openapix.SchemaProps) | *No description.* |

---

##### `props`<sup>Required</sup> <a name="@alma-cdk/openapix.Schema.parameter.props" id="almacdkopenapixschemaparameterprops"></a>

- *Type:* [`@alma-cdk/openapix.SchemaProps`](#@alma-cdk/openapix.SchemaProps)

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
| [`toAsset`](#almacdkopenapixschematoasset) | Return the OpenApi v3 document as an S3 Asset. |
| [`toDocument`](#almacdkopenapixschematodocument) | Return the actual OpenApi v3 document. |
| [`toJson`](#almacdkopenapixschematojson) | Serialize to JSON string. |
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
public inject(records?: {[ key: string ]: any})
```

###### `records`<sup>Optional</sup> <a name="@alma-cdk/openapix.Schema.parameter.records" id="almacdkopenapixschemaparameterrecords"></a>

- *Type:* {[ key: string ]: `any`}

---

##### `reject` <a name="@alma-cdk/openapix.Schema.reject" id="almacdkopenapixschemareject"></a>

```typescript
public reject(paths?: string[])
```

###### `paths`<sup>Optional</sup> <a name="@alma-cdk/openapix.Schema.parameter.paths" id="almacdkopenapixschemaparameterpaths"></a>

- *Type:* `string`[]

---

##### `rejectDeep` <a name="@alma-cdk/openapix.Schema.rejectDeep" id="almacdkopenapixschemarejectdeep"></a>

```typescript
public rejectDeep(paths?: string[])
```

###### `paths`<sup>Optional</sup> <a name="@alma-cdk/openapix.Schema.parameter.paths" id="almacdkopenapixschemaparameterpaths"></a>

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

##### `toAsset` <a name="@alma-cdk/openapix.Schema.toAsset" id="almacdkopenapixschematoasset"></a>

```typescript
public toAsset(scope: Construct, id: string)
```

###### `scope`<sup>Required</sup> <a name="@alma-cdk/openapix.Schema.parameter.scope" id="almacdkopenapixschemaparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `id`<sup>Required</sup> <a name="@alma-cdk/openapix.Schema.parameter.id" id="almacdkopenapixschemaparameterid"></a>

- *Type:* `string`

---

##### `toDocument` <a name="@alma-cdk/openapix.Schema.toDocument" id="almacdkopenapixschematodocument"></a>

```typescript
public toDocument()
```

##### `toJson` <a name="@alma-cdk/openapix.Schema.toJson" id="almacdkopenapixschematojson"></a>

```typescript
public toJson()
```

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

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`openApiSupportedVersions`](#almacdkopenapixschemapropertyopenapisupportedversions)<span title="Required">*</span> | `string` | A string representing supported SemVer range. |
| [`openApiVersion`](#almacdkopenapixschemapropertyopenapiversion)<span title="Required">*</span> | `string` | OpenApi version used by schema document. |

---

##### `openApiSupportedVersions`<sup>Required</sup> <a name="@alma-cdk/openapix.Schema.property.openApiSupportedVersions" id="almacdkopenapixschemapropertyopenapisupportedversions"></a>

```typescript
public readonly openApiSupportedVersions: string;
```

- *Type:* `string`

A string representing supported SemVer range.

> https://github.com/npm/node-semver

---

##### `openApiVersion`<sup>Required</sup> <a name="@alma-cdk/openapix.Schema.property.openApiVersion" id="almacdkopenapixschemapropertyopenapiversion"></a>

```typescript
public readonly openApiVersion: string;
```

- *Type:* `string`

OpenApi version used by schema document.

---


## Protocols <a name="Protocols" id="protocols"></a>

### IBaseIntegration <a name="@alma-cdk/openapix.IBaseIntegration" id="almacdkopenapixibaseintegration"></a>

- *Implemented By:* [`@alma-cdk/openapix.AwsIntegration`](#@alma-cdk/openapix.AwsIntegration), [`@alma-cdk/openapix.CorsIntegration`](#@alma-cdk/openapix.CorsIntegration), [`@alma-cdk/openapix.HttpIntegration`](#@alma-cdk/openapix.HttpIntegration), [`@alma-cdk/openapix.Integration`](#@alma-cdk/openapix.Integration), [`@alma-cdk/openapix.LambdaIntegration`](#@alma-cdk/openapix.LambdaIntegration), [`@alma-cdk/openapix.MockIntegration`](#@alma-cdk/openapix.MockIntegration), [`@alma-cdk/openapix.IBaseIntegration`](#@alma-cdk/openapix.IBaseIntegration)

Interface implemented by all integrations.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`type`](#almacdkopenapixibaseintegrationpropertytype)<span title="Required">*</span> | [`@alma-cdk/openapix.InternalIntegrationType`](#@alma-cdk/openapix.InternalIntegrationType) | Identifier to enable internal type checks. |
| [`xAmazonApigatewayIntegration`](#almacdkopenapixibaseintegrationpropertyxamazonapigatewayintegration)<span title="Required">*</span> | [`@alma-cdk/openapix.XAmazonApigatewayIntegration`](#@alma-cdk/openapix.XAmazonApigatewayIntegration) | *No description.* |
| [`validator`](#almacdkopenapixibaseintegrationpropertyvalidator) | `string` | *No description.* |

---

##### `type`<sup>Required</sup> <a name="@alma-cdk/openapix.IBaseIntegration.property.type" id="almacdkopenapixibaseintegrationpropertytype"></a>

```typescript
public readonly type: InternalIntegrationType;
```

- *Type:* [`@alma-cdk/openapix.InternalIntegrationType`](#@alma-cdk/openapix.InternalIntegrationType)

Identifier to enable internal type checks.

---

##### `xAmazonApigatewayIntegration`<sup>Required</sup> <a name="@alma-cdk/openapix.IBaseIntegration.property.xAmazonApigatewayIntegration" id="almacdkopenapixibaseintegrationpropertyxamazonapigatewayintegration"></a>

```typescript
public readonly xAmazonApigatewayIntegration: XAmazonApigatewayIntegration;
```

- *Type:* [`@alma-cdk/openapix.XAmazonApigatewayIntegration`](#@alma-cdk/openapix.XAmazonApigatewayIntegration)

---

##### `validator`<sup>Optional</sup> <a name="@alma-cdk/openapix.IBaseIntegration.property.validator" id="almacdkopenapixibaseintegrationpropertyvalidator"></a>

```typescript
public readonly validator: string;
```

- *Type:* `string`

---

### ICallbackObject <a name="@alma-cdk/openapix.ICallbackObject" id="almacdkopenapixicallbackobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.ICallbackObject`](#@alma-cdk/openapix.ICallbackObject)

A map of possible out-of band callbacks related to the parent operation.

Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.



### IComponentsObject <a name="@alma-cdk/openapix.IComponentsObject" id="almacdkopenapixicomponentsobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IComponentsObject`](#@alma-cdk/openapix.IComponentsObject)

Holds a set of reusable objects for different aspects of the OAS.

All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`callbacks`](#almacdkopenapixicomponentsobjectpropertycallbacks) | {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.ICallbackObject`](#@alma-cdk/openapix.ICallbackObject)} | An object to hold reusable Callback Objects. |
| [`examples`](#almacdkopenapixicomponentsobjectpropertyexamples) | {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.IExampleObject`](#@alma-cdk/openapix.IExampleObject)} | An object to hold reusable Example Objects. |
| [`headers`](#almacdkopenapixicomponentsobjectpropertyheaders) | {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.IHeaderObject`](#@alma-cdk/openapix.IHeaderObject)} | An object to hold reusable Header Objects. |
| [`links`](#almacdkopenapixicomponentsobjectpropertylinks) | {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.ILinkObject`](#@alma-cdk/openapix.ILinkObject)} | An object to hold reusable Link Objects. |
| [`parameters`](#almacdkopenapixicomponentsobjectpropertyparameters) | {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.IParameterObject`](#@alma-cdk/openapix.IParameterObject)} | An object to hold reusable Parameter Objects. |
| [`requestBodies`](#almacdkopenapixicomponentsobjectpropertyrequestbodies) | {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.IRequestBodyObject`](#@alma-cdk/openapix.IRequestBodyObject)} | An object to hold reusable Request Body Objects. |
| [`responses`](#almacdkopenapixicomponentsobjectpropertyresponses) | {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.IResponseObject`](#@alma-cdk/openapix.IResponseObject)} | An object to hold reusable Response Objects. |
| [`schemas`](#almacdkopenapixicomponentsobjectpropertyschemas) | {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.ISchemaObject`](#@alma-cdk/openapix.ISchemaObject)} | An object to hold reusable Schema Objects. |
| [`securitySchemes`](#almacdkopenapixicomponentsobjectpropertysecurityschemes) | {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.ISecuritySchemeObject`](#@alma-cdk/openapix.ISecuritySchemeObject)} | An object to hold reusable Security Scheme Objects. |

---

##### `callbacks`<sup>Optional</sup> <a name="@alma-cdk/openapix.IComponentsObject.property.callbacks" id="almacdkopenapixicomponentsobjectpropertycallbacks"></a>

```typescript
public readonly callbacks: {[ key: string ]: IReferenceObject | ICallbackObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.ICallbackObject`](#@alma-cdk/openapix.ICallbackObject)}

An object to hold reusable Callback Objects.

---

##### `examples`<sup>Optional</sup> <a name="@alma-cdk/openapix.IComponentsObject.property.examples" id="almacdkopenapixicomponentsobjectpropertyexamples"></a>

```typescript
public readonly examples: {[ key: string ]: IReferenceObject | IExampleObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.IExampleObject`](#@alma-cdk/openapix.IExampleObject)}

An object to hold reusable Example Objects.

---

##### `headers`<sup>Optional</sup> <a name="@alma-cdk/openapix.IComponentsObject.property.headers" id="almacdkopenapixicomponentsobjectpropertyheaders"></a>

```typescript
public readonly headers: {[ key: string ]: IReferenceObject | IHeaderObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.IHeaderObject`](#@alma-cdk/openapix.IHeaderObject)}

An object to hold reusable Header Objects.

---

##### `links`<sup>Optional</sup> <a name="@alma-cdk/openapix.IComponentsObject.property.links" id="almacdkopenapixicomponentsobjectpropertylinks"></a>

```typescript
public readonly links: {[ key: string ]: IReferenceObject | ILinkObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.ILinkObject`](#@alma-cdk/openapix.ILinkObject)}

An object to hold reusable Link Objects.

---

##### `parameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.IComponentsObject.property.parameters" id="almacdkopenapixicomponentsobjectpropertyparameters"></a>

```typescript
public readonly parameters: {[ key: string ]: IReferenceObject | IParameterObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.IParameterObject`](#@alma-cdk/openapix.IParameterObject)}

An object to hold reusable Parameter Objects.

---

##### `requestBodies`<sup>Optional</sup> <a name="@alma-cdk/openapix.IComponentsObject.property.requestBodies" id="almacdkopenapixicomponentsobjectpropertyrequestbodies"></a>

```typescript
public readonly requestBodies: {[ key: string ]: IReferenceObject | IRequestBodyObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.IRequestBodyObject`](#@alma-cdk/openapix.IRequestBodyObject)}

An object to hold reusable Request Body Objects.

---

##### `responses`<sup>Optional</sup> <a name="@alma-cdk/openapix.IComponentsObject.property.responses" id="almacdkopenapixicomponentsobjectpropertyresponses"></a>

```typescript
public readonly responses: {[ key: string ]: IReferenceObject | IResponseObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.IResponseObject`](#@alma-cdk/openapix.IResponseObject)}

An object to hold reusable Response Objects.

---

##### `schemas`<sup>Optional</sup> <a name="@alma-cdk/openapix.IComponentsObject.property.schemas" id="almacdkopenapixicomponentsobjectpropertyschemas"></a>

```typescript
public readonly schemas: {[ key: string ]: IReferenceObject | ISchemaObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.ISchemaObject`](#@alma-cdk/openapix.ISchemaObject)}

An object to hold reusable Schema Objects.

---

##### `securitySchemes`<sup>Optional</sup> <a name="@alma-cdk/openapix.IComponentsObject.property.securitySchemes" id="almacdkopenapixicomponentsobjectpropertysecurityschemes"></a>

```typescript
public readonly securitySchemes: {[ key: string ]: IReferenceObject | ISecuritySchemeObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.ISecuritySchemeObject`](#@alma-cdk/openapix.ISecuritySchemeObject)}

An object to hold reusable Security Scheme Objects.

---

### IContactObject <a name="@alma-cdk/openapix.IContactObject" id="almacdkopenapixicontactobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

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

### IDiscriminatorObject <a name="@alma-cdk/openapix.IDiscriminatorObject" id="almacdkopenapixidiscriminatorobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IDiscriminatorObject`](#@alma-cdk/openapix.IDiscriminatorObject)

When request bodies or response payloads may be one of a number of different schemas, a discriminator object can be used to aid in serialization, deserialization, and validation.

The discriminator is a specific object in a schema which is used to inform the consumer of the specification of an alternative schema based on the value associated with it. When using the discriminator, inline schemas will not be considered.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`propertyName`](#almacdkopenapixidiscriminatorobjectpropertypropertyname)<span title="Required">*</span> | `string` | The name of the property in the payload that will hold the discriminator value. |
| [`mapping`](#almacdkopenapixidiscriminatorobjectpropertymapping) | {[ key: string ]: `string`} | An object to hold mappings between payload values and schema names or references. |

---

##### `propertyName`<sup>Required</sup> <a name="@alma-cdk/openapix.IDiscriminatorObject.property.propertyName" id="almacdkopenapixidiscriminatorobjectpropertypropertyname"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* `string`

The name of the property in the payload that will hold the discriminator value.

---

##### `mapping`<sup>Optional</sup> <a name="@alma-cdk/openapix.IDiscriminatorObject.property.mapping" id="almacdkopenapixidiscriminatorobjectpropertymapping"></a>

```typescript
public readonly mapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

An object to hold mappings between payload values and schema names or references.

---

### IDocument <a name="@alma-cdk/openapix.IDocument" id="almacdkopenapixidocument"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IDocument`](#@alma-cdk/openapix.IDocument)

Describes a mutable OpenApi v3 Document.

Essentially the same as `SchemaProps` but without `readonly` definitions.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`info`](#almacdkopenapixidocumentpropertyinfo)<span title="Required">*</span> | [`@alma-cdk/openapix.IInfoObject`](#@alma-cdk/openapix.IInfoObject) | Provides metadata about the API. |
| [`openapi`](#almacdkopenapixidocumentpropertyopenapi)<span title="Required">*</span> | `string` | This string MUST be the semantic version number of the OpenAPI Specification version that the OpenAPI document uses. |
| [`paths`](#almacdkopenapixidocumentpropertypaths)<span title="Required">*</span> | [`@alma-cdk/openapix.IPathsObject`](#@alma-cdk/openapix.IPathsObject) | The available paths and operations for the API. |
| [`components`](#almacdkopenapixidocumentpropertycomponents) | [`@alma-cdk/openapix.IComponentsObject`](#@alma-cdk/openapix.IComponentsObject) | An element to hold various schemas for the specification. |
| [`externalDocs`](#almacdkopenapixidocumentpropertyexternaldocs) | [`@alma-cdk/openapix.IExternalDocumentationObject`](#@alma-cdk/openapix.IExternalDocumentationObject) | Additional external documentation. |
| [`security`](#almacdkopenapixidocumentpropertysecurity) | [`@alma-cdk/openapix.ISecurityRequirementObject`](#@alma-cdk/openapix.ISecurityRequirementObject)[] | A declaration of which security mechanisms can be used across the API. |
| [`servers`](#almacdkopenapixidocumentpropertyservers) | [`@alma-cdk/openapix.IServerObject`](#@alma-cdk/openapix.IServerObject)[] | An array of Server Objects, which provide connectivity information to a target server. |
| [`tags`](#almacdkopenapixidocumentpropertytags) | [`@alma-cdk/openapix.ITagObject`](#@alma-cdk/openapix.ITagObject)[] | A list of tags used by the specification with additional metadata. |

---

##### `info`<sup>Required</sup> <a name="@alma-cdk/openapix.IDocument.property.info" id="almacdkopenapixidocumentpropertyinfo"></a>

```typescript
public readonly info: IInfoObject;
```

- *Type:* [`@alma-cdk/openapix.IInfoObject`](#@alma-cdk/openapix.IInfoObject)

Provides metadata about the API.

The metadata MAY be used by tooling as required.

---

##### `openapi`<sup>Required</sup> <a name="@alma-cdk/openapix.IDocument.property.openapi" id="almacdkopenapixidocumentpropertyopenapi"></a>

```typescript
public readonly openapi: string;
```

- *Type:* `string`

This string MUST be the semantic version number of the OpenAPI Specification version that the OpenAPI document uses.

The openapi field SHOULD be used by tooling specifications and clients to interpret the OpenAPI document. This is not related to the API info.version string.

---

##### `paths`<sup>Required</sup> <a name="@alma-cdk/openapix.IDocument.property.paths" id="almacdkopenapixidocumentpropertypaths"></a>

```typescript
public readonly paths: IPathsObject;
```

- *Type:* [`@alma-cdk/openapix.IPathsObject`](#@alma-cdk/openapix.IPathsObject)

The available paths and operations for the API.

---

##### `components`<sup>Optional</sup> <a name="@alma-cdk/openapix.IDocument.property.components" id="almacdkopenapixidocumentpropertycomponents"></a>

```typescript
public readonly components: IComponentsObject;
```

- *Type:* [`@alma-cdk/openapix.IComponentsObject`](#@alma-cdk/openapix.IComponentsObject)

An element to hold various schemas for the specification.

---

##### `externalDocs`<sup>Optional</sup> <a name="@alma-cdk/openapix.IDocument.property.externalDocs" id="almacdkopenapixidocumentpropertyexternaldocs"></a>

```typescript
public readonly externalDocs: IExternalDocumentationObject;
```

- *Type:* [`@alma-cdk/openapix.IExternalDocumentationObject`](#@alma-cdk/openapix.IExternalDocumentationObject)

Additional external documentation.

---

##### `security`<sup>Optional</sup> <a name="@alma-cdk/openapix.IDocument.property.security" id="almacdkopenapixidocumentpropertysecurity"></a>

```typescript
public readonly security: ISecurityRequirementObject[];
```

- *Type:* [`@alma-cdk/openapix.ISecurityRequirementObject`](#@alma-cdk/openapix.ISecurityRequirementObject)[]

A declaration of which security mechanisms can be used across the API.

The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. Individual operations can override this definition. To make security optional, an empty security requirement ({}) can be included in the array.

---

##### `servers`<sup>Optional</sup> <a name="@alma-cdk/openapix.IDocument.property.servers" id="almacdkopenapixidocumentpropertyservers"></a>

```typescript
public readonly servers: IServerObject[];
```

- *Type:* [`@alma-cdk/openapix.IServerObject`](#@alma-cdk/openapix.IServerObject)[]

An array of Server Objects, which provide connectivity information to a target server.

If the servers property is not provided, or is an empty array, the default value would be a Server Object with a url value of /.

---

##### `tags`<sup>Optional</sup> <a name="@alma-cdk/openapix.IDocument.property.tags" id="almacdkopenapixidocumentpropertytags"></a>

```typescript
public readonly tags: ITagObject[];
```

- *Type:* [`@alma-cdk/openapix.ITagObject`](#@alma-cdk/openapix.ITagObject)[]

A list of tags used by the specification with additional metadata.

The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the Operation Object must be declared. The tags that are not declared MAY be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique.

---

### IEncodingObject <a name="@alma-cdk/openapix.IEncodingObject" id="almacdkopenapixiencodingobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IEncodingObject`](#@alma-cdk/openapix.IEncodingObject)

A single encoding definition applied to a single schema property.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`allowReserved`](#almacdkopenapixiencodingobjectpropertyallowreserved) | `boolean` | Determines whether the parameter value SHOULD allow reserved characters, as defined by RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding. The default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded. |
| [`contentType`](#almacdkopenapixiencodingobjectpropertycontenttype) | `string` | The Content-Type for encoding a specific property. |
| [`explode`](#almacdkopenapixiencodingobjectpropertyexplode) | `boolean` | When this is true, property values of type array or object generate separate parameters for each value of the array, or key-value-pair of the map. |
| [`headers`](#almacdkopenapixiencodingobjectpropertyheaders) | {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.IHeaderObject`](#@alma-cdk/openapix.IHeaderObject)} | A map allowing additional information to be provided as headers, for example Content-Disposition. |
| [`style`](#almacdkopenapixiencodingobjectpropertystyle) | `string` | Describes how a specific property value will be serialized depending on its type. |

---

##### `allowReserved`<sup>Optional</sup> <a name="@alma-cdk/openapix.IEncodingObject.property.allowReserved" id="almacdkopenapixiencodingobjectpropertyallowreserved"></a>

```typescript
public readonly allowReserved: boolean;
```

- *Type:* `boolean`

Determines whether the parameter value SHOULD allow reserved characters, as defined by RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding. The default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded.

---

##### `contentType`<sup>Optional</sup> <a name="@alma-cdk/openapix.IEncodingObject.property.contentType" id="almacdkopenapixiencodingobjectpropertycontenttype"></a>

```typescript
public readonly contentType: string;
```

- *Type:* `string`

The Content-Type for encoding a specific property.

Default value depends on the property type: for string with format being binary – application/octet-stream; for other primitive types – text/plain; for object - application/json; for array – the default is defined based on the inner type. The value can be a specific media type (e.g. application/json), a wildcard media type (e.g. image/*), or a comma-separated list of the two types.

---

##### `explode`<sup>Optional</sup> <a name="@alma-cdk/openapix.IEncodingObject.property.explode" id="almacdkopenapixiencodingobjectpropertyexplode"></a>

```typescript
public readonly explode: boolean;
```

- *Type:* `boolean`

When this is true, property values of type array or object generate separate parameters for each value of the array, or key-value-pair of the map.

For other types of properties this property has no effect. When style is form, the default value is true. For all other styles, the default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded.

---

##### `headers`<sup>Optional</sup> <a name="@alma-cdk/openapix.IEncodingObject.property.headers" id="almacdkopenapixiencodingobjectpropertyheaders"></a>

```typescript
public readonly headers: {[ key: string ]: IReferenceObject | IHeaderObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.IHeaderObject`](#@alma-cdk/openapix.IHeaderObject)}

A map allowing additional information to be provided as headers, for example Content-Disposition.

Content-Type is described separately and SHALL be ignored in this section. This property SHALL be ignored if the request body media type is not a multipart.

---

##### `style`<sup>Optional</sup> <a name="@alma-cdk/openapix.IEncodingObject.property.style" id="almacdkopenapixiencodingobjectpropertystyle"></a>

```typescript
public readonly style: string;
```

- *Type:* `string`

Describes how a specific property value will be serialized depending on its type.

See Parameter Object for details on the style property. The behavior follows the same values as query parameters, including default values. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded.

---

### IExampleObject <a name="@alma-cdk/openapix.IExampleObject" id="almacdkopenapixiexampleobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IExampleObject`](#@alma-cdk/openapix.IExampleObject)

Example Object.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`description`](#almacdkopenapixiexampleobjectpropertydescription) | `string` | Long description for the example. |
| [`externalValue`](#almacdkopenapixiexampleobjectpropertyexternalvalue) | `string` | A URL that points to the literal example. |
| [`summary`](#almacdkopenapixiexampleobjectpropertysummary) | `string` | Short description for the example. |
| [`value`](#almacdkopenapixiexampleobjectpropertyvalue) | `any` | Embedded literal example. |

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.IExampleObject.property.description" id="almacdkopenapixiexampleobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Long description for the example.

CommonMark syntax MAY be used for rich text representation.

---

##### `externalValue`<sup>Optional</sup> <a name="@alma-cdk/openapix.IExampleObject.property.externalValue" id="almacdkopenapixiexampleobjectpropertyexternalvalue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* `string`

A URL that points to the literal example.

This provides the capability to reference examples that cannot easily be included in JSON or YAML documents. The value field and externalValue field are mutually exclusive.

---

##### `summary`<sup>Optional</sup> <a name="@alma-cdk/openapix.IExampleObject.property.summary" id="almacdkopenapixiexampleobjectpropertysummary"></a>

```typescript
public readonly summary: string;
```

- *Type:* `string`

Short description for the example.

---

##### `value`<sup>Optional</sup> <a name="@alma-cdk/openapix.IExampleObject.property.value" id="almacdkopenapixiexampleobjectpropertyvalue"></a>

```typescript
public readonly value: any;
```

- *Type:* `any`

Embedded literal example.

The value field and externalValue field are mutually exclusive. To represent examples of media types that cannot naturally represented in JSON or YAML, use a string value to contain the example, escaping where necessary.

---

### IExtensible <a name="@alma-cdk/openapix.IExtensible" id="almacdkopenapixiextensible"></a>

- *Implemented By:* [`@alma-cdk/openapix.ICallbackObject`](#@alma-cdk/openapix.ICallbackObject), [`@alma-cdk/openapix.IComponentsObject`](#@alma-cdk/openapix.IComponentsObject), [`@alma-cdk/openapix.IContactObject`](#@alma-cdk/openapix.IContactObject), [`@alma-cdk/openapix.IDiscriminatorObject`](#@alma-cdk/openapix.IDiscriminatorObject), [`@alma-cdk/openapix.IDocument`](#@alma-cdk/openapix.IDocument), [`@alma-cdk/openapix.IEncodingObject`](#@alma-cdk/openapix.IEncodingObject), [`@alma-cdk/openapix.IExampleObject`](#@alma-cdk/openapix.IExampleObject), [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible), [`@alma-cdk/openapix.IExternalDocumentationObject`](#@alma-cdk/openapix.IExternalDocumentationObject), [`@alma-cdk/openapix.IHeaderObject`](#@alma-cdk/openapix.IHeaderObject), [`@alma-cdk/openapix.IInfoObject`](#@alma-cdk/openapix.IInfoObject), [`@alma-cdk/openapix.ILicenseObject`](#@alma-cdk/openapix.ILicenseObject), [`@alma-cdk/openapix.ILinkObject`](#@alma-cdk/openapix.ILinkObject), [`@alma-cdk/openapix.IMediaTypeObject`](#@alma-cdk/openapix.IMediaTypeObject), [`@alma-cdk/openapix.IOAuthFlowObject`](#@alma-cdk/openapix.IOAuthFlowObject), [`@alma-cdk/openapix.IOAuthFlowsObject`](#@alma-cdk/openapix.IOAuthFlowsObject), [`@alma-cdk/openapix.IOperationObject`](#@alma-cdk/openapix.IOperationObject), [`@alma-cdk/openapix.IParameterObject`](#@alma-cdk/openapix.IParameterObject), [`@alma-cdk/openapix.IPathItemObject`](#@alma-cdk/openapix.IPathItemObject), [`@alma-cdk/openapix.IPathsObject`](#@alma-cdk/openapix.IPathsObject), [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject), [`@alma-cdk/openapix.IRequestBodyObject`](#@alma-cdk/openapix.IRequestBodyObject), [`@alma-cdk/openapix.IResponseObject`](#@alma-cdk/openapix.IResponseObject), [`@alma-cdk/openapix.IResponsesObject`](#@alma-cdk/openapix.IResponsesObject), [`@alma-cdk/openapix.ISchemaObject`](#@alma-cdk/openapix.ISchemaObject), [`@alma-cdk/openapix.ISecurityRequirementObject`](#@alma-cdk/openapix.ISecurityRequirementObject), [`@alma-cdk/openapix.ISecuritySchemeObject`](#@alma-cdk/openapix.ISecuritySchemeObject), [`@alma-cdk/openapix.IServerObject`](#@alma-cdk/openapix.IServerObject), [`@alma-cdk/openapix.IServerVariableObject`](#@alma-cdk/openapix.IServerVariableObject), [`@alma-cdk/openapix.ITagObject`](#@alma-cdk/openapix.ITagObject), [`@alma-cdk/openapix.IXmlObject`](#@alma-cdk/openapix.IXmlObject)

Allow Open Api Extensions via `x-` prefixed values.



### IExternalDocumentationObject <a name="@alma-cdk/openapix.IExternalDocumentationObject" id="almacdkopenapixiexternaldocumentationobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IExternalDocumentationObject`](#@alma-cdk/openapix.IExternalDocumentationObject)

Allows referencing an external resource for extended documentation.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`url`](#almacdkopenapixiexternaldocumentationobjectpropertyurl)<span title="Required">*</span> | `string` | The URL for the target documentation. |
| [`description`](#almacdkopenapixiexternaldocumentationobjectpropertydescription) | `string` | A short description of the target documentation. |

---

##### `url`<sup>Required</sup> <a name="@alma-cdk/openapix.IExternalDocumentationObject.property.url" id="almacdkopenapixiexternaldocumentationobjectpropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

The URL for the target documentation.

Value MUST be in the format of a URL.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.IExternalDocumentationObject.property.description" id="almacdkopenapixiexternaldocumentationobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A short description of the target documentation.

CommonMark syntax MAY be used for rich text representation.

---

### IHeaderObject <a name="@alma-cdk/openapix.IHeaderObject" id="almacdkopenapixiheaderobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IHeaderObject`](#@alma-cdk/openapix.IHeaderObject)

The Header Object follows the structure of the Parameter Object with the following changes:.

1. name MUST NOT be specified, it is given in the corresponding headers map. 2. in MUST NOT be specified, it is implicitly in header. 3. All traits that are affected by the location MUST be applicable to a location of header (for example, style).


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`allowEmptyValue`](#almacdkopenapixiheaderobjectpropertyallowemptyvalue) | `boolean` | Sets the ability to pass empty-valued parameters. |
| [`deprecated`](#almacdkopenapixiheaderobjectpropertydeprecated) | `boolean` | Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. |
| [`description`](#almacdkopenapixiheaderobjectpropertydescription) | `string` | A brief description of the parameter. |
| [`required`](#almacdkopenapixiheaderobjectpropertyrequired) | `boolean` | Determines whether this parameter is mandatory. |

---

##### `allowEmptyValue`<sup>Optional</sup> <a name="@alma-cdk/openapix.IHeaderObject.property.allowEmptyValue" id="almacdkopenapixiheaderobjectpropertyallowemptyvalue"></a>

```typescript
public readonly allowEmptyValue: boolean;
```

- *Type:* `boolean`

Sets the ability to pass empty-valued parameters.

This is valid only for query parameters and allows sending a parameter with an empty value. Default value is false. If style is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.

---

##### `deprecated`<sup>Optional</sup> <a name="@alma-cdk/openapix.IHeaderObject.property.deprecated" id="almacdkopenapixiheaderobjectpropertydeprecated"></a>

```typescript
public readonly deprecated: boolean;
```

- *Type:* `boolean`

Specifies that a parameter is deprecated and SHOULD be transitioned out of usage.

Default value is false.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.IHeaderObject.property.description" id="almacdkopenapixiheaderobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A brief description of the parameter.

This could contain examples of use. CommonMark syntax MAY be used for rich text representation.

---

##### `required`<sup>Optional</sup> <a name="@alma-cdk/openapix.IHeaderObject.property.required" id="almacdkopenapixiheaderobjectpropertyrequired"></a>

```typescript
public readonly required: boolean;
```

- *Type:* `boolean`

Determines whether this parameter is mandatory.

If the parameter location is "path", this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be included and its default value is false.

---

### IInfoObject <a name="@alma-cdk/openapix.IInfoObject" id="almacdkopenapixiinfoobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IInfoObject`](#@alma-cdk/openapix.IInfoObject)

The object provides metadata about the API.

The metadata MAY be used by the clients if needed, and MAY be presented in editing or documentation generation tools for convenience.


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

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

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

### ILinkObject <a name="@alma-cdk/openapix.ILinkObject" id="almacdkopenapixilinkobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.ILinkObject`](#@alma-cdk/openapix.ILinkObject)

The Link object represents a possible design-time link for a response.

The presence of a link does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations. Unlike dynamic links (i.e. links provided in the response payload), the OAS linking mechanism does not require link information in the runtime response. For computing links, and providing instructions to execute them, a runtime expression is used for accessing values in an operation and using them as parameters while invoking the linked operation.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`description`](#almacdkopenapixilinkobjectpropertydescription) | `string` | A description of the link. |
| [`operationId`](#almacdkopenapixilinkobjectpropertyoperationid) | `string` | The name of an existing, resolvable OAS operation, as defined with a unique operationId. |
| [`operationRef`](#almacdkopenapixilinkobjectpropertyoperationref) | `string` | A relative or absolute URI reference to an OAS operation. |
| [`parameters`](#almacdkopenapixilinkobjectpropertyparameters) | {[ key: string ]: `any`} | A map representing parameters to pass to an operation as specified with operationId or identified via operationRef. |
| [`requestBody`](#almacdkopenapixilinkobjectpropertyrequestbody) | `any` | A literal value or {expression} to use as a request body when calling the target operation. |
| [`server`](#almacdkopenapixilinkobjectpropertyserver) | [`@alma-cdk/openapix.IServerObject`](#@alma-cdk/openapix.IServerObject) | A server object to be used by the target operation. |

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.ILinkObject.property.description" id="almacdkopenapixilinkobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A description of the link.

CommonMark syntax MAY be used for rich text representation.

---

##### `operationId`<sup>Optional</sup> <a name="@alma-cdk/openapix.ILinkObject.property.operationId" id="almacdkopenapixilinkobjectpropertyoperationid"></a>

```typescript
public readonly operationId: string;
```

- *Type:* `string`

The name of an existing, resolvable OAS operation, as defined with a unique operationId.

This field is mutually exclusive of the operationRef field.

---

##### `operationRef`<sup>Optional</sup> <a name="@alma-cdk/openapix.ILinkObject.property.operationRef" id="almacdkopenapixilinkobjectpropertyoperationref"></a>

```typescript
public readonly operationRef: string;
```

- *Type:* `string`

A relative or absolute URI reference to an OAS operation.

This field is mutually exclusive of the operationId field, and MUST point to an Operation Object. Relative operationRef values MAY be used to locate an existing Operation Object in the OpenAPI definition.

---

##### `parameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.ILinkObject.property.parameters" id="almacdkopenapixilinkobjectpropertyparameters"></a>

```typescript
public readonly parameters: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

A map representing parameters to pass to an operation as specified with operationId or identified via operationRef.

The key is the parameter name to be used, whereas the value can be a constant or an expression to be evaluated and passed to the linked operation. The parameter name can be qualified using the parameter location [{in}.]{name} for operations that use the same parameter name in different locations (e.g. path.id).

---

##### `requestBody`<sup>Optional</sup> <a name="@alma-cdk/openapix.ILinkObject.property.requestBody" id="almacdkopenapixilinkobjectpropertyrequestbody"></a>

```typescript
public readonly requestBody: any;
```

- *Type:* `any`

A literal value or {expression} to use as a request body when calling the target operation.

---

##### `server`<sup>Optional</sup> <a name="@alma-cdk/openapix.ILinkObject.property.server" id="almacdkopenapixilinkobjectpropertyserver"></a>

```typescript
public readonly server: IServerObject;
```

- *Type:* [`@alma-cdk/openapix.IServerObject`](#@alma-cdk/openapix.IServerObject)

A server object to be used by the target operation.

---

### IMediaTypeObject <a name="@alma-cdk/openapix.IMediaTypeObject" id="almacdkopenapiximediatypeobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IMediaTypeObject`](#@alma-cdk/openapix.IMediaTypeObject)

Each Media Type Object provides schema and examples for the media type identified by its key.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`encoding`](#almacdkopenapiximediatypeobjectpropertyencoding) | {[ key: string ]: [`@alma-cdk/openapix.IEncodingObject`](#@alma-cdk/openapix.IEncodingObject)} | A map between a property name and its encoding information. |
| [`example`](#almacdkopenapiximediatypeobjectpropertyexample) | `any` | Example of the media type. |
| [`examples`](#almacdkopenapiximediatypeobjectpropertyexamples) | {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.IExampleObject`](#@alma-cdk/openapix.IExampleObject)} | Examples of the media type. |
| [`schema`](#almacdkopenapiximediatypeobjectpropertyschema) | [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.ISchemaObject`](#@alma-cdk/openapix.ISchemaObject) | The schema defining the content of the request, response, or parameter. |

---

##### `encoding`<sup>Optional</sup> <a name="@alma-cdk/openapix.IMediaTypeObject.property.encoding" id="almacdkopenapiximediatypeobjectpropertyencoding"></a>

```typescript
public readonly encoding: {[ key: string ]: IEncodingObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.IEncodingObject`](#@alma-cdk/openapix.IEncodingObject)}

A map between a property name and its encoding information.

The key, being the property name, MUST exist in the schema as a property. The encoding object SHALL only apply to requestBody objects when the media type is multipart or application/x-www-form-urlencoded.

---

##### `example`<sup>Optional</sup> <a name="@alma-cdk/openapix.IMediaTypeObject.property.example" id="almacdkopenapiximediatypeobjectpropertyexample"></a>

```typescript
public readonly example: any;
```

- *Type:* `any`

Example of the media type.

The example object SHOULD be in the correct format as specified by the media type. The example field is mutually exclusive of the examples field. Furthermore, if referencing a schema which contains an example, the example value SHALL override the example provided by the schema.

---

##### `examples`<sup>Optional</sup> <a name="@alma-cdk/openapix.IMediaTypeObject.property.examples" id="almacdkopenapiximediatypeobjectpropertyexamples"></a>

```typescript
public readonly examples: {[ key: string ]: IReferenceObject | IExampleObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.IExampleObject`](#@alma-cdk/openapix.IExampleObject)}

Examples of the media type.

Each example object SHOULD match the media type and specified schema if present. The examples field is mutually exclusive of the example field. Furthermore, if referencing a schema which contains an example, the examples value SHALL override the example provided by the schema.

---

##### `schema`<sup>Optional</sup> <a name="@alma-cdk/openapix.IMediaTypeObject.property.schema" id="almacdkopenapiximediatypeobjectpropertyschema"></a>

```typescript
public readonly schema: IReferenceObject | ISchemaObject;
```

- *Type:* [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.ISchemaObject`](#@alma-cdk/openapix.ISchemaObject)

The schema defining the content of the request, response, or parameter.

---

### IOAuthFlowObject <a name="@alma-cdk/openapix.IOAuthFlowObject" id="almacdkopenapixioauthflowobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IOAuthFlowObject`](#@alma-cdk/openapix.IOAuthFlowObject)

Configuration details for a supported OAuth Flow.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scopes`](#almacdkopenapixioauthflowobjectpropertyscopes)<span title="Required">*</span> | {[ key: string ]: `string`} | The available scopes for the OAuth2 security scheme. |
| [`authorizationUrl`](#almacdkopenapixioauthflowobjectpropertyauthorizationurl) | `string` | The authorization URL to be used for this flow. |
| [`refreshUrl`](#almacdkopenapixioauthflowobjectpropertyrefreshurl) | `string` | The URL to be used for obtaining refresh tokens. |
| [`tokenUrl`](#almacdkopenapixioauthflowobjectpropertytokenurl) | `string` | The token URL to be used for this flow. |

---

##### `scopes`<sup>Required</sup> <a name="@alma-cdk/openapix.IOAuthFlowObject.property.scopes" id="almacdkopenapixioauthflowobjectpropertyscopes"></a>

```typescript
public readonly scopes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

The available scopes for the OAuth2 security scheme.

A map between the scope name and a short description for it. The map MAY be empty.

---

##### `authorizationUrl`<sup>Optional</sup> <a name="@alma-cdk/openapix.IOAuthFlowObject.property.authorizationUrl" id="almacdkopenapixioauthflowobjectpropertyauthorizationurl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* `string`

The authorization URL to be used for this flow.

This MUST be in the form of a URL. REQUIRED for oauth2 ("implicit", "authorizationCode").

---

##### `refreshUrl`<sup>Optional</sup> <a name="@alma-cdk/openapix.IOAuthFlowObject.property.refreshUrl" id="almacdkopenapixioauthflowobjectpropertyrefreshurl"></a>

```typescript
public readonly refreshUrl: string;
```

- *Type:* `string`

The URL to be used for obtaining refresh tokens.

This MUST be in the form of a URL.

---

##### `tokenUrl`<sup>Optional</sup> <a name="@alma-cdk/openapix.IOAuthFlowObject.property.tokenUrl" id="almacdkopenapixioauthflowobjectpropertytokenurl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* `string`

The token URL to be used for this flow.

This MUST be in the form of a URL. REQUIRED for oauth2 ("password", "clientCredentials", "authorizationCode").

---

### IOAuthFlowsObject <a name="@alma-cdk/openapix.IOAuthFlowsObject" id="almacdkopenapixioauthflowsobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IOAuthFlowsObject`](#@alma-cdk/openapix.IOAuthFlowsObject)

Allows configuration of the supported OAuth Flows.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`authorizationCode`](#almacdkopenapixioauthflowsobjectpropertyauthorizationcode) | [`@alma-cdk/openapix.IOAuthFlowObject`](#@alma-cdk/openapix.IOAuthFlowObject) | Configuration for the OAuth Authorization Code flow. |
| [`clientCredentials`](#almacdkopenapixioauthflowsobjectpropertyclientcredentials) | [`@alma-cdk/openapix.IOAuthFlowObject`](#@alma-cdk/openapix.IOAuthFlowObject) | Configuration for the OAuth Client Credentials flow. |
| [`implicit`](#almacdkopenapixioauthflowsobjectpropertyimplicit) | [`@alma-cdk/openapix.IOAuthFlowObject`](#@alma-cdk/openapix.IOAuthFlowObject) | Configuration for the OAuth Implicit flow. |
| [`password`](#almacdkopenapixioauthflowsobjectpropertypassword) | [`@alma-cdk/openapix.IOAuthFlowObject`](#@alma-cdk/openapix.IOAuthFlowObject) | Configuration for the OAuth Resource Owner Password flow. |

---

##### `authorizationCode`<sup>Optional</sup> <a name="@alma-cdk/openapix.IOAuthFlowsObject.property.authorizationCode" id="almacdkopenapixioauthflowsobjectpropertyauthorizationcode"></a>

```typescript
public readonly authorizationCode: IOAuthFlowObject;
```

- *Type:* [`@alma-cdk/openapix.IOAuthFlowObject`](#@alma-cdk/openapix.IOAuthFlowObject)

Configuration for the OAuth Authorization Code flow.

Previously called accessCode in OpenAPI 2.0.

---

##### `clientCredentials`<sup>Optional</sup> <a name="@alma-cdk/openapix.IOAuthFlowsObject.property.clientCredentials" id="almacdkopenapixioauthflowsobjectpropertyclientcredentials"></a>

```typescript
public readonly clientCredentials: IOAuthFlowObject;
```

- *Type:* [`@alma-cdk/openapix.IOAuthFlowObject`](#@alma-cdk/openapix.IOAuthFlowObject)

Configuration for the OAuth Client Credentials flow.

Previously called application in OpenAPI 2.0.

---

##### `implicit`<sup>Optional</sup> <a name="@alma-cdk/openapix.IOAuthFlowsObject.property.implicit" id="almacdkopenapixioauthflowsobjectpropertyimplicit"></a>

```typescript
public readonly implicit: IOAuthFlowObject;
```

- *Type:* [`@alma-cdk/openapix.IOAuthFlowObject`](#@alma-cdk/openapix.IOAuthFlowObject)

Configuration for the OAuth Implicit flow.

---

##### `password`<sup>Optional</sup> <a name="@alma-cdk/openapix.IOAuthFlowsObject.property.password" id="almacdkopenapixioauthflowsobjectpropertypassword"></a>

```typescript
public readonly password: IOAuthFlowObject;
```

- *Type:* [`@alma-cdk/openapix.IOAuthFlowObject`](#@alma-cdk/openapix.IOAuthFlowObject)

Configuration for the OAuth Resource Owner Password flow.

---

### IOperationObject <a name="@alma-cdk/openapix.IOperationObject" id="almacdkopenapixioperationobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IOperationObject`](#@alma-cdk/openapix.IOperationObject)

Describes a single API operation on a path.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`responses`](#almacdkopenapixioperationobjectpropertyresponses)<span title="Required">*</span> | [`@alma-cdk/openapix.IResponsesObject`](#@alma-cdk/openapix.IResponsesObject) | The list of possible responses as they are returned from executing this operation. |
| [`callbacks`](#almacdkopenapixioperationobjectpropertycallbacks) | {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.ICallbackObject`](#@alma-cdk/openapix.ICallbackObject)} | A map of possible out-of band callbacks related to the parent operation. |
| [`deprecated`](#almacdkopenapixioperationobjectpropertydeprecated) | `boolean` | Declares this operation to be deprecated. |
| [`description`](#almacdkopenapixioperationobjectpropertydescription) | `string` | A verbose explanation of the operation behavior. |
| [`externalDocs`](#almacdkopenapixioperationobjectpropertyexternaldocs) | [`@alma-cdk/openapix.IExternalDocumentationObject`](#@alma-cdk/openapix.IExternalDocumentationObject) | Additional external documentation for this operation. |
| [`operationId`](#almacdkopenapixioperationobjectpropertyoperationid) | `string` | Unique string used to identify the operation. |
| [`parameters`](#almacdkopenapixioperationobjectpropertyparameters) | [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.IParameterObject`](#@alma-cdk/openapix.IParameterObject)[] | A list of parameters that are applicable for this operation. |
| [`requestBody`](#almacdkopenapixioperationobjectpropertyrequestbody) | [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.IRequestBodyObject`](#@alma-cdk/openapix.IRequestBodyObject) | The request body applicable for this operation. |
| [`security`](#almacdkopenapixioperationobjectpropertysecurity) | [`@alma-cdk/openapix.ISecurityRequirementObject`](#@alma-cdk/openapix.ISecurityRequirementObject)[] | A declaration of which security mechanisms can be used for this operation. |
| [`summary`](#almacdkopenapixioperationobjectpropertysummary) | `string` | A short summary of what the operation does. |
| [`tags`](#almacdkopenapixioperationobjectpropertytags) | `string`[] | A list of tags for API documentation control. |

---

##### `responses`<sup>Required</sup> <a name="@alma-cdk/openapix.IOperationObject.property.responses" id="almacdkopenapixioperationobjectpropertyresponses"></a>

```typescript
public readonly responses: IResponsesObject;
```

- *Type:* [`@alma-cdk/openapix.IResponsesObject`](#@alma-cdk/openapix.IResponsesObject)

The list of possible responses as they are returned from executing this operation.

---

##### `callbacks`<sup>Optional</sup> <a name="@alma-cdk/openapix.IOperationObject.property.callbacks" id="almacdkopenapixioperationobjectpropertycallbacks"></a>

```typescript
public readonly callbacks: {[ key: string ]: IReferenceObject | ICallbackObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.ICallbackObject`](#@alma-cdk/openapix.ICallbackObject)}

A map of possible out-of band callbacks related to the parent operation.

The key is a unique identifier for the Callback Object. Each value in the map is a Callback Object that describes a request that may be initiated by the API provider and the expected responses.

---

##### `deprecated`<sup>Optional</sup> <a name="@alma-cdk/openapix.IOperationObject.property.deprecated" id="almacdkopenapixioperationobjectpropertydeprecated"></a>

```typescript
public readonly deprecated: boolean;
```

- *Type:* `boolean`

Declares this operation to be deprecated.

Consumers SHOULD refrain from usage of the declared operation. Default value is false.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.IOperationObject.property.description" id="almacdkopenapixioperationobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A verbose explanation of the operation behavior.

CommonMark syntax MAY be used for rich text representation.

---

##### `externalDocs`<sup>Optional</sup> <a name="@alma-cdk/openapix.IOperationObject.property.externalDocs" id="almacdkopenapixioperationobjectpropertyexternaldocs"></a>

```typescript
public readonly externalDocs: IExternalDocumentationObject;
```

- *Type:* [`@alma-cdk/openapix.IExternalDocumentationObject`](#@alma-cdk/openapix.IExternalDocumentationObject)

Additional external documentation for this operation.

---

##### `operationId`<sup>Optional</sup> <a name="@alma-cdk/openapix.IOperationObject.property.operationId" id="almacdkopenapixioperationobjectpropertyoperationid"></a>

```typescript
public readonly operationId: string;
```

- *Type:* `string`

Unique string used to identify the operation.

The id MUST be unique among all operations described in the API. The operationId value is case-sensitive. Tools and libraries MAY use the operationId to uniquely identify an operation, therefore, it is RECOMMENDED to follow common programming naming conventions.

---

##### `parameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.IOperationObject.property.parameters" id="almacdkopenapixioperationobjectpropertyparameters"></a>

```typescript
public readonly parameters: IReferenceObject | IParameterObject[];
```

- *Type:* [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.IParameterObject`](#@alma-cdk/openapix.IParameterObject)[]

A list of parameters that are applicable for this operation.

If a parameter is already defined at the Path Item, the new definition will override it but can never remove it. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object's components/parameters.

---

##### `requestBody`<sup>Optional</sup> <a name="@alma-cdk/openapix.IOperationObject.property.requestBody" id="almacdkopenapixioperationobjectpropertyrequestbody"></a>

```typescript
public readonly requestBody: IReferenceObject | IRequestBodyObject;
```

- *Type:* [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.IRequestBodyObject`](#@alma-cdk/openapix.IRequestBodyObject)

The request body applicable for this operation.

The requestBody is only supported in HTTP methods where the HTTP 1.1 specification RFC7231 has explicitly defined semantics for request bodies. In other cases where the HTTP spec is vague, requestBody SHALL be ignored by consumers.

---

##### `security`<sup>Optional</sup> <a name="@alma-cdk/openapix.IOperationObject.property.security" id="almacdkopenapixioperationobjectpropertysecurity"></a>

```typescript
public readonly security: ISecurityRequirementObject[];
```

- *Type:* [`@alma-cdk/openapix.ISecurityRequirementObject`](#@alma-cdk/openapix.ISecurityRequirementObject)[]

A declaration of which security mechanisms can be used for this operation.

The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. To make security optional, an empty security requirement ({}) can be included in the array. This definition overrides any declared top-level security. To remove a top-level security declaration, an empty array can be used.

---

##### `summary`<sup>Optional</sup> <a name="@alma-cdk/openapix.IOperationObject.property.summary" id="almacdkopenapixioperationobjectpropertysummary"></a>

```typescript
public readonly summary: string;
```

- *Type:* `string`

A short summary of what the operation does.

---

##### `tags`<sup>Optional</sup> <a name="@alma-cdk/openapix.IOperationObject.property.tags" id="almacdkopenapixioperationobjectpropertytags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* `string`[]

A list of tags for API documentation control.

Tags can be used for logical grouping of operations by resources or any other qualifier.

---

### IParameterObject <a name="@alma-cdk/openapix.IParameterObject" id="almacdkopenapixiparameterobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IParameterObject`](#@alma-cdk/openapix.IParameterObject)

Describes a single operation parameter.

A unique parameter is defined by a combination of a name and location.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`in`](#almacdkopenapixiparameterobjectpropertyin)<span title="Required">*</span> | `string` | The location of the parameter. |
| [`name`](#almacdkopenapixiparameterobjectpropertyname)<span title="Required">*</span> | `string` | The name of the parameter. Parameter names are case sensitive. |
| [`allowEmptyValue`](#almacdkopenapixiparameterobjectpropertyallowemptyvalue) | `boolean` | Sets the ability to pass empty-valued parameters. |
| [`deprecated`](#almacdkopenapixiparameterobjectpropertydeprecated) | `boolean` | Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. |
| [`description`](#almacdkopenapixiparameterobjectpropertydescription) | `string` | A brief description of the parameter. |
| [`required`](#almacdkopenapixiparameterobjectpropertyrequired) | `boolean` | Determines whether this parameter is mandatory. |

---

##### `in`<sup>Required</sup> <a name="@alma-cdk/openapix.IParameterObject.property.in" id="almacdkopenapixiparameterobjectpropertyin"></a>

```typescript
public readonly in: string;
```

- *Type:* `string`

The location of the parameter.

Possible values are "query", "header", "path" or "cookie".

---

##### `name`<sup>Required</sup> <a name="@alma-cdk/openapix.IParameterObject.property.name" id="almacdkopenapixiparameterobjectpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the parameter. Parameter names are case sensitive.

If in is "path", the name field MUST correspond to a template expression occurring within the path field in the Paths Object. See Path Templating for further information. If in is "header" and the name field is "Accept", "Content-Type" or "Authorization", the parameter definition SHALL be ignored. For all other cases, the name corresponds to the parameter name used by the in property.

---

##### `allowEmptyValue`<sup>Optional</sup> <a name="@alma-cdk/openapix.IParameterObject.property.allowEmptyValue" id="almacdkopenapixiparameterobjectpropertyallowemptyvalue"></a>

```typescript
public readonly allowEmptyValue: boolean;
```

- *Type:* `boolean`

Sets the ability to pass empty-valued parameters.

This is valid only for query parameters and allows sending a parameter with an empty value. Default value is false. If style is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.

---

##### `deprecated`<sup>Optional</sup> <a name="@alma-cdk/openapix.IParameterObject.property.deprecated" id="almacdkopenapixiparameterobjectpropertydeprecated"></a>

```typescript
public readonly deprecated: boolean;
```

- *Type:* `boolean`

Specifies that a parameter is deprecated and SHOULD be transitioned out of usage.

Default value is false.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.IParameterObject.property.description" id="almacdkopenapixiparameterobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A brief description of the parameter.

This could contain examples of use. CommonMark syntax MAY be used for rich text representation.

---

##### `required`<sup>Optional</sup> <a name="@alma-cdk/openapix.IParameterObject.property.required" id="almacdkopenapixiparameterobjectpropertyrequired"></a>

```typescript
public readonly required: boolean;
```

- *Type:* `boolean`

Determines whether this parameter is mandatory.

If the parameter location is "path", this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be included and its default value is false.

---

### IPathItemObject <a name="@alma-cdk/openapix.IPathItemObject" id="almacdkopenapixipathitemobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IPathItemObject`](#@alma-cdk/openapix.IPathItemObject)

Describes the operations available on a single path.

A Path Item MAY be empty, due to ACL constraints. The path itself is still exposed to the documentation viewer but they will not know which operations and parameters are available.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`delete`](#almacdkopenapixipathitemobjectpropertydelete) | [`@alma-cdk/openapix.IOperationObject`](#@alma-cdk/openapix.IOperationObject) | A definition of a DELETE operation on this path. |
| [`description`](#almacdkopenapixipathitemobjectpropertydescription) | `string` | An optional, string description, intended to apply to all operations in this path. |
| [`get`](#almacdkopenapixipathitemobjectpropertyget) | [`@alma-cdk/openapix.IOperationObject`](#@alma-cdk/openapix.IOperationObject) | A definition of a GET operation on this path. |
| [`head`](#almacdkopenapixipathitemobjectpropertyhead) | [`@alma-cdk/openapix.IOperationObject`](#@alma-cdk/openapix.IOperationObject) | A definition of a HEAD operation on this path. |
| [`options`](#almacdkopenapixipathitemobjectpropertyoptions) | [`@alma-cdk/openapix.IOperationObject`](#@alma-cdk/openapix.IOperationObject) | A definition of a OPTIONS operation on this path. |
| [`parameters`](#almacdkopenapixipathitemobjectpropertyparameters) | [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.IParameterObject`](#@alma-cdk/openapix.IParameterObject)[] | A list of parameters that are applicable for all the operations described under this path. |
| [`patch`](#almacdkopenapixipathitemobjectpropertypatch) | [`@alma-cdk/openapix.IOperationObject`](#@alma-cdk/openapix.IOperationObject) | A definition of a PATCH operation on this path. |
| [`post`](#almacdkopenapixipathitemobjectpropertypost) | [`@alma-cdk/openapix.IOperationObject`](#@alma-cdk/openapix.IOperationObject) | A definition of a POST operation on this path. |
| [`put`](#almacdkopenapixipathitemobjectpropertyput) | [`@alma-cdk/openapix.IOperationObject`](#@alma-cdk/openapix.IOperationObject) | A definition of a PUT operation on this path. |
| [`summary`](#almacdkopenapixipathitemobjectpropertysummary) | `string` | An optional, string summary, intended to apply to all operations in this path. |
| [`trace`](#almacdkopenapixipathitemobjectpropertytrace) | [`@alma-cdk/openapix.IOperationObject`](#@alma-cdk/openapix.IOperationObject) | A definition of a TRACE operation on this path. |

---

##### `delete`<sup>Optional</sup> <a name="@alma-cdk/openapix.IPathItemObject.property.delete" id="almacdkopenapixipathitemobjectpropertydelete"></a>

```typescript
public readonly delete: IOperationObject;
```

- *Type:* [`@alma-cdk/openapix.IOperationObject`](#@alma-cdk/openapix.IOperationObject)

A definition of a DELETE operation on this path.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.IPathItemObject.property.description" id="almacdkopenapixipathitemobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

An optional, string description, intended to apply to all operations in this path.

CommonMark syntax MAY be used for rich text representation.

---

##### `get`<sup>Optional</sup> <a name="@alma-cdk/openapix.IPathItemObject.property.get" id="almacdkopenapixipathitemobjectpropertyget"></a>

```typescript
public readonly get: IOperationObject;
```

- *Type:* [`@alma-cdk/openapix.IOperationObject`](#@alma-cdk/openapix.IOperationObject)

A definition of a GET operation on this path.

---

##### `head`<sup>Optional</sup> <a name="@alma-cdk/openapix.IPathItemObject.property.head" id="almacdkopenapixipathitemobjectpropertyhead"></a>

```typescript
public readonly head: IOperationObject;
```

- *Type:* [`@alma-cdk/openapix.IOperationObject`](#@alma-cdk/openapix.IOperationObject)

A definition of a HEAD operation on this path.

---

##### `options`<sup>Optional</sup> <a name="@alma-cdk/openapix.IPathItemObject.property.options" id="almacdkopenapixipathitemobjectpropertyoptions"></a>

```typescript
public readonly options: IOperationObject;
```

- *Type:* [`@alma-cdk/openapix.IOperationObject`](#@alma-cdk/openapix.IOperationObject)

A definition of a OPTIONS operation on this path.

---

##### `parameters`<sup>Optional</sup> <a name="@alma-cdk/openapix.IPathItemObject.property.parameters" id="almacdkopenapixipathitemobjectpropertyparameters"></a>

```typescript
public readonly parameters: IReferenceObject | IParameterObject[];
```

- *Type:* [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.IParameterObject`](#@alma-cdk/openapix.IParameterObject)[]

A list of parameters that are applicable for all the operations described under this path.

These parameters can be overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object's components/parameters.

---

##### `patch`<sup>Optional</sup> <a name="@alma-cdk/openapix.IPathItemObject.property.patch" id="almacdkopenapixipathitemobjectpropertypatch"></a>

```typescript
public readonly patch: IOperationObject;
```

- *Type:* [`@alma-cdk/openapix.IOperationObject`](#@alma-cdk/openapix.IOperationObject)

A definition of a PATCH operation on this path.

---

##### `post`<sup>Optional</sup> <a name="@alma-cdk/openapix.IPathItemObject.property.post" id="almacdkopenapixipathitemobjectpropertypost"></a>

```typescript
public readonly post: IOperationObject;
```

- *Type:* [`@alma-cdk/openapix.IOperationObject`](#@alma-cdk/openapix.IOperationObject)

A definition of a POST operation on this path.

---

##### `put`<sup>Optional</sup> <a name="@alma-cdk/openapix.IPathItemObject.property.put" id="almacdkopenapixipathitemobjectpropertyput"></a>

```typescript
public readonly put: IOperationObject;
```

- *Type:* [`@alma-cdk/openapix.IOperationObject`](#@alma-cdk/openapix.IOperationObject)

A definition of a PUT operation on this path.

---

##### `summary`<sup>Optional</sup> <a name="@alma-cdk/openapix.IPathItemObject.property.summary" id="almacdkopenapixipathitemobjectpropertysummary"></a>

```typescript
public readonly summary: string;
```

- *Type:* `string`

An optional, string summary, intended to apply to all operations in this path.

---

##### `trace`<sup>Optional</sup> <a name="@alma-cdk/openapix.IPathItemObject.property.trace" id="almacdkopenapixipathitemobjectpropertytrace"></a>

```typescript
public readonly trace: IOperationObject;
```

- *Type:* [`@alma-cdk/openapix.IOperationObject`](#@alma-cdk/openapix.IOperationObject)

A definition of a TRACE operation on this path.

---

### IPathsObject <a name="@alma-cdk/openapix.IPathsObject" id="almacdkopenapixipathsobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IPathsObject`](#@alma-cdk/openapix.IPathsObject)

Holds the relative paths to the individual endpoints and their operations.

The path is appended to the URL from the Server Object in order to construct the full URL. The Paths MAY be empty, due to ACL constraints.



### IReferenceObject <a name="@alma-cdk/openapix.IReferenceObject" id="almacdkopenapixireferenceobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject)

A simple object to allow referencing other components in the specification, internally and externally.



### IRequestBodyObject <a name="@alma-cdk/openapix.IRequestBodyObject" id="almacdkopenapixirequestbodyobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IRequestBodyObject`](#@alma-cdk/openapix.IRequestBodyObject)

Describes a single request body.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`content`](#almacdkopenapixirequestbodyobjectpropertycontent)<span title="Required">*</span> | {[ key: string ]: [`@alma-cdk/openapix.IMediaTypeObject`](#@alma-cdk/openapix.IMediaTypeObject)} | The content of the request body. |
| [`description`](#almacdkopenapixirequestbodyobjectpropertydescription) | `string` | A brief description of the request body. |
| [`required`](#almacdkopenapixirequestbodyobjectpropertyrequired) | `boolean` | Determines if the request body is required in the request. |

---

##### `content`<sup>Required</sup> <a name="@alma-cdk/openapix.IRequestBodyObject.property.content" id="almacdkopenapixirequestbodyobjectpropertycontent"></a>

```typescript
public readonly content: {[ key: string ]: IMediaTypeObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.IMediaTypeObject`](#@alma-cdk/openapix.IMediaTypeObject)}

The content of the request body.

The key is a media type or media type range and the value describes it. For requests that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.IRequestBodyObject.property.description" id="almacdkopenapixirequestbodyobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A brief description of the request body.

This could contain examples of use. CommonMark syntax MAY be used for rich text representation.

---

##### `required`<sup>Optional</sup> <a name="@alma-cdk/openapix.IRequestBodyObject.property.required" id="almacdkopenapixirequestbodyobjectpropertyrequired"></a>

```typescript
public readonly required: boolean;
```

- *Type:* `boolean`

Determines if the request body is required in the request.

Defaults to false.

---

### IResponseObject <a name="@alma-cdk/openapix.IResponseObject" id="almacdkopenapixiresponseobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IResponseObject`](#@alma-cdk/openapix.IResponseObject)

Describes a single response from an API Operation, including design-time, static links to operations based on the response.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`description`](#almacdkopenapixiresponseobjectpropertydescription)<span title="Required">*</span> | `string` | A short description of the response. |
| [`content`](#almacdkopenapixiresponseobjectpropertycontent) | {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.IMediaTypeObject`](#@alma-cdk/openapix.IMediaTypeObject)} | A map containing descriptions of potential response payloads. |
| [`headers`](#almacdkopenapixiresponseobjectpropertyheaders) | {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.IHeaderObject`](#@alma-cdk/openapix.IHeaderObject)} | Maps a header name to its definition. |
| [`links`](#almacdkopenapixiresponseobjectpropertylinks) | {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) \| [`@alma-cdk/openapix.ILinkObject`](#@alma-cdk/openapix.ILinkObject)} | A map of operations links that can be followed from the response. |

---

##### `description`<sup>Required</sup> <a name="@alma-cdk/openapix.IResponseObject.property.description" id="almacdkopenapixiresponseobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A short description of the response.

CommonMark syntax MAY be used for rich text representation.

---

##### `content`<sup>Optional</sup> <a name="@alma-cdk/openapix.IResponseObject.property.content" id="almacdkopenapixiresponseobjectpropertycontent"></a>

```typescript
public readonly content: {[ key: string ]: IReferenceObject | IMediaTypeObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.IMediaTypeObject`](#@alma-cdk/openapix.IMediaTypeObject)}

A map containing descriptions of potential response payloads.

The key is a media type or media type range and the value describes it. For responses that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*

---

##### `headers`<sup>Optional</sup> <a name="@alma-cdk/openapix.IResponseObject.property.headers" id="almacdkopenapixiresponseobjectpropertyheaders"></a>

```typescript
public readonly headers: {[ key: string ]: IReferenceObject | IHeaderObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.IHeaderObject`](#@alma-cdk/openapix.IHeaderObject)}

Maps a header name to its definition.

RFC7230 states header names are case insensitive. If a response header is defined with the name "Content-Type", it SHALL be ignored.

---

##### `links`<sup>Optional</sup> <a name="@alma-cdk/openapix.IResponseObject.property.links" id="almacdkopenapixiresponseobjectpropertylinks"></a>

```typescript
public readonly links: {[ key: string ]: IReferenceObject | ILinkObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.IReferenceObject`](#@alma-cdk/openapix.IReferenceObject) | [`@alma-cdk/openapix.ILinkObject`](#@alma-cdk/openapix.ILinkObject)}

A map of operations links that can be followed from the response.

The key of the map is a short name for the link, following the naming constraints of the names for Component Objects.

---

### IResponsesObject <a name="@alma-cdk/openapix.IResponsesObject" id="almacdkopenapixiresponsesobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IResponsesObject`](#@alma-cdk/openapix.IResponsesObject)

A container for the expected responses of an operation.

The container maps a HTTP response code to the expected response. The documentation is not necessarily expected to cover all possible HTTP response codes because they may not be known in advance. However, documentation is expected to cover a successful operation response and any known errors. The default MAY be used as a default response object for all HTTP codes that are not covered individually by the specification. The Responses Object MUST contain at least one response code, and it SHOULD be the response for a successful operation call.



### ISchemaObject <a name="@alma-cdk/openapix.ISchemaObject" id="almacdkopenapixischemaobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.ISchemaObject`](#@alma-cdk/openapix.ISchemaObject)

The Schema Object allows the definition of input and output data types.

These types can be objects, but also primitives and arrays. This object is an extended subset of the JSON Schema Specification Wright Draft 00. For more information about the properties, see JSON Schema Core and JSON Schema Validation. Unless stated otherwise, the property definitions follow the JSON Schema.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`deprecated`](#almacdkopenapixischemaobjectpropertydeprecated) | `boolean` | Specifies that a schema is deprecated and SHOULD be transitioned out of usage. |
| [`discriminator`](#almacdkopenapixischemaobjectpropertydiscriminator) | [`@alma-cdk/openapix.IDiscriminatorObject`](#@alma-cdk/openapix.IDiscriminatorObject) | Adds support for polymorphism. |
| [`example`](#almacdkopenapixischemaobjectpropertyexample) | `any` | A free-form property to include an example of an instance for this schema. |
| [`externalDocs`](#almacdkopenapixischemaobjectpropertyexternaldocs) | [`@alma-cdk/openapix.IExternalDocumentationObject`](#@alma-cdk/openapix.IExternalDocumentationObject) | Additional external documentation for this schema. |
| [`nullable`](#almacdkopenapixischemaobjectpropertynullable) | `boolean` | A true value adds "null" to the allowed type specified by the type keyword, only if type is explicitly defined within the same Schema Object. |
| [`readOnly`](#almacdkopenapixischemaobjectpropertyreadonly) | `boolean` | Relevant only for Schema "properties" definitions. |
| [`writeOnly`](#almacdkopenapixischemaobjectpropertywriteonly) | `boolean` | Relevant only for Schema "properties" definitions. |
| [`xml`](#almacdkopenapixischemaobjectpropertyxml) | [`@alma-cdk/openapix.IXmlObject`](#@alma-cdk/openapix.IXmlObject) | This MAY be used only on properties schemas. |

---

##### `deprecated`<sup>Optional</sup> <a name="@alma-cdk/openapix.ISchemaObject.property.deprecated" id="almacdkopenapixischemaobjectpropertydeprecated"></a>

```typescript
public readonly deprecated: boolean;
```

- *Type:* `boolean`

Specifies that a schema is deprecated and SHOULD be transitioned out of usage.

Default value is false.

---

##### `discriminator`<sup>Optional</sup> <a name="@alma-cdk/openapix.ISchemaObject.property.discriminator" id="almacdkopenapixischemaobjectpropertydiscriminator"></a>

```typescript
public readonly discriminator: IDiscriminatorObject;
```

- *Type:* [`@alma-cdk/openapix.IDiscriminatorObject`](#@alma-cdk/openapix.IDiscriminatorObject)

Adds support for polymorphism.

The discriminator is an object name that is used to differentiate between other schemas which may satisfy the payload description. See Composition and Inheritance for more details.

---

##### `example`<sup>Optional</sup> <a name="@alma-cdk/openapix.ISchemaObject.property.example" id="almacdkopenapixischemaobjectpropertyexample"></a>

```typescript
public readonly example: any;
```

- *Type:* `any`

A free-form property to include an example of an instance for this schema.

To represent examples that cannot be naturally represented in JSON or YAML, a string value can be used to contain the example with escaping where necessary.

---

##### `externalDocs`<sup>Optional</sup> <a name="@alma-cdk/openapix.ISchemaObject.property.externalDocs" id="almacdkopenapixischemaobjectpropertyexternaldocs"></a>

```typescript
public readonly externalDocs: IExternalDocumentationObject;
```

- *Type:* [`@alma-cdk/openapix.IExternalDocumentationObject`](#@alma-cdk/openapix.IExternalDocumentationObject)

Additional external documentation for this schema.

---

##### `nullable`<sup>Optional</sup> <a name="@alma-cdk/openapix.ISchemaObject.property.nullable" id="almacdkopenapixischemaobjectpropertynullable"></a>

```typescript
public readonly nullable: boolean;
```

- *Type:* `boolean`

A true value adds "null" to the allowed type specified by the type keyword, only if type is explicitly defined within the same Schema Object.

Other Schema Object constraints retain their defined behavior, and therefore may disallow the use of null as a value. A false value leaves the specified or default type unmodified. The default value is false.

---

##### `readOnly`<sup>Optional</sup> <a name="@alma-cdk/openapix.ISchemaObject.property.readOnly" id="almacdkopenapixischemaobjectpropertyreadonly"></a>

```typescript
public readonly readOnly: boolean;
```

- *Type:* `boolean`

Relevant only for Schema "properties" definitions.

Declares the property as "read only". This means that it MAY be sent as part of a response but SHOULD NOT be sent as part of the request. If the property is marked as being true and is in the required list, the required will take effect on the response only. A property MUST NOT be marked as both and writeOnly being true. Default value is false.

---

##### `writeOnly`<sup>Optional</sup> <a name="@alma-cdk/openapix.ISchemaObject.property.writeOnly" id="almacdkopenapixischemaobjectpropertywriteonly"></a>

```typescript
public readonly writeOnly: boolean;
```

- *Type:* `boolean`

Relevant only for Schema "properties" definitions.

Declares the property as "write only". Therefore, it MAY be sent as part of a request but SHOULD NOT be sent as part of the response. If the property is marked as writeOnly being true and is in the required list, the required will take effect on the request only. A property MUST NOT be marked as both and writeOnly being true. Default value is false.

---

##### `xml`<sup>Optional</sup> <a name="@alma-cdk/openapix.ISchemaObject.property.xml" id="almacdkopenapixischemaobjectpropertyxml"></a>

```typescript
public readonly xml: IXmlObject;
```

- *Type:* [`@alma-cdk/openapix.IXmlObject`](#@alma-cdk/openapix.IXmlObject)

This MAY be used only on properties schemas.

It has no effect on root schemas. Adds additional metadata to describe the XML representation of this property.

---

### ISecurityRequirementObject <a name="@alma-cdk/openapix.ISecurityRequirementObject" id="almacdkopenapixisecurityrequirementobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.ISecurityRequirementObject`](#@alma-cdk/openapix.ISecurityRequirementObject)

Lists the required security schemes to execute this operation.

The name used for each property MUST correspond to a security scheme declared in the Security Schemes under the Components Object. Security Requirement Objects that contain multiple schemes require that all schemes MUST be satisfied for a request to be authorized. This enables support for scenarios where multiple query parameters or HTTP headers are required to convey security information. When a list of Security Requirement Objects is defined on the OpenAPI Object or Operation Object, only one of the Security Requirement Objects in the list needs to be satisfied to authorize the request.



### ISecuritySchemeObject <a name="@alma-cdk/openapix.ISecuritySchemeObject" id="almacdkopenapixisecurityschemeobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.ISecuritySchemeObject`](#@alma-cdk/openapix.ISecuritySchemeObject)

Defines a security scheme that can be used by the operations.

Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), OAuth2's common flows (implicit, password, client credentials and authorization code) as defined in RFC6749, and OpenID Connect Discovery.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`type`](#almacdkopenapixisecurityschemeobjectpropertytype)<span title="Required">*</span> | `string` | The type of the security scheme. |
| [`bearerFormat`](#almacdkopenapixisecurityschemeobjectpropertybearerformat) | `string` | A hint to the client to identify how the bearer token is formatted. |
| [`description`](#almacdkopenapixisecurityschemeobjectpropertydescription) | `string` | A short description for security scheme. |
| [`flow`](#almacdkopenapixisecurityschemeobjectpropertyflow) | [`@alma-cdk/openapix.IOAuthFlowsObject`](#@alma-cdk/openapix.IOAuthFlowsObject) | An object containing configuration information for the flow types supported. |
| [`in`](#almacdkopenapixisecurityschemeobjectpropertyin) | `string` | The location of the API key. |
| [`name`](#almacdkopenapixisecurityschemeobjectpropertyname) | `string` | The name of the header, query or cookie parameter to be used. |
| [`openIdConnectUrl`](#almacdkopenapixisecurityschemeobjectpropertyopenidconnecturl) | `string` | OpenId Connect URL to discover OAuth2 configuration values. |
| [`scheme`](#almacdkopenapixisecurityschemeobjectpropertyscheme) | `string` | The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235. |

---

##### `type`<sup>Required</sup> <a name="@alma-cdk/openapix.ISecuritySchemeObject.property.type" id="almacdkopenapixisecurityschemeobjectpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

The type of the security scheme.

Valid values are "apiKey", "http", "oauth2", "openIdConnect".

---

##### `bearerFormat`<sup>Optional</sup> <a name="@alma-cdk/openapix.ISecuritySchemeObject.property.bearerFormat" id="almacdkopenapixisecurityschemeobjectpropertybearerformat"></a>

```typescript
public readonly bearerFormat: string;
```

- *Type:* `string`

A hint to the client to identify how the bearer token is formatted.

Bearer tokens are usually generated by an authorization server, so this information is primarily for documentation purposes.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.ISecuritySchemeObject.property.description" id="almacdkopenapixisecurityschemeobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A short description for security scheme.

CommonMark syntax MAY be used for rich text representation.

---

##### `flow`<sup>Optional</sup> <a name="@alma-cdk/openapix.ISecuritySchemeObject.property.flow" id="almacdkopenapixisecurityschemeobjectpropertyflow"></a>

```typescript
public readonly flow: IOAuthFlowsObject;
```

- *Type:* [`@alma-cdk/openapix.IOAuthFlowsObject`](#@alma-cdk/openapix.IOAuthFlowsObject)

An object containing configuration information for the flow types supported.

REQUIRED for oauth2.

---

##### `in`<sup>Optional</sup> <a name="@alma-cdk/openapix.ISecuritySchemeObject.property.in" id="almacdkopenapixisecurityschemeobjectpropertyin"></a>

```typescript
public readonly in: string;
```

- *Type:* `string`

The location of the API key.

Valid values are "query", "header" or "cookie". REQUIRED for apiKey.

---

##### `name`<sup>Optional</sup> <a name="@alma-cdk/openapix.ISecuritySchemeObject.property.name" id="almacdkopenapixisecurityschemeobjectpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the header, query or cookie parameter to be used.

REQUIRED for apiKey.

---

##### `openIdConnectUrl`<sup>Optional</sup> <a name="@alma-cdk/openapix.ISecuritySchemeObject.property.openIdConnectUrl" id="almacdkopenapixisecurityschemeobjectpropertyopenidconnecturl"></a>

```typescript
public readonly openIdConnectUrl: string;
```

- *Type:* `string`

OpenId Connect URL to discover OAuth2 configuration values.

This MUST be in the form of a URL. REQUIRED for openIdConnect.

---

##### `scheme`<sup>Optional</sup> <a name="@alma-cdk/openapix.ISecuritySchemeObject.property.scheme" id="almacdkopenapixisecurityschemeobjectpropertyscheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* `string`

The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235.

The values used SHOULD be registered in the IANA Authentication Scheme registry. REQUIRED for http.

---

### IServerObject <a name="@alma-cdk/openapix.IServerObject" id="almacdkopenapixiserverobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IServerObject`](#@alma-cdk/openapix.IServerObject)

An object representing a Server.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`url`](#almacdkopenapixiserverobjectpropertyurl)<span title="Required">*</span> | `string` | REQUIRED. |
| [`description`](#almacdkopenapixiserverobjectpropertydescription) | `string` | An optional string describing the host designated by the URL. |
| [`variables`](#almacdkopenapixiserverobjectpropertyvariables) | {[ key: string ]: [`@alma-cdk/openapix.IServerVariableObject`](#@alma-cdk/openapix.IServerVariableObject)} | A map between a variable name and its value. |

---

##### `url`<sup>Required</sup> <a name="@alma-cdk/openapix.IServerObject.property.url" id="almacdkopenapixiserverobjectpropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

REQUIRED.

A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that the host location is relative to the location where the OpenAPI document is being served. Variable substitutions will be made when a variable is named in {brackets}.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.IServerObject.property.description" id="almacdkopenapixiserverobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

An optional string describing the host designated by the URL.

CommonMark syntax MAY be used for rich text representation.

---

##### `variables`<sup>Optional</sup> <a name="@alma-cdk/openapix.IServerObject.property.variables" id="almacdkopenapixiserverobjectpropertyvariables"></a>

```typescript
public readonly variables: {[ key: string ]: IServerVariableObject};
```

- *Type:* {[ key: string ]: [`@alma-cdk/openapix.IServerVariableObject`](#@alma-cdk/openapix.IServerVariableObject)}

A map between a variable name and its value.

The value is used for substitution in the server's URL template.

---

### IServerVariableObject <a name="@alma-cdk/openapix.IServerVariableObject" id="almacdkopenapixiservervariableobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IServerVariableObject`](#@alma-cdk/openapix.IServerVariableObject)

An object representing a Server Variable for server URL template substitution.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`default`](#almacdkopenapixiservervariableobjectpropertydefault)<span title="Required">*</span> | `string` | The default value to use for substitution, which SHALL be sent if an alternate value is not supplied. |
| [`description`](#almacdkopenapixiservervariableobjectpropertydescription) | `string` | An optional description for the server variable. |
| [`enum`](#almacdkopenapixiservervariableobjectpropertyenum) | `string`[] | An enumeration of string values to be used if the substitution options are from a limited set. |

---

##### `default`<sup>Required</sup> <a name="@alma-cdk/openapix.IServerVariableObject.property.default" id="almacdkopenapixiservervariableobjectpropertydefault"></a>

```typescript
public readonly default: string;
```

- *Type:* `string`

The default value to use for substitution, which SHALL be sent if an alternate value is not supplied.

Note this behavior is different than the Schema Object's treatment of default values, because in those cases parameter values are optional. If the enum is defined, the value SHOULD exist in the enum's values.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.IServerVariableObject.property.description" id="almacdkopenapixiservervariableobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

An optional description for the server variable.

CommonMark syntax MAY be used for rich text representation.

---

##### `enum`<sup>Optional</sup> <a name="@alma-cdk/openapix.IServerVariableObject.property.enum" id="almacdkopenapixiservervariableobjectpropertyenum"></a>

```typescript
public readonly enum: string[];
```

- *Type:* `string`[]

An enumeration of string values to be used if the substitution options are from a limited set.

The array SHOULD NOT be empty.

---

### ITagObject <a name="@alma-cdk/openapix.ITagObject" id="almacdkopenapixitagobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.ITagObject`](#@alma-cdk/openapix.ITagObject)

Adds metadata to a single tag that is used by the Operation Object.

It is not mandatory to have a Tag Object per tag defined in the Operation Object instances.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`name`](#almacdkopenapixitagobjectpropertyname)<span title="Required">*</span> | `string` | The name of the tag. |
| [`description`](#almacdkopenapixitagobjectpropertydescription) | `string` | A short description for the tag. |
| [`externalDocs`](#almacdkopenapixitagobjectpropertyexternaldocs) | [`@alma-cdk/openapix.IExternalDocumentationObject`](#@alma-cdk/openapix.IExternalDocumentationObject) | Additional external documentation for this tag. |

---

##### `name`<sup>Required</sup> <a name="@alma-cdk/openapix.ITagObject.property.name" id="almacdkopenapixitagobjectpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the tag.

---

##### `description`<sup>Optional</sup> <a name="@alma-cdk/openapix.ITagObject.property.description" id="almacdkopenapixitagobjectpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

A short description for the tag.

CommonMark syntax MAY be used for rich text representation.

---

##### `externalDocs`<sup>Optional</sup> <a name="@alma-cdk/openapix.ITagObject.property.externalDocs" id="almacdkopenapixitagobjectpropertyexternaldocs"></a>

```typescript
public readonly externalDocs: IExternalDocumentationObject;
```

- *Type:* [`@alma-cdk/openapix.IExternalDocumentationObject`](#@alma-cdk/openapix.IExternalDocumentationObject)

Additional external documentation for this tag.

---

### IXmlObject <a name="@alma-cdk/openapix.IXmlObject" id="almacdkopenapixixmlobject"></a>

- *Extends:* [`@alma-cdk/openapix.IExtensible`](#@alma-cdk/openapix.IExtensible)

- *Implemented By:* [`@alma-cdk/openapix.IXmlObject`](#@alma-cdk/openapix.IXmlObject)

A metadata object that allows for more fine-tuned XML model definitions.

When using arrays, XML element names are not inferred (for singular/plural forms) and the name property SHOULD be used to add that information. See examples for expected behavior.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`attribute`](#almacdkopenapixixmlobjectpropertyattribute) | `boolean` | Declares whether the property definition translates to an attribute instead of an element. |
| [`name`](#almacdkopenapixixmlobjectpropertyname) | `string` | Replaces the name of the element/attribute used for the described schema property. |
| [`namespace`](#almacdkopenapixixmlobjectpropertynamespace) | `string` | The URI of the namespace definition. |
| [`prefix`](#almacdkopenapixixmlobjectpropertyprefix) | `string` | The prefix to be used for the name. |
| [`wrapped`](#almacdkopenapixixmlobjectpropertywrapped) | `boolean` | MAY be used only for an array definition. |

---

##### `attribute`<sup>Optional</sup> <a name="@alma-cdk/openapix.IXmlObject.property.attribute" id="almacdkopenapixixmlobjectpropertyattribute"></a>

```typescript
public readonly attribute: boolean;
```

- *Type:* `boolean`

Declares whether the property definition translates to an attribute instead of an element.

Default value is false.

---

##### `name`<sup>Optional</sup> <a name="@alma-cdk/openapix.IXmlObject.property.name" id="almacdkopenapixixmlobjectpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Replaces the name of the element/attribute used for the described schema property.

When defined within items, it will affect the name of the individual XML elements within the list. When defined alongside type being array (outside the items), it will affect the wrapping element and only if wrapped is true. If wrapped is false, it will be ignored.

---

##### `namespace`<sup>Optional</sup> <a name="@alma-cdk/openapix.IXmlObject.property.namespace" id="almacdkopenapixixmlobjectpropertynamespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* `string`

The URI of the namespace definition.

Value MUST be in the form of an absolute URI.

---

##### `prefix`<sup>Optional</sup> <a name="@alma-cdk/openapix.IXmlObject.property.prefix" id="almacdkopenapixixmlobjectpropertyprefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* `string`

The prefix to be used for the name.

---

##### `wrapped`<sup>Optional</sup> <a name="@alma-cdk/openapix.IXmlObject.property.wrapped" id="almacdkopenapixixmlobjectpropertywrapped"></a>

```typescript
public readonly wrapped: boolean;
```

- *Type:* `boolean`

MAY be used only for an array definition.

Signifies whether the array is wrapped (for example, <books><book/><book/></books>) or unwrapped (<book/><book/>). Default value is false. The definition takes effect only when defined alongside type being array (outside the items).

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

