# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### OpenApiX <a name="@almamedia-open-source/cdk-openapix.OpenApiX" id="almamediaopensourcecdkopenapixopenapix"></a>

#### Initializers <a name="@almamedia-open-source/cdk-openapix.OpenApiX.Initializer" id="almamediaopensourcecdkopenapixopenapixinitializer"></a>

```typescript
import { OpenApiX } from '@almamedia-open-source/cdk-openapix'

new OpenApiX(scope: Construct, id: string, props: OpenApiXProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#almamediaopensourcecdkopenapixopenapixparameterscope)<span title="Required">*</span> | [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct) | *No description.* |
| [`id`](#almamediaopensourcecdkopenapixopenapixparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#almamediaopensourcecdkopenapixopenapixparameterprops)<span title="Required">*</span> | [`@almamedia-open-source/cdk-openapix.OpenApiXProps`](#@almamedia-open-source/cdk-openapix.OpenApiXProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiX.parameter.scope" id="almamediaopensourcecdkopenapixopenapixparameterscope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiX.parameter.id" id="almamediaopensourcecdkopenapixopenapixparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiX.parameter.props" id="almamediaopensourcecdkopenapixopenapixparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-openapix.OpenApiXProps`](#@almamedia-open-source/cdk-openapix.OpenApiXProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`api`](#almamediaopensourcecdkopenapixopenapixpropertyapi)<span title="Required">*</span> | [`@aws-cdk/aws-apigateway.IRestApi`](#@aws-cdk/aws-apigateway.IRestApi) | *No description.* |

---

##### `api`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiX.property.api" id="almamediaopensourcecdkopenapixopenapixpropertyapi"></a>

```typescript
public readonly api: IRestApi;
```

- *Type:* [`@aws-cdk/aws-apigateway.IRestApi`](#@aws-cdk/aws-apigateway.IRestApi)

---


## Structs <a name="Structs" id="structs"></a>

### OpenApiXDefinitionProps <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinitionProps" id="almamediaopensourcecdkopenapixopenapixdefinitionprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OpenApiXDefinitionProps } from '@almamedia-open-source/cdk-openapix'

const openApiXDefinitionProps: OpenApiXDefinitionProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`source`](#almamediaopensourcecdkopenapixopenapixdefinitionpropspropertysource)<span title="Required">*</span> | `string` \| [`@almamedia-open-source/cdk-openapix.OpenApiXSource`](#@almamedia-open-source/cdk-openapix.OpenApiXSource) | *No description.* |
| [`injectPaths`](#almamediaopensourcecdkopenapixopenapixdefinitionpropspropertyinjectpaths) | {[ key: string ]: `any`} | *No description.* |
| [`integrations`](#almamediaopensourcecdkopenapixopenapixdefinitionpropspropertyintegrations) | {[ key: string ]: {[ key: string ]: [`@almamedia-open-source/cdk-openapix.OpenApiXIntegration`](#@almamedia-open-source/cdk-openapix.OpenApiXIntegration)}} | *No description.* |
| [`rejectPaths`](#almamediaopensourcecdkopenapixopenapixdefinitionpropspropertyrejectpaths) | `string`[] | *No description.* |
| [`upload`](#almamediaopensourcecdkopenapixopenapixdefinitionpropspropertyupload) | `boolean` | *No description.* |

---

##### `source`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinitionProps.property.source" id="almamediaopensourcecdkopenapixopenapixdefinitionpropspropertysource"></a>

```typescript
public readonly source: string | OpenApiXSource;
```

- *Type:* `string` | [`@almamedia-open-source/cdk-openapix.OpenApiXSource`](#@almamedia-open-source/cdk-openapix.OpenApiXSource)

---

##### `injectPaths`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinitionProps.property.injectPaths" id="almamediaopensourcecdkopenapixopenapixdefinitionpropspropertyinjectpaths"></a>

```typescript
public readonly injectPaths: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

---

##### `integrations`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinitionProps.property.integrations" id="almamediaopensourcecdkopenapixopenapixdefinitionpropspropertyintegrations"></a>

```typescript
public readonly integrations: {[ key: string ]: {[ key: string ]: OpenApiXIntegration}};
```

- *Type:* {[ key: string ]: {[ key: string ]: [`@almamedia-open-source/cdk-openapix.OpenApiXIntegration`](#@almamedia-open-source/cdk-openapix.OpenApiXIntegration)}}

---

##### `rejectPaths`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinitionProps.property.rejectPaths" id="almamediaopensourcecdkopenapixopenapixdefinitionpropspropertyrejectpaths"></a>

```typescript
public readonly rejectPaths: string[];
```

- *Type:* `string`[]

---

##### `upload`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinitionProps.property.upload" id="almamediaopensourcecdkopenapixopenapixdefinitionpropspropertyupload"></a>

```typescript
public readonly upload: boolean;
```

- *Type:* `boolean`

---

### OpenApiXProps <a name="@almamedia-open-source/cdk-openapix.OpenApiXProps" id="almamediaopensourcecdkopenapixopenapixprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OpenApiXProps } from '@almamedia-open-source/cdk-openapix'

const openApiXProps: OpenApiXProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`source`](#almamediaopensourcecdkopenapixopenapixpropspropertysource)<span title="Required">*</span> | `string` \| [`@almamedia-open-source/cdk-openapix.OpenApiXSource`](#@almamedia-open-source/cdk-openapix.OpenApiXSource) | *No description.* |
| [`injectPaths`](#almamediaopensourcecdkopenapixopenapixpropspropertyinjectpaths) | {[ key: string ]: `any`} | *No description.* |
| [`integrations`](#almamediaopensourcecdkopenapixopenapixpropspropertyintegrations) | {[ key: string ]: {[ key: string ]: [`@almamedia-open-source/cdk-openapix.OpenApiXIntegration`](#@almamedia-open-source/cdk-openapix.OpenApiXIntegration)}} | *No description.* |
| [`rejectPaths`](#almamediaopensourcecdkopenapixopenapixpropspropertyrejectpaths) | `string`[] | *No description.* |
| [`upload`](#almamediaopensourcecdkopenapixopenapixpropspropertyupload) | `boolean` | *No description.* |
| [`restApiProps`](#almamediaopensourcecdkopenapixopenapixpropspropertyrestapiprops)<span title="Required">*</span> | [`@aws-cdk/aws-apigateway.RestApiBaseProps`](#@aws-cdk/aws-apigateway.RestApiBaseProps) | *No description.* |

---

##### `source`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXProps.property.source" id="almamediaopensourcecdkopenapixopenapixpropspropertysource"></a>

```typescript
public readonly source: string | OpenApiXSource;
```

- *Type:* `string` | [`@almamedia-open-source/cdk-openapix.OpenApiXSource`](#@almamedia-open-source/cdk-openapix.OpenApiXSource)

---

##### `injectPaths`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXProps.property.injectPaths" id="almamediaopensourcecdkopenapixopenapixpropspropertyinjectpaths"></a>

```typescript
public readonly injectPaths: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

---

##### `integrations`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXProps.property.integrations" id="almamediaopensourcecdkopenapixopenapixpropspropertyintegrations"></a>

```typescript
public readonly integrations: {[ key: string ]: {[ key: string ]: OpenApiXIntegration}};
```

- *Type:* {[ key: string ]: {[ key: string ]: [`@almamedia-open-source/cdk-openapix.OpenApiXIntegration`](#@almamedia-open-source/cdk-openapix.OpenApiXIntegration)}}

---

##### `rejectPaths`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXProps.property.rejectPaths" id="almamediaopensourcecdkopenapixopenapixpropspropertyrejectpaths"></a>

```typescript
public readonly rejectPaths: string[];
```

- *Type:* `string`[]

---

##### `upload`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXProps.property.upload" id="almamediaopensourcecdkopenapixopenapixpropspropertyupload"></a>

```typescript
public readonly upload: boolean;
```

- *Type:* `boolean`

---

##### `restApiProps`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXProps.property.restApiProps" id="almamediaopensourcecdkopenapixopenapixpropspropertyrestapiprops"></a>

```typescript
public readonly restApiProps: RestApiBaseProps;
```

- *Type:* [`@aws-cdk/aws-apigateway.RestApiBaseProps`](#@aws-cdk/aws-apigateway.RestApiBaseProps)

---

### OpenApiXSourceDefinition <a name="@almamedia-open-source/cdk-openapix.OpenApiXSourceDefinition" id="almamediaopensourcecdkopenapixopenapixsourcedefinition"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OpenApiXSourceDefinition } from '@almamedia-open-source/cdk-openapix'

const openApiXSourceDefinition: OpenApiXSourceDefinition = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`paths`](#almamediaopensourcecdkopenapixopenapixsourcedefinitionpropertypaths) | {[ key: string ]: {[ key: string ]: `any`}} | *No description.* |

---

##### `paths`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXSourceDefinition.property.paths" id="almamediaopensourcecdkopenapixopenapixsourcedefinitionpropertypaths"></a>

```typescript
public readonly paths: {[ key: string ]: {[ key: string ]: any}};
```

- *Type:* {[ key: string ]: {[ key: string ]: `any`}}

---

### XAmazonIntegration <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration" id="almamediaopensourcecdkopenapixxamazonintegration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { XAmazonIntegration } from '@almamedia-open-source/cdk-openapix'

const xAmazonIntegration: XAmazonIntegration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`httpMethod`](#almamediaopensourcecdkopenapixxamazonintegrationpropertyhttpmethod)<span title="Required">*</span> | `string` | *No description.* |
| [`type`](#almamediaopensourcecdkopenapixxamazonintegrationpropertytype)<span title="Required">*</span> | [`@aws-cdk/aws-apigateway.IntegrationType`](#@aws-cdk/aws-apigateway.IntegrationType) | *No description.* |
| [`uri`](#almamediaopensourcecdkopenapixxamazonintegrationpropertyuri)<span title="Required">*</span> | `string` | *No description.* |
| [`cacheKeyParameters`](#almamediaopensourcecdkopenapixxamazonintegrationpropertycachekeyparameters) | `any`[] | *No description.* |
| [`cacheNamespace`](#almamediaopensourcecdkopenapixxamazonintegrationpropertycachenamespace) | `string` | *No description.* |
| [`credentials`](#almamediaopensourcecdkopenapixxamazonintegrationpropertycredentials) | `string` | *No description.* |
| [`requestParameters`](#almamediaopensourcecdkopenapixxamazonintegrationpropertyrequestparameters) | {[ key: string ]: `string`} | *No description.* |
| [`requestTemplates`](#almamediaopensourcecdkopenapixxamazonintegrationpropertyrequesttemplates) | {[ key: string ]: `string`} | *No description.* |
| [`responses`](#almamediaopensourcecdkopenapixxamazonintegrationpropertyresponses) | {[ key: string ]: [`@almamedia-open-source/cdk-openapix.XAmazonIntegrationResponse`](#@almamedia-open-source/cdk-openapix.XAmazonIntegrationResponse)} | *No description.* |

---

##### `httpMethod`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration.property.httpMethod" id="almamediaopensourcecdkopenapixxamazonintegrationpropertyhttpmethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration.property.type" id="almamediaopensourcecdkopenapixxamazonintegrationpropertytype"></a>

```typescript
public readonly type: IntegrationType;
```

- *Type:* [`@aws-cdk/aws-apigateway.IntegrationType`](#@aws-cdk/aws-apigateway.IntegrationType)

---

##### `uri`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration.property.uri" id="almamediaopensourcecdkopenapixxamazonintegrationpropertyuri"></a>

```typescript
public readonly uri: string;
```

- *Type:* `string`

---

##### `cacheKeyParameters`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration.property.cacheKeyParameters" id="almamediaopensourcecdkopenapixxamazonintegrationpropertycachekeyparameters"></a>

```typescript
public readonly cacheKeyParameters: any[];
```

- *Type:* `any`[]

---

##### `cacheNamespace`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration.property.cacheNamespace" id="almamediaopensourcecdkopenapixxamazonintegrationpropertycachenamespace"></a>

```typescript
public readonly cacheNamespace: string;
```

- *Type:* `string`

---

##### `credentials`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration.property.credentials" id="almamediaopensourcecdkopenapixxamazonintegrationpropertycredentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* `string`

---

##### `requestParameters`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration.property.requestParameters" id="almamediaopensourcecdkopenapixxamazonintegrationpropertyrequestparameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `requestTemplates`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration.property.requestTemplates" id="almamediaopensourcecdkopenapixxamazonintegrationpropertyrequesttemplates"></a>

```typescript
public readonly requestTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `responses`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegration.property.responses" id="almamediaopensourcecdkopenapixxamazonintegrationpropertyresponses"></a>

```typescript
public readonly responses: {[ key: string ]: XAmazonIntegrationResponse};
```

- *Type:* {[ key: string ]: [`@almamedia-open-source/cdk-openapix.XAmazonIntegrationResponse`](#@almamedia-open-source/cdk-openapix.XAmazonIntegrationResponse)}

---

### XAmazonIntegrationResponse <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegrationResponse" id="almamediaopensourcecdkopenapixxamazonintegrationresponse"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { XAmazonIntegrationResponse } from '@almamedia-open-source/cdk-openapix'

const xAmazonIntegrationResponse: XAmazonIntegrationResponse = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`statusCode`](#almamediaopensourcecdkopenapixxamazonintegrationresponsepropertystatuscode)<span title="Required">*</span> | `string` | *No description.* |
| [`responseParameters`](#almamediaopensourcecdkopenapixxamazonintegrationresponsepropertyresponseparameters) | {[ key: string ]: `string`} | *No description.* |
| [`responseTemplates`](#almamediaopensourcecdkopenapixxamazonintegrationresponsepropertyresponsetemplates) | {[ key: string ]: `string`} | *No description.* |

---

##### `statusCode`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegrationResponse.property.statusCode" id="almamediaopensourcecdkopenapixxamazonintegrationresponsepropertystatuscode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* `string`

---

##### `responseParameters`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegrationResponse.property.responseParameters" id="almamediaopensourcecdkopenapixxamazonintegrationresponsepropertyresponseparameters"></a>

```typescript
public readonly responseParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `responseTemplates`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.XAmazonIntegrationResponse.property.responseTemplates" id="almamediaopensourcecdkopenapixxamazonintegrationresponsepropertyresponsetemplates"></a>

```typescript
public readonly responseTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

## Classes <a name="Classes" id="classes"></a>

### OpenApiXDefinition <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinition" id="almamediaopensourcecdkopenapixopenapixdefinition"></a>

#### Initializers <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinition.Initializer" id="almamediaopensourcecdkopenapixopenapixdefinitioninitializer"></a>

```typescript
import { OpenApiXDefinition } from '@almamedia-open-source/cdk-openapix'

new OpenApiXDefinition(scope: Construct, props: OpenApiXDefinitionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#almamediaopensourcecdkopenapixopenapixdefinitionparameterscope)<span title="Required">*</span> | [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct) | *No description.* |
| [`props`](#almamediaopensourcecdkopenapixopenapixdefinitionparameterprops)<span title="Required">*</span> | [`@almamedia-open-source/cdk-openapix.OpenApiXDefinitionProps`](#@almamedia-open-source/cdk-openapix.OpenApiXDefinitionProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinition.parameter.scope" id="almamediaopensourcecdkopenapixopenapixdefinitionparameterscope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `props`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinition.parameter.props" id="almamediaopensourcecdkopenapixopenapixdefinitionparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-openapix.OpenApiXDefinitionProps`](#@almamedia-open-source/cdk-openapix.OpenApiXDefinitionProps)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`bind`](#almamediaopensourcecdkopenapixopenapixdefinitionbind) | Called when the specification is initialized to allow this object to bind to the stack, add resources and have fun. |

---

##### `bind` <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinition.bind" id="almamediaopensourcecdkopenapixopenapixdefinitionbind"></a>

```typescript
public bind(_scope: Construct)
```

###### `_scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXDefinition.parameter._scope" id="almamediaopensourcecdkopenapixopenapixdefinitionparameterscope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---




### OpenApiXHttp <a name="@almamedia-open-source/cdk-openapix.OpenApiXHttp" id="almamediaopensourcecdkopenapixopenapixhttp"></a>

#### Initializers <a name="@almamedia-open-source/cdk-openapix.OpenApiXHttp.Initializer" id="almamediaopensourcecdkopenapixopenapixhttpinitializer"></a>

```typescript
import { OpenApiXHttp } from '@almamedia-open-source/cdk-openapix'

new OpenApiXHttp(scope: Construct, url: string, props?: HttpIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#almamediaopensourcecdkopenapixopenapixhttpparameterscope)<span title="Required">*</span> | [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct) | *No description.* |
| [`url`](#almamediaopensourcecdkopenapixopenapixhttpparameterurl)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#almamediaopensourcecdkopenapixopenapixhttpparameterprops) | [`@aws-cdk/aws-apigateway.HttpIntegrationProps`](#@aws-cdk/aws-apigateway.HttpIntegrationProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXHttp.parameter.scope" id="almamediaopensourcecdkopenapixopenapixhttpparameterscope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `url`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXHttp.parameter.url" id="almamediaopensourcecdkopenapixopenapixhttpparameterurl"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXHttp.parameter.props" id="almamediaopensourcecdkopenapixopenapixhttpparameterprops"></a>

- *Type:* [`@aws-cdk/aws-apigateway.HttpIntegrationProps`](#@aws-cdk/aws-apigateway.HttpIntegrationProps)

---





### OpenApiXIntegration <a name="@almamedia-open-source/cdk-openapix.OpenApiXIntegration" id="almamediaopensourcecdkopenapixopenapixintegration"></a>

#### Initializers <a name="@almamedia-open-source/cdk-openapix.OpenApiXIntegration.Initializer" id="almamediaopensourcecdkopenapixopenapixintegrationinitializer"></a>

```typescript
import { OpenApiXIntegration } from '@almamedia-open-source/cdk-openapix'

new OpenApiXIntegration()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`xAmazonIntegration`](#almamediaopensourcecdkopenapixopenapixintegrationpropertyxamazonintegration)<span title="Required">*</span> | [`@almamedia-open-source/cdk-openapix.XAmazonIntegration`](#@almamedia-open-source/cdk-openapix.XAmazonIntegration) | *No description.* |

---

##### `xAmazonIntegration`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXIntegration.property.xAmazonIntegration" id="almamediaopensourcecdkopenapixopenapixintegrationpropertyxamazonintegration"></a>

```typescript
public readonly xAmazonIntegration: XAmazonIntegration;
```

- *Type:* [`@almamedia-open-source/cdk-openapix.XAmazonIntegration`](#@almamedia-open-source/cdk-openapix.XAmazonIntegration)

---


### OpenApiXLambda <a name="@almamedia-open-source/cdk-openapix.OpenApiXLambda" id="almamediaopensourcecdkopenapixopenapixlambda"></a>

#### Initializers <a name="@almamedia-open-source/cdk-openapix.OpenApiXLambda.Initializer" id="almamediaopensourcecdkopenapixopenapixlambdainitializer"></a>

```typescript
import { OpenApiXLambda } from '@almamedia-open-source/cdk-openapix'

new OpenApiXLambda(scope: Construct, fn: IFunction, props?: LambdaIntegrationOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#almamediaopensourcecdkopenapixopenapixlambdaparameterscope)<span title="Required">*</span> | [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct) | *No description.* |
| [`fn`](#almamediaopensourcecdkopenapixopenapixlambdaparameterfn)<span title="Required">*</span> | [`@aws-cdk/aws-lambda.IFunction`](#@aws-cdk/aws-lambda.IFunction) | *No description.* |
| [`props`](#almamediaopensourcecdkopenapixopenapixlambdaparameterprops) | [`@aws-cdk/aws-apigateway.LambdaIntegrationOptions`](#@aws-cdk/aws-apigateway.LambdaIntegrationOptions) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXLambda.parameter.scope" id="almamediaopensourcecdkopenapixopenapixlambdaparameterscope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `fn`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXLambda.parameter.fn" id="almamediaopensourcecdkopenapixopenapixlambdaparameterfn"></a>

- *Type:* [`@aws-cdk/aws-lambda.IFunction`](#@aws-cdk/aws-lambda.IFunction)

---

##### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXLambda.parameter.props" id="almamediaopensourcecdkopenapixopenapixlambdaparameterprops"></a>

- *Type:* [`@aws-cdk/aws-apigateway.LambdaIntegrationOptions`](#@aws-cdk/aws-apigateway.LambdaIntegrationOptions)

---





### OpenApiXMock <a name="@almamedia-open-source/cdk-openapix.OpenApiXMock" id="almamediaopensourcecdkopenapixopenapixmock"></a>

#### Initializers <a name="@almamedia-open-source/cdk-openapix.OpenApiXMock.Initializer" id="almamediaopensourcecdkopenapixopenapixmockinitializer"></a>

```typescript
import { OpenApiXMock } from '@almamedia-open-source/cdk-openapix'

new OpenApiXMock(scope: Construct, props?: IntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#almamediaopensourcecdkopenapixopenapixmockparameterscope)<span title="Required">*</span> | [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct) | *No description.* |
| [`props`](#almamediaopensourcecdkopenapixopenapixmockparameterprops) | [`@aws-cdk/aws-apigateway.IntegrationProps`](#@aws-cdk/aws-apigateway.IntegrationProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXMock.parameter.scope" id="almamediaopensourcecdkopenapixopenapixmockparameterscope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXMock.parameter.props" id="almamediaopensourcecdkopenapixopenapixmockparameterprops"></a>

- *Type:* [`@aws-cdk/aws-apigateway.IntegrationProps`](#@aws-cdk/aws-apigateway.IntegrationProps)

---





### OpenApiXService <a name="@almamedia-open-source/cdk-openapix.OpenApiXService" id="almamediaopensourcecdkopenapixopenapixservice"></a>

#### Initializers <a name="@almamedia-open-source/cdk-openapix.OpenApiXService.Initializer" id="almamediaopensourcecdkopenapixopenapixserviceinitializer"></a>

```typescript
import { OpenApiXService } from '@almamedia-open-source/cdk-openapix'

new OpenApiXService(scope: Construct, props: AwsIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#almamediaopensourcecdkopenapixopenapixserviceparameterscope)<span title="Required">*</span> | [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct) | *No description.* |
| [`props`](#almamediaopensourcecdkopenapixopenapixserviceparameterprops)<span title="Required">*</span> | [`@aws-cdk/aws-apigateway.AwsIntegrationProps`](#@aws-cdk/aws-apigateway.AwsIntegrationProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXService.parameter.scope" id="almamediaopensourcecdkopenapixopenapixserviceparameterscope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `props`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXService.parameter.props" id="almamediaopensourcecdkopenapixopenapixserviceparameterprops"></a>

- *Type:* [`@aws-cdk/aws-apigateway.AwsIntegrationProps`](#@aws-cdk/aws-apigateway.AwsIntegrationProps)

---





### OpenApiXSource <a name="@almamedia-open-source/cdk-openapix.OpenApiXSource" id="almamediaopensourcecdkopenapixopenapixsource"></a>

#### Initializers <a name="@almamedia-open-source/cdk-openapix.OpenApiXSource.Initializer" id="almamediaopensourcecdkopenapixopenapixsourceinitializer"></a>

```typescript
import { OpenApiXSource } from '@almamedia-open-source/cdk-openapix'

new OpenApiXSource(definition: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`definition`](#almamediaopensourcecdkopenapixopenapixsourceparameterdefinition)<span title="Required">*</span> | `any` | *No description.* |

---

##### `definition`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXSource.parameter.definition" id="almamediaopensourcecdkopenapixopenapixsourceparameterdefinition"></a>

- *Type:* `any`

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`toYaml`](#almamediaopensourcecdkopenapixopenapixsourcetoyaml) | *No description.* |

---

##### `toYaml` <a name="@almamedia-open-source/cdk-openapix.OpenApiXSource.toYaml" id="almamediaopensourcecdkopenapixopenapixsourcetoyaml"></a>

```typescript
public toYaml()
```

#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`fromAsset`](#almamediaopensourcecdkopenapixopenapixsourcefromasset) | *No description.* |
| [`fromInline`](#almamediaopensourcecdkopenapixopenapixsourcefrominline) | *No description.* |

---

##### `fromAsset` <a name="@almamedia-open-source/cdk-openapix.OpenApiXSource.fromAsset" id="almamediaopensourcecdkopenapixopenapixsourcefromasset"></a>

```typescript
import { OpenApiXSource } from '@almamedia-open-source/cdk-openapix'

OpenApiXSource.fromAsset(path: string)
```

###### `path`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXSource.parameter.path" id="almamediaopensourcecdkopenapixopenapixsourceparameterpath"></a>

- *Type:* `string`

---

##### `fromInline` <a name="@almamedia-open-source/cdk-openapix.OpenApiXSource.fromInline" id="almamediaopensourcecdkopenapixopenapixsourcefrominline"></a>

```typescript
import { OpenApiXSource } from '@almamedia-open-source/cdk-openapix'

OpenApiXSource.fromInline(schema: string)
```

###### `schema`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXSource.parameter.schema" id="almamediaopensourcecdkopenapixopenapixsourceparameterschema"></a>

- *Type:* `string`

---

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`definition`](#almamediaopensourcecdkopenapixopenapixsourcepropertydefinition)<span title="Required">*</span> | [`@almamedia-open-source/cdk-openapix.OpenApiXSourceDefinition`](#@almamedia-open-source/cdk-openapix.OpenApiXSourceDefinition) | *No description.* |

---

##### `definition`<sup>Required</sup> <a name="@almamedia-open-source/cdk-openapix.OpenApiXSource.property.definition" id="almamediaopensourcecdkopenapixopenapixsourcepropertydefinition"></a>

```typescript
public readonly definition: OpenApiXSourceDefinition;
```

- *Type:* [`@almamedia-open-source/cdk-openapix.OpenApiXSourceDefinition`](#@almamedia-open-source/cdk-openapix.OpenApiXSourceDefinition)

---



