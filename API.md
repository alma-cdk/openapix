# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### OpenApiX <a name="openapi.OpenApiX"></a>

#### Initializers <a name="openapi.OpenApiX.Initializer"></a>

```typescript
import { OpenApiX } from 'openapi'

new OpenApiX(scope: Construct, id: string, props: OpenApiXProps)
```

##### `scope`<sup>Required</sup> <a name="openapi.OpenApiX.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="openapi.OpenApiX.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="openapi.OpenApiX.parameter.props"></a>

- *Type:* [`openapi.OpenApiXProps`](#openapi.OpenApiXProps)

---



#### Properties <a name="Properties"></a>

##### `api`<sup>Required</sup> <a name="openapi.OpenApiX.property.api"></a>

```typescript
public readonly api: IRestApi;
```

- *Type:* [`@aws-cdk/aws-apigateway.IRestApi`](#@aws-cdk/aws-apigateway.IRestApi)

---


## Structs <a name="Structs"></a>

### OpenApiXDefinitionProps <a name="openapi.OpenApiXDefinitionProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OpenApiXDefinitionProps } from 'openapi'

const openApiXDefinitionProps: OpenApiXDefinitionProps = { ... }
```

##### `source`<sup>Required</sup> <a name="openapi.OpenApiXDefinitionProps.property.source"></a>

```typescript
public readonly source: string | OpenApiXSource;
```

- *Type:* `string` | [`openapi.OpenApiXSource`](#openapi.OpenApiXSource)

---

##### `injectPaths`<sup>Optional</sup> <a name="openapi.OpenApiXDefinitionProps.property.injectPaths"></a>

```typescript
public readonly injectPaths: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

---

##### `integrations`<sup>Optional</sup> <a name="openapi.OpenApiXDefinitionProps.property.integrations"></a>

```typescript
public readonly integrations: {[ key: string ]: {[ key: string ]: OpenApiXIntegration}};
```

- *Type:* {[ key: string ]: {[ key: string ]: [`openapi.OpenApiXIntegration`](#openapi.OpenApiXIntegration)}}

---

##### `rejectPaths`<sup>Optional</sup> <a name="openapi.OpenApiXDefinitionProps.property.rejectPaths"></a>

```typescript
public readonly rejectPaths: string[];
```

- *Type:* `string`[]

---

##### `upload`<sup>Optional</sup> <a name="openapi.OpenApiXDefinitionProps.property.upload"></a>

```typescript
public readonly upload: boolean;
```

- *Type:* `boolean`

---

### OpenApiXProps <a name="openapi.OpenApiXProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OpenApiXProps } from 'openapi'

const openApiXProps: OpenApiXProps = { ... }
```

##### `source`<sup>Required</sup> <a name="openapi.OpenApiXProps.property.source"></a>

```typescript
public readonly source: string | OpenApiXSource;
```

- *Type:* `string` | [`openapi.OpenApiXSource`](#openapi.OpenApiXSource)

---

##### `injectPaths`<sup>Optional</sup> <a name="openapi.OpenApiXProps.property.injectPaths"></a>

```typescript
public readonly injectPaths: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

---

##### `integrations`<sup>Optional</sup> <a name="openapi.OpenApiXProps.property.integrations"></a>

```typescript
public readonly integrations: {[ key: string ]: {[ key: string ]: OpenApiXIntegration}};
```

- *Type:* {[ key: string ]: {[ key: string ]: [`openapi.OpenApiXIntegration`](#openapi.OpenApiXIntegration)}}

---

##### `rejectPaths`<sup>Optional</sup> <a name="openapi.OpenApiXProps.property.rejectPaths"></a>

```typescript
public readonly rejectPaths: string[];
```

- *Type:* `string`[]

---

##### `upload`<sup>Optional</sup> <a name="openapi.OpenApiXProps.property.upload"></a>

```typescript
public readonly upload: boolean;
```

- *Type:* `boolean`

---

##### `restApiProps`<sup>Required</sup> <a name="openapi.OpenApiXProps.property.restApiProps"></a>

```typescript
public readonly restApiProps: RestApiBaseProps;
```

- *Type:* [`@aws-cdk/aws-apigateway.RestApiBaseProps`](#@aws-cdk/aws-apigateway.RestApiBaseProps)

---

### OpenApiXSourceDefinition <a name="openapi.OpenApiXSourceDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OpenApiXSourceDefinition } from 'openapi'

const openApiXSourceDefinition: OpenApiXSourceDefinition = { ... }
```

##### `paths`<sup>Optional</sup> <a name="openapi.OpenApiXSourceDefinition.property.paths"></a>

```typescript
public readonly paths: {[ key: string ]: {[ key: string ]: any}};
```

- *Type:* {[ key: string ]: {[ key: string ]: `any`}}

---

### XAmazonIntegration <a name="openapi.XAmazonIntegration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { XAmazonIntegration } from 'openapi'

const xAmazonIntegration: XAmazonIntegration = { ... }
```

##### `httpMethod`<sup>Required</sup> <a name="openapi.XAmazonIntegration.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="openapi.XAmazonIntegration.property.type"></a>

```typescript
public readonly type: IntegrationType;
```

- *Type:* [`@aws-cdk/aws-apigateway.IntegrationType`](#@aws-cdk/aws-apigateway.IntegrationType)

---

##### `uri`<sup>Required</sup> <a name="openapi.XAmazonIntegration.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* `string`

---

##### `cacheKeyParameters`<sup>Optional</sup> <a name="openapi.XAmazonIntegration.property.cacheKeyParameters"></a>

```typescript
public readonly cacheKeyParameters: any[];
```

- *Type:* `any`[]

---

##### `cacheNamespace`<sup>Optional</sup> <a name="openapi.XAmazonIntegration.property.cacheNamespace"></a>

```typescript
public readonly cacheNamespace: string;
```

- *Type:* `string`

---

##### `credentials`<sup>Optional</sup> <a name="openapi.XAmazonIntegration.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* `string`

---

##### `requestParameters`<sup>Optional</sup> <a name="openapi.XAmazonIntegration.property.requestParameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Optional</sup> <a name="openapi.XAmazonIntegration.property.requestTemplates"></a>

```typescript
public readonly requestTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `responses`<sup>Optional</sup> <a name="openapi.XAmazonIntegration.property.responses"></a>

```typescript
public readonly responses: {[ key: string ]: XAmazonIntegrationResponse};
```

- *Type:* {[ key: string ]: [`openapi.XAmazonIntegrationResponse`](#openapi.XAmazonIntegrationResponse)}

---

### XAmazonIntegrationResponse <a name="openapi.XAmazonIntegrationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { XAmazonIntegrationResponse } from 'openapi'

const xAmazonIntegrationResponse: XAmazonIntegrationResponse = { ... }
```

##### `statusCode`<sup>Required</sup> <a name="openapi.XAmazonIntegrationResponse.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* `string`

---

##### `responseParameters`<sup>Optional</sup> <a name="openapi.XAmazonIntegrationResponse.property.responseParameters"></a>

```typescript
public readonly responseParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Optional</sup> <a name="openapi.XAmazonIntegrationResponse.property.responseTemplates"></a>

```typescript
public readonly responseTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

## Classes <a name="Classes"></a>

### OpenApiXDefinition <a name="openapi.OpenApiXDefinition"></a>

#### Initializers <a name="openapi.OpenApiXDefinition.Initializer"></a>

```typescript
import { OpenApiXDefinition } from 'openapi'

new OpenApiXDefinition(scope: Construct, props: OpenApiXDefinitionProps)
```

##### `scope`<sup>Required</sup> <a name="openapi.OpenApiXDefinition.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `props`<sup>Required</sup> <a name="openapi.OpenApiXDefinition.parameter.props"></a>

- *Type:* [`openapi.OpenApiXDefinitionProps`](#openapi.OpenApiXDefinitionProps)

---

#### Methods <a name="Methods"></a>

##### `bind` <a name="openapi.OpenApiXDefinition.bind"></a>

```typescript
public bind(_scope: Construct)
```

###### `_scope`<sup>Required</sup> <a name="openapi.OpenApiXDefinition.parameter._scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---




### OpenApiXHttp <a name="openapi.OpenApiXHttp"></a>

#### Initializers <a name="openapi.OpenApiXHttp.Initializer"></a>

```typescript
import { OpenApiXHttp } from 'openapi'

new OpenApiXHttp(scope: Construct, url: string, props?: HttpIntegrationProps)
```

##### `scope`<sup>Required</sup> <a name="openapi.OpenApiXHttp.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `url`<sup>Required</sup> <a name="openapi.OpenApiXHttp.parameter.url"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="openapi.OpenApiXHttp.parameter.props"></a>

- *Type:* [`@aws-cdk/aws-apigateway.HttpIntegrationProps`](#@aws-cdk/aws-apigateway.HttpIntegrationProps)

---





### OpenApiXIntegration <a name="openapi.OpenApiXIntegration"></a>

#### Initializers <a name="openapi.OpenApiXIntegration.Initializer"></a>

```typescript
import { OpenApiXIntegration } from 'openapi'

new OpenApiXIntegration()
```



#### Properties <a name="Properties"></a>

##### `xAmazonIntegration`<sup>Required</sup> <a name="openapi.OpenApiXIntegration.property.xAmazonIntegration"></a>

```typescript
public readonly xAmazonIntegration: XAmazonIntegration;
```

- *Type:* [`openapi.XAmazonIntegration`](#openapi.XAmazonIntegration)

---


### OpenApiXLambda <a name="openapi.OpenApiXLambda"></a>

#### Initializers <a name="openapi.OpenApiXLambda.Initializer"></a>

```typescript
import { OpenApiXLambda } from 'openapi'

new OpenApiXLambda(scope: Construct, fn: IFunction, props?: LambdaIntegrationOptions)
```

##### `scope`<sup>Required</sup> <a name="openapi.OpenApiXLambda.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `fn`<sup>Required</sup> <a name="openapi.OpenApiXLambda.parameter.fn"></a>

- *Type:* [`@aws-cdk/aws-lambda.IFunction`](#@aws-cdk/aws-lambda.IFunction)

---

##### `props`<sup>Optional</sup> <a name="openapi.OpenApiXLambda.parameter.props"></a>

- *Type:* [`@aws-cdk/aws-apigateway.LambdaIntegrationOptions`](#@aws-cdk/aws-apigateway.LambdaIntegrationOptions)

---





### OpenApiXMock <a name="openapi.OpenApiXMock"></a>

#### Initializers <a name="openapi.OpenApiXMock.Initializer"></a>

```typescript
import { OpenApiXMock } from 'openapi'

new OpenApiXMock(scope: Construct, props?: IntegrationProps)
```

##### `scope`<sup>Required</sup> <a name="openapi.OpenApiXMock.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `props`<sup>Optional</sup> <a name="openapi.OpenApiXMock.parameter.props"></a>

- *Type:* [`@aws-cdk/aws-apigateway.IntegrationProps`](#@aws-cdk/aws-apigateway.IntegrationProps)

---





### OpenApiXService <a name="openapi.OpenApiXService"></a>

#### Initializers <a name="openapi.OpenApiXService.Initializer"></a>

```typescript
import { OpenApiXService } from 'openapi'

new OpenApiXService(scope: Construct, props: AwsIntegrationProps)
```

##### `scope`<sup>Required</sup> <a name="openapi.OpenApiXService.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `props`<sup>Required</sup> <a name="openapi.OpenApiXService.parameter.props"></a>

- *Type:* [`@aws-cdk/aws-apigateway.AwsIntegrationProps`](#@aws-cdk/aws-apigateway.AwsIntegrationProps)

---





### OpenApiXSource <a name="openapi.OpenApiXSource"></a>

#### Initializers <a name="openapi.OpenApiXSource.Initializer"></a>

```typescript
import { OpenApiXSource } from 'openapi'

new OpenApiXSource(definition: any)
```

##### `definition`<sup>Required</sup> <a name="openapi.OpenApiXSource.parameter.definition"></a>

- *Type:* `any`

---

#### Methods <a name="Methods"></a>

##### `toYaml` <a name="openapi.OpenApiXSource.toYaml"></a>

```typescript
public toYaml()
```

#### Static Functions <a name="Static Functions"></a>

##### `fromAsset` <a name="openapi.OpenApiXSource.fromAsset"></a>

```typescript
import { OpenApiXSource } from 'openapi'

OpenApiXSource.fromAsset(path: string)
```

###### `path`<sup>Required</sup> <a name="openapi.OpenApiXSource.parameter.path"></a>

- *Type:* `string`

---

##### `fromInline` <a name="openapi.OpenApiXSource.fromInline"></a>

```typescript
import { OpenApiXSource } from 'openapi'

OpenApiXSource.fromInline(schema: string)
```

###### `schema`<sup>Required</sup> <a name="openapi.OpenApiXSource.parameter.schema"></a>

- *Type:* `string`

---

#### Properties <a name="Properties"></a>

##### `definition`<sup>Required</sup> <a name="openapi.OpenApiXSource.property.definition"></a>

```typescript
public readonly definition: OpenApiXSourceDefinition;
```

- *Type:* [`openapi.OpenApiXSourceDefinition`](#openapi.OpenApiXSourceDefinition)

---



