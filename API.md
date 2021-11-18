# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### OpenApiX <a name="@almamedia-open-source/cdk-openapix.OpenApiX"></a>

#### Initializers <a name="@almamedia-open-source/cdk-openapix.OpenApiX.Initializer"></a>

```typescript
import { OpenApiX } from '@almamedia-open-source/cdk-openapix'

new OpenApiX(scope: Construct, id: string, props: OpenApiXProps)
```

##### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiX.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiX.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiX.parameter.props"></a>

- *Type:* [`@almamedia-open-source/cdk-openapix.OpenApiXProps`](#@almamedia-open-source/cdk-openapix.OpenApiXProps)

---



#### Properties <a name="Properties"></a>

##### `api`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiX.property.api"></a>

```typescript
public readonly api: IRestApi;
```

- *Type:* [`@aws-cdk/aws-apigateway.IRestApi`](#@aws-cdk/aws-apigateway.IRestApi)

---


## Structs <a name="Structs"></a>

### OpenApiXDefinitionProps <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinitionProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OpenApiXDefinitionProps } from '@almamedia-open-source/cdk-openapix'

const openApiXDefinitionProps: OpenApiXDefinitionProps = { ... }
```

##### `source`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinitionProps.property.source"></a>

```typescript
public readonly source: string | OpenApiXSource;
```

- *Type:* `string` | [`@almamedia-open-source/cdk-openapix.OpenApiXSource`](#@almamedia-open-source/cdk-openapix.OpenApiXSource)

---

##### `injectPaths`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinitionProps.property.injectPaths"></a>

```typescript
public readonly injectPaths: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

---

##### `integrations`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinitionProps.property.integrations"></a>

```typescript
public readonly integrations: {[ key: string ]: {[ key: string ]: OpenApiXIntegration}};
```

- *Type:* {[ key: string ]: {[ key: string ]: [`@almamedia-open-source/cdk-openapix.OpenApiXIntegration`](#@almamedia-open-source/cdk-openapix.OpenApiXIntegration)}}

---

##### `rejectPaths`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinitionProps.property.rejectPaths"></a>

```typescript
public readonly rejectPaths: string[];
```

- *Type:* `string`[]

---

##### `upload`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinitionProps.property.upload"></a>

```typescript
public readonly upload: boolean;
```

- *Type:* `boolean`

---

### OpenApiXProps <a name="@almamedia-open-source/cdk-openapix.OpenApiXProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OpenApiXProps } from '@almamedia-open-source/cdk-openapix'

const openApiXProps: OpenApiXProps = { ... }
```

##### `source`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXProps.property.source"></a>

```typescript
public readonly source: string | OpenApiXSource;
```

- *Type:* `string` | [`@almamedia-open-source/cdk-openapix.OpenApiXSource`](#@almamedia-open-source/cdk-openapix.OpenApiXSource)

---

##### `injectPaths`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXProps.property.injectPaths"></a>

```typescript
public readonly injectPaths: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

---

##### `integrations`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXProps.property.integrations"></a>

```typescript
public readonly integrations: {[ key: string ]: {[ key: string ]: OpenApiXIntegration}};
```

- *Type:* {[ key: string ]: {[ key: string ]: [`@almamedia-open-source/cdk-openapix.OpenApiXIntegration`](#@almamedia-open-source/cdk-openapix.OpenApiXIntegration)}}

---

##### `rejectPaths`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXProps.property.rejectPaths"></a>

```typescript
public readonly rejectPaths: string[];
```

- *Type:* `string`[]

---

##### `upload`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXProps.property.upload"></a>

```typescript
public readonly upload: boolean;
```

- *Type:* `boolean`

---

##### `restApiProps`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXProps.property.restApiProps"></a>

```typescript
public readonly restApiProps: RestApiBaseProps;
```

- *Type:* [`@aws-cdk/aws-apigateway.RestApiBaseProps`](#@aws-cdk/aws-apigateway.RestApiBaseProps)

---

### OpenApiXSourceDefinition <a name="@almamedia-open-source/cdk-openapix.OpenApiXSourceDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { OpenApiXSourceDefinition } from '@almamedia-open-source/cdk-openapix'

const openApiXSourceDefinition: OpenApiXSourceDefinition = { ... }
```

##### `paths`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXSourceDefinition.property.paths"></a>

```typescript
public readonly paths: {[ key: string ]: {[ key: string ]: any}};
```

- *Type:* {[ key: string ]: {[ key: string ]: `any`}}

---

### XAmazonIntegration <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { XAmazonIntegration } from '@almamedia-open-source/cdk-openapix'

const xAmazonIntegration: XAmazonIntegration = { ... }
```

##### `httpMethod`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration.property.type"></a>

```typescript
public readonly type: IntegrationType;
```

- *Type:* [`@aws-cdk/aws-apigateway.IntegrationType`](#@aws-cdk/aws-apigateway.IntegrationType)

---

##### `uri`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* `string`

---

##### `cacheKeyParameters`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration.property.cacheKeyParameters"></a>

```typescript
public readonly cacheKeyParameters: any[];
```

- *Type:* `any`[]

---

##### `cacheNamespace`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration.property.cacheNamespace"></a>

```typescript
public readonly cacheNamespace: string;
```

- *Type:* `string`

---

##### `credentials`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* `string`

---

##### `requestParameters`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration.property.requestParameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration.property.requestTemplates"></a>

```typescript
public readonly requestTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `responses`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration.property.responses"></a>

```typescript
public readonly responses: {[ key: string ]: XAmazonIntegrationResponse};
```

- *Type:* {[ key: string ]: [`@almamedia-open-source/cdk-openapix.XAmazonIntegrationResponse`](#@almamedia-open-source/cdk-openapix.XAmazonIntegrationResponse)}

---

### XAmazonIntegrationResponse <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegrationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { XAmazonIntegrationResponse } from '@almamedia-open-source/cdk-openapix'

const xAmazonIntegrationResponse: XAmazonIntegrationResponse = { ... }
```

##### `statusCode`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegrationResponse.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* `string`

---

##### `responseParameters`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegrationResponse.property.responseParameters"></a>

```typescript
public readonly responseParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegrationResponse.property.responseTemplates"></a>

```typescript
public readonly responseTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

## Classes <a name="Classes"></a>

### OpenApiXDefinition <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinition"></a>

#### Initializers <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinition.Initializer"></a>

```typescript
import { OpenApiXDefinition } from '@almamedia-open-source/cdk-openapix'

new OpenApiXDefinition(scope: Construct, props: OpenApiXDefinitionProps)
```

##### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinition.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `props`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinition.parameter.props"></a>

- *Type:* [`@almamedia-open-source/cdk-openapix.OpenApiXDefinitionProps`](#@almamedia-open-source/cdk-openapix.OpenApiXDefinitionProps)

---

#### Methods <a name="Methods"></a>

##### `bind` <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinition.bind"></a>

```typescript
public bind(_scope: Construct)
```

###### `_scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinition.parameter._scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---




### OpenApiXHttp <a name="@almamedia-open-source/cdk-openapix.OpenApiXHttp"></a>

#### Initializers <a name="@almamedia-open-source/cdk-openapix.OpenApiXHttp.Initializer"></a>

```typescript
import { OpenApiXHttp } from '@almamedia-open-source/cdk-openapix'

new OpenApiXHttp(scope: Construct, url: string, props?: HttpIntegrationProps)
```

##### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXHttp.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `url`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXHttp.parameter.url"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXHttp.parameter.props"></a>

- *Type:* [`@aws-cdk/aws-apigateway.HttpIntegrationProps`](#@aws-cdk/aws-apigateway.HttpIntegrationProps)

---





### OpenApiXIntegration <a name="@almamedia-open-source/cdk-openapix.OpenApiXIntegration"></a>

#### Initializers <a name="@almamedia-open-source/cdk-openapix.OpenApiXIntegration.Initializer"></a>

```typescript
import { OpenApiXIntegration } from '@almamedia-open-source/cdk-openapix'

new OpenApiXIntegration()
```



#### Properties <a name="Properties"></a>

##### `xAmazonIntegration`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXIntegration.property.xAmazonIntegration"></a>

```typescript
public readonly xAmazonIntegration: XAmazonIntegration;
```

- *Type:* [`@almamedia-open-source/cdk-openapix.XAmazonIntegration`](#@almamedia-open-source/cdk-openapix.XAmazonIntegration)

---


### OpenApiXLambda <a name="@almamedia-open-source/cdk-openapix.OpenApiXLambda"></a>

#### Initializers <a name="@almamedia-open-source/cdk-openapix.OpenApiXLambda.Initializer"></a>

```typescript
import { OpenApiXLambda } from '@almamedia-open-source/cdk-openapix'

new OpenApiXLambda(scope: Construct, fn: IFunction, props?: LambdaIntegrationOptions)
```

##### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXLambda.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `fn`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXLambda.parameter.fn"></a>

- *Type:* [`@aws-cdk/aws-lambda.IFunction`](#@aws-cdk/aws-lambda.IFunction)

---

##### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXLambda.parameter.props"></a>

- *Type:* [`@aws-cdk/aws-apigateway.LambdaIntegrationOptions`](#@aws-cdk/aws-apigateway.LambdaIntegrationOptions)

---





### OpenApiXMock <a name="@almamedia-open-source/cdk-openapix.OpenApiXMock"></a>

#### Initializers <a name="@almamedia-open-source/cdk-openapix.OpenApiXMock.Initializer"></a>

```typescript
import { OpenApiXMock } from '@almamedia-open-source/cdk-openapix'

new OpenApiXMock(scope: Construct, props?: IntegrationProps)
```

##### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXMock.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXMock.parameter.props"></a>

- *Type:* [`@aws-cdk/aws-apigateway.IntegrationProps`](#@aws-cdk/aws-apigateway.IntegrationProps)

---





### OpenApiXService <a name="@almamedia-open-source/cdk-openapix.OpenApiXService"></a>

#### Initializers <a name="@almamedia-open-source/cdk-openapix.OpenApiXService.Initializer"></a>

```typescript
import { OpenApiXService } from '@almamedia-open-source/cdk-openapix'

new OpenApiXService(scope: Construct, props: AwsIntegrationProps)
```

##### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXService.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `props`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXService.parameter.props"></a>

- *Type:* [`@aws-cdk/aws-apigateway.AwsIntegrationProps`](#@aws-cdk/aws-apigateway.AwsIntegrationProps)

---





### OpenApiXSource <a name="@almamedia-open-source/cdk-openapix.OpenApiXSource"></a>

#### Initializers <a name="@almamedia-open-source/cdk-openapix.OpenApiXSource.Initializer"></a>

```typescript
import { OpenApiXSource } from '@almamedia-open-source/cdk-openapix'

new OpenApiXSource(definition: any)
```

##### `definition`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXSource.parameter.definition"></a>

- *Type:* `any`

---

#### Methods <a name="Methods"></a>

##### `toYaml` <a name="@almamedia-open-source/cdk-openapix.OpenApiXSource.toYaml"></a>

```typescript
public toYaml()
```

#### Static Functions <a name="Static Functions"></a>

##### `fromAsset` <a name="@almamedia-open-source/cdk-openapix.OpenApiXSource.fromAsset"></a>

```typescript
import { OpenApiXSource } from '@almamedia-open-source/cdk-openapix'

OpenApiXSource.fromAsset(path: string)
```

###### `path`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXSource.parameter.path"></a>

- *Type:* `string`

---

##### `fromInline` <a name="@almamedia-open-source/cdk-openapix.OpenApiXSource.fromInline"></a>

```typescript
import { OpenApiXSource } from '@almamedia-open-source/cdk-openapix'

OpenApiXSource.fromInline(schema: string)
```

###### `schema`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXSource.parameter.schema"></a>

- *Type:* `string`

---

#### Properties <a name="Properties"></a>

##### `definition`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXSource.property.definition"></a>

```typescript
public readonly definition: OpenApiXSourceDefinition;
```

- *Type:* [`@almamedia-open-source/cdk-openapix.OpenApiXSourceDefinition`](#@almamedia-open-source/cdk-openapix.OpenApiXSourceDefinition)

---



