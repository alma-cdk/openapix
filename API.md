# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Api <a name="Api" id="@alma-cdk/openapix.Api"></a>

AWS API Gateway REST API defined with OpenApi v3 schema.

#### Initializers <a name="Initializers" id="@alma-cdk/openapix.Api.Initializer"></a>

```typescript
import { Api } from '@alma-cdk/openapix'

new Api(scope: Construct, id: string, props: ApiProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.Api.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.Api.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.Api.Initializer.parameter.props">props</a></code> | <code><a href="#@alma-cdk/openapix.ApiProps">ApiProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@alma-cdk/openapix.Api.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@alma-cdk/openapix.Api.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@alma-cdk/openapix.Api.Initializer.parameter.props"></a>

- *Type:* <a href="#@alma-cdk/openapix.ApiProps">ApiProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/openapix.Api.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@alma-cdk/openapix.Api.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@alma-cdk/openapix.Api.applyCrossStackReferenceStrength">applyCrossStackReferenceStrength</a></code> | Override the cross-stack reference strength for this resource. |
| <code><a href="#@alma-cdk/openapix.Api.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@alma-cdk/openapix.Api.addApiKey">addApiKey</a></code> | Add an ApiKey to the deploymentStage. |
| <code><a href="#@alma-cdk/openapix.Api.addDomainName">addDomainName</a></code> | Defines an API Gateway domain name and maps it to this API. |
| <code><a href="#@alma-cdk/openapix.Api.addGatewayResponse">addGatewayResponse</a></code> | Adds a new gateway response. |
| <code><a href="#@alma-cdk/openapix.Api.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy associated with this rest api. |
| <code><a href="#@alma-cdk/openapix.Api.addUsagePlan">addUsagePlan</a></code> | Adds a usage plan. |
| <code><a href="#@alma-cdk/openapix.Api.arnForExecuteApi">arnForExecuteApi</a></code> | Gets the "execute-api" ARN. |
| <code><a href="#@alma-cdk/openapix.Api.grantInvokeFromVpcEndpointsOnly">grantInvokeFromVpcEndpointsOnly</a></code> | Add a resource policy that only allows API execution from a VPC Endpoint to create a private API. |
| <code><a href="#@alma-cdk/openapix.Api.metric">metric</a></code> | Returns the given named metric for this API. |
| <code><a href="#@alma-cdk/openapix.Api.metricCacheHitCount">metricCacheHitCount</a></code> | Metric for the number of requests served from the API cache in a given period. |
| <code><a href="#@alma-cdk/openapix.Api.metricCacheMissCount">metricCacheMissCount</a></code> | Metric for the number of requests served from the backend in a given period, when API caching is enabled. |
| <code><a href="#@alma-cdk/openapix.Api.metricClientError">metricClientError</a></code> | Metric for the number of client-side errors captured in a given period. |
| <code><a href="#@alma-cdk/openapix.Api.metricCount">metricCount</a></code> | Metric for the total number API requests in a given period. |
| <code><a href="#@alma-cdk/openapix.Api.metricIntegrationLatency">metricIntegrationLatency</a></code> | Metric for the time between when API Gateway relays a request to the backend and when it receives a response from the backend. |
| <code><a href="#@alma-cdk/openapix.Api.metricLatency">metricLatency</a></code> | The time between when API Gateway receives a request from a client and when it returns a response to the client. |
| <code><a href="#@alma-cdk/openapix.Api.metricServerError">metricServerError</a></code> | Metric for the number of server-side errors captured in a given period. |
| <code><a href="#@alma-cdk/openapix.Api.urlForPath">urlForPath</a></code> | Returns the URL for an HTTP path. |

---

##### `toString` <a name="toString" id="@alma-cdk/openapix.Api.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@alma-cdk/openapix.Api.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@alma-cdk/openapix.Api.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

---

##### `applyCrossStackReferenceStrength` <a name="applyCrossStackReferenceStrength" id="@alma-cdk/openapix.Api.applyCrossStackReferenceStrength"></a>

```typescript
public applyCrossStackReferenceStrength(strength: ReferenceStrength): void
```

Override the cross-stack reference strength for this resource.

When set, any cross-stack reference to this resource will use the specified
mechanism instead of the global default determined by the
`@aws-cdk/core:defaultCrossStackReferences` context key. This is useful for
selectively weakening specific references to avoid the "deadly embrace" problem
without changing the app-wide default.

###### `strength`<sup>Required</sup> <a name="strength" id="@alma-cdk/openapix.Api.applyCrossStackReferenceStrength.parameter.strength"></a>

- *Type:* aws-cdk-lib.ReferenceStrength

The reference strength to use for this resource.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@alma-cdk/openapix.Api.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@alma-cdk/openapix.Api.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addApiKey` <a name="addApiKey" id="@alma-cdk/openapix.Api.addApiKey"></a>

```typescript
public addApiKey(id: string, options?: ApiKeyOptions): IApiKey
```

Add an ApiKey to the deploymentStage.

###### `id`<sup>Required</sup> <a name="id" id="@alma-cdk/openapix.Api.addApiKey.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@alma-cdk/openapix.Api.addApiKey.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_apigateway.ApiKeyOptions

---

##### `addDomainName` <a name="addDomainName" id="@alma-cdk/openapix.Api.addDomainName"></a>

```typescript
public addDomainName(id: string, options: DomainNameOptions): DomainName
```

Defines an API Gateway domain name and maps it to this API.

###### `id`<sup>Required</sup> <a name="id" id="@alma-cdk/openapix.Api.addDomainName.parameter.id"></a>

- *Type:* string

The construct id.

---

###### `options`<sup>Required</sup> <a name="options" id="@alma-cdk/openapix.Api.addDomainName.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_apigateway.DomainNameOptions

custom domain options.

---

##### `addGatewayResponse` <a name="addGatewayResponse" id="@alma-cdk/openapix.Api.addGatewayResponse"></a>

```typescript
public addGatewayResponse(id: string, options: GatewayResponseOptions): GatewayResponse
```

Adds a new gateway response.

###### `id`<sup>Required</sup> <a name="id" id="@alma-cdk/openapix.Api.addGatewayResponse.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@alma-cdk/openapix.Api.addGatewayResponse.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_apigateway.GatewayResponseOptions

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="@alma-cdk/openapix.Api.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(statement: PolicyStatement): AddToResourcePolicyResult
```

Adds a statement to the resource policy associated with this rest api.

A resource policy will be automatically created upon the first call to `addToResourcePolicy`.

Note that this does not work with imported rest api.

###### `statement`<sup>Required</sup> <a name="statement" id="@alma-cdk/openapix.Api.addToResourcePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

The policy statement to add.

---

##### `addUsagePlan` <a name="addUsagePlan" id="@alma-cdk/openapix.Api.addUsagePlan"></a>

```typescript
public addUsagePlan(id: string, props?: UsagePlanProps): UsagePlan
```

Adds a usage plan.

###### `id`<sup>Required</sup> <a name="id" id="@alma-cdk/openapix.Api.addUsagePlan.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@alma-cdk/openapix.Api.addUsagePlan.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_apigateway.UsagePlanProps

---

##### `arnForExecuteApi` <a name="arnForExecuteApi" id="@alma-cdk/openapix.Api.arnForExecuteApi"></a>

```typescript
public arnForExecuteApi(method?: string, path?: string, stage?: string): string
```

Gets the "execute-api" ARN.

###### `method`<sup>Optional</sup> <a name="method" id="@alma-cdk/openapix.Api.arnForExecuteApi.parameter.method"></a>

- *Type:* string

---

###### `path`<sup>Optional</sup> <a name="path" id="@alma-cdk/openapix.Api.arnForExecuteApi.parameter.path"></a>

- *Type:* string

---

###### `stage`<sup>Optional</sup> <a name="stage" id="@alma-cdk/openapix.Api.arnForExecuteApi.parameter.stage"></a>

- *Type:* string

---

##### `grantInvokeFromVpcEndpointsOnly` <a name="grantInvokeFromVpcEndpointsOnly" id="@alma-cdk/openapix.Api.grantInvokeFromVpcEndpointsOnly"></a>

```typescript
public grantInvokeFromVpcEndpointsOnly(vpcEndpoints: IVpcEndpoint[]): void
```

Add a resource policy that only allows API execution from a VPC Endpoint to create a private API.

> [https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies-examples.html#apigateway-resource-policies-source-vpc-example](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies-examples.html#apigateway-resource-policies-source-vpc-example)

###### `vpcEndpoints`<sup>Required</sup> <a name="vpcEndpoints" id="@alma-cdk/openapix.Api.grantInvokeFromVpcEndpointsOnly.parameter.vpcEndpoints"></a>

- *Type:* aws-cdk-lib.aws_ec2.IVpcEndpoint[]

the interface VPC endpoints to grant access to.

---

##### `metric` <a name="metric" id="@alma-cdk/openapix.Api.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Returns the given named metric for this API.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@alma-cdk/openapix.Api.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@alma-cdk/openapix.Api.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCacheHitCount` <a name="metricCacheHitCount" id="@alma-cdk/openapix.Api.metricCacheHitCount"></a>

```typescript
public metricCacheHitCount(props?: MetricOptions): Metric
```

Metric for the number of requests served from the API cache in a given period.

Default: sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@alma-cdk/openapix.Api.metricCacheHitCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCacheMissCount` <a name="metricCacheMissCount" id="@alma-cdk/openapix.Api.metricCacheMissCount"></a>

```typescript
public metricCacheMissCount(props?: MetricOptions): Metric
```

Metric for the number of requests served from the backend in a given period, when API caching is enabled.

Default: sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@alma-cdk/openapix.Api.metricCacheMissCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricClientError` <a name="metricClientError" id="@alma-cdk/openapix.Api.metricClientError"></a>

```typescript
public metricClientError(props?: MetricOptions): Metric
```

Metric for the number of client-side errors captured in a given period.

Default: sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@alma-cdk/openapix.Api.metricClientError.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCount` <a name="metricCount" id="@alma-cdk/openapix.Api.metricCount"></a>

```typescript
public metricCount(props?: MetricOptions): Metric
```

Metric for the total number API requests in a given period.

Default: sample count over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@alma-cdk/openapix.Api.metricCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricIntegrationLatency` <a name="metricIntegrationLatency" id="@alma-cdk/openapix.Api.metricIntegrationLatency"></a>

```typescript
public metricIntegrationLatency(props?: MetricOptions): Metric
```

Metric for the time between when API Gateway relays a request to the backend and when it receives a response from the backend.

Default: average over 5 minutes.

###### `props`<sup>Optional</sup> <a name="props" id="@alma-cdk/openapix.Api.metricIntegrationLatency.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricLatency` <a name="metricLatency" id="@alma-cdk/openapix.Api.metricLatency"></a>

```typescript
public metricLatency(props?: MetricOptions): Metric
```

The time between when API Gateway receives a request from a client and when it returns a response to the client.

The latency includes the integration latency and other API Gateway overhead.

Default: average over 5 minutes.

###### `props`<sup>Optional</sup> <a name="props" id="@alma-cdk/openapix.Api.metricLatency.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricServerError` <a name="metricServerError" id="@alma-cdk/openapix.Api.metricServerError"></a>

```typescript
public metricServerError(props?: MetricOptions): Metric
```

Metric for the number of server-side errors captured in a given period.

Default: sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@alma-cdk/openapix.Api.metricServerError.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `urlForPath` <a name="urlForPath" id="@alma-cdk/openapix.Api.urlForPath"></a>

```typescript
public urlForPath(path?: string): string
```

Returns the URL for an HTTP path.

Fails if `deploymentStage` is not set either by `deploy` or explicitly.

###### `path`<sup>Optional</sup> <a name="path" id="@alma-cdk/openapix.Api.urlForPath.parameter.path"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/openapix.Api.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@alma-cdk/openapix.Api.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@alma-cdk/openapix.Api.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="@alma-cdk/openapix.Api.isConstruct"></a>

```typescript
import { Api } from '@alma-cdk/openapix'

Api.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@alma-cdk/openapix.Api.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@alma-cdk/openapix.Api.isOwnedResource"></a>

```typescript
import { Api } from '@alma-cdk/openapix'

Api.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@alma-cdk/openapix.Api.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@alma-cdk/openapix.Api.isResource"></a>

```typescript
import { Api } from '@alma-cdk/openapix'

Api.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@alma-cdk/openapix.Api.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.Api.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@alma-cdk/openapix.Api.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@alma-cdk/openapix.Api.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@alma-cdk/openapix.Api.property.restApiId">restApiId</a></code> | <code>string</code> | The ID of this API Gateway RestApi. |
| <code><a href="#@alma-cdk/openapix.Api.property.restApiName">restApiName</a></code> | <code>string</code> | A human friendly name for this Rest API. |
| <code><a href="#@alma-cdk/openapix.Api.property.restApiRef">restApiRef</a></code> | <code>aws-cdk-lib.interfaces.aws_apigateway.RestApiReference</code> | A reference to a RestApi resource. |
| <code><a href="#@alma-cdk/openapix.Api.property.restApiRootResourceId">restApiRootResourceId</a></code> | <code>string</code> | The resource ID of the root resource. |
| <code><a href="#@alma-cdk/openapix.Api.property.root">root</a></code> | <code>aws-cdk-lib.aws_apigateway.IResource</code> | Represents the root resource of this API endpoint ('/'). |
| <code><a href="#@alma-cdk/openapix.Api.property.url">url</a></code> | <code>string</code> | The deployed root URL of this REST API. |
| <code><a href="#@alma-cdk/openapix.Api.property.domainName">domainName</a></code> | <code>aws-cdk-lib.aws_apigateway.DomainName</code> | The first domain name mapped to this API, if defined through the `domainName` configuration prop, or added via `addDomainName`. |
| <code><a href="#@alma-cdk/openapix.Api.property.latestDeployment">latestDeployment</a></code> | <code>aws-cdk-lib.aws_apigateway.Deployment</code> | API Gateway deployment that represents the latest changes of the API. |
| <code><a href="#@alma-cdk/openapix.Api.property.deploymentStage">deploymentStage</a></code> | <code>aws-cdk-lib.aws_apigateway.Stage</code> | API Gateway stage that points to the latest deployment (if defined). |
| <code><a href="#@alma-cdk/openapix.Api.property.document">document</a></code> | <code><a href="#@alma-cdk/openapix.IDocument">IDocument</a></code> | The final OpenApi v3 document used to generate the AWS API Gateway. |

---

##### `node`<sup>Required</sup> <a name="node" id="@alma-cdk/openapix.Api.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@alma-cdk/openapix.Api.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@alma-cdk/openapix.Api.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@alma-cdk/openapix.Api.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

The ID of this API Gateway RestApi.

---

##### `restApiName`<sup>Required</sup> <a name="restApiName" id="@alma-cdk/openapix.Api.property.restApiName"></a>

```typescript
public readonly restApiName: string;
```

- *Type:* string

A human friendly name for this Rest API.

Note that this is different from `restApiId`.

---

##### `restApiRef`<sup>Required</sup> <a name="restApiRef" id="@alma-cdk/openapix.Api.property.restApiRef"></a>

```typescript
public readonly restApiRef: RestApiReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_apigateway.RestApiReference

A reference to a RestApi resource.

---

##### `restApiRootResourceId`<sup>Required</sup> <a name="restApiRootResourceId" id="@alma-cdk/openapix.Api.property.restApiRootResourceId"></a>

```typescript
public readonly restApiRootResourceId: string;
```

- *Type:* string

The resource ID of the root resource.

---

##### `root`<sup>Required</sup> <a name="root" id="@alma-cdk/openapix.Api.property.root"></a>

```typescript
public readonly root: IResource;
```

- *Type:* aws-cdk-lib.aws_apigateway.IResource

Represents the root resource of this API endpoint ('/').

Resources and Methods are added to this resource.

---

##### `url`<sup>Required</sup> <a name="url" id="@alma-cdk/openapix.Api.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The deployed root URL of this REST API.

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@alma-cdk/openapix.Api.property.domainName"></a>

```typescript
public readonly domainName: DomainName;
```

- *Type:* aws-cdk-lib.aws_apigateway.DomainName

The first domain name mapped to this API, if defined through the `domainName` configuration prop, or added via `addDomainName`.

---

##### `latestDeployment`<sup>Optional</sup> <a name="latestDeployment" id="@alma-cdk/openapix.Api.property.latestDeployment"></a>

```typescript
public readonly latestDeployment: Deployment;
```

- *Type:* aws-cdk-lib.aws_apigateway.Deployment

API Gateway deployment that represents the latest changes of the API.

This resource will be automatically updated every time the REST API model changes.
This will be undefined if `deploy` is false.

---

##### `deploymentStage`<sup>Required</sup> <a name="deploymentStage" id="@alma-cdk/openapix.Api.property.deploymentStage"></a>

```typescript
public readonly deploymentStage: Stage;
```

- *Type:* aws-cdk-lib.aws_apigateway.Stage

API Gateway stage that points to the latest deployment (if defined).

If `deploy` is disabled, you will need to explicitly assign this value in order to
set up integrations.

---

##### `document`<sup>Required</sup> <a name="document" id="@alma-cdk/openapix.Api.property.document"></a>

```typescript
public readonly document: IDocument;
```

- *Type:* <a href="#@alma-cdk/openapix.IDocument">IDocument</a>

The final OpenApi v3 document used to generate the AWS API Gateway.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.Api.property.PROPERTY_INJECTION_ID">PROPERTY_INJECTION_ID</a></code> | <code>string</code> | Uniquely identifies this class. |

---

##### `PROPERTY_INJECTION_ID`<sup>Required</sup> <a name="PROPERTY_INJECTION_ID" id="@alma-cdk/openapix.Api.property.PROPERTY_INJECTION_ID"></a>

```typescript
public readonly PROPERTY_INJECTION_ID: string;
```

- *Type:* string

Uniquely identifies this class.

---

### CognitoUserPoolsAuthorizer <a name="CognitoUserPoolsAuthorizer" id="@alma-cdk/openapix.CognitoUserPoolsAuthorizer"></a>

#### Initializers <a name="Initializers" id="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.Initializer"></a>

```typescript
import { CognitoUserPoolsAuthorizer } from '@alma-cdk/openapix'

new CognitoUserPoolsAuthorizer(scope: Construct, id: string, props: CognitoUserPoolsAuthorizerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.CognitoUserPoolsAuthorizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.CognitoUserPoolsAuthorizer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.CognitoUserPoolsAuthorizer.Initializer.parameter.props">props</a></code> | <code><a href="#@alma-cdk/openapix.CognitoUserPoolsAuthorizerProps">CognitoUserPoolsAuthorizerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.Initializer.parameter.props"></a>

- *Type:* <a href="#@alma-cdk/openapix.CognitoUserPoolsAuthorizerProps">CognitoUserPoolsAuthorizerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/openapix.CognitoUserPoolsAuthorizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@alma-cdk/openapix.CognitoUserPoolsAuthorizer.with">with</a></code> | Applies one or more mixins to this construct. |

---

##### `toString` <a name="toString" id="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/openapix.CognitoUserPoolsAuthorizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.isConstruct"></a>

```typescript
import { CognitoUserPoolsAuthorizer } from '@alma-cdk/openapix'

CognitoUserPoolsAuthorizer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.CognitoUserPoolsAuthorizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@alma-cdk/openapix.CognitoUserPoolsAuthorizer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.CognitoUserPoolsAuthorizer.property.xAmazonApigatewayAuthorizer">xAmazonApigatewayAuthorizer</a></code> | <code><a href="#@alma-cdk/openapix.XAmazonApigatewayAuthorizer">XAmazonApigatewayAuthorizer</a></code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.CognitoUserPoolsAuthorizer.property.xAmazonApigatewayAuthtype">xAmazonApigatewayAuthtype</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `id`<sup>Required</sup> <a name="id" id="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `xAmazonApigatewayAuthorizer`<sup>Required</sup> <a name="xAmazonApigatewayAuthorizer" id="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.property.xAmazonApigatewayAuthorizer"></a>

```typescript
public readonly xAmazonApigatewayAuthorizer: XAmazonApigatewayAuthorizer;
```

- *Type:* <a href="#@alma-cdk/openapix.XAmazonApigatewayAuthorizer">XAmazonApigatewayAuthorizer</a>

---

##### `xAmazonApigatewayAuthtype`<sup>Required</sup> <a name="xAmazonApigatewayAuthtype" id="@alma-cdk/openapix.CognitoUserPoolsAuthorizer.property.xAmazonApigatewayAuthtype"></a>

```typescript
public readonly xAmazonApigatewayAuthtype: string;
```

- *Type:* string

---


### LambdaAuthorizer <a name="LambdaAuthorizer" id="@alma-cdk/openapix.LambdaAuthorizer"></a>

#### Initializers <a name="Initializers" id="@alma-cdk/openapix.LambdaAuthorizer.Initializer"></a>

```typescript
import { LambdaAuthorizer } from '@alma-cdk/openapix'

new LambdaAuthorizer(scope: Construct, id: string, props: LambdaAuthorizerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.LambdaAuthorizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.LambdaAuthorizer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.LambdaAuthorizer.Initializer.parameter.props">props</a></code> | <code><a href="#@alma-cdk/openapix.LambdaAuthorizerProps">LambdaAuthorizerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@alma-cdk/openapix.LambdaAuthorizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@alma-cdk/openapix.LambdaAuthorizer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@alma-cdk/openapix.LambdaAuthorizer.Initializer.parameter.props"></a>

- *Type:* <a href="#@alma-cdk/openapix.LambdaAuthorizerProps">LambdaAuthorizerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/openapix.LambdaAuthorizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@alma-cdk/openapix.LambdaAuthorizer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@alma-cdk/openapix.LambdaAuthorizer.grantFunctionInvoke">grantFunctionInvoke</a></code> | Allow Lambda invoke action to be performed by given identity. |

---

##### `toString` <a name="toString" id="@alma-cdk/openapix.LambdaAuthorizer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@alma-cdk/openapix.LambdaAuthorizer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@alma-cdk/openapix.LambdaAuthorizer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `grantFunctionInvoke` <a name="grantFunctionInvoke" id="@alma-cdk/openapix.LambdaAuthorizer.grantFunctionInvoke"></a>

```typescript
public grantFunctionInvoke(api: IRestApi): void
```

Allow Lambda invoke action to be performed by given identity.

The ARN format for authorizers is different compared to integrations when granting permissions,
ex. arn:aws:execute-api:us-east-1:123456789012:api-id/authorizers/authorizer-id

###### `api`<sup>Required</sup> <a name="api" id="@alma-cdk/openapix.LambdaAuthorizer.grantFunctionInvoke.parameter.api"></a>

- *Type:* aws-cdk-lib.aws_apigateway.IRestApi

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/openapix.LambdaAuthorizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@alma-cdk/openapix.LambdaAuthorizer.isConstruct"></a>

```typescript
import { LambdaAuthorizer } from '@alma-cdk/openapix'

LambdaAuthorizer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@alma-cdk/openapix.LambdaAuthorizer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.LambdaAuthorizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@alma-cdk/openapix.LambdaAuthorizer.property.fn">fn</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.LambdaAuthorizer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.LambdaAuthorizer.property.xAmazonApigatewayAuthorizer">xAmazonApigatewayAuthorizer</a></code> | <code><a href="#@alma-cdk/openapix.XAmazonApigatewayAuthorizer">XAmazonApigatewayAuthorizer</a></code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.LambdaAuthorizer.property.xAmazonApigatewayAuthtype">xAmazonApigatewayAuthtype</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@alma-cdk/openapix.LambdaAuthorizer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fn`<sup>Required</sup> <a name="fn" id="@alma-cdk/openapix.LambdaAuthorizer.property.fn"></a>

```typescript
public readonly fn: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---

##### `id`<sup>Required</sup> <a name="id" id="@alma-cdk/openapix.LambdaAuthorizer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `xAmazonApigatewayAuthorizer`<sup>Required</sup> <a name="xAmazonApigatewayAuthorizer" id="@alma-cdk/openapix.LambdaAuthorizer.property.xAmazonApigatewayAuthorizer"></a>

```typescript
public readonly xAmazonApigatewayAuthorizer: XAmazonApigatewayAuthorizer;
```

- *Type:* <a href="#@alma-cdk/openapix.XAmazonApigatewayAuthorizer">XAmazonApigatewayAuthorizer</a>

---

##### `xAmazonApigatewayAuthtype`<sup>Required</sup> <a name="xAmazonApigatewayAuthtype" id="@alma-cdk/openapix.LambdaAuthorizer.property.xAmazonApigatewayAuthtype"></a>

```typescript
public readonly xAmazonApigatewayAuthtype: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### ApiBaseProps <a name="ApiBaseProps" id="@alma-cdk/openapix.ApiBaseProps"></a>

BaseProps for the `Api` construct without `RestApiProps`.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.ApiBaseProps.Initializer"></a>

```typescript
import { ApiBaseProps } from '@alma-cdk/openapix'

const apiBaseProps: ApiBaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.ApiBaseProps.property.source">source</a></code> | <code>string \| <a href="#@alma-cdk/openapix.Schema">Schema</a></code> | OpenApi Schema Definition source configuration. |
| <code><a href="#@alma-cdk/openapix.ApiBaseProps.property.authorizers">authorizers</a></code> | <code><a href="#@alma-cdk/openapix.AuthorizerConfig">AuthorizerConfig</a>[]</code> | Cognito User Pool or Custom Lambda based Authorizer configurations. |
| <code><a href="#@alma-cdk/openapix.ApiBaseProps.property.defaultCors">defaultCors</a></code> | <code><a href="#@alma-cdk/openapix.CorsIntegration">CorsIntegration</a></code> | Default CORS configuration. Applied to all path integrations. |
| <code><a href="#@alma-cdk/openapix.ApiBaseProps.property.defaultIntegration">defaultIntegration</a></code> | <code><a href="#@alma-cdk/openapix.Integration">Integration</a></code> | Add a default integration for paths without explicitly defined integrations. |
| <code><a href="#@alma-cdk/openapix.ApiBaseProps.property.injections">injections</a></code> | <code>{[ key: string ]: any}</code> | Inject any OpenApi v3 data to given schema definition object paths. |
| <code><a href="#@alma-cdk/openapix.ApiBaseProps.property.paths">paths</a></code> | <code><a href="#@alma-cdk/openapix.Paths">Paths</a></code> | Integrations for OpenApi Path definitions. |
| <code><a href="#@alma-cdk/openapix.ApiBaseProps.property.rejections">rejections</a></code> | <code>string[]</code> | Reject fields by absolute object path from generated definition. |
| <code><a href="#@alma-cdk/openapix.ApiBaseProps.property.rejectionsDeep">rejectionsDeep</a></code> | <code>string[]</code> | Reject all matching fields from generated definition. |
| <code><a href="#@alma-cdk/openapix.ApiBaseProps.property.upload">upload</a></code> | <code>boolean</code> | Schema Definition location (inline vs. |
| <code><a href="#@alma-cdk/openapix.ApiBaseProps.property.validators">validators</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.Validator">Validator</a>}</code> | Configure availalbe request validators. API Gateway REST APIs can perform request parameter and request body validation. |

---

##### `source`<sup>Required</sup> <a name="source" id="@alma-cdk/openapix.ApiBaseProps.property.source"></a>

```typescript
public readonly source: string | Schema;
```

- *Type:* string | <a href="#@alma-cdk/openapix.Schema">Schema</a>

OpenApi Schema Definition source configuration.

Provide either string path to source or an instance of `openapix.Schema`.

---

*Example*

```typescript
const props: openapix.SchemaProps;
new openapix.Schema(props)
```


##### `authorizers`<sup>Optional</sup> <a name="authorizers" id="@alma-cdk/openapix.ApiBaseProps.property.authorizers"></a>

```typescript
public readonly authorizers: AuthorizerConfig[];
```

- *Type:* <a href="#@alma-cdk/openapix.AuthorizerConfig">AuthorizerConfig</a>[]

Cognito User Pool or Custom Lambda based Authorizer configurations.

> [https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html)

---

*Example*

```typescript
[
  new openapix.CognitoUserPoolsAuthorizer(this, 'MyCognitoAuthorizer', {
    cognitoUserPools: [userPool],
    resultsCacheTtl: Duration.minutes(5),
  }),
]
```


##### `defaultCors`<sup>Optional</sup> <a name="defaultCors" id="@alma-cdk/openapix.ApiBaseProps.property.defaultCors"></a>

```typescript
public readonly defaultCors: CorsIntegration;
```

- *Type:* <a href="#@alma-cdk/openapix.CorsIntegration">CorsIntegration</a>

Default CORS configuration. Applied to all path integrations.

You can add path specific overrides by adding an `options` method with
`new openapix.CorsIntegration(...)` integration.

---

*Example*

```typescript
new openapix.CorsIntegration(this, {
  headers: 'Content-Type,X-Amz-Date,Authorization',
  origins: '*',
  methods: 'options,get',
}),
```


##### `defaultIntegration`<sup>Optional</sup> <a name="defaultIntegration" id="@alma-cdk/openapix.ApiBaseProps.property.defaultIntegration"></a>

```typescript
public readonly defaultIntegration: Integration;
```

- *Type:* <a href="#@alma-cdk/openapix.Integration">Integration</a>

Add a default integration for paths without explicitly defined integrations.

---

*Example*

```typescript
{
  'defaultIntegration': new openapix.LambdaIntegration(this, fn),
}
```


##### `injections`<sup>Optional</sup> <a name="injections" id="@alma-cdk/openapix.ApiBaseProps.property.injections"></a>

```typescript
public readonly injections: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Inject any OpenApi v3 data to given schema definition object paths.

---

*Example*

```typescript
{
  "info.title": "FancyPantsAPI"
}
```


##### `paths`<sup>Optional</sup> <a name="paths" id="@alma-cdk/openapix.ApiBaseProps.property.paths"></a>

```typescript
public readonly paths: Paths;
```

- *Type:* <a href="#@alma-cdk/openapix.Paths">Paths</a>

Integrations for OpenApi Path definitions.

---

*Example*

```typescript
{
  '/message': {
    post: new openapix.LambdaIntegration(this, fn),
  },
}
```


##### `rejections`<sup>Optional</sup> <a name="rejections" id="@alma-cdk/openapix.ApiBaseProps.property.rejections"></a>

```typescript
public readonly rejections: string[];
```

- *Type:* string[]

Reject fields by absolute object path from generated definition.

---

*Example*

```typescript
['info.description']
```


##### `rejectionsDeep`<sup>Optional</sup> <a name="rejectionsDeep" id="@alma-cdk/openapix.ApiBaseProps.property.rejectionsDeep"></a>

```typescript
public readonly rejectionsDeep: string[];
```

- *Type:* string[]

Reject all matching fields from generated definition.

---

*Example*

```typescript
['example', 'examples']
```


##### `upload`<sup>Optional</sup> <a name="upload" id="@alma-cdk/openapix.ApiBaseProps.property.upload"></a>

```typescript
public readonly upload: boolean;
```

- *Type:* boolean
- *Default:* false

Schema Definition location (inline vs.

S3 location).
Set `true` to upload to S3 or `false` (default) to inline it into resulting
CloudFormation template.

---

##### `validators`<sup>Optional</sup> <a name="validators" id="@alma-cdk/openapix.ApiBaseProps.property.validators"></a>

```typescript
public readonly validators: {[ key: string ]: Validator};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.Validator">Validator</a>}

Configure availalbe request validators. API Gateway REST APIs can perform request parameter and request body validation.

You can optionally specify one of them with `default: true` to promote it
as the default validator applied to all integrations.

For non-default validators, you must specify `validator: '<name>'` prop in
every integration you wish to use the given validator.

> [https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html)

---

*Example*

```typescript
{
  'all': {
    validateRequestBody: true,
    validateRequestParameters: true,
    default: true,
  },
  'params-only' : {
    validateRequestBody: false,
    validateRequestParameters: true,
  },
}
```


### ApiProps <a name="ApiProps" id="@alma-cdk/openapix.ApiProps"></a>

Props to configure `new openapix.Api`.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.ApiProps.Initializer"></a>

```typescript
import { ApiProps } from '@alma-cdk/openapix'

const apiProps: ApiProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.ApiProps.property.source">source</a></code> | <code>string \| <a href="#@alma-cdk/openapix.Schema">Schema</a></code> | OpenApi Schema Definition source configuration. |
| <code><a href="#@alma-cdk/openapix.ApiProps.property.authorizers">authorizers</a></code> | <code><a href="#@alma-cdk/openapix.AuthorizerConfig">AuthorizerConfig</a>[]</code> | Cognito User Pool or Custom Lambda based Authorizer configurations. |
| <code><a href="#@alma-cdk/openapix.ApiProps.property.defaultCors">defaultCors</a></code> | <code><a href="#@alma-cdk/openapix.CorsIntegration">CorsIntegration</a></code> | Default CORS configuration. Applied to all path integrations. |
| <code><a href="#@alma-cdk/openapix.ApiProps.property.defaultIntegration">defaultIntegration</a></code> | <code><a href="#@alma-cdk/openapix.Integration">Integration</a></code> | Add a default integration for paths without explicitly defined integrations. |
| <code><a href="#@alma-cdk/openapix.ApiProps.property.injections">injections</a></code> | <code>{[ key: string ]: any}</code> | Inject any OpenApi v3 data to given schema definition object paths. |
| <code><a href="#@alma-cdk/openapix.ApiProps.property.paths">paths</a></code> | <code><a href="#@alma-cdk/openapix.Paths">Paths</a></code> | Integrations for OpenApi Path definitions. |
| <code><a href="#@alma-cdk/openapix.ApiProps.property.rejections">rejections</a></code> | <code>string[]</code> | Reject fields by absolute object path from generated definition. |
| <code><a href="#@alma-cdk/openapix.ApiProps.property.rejectionsDeep">rejectionsDeep</a></code> | <code>string[]</code> | Reject all matching fields from generated definition. |
| <code><a href="#@alma-cdk/openapix.ApiProps.property.upload">upload</a></code> | <code>boolean</code> | Schema Definition location (inline vs. |
| <code><a href="#@alma-cdk/openapix.ApiProps.property.validators">validators</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.Validator">Validator</a>}</code> | Configure availalbe request validators. API Gateway REST APIs can perform request parameter and request body validation. |
| <code><a href="#@alma-cdk/openapix.ApiProps.property.restApiProps">restApiProps</a></code> | <code>aws-cdk-lib.aws_apigateway.RestApiProps</code> | Props to configure the underlying CDK `apigateway.RestApi`. |

---

##### `source`<sup>Required</sup> <a name="source" id="@alma-cdk/openapix.ApiProps.property.source"></a>

```typescript
public readonly source: string | Schema;
```

- *Type:* string | <a href="#@alma-cdk/openapix.Schema">Schema</a>

OpenApi Schema Definition source configuration.

Provide either string path to source or an instance of `openapix.Schema`.

---

*Example*

```typescript
const props: openapix.SchemaProps;
new openapix.Schema(props)
```


##### `authorizers`<sup>Optional</sup> <a name="authorizers" id="@alma-cdk/openapix.ApiProps.property.authorizers"></a>

```typescript
public readonly authorizers: AuthorizerConfig[];
```

- *Type:* <a href="#@alma-cdk/openapix.AuthorizerConfig">AuthorizerConfig</a>[]

Cognito User Pool or Custom Lambda based Authorizer configurations.

> [https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html)

---

*Example*

```typescript
[
  new openapix.CognitoUserPoolsAuthorizer(this, 'MyCognitoAuthorizer', {
    cognitoUserPools: [userPool],
    resultsCacheTtl: Duration.minutes(5),
  }),
]
```


##### `defaultCors`<sup>Optional</sup> <a name="defaultCors" id="@alma-cdk/openapix.ApiProps.property.defaultCors"></a>

```typescript
public readonly defaultCors: CorsIntegration;
```

- *Type:* <a href="#@alma-cdk/openapix.CorsIntegration">CorsIntegration</a>

Default CORS configuration. Applied to all path integrations.

You can add path specific overrides by adding an `options` method with
`new openapix.CorsIntegration(...)` integration.

---

*Example*

```typescript
new openapix.CorsIntegration(this, {
  headers: 'Content-Type,X-Amz-Date,Authorization',
  origins: '*',
  methods: 'options,get',
}),
```


##### `defaultIntegration`<sup>Optional</sup> <a name="defaultIntegration" id="@alma-cdk/openapix.ApiProps.property.defaultIntegration"></a>

```typescript
public readonly defaultIntegration: Integration;
```

- *Type:* <a href="#@alma-cdk/openapix.Integration">Integration</a>

Add a default integration for paths without explicitly defined integrations.

---

*Example*

```typescript
{
  'defaultIntegration': new openapix.LambdaIntegration(this, fn),
}
```


##### `injections`<sup>Optional</sup> <a name="injections" id="@alma-cdk/openapix.ApiProps.property.injections"></a>

```typescript
public readonly injections: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Inject any OpenApi v3 data to given schema definition object paths.

---

*Example*

```typescript
{
  "info.title": "FancyPantsAPI"
}
```


##### `paths`<sup>Optional</sup> <a name="paths" id="@alma-cdk/openapix.ApiProps.property.paths"></a>

```typescript
public readonly paths: Paths;
```

- *Type:* <a href="#@alma-cdk/openapix.Paths">Paths</a>

Integrations for OpenApi Path definitions.

---

*Example*

```typescript
{
  '/message': {
    post: new openapix.LambdaIntegration(this, fn),
  },
}
```


##### `rejections`<sup>Optional</sup> <a name="rejections" id="@alma-cdk/openapix.ApiProps.property.rejections"></a>

```typescript
public readonly rejections: string[];
```

- *Type:* string[]

Reject fields by absolute object path from generated definition.

---

*Example*

```typescript
['info.description']
```


##### `rejectionsDeep`<sup>Optional</sup> <a name="rejectionsDeep" id="@alma-cdk/openapix.ApiProps.property.rejectionsDeep"></a>

```typescript
public readonly rejectionsDeep: string[];
```

- *Type:* string[]

Reject all matching fields from generated definition.

---

*Example*

```typescript
['example', 'examples']
```


##### `upload`<sup>Optional</sup> <a name="upload" id="@alma-cdk/openapix.ApiProps.property.upload"></a>

```typescript
public readonly upload: boolean;
```

- *Type:* boolean
- *Default:* false

Schema Definition location (inline vs.

S3 location).
Set `true` to upload to S3 or `false` (default) to inline it into resulting
CloudFormation template.

---

##### `validators`<sup>Optional</sup> <a name="validators" id="@alma-cdk/openapix.ApiProps.property.validators"></a>

```typescript
public readonly validators: {[ key: string ]: Validator};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.Validator">Validator</a>}

Configure availalbe request validators. API Gateway REST APIs can perform request parameter and request body validation.

You can optionally specify one of them with `default: true` to promote it
as the default validator applied to all integrations.

For non-default validators, you must specify `validator: '<name>'` prop in
every integration you wish to use the given validator.

> [https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html)

---

*Example*

```typescript
{
  'all': {
    validateRequestBody: true,
    validateRequestParameters: true,
    default: true,
  },
  'params-only' : {
    validateRequestBody: false,
    validateRequestParameters: true,
  },
}
```


##### `restApiProps`<sup>Optional</sup> <a name="restApiProps" id="@alma-cdk/openapix.ApiProps.property.restApiProps"></a>

```typescript
public readonly restApiProps: RestApiProps;
```

- *Type:* aws-cdk-lib.aws_apigateway.RestApiProps

Props to configure the underlying CDK `apigateway.RestApi`.

---

### AuthorizerConfig <a name="AuthorizerConfig" id="@alma-cdk/openapix.AuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.AuthorizerConfig.Initializer"></a>

```typescript
import { AuthorizerConfig } from '@alma-cdk/openapix'

const authorizerConfig: AuthorizerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.AuthorizerConfig.property.xAmazonApigatewayAuthorizer">xAmazonApigatewayAuthorizer</a></code> | <code><a href="#@alma-cdk/openapix.XAmazonApigatewayAuthorizer">XAmazonApigatewayAuthorizer</a></code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.AuthorizerConfig.property.xAmazonApigatewayAuthtype">xAmazonApigatewayAuthtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.AuthorizerConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `xAmazonApigatewayAuthorizer`<sup>Required</sup> <a name="xAmazonApigatewayAuthorizer" id="@alma-cdk/openapix.AuthorizerConfig.property.xAmazonApigatewayAuthorizer"></a>

```typescript
public readonly xAmazonApigatewayAuthorizer: XAmazonApigatewayAuthorizer;
```

- *Type:* <a href="#@alma-cdk/openapix.XAmazonApigatewayAuthorizer">XAmazonApigatewayAuthorizer</a>

---

##### `xAmazonApigatewayAuthtype`<sup>Required</sup> <a name="xAmazonApigatewayAuthtype" id="@alma-cdk/openapix.AuthorizerConfig.property.xAmazonApigatewayAuthtype"></a>

```typescript
public readonly xAmazonApigatewayAuthtype: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@alma-cdk/openapix.AuthorizerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

### AuthorizerExtensions <a name="AuthorizerExtensions" id="@alma-cdk/openapix.AuthorizerExtensions"></a>

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.AuthorizerExtensions.Initializer"></a>

```typescript
import { AuthorizerExtensions } from '@alma-cdk/openapix'

const authorizerExtensions: AuthorizerExtensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.AuthorizerExtensions.property.xAmazonApigatewayAuthorizer">xAmazonApigatewayAuthorizer</a></code> | <code><a href="#@alma-cdk/openapix.XAmazonApigatewayAuthorizer">XAmazonApigatewayAuthorizer</a></code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.AuthorizerExtensions.property.xAmazonApigatewayAuthtype">xAmazonApigatewayAuthtype</a></code> | <code>string</code> | *No description.* |

---

##### `xAmazonApigatewayAuthorizer`<sup>Required</sup> <a name="xAmazonApigatewayAuthorizer" id="@alma-cdk/openapix.AuthorizerExtensions.property.xAmazonApigatewayAuthorizer"></a>

```typescript
public readonly xAmazonApigatewayAuthorizer: XAmazonApigatewayAuthorizer;
```

- *Type:* <a href="#@alma-cdk/openapix.XAmazonApigatewayAuthorizer">XAmazonApigatewayAuthorizer</a>

---

##### `xAmazonApigatewayAuthtype`<sup>Required</sup> <a name="xAmazonApigatewayAuthtype" id="@alma-cdk/openapix.AuthorizerExtensions.property.xAmazonApigatewayAuthtype"></a>

```typescript
public readonly xAmazonApigatewayAuthtype: string;
```

- *Type:* string

---

### AwsIntegrationProps <a name="AwsIntegrationProps" id="@alma-cdk/openapix.AwsIntegrationProps"></a>

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.AwsIntegrationProps.Initializer"></a>

```typescript
import { AwsIntegrationProps } from '@alma-cdk/openapix'

const awsIntegrationProps: AwsIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.AwsIntegrationProps.property.service">service</a></code> | <code>string</code> | The name of the integrated AWS service (e.g. `s3`). |
| <code><a href="#@alma-cdk/openapix.AwsIntegrationProps.property.action">action</a></code> | <code>string</code> | The AWS action to perform in the integration. |
| <code><a href="#@alma-cdk/openapix.AwsIntegrationProps.property.actionParameters">actionParameters</a></code> | <code>{[ key: string ]: string}</code> | Parameters for the action. |
| <code><a href="#@alma-cdk/openapix.AwsIntegrationProps.property.integrationHttpMethod">integrationHttpMethod</a></code> | <code>string</code> | The integration's HTTP method type. |
| <code><a href="#@alma-cdk/openapix.AwsIntegrationProps.property.options">options</a></code> | <code>aws-cdk-lib.aws_apigateway.IntegrationOptions</code> | Integration options, such as content handling, request/response mapping, etc. |
| <code><a href="#@alma-cdk/openapix.AwsIntegrationProps.property.path">path</a></code> | <code>string</code> | The path to use for path-base APIs. |
| <code><a href="#@alma-cdk/openapix.AwsIntegrationProps.property.proxy">proxy</a></code> | <code>boolean</code> | Use AWS_PROXY integration. |
| <code><a href="#@alma-cdk/openapix.AwsIntegrationProps.property.region">region</a></code> | <code>string</code> | The region of the integrated AWS service. |
| <code><a href="#@alma-cdk/openapix.AwsIntegrationProps.property.subdomain">subdomain</a></code> | <code>string</code> | A designated subdomain supported by certain AWS service for fast host-name lookup. |
| <code><a href="#@alma-cdk/openapix.AwsIntegrationProps.property.validator">validator</a></code> | <code>string</code> | Validator identifier for method integration. This will override the default validator if one configured. |

---

##### `service`<sup>Required</sup> <a name="service" id="@alma-cdk/openapix.AwsIntegrationProps.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of the integrated AWS service (e.g. `s3`).

---

##### `action`<sup>Optional</sup> <a name="action" id="@alma-cdk/openapix.AwsIntegrationProps.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The AWS action to perform in the integration.

Use `actionParams` to specify key-value params for the action.

Mutually exclusive with `path`.

---

##### `actionParameters`<sup>Optional</sup> <a name="actionParameters" id="@alma-cdk/openapix.AwsIntegrationProps.property.actionParameters"></a>

```typescript
public readonly actionParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Parameters for the action.

`action` must be set, and `path` must be undefined.
The action params will be URL encoded.

---

##### `integrationHttpMethod`<sup>Optional</sup> <a name="integrationHttpMethod" id="@alma-cdk/openapix.AwsIntegrationProps.property.integrationHttpMethod"></a>

```typescript
public readonly integrationHttpMethod: string;
```

- *Type:* string
- *Default:* POST

The integration's HTTP method type.

---

##### `options`<sup>Optional</sup> <a name="options" id="@alma-cdk/openapix.AwsIntegrationProps.property.options"></a>

```typescript
public readonly options: IntegrationOptions;
```

- *Type:* aws-cdk-lib.aws_apigateway.IntegrationOptions

Integration options, such as content handling, request/response mapping, etc.

---

##### `path`<sup>Optional</sup> <a name="path" id="@alma-cdk/openapix.AwsIntegrationProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path to use for path-base APIs.

For example, for S3 GET, you can set path to `bucket/key`.
For lambda, you can set path to `2015-03-31/functions/${function-arn}/invocations`

Mutually exclusive with the `action` options.

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@alma-cdk/openapix.AwsIntegrationProps.property.proxy"></a>

```typescript
public readonly proxy: boolean;
```

- *Type:* boolean
- *Default:* false

Use AWS_PROXY integration.

---

##### `region`<sup>Optional</sup> <a name="region" id="@alma-cdk/openapix.AwsIntegrationProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* same region as the stack

The region of the integrated AWS service.

---

##### `subdomain`<sup>Optional</sup> <a name="subdomain" id="@alma-cdk/openapix.AwsIntegrationProps.property.subdomain"></a>

```typescript
public readonly subdomain: string;
```

- *Type:* string

A designated subdomain supported by certain AWS service for fast host-name lookup.

---

##### `validator`<sup>Optional</sup> <a name="validator" id="@alma-cdk/openapix.AwsIntegrationProps.property.validator"></a>

```typescript
public readonly validator: string;
```

- *Type:* string

Validator identifier for method integration. This will override the default validator if one configured.

Should match a key from OpenApi schema `components.securitySchemas`.

---

### CallbackObject <a name="CallbackObject" id="@alma-cdk/openapix.CallbackObject"></a>

A map of possible out-of band callbacks related to the parent operation.

Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.CallbackObject.Initializer"></a>

```typescript
import { CallbackObject } from '@alma-cdk/openapix'

const callbackObject: CallbackObject = { ... }
```


### CognitoUserPoolsAuthorizerProps <a name="CognitoUserPoolsAuthorizerProps" id="@alma-cdk/openapix.CognitoUserPoolsAuthorizerProps"></a>

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.CognitoUserPoolsAuthorizerProps.Initializer"></a>

```typescript
import { CognitoUserPoolsAuthorizerProps } from '@alma-cdk/openapix'

const cognitoUserPoolsAuthorizerProps: CognitoUserPoolsAuthorizerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.CognitoUserPoolsAuthorizerProps.property.cognitoUserPools">cognitoUserPools</a></code> | <code>aws-cdk-lib.aws_cognito.IUserPool[]</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.CognitoUserPoolsAuthorizerProps.property.resultsCacheTtl">resultsCacheTtl</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |

---

##### `cognitoUserPools`<sup>Required</sup> <a name="cognitoUserPools" id="@alma-cdk/openapix.CognitoUserPoolsAuthorizerProps.property.cognitoUserPools"></a>

```typescript
public readonly cognitoUserPools: IUserPool[];
```

- *Type:* aws-cdk-lib.aws_cognito.IUserPool[]

---

##### `resultsCacheTtl`<sup>Optional</sup> <a name="resultsCacheTtl" id="@alma-cdk/openapix.CognitoUserPoolsAuthorizerProps.property.resultsCacheTtl"></a>

```typescript
public readonly resultsCacheTtl: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

### ComponentsObject <a name="ComponentsObject" id="@alma-cdk/openapix.ComponentsObject"></a>

Holds a set of reusable objects for different aspects of the OAS.

All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.ComponentsObject.Initializer"></a>

```typescript
import { ComponentsObject } from '@alma-cdk/openapix'

const componentsObject: ComponentsObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.ComponentsObject.property.callbacks">callbacks</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.CallbackObject">CallbackObject</a>}</code> | An object to hold reusable Callback Objects. |
| <code><a href="#@alma-cdk/openapix.ComponentsObject.property.examples">examples</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.ExampleObject">ExampleObject</a>}</code> | An object to hold reusable Example Objects. |
| <code><a href="#@alma-cdk/openapix.ComponentsObject.property.headers">headers</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.HeaderObject">HeaderObject</a>}</code> | An object to hold reusable Header Objects. |
| <code><a href="#@alma-cdk/openapix.ComponentsObject.property.links">links</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.LinkObject">LinkObject</a>}</code> | An object to hold reusable Link Objects. |
| <code><a href="#@alma-cdk/openapix.ComponentsObject.property.parameters">parameters</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.ParameterObject">ParameterObject</a>}</code> | An object to hold reusable Parameter Objects. |
| <code><a href="#@alma-cdk/openapix.ComponentsObject.property.requestBodies">requestBodies</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.RequestBodyObject">RequestBodyObject</a>}</code> | An object to hold reusable Request Body Objects. |
| <code><a href="#@alma-cdk/openapix.ComponentsObject.property.responses">responses</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.ResponseObject">ResponseObject</a>}</code> | An object to hold reusable Response Objects. |
| <code><a href="#@alma-cdk/openapix.ComponentsObject.property.schemas">schemas</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.SchemaObject">SchemaObject</a>}</code> | An object to hold reusable Schema Objects. |
| <code><a href="#@alma-cdk/openapix.ComponentsObject.property.securitySchemes">securitySchemes</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.SecuritySchemeObject">SecuritySchemeObject</a>}</code> | An object to hold reusable Security Scheme Objects. |

---

##### `callbacks`<sup>Optional</sup> <a name="callbacks" id="@alma-cdk/openapix.ComponentsObject.property.callbacks"></a>

```typescript
public readonly callbacks: {[ key: string ]: ReferenceObject | CallbackObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.CallbackObject">CallbackObject</a>}

An object to hold reusable Callback Objects.

---

##### `examples`<sup>Optional</sup> <a name="examples" id="@alma-cdk/openapix.ComponentsObject.property.examples"></a>

```typescript
public readonly examples: {[ key: string ]: ReferenceObject | ExampleObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.ExampleObject">ExampleObject</a>}

An object to hold reusable Example Objects.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@alma-cdk/openapix.ComponentsObject.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: ReferenceObject | HeaderObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.HeaderObject">HeaderObject</a>}

An object to hold reusable Header Objects.

---

##### `links`<sup>Optional</sup> <a name="links" id="@alma-cdk/openapix.ComponentsObject.property.links"></a>

```typescript
public readonly links: {[ key: string ]: ReferenceObject | LinkObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.LinkObject">LinkObject</a>}

An object to hold reusable Link Objects.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@alma-cdk/openapix.ComponentsObject.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: ReferenceObject | ParameterObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.ParameterObject">ParameterObject</a>}

An object to hold reusable Parameter Objects.

---

##### `requestBodies`<sup>Optional</sup> <a name="requestBodies" id="@alma-cdk/openapix.ComponentsObject.property.requestBodies"></a>

```typescript
public readonly requestBodies: {[ key: string ]: ReferenceObject | RequestBodyObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.RequestBodyObject">RequestBodyObject</a>}

An object to hold reusable Request Body Objects.

---

##### `responses`<sup>Optional</sup> <a name="responses" id="@alma-cdk/openapix.ComponentsObject.property.responses"></a>

```typescript
public readonly responses: {[ key: string ]: ReferenceObject | ResponseObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.ResponseObject">ResponseObject</a>}

An object to hold reusable Response Objects.

---

##### `schemas`<sup>Optional</sup> <a name="schemas" id="@alma-cdk/openapix.ComponentsObject.property.schemas"></a>

```typescript
public readonly schemas: {[ key: string ]: ReferenceObject | SchemaObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.SchemaObject">SchemaObject</a>}

An object to hold reusable Schema Objects.

---

##### `securitySchemes`<sup>Optional</sup> <a name="securitySchemes" id="@alma-cdk/openapix.ComponentsObject.property.securitySchemes"></a>

```typescript
public readonly securitySchemes: {[ key: string ]: ReferenceObject | SecuritySchemeObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.SecuritySchemeObject">SecuritySchemeObject</a>}

An object to hold reusable Security Scheme Objects.

---

### ContactObject <a name="ContactObject" id="@alma-cdk/openapix.ContactObject"></a>

The contact information for the exposed API.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.ContactObject.Initializer"></a>

```typescript
import { ContactObject } from '@alma-cdk/openapix'

const contactObject: ContactObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.ContactObject.property.email">email</a></code> | <code>string</code> | The email address of the contact person/organization. |
| <code><a href="#@alma-cdk/openapix.ContactObject.property.name">name</a></code> | <code>string</code> | The identifying name of the contact person/organization. |
| <code><a href="#@alma-cdk/openapix.ContactObject.property.url">url</a></code> | <code>string</code> | The URL pointing to the contact information. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@alma-cdk/openapix.ContactObject.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The email address of the contact person/organization.

MUST be in the format of an email address.

---

##### `name`<sup>Optional</sup> <a name="name" id="@alma-cdk/openapix.ContactObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The identifying name of the contact person/organization.

---

##### `url`<sup>Optional</sup> <a name="url" id="@alma-cdk/openapix.ContactObject.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL pointing to the contact information.

MUST be in the format of a URL.

---

### CorsIntegrationProps <a name="CorsIntegrationProps" id="@alma-cdk/openapix.CorsIntegrationProps"></a>

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.CorsIntegrationProps.Initializer"></a>

```typescript
import { CorsIntegrationProps } from '@alma-cdk/openapix'

const corsIntegrationProps: CorsIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.CorsIntegrationProps.property.validator">validator</a></code> | <code>string</code> | Validator identifier for method integration. This will override the default validator if one configured. |
| <code><a href="#@alma-cdk/openapix.CorsIntegrationProps.property.headers">headers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.CorsIntegrationProps.property.methods">methods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.CorsIntegrationProps.property.origins">origins</a></code> | <code>string</code> | *No description.* |

---

##### `validator`<sup>Optional</sup> <a name="validator" id="@alma-cdk/openapix.CorsIntegrationProps.property.validator"></a>

```typescript
public readonly validator: string;
```

- *Type:* string

Validator identifier for method integration. This will override the default validator if one configured.

Should match a key from OpenApi schema `components.securitySchemas`.

---

##### `headers`<sup>Required</sup> <a name="headers" id="@alma-cdk/openapix.CorsIntegrationProps.property.headers"></a>

```typescript
public readonly headers: string;
```

- *Type:* string

---

##### `methods`<sup>Required</sup> <a name="methods" id="@alma-cdk/openapix.CorsIntegrationProps.property.methods"></a>

```typescript
public readonly methods: string;
```

- *Type:* string

---

##### `origins`<sup>Required</sup> <a name="origins" id="@alma-cdk/openapix.CorsIntegrationProps.property.origins"></a>

```typescript
public readonly origins: string;
```

- *Type:* string

---

### DiscriminatorObject <a name="DiscriminatorObject" id="@alma-cdk/openapix.DiscriminatorObject"></a>

When request bodies or response payloads may be one of a number of different schemas, a discriminator object can be used to aid in serialization, deserialization, and validation.

The discriminator is a specific object in a schema which is used to inform the consumer of the specification of an alternative schema based on the value associated with it. When using the discriminator, inline schemas will not be considered.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.DiscriminatorObject.Initializer"></a>

```typescript
import { DiscriminatorObject } from '@alma-cdk/openapix'

const discriminatorObject: DiscriminatorObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.DiscriminatorObject.property.propertyName">propertyName</a></code> | <code>string</code> | The name of the property in the payload that will hold the discriminator value. |
| <code><a href="#@alma-cdk/openapix.DiscriminatorObject.property.mapping">mapping</a></code> | <code>{[ key: string ]: string}</code> | An object to hold mappings between payload values and schema names or references. |

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@alma-cdk/openapix.DiscriminatorObject.property.propertyName"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* string

The name of the property in the payload that will hold the discriminator value.

---

##### `mapping`<sup>Optional</sup> <a name="mapping" id="@alma-cdk/openapix.DiscriminatorObject.property.mapping"></a>

```typescript
public readonly mapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An object to hold mappings between payload values and schema names or references.

---

### EncodingObject <a name="EncodingObject" id="@alma-cdk/openapix.EncodingObject"></a>

A single encoding definition applied to a single schema property.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.EncodingObject.Initializer"></a>

```typescript
import { EncodingObject } from '@alma-cdk/openapix'

const encodingObject: EncodingObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.EncodingObject.property.allowReserved">allowReserved</a></code> | <code>boolean</code> | Determines whether the parameter value SHOULD allow reserved characters, as defined by RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding. The default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded. |
| <code><a href="#@alma-cdk/openapix.EncodingObject.property.contentType">contentType</a></code> | <code>string</code> | The Content-Type for encoding a specific property. |
| <code><a href="#@alma-cdk/openapix.EncodingObject.property.explode">explode</a></code> | <code>boolean</code> | When this is true, property values of type array or object generate separate parameters for each value of the array, or key-value-pair of the map. |
| <code><a href="#@alma-cdk/openapix.EncodingObject.property.headers">headers</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.HeaderObject">HeaderObject</a>}</code> | A map allowing additional information to be provided as headers, for example Content-Disposition. |
| <code><a href="#@alma-cdk/openapix.EncodingObject.property.style">style</a></code> | <code>string</code> | Describes how a specific property value will be serialized depending on its type. |

---

##### `allowReserved`<sup>Optional</sup> <a name="allowReserved" id="@alma-cdk/openapix.EncodingObject.property.allowReserved"></a>

```typescript
public readonly allowReserved: boolean;
```

- *Type:* boolean

Determines whether the parameter value SHOULD allow reserved characters, as defined by RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding. The default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@alma-cdk/openapix.EncodingObject.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

The Content-Type for encoding a specific property.

Default value depends on the property type: for string with format being binary – application/octet-stream; for other primitive types – text/plain; for object - application/json; for array – the default is defined based on the inner type. The value can be a specific media type (e.g. application/json), a wildcard media type (e.g. image/*), or a comma-separated list of the two types.

---

##### `explode`<sup>Optional</sup> <a name="explode" id="@alma-cdk/openapix.EncodingObject.property.explode"></a>

```typescript
public readonly explode: boolean;
```

- *Type:* boolean

When this is true, property values of type array or object generate separate parameters for each value of the array, or key-value-pair of the map.

For other types of properties this property has no effect. When style is form, the default value is true. For all other styles, the default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@alma-cdk/openapix.EncodingObject.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: ReferenceObject | HeaderObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.HeaderObject">HeaderObject</a>}

A map allowing additional information to be provided as headers, for example Content-Disposition.

Content-Type is described separately and SHALL be ignored in this section. This property SHALL be ignored if the request body media type is not a multipart.

---

##### `style`<sup>Optional</sup> <a name="style" id="@alma-cdk/openapix.EncodingObject.property.style"></a>

```typescript
public readonly style: string;
```

- *Type:* string

Describes how a specific property value will be serialized depending on its type.

See Parameter Object for details on the style property. The behavior follows the same values as query parameters, including default values. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded.

---

### ExampleObject <a name="ExampleObject" id="@alma-cdk/openapix.ExampleObject"></a>

Example Object.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.ExampleObject.Initializer"></a>

```typescript
import { ExampleObject } from '@alma-cdk/openapix'

const exampleObject: ExampleObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.ExampleObject.property.description">description</a></code> | <code>string</code> | Long description for the example. |
| <code><a href="#@alma-cdk/openapix.ExampleObject.property.externalValue">externalValue</a></code> | <code>string</code> | A URL that points to the literal example. |
| <code><a href="#@alma-cdk/openapix.ExampleObject.property.summary">summary</a></code> | <code>string</code> | Short description for the example. |
| <code><a href="#@alma-cdk/openapix.ExampleObject.property.value">value</a></code> | <code>any</code> | Embedded literal example. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.ExampleObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Long description for the example.

CommonMark syntax MAY be used for rich text representation.

---

##### `externalValue`<sup>Optional</sup> <a name="externalValue" id="@alma-cdk/openapix.ExampleObject.property.externalValue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* string

A URL that points to the literal example.

This provides the capability to reference examples that cannot easily be included in JSON or YAML documents. The value field and externalValue field are mutually exclusive.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@alma-cdk/openapix.ExampleObject.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

Short description for the example.

---

##### `value`<sup>Optional</sup> <a name="value" id="@alma-cdk/openapix.ExampleObject.property.value"></a>

```typescript
public readonly value: any;
```

- *Type:* any

Embedded literal example.

The value field and externalValue field are mutually exclusive. To represent examples of media types that cannot naturally represented in JSON or YAML, use a string value to contain the example, escaping where necessary.

---

### Extensible <a name="Extensible" id="@alma-cdk/openapix.Extensible"></a>

Allow Open Api Extensions via `x-` prefixed values.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.Extensible.Initializer"></a>

```typescript
import { Extensible } from '@alma-cdk/openapix'

const extensible: Extensible = { ... }
```


### ExternalDocumentationObject <a name="ExternalDocumentationObject" id="@alma-cdk/openapix.ExternalDocumentationObject"></a>

Allows referencing an external resource for extended documentation.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.ExternalDocumentationObject.Initializer"></a>

```typescript
import { ExternalDocumentationObject } from '@alma-cdk/openapix'

const externalDocumentationObject: ExternalDocumentationObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.ExternalDocumentationObject.property.url">url</a></code> | <code>string</code> | The URL for the target documentation. |
| <code><a href="#@alma-cdk/openapix.ExternalDocumentationObject.property.description">description</a></code> | <code>string</code> | A short description of the target documentation. |

---

##### `url`<sup>Required</sup> <a name="url" id="@alma-cdk/openapix.ExternalDocumentationObject.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL for the target documentation.

Value MUST be in the format of a URL.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.ExternalDocumentationObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of the target documentation.

CommonMark syntax MAY be used for rich text representation.

---

### HeaderObject <a name="HeaderObject" id="@alma-cdk/openapix.HeaderObject"></a>

The Header Object follows the structure of the Parameter Object with the following changes:.

1. name MUST NOT be specified, it is given in the corresponding headers map.
2. in MUST NOT be specified, it is implicitly in header.
3. All traits that are affected by the location MUST be applicable to a location of header (for example, style).

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.HeaderObject.Initializer"></a>

```typescript
import { HeaderObject } from '@alma-cdk/openapix'

const headerObject: HeaderObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.HeaderObject.property.allowEmptyValue">allowEmptyValue</a></code> | <code>boolean</code> | Sets the ability to pass empty-valued parameters. |
| <code><a href="#@alma-cdk/openapix.HeaderObject.property.deprecated">deprecated</a></code> | <code>boolean</code> | Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. |
| <code><a href="#@alma-cdk/openapix.HeaderObject.property.description">description</a></code> | <code>string</code> | A brief description of the parameter. |
| <code><a href="#@alma-cdk/openapix.HeaderObject.property.required">required</a></code> | <code>boolean</code> | Determines whether this parameter is mandatory. |

---

##### `allowEmptyValue`<sup>Optional</sup> <a name="allowEmptyValue" id="@alma-cdk/openapix.HeaderObject.property.allowEmptyValue"></a>

```typescript
public readonly allowEmptyValue: boolean;
```

- *Type:* boolean

Sets the ability to pass empty-valued parameters.

This is valid only for query parameters and allows sending a parameter with an empty value. Default value is false. If style is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@alma-cdk/openapix.HeaderObject.property.deprecated"></a>

```typescript
public readonly deprecated: boolean;
```

- *Type:* boolean

Specifies that a parameter is deprecated and SHOULD be transitioned out of usage.

Default value is false.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.HeaderObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A brief description of the parameter.

This could contain examples of use. CommonMark syntax MAY be used for rich text representation.

---

##### `required`<sup>Optional</sup> <a name="required" id="@alma-cdk/openapix.HeaderObject.property.required"></a>

```typescript
public readonly required: boolean;
```

- *Type:* boolean

Determines whether this parameter is mandatory.

If the parameter location is "path", this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be included and its default value is false.

---

### HttpIntegrationProps <a name="HttpIntegrationProps" id="@alma-cdk/openapix.HttpIntegrationProps"></a>

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.HttpIntegrationProps.Initializer"></a>

```typescript
import { HttpIntegrationProps } from '@alma-cdk/openapix'

const httpIntegrationProps: HttpIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.HttpIntegrationProps.property.httpMethod">httpMethod</a></code> | <code>string</code> | HTTP method to use when invoking the backend URL. |
| <code><a href="#@alma-cdk/openapix.HttpIntegrationProps.property.options">options</a></code> | <code>aws-cdk-lib.aws_apigateway.IntegrationOptions</code> | Integration options, such as request/resopnse mapping, content handling, etc. |
| <code><a href="#@alma-cdk/openapix.HttpIntegrationProps.property.proxy">proxy</a></code> | <code>boolean</code> | Determines whether to use proxy integration or custom integration. |
| <code><a href="#@alma-cdk/openapix.HttpIntegrationProps.property.validator">validator</a></code> | <code>string</code> | Validator identifier for method integration. This will override the default validator if one configured. |

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@alma-cdk/openapix.HttpIntegrationProps.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string
- *Default:* GET

HTTP method to use when invoking the backend URL.

---

##### `options`<sup>Optional</sup> <a name="options" id="@alma-cdk/openapix.HttpIntegrationProps.property.options"></a>

```typescript
public readonly options: IntegrationOptions;
```

- *Type:* aws-cdk-lib.aws_apigateway.IntegrationOptions
- *Default:* defaults based on `IntegrationOptions` defaults

Integration options, such as request/resopnse mapping, content handling, etc.

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@alma-cdk/openapix.HttpIntegrationProps.property.proxy"></a>

```typescript
public readonly proxy: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether to use proxy integration or custom integration.

---

##### `validator`<sup>Optional</sup> <a name="validator" id="@alma-cdk/openapix.HttpIntegrationProps.property.validator"></a>

```typescript
public readonly validator: string;
```

- *Type:* string

Validator identifier for method integration. This will override the default validator if one configured.

Should match a key from OpenApi schema `components.securitySchemas`.

---

### InfoObject <a name="InfoObject" id="@alma-cdk/openapix.InfoObject"></a>

The object provides metadata about the API.

The metadata MAY be used by the clients if needed, and MAY be presented in editing or documentation generation tools for convenience.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.InfoObject.Initializer"></a>

```typescript
import { InfoObject } from '@alma-cdk/openapix'

const infoObject: InfoObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.InfoObject.property.title">title</a></code> | <code>string</code> | The title of the API. |
| <code><a href="#@alma-cdk/openapix.InfoObject.property.version">version</a></code> | <code>string</code> | The version of the OpenAPI document (which is distinct from the OpenAPI Specification version or the API implementation version). |
| <code><a href="#@alma-cdk/openapix.InfoObject.property.contact">contact</a></code> | <code><a href="#@alma-cdk/openapix.ContactObject">ContactObject</a></code> | The contact information for the exposed API. |
| <code><a href="#@alma-cdk/openapix.InfoObject.property.description">description</a></code> | <code>string</code> | A short description of the API. |
| <code><a href="#@alma-cdk/openapix.InfoObject.property.license">license</a></code> | <code><a href="#@alma-cdk/openapix.LicenseObject">LicenseObject</a></code> | The license information for the exposed API. |
| <code><a href="#@alma-cdk/openapix.InfoObject.property.termsOfService">termsOfService</a></code> | <code>string</code> | A URL to the Terms of Service for the API. |

---

##### `title`<sup>Required</sup> <a name="title" id="@alma-cdk/openapix.InfoObject.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title of the API.

---

##### `version`<sup>Required</sup> <a name="version" id="@alma-cdk/openapix.InfoObject.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version of the OpenAPI document (which is distinct from the OpenAPI Specification version or the API implementation version).

---

##### `contact`<sup>Optional</sup> <a name="contact" id="@alma-cdk/openapix.InfoObject.property.contact"></a>

```typescript
public readonly contact: ContactObject;
```

- *Type:* <a href="#@alma-cdk/openapix.ContactObject">ContactObject</a>

The contact information for the exposed API.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.InfoObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of the API.

CommonMark syntax MAY be used for rich text representation.

---

##### `license`<sup>Optional</sup> <a name="license" id="@alma-cdk/openapix.InfoObject.property.license"></a>

```typescript
public readonly license: LicenseObject;
```

- *Type:* <a href="#@alma-cdk/openapix.LicenseObject">LicenseObject</a>

The license information for the exposed API.

---

##### `termsOfService`<sup>Optional</sup> <a name="termsOfService" id="@alma-cdk/openapix.InfoObject.property.termsOfService"></a>

```typescript
public readonly termsOfService: string;
```

- *Type:* string

A URL to the Terms of Service for the API.

MUST be in the format of a URL.

---

### IntegrationConfig <a name="IntegrationConfig" id="@alma-cdk/openapix.IntegrationConfig"></a>

Base integration config.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.IntegrationConfig.Initializer"></a>

```typescript
import { IntegrationConfig } from '@alma-cdk/openapix'

const integrationConfig: IntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IntegrationConfig.property.validator">validator</a></code> | <code>string</code> | Validator identifier for method integration. This will override the default validator if one configured. |
| <code><a href="#@alma-cdk/openapix.IntegrationConfig.property.type">type</a></code> | <code><a href="#@alma-cdk/openapix.InternalIntegrationType">InternalIntegrationType</a></code> | *No description.* |

---

##### `validator`<sup>Optional</sup> <a name="validator" id="@alma-cdk/openapix.IntegrationConfig.property.validator"></a>

```typescript
public readonly validator: string;
```

- *Type:* string

Validator identifier for method integration. This will override the default validator if one configured.

Should match a key from OpenApi schema `components.securitySchemas`.

---

##### `type`<sup>Required</sup> <a name="type" id="@alma-cdk/openapix.IntegrationConfig.property.type"></a>

```typescript
public readonly type: InternalIntegrationType;
```

- *Type:* <a href="#@alma-cdk/openapix.InternalIntegrationType">InternalIntegrationType</a>

---

### LambdaAuthorizerProps <a name="LambdaAuthorizerProps" id="@alma-cdk/openapix.LambdaAuthorizerProps"></a>

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.LambdaAuthorizerProps.Initializer"></a>

```typescript
import { LambdaAuthorizerProps } from '@alma-cdk/openapix'

const lambdaAuthorizerProps: LambdaAuthorizerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.LambdaAuthorizerProps.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.LambdaAuthorizerProps.property.fn">fn</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.LambdaAuthorizerProps.property.identitySource">identitySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.LambdaAuthorizerProps.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.LambdaAuthorizerProps.property.resultsCacheTtl">resultsCacheTtl</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |

---

##### `authType`<sup>Required</sup> <a name="authType" id="@alma-cdk/openapix.LambdaAuthorizerProps.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `fn`<sup>Required</sup> <a name="fn" id="@alma-cdk/openapix.LambdaAuthorizerProps.property.fn"></a>

```typescript
public readonly fn: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---

##### `identitySource`<sup>Required</sup> <a name="identitySource" id="@alma-cdk/openapix.LambdaAuthorizerProps.property.identitySource"></a>

```typescript
public readonly identitySource: string;
```

- *Type:* string

---

*Example*

```typescript
apigateway.IdentitySource.header('Authorization')
```


##### `type`<sup>Required</sup> <a name="type" id="@alma-cdk/openapix.LambdaAuthorizerProps.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `resultsCacheTtl`<sup>Optional</sup> <a name="resultsCacheTtl" id="@alma-cdk/openapix.LambdaAuthorizerProps.property.resultsCacheTtl"></a>

```typescript
public readonly resultsCacheTtl: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

### LambdaIntegrationOptions <a name="LambdaIntegrationOptions" id="@alma-cdk/openapix.LambdaIntegrationOptions"></a>

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.LambdaIntegrationOptions.Initializer"></a>

```typescript
import { LambdaIntegrationOptions } from '@alma-cdk/openapix'

const lambdaIntegrationOptions: LambdaIntegrationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.LambdaIntegrationOptions.property.cacheKeyParameters">cacheKeyParameters</a></code> | <code>string[]</code> | A list of request parameters whose values are to be cached. |
| <code><a href="#@alma-cdk/openapix.LambdaIntegrationOptions.property.cacheNamespace">cacheNamespace</a></code> | <code>string</code> | An API-specific tag group of related cached parameters. |
| <code><a href="#@alma-cdk/openapix.LambdaIntegrationOptions.property.connectionType">connectionType</a></code> | <code>aws-cdk-lib.aws_apigateway.ConnectionType</code> | The type of network connection to the integration endpoint. |
| <code><a href="#@alma-cdk/openapix.LambdaIntegrationOptions.property.contentHandling">contentHandling</a></code> | <code>aws-cdk-lib.aws_apigateway.ContentHandling</code> | Specifies how to handle request payload content type conversions. |
| <code><a href="#@alma-cdk/openapix.LambdaIntegrationOptions.property.credentialsPassthrough">credentialsPassthrough</a></code> | <code>boolean</code> | Requires that the caller's identity be passed through from the request. |
| <code><a href="#@alma-cdk/openapix.LambdaIntegrationOptions.property.credentialsRole">credentialsRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | An IAM role that API Gateway assumes. |
| <code><a href="#@alma-cdk/openapix.LambdaIntegrationOptions.property.integrationResponses">integrationResponses</a></code> | <code>aws-cdk-lib.aws_apigateway.IntegrationResponse[]</code> | The response that API Gateway provides after a method's backend completes processing a request. |
| <code><a href="#@alma-cdk/openapix.LambdaIntegrationOptions.property.passthroughBehavior">passthroughBehavior</a></code> | <code>aws-cdk-lib.aws_apigateway.PassthroughBehavior</code> | Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. |
| <code><a href="#@alma-cdk/openapix.LambdaIntegrationOptions.property.requestParameters">requestParameters</a></code> | <code>{[ key: string ]: string}</code> | The request parameters that API Gateway sends with the backend request. |
| <code><a href="#@alma-cdk/openapix.LambdaIntegrationOptions.property.requestTemplates">requestTemplates</a></code> | <code>{[ key: string ]: string}</code> | A map of Apache Velocity templates that are applied on the request payload. |
| <code><a href="#@alma-cdk/openapix.LambdaIntegrationOptions.property.responseTransferMode">responseTransferMode</a></code> | <code>aws-cdk-lib.aws_apigateway.ResponseTransferMode</code> | The response transfer mode for the integration. |
| <code><a href="#@alma-cdk/openapix.LambdaIntegrationOptions.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum amount of time an integration will run before it returns without a response. |
| <code><a href="#@alma-cdk/openapix.LambdaIntegrationOptions.property.vpcLink">vpcLink</a></code> | <code>aws-cdk-lib.aws_apigateway.IVpcLink</code> | The VpcLink used for the integration. |
| <code><a href="#@alma-cdk/openapix.LambdaIntegrationOptions.property.allowTestInvoke">allowTestInvoke</a></code> | <code>boolean</code> | Allow invoking method from AWS Console UI (for testing purposes). |
| <code><a href="#@alma-cdk/openapix.LambdaIntegrationOptions.property.proxy">proxy</a></code> | <code>boolean</code> | Use proxy integration or normal (request/response mapping) integration. |
| <code><a href="#@alma-cdk/openapix.LambdaIntegrationOptions.property.scopePermissionToMethod">scopePermissionToMethod</a></code> | <code>boolean</code> | Scope the permission for invoking the AWS Lambda down to the specific method associated with this integration. |
| <code><a href="#@alma-cdk/openapix.LambdaIntegrationOptions.property.validator">validator</a></code> | <code>string</code> | Validator identifier for method integration. This will override the default validator if one configured. |

---

##### `cacheKeyParameters`<sup>Optional</sup> <a name="cacheKeyParameters" id="@alma-cdk/openapix.LambdaIntegrationOptions.property.cacheKeyParameters"></a>

```typescript
public readonly cacheKeyParameters: string[];
```

- *Type:* string[]

A list of request parameters whose values are to be cached.

It determines
request parameters that will make it into the cache key.

---

##### `cacheNamespace`<sup>Optional</sup> <a name="cacheNamespace" id="@alma-cdk/openapix.LambdaIntegrationOptions.property.cacheNamespace"></a>

```typescript
public readonly cacheNamespace: string;
```

- *Type:* string

An API-specific tag group of related cached parameters.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@alma-cdk/openapix.LambdaIntegrationOptions.property.connectionType"></a>

```typescript
public readonly connectionType: ConnectionType;
```

- *Type:* aws-cdk-lib.aws_apigateway.ConnectionType
- *Default:* ConnectionType.VPC_LINK if `vpcLink` property is configured; ConnectionType.Internet otherwise.

The type of network connection to the integration endpoint.

---

##### `contentHandling`<sup>Optional</sup> <a name="contentHandling" id="@alma-cdk/openapix.LambdaIntegrationOptions.property.contentHandling"></a>

```typescript
public readonly contentHandling: ContentHandling;
```

- *Type:* aws-cdk-lib.aws_apigateway.ContentHandling
- *Default:* none if this property isn't defined, the request payload is passed through from the method request to the integration request without modification, provided that the `passthroughBehaviors` property is configured to support payload pass-through.

Specifies how to handle request payload content type conversions.

---

##### `credentialsPassthrough`<sup>Optional</sup> <a name="credentialsPassthrough" id="@alma-cdk/openapix.LambdaIntegrationOptions.property.credentialsPassthrough"></a>

```typescript
public readonly credentialsPassthrough: boolean;
```

- *Type:* boolean
- *Default:* Caller identity is not passed through

Requires that the caller's identity be passed through from the request.

---

##### `credentialsRole`<sup>Optional</sup> <a name="credentialsRole" id="@alma-cdk/openapix.LambdaIntegrationOptions.property.credentialsRole"></a>

```typescript
public readonly credentialsRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A role is not assumed

An IAM role that API Gateway assumes.

Mutually exclusive with `credentialsPassThrough`.

---

##### `integrationResponses`<sup>Optional</sup> <a name="integrationResponses" id="@alma-cdk/openapix.LambdaIntegrationOptions.property.integrationResponses"></a>

```typescript
public readonly integrationResponses: IntegrationResponse[];
```

- *Type:* aws-cdk-lib.aws_apigateway.IntegrationResponse[]

The response that API Gateway provides after a method's backend completes processing a request.

API Gateway intercepts the response from the
backend so that you can control how API Gateway surfaces backend
responses. For example, you can map the backend status codes to codes
that you define.

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="passthroughBehavior" id="@alma-cdk/openapix.LambdaIntegrationOptions.property.passthroughBehavior"></a>

```typescript
public readonly passthroughBehavior: PassthroughBehavior;
```

- *Type:* aws-cdk-lib.aws_apigateway.PassthroughBehavior

Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource.

There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and
NEVER.

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@alma-cdk/openapix.LambdaIntegrationOptions.property.requestParameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The request parameters that API Gateway sends with the backend request.

Specify request parameters as key-value pairs (string-to-string
mappings), with a destination as the key and a source as the value.

Specify the destination by using the following pattern
integration.request.location.name, where location is querystring, path,
or header, and name is a valid, unique parameter name.

The source must be an existing method request parameter or a static
value. You must enclose static values in single quotation marks and
pre-encode these values based on their destination in the request.

---

##### `requestTemplates`<sup>Optional</sup> <a name="requestTemplates" id="@alma-cdk/openapix.LambdaIntegrationOptions.property.requestTemplates"></a>

```typescript
public readonly requestTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of Apache Velocity templates that are applied on the request payload.

The template that API Gateway uses is based on the value of the
Content-Type header that's sent by the client. The content type value is
the key, and the template is the value (specified as a string), such as
the following snippet:

```
  { "application/json": "{ \"statusCode\": 200 }" }
```

> [https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html)

---

##### `responseTransferMode`<sup>Optional</sup> <a name="responseTransferMode" id="@alma-cdk/openapix.LambdaIntegrationOptions.property.responseTransferMode"></a>

```typescript
public readonly responseTransferMode: ResponseTransferMode;
```

- *Type:* aws-cdk-lib.aws_apigateway.ResponseTransferMode
- *Default:* ResponseTransferMode.BUFFERED

The response transfer mode for the integration.

To enable response streaming, set this value to `ResponseTransferMode.STREAM`.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@alma-cdk/openapix.LambdaIntegrationOptions.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(29)

The maximum amount of time an integration will run before it returns without a response.

By default, the value must be between 50 milliseconds and 29 seconds.
The upper bound can be increased for regional and private Rest APIs only,
via a quota increase request for your account.
This increase might require a reduction in your account-level throttle quota limit.

See {@link https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html Amazon API Gateway quotas} for more details.

---

##### `vpcLink`<sup>Optional</sup> <a name="vpcLink" id="@alma-cdk/openapix.LambdaIntegrationOptions.property.vpcLink"></a>

```typescript
public readonly vpcLink: IVpcLink;
```

- *Type:* aws-cdk-lib.aws_apigateway.IVpcLink

The VpcLink used for the integration.

Required if connectionType is VPC_LINK

---

##### `allowTestInvoke`<sup>Optional</sup> <a name="allowTestInvoke" id="@alma-cdk/openapix.LambdaIntegrationOptions.property.allowTestInvoke"></a>

```typescript
public readonly allowTestInvoke: boolean;
```

- *Type:* boolean
- *Default:* true

Allow invoking method from AWS Console UI (for testing purposes).

This will add another permission to the AWS Lambda resource policy which
will allow the `test-invoke-stage` stage to invoke this handler. If this
is set to `false`, the function will only be usable from the deployment
endpoint.

Note that this property is ignored when `scopePermissionToMethod` is `false`.

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@alma-cdk/openapix.LambdaIntegrationOptions.property.proxy"></a>

```typescript
public readonly proxy: boolean;
```

- *Type:* boolean
- *Default:* true

Use proxy integration or normal (request/response mapping) integration.

> [https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-output-format](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-output-format)

---

##### `scopePermissionToMethod`<sup>Optional</sup> <a name="scopePermissionToMethod" id="@alma-cdk/openapix.LambdaIntegrationOptions.property.scopePermissionToMethod"></a>

```typescript
public readonly scopePermissionToMethod: boolean;
```

- *Type:* boolean
- *Default:* true

Scope the permission for invoking the AWS Lambda down to the specific method associated with this integration.

If this is set to `false`, the permission will allow invoking the AWS Lambda
from any method. This is useful for reducing the AWS Lambda policy size
for cases where the same AWS Lambda function is reused for many integrations.

Note that this will always allow test invocations.

---

##### `validator`<sup>Optional</sup> <a name="validator" id="@alma-cdk/openapix.LambdaIntegrationOptions.property.validator"></a>

```typescript
public readonly validator: string;
```

- *Type:* string

Validator identifier for method integration. This will override the default validator if one configured.

Should match a key from OpenApi schema `components.securitySchemas`.

---

### LicenseObject <a name="LicenseObject" id="@alma-cdk/openapix.LicenseObject"></a>

The license information for the exposed API.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.LicenseObject.Initializer"></a>

```typescript
import { LicenseObject } from '@alma-cdk/openapix'

const licenseObject: LicenseObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.LicenseObject.property.name">name</a></code> | <code>string</code> | The license name used for the API. |
| <code><a href="#@alma-cdk/openapix.LicenseObject.property.url">url</a></code> | <code>string</code> | A URL to the license used for the API. |

---

##### `name`<sup>Required</sup> <a name="name" id="@alma-cdk/openapix.LicenseObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The license name used for the API.

---

##### `url`<sup>Optional</sup> <a name="url" id="@alma-cdk/openapix.LicenseObject.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

A URL to the license used for the API.

MUST be in the format of a URL.

---

### LinkObject <a name="LinkObject" id="@alma-cdk/openapix.LinkObject"></a>

The Link object represents a possible design-time link for a response.

The presence of a link does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.
Unlike dynamic links (i.e. links provided in the response payload), the OAS linking mechanism does not require link information in the runtime response.
For computing links, and providing instructions to execute them, a runtime expression is used for accessing values in an operation and using them as parameters while invoking the linked operation.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.LinkObject.Initializer"></a>

```typescript
import { LinkObject } from '@alma-cdk/openapix'

const linkObject: LinkObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.LinkObject.property.description">description</a></code> | <code>string</code> | A description of the link. |
| <code><a href="#@alma-cdk/openapix.LinkObject.property.operationId">operationId</a></code> | <code>string</code> | The name of an existing, resolvable OAS operation, as defined with a unique operationId. |
| <code><a href="#@alma-cdk/openapix.LinkObject.property.operationRef">operationRef</a></code> | <code>string</code> | A relative or absolute URI reference to an OAS operation. |
| <code><a href="#@alma-cdk/openapix.LinkObject.property.parameters">parameters</a></code> | <code>{[ key: string ]: any}</code> | A map representing parameters to pass to an operation as specified with operationId or identified via operationRef. |
| <code><a href="#@alma-cdk/openapix.LinkObject.property.requestBody">requestBody</a></code> | <code>any</code> | A literal value or {expression} to use as a request body when calling the target operation. |
| <code><a href="#@alma-cdk/openapix.LinkObject.property.server">server</a></code> | <code><a href="#@alma-cdk/openapix.ServerObject">ServerObject</a></code> | A server object to be used by the target operation. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.LinkObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the link.

CommonMark syntax MAY be used for rich text representation.

---

##### `operationId`<sup>Optional</sup> <a name="operationId" id="@alma-cdk/openapix.LinkObject.property.operationId"></a>

```typescript
public readonly operationId: string;
```

- *Type:* string

The name of an existing, resolvable OAS operation, as defined with a unique operationId.

This field is mutually exclusive of the operationRef field.

---

##### `operationRef`<sup>Optional</sup> <a name="operationRef" id="@alma-cdk/openapix.LinkObject.property.operationRef"></a>

```typescript
public readonly operationRef: string;
```

- *Type:* string

A relative or absolute URI reference to an OAS operation.

This field is mutually exclusive of the operationId field, and MUST point to an Operation Object. Relative operationRef values MAY be used to locate an existing Operation Object in the OpenAPI definition.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@alma-cdk/openapix.LinkObject.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

A map representing parameters to pass to an operation as specified with operationId or identified via operationRef.

The key is the parameter name to be used, whereas the value can be a constant or an expression to be evaluated and passed to the linked operation. The parameter name can be qualified using the parameter location [{in}.]{name} for operations that use the same parameter name in different locations (e.g. path.id).

---

##### `requestBody`<sup>Optional</sup> <a name="requestBody" id="@alma-cdk/openapix.LinkObject.property.requestBody"></a>

```typescript
public readonly requestBody: any;
```

- *Type:* any

A literal value or {expression} to use as a request body when calling the target operation.

---

##### `server`<sup>Optional</sup> <a name="server" id="@alma-cdk/openapix.LinkObject.property.server"></a>

```typescript
public readonly server: ServerObject;
```

- *Type:* <a href="#@alma-cdk/openapix.ServerObject">ServerObject</a>

A server object to be used by the target operation.

---

### MediaTypeObject <a name="MediaTypeObject" id="@alma-cdk/openapix.MediaTypeObject"></a>

Each Media Type Object provides schema and examples for the media type identified by its key.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.MediaTypeObject.Initializer"></a>

```typescript
import { MediaTypeObject } from '@alma-cdk/openapix'

const mediaTypeObject: MediaTypeObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.MediaTypeObject.property.encoding">encoding</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.EncodingObject">EncodingObject</a>}</code> | A map between a property name and its encoding information. |
| <code><a href="#@alma-cdk/openapix.MediaTypeObject.property.example">example</a></code> | <code>any</code> | Example of the media type. |
| <code><a href="#@alma-cdk/openapix.MediaTypeObject.property.examples">examples</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.ExampleObject">ExampleObject</a>}</code> | Examples of the media type. |
| <code><a href="#@alma-cdk/openapix.MediaTypeObject.property.schema">schema</a></code> | <code><a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.SchemaObject">SchemaObject</a></code> | The schema defining the content of the request, response, or parameter. |

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@alma-cdk/openapix.MediaTypeObject.property.encoding"></a>

```typescript
public readonly encoding: {[ key: string ]: EncodingObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.EncodingObject">EncodingObject</a>}

A map between a property name and its encoding information.

The key, being the property name, MUST exist in the schema as a property. The encoding object SHALL only apply to requestBody objects when the media type is multipart or application/x-www-form-urlencoded.

---

##### `example`<sup>Optional</sup> <a name="example" id="@alma-cdk/openapix.MediaTypeObject.property.example"></a>

```typescript
public readonly example: any;
```

- *Type:* any

Example of the media type.

The example object SHOULD be in the correct format as specified by the media type. The example field is mutually exclusive of the examples field. Furthermore, if referencing a schema which contains an example, the example value SHALL override the example provided by the schema.

---

##### `examples`<sup>Optional</sup> <a name="examples" id="@alma-cdk/openapix.MediaTypeObject.property.examples"></a>

```typescript
public readonly examples: {[ key: string ]: ReferenceObject | ExampleObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.ExampleObject">ExampleObject</a>}

Examples of the media type.

Each example object SHOULD match the media type and specified schema if present. The examples field is mutually exclusive of the example field. Furthermore, if referencing a schema which contains an example, the examples value SHALL override the example provided by the schema.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@alma-cdk/openapix.MediaTypeObject.property.schema"></a>

```typescript
public readonly schema: ReferenceObject | SchemaObject;
```

- *Type:* <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.SchemaObject">SchemaObject</a>

The schema defining the content of the request, response, or parameter.

---

### MockIntegrationProps <a name="MockIntegrationProps" id="@alma-cdk/openapix.MockIntegrationProps"></a>

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.MockIntegrationProps.Initializer"></a>

```typescript
import { MockIntegrationProps } from '@alma-cdk/openapix'

const mockIntegrationProps: MockIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.MockIntegrationProps.property.cacheKeyParameters">cacheKeyParameters</a></code> | <code>string[]</code> | A list of request parameters whose values are to be cached. |
| <code><a href="#@alma-cdk/openapix.MockIntegrationProps.property.cacheNamespace">cacheNamespace</a></code> | <code>string</code> | An API-specific tag group of related cached parameters. |
| <code><a href="#@alma-cdk/openapix.MockIntegrationProps.property.connectionType">connectionType</a></code> | <code>aws-cdk-lib.aws_apigateway.ConnectionType</code> | The type of network connection to the integration endpoint. |
| <code><a href="#@alma-cdk/openapix.MockIntegrationProps.property.contentHandling">contentHandling</a></code> | <code>aws-cdk-lib.aws_apigateway.ContentHandling</code> | Specifies how to handle request payload content type conversions. |
| <code><a href="#@alma-cdk/openapix.MockIntegrationProps.property.credentialsPassthrough">credentialsPassthrough</a></code> | <code>boolean</code> | Requires that the caller's identity be passed through from the request. |
| <code><a href="#@alma-cdk/openapix.MockIntegrationProps.property.credentialsRole">credentialsRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | An IAM role that API Gateway assumes. |
| <code><a href="#@alma-cdk/openapix.MockIntegrationProps.property.integrationResponses">integrationResponses</a></code> | <code>aws-cdk-lib.aws_apigateway.IntegrationResponse[]</code> | The response that API Gateway provides after a method's backend completes processing a request. |
| <code><a href="#@alma-cdk/openapix.MockIntegrationProps.property.passthroughBehavior">passthroughBehavior</a></code> | <code>aws-cdk-lib.aws_apigateway.PassthroughBehavior</code> | Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. |
| <code><a href="#@alma-cdk/openapix.MockIntegrationProps.property.requestParameters">requestParameters</a></code> | <code>{[ key: string ]: string}</code> | The request parameters that API Gateway sends with the backend request. |
| <code><a href="#@alma-cdk/openapix.MockIntegrationProps.property.requestTemplates">requestTemplates</a></code> | <code>{[ key: string ]: string}</code> | A map of Apache Velocity templates that are applied on the request payload. |
| <code><a href="#@alma-cdk/openapix.MockIntegrationProps.property.responseTransferMode">responseTransferMode</a></code> | <code>aws-cdk-lib.aws_apigateway.ResponseTransferMode</code> | The response transfer mode for the integration. |
| <code><a href="#@alma-cdk/openapix.MockIntegrationProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum amount of time an integration will run before it returns without a response. |
| <code><a href="#@alma-cdk/openapix.MockIntegrationProps.property.vpcLink">vpcLink</a></code> | <code>aws-cdk-lib.aws_apigateway.IVpcLink</code> | The VpcLink used for the integration. |
| <code><a href="#@alma-cdk/openapix.MockIntegrationProps.property.validator">validator</a></code> | <code>string</code> | Validator identifier for method integration. This will override the default validator if one configured. |

---

##### `cacheKeyParameters`<sup>Optional</sup> <a name="cacheKeyParameters" id="@alma-cdk/openapix.MockIntegrationProps.property.cacheKeyParameters"></a>

```typescript
public readonly cacheKeyParameters: string[];
```

- *Type:* string[]

A list of request parameters whose values are to be cached.

It determines
request parameters that will make it into the cache key.

---

##### `cacheNamespace`<sup>Optional</sup> <a name="cacheNamespace" id="@alma-cdk/openapix.MockIntegrationProps.property.cacheNamespace"></a>

```typescript
public readonly cacheNamespace: string;
```

- *Type:* string

An API-specific tag group of related cached parameters.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@alma-cdk/openapix.MockIntegrationProps.property.connectionType"></a>

```typescript
public readonly connectionType: ConnectionType;
```

- *Type:* aws-cdk-lib.aws_apigateway.ConnectionType
- *Default:* ConnectionType.VPC_LINK if `vpcLink` property is configured; ConnectionType.Internet otherwise.

The type of network connection to the integration endpoint.

---

##### `contentHandling`<sup>Optional</sup> <a name="contentHandling" id="@alma-cdk/openapix.MockIntegrationProps.property.contentHandling"></a>

```typescript
public readonly contentHandling: ContentHandling;
```

- *Type:* aws-cdk-lib.aws_apigateway.ContentHandling
- *Default:* none if this property isn't defined, the request payload is passed through from the method request to the integration request without modification, provided that the `passthroughBehaviors` property is configured to support payload pass-through.

Specifies how to handle request payload content type conversions.

---

##### `credentialsPassthrough`<sup>Optional</sup> <a name="credentialsPassthrough" id="@alma-cdk/openapix.MockIntegrationProps.property.credentialsPassthrough"></a>

```typescript
public readonly credentialsPassthrough: boolean;
```

- *Type:* boolean
- *Default:* Caller identity is not passed through

Requires that the caller's identity be passed through from the request.

---

##### `credentialsRole`<sup>Optional</sup> <a name="credentialsRole" id="@alma-cdk/openapix.MockIntegrationProps.property.credentialsRole"></a>

```typescript
public readonly credentialsRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A role is not assumed

An IAM role that API Gateway assumes.

Mutually exclusive with `credentialsPassThrough`.

---

##### `integrationResponses`<sup>Optional</sup> <a name="integrationResponses" id="@alma-cdk/openapix.MockIntegrationProps.property.integrationResponses"></a>

```typescript
public readonly integrationResponses: IntegrationResponse[];
```

- *Type:* aws-cdk-lib.aws_apigateway.IntegrationResponse[]

The response that API Gateway provides after a method's backend completes processing a request.

API Gateway intercepts the response from the
backend so that you can control how API Gateway surfaces backend
responses. For example, you can map the backend status codes to codes
that you define.

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="passthroughBehavior" id="@alma-cdk/openapix.MockIntegrationProps.property.passthroughBehavior"></a>

```typescript
public readonly passthroughBehavior: PassthroughBehavior;
```

- *Type:* aws-cdk-lib.aws_apigateway.PassthroughBehavior

Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource.

There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and
NEVER.

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@alma-cdk/openapix.MockIntegrationProps.property.requestParameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The request parameters that API Gateway sends with the backend request.

Specify request parameters as key-value pairs (string-to-string
mappings), with a destination as the key and a source as the value.

Specify the destination by using the following pattern
integration.request.location.name, where location is querystring, path,
or header, and name is a valid, unique parameter name.

The source must be an existing method request parameter or a static
value. You must enclose static values in single quotation marks and
pre-encode these values based on their destination in the request.

---

##### `requestTemplates`<sup>Optional</sup> <a name="requestTemplates" id="@alma-cdk/openapix.MockIntegrationProps.property.requestTemplates"></a>

```typescript
public readonly requestTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of Apache Velocity templates that are applied on the request payload.

The template that API Gateway uses is based on the value of the
Content-Type header that's sent by the client. The content type value is
the key, and the template is the value (specified as a string), such as
the following snippet:

```
  { "application/json": "{ \"statusCode\": 200 }" }
```

> [https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html)

---

##### `responseTransferMode`<sup>Optional</sup> <a name="responseTransferMode" id="@alma-cdk/openapix.MockIntegrationProps.property.responseTransferMode"></a>

```typescript
public readonly responseTransferMode: ResponseTransferMode;
```

- *Type:* aws-cdk-lib.aws_apigateway.ResponseTransferMode
- *Default:* ResponseTransferMode.BUFFERED

The response transfer mode for the integration.

To enable response streaming, set this value to `ResponseTransferMode.STREAM`.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@alma-cdk/openapix.MockIntegrationProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(29)

The maximum amount of time an integration will run before it returns without a response.

By default, the value must be between 50 milliseconds and 29 seconds.
The upper bound can be increased for regional and private Rest APIs only,
via a quota increase request for your account.
This increase might require a reduction in your account-level throttle quota limit.

See {@link https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html Amazon API Gateway quotas} for more details.

---

##### `vpcLink`<sup>Optional</sup> <a name="vpcLink" id="@alma-cdk/openapix.MockIntegrationProps.property.vpcLink"></a>

```typescript
public readonly vpcLink: IVpcLink;
```

- *Type:* aws-cdk-lib.aws_apigateway.IVpcLink

The VpcLink used for the integration.

Required if connectionType is VPC_LINK

---

##### `validator`<sup>Optional</sup> <a name="validator" id="@alma-cdk/openapix.MockIntegrationProps.property.validator"></a>

```typescript
public readonly validator: string;
```

- *Type:* string

Validator identifier for method integration. This will override the default validator if one configured.

Should match a key from OpenApi schema `components.securitySchemas`.

---

### OAuthFlowObject <a name="OAuthFlowObject" id="@alma-cdk/openapix.OAuthFlowObject"></a>

Configuration details for a supported OAuth Flow.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.OAuthFlowObject.Initializer"></a>

```typescript
import { OAuthFlowObject } from '@alma-cdk/openapix'

const oAuthFlowObject: OAuthFlowObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.OAuthFlowObject.property.scopes">scopes</a></code> | <code>{[ key: string ]: string}</code> | The available scopes for the OAuth2 security scheme. |
| <code><a href="#@alma-cdk/openapix.OAuthFlowObject.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | The authorization URL to be used for this flow. |
| <code><a href="#@alma-cdk/openapix.OAuthFlowObject.property.refreshUrl">refreshUrl</a></code> | <code>string</code> | The URL to be used for obtaining refresh tokens. |
| <code><a href="#@alma-cdk/openapix.OAuthFlowObject.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | The token URL to be used for this flow. |

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@alma-cdk/openapix.OAuthFlowObject.property.scopes"></a>

```typescript
public readonly scopes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The available scopes for the OAuth2 security scheme.

A map between the scope name and a short description for it. The map MAY be empty.

---

##### `authorizationUrl`<sup>Optional</sup> <a name="authorizationUrl" id="@alma-cdk/openapix.OAuthFlowObject.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

The authorization URL to be used for this flow.

This MUST be in the form of a URL.
REQUIRED for oauth2 ("implicit", "authorizationCode").

---

##### `refreshUrl`<sup>Optional</sup> <a name="refreshUrl" id="@alma-cdk/openapix.OAuthFlowObject.property.refreshUrl"></a>

```typescript
public readonly refreshUrl: string;
```

- *Type:* string

The URL to be used for obtaining refresh tokens.

This MUST be in the form of a URL.

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="@alma-cdk/openapix.OAuthFlowObject.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

The token URL to be used for this flow.

This MUST be in the form of a URL.
REQUIRED for oauth2 ("password", "clientCredentials", "authorizationCode").

---

### OAuthFlowsObject <a name="OAuthFlowsObject" id="@alma-cdk/openapix.OAuthFlowsObject"></a>

Allows configuration of the supported OAuth Flows.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.OAuthFlowsObject.Initializer"></a>

```typescript
import { OAuthFlowsObject } from '@alma-cdk/openapix'

const oAuthFlowsObject: OAuthFlowsObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.OAuthFlowsObject.property.authorizationCode">authorizationCode</a></code> | <code><a href="#@alma-cdk/openapix.OAuthFlowObject">OAuthFlowObject</a></code> | Configuration for the OAuth Authorization Code flow. |
| <code><a href="#@alma-cdk/openapix.OAuthFlowsObject.property.clientCredentials">clientCredentials</a></code> | <code><a href="#@alma-cdk/openapix.OAuthFlowObject">OAuthFlowObject</a></code> | Configuration for the OAuth Client Credentials flow. |
| <code><a href="#@alma-cdk/openapix.OAuthFlowsObject.property.implicit">implicit</a></code> | <code><a href="#@alma-cdk/openapix.OAuthFlowObject">OAuthFlowObject</a></code> | Configuration for the OAuth Implicit flow. |
| <code><a href="#@alma-cdk/openapix.OAuthFlowsObject.property.password">password</a></code> | <code><a href="#@alma-cdk/openapix.OAuthFlowObject">OAuthFlowObject</a></code> | Configuration for the OAuth Resource Owner Password flow. |

---

##### `authorizationCode`<sup>Optional</sup> <a name="authorizationCode" id="@alma-cdk/openapix.OAuthFlowsObject.property.authorizationCode"></a>

```typescript
public readonly authorizationCode: OAuthFlowObject;
```

- *Type:* <a href="#@alma-cdk/openapix.OAuthFlowObject">OAuthFlowObject</a>

Configuration for the OAuth Authorization Code flow.

Previously called accessCode in OpenAPI 2.0.

---

##### `clientCredentials`<sup>Optional</sup> <a name="clientCredentials" id="@alma-cdk/openapix.OAuthFlowsObject.property.clientCredentials"></a>

```typescript
public readonly clientCredentials: OAuthFlowObject;
```

- *Type:* <a href="#@alma-cdk/openapix.OAuthFlowObject">OAuthFlowObject</a>

Configuration for the OAuth Client Credentials flow.

Previously called application in OpenAPI 2.0.

---

##### `implicit`<sup>Optional</sup> <a name="implicit" id="@alma-cdk/openapix.OAuthFlowsObject.property.implicit"></a>

```typescript
public readonly implicit: OAuthFlowObject;
```

- *Type:* <a href="#@alma-cdk/openapix.OAuthFlowObject">OAuthFlowObject</a>

Configuration for the OAuth Implicit flow.

---

##### `password`<sup>Optional</sup> <a name="password" id="@alma-cdk/openapix.OAuthFlowsObject.property.password"></a>

```typescript
public readonly password: OAuthFlowObject;
```

- *Type:* <a href="#@alma-cdk/openapix.OAuthFlowObject">OAuthFlowObject</a>

Configuration for the OAuth Resource Owner Password flow.

---

### OperationObject <a name="OperationObject" id="@alma-cdk/openapix.OperationObject"></a>

Describes a single API operation on a path.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.OperationObject.Initializer"></a>

```typescript
import { OperationObject } from '@alma-cdk/openapix'

const operationObject: OperationObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.OperationObject.property.responses">responses</a></code> | <code><a href="#@alma-cdk/openapix.ResponsesObject">ResponsesObject</a></code> | The list of possible responses as they are returned from executing this operation. |
| <code><a href="#@alma-cdk/openapix.OperationObject.property.callbacks">callbacks</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.CallbackObject">CallbackObject</a>}</code> | A map of possible out-of band callbacks related to the parent operation. |
| <code><a href="#@alma-cdk/openapix.OperationObject.property.deprecated">deprecated</a></code> | <code>boolean</code> | Declares this operation to be deprecated. |
| <code><a href="#@alma-cdk/openapix.OperationObject.property.description">description</a></code> | <code>string</code> | A verbose explanation of the operation behavior. |
| <code><a href="#@alma-cdk/openapix.OperationObject.property.externalDocs">externalDocs</a></code> | <code><a href="#@alma-cdk/openapix.ExternalDocumentationObject">ExternalDocumentationObject</a></code> | Additional external documentation for this operation. |
| <code><a href="#@alma-cdk/openapix.OperationObject.property.operationId">operationId</a></code> | <code>string</code> | Unique string used to identify the operation. |
| <code><a href="#@alma-cdk/openapix.OperationObject.property.parameters">parameters</a></code> | <code><a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.ParameterObject">ParameterObject</a>[]</code> | A list of parameters that are applicable for this operation. |
| <code><a href="#@alma-cdk/openapix.OperationObject.property.requestBody">requestBody</a></code> | <code><a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.RequestBodyObject">RequestBodyObject</a></code> | The request body applicable for this operation. |
| <code><a href="#@alma-cdk/openapix.OperationObject.property.security">security</a></code> | <code><a href="#@alma-cdk/openapix.SecurityRequirementObject">SecurityRequirementObject</a>[]</code> | A declaration of which security mechanisms can be used for this operation. |
| <code><a href="#@alma-cdk/openapix.OperationObject.property.summary">summary</a></code> | <code>string</code> | A short summary of what the operation does. |
| <code><a href="#@alma-cdk/openapix.OperationObject.property.tags">tags</a></code> | <code>string[]</code> | A list of tags for API documentation control. |

---

##### `responses`<sup>Required</sup> <a name="responses" id="@alma-cdk/openapix.OperationObject.property.responses"></a>

```typescript
public readonly responses: ResponsesObject;
```

- *Type:* <a href="#@alma-cdk/openapix.ResponsesObject">ResponsesObject</a>

The list of possible responses as they are returned from executing this operation.

---

##### `callbacks`<sup>Optional</sup> <a name="callbacks" id="@alma-cdk/openapix.OperationObject.property.callbacks"></a>

```typescript
public readonly callbacks: {[ key: string ]: ReferenceObject | CallbackObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.CallbackObject">CallbackObject</a>}

A map of possible out-of band callbacks related to the parent operation.

The key is a unique identifier for the Callback Object. Each value in the map is a Callback Object that describes a request that may be initiated by the API provider and the expected responses.

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@alma-cdk/openapix.OperationObject.property.deprecated"></a>

```typescript
public readonly deprecated: boolean;
```

- *Type:* boolean

Declares this operation to be deprecated.

Consumers SHOULD refrain from usage of the declared operation. Default value is false.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.OperationObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A verbose explanation of the operation behavior.

CommonMark syntax MAY be used for rich text representation.

---

##### `externalDocs`<sup>Optional</sup> <a name="externalDocs" id="@alma-cdk/openapix.OperationObject.property.externalDocs"></a>

```typescript
public readonly externalDocs: ExternalDocumentationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.ExternalDocumentationObject">ExternalDocumentationObject</a>

Additional external documentation for this operation.

---

##### `operationId`<sup>Optional</sup> <a name="operationId" id="@alma-cdk/openapix.OperationObject.property.operationId"></a>

```typescript
public readonly operationId: string;
```

- *Type:* string

Unique string used to identify the operation.

The id MUST be unique among all operations described in the API. The operationId value is case-sensitive. Tools and libraries MAY use the operationId to uniquely identify an operation, therefore, it is RECOMMENDED to follow common programming naming conventions.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@alma-cdk/openapix.OperationObject.property.parameters"></a>

```typescript
public readonly parameters: (ReferenceObject | ParameterObject)[];
```

- *Type:* <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.ParameterObject">ParameterObject</a>[]

A list of parameters that are applicable for this operation.

If a parameter is already defined at the Path Item, the new definition will override it but can never remove it. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object's components/parameters.

---

##### `requestBody`<sup>Optional</sup> <a name="requestBody" id="@alma-cdk/openapix.OperationObject.property.requestBody"></a>

```typescript
public readonly requestBody: ReferenceObject | RequestBodyObject;
```

- *Type:* <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.RequestBodyObject">RequestBodyObject</a>

The request body applicable for this operation.

The requestBody is only supported in HTTP methods where the HTTP 1.1 specification RFC7231 has explicitly defined semantics for request bodies. In other cases where the HTTP spec is vague, requestBody SHALL be ignored by consumers.

---

##### `security`<sup>Optional</sup> <a name="security" id="@alma-cdk/openapix.OperationObject.property.security"></a>

```typescript
public readonly security: SecurityRequirementObject[];
```

- *Type:* <a href="#@alma-cdk/openapix.SecurityRequirementObject">SecurityRequirementObject</a>[]

A declaration of which security mechanisms can be used for this operation.

The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. To make security optional, an empty security requirement ({}) can be included in the array. This definition overrides any declared top-level security. To remove a top-level security declaration, an empty array can be used.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@alma-cdk/openapix.OperationObject.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

A short summary of what the operation does.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@alma-cdk/openapix.OperationObject.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tags for API documentation control.

Tags can be used for logical grouping of operations by resources or any other qualifier.

---

### ParameterObject <a name="ParameterObject" id="@alma-cdk/openapix.ParameterObject"></a>

Describes a single operation parameter.

A unique parameter is defined by a combination of a name and location.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.ParameterObject.Initializer"></a>

```typescript
import { ParameterObject } from '@alma-cdk/openapix'

const parameterObject: ParameterObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.ParameterObject.property.in">in</a></code> | <code>string</code> | The location of the parameter. |
| <code><a href="#@alma-cdk/openapix.ParameterObject.property.name">name</a></code> | <code>string</code> | The name of the parameter. Parameter names are case sensitive. |
| <code><a href="#@alma-cdk/openapix.ParameterObject.property.allowEmptyValue">allowEmptyValue</a></code> | <code>boolean</code> | Sets the ability to pass empty-valued parameters. |
| <code><a href="#@alma-cdk/openapix.ParameterObject.property.deprecated">deprecated</a></code> | <code>boolean</code> | Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. |
| <code><a href="#@alma-cdk/openapix.ParameterObject.property.description">description</a></code> | <code>string</code> | A brief description of the parameter. |
| <code><a href="#@alma-cdk/openapix.ParameterObject.property.required">required</a></code> | <code>boolean</code> | Determines whether this parameter is mandatory. |

---

##### `in`<sup>Required</sup> <a name="in" id="@alma-cdk/openapix.ParameterObject.property.in"></a>

```typescript
public readonly in: string;
```

- *Type:* string

The location of the parameter.

Possible values are "query", "header", "path" or "cookie".

---

##### `name`<sup>Required</sup> <a name="name" id="@alma-cdk/openapix.ParameterObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the parameter. Parameter names are case sensitive.

If in is "path", the name field MUST correspond to a template expression occurring within the path field in the Paths Object. See Path Templating for further information.
If in is "header" and the name field is "Accept", "Content-Type" or "Authorization", the parameter definition SHALL be ignored.
For all other cases, the name corresponds to the parameter name used by the in property.

---

##### `allowEmptyValue`<sup>Optional</sup> <a name="allowEmptyValue" id="@alma-cdk/openapix.ParameterObject.property.allowEmptyValue"></a>

```typescript
public readonly allowEmptyValue: boolean;
```

- *Type:* boolean

Sets the ability to pass empty-valued parameters.

This is valid only for query parameters and allows sending a parameter with an empty value. Default value is false. If style is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@alma-cdk/openapix.ParameterObject.property.deprecated"></a>

```typescript
public readonly deprecated: boolean;
```

- *Type:* boolean

Specifies that a parameter is deprecated and SHOULD be transitioned out of usage.

Default value is false.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.ParameterObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A brief description of the parameter.

This could contain examples of use. CommonMark syntax MAY be used for rich text representation.

---

##### `required`<sup>Optional</sup> <a name="required" id="@alma-cdk/openapix.ParameterObject.property.required"></a>

```typescript
public readonly required: boolean;
```

- *Type:* boolean

Determines whether this parameter is mandatory.

If the parameter location is "path", this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be included and its default value is false.

---

### PathItemObject <a name="PathItemObject" id="@alma-cdk/openapix.PathItemObject"></a>

Describes the operations available on a single path.

A Path Item MAY be empty, due to ACL constraints. The path itself is still exposed to the documentation viewer but they will not know which operations and parameters are available.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.PathItemObject.Initializer"></a>

```typescript
import { PathItemObject } from '@alma-cdk/openapix'

const pathItemObject: PathItemObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.PathItemObject.property.delete">delete</a></code> | <code><a href="#@alma-cdk/openapix.OperationObject">OperationObject</a></code> | A definition of a DELETE operation on this path. |
| <code><a href="#@alma-cdk/openapix.PathItemObject.property.description">description</a></code> | <code>string</code> | An optional, string description, intended to apply to all operations in this path. |
| <code><a href="#@alma-cdk/openapix.PathItemObject.property.get">get</a></code> | <code><a href="#@alma-cdk/openapix.OperationObject">OperationObject</a></code> | A definition of a GET operation on this path. |
| <code><a href="#@alma-cdk/openapix.PathItemObject.property.head">head</a></code> | <code><a href="#@alma-cdk/openapix.OperationObject">OperationObject</a></code> | A definition of a HEAD operation on this path. |
| <code><a href="#@alma-cdk/openapix.PathItemObject.property.options">options</a></code> | <code><a href="#@alma-cdk/openapix.OperationObject">OperationObject</a></code> | A definition of a OPTIONS operation on this path. |
| <code><a href="#@alma-cdk/openapix.PathItemObject.property.parameters">parameters</a></code> | <code><a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.ParameterObject">ParameterObject</a>[]</code> | A list of parameters that are applicable for all the operations described under this path. |
| <code><a href="#@alma-cdk/openapix.PathItemObject.property.patch">patch</a></code> | <code><a href="#@alma-cdk/openapix.OperationObject">OperationObject</a></code> | A definition of a PATCH operation on this path. |
| <code><a href="#@alma-cdk/openapix.PathItemObject.property.post">post</a></code> | <code><a href="#@alma-cdk/openapix.OperationObject">OperationObject</a></code> | A definition of a POST operation on this path. |
| <code><a href="#@alma-cdk/openapix.PathItemObject.property.put">put</a></code> | <code><a href="#@alma-cdk/openapix.OperationObject">OperationObject</a></code> | A definition of a PUT operation on this path. |
| <code><a href="#@alma-cdk/openapix.PathItemObject.property.summary">summary</a></code> | <code>string</code> | An optional, string summary, intended to apply to all operations in this path. |
| <code><a href="#@alma-cdk/openapix.PathItemObject.property.trace">trace</a></code> | <code><a href="#@alma-cdk/openapix.OperationObject">OperationObject</a></code> | A definition of a TRACE operation on this path. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@alma-cdk/openapix.PathItemObject.property.delete"></a>

```typescript
public readonly delete: OperationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.OperationObject">OperationObject</a>

A definition of a DELETE operation on this path.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.PathItemObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional, string description, intended to apply to all operations in this path.

CommonMark syntax MAY be used for rich text representation.

---

##### `get`<sup>Optional</sup> <a name="get" id="@alma-cdk/openapix.PathItemObject.property.get"></a>

```typescript
public readonly get: OperationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.OperationObject">OperationObject</a>

A definition of a GET operation on this path.

---

##### `head`<sup>Optional</sup> <a name="head" id="@alma-cdk/openapix.PathItemObject.property.head"></a>

```typescript
public readonly head: OperationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.OperationObject">OperationObject</a>

A definition of a HEAD operation on this path.

---

##### `options`<sup>Optional</sup> <a name="options" id="@alma-cdk/openapix.PathItemObject.property.options"></a>

```typescript
public readonly options: OperationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.OperationObject">OperationObject</a>

A definition of a OPTIONS operation on this path.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@alma-cdk/openapix.PathItemObject.property.parameters"></a>

```typescript
public readonly parameters: (ReferenceObject | ParameterObject)[];
```

- *Type:* <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.ParameterObject">ParameterObject</a>[]

A list of parameters that are applicable for all the operations described under this path.

These parameters can be overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object's components/parameters.

---

##### `patch`<sup>Optional</sup> <a name="patch" id="@alma-cdk/openapix.PathItemObject.property.patch"></a>

```typescript
public readonly patch: OperationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.OperationObject">OperationObject</a>

A definition of a PATCH operation on this path.

---

##### `post`<sup>Optional</sup> <a name="post" id="@alma-cdk/openapix.PathItemObject.property.post"></a>

```typescript
public readonly post: OperationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.OperationObject">OperationObject</a>

A definition of a POST operation on this path.

---

##### `put`<sup>Optional</sup> <a name="put" id="@alma-cdk/openapix.PathItemObject.property.put"></a>

```typescript
public readonly put: OperationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.OperationObject">OperationObject</a>

A definition of a PUT operation on this path.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@alma-cdk/openapix.PathItemObject.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

An optional, string summary, intended to apply to all operations in this path.

---

##### `trace`<sup>Optional</sup> <a name="trace" id="@alma-cdk/openapix.PathItemObject.property.trace"></a>

```typescript
public readonly trace: OperationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.OperationObject">OperationObject</a>

A definition of a TRACE operation on this path.

---

### Paths <a name="Paths" id="@alma-cdk/openapix.Paths"></a>

Paths with methods containing integrations.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.Paths.Initializer"></a>

```typescript
import { Paths } from '@alma-cdk/openapix'

const paths: Paths = { ... }
```


### PathsObject <a name="PathsObject" id="@alma-cdk/openapix.PathsObject"></a>

Holds the relative paths to the individual endpoints and their operations.

The path is appended to the URL from the Server Object in order to construct the full URL. The Paths MAY be empty, due to ACL constraints.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.PathsObject.Initializer"></a>

```typescript
import { PathsObject } from '@alma-cdk/openapix'

const pathsObject: PathsObject = { ... }
```


### ReferenceObject <a name="ReferenceObject" id="@alma-cdk/openapix.ReferenceObject"></a>

A simple object to allow referencing other components in the specification, internally and externally.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.ReferenceObject.Initializer"></a>

```typescript
import { ReferenceObject } from '@alma-cdk/openapix'

const referenceObject: ReferenceObject = { ... }
```


### RequestBodyObject <a name="RequestBodyObject" id="@alma-cdk/openapix.RequestBodyObject"></a>

Describes a single request body.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.RequestBodyObject.Initializer"></a>

```typescript
import { RequestBodyObject } from '@alma-cdk/openapix'

const requestBodyObject: RequestBodyObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.RequestBodyObject.property.content">content</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.MediaTypeObject">MediaTypeObject</a>}</code> | The content of the request body. |
| <code><a href="#@alma-cdk/openapix.RequestBodyObject.property.description">description</a></code> | <code>string</code> | A brief description of the request body. |
| <code><a href="#@alma-cdk/openapix.RequestBodyObject.property.required">required</a></code> | <code>boolean</code> | Determines if the request body is required in the request. |

---

##### `content`<sup>Required</sup> <a name="content" id="@alma-cdk/openapix.RequestBodyObject.property.content"></a>

```typescript
public readonly content: {[ key: string ]: MediaTypeObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.MediaTypeObject">MediaTypeObject</a>}

The content of the request body.

The key is a media type or media type range and the value describes it. For requests that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.RequestBodyObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A brief description of the request body.

This could contain examples of use. CommonMark syntax MAY be used for rich text representation.

---

##### `required`<sup>Optional</sup> <a name="required" id="@alma-cdk/openapix.RequestBodyObject.property.required"></a>

```typescript
public readonly required: boolean;
```

- *Type:* boolean

Determines if the request body is required in the request.

Defaults to false.

---

### ResponseObject <a name="ResponseObject" id="@alma-cdk/openapix.ResponseObject"></a>

Describes a single response from an API Operation, including design-time, static links to operations based on the response.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.ResponseObject.Initializer"></a>

```typescript
import { ResponseObject } from '@alma-cdk/openapix'

const responseObject: ResponseObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.ResponseObject.property.description">description</a></code> | <code>string</code> | A short description of the response. |
| <code><a href="#@alma-cdk/openapix.ResponseObject.property.content">content</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.MediaTypeObject">MediaTypeObject</a>}</code> | A map containing descriptions of potential response payloads. |
| <code><a href="#@alma-cdk/openapix.ResponseObject.property.headers">headers</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.HeaderObject">HeaderObject</a>}</code> | Maps a header name to its definition. |
| <code><a href="#@alma-cdk/openapix.ResponseObject.property.links">links</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> \| <a href="#@alma-cdk/openapix.LinkObject">LinkObject</a>}</code> | A map of operations links that can be followed from the response. |

---

##### `description`<sup>Required</sup> <a name="description" id="@alma-cdk/openapix.ResponseObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of the response.

CommonMark syntax MAY be used for rich text representation.

---

##### `content`<sup>Optional</sup> <a name="content" id="@alma-cdk/openapix.ResponseObject.property.content"></a>

```typescript
public readonly content: {[ key: string ]: ReferenceObject | MediaTypeObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.MediaTypeObject">MediaTypeObject</a>}

A map containing descriptions of potential response payloads.

The key is a media type or media type range and the value describes it. For responses that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@alma-cdk/openapix.ResponseObject.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: ReferenceObject | HeaderObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.HeaderObject">HeaderObject</a>}

Maps a header name to its definition.

RFC7230 states header names are case insensitive. If a response header is defined with the name "Content-Type", it SHALL be ignored.

---

##### `links`<sup>Optional</sup> <a name="links" id="@alma-cdk/openapix.ResponseObject.property.links"></a>

```typescript
public readonly links: {[ key: string ]: ReferenceObject | LinkObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.ReferenceObject">ReferenceObject</a> | <a href="#@alma-cdk/openapix.LinkObject">LinkObject</a>}

A map of operations links that can be followed from the response.

The key of the map is a short name for the link, following the naming constraints of the names for Component Objects.

---

### ResponsesObject <a name="ResponsesObject" id="@alma-cdk/openapix.ResponsesObject"></a>

A container for the expected responses of an operation.

The container maps a HTTP response code to the expected response.
The documentation is not necessarily expected to cover all possible HTTP response codes because they may not be known in advance. However, documentation is expected to cover a successful operation response and any known errors.
The default MAY be used as a default response object for all HTTP codes that are not covered individually by the specification.
The Responses Object MUST contain at least one response code, and it SHOULD be the response for a successful operation call.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.ResponsesObject.Initializer"></a>

```typescript
import { ResponsesObject } from '@alma-cdk/openapix'

const responsesObject: ResponsesObject = { ... }
```


### SchemaObject <a name="SchemaObject" id="@alma-cdk/openapix.SchemaObject"></a>

The Schema Object allows the definition of input and output data types.

These types can be objects, but also primitives and arrays. This object is an extended subset of the JSON Schema Specification Wright Draft 00. For more information about the properties, see JSON Schema Core and JSON Schema Validation. Unless stated otherwise, the property definitions follow the JSON Schema.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.SchemaObject.Initializer"></a>

```typescript
import { SchemaObject } from '@alma-cdk/openapix'

const schemaObject: SchemaObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.SchemaObject.property.deprecated">deprecated</a></code> | <code>boolean</code> | Specifies that a schema is deprecated and SHOULD be transitioned out of usage. |
| <code><a href="#@alma-cdk/openapix.SchemaObject.property.discriminator">discriminator</a></code> | <code><a href="#@alma-cdk/openapix.DiscriminatorObject">DiscriminatorObject</a></code> | Adds support for polymorphism. |
| <code><a href="#@alma-cdk/openapix.SchemaObject.property.example">example</a></code> | <code>any</code> | A free-form property to include an example of an instance for this schema. |
| <code><a href="#@alma-cdk/openapix.SchemaObject.property.externalDocs">externalDocs</a></code> | <code><a href="#@alma-cdk/openapix.ExternalDocumentationObject">ExternalDocumentationObject</a></code> | Additional external documentation for this schema. |
| <code><a href="#@alma-cdk/openapix.SchemaObject.property.nullable">nullable</a></code> | <code>boolean</code> | A true value adds "null" to the allowed type specified by the type keyword, only if type is explicitly defined within the same Schema Object. |
| <code><a href="#@alma-cdk/openapix.SchemaObject.property.readOnly">readOnly</a></code> | <code>boolean</code> | Relevant only for Schema "properties" definitions. |
| <code><a href="#@alma-cdk/openapix.SchemaObject.property.writeOnly">writeOnly</a></code> | <code>boolean</code> | Relevant only for Schema "properties" definitions. |
| <code><a href="#@alma-cdk/openapix.SchemaObject.property.xml">xml</a></code> | <code><a href="#@alma-cdk/openapix.XmlObject">XmlObject</a></code> | This MAY be used only on properties schemas. |

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@alma-cdk/openapix.SchemaObject.property.deprecated"></a>

```typescript
public readonly deprecated: boolean;
```

- *Type:* boolean

Specifies that a schema is deprecated and SHOULD be transitioned out of usage.

Default value is false.

---

##### `discriminator`<sup>Optional</sup> <a name="discriminator" id="@alma-cdk/openapix.SchemaObject.property.discriminator"></a>

```typescript
public readonly discriminator: DiscriminatorObject;
```

- *Type:* <a href="#@alma-cdk/openapix.DiscriminatorObject">DiscriminatorObject</a>

Adds support for polymorphism.

The discriminator is an object name that is used to differentiate between other schemas which may satisfy the payload description. See Composition and Inheritance for more details.

---

##### `example`<sup>Optional</sup> <a name="example" id="@alma-cdk/openapix.SchemaObject.property.example"></a>

```typescript
public readonly example: any;
```

- *Type:* any

A free-form property to include an example of an instance for this schema.

To represent examples that cannot be naturally represented in JSON or YAML, a string value can be used to contain the example with escaping where necessary.

---

##### `externalDocs`<sup>Optional</sup> <a name="externalDocs" id="@alma-cdk/openapix.SchemaObject.property.externalDocs"></a>

```typescript
public readonly externalDocs: ExternalDocumentationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.ExternalDocumentationObject">ExternalDocumentationObject</a>

Additional external documentation for this schema.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@alma-cdk/openapix.SchemaObject.property.nullable"></a>

```typescript
public readonly nullable: boolean;
```

- *Type:* boolean

A true value adds "null" to the allowed type specified by the type keyword, only if type is explicitly defined within the same Schema Object.

Other Schema Object constraints retain their defined behavior, and therefore may disallow the use of null as a value. A false value leaves the specified or default type unmodified. The default value is false.

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@alma-cdk/openapix.SchemaObject.property.readOnly"></a>

```typescript
public readonly readOnly: boolean;
```

- *Type:* boolean

Relevant only for Schema "properties" definitions.

Declares the property as "read only". This means that it MAY be sent as part of a response but SHOULD NOT be sent as part of the request. If the property is marked as readOnly being true and is in the required list, the required will take effect on the response only. A property MUST NOT be marked as both readOnly and writeOnly being true. Default value is false.

---

##### `writeOnly`<sup>Optional</sup> <a name="writeOnly" id="@alma-cdk/openapix.SchemaObject.property.writeOnly"></a>

```typescript
public readonly writeOnly: boolean;
```

- *Type:* boolean

Relevant only for Schema "properties" definitions.

Declares the property as "write only". Therefore, it MAY be sent as part of a request but SHOULD NOT be sent as part of the response. If the property is marked as writeOnly being true and is in the required list, the required will take effect on the request only. A property MUST NOT be marked as both readOnly and writeOnly being true. Default value is false.

---

##### `xml`<sup>Optional</sup> <a name="xml" id="@alma-cdk/openapix.SchemaObject.property.xml"></a>

```typescript
public readonly xml: XmlObject;
```

- *Type:* <a href="#@alma-cdk/openapix.XmlObject">XmlObject</a>

This MAY be used only on properties schemas.

It has no effect on root schemas. Adds additional metadata to describe the XML representation of this property.

---

### SchemaProps <a name="SchemaProps" id="@alma-cdk/openapix.SchemaProps"></a>

Props given to `new Schema`.

Essentially an OpenApi v3 "source" without
`x-amazon-apigateway-` extensions.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.SchemaProps.Initializer"></a>

```typescript
import { SchemaProps } from '@alma-cdk/openapix'

const schemaProps: SchemaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.SchemaProps.property.info">info</a></code> | <code><a href="#@alma-cdk/openapix.InfoObject">InfoObject</a></code> | Provides metadata about the API. |
| <code><a href="#@alma-cdk/openapix.SchemaProps.property.openapi">openapi</a></code> | <code>string</code> | This string MUST be the semantic version number of the OpenAPI Specification version that the OpenAPI document uses. |
| <code><a href="#@alma-cdk/openapix.SchemaProps.property.paths">paths</a></code> | <code><a href="#@alma-cdk/openapix.PathsObject">PathsObject</a></code> | The available paths and operations for the API. |
| <code><a href="#@alma-cdk/openapix.SchemaProps.property.components">components</a></code> | <code><a href="#@alma-cdk/openapix.ComponentsObject">ComponentsObject</a></code> | An element to hold various schemas for the specification. |
| <code><a href="#@alma-cdk/openapix.SchemaProps.property.externalDocs">externalDocs</a></code> | <code><a href="#@alma-cdk/openapix.ExternalDocumentationObject">ExternalDocumentationObject</a></code> | Additional external documentation. |
| <code><a href="#@alma-cdk/openapix.SchemaProps.property.security">security</a></code> | <code><a href="#@alma-cdk/openapix.SecurityRequirementObject">SecurityRequirementObject</a>[]</code> | A declaration of which security mechanisms can be used across the API. |
| <code><a href="#@alma-cdk/openapix.SchemaProps.property.servers">servers</a></code> | <code><a href="#@alma-cdk/openapix.ServerObject">ServerObject</a>[]</code> | An array of Server Objects, which provide connectivity information to a target server. |
| <code><a href="#@alma-cdk/openapix.SchemaProps.property.tags">tags</a></code> | <code><a href="#@alma-cdk/openapix.TagObject">TagObject</a>[]</code> | A list of tags used by the specification with additional metadata. |

---

##### `info`<sup>Required</sup> <a name="info" id="@alma-cdk/openapix.SchemaProps.property.info"></a>

```typescript
public readonly info: InfoObject;
```

- *Type:* <a href="#@alma-cdk/openapix.InfoObject">InfoObject</a>

Provides metadata about the API.

The metadata MAY be used by tooling as required.

---

*Example*

```typescript
{
  title: "FancyPants API",
  version: "1.23.105",
}
```


##### `openapi`<sup>Required</sup> <a name="openapi" id="@alma-cdk/openapix.SchemaProps.property.openapi"></a>

```typescript
public readonly openapi: string;
```

- *Type:* string

This string MUST be the semantic version number of the OpenAPI Specification version that the OpenAPI document uses.

The openapi field SHOULD be used by tooling specifications and clients to interpret the OpenAPI document. This is not related to the API info.version string.

---

*Example*

```typescript
'3.0.0'
```


##### `paths`<sup>Required</sup> <a name="paths" id="@alma-cdk/openapix.SchemaProps.property.paths"></a>

```typescript
public readonly paths: PathsObject;
```

- *Type:* <a href="#@alma-cdk/openapix.PathsObject">PathsObject</a>

The available paths and operations for the API.

---

##### `components`<sup>Optional</sup> <a name="components" id="@alma-cdk/openapix.SchemaProps.property.components"></a>

```typescript
public readonly components: ComponentsObject;
```

- *Type:* <a href="#@alma-cdk/openapix.ComponentsObject">ComponentsObject</a>

An element to hold various schemas for the specification.

---

##### `externalDocs`<sup>Optional</sup> <a name="externalDocs" id="@alma-cdk/openapix.SchemaProps.property.externalDocs"></a>

```typescript
public readonly externalDocs: ExternalDocumentationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.ExternalDocumentationObject">ExternalDocumentationObject</a>

Additional external documentation.

---

##### `security`<sup>Optional</sup> <a name="security" id="@alma-cdk/openapix.SchemaProps.property.security"></a>

```typescript
public readonly security: SecurityRequirementObject[];
```

- *Type:* <a href="#@alma-cdk/openapix.SecurityRequirementObject">SecurityRequirementObject</a>[]

A declaration of which security mechanisms can be used across the API.

The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. Individual operations can override this definition. To make security optional, an empty security requirement ({}) can be included in the array.

---

##### `servers`<sup>Optional</sup> <a name="servers" id="@alma-cdk/openapix.SchemaProps.property.servers"></a>

```typescript
public readonly servers: ServerObject[];
```

- *Type:* <a href="#@alma-cdk/openapix.ServerObject">ServerObject</a>[]

An array of Server Objects, which provide connectivity information to a target server.

If the servers property is not provided, or is an empty array, the default value would be a Server Object with a url value of /.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@alma-cdk/openapix.SchemaProps.property.tags"></a>

```typescript
public readonly tags: TagObject[];
```

- *Type:* <a href="#@alma-cdk/openapix.TagObject">TagObject</a>[]

A list of tags used by the specification with additional metadata.

The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the Operation Object must be declared. The tags that are not declared MAY be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique.

---

### SecurityRequirementObject <a name="SecurityRequirementObject" id="@alma-cdk/openapix.SecurityRequirementObject"></a>

Lists the required security schemes to execute this operation.

The name used for each property MUST correspond to a security scheme declared in the Security Schemes under the Components Object.
Security Requirement Objects that contain multiple schemes require that all schemes MUST be satisfied for a request to be authorized. This enables support for scenarios where multiple query parameters or HTTP headers are required to convey security information.
When a list of Security Requirement Objects is defined on the OpenAPI Object or Operation Object, only one of the Security Requirement Objects in the list needs to be satisfied to authorize the request.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.SecurityRequirementObject.Initializer"></a>

```typescript
import { SecurityRequirementObject } from '@alma-cdk/openapix'

const securityRequirementObject: SecurityRequirementObject = { ... }
```


### SecuritySchemeObject <a name="SecuritySchemeObject" id="@alma-cdk/openapix.SecuritySchemeObject"></a>

Defines a security scheme that can be used by the operations.

Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), OAuth2's common flows (implicit, password, client credentials and authorization code) as defined in RFC6749, and OpenID Connect Discovery.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.SecuritySchemeObject.Initializer"></a>

```typescript
import { SecuritySchemeObject } from '@alma-cdk/openapix'

const securitySchemeObject: SecuritySchemeObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.SecuritySchemeObject.property.type">type</a></code> | <code>string</code> | The type of the security scheme. |
| <code><a href="#@alma-cdk/openapix.SecuritySchemeObject.property.bearerFormat">bearerFormat</a></code> | <code>string</code> | A hint to the client to identify how the bearer token is formatted. |
| <code><a href="#@alma-cdk/openapix.SecuritySchemeObject.property.description">description</a></code> | <code>string</code> | A short description for security scheme. |
| <code><a href="#@alma-cdk/openapix.SecuritySchemeObject.property.flow">flow</a></code> | <code><a href="#@alma-cdk/openapix.OAuthFlowsObject">OAuthFlowsObject</a></code> | An object containing configuration information for the flow types supported. |
| <code><a href="#@alma-cdk/openapix.SecuritySchemeObject.property.in">in</a></code> | <code>string</code> | The location of the API key. |
| <code><a href="#@alma-cdk/openapix.SecuritySchemeObject.property.name">name</a></code> | <code>string</code> | The name of the header, query or cookie parameter to be used. |
| <code><a href="#@alma-cdk/openapix.SecuritySchemeObject.property.openIdConnectUrl">openIdConnectUrl</a></code> | <code>string</code> | OpenId Connect URL to discover OAuth2 configuration values. |
| <code><a href="#@alma-cdk/openapix.SecuritySchemeObject.property.scheme">scheme</a></code> | <code>string</code> | The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235. |

---

##### `type`<sup>Required</sup> <a name="type" id="@alma-cdk/openapix.SecuritySchemeObject.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the security scheme.

Valid values are "apiKey", "http", "oauth2", "openIdConnect".

---

##### `bearerFormat`<sup>Optional</sup> <a name="bearerFormat" id="@alma-cdk/openapix.SecuritySchemeObject.property.bearerFormat"></a>

```typescript
public readonly bearerFormat: string;
```

- *Type:* string

A hint to the client to identify how the bearer token is formatted.

Bearer tokens are usually generated by an authorization server, so this information is primarily for documentation purposes.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.SecuritySchemeObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description for security scheme.

CommonMark syntax MAY be used for rich text representation.

---

##### `flow`<sup>Optional</sup> <a name="flow" id="@alma-cdk/openapix.SecuritySchemeObject.property.flow"></a>

```typescript
public readonly flow: OAuthFlowsObject;
```

- *Type:* <a href="#@alma-cdk/openapix.OAuthFlowsObject">OAuthFlowsObject</a>

An object containing configuration information for the flow types supported.

REQUIRED for oauth2.

---

##### `in`<sup>Optional</sup> <a name="in" id="@alma-cdk/openapix.SecuritySchemeObject.property.in"></a>

```typescript
public readonly in: string;
```

- *Type:* string

The location of the API key.

Valid values are "query", "header" or "cookie".
REQUIRED for apiKey.

---

##### `name`<sup>Optional</sup> <a name="name" id="@alma-cdk/openapix.SecuritySchemeObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the header, query or cookie parameter to be used.

REQUIRED for apiKey.

---

##### `openIdConnectUrl`<sup>Optional</sup> <a name="openIdConnectUrl" id="@alma-cdk/openapix.SecuritySchemeObject.property.openIdConnectUrl"></a>

```typescript
public readonly openIdConnectUrl: string;
```

- *Type:* string

OpenId Connect URL to discover OAuth2 configuration values.

This MUST be in the form of a URL.
REQUIRED for openIdConnect.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@alma-cdk/openapix.SecuritySchemeObject.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235.

The values used SHOULD be registered in the IANA Authentication Scheme registry.
REQUIRED for http.

---

### ServerObject <a name="ServerObject" id="@alma-cdk/openapix.ServerObject"></a>

An object representing a Server.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.ServerObject.Initializer"></a>

```typescript
import { ServerObject } from '@alma-cdk/openapix'

const serverObject: ServerObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.ServerObject.property.url">url</a></code> | <code>string</code> | REQUIRED. |
| <code><a href="#@alma-cdk/openapix.ServerObject.property.description">description</a></code> | <code>string</code> | An optional string describing the host designated by the URL. |
| <code><a href="#@alma-cdk/openapix.ServerObject.property.variables">variables</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.ServerVariableObject">ServerVariableObject</a>}</code> | A map between a variable name and its value. |

---

##### `url`<sup>Required</sup> <a name="url" id="@alma-cdk/openapix.ServerObject.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

REQUIRED.

A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that the host location is relative to the location where the OpenAPI document is being served. Variable substitutions will be made when a variable is named in {brackets}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.ServerObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional string describing the host designated by the URL.

CommonMark syntax MAY be used for rich text representation.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@alma-cdk/openapix.ServerObject.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: ServerVariableObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.ServerVariableObject">ServerVariableObject</a>}

A map between a variable name and its value.

The value is used for substitution in the server's URL template.

---

### ServerVariableObject <a name="ServerVariableObject" id="@alma-cdk/openapix.ServerVariableObject"></a>

An object representing a Server Variable for server URL template substitution.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.ServerVariableObject.Initializer"></a>

```typescript
import { ServerVariableObject } from '@alma-cdk/openapix'

const serverVariableObject: ServerVariableObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.ServerVariableObject.property.default">default</a></code> | <code>string</code> | The default value to use for substitution, which SHALL be sent if an alternate value is not supplied. |
| <code><a href="#@alma-cdk/openapix.ServerVariableObject.property.description">description</a></code> | <code>string</code> | An optional description for the server variable. |
| <code><a href="#@alma-cdk/openapix.ServerVariableObject.property.enum">enum</a></code> | <code>string[]</code> | An enumeration of string values to be used if the substitution options are from a limited set. |

---

##### `default`<sup>Required</sup> <a name="default" id="@alma-cdk/openapix.ServerVariableObject.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

The default value to use for substitution, which SHALL be sent if an alternate value is not supplied.

Note this behavior is different than the Schema Object's treatment of default values, because in those cases parameter values are optional. If the enum is defined, the value SHOULD exist in the enum's values.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.ServerVariableObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for the server variable.

CommonMark syntax MAY be used for rich text representation.

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@alma-cdk/openapix.ServerVariableObject.property.enum"></a>

```typescript
public readonly enum: string[];
```

- *Type:* string[]

An enumeration of string values to be used if the substitution options are from a limited set.

The array SHOULD NOT be empty.

---

### TagObject <a name="TagObject" id="@alma-cdk/openapix.TagObject"></a>

Adds metadata to a single tag that is used by the Operation Object.

It is not mandatory to have a Tag Object per tag defined in the Operation Object instances.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.TagObject.Initializer"></a>

```typescript
import { TagObject } from '@alma-cdk/openapix'

const tagObject: TagObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.TagObject.property.name">name</a></code> | <code>string</code> | The name of the tag. |
| <code><a href="#@alma-cdk/openapix.TagObject.property.description">description</a></code> | <code>string</code> | A short description for the tag. |
| <code><a href="#@alma-cdk/openapix.TagObject.property.externalDocs">externalDocs</a></code> | <code><a href="#@alma-cdk/openapix.ExternalDocumentationObject">ExternalDocumentationObject</a></code> | Additional external documentation for this tag. |

---

##### `name`<sup>Required</sup> <a name="name" id="@alma-cdk/openapix.TagObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the tag.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.TagObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description for the tag.

CommonMark syntax MAY be used for rich text representation.

---

##### `externalDocs`<sup>Optional</sup> <a name="externalDocs" id="@alma-cdk/openapix.TagObject.property.externalDocs"></a>

```typescript
public readonly externalDocs: ExternalDocumentationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.ExternalDocumentationObject">ExternalDocumentationObject</a>

Additional external documentation for this tag.

---

### Validator <a name="Validator" id="@alma-cdk/openapix.Validator"></a>

Validator configuration.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.Validator.Initializer"></a>

```typescript
import { Validator } from '@alma-cdk/openapix'

const validator: Validator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.Validator.property.validateRequestBody">validateRequestBody</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.Validator.property.validateRequestParameters">validateRequestParameters</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.Validator.property.default">default</a></code> | <code>boolean</code> | *No description.* |

---

##### `validateRequestBody`<sup>Required</sup> <a name="validateRequestBody" id="@alma-cdk/openapix.Validator.property.validateRequestBody"></a>

```typescript
public readonly validateRequestBody: boolean;
```

- *Type:* boolean

---

##### `validateRequestParameters`<sup>Required</sup> <a name="validateRequestParameters" id="@alma-cdk/openapix.Validator.property.validateRequestParameters"></a>

```typescript
public readonly validateRequestParameters: boolean;
```

- *Type:* boolean

---

##### `default`<sup>Optional</sup> <a name="default" id="@alma-cdk/openapix.Validator.property.default"></a>

```typescript
public readonly default: boolean;
```

- *Type:* boolean

---

### ValidatorConfig <a name="ValidatorConfig" id="@alma-cdk/openapix.ValidatorConfig"></a>

Method integration validator configuration.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.ValidatorConfig.Initializer"></a>

```typescript
import { ValidatorConfig } from '@alma-cdk/openapix'

const validatorConfig: ValidatorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.ValidatorConfig.property.validator">validator</a></code> | <code>string</code> | Validator identifier for method integration. This will override the default validator if one configured. |

---

##### `validator`<sup>Optional</sup> <a name="validator" id="@alma-cdk/openapix.ValidatorConfig.property.validator"></a>

```typescript
public readonly validator: string;
```

- *Type:* string

Validator identifier for method integration. This will override the default validator if one configured.

Should match a key from OpenApi schema `components.securitySchemas`.

---

### XAmazonApigatewayAuthorizer <a name="XAmazonApigatewayAuthorizer" id="@alma-cdk/openapix.XAmazonApigatewayAuthorizer"></a>

Describes the `x-amazon-apigateway-authorizer` value.

> [https://awslabs.github.io/smithy/1.0/spec/aws/amazon-apigateway.html](https://awslabs.github.io/smithy/1.0/spec/aws/amazon-apigateway.html)

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.XAmazonApigatewayAuthorizer.Initializer"></a>

```typescript
import { XAmazonApigatewayAuthorizer } from '@alma-cdk/openapix'

const xAmazonApigatewayAuthorizer: XAmazonApigatewayAuthorizer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.type">type</a></code> | <code>string</code> | The type of the authorizer. This is a required property. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.authorizerCredentials">authorizerCredentials</a></code> | <code>string</code> | The credentials required for invoking the authorizer, if any, in the form of an ARN of an IAM execution role. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>number</code> | The number of seconds during which authorizer result is cached. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.authorizerUri">authorizerUri</a></code> | <code>string</code> | The Uniform Resource Identifier (URI) of the authorizer Lambda function. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.identitySource">identitySource</a></code> | <code>string</code> | A comma-separated list of mapping expressions of the request parameters as the identity source. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.identityValidationExpression">identityValidationExpression</a></code> | <code>string</code> | A regular expression for validating the token as the incoming identity. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.providerARNs">providerARNs</a></code> | <code>string[]</code> | List of Cognito User Pool ARNs. |

---

##### `type`<sup>Required</sup> <a name="type" id="@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the authorizer. This is a required property.

For REST APIs, specify `token` for an authorizer with the caller identity embedded in an authorization token.
Specify `request` for an authorizer with the caller identity contained in request parameters.

---

*Example*

```typescript
'token'
'request'
'cognito_user_pools'
```


##### `authorizerCredentials`<sup>Optional</sup> <a name="authorizerCredentials" id="@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.authorizerCredentials"></a>

```typescript
public readonly authorizerCredentials: string;
```

- *Type:* string

The credentials required for invoking the authorizer, if any, in the form of an ARN of an IAM execution role.

---

*Example*

```typescript
'arn:aws:iam::123456789012:role/MyRole'
```


##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.authorizerResultTtlInSeconds"></a>

```typescript
public readonly authorizerResultTtlInSeconds: number;
```

- *Type:* number

The number of seconds during which authorizer result is cached.

---

*Example*

```typescript
60
```


##### `authorizerUri`<sup>Optional</sup> <a name="authorizerUri" id="@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.authorizerUri"></a>

```typescript
public readonly authorizerUri: string;
```

- *Type:* string

The Uniform Resource Identifier (URI) of the authorizer Lambda function.

---

*Example*

```typescript
'arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:account-id:function:auth_function_name/invocations'
```


##### `identitySource`<sup>Optional</sup> <a name="identitySource" id="@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.identitySource"></a>

```typescript
public readonly identitySource: string;
```

- *Type:* string

A comma-separated list of mapping expressions of the request parameters as the identity source.

Applicable for the authorizer of the `request` and `jwt` type only.

---

*Example*

```typescript
'method.request.header.Authorization'
'method.request.header.Authorization, context.identity.sourceIp'
'method.request.header.Auth, method.request.querystring.Name'
```


##### `identityValidationExpression`<sup>Optional</sup> <a name="identityValidationExpression" id="@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.identityValidationExpression"></a>

```typescript
public readonly identityValidationExpression: string;
```

- *Type:* string

A regular expression for validating the token as the incoming identity.

---

*Example*

```typescript
'^x-[a-z]+'
```


##### `providerARNs`<sup>Optional</sup> <a name="providerARNs" id="@alma-cdk/openapix.XAmazonApigatewayAuthorizer.property.providerARNs"></a>

```typescript
public readonly providerARNs: string[];
```

- *Type:* string[]

List of Cognito User Pool ARNs.

Applicable for the authorizer of the `cognito_user_pools` type only.

---

*Example*

```typescript
['arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}]
```


### XAmazonApigatewayIntegration <a name="XAmazonApigatewayIntegration" id="@alma-cdk/openapix.XAmazonApigatewayIntegration"></a>

Specifies details of the backend integration used for this method.

This extension is an extended property of the OpenAPI Operation object.
The result is an API Gateway integration object.

> [https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration.html](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration.html)

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.XAmazonApigatewayIntegration.Initializer"></a>

```typescript
import { XAmazonApigatewayIntegration } from '@alma-cdk/openapix'

const xAmazonApigatewayIntegration: XAmazonApigatewayIntegration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration.property.httpMethod">httpMethod</a></code> | <code>string</code> | The HTTP method used in the integration request. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration.property.type">type</a></code> | <code>aws-cdk-lib.aws_apigateway.IntegrationType</code> | The type of integration with the specified backend. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration.property.uri">uri</a></code> | <code>string</code> | The endpoint URI of the backend. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration.property.cacheKeyParameters">cacheKeyParameters</a></code> | <code>string[]</code> | A list of request parameters whose values are to be cached. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration.property.cacheNamespace">cacheNamespace</a></code> | <code>string</code> | An API-specific tag group of related cached parameters. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration.property.connectionId">connectionId</a></code> | <code>string</code> | The ID of a VpcLink for the private integration. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration.property.connectionType">connectionType</a></code> | <code>aws-cdk-lib.aws_apigateway.ConnectionType</code> | The integration connection type. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration.property.contentHandling">contentHandling</a></code> | <code>aws-cdk-lib.aws_apigateway.ContentHandling</code> | Response payload encoding conversion types. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration.property.credentials">credentials</a></code> | <code>string</code> | For AWS IAM role-based credentials, specify the ARN of an appropriate IAM role. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration.property.passthroughBehavior">passthroughBehavior</a></code> | <code>aws-cdk-lib.aws_apigateway.PassthroughBehavior</code> | Specifies how a request payload of unmapped content type is passed through the integration request without modification. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration.property.requestParameters">requestParameters</a></code> | <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegrationRequestParameters">XAmazonApigatewayIntegrationRequestParameters</a></code> | Specifies mappings from method request parameters to integration request parameters. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration.property.requestTemplates">requestTemplates</a></code> | <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegrationRequestTemplates">XAmazonApigatewayIntegrationRequestTemplates</a></code> | Mapping templates for a request payload of specified MIME types. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration.property.responses">responses</a></code> | <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegrationResponses">XAmazonApigatewayIntegrationResponses</a></code> | Defines the method's responses and specifies desired parameter mappings or payload mappings from integration responses to method responses. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration.property.timeoutInMillis">timeoutInMillis</a></code> | <code>number</code> | Integration timeouts between 50 ms and 29,000 ms. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegrationTlsConfig">XAmazonApigatewayIntegrationTlsConfig</a></code> | Specifies the TLS configuration for an integration. |

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string
- *Default:* 'POST'

The HTTP method used in the integration request.

For Lambda function invocations, the value must be POST.

---

##### `type`<sup>Required</sup> <a name="type" id="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.type"></a>

```typescript
public readonly type: IntegrationType;
```

- *Type:* aws-cdk-lib.aws_apigateway.IntegrationType

The type of integration with the specified backend.

Valid values are:
- `http` or `http_proxy`, for integration with an HTTP backend.
- `aws_proxy`, for integration with AWS Lambda functions.
- `aws`, for integration with AWS Lambda functions or other AWS services, such as Amazon DynamoDB, Amazon Simple Notification Service, or Amazon Simple Queue Service.
- `mock`, for integration with API Gateway without invoking any backend.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The endpoint URI of the backend.

For integrations of the aws type, this is an ARN value.
For the HTTP integration, this is the URL of the HTTP endpoint including the https or http scheme.

---

##### `cacheKeyParameters`<sup>Optional</sup> <a name="cacheKeyParameters" id="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.cacheKeyParameters"></a>

```typescript
public readonly cacheKeyParameters: string[];
```

- *Type:* string[]

A list of request parameters whose values are to be cached.

---

##### `cacheNamespace`<sup>Optional</sup> <a name="cacheNamespace" id="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.cacheNamespace"></a>

```typescript
public readonly cacheNamespace: string;
```

- *Type:* string

An API-specific tag group of related cached parameters.

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

The ID of a VpcLink for the private integration.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.connectionType"></a>

```typescript
public readonly connectionType: ConnectionType;
```

- *Type:* aws-cdk-lib.aws_apigateway.ConnectionType

The integration connection type.

The valid value is "VPC_LINK" for private integration
or "INTERNET", otherwise.

---

*Example*

```typescript
'VPC_LINK'
```


##### `contentHandling`<sup>Optional</sup> <a name="contentHandling" id="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.contentHandling"></a>

```typescript
public readonly contentHandling: ContentHandling;
```

- *Type:* aws-cdk-lib.aws_apigateway.ContentHandling

Response payload encoding conversion types.

Valid values are
1) CONVERT_TO_TEXT, for converting a binary payload into a base64-encoded string or converting a text payload into a utf-8-encoded string or passing through the text payload natively without modification, and
2) CONVERT_TO_BINARY, for converting a text payload into a base64-decoded blob or passing through a binary payload natively without modification.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

For AWS IAM role-based credentials, specify the ARN of an appropriate IAM role.

If unspecified, credentials default to resource-based permissions
that must be added manually to allow the API to access the resource.
For more information, see Granting Permissions Using a Resource Policy.

Note: When using IAM credentials, make sure that AWS STS Regional endpoints
are enabled for the Region where this API is deployed for best performance.

> [https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#intro-permission-model-access-policy](https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#intro-permission-model-access-policy)

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="passthroughBehavior" id="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.passthroughBehavior"></a>

```typescript
public readonly passthroughBehavior: PassthroughBehavior;
```

- *Type:* aws-cdk-lib.aws_apigateway.PassthroughBehavior

Specifies how a request payload of unmapped content type is passed through the integration request without modification.

Supported values are
when_no_templates, when_no_match, and never

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.requestParameters"></a>

```typescript
public readonly requestParameters: XAmazonApigatewayIntegrationRequestParameters;
```

- *Type:* <a href="#@alma-cdk/openapix.XAmazonApigatewayIntegrationRequestParameters">XAmazonApigatewayIntegrationRequestParameters</a>

Specifies mappings from method request parameters to integration request parameters.

Supported request parameters are querystring, path, header, and body.

---

##### `requestTemplates`<sup>Optional</sup> <a name="requestTemplates" id="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.requestTemplates"></a>

```typescript
public readonly requestTemplates: XAmazonApigatewayIntegrationRequestTemplates;
```

- *Type:* <a href="#@alma-cdk/openapix.XAmazonApigatewayIntegrationRequestTemplates">XAmazonApigatewayIntegrationRequestTemplates</a>

Mapping templates for a request payload of specified MIME types.

---

##### `responses`<sup>Optional</sup> <a name="responses" id="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.responses"></a>

```typescript
public readonly responses: XAmazonApigatewayIntegrationResponses;
```

- *Type:* <a href="#@alma-cdk/openapix.XAmazonApigatewayIntegrationResponses">XAmazonApigatewayIntegrationResponses</a>

Defines the method's responses and specifies desired parameter mappings or payload mappings from integration responses to method responses.

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="timeoutInMillis" id="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.timeoutInMillis"></a>

```typescript
public readonly timeoutInMillis: number;
```

- *Type:* number

Integration timeouts between 50 ms and 29,000 ms.

---

*Example*

```typescript
1000
```


##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@alma-cdk/openapix.XAmazonApigatewayIntegration.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: XAmazonApigatewayIntegrationTlsConfig;
```

- *Type:* <a href="#@alma-cdk/openapix.XAmazonApigatewayIntegrationTlsConfig">XAmazonApigatewayIntegrationTlsConfig</a>

Specifies the TLS configuration for an integration.

---

### XAmazonApigatewayIntegrationRequestParameters <a name="XAmazonApigatewayIntegrationRequestParameters" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationRequestParameters"></a>

Specifies mappings from named method request parameters to integration request parameters.

The method request parameters must be defined before being referenced.

> [https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration-requestParameters.html](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration-requestParameters.html)

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationRequestParameters.Initializer"></a>

```typescript
import { XAmazonApigatewayIntegrationRequestParameters } from '@alma-cdk/openapix'

const xAmazonApigatewayIntegrationRequestParameters: XAmazonApigatewayIntegrationRequestParameters = { ... }
```


### XAmazonApigatewayIntegrationRequestTemplates <a name="XAmazonApigatewayIntegrationRequestTemplates" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationRequestTemplates"></a>

Specifies mapping templates for a request payload of the specified MIME types.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationRequestTemplates.Initializer"></a>

```typescript
import { XAmazonApigatewayIntegrationRequestTemplates } from '@alma-cdk/openapix'

const xAmazonApigatewayIntegrationRequestTemplates: XAmazonApigatewayIntegrationRequestTemplates = { ... }
```


### XAmazonApigatewayIntegrationResponse <a name="XAmazonApigatewayIntegrationResponse" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse"></a>

Defines a response and specifies parameter mappings or payload mappings from the integration response to the method response.

> [https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration-response.html](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration-response.html)

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse.Initializer"></a>

```typescript
import { XAmazonApigatewayIntegrationResponse } from '@alma-cdk/openapix'

const xAmazonApigatewayIntegrationResponse: XAmazonApigatewayIntegrationResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse.property.statusCode">statusCode</a></code> | <code>string</code> | HTTP status code for the method response. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse.property.contentHandling">contentHandling</a></code> | <code>aws-cdk-lib.aws_apigateway.ContentHandling</code> | Response payload encoding conversion types. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse.property.responseParameters">responseParameters</a></code> | <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegrationResponseParameters">XAmazonApigatewayIntegrationResponseParameters</a></code> | Specifies parameter mappings for the response. |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse.property.responseTemplates">responseTemplates</a></code> | <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegrationResponseTemplates">XAmazonApigatewayIntegrationResponseTemplates</a></code> | Specifies MIME type-specific mapping templates for the response’s payload. |

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

HTTP status code for the method response.

This must correspond to a matching response in the OpenAPI Operation responses field.

---

*Example*

```typescript
'200'
```


##### `contentHandling`<sup>Optional</sup> <a name="contentHandling" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse.property.contentHandling"></a>

```typescript
public readonly contentHandling: ContentHandling;
```

- *Type:* aws-cdk-lib.aws_apigateway.ContentHandling

Response payload encoding conversion types.

Valid values are
1) CONVERT_TO_TEXT, for converting a binary payload into a base64-encoded string or converting a text payload into a utf-8-encoded string or passing through the text payload natively without modification, and
2) CONVERT_TO_BINARY, for converting a text payload into a base64-decoded blob or passing through a binary payload natively without modification.

---

##### `responseParameters`<sup>Optional</sup> <a name="responseParameters" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse.property.responseParameters"></a>

```typescript
public readonly responseParameters: XAmazonApigatewayIntegrationResponseParameters;
```

- *Type:* <a href="#@alma-cdk/openapix.XAmazonApigatewayIntegrationResponseParameters">XAmazonApigatewayIntegrationResponseParameters</a>

Specifies parameter mappings for the response.

Only the header and body parameters of the integration response
can be mapped to the header parameters of the method.

---

##### `responseTemplates`<sup>Optional</sup> <a name="responseTemplates" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponse.property.responseTemplates"></a>

```typescript
public readonly responseTemplates: XAmazonApigatewayIntegrationResponseTemplates;
```

- *Type:* <a href="#@alma-cdk/openapix.XAmazonApigatewayIntegrationResponseTemplates">XAmazonApigatewayIntegrationResponseTemplates</a>

Specifies MIME type-specific mapping templates for the response’s payload.

---

*Example*

```typescript
{
  'application/json': '#set ($root=$input.path('$')) { \"stage\": \"$root.name\", \"user-id\": \"$root.key\" }',
}
```


### XAmazonApigatewayIntegrationResponseParameters <a name="XAmazonApigatewayIntegrationResponseParameters" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponseParameters"></a>

Specifies mappings from integration method response parameters to method response parameters.

You can map header, body, or static values to the header type of the method response.

*Example*

```typescript
{
  'method.response.header.Location' : 'integration.response.body.redirect.url',
  'method.response.header.x-user-id' : 'integration.response.header.x-userid'
}
```


#### Initializer <a name="Initializer" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponseParameters.Initializer"></a>

```typescript
import { XAmazonApigatewayIntegrationResponseParameters } from '@alma-cdk/openapix'

const xAmazonApigatewayIntegrationResponseParameters: XAmazonApigatewayIntegrationResponseParameters = { ... }
```


### XAmazonApigatewayIntegrationResponses <a name="XAmazonApigatewayIntegrationResponses" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponses"></a>

Defines the method's responses and specifies parameter mappings or payload mappings from integration responses to method responses.

> [https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration-responses.html](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-integration-responses.html)

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponses.Initializer"></a>

```typescript
import { XAmazonApigatewayIntegrationResponses } from '@alma-cdk/openapix'

const xAmazonApigatewayIntegrationResponses: XAmazonApigatewayIntegrationResponses = { ... }
```


### XAmazonApigatewayIntegrationResponseTemplates <a name="XAmazonApigatewayIntegrationResponseTemplates" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponseTemplates"></a>

Specifies a mapping template to transform the integration response body to the method response body for a given MIME type.

> [https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html#models-mappings-mappings](https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html#models-mappings-mappings)

*Example*

```typescript
{
  'application/json': '#set ($root=$input.path('$')) { \"stage\": \"$root.name\", \"user-id\": \"$root.key\" }',
}
```


#### Initializer <a name="Initializer" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationResponseTemplates.Initializer"></a>

```typescript
import { XAmazonApigatewayIntegrationResponseTemplates } from '@alma-cdk/openapix'

const xAmazonApigatewayIntegrationResponseTemplates: XAmazonApigatewayIntegrationResponseTemplates = { ... }
```


### XAmazonApigatewayIntegrationTlsConfig <a name="XAmazonApigatewayIntegrationTlsConfig" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationTlsConfig"></a>

Specifies the TLS configuration for an integration.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationTlsConfig.Initializer"></a>

```typescript
import { XAmazonApigatewayIntegrationTlsConfig } from '@alma-cdk/openapix'

const xAmazonApigatewayIntegrationTlsConfig: XAmazonApigatewayIntegrationTlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegrationTlsConfig.property.insecureSkipVerification">insecureSkipVerification</a></code> | <code>boolean</code> | Specifies whether or not API Gateway skips verification that the certificate for an integration endpoint is issued by a supported c ertificate authority. |

---

##### `insecureSkipVerification`<sup>Required</sup> <a name="insecureSkipVerification" id="@alma-cdk/openapix.XAmazonApigatewayIntegrationTlsConfig.property.insecureSkipVerification"></a>

```typescript
public readonly insecureSkipVerification: boolean;
```

- *Type:* boolean

Specifies whether or not API Gateway skips verification that the certificate for an integration endpoint is issued by a supported c ertificate authority.

This isn’t recommended, but it enables you to
use certificates that are signed by private certificate authorities,
or certificates that are self-signed. If enabled, API Gateway still
performs basic certificate validation, which includes checking the
certificate's expiration date, hostname, and presence of a root certificate
authority. Supported only for HTTP and HTTP_PROXY integrations.

---

### XAmazonApigatewayRequestValidator <a name="XAmazonApigatewayRequestValidator" id="@alma-cdk/openapix.XAmazonApigatewayRequestValidator"></a>

Request validator configuration.

> [https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-request-validators.html](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-request-validators.html)

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.XAmazonApigatewayRequestValidator.Initializer"></a>

```typescript
import { XAmazonApigatewayRequestValidator } from '@alma-cdk/openapix'

const xAmazonApigatewayRequestValidator: XAmazonApigatewayRequestValidator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayRequestValidator.property.validateRequestBody">validateRequestBody</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.XAmazonApigatewayRequestValidator.property.validateRequestParameters">validateRequestParameters</a></code> | <code>boolean</code> | *No description.* |

---

##### `validateRequestBody`<sup>Required</sup> <a name="validateRequestBody" id="@alma-cdk/openapix.XAmazonApigatewayRequestValidator.property.validateRequestBody"></a>

```typescript
public readonly validateRequestBody: boolean;
```

- *Type:* boolean

---

##### `validateRequestParameters`<sup>Required</sup> <a name="validateRequestParameters" id="@alma-cdk/openapix.XAmazonApigatewayRequestValidator.property.validateRequestParameters"></a>

```typescript
public readonly validateRequestParameters: boolean;
```

- *Type:* boolean

---

### XmlObject <a name="XmlObject" id="@alma-cdk/openapix.XmlObject"></a>

A metadata object that allows for more fine-tuned XML model definitions.

When using arrays, XML element names are not inferred (for singular/plural forms) and the name property SHOULD be used to add that information. See examples for expected behavior.

#### Initializer <a name="Initializer" id="@alma-cdk/openapix.XmlObject.Initializer"></a>

```typescript
import { XmlObject } from '@alma-cdk/openapix'

const xmlObject: XmlObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.XmlObject.property.attribute">attribute</a></code> | <code>boolean</code> | Declares whether the property definition translates to an attribute instead of an element. |
| <code><a href="#@alma-cdk/openapix.XmlObject.property.name">name</a></code> | <code>string</code> | Replaces the name of the element/attribute used for the described schema property. |
| <code><a href="#@alma-cdk/openapix.XmlObject.property.namespace">namespace</a></code> | <code>string</code> | The URI of the namespace definition. |
| <code><a href="#@alma-cdk/openapix.XmlObject.property.prefix">prefix</a></code> | <code>string</code> | The prefix to be used for the name. |
| <code><a href="#@alma-cdk/openapix.XmlObject.property.wrapped">wrapped</a></code> | <code>boolean</code> | MAY be used only for an array definition. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@alma-cdk/openapix.XmlObject.property.attribute"></a>

```typescript
public readonly attribute: boolean;
```

- *Type:* boolean

Declares whether the property definition translates to an attribute instead of an element.

Default value is false.

---

##### `name`<sup>Optional</sup> <a name="name" id="@alma-cdk/openapix.XmlObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Replaces the name of the element/attribute used for the described schema property.

When defined within items, it will affect the name of the individual XML elements within the list. When defined alongside type being array (outside the items), it will affect the wrapping element and only if wrapped is true. If wrapped is false, it will be ignored.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@alma-cdk/openapix.XmlObject.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The URI of the namespace definition.

Value MUST be in the form of an absolute URI.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@alma-cdk/openapix.XmlObject.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The prefix to be used for the name.

---

##### `wrapped`<sup>Optional</sup> <a name="wrapped" id="@alma-cdk/openapix.XmlObject.property.wrapped"></a>

```typescript
public readonly wrapped: boolean;
```

- *Type:* boolean

MAY be used only for an array definition.

Signifies whether the array is wrapped (for example, <books><book/><book/></books>) or unwrapped (<book/><book/>). Default value is false. The definition takes effect only when defined alongside type being array (outside the items).

---

## Classes <a name="Classes" id="Classes"></a>

### AwsIntegration <a name="AwsIntegration" id="@alma-cdk/openapix.AwsIntegration"></a>

Defines direct AWS service integration.

#### Initializers <a name="Initializers" id="@alma-cdk/openapix.AwsIntegration.Initializer"></a>

```typescript
import { AwsIntegration } from '@alma-cdk/openapix'

new AwsIntegration(scope: Construct, props: AwsIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.AwsIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.AwsIntegration.Initializer.parameter.props">props</a></code> | <code><a href="#@alma-cdk/openapix.AwsIntegrationProps">AwsIntegrationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@alma-cdk/openapix.AwsIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `props`<sup>Required</sup> <a name="props" id="@alma-cdk/openapix.AwsIntegration.Initializer.parameter.props"></a>

- *Type:* <a href="#@alma-cdk/openapix.AwsIntegrationProps">AwsIntegrationProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.AwsIntegration.property.type">type</a></code> | <code><a href="#@alma-cdk/openapix.InternalIntegrationType">InternalIntegrationType</a></code> | Identifier to enable internal type checks. |
| <code><a href="#@alma-cdk/openapix.AwsIntegration.property.xAmazonApigatewayIntegration">xAmazonApigatewayIntegration</a></code> | <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration">XAmazonApigatewayIntegration</a></code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.AwsIntegration.property.validator">validator</a></code> | <code>string</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="@alma-cdk/openapix.AwsIntegration.property.type"></a>

```typescript
public readonly type: InternalIntegrationType;
```

- *Type:* <a href="#@alma-cdk/openapix.InternalIntegrationType">InternalIntegrationType</a>

Identifier to enable internal type checks.

---

##### `xAmazonApigatewayIntegration`<sup>Required</sup> <a name="xAmazonApigatewayIntegration" id="@alma-cdk/openapix.AwsIntegration.property.xAmazonApigatewayIntegration"></a>

```typescript
public readonly xAmazonApigatewayIntegration: XAmazonApigatewayIntegration;
```

- *Type:* <a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration">XAmazonApigatewayIntegration</a>

---

##### `validator`<sup>Optional</sup> <a name="validator" id="@alma-cdk/openapix.AwsIntegration.property.validator"></a>

```typescript
public readonly validator: string;
```

- *Type:* string

---


### CorsHeaders <a name="CorsHeaders" id="@alma-cdk/openapix.CorsHeaders"></a>

#### Initializers <a name="Initializers" id="@alma-cdk/openapix.CorsHeaders.Initializer"></a>

```typescript
import { CorsHeaders } from '@alma-cdk/openapix'

new CorsHeaders()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/openapix.CorsHeaders.from">from</a></code> | *No description.* |

---

##### `from` <a name="from" id="@alma-cdk/openapix.CorsHeaders.from"></a>

```typescript
import { CorsHeaders } from '@alma-cdk/openapix'

CorsHeaders.from(scope: Construct, values: ...string[])
```

###### `scope`<sup>Required</sup> <a name="scope" id="@alma-cdk/openapix.CorsHeaders.from.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `values`<sup>Required</sup> <a name="values" id="@alma-cdk/openapix.CorsHeaders.from.parameter.values"></a>

- *Type:* ...string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.CorsHeaders.property.ANY">ANY</a></code> | <code>string</code> | *No description.* |

---

##### `ANY`<sup>Required</sup> <a name="ANY" id="@alma-cdk/openapix.CorsHeaders.property.ANY"></a>

```typescript
public readonly ANY: string;
```

- *Type:* string

---

### CorsIntegration <a name="CorsIntegration" id="@alma-cdk/openapix.CorsIntegration"></a>

Defines `OPTIONS` integration used in Cross-Origin Resource Sharing (CORS).

> [https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html#mapping-response-parameters](https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html#mapping-response-parameters)

#### Initializers <a name="Initializers" id="@alma-cdk/openapix.CorsIntegration.Initializer"></a>

```typescript
import { CorsIntegration } from '@alma-cdk/openapix'

new CorsIntegration(_: Construct, props: CorsIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.CorsIntegration.Initializer.parameter._">_</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.CorsIntegration.Initializer.parameter.props">props</a></code> | <code><a href="#@alma-cdk/openapix.CorsIntegrationProps">CorsIntegrationProps</a></code> | *No description.* |

---

##### `_`<sup>Required</sup> <a name="_" id="@alma-cdk/openapix.CorsIntegration.Initializer.parameter._"></a>

- *Type:* constructs.Construct

---

##### `props`<sup>Required</sup> <a name="props" id="@alma-cdk/openapix.CorsIntegration.Initializer.parameter.props"></a>

- *Type:* <a href="#@alma-cdk/openapix.CorsIntegrationProps">CorsIntegrationProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.CorsIntegration.property.type">type</a></code> | <code><a href="#@alma-cdk/openapix.InternalIntegrationType">InternalIntegrationType</a></code> | Identifier to enable internal type checks. |
| <code><a href="#@alma-cdk/openapix.CorsIntegration.property.xAmazonApigatewayIntegration">xAmazonApigatewayIntegration</a></code> | <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration">XAmazonApigatewayIntegration</a></code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.CorsIntegration.property.validator">validator</a></code> | <code>string</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="@alma-cdk/openapix.CorsIntegration.property.type"></a>

```typescript
public readonly type: InternalIntegrationType;
```

- *Type:* <a href="#@alma-cdk/openapix.InternalIntegrationType">InternalIntegrationType</a>

Identifier to enable internal type checks.

---

##### `xAmazonApigatewayIntegration`<sup>Required</sup> <a name="xAmazonApigatewayIntegration" id="@alma-cdk/openapix.CorsIntegration.property.xAmazonApigatewayIntegration"></a>

```typescript
public readonly xAmazonApigatewayIntegration: XAmazonApigatewayIntegration;
```

- *Type:* <a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration">XAmazonApigatewayIntegration</a>

---

##### `validator`<sup>Optional</sup> <a name="validator" id="@alma-cdk/openapix.CorsIntegration.property.validator"></a>

```typescript
public readonly validator: string;
```

- *Type:* string

---


### CorsMethods <a name="CorsMethods" id="@alma-cdk/openapix.CorsMethods"></a>

#### Initializers <a name="Initializers" id="@alma-cdk/openapix.CorsMethods.Initializer"></a>

```typescript
import { CorsMethods } from '@alma-cdk/openapix'

new CorsMethods()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/openapix.CorsMethods.from">from</a></code> | *No description.* |

---

##### `from` <a name="from" id="@alma-cdk/openapix.CorsMethods.from"></a>

```typescript
import { CorsMethods } from '@alma-cdk/openapix'

CorsMethods.from(scope: Construct, values: ...string[])
```

###### `scope`<sup>Required</sup> <a name="scope" id="@alma-cdk/openapix.CorsMethods.from.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `values`<sup>Required</sup> <a name="values" id="@alma-cdk/openapix.CorsMethods.from.parameter.values"></a>

- *Type:* ...string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.CorsMethods.property.ANY">ANY</a></code> | <code>string</code> | *No description.* |

---

##### `ANY`<sup>Required</sup> <a name="ANY" id="@alma-cdk/openapix.CorsMethods.property.ANY"></a>

```typescript
public readonly ANY: string;
```

- *Type:* string

---

### CorsOrigins <a name="CorsOrigins" id="@alma-cdk/openapix.CorsOrigins"></a>

#### Initializers <a name="Initializers" id="@alma-cdk/openapix.CorsOrigins.Initializer"></a>

```typescript
import { CorsOrigins } from '@alma-cdk/openapix'

new CorsOrigins()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/openapix.CorsOrigins.from">from</a></code> | *No description.* |

---

##### `from` <a name="from" id="@alma-cdk/openapix.CorsOrigins.from"></a>

```typescript
import { CorsOrigins } from '@alma-cdk/openapix'

CorsOrigins.from(scope: Construct, values: ...string[])
```

###### `scope`<sup>Required</sup> <a name="scope" id="@alma-cdk/openapix.CorsOrigins.from.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `values`<sup>Required</sup> <a name="values" id="@alma-cdk/openapix.CorsOrigins.from.parameter.values"></a>

- *Type:* ...string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.CorsOrigins.property.ANY">ANY</a></code> | <code>string</code> | *No description.* |

---

##### `ANY`<sup>Required</sup> <a name="ANY" id="@alma-cdk/openapix.CorsOrigins.property.ANY"></a>

```typescript
public readonly ANY: string;
```

- *Type:* string

---

### HttpIntegration <a name="HttpIntegration" id="@alma-cdk/openapix.HttpIntegration"></a>

Defines a HTTP(S) integration.

#### Initializers <a name="Initializers" id="@alma-cdk/openapix.HttpIntegration.Initializer"></a>

```typescript
import { HttpIntegration } from '@alma-cdk/openapix'

new HttpIntegration(_: Construct, url: string, props?: HttpIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.HttpIntegration.Initializer.parameter._">_</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.HttpIntegration.Initializer.parameter.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.HttpIntegration.Initializer.parameter.props">props</a></code> | <code><a href="#@alma-cdk/openapix.HttpIntegrationProps">HttpIntegrationProps</a></code> | *No description.* |

---

##### `_`<sup>Required</sup> <a name="_" id="@alma-cdk/openapix.HttpIntegration.Initializer.parameter._"></a>

- *Type:* constructs.Construct

---

##### `url`<sup>Required</sup> <a name="url" id="@alma-cdk/openapix.HttpIntegration.Initializer.parameter.url"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@alma-cdk/openapix.HttpIntegration.Initializer.parameter.props"></a>

- *Type:* <a href="#@alma-cdk/openapix.HttpIntegrationProps">HttpIntegrationProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.HttpIntegration.property.type">type</a></code> | <code><a href="#@alma-cdk/openapix.InternalIntegrationType">InternalIntegrationType</a></code> | Identifier to enable internal type checks. |
| <code><a href="#@alma-cdk/openapix.HttpIntegration.property.xAmazonApigatewayIntegration">xAmazonApigatewayIntegration</a></code> | <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration">XAmazonApigatewayIntegration</a></code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.HttpIntegration.property.validator">validator</a></code> | <code>string</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="@alma-cdk/openapix.HttpIntegration.property.type"></a>

```typescript
public readonly type: InternalIntegrationType;
```

- *Type:* <a href="#@alma-cdk/openapix.InternalIntegrationType">InternalIntegrationType</a>

Identifier to enable internal type checks.

---

##### `xAmazonApigatewayIntegration`<sup>Required</sup> <a name="xAmazonApigatewayIntegration" id="@alma-cdk/openapix.HttpIntegration.property.xAmazonApigatewayIntegration"></a>

```typescript
public readonly xAmazonApigatewayIntegration: XAmazonApigatewayIntegration;
```

- *Type:* <a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration">XAmazonApigatewayIntegration</a>

---

##### `validator`<sup>Optional</sup> <a name="validator" id="@alma-cdk/openapix.HttpIntegration.property.validator"></a>

```typescript
public readonly validator: string;
```

- *Type:* string

---


### Integration <a name="Integration" id="@alma-cdk/openapix.Integration"></a>

- *Implements:* <a href="#@alma-cdk/openapix.IBaseIntegration">IBaseIntegration</a>

Essentially responsible for converting CDK `IntegrationProps` into API Gateway OpenApi integration extension ()`XAmazonApigatewayIntegration`).

Also defines few basic methods (`getIntegration` & `getValidatorId`) used
by derivative classes.

#### Initializers <a name="Initializers" id="@alma-cdk/openapix.Integration.Initializer"></a>

```typescript
import { Integration } from '@alma-cdk/openapix'

new Integration(props: IntegrationProps, config: IntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.Integration.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_apigateway.IntegrationProps</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.Integration.Initializer.parameter.config">config</a></code> | <code><a href="#@alma-cdk/openapix.IntegrationConfig">IntegrationConfig</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@alma-cdk/openapix.Integration.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_apigateway.IntegrationProps

---

##### `config`<sup>Required</sup> <a name="config" id="@alma-cdk/openapix.Integration.Initializer.parameter.config"></a>

- *Type:* <a href="#@alma-cdk/openapix.IntegrationConfig">IntegrationConfig</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.Integration.property.type">type</a></code> | <code><a href="#@alma-cdk/openapix.InternalIntegrationType">InternalIntegrationType</a></code> | Identifier to enable internal type checks. |
| <code><a href="#@alma-cdk/openapix.Integration.property.xAmazonApigatewayIntegration">xAmazonApigatewayIntegration</a></code> | <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration">XAmazonApigatewayIntegration</a></code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.Integration.property.validator">validator</a></code> | <code>string</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="@alma-cdk/openapix.Integration.property.type"></a>

```typescript
public readonly type: InternalIntegrationType;
```

- *Type:* <a href="#@alma-cdk/openapix.InternalIntegrationType">InternalIntegrationType</a>

Identifier to enable internal type checks.

---

##### `xAmazonApigatewayIntegration`<sup>Required</sup> <a name="xAmazonApigatewayIntegration" id="@alma-cdk/openapix.Integration.property.xAmazonApigatewayIntegration"></a>

```typescript
public readonly xAmazonApigatewayIntegration: XAmazonApigatewayIntegration;
```

- *Type:* <a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration">XAmazonApigatewayIntegration</a>

---

##### `validator`<sup>Optional</sup> <a name="validator" id="@alma-cdk/openapix.Integration.property.validator"></a>

```typescript
public readonly validator: string;
```

- *Type:* string

---


### LambdaIntegration <a name="LambdaIntegration" id="@alma-cdk/openapix.LambdaIntegration"></a>

Defines an AWS Lambda integration.

#### Initializers <a name="Initializers" id="@alma-cdk/openapix.LambdaIntegration.Initializer"></a>

```typescript
import { LambdaIntegration } from '@alma-cdk/openapix'

new LambdaIntegration(scope: Construct, fn: IFunction, props?: LambdaIntegrationOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.LambdaIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.LambdaIntegration.Initializer.parameter.fn">fn</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.LambdaIntegration.Initializer.parameter.props">props</a></code> | <code><a href="#@alma-cdk/openapix.LambdaIntegrationOptions">LambdaIntegrationOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@alma-cdk/openapix.LambdaIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `fn`<sup>Required</sup> <a name="fn" id="@alma-cdk/openapix.LambdaIntegration.Initializer.parameter.fn"></a>

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---

##### `props`<sup>Optional</sup> <a name="props" id="@alma-cdk/openapix.LambdaIntegration.Initializer.parameter.props"></a>

- *Type:* <a href="#@alma-cdk/openapix.LambdaIntegrationOptions">LambdaIntegrationOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/openapix.LambdaIntegration.grantFunctionInvoke">grantFunctionInvoke</a></code> | Allow Lambda invoke action to be performed by given identity. |

---

##### `grantFunctionInvoke` <a name="grantFunctionInvoke" id="@alma-cdk/openapix.LambdaIntegration.grantFunctionInvoke"></a>

```typescript
public grantFunctionInvoke(scope: Construct, executeApiArn: string): void
```

Allow Lambda invoke action to be performed by given identity.

###### `scope`<sup>Required</sup> <a name="scope" id="@alma-cdk/openapix.LambdaIntegration.grantFunctionInvoke.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `executeApiArn`<sup>Required</sup> <a name="executeApiArn" id="@alma-cdk/openapix.LambdaIntegration.grantFunctionInvoke.parameter.executeApiArn"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.LambdaIntegration.property.type">type</a></code> | <code><a href="#@alma-cdk/openapix.InternalIntegrationType">InternalIntegrationType</a></code> | Identifier to enable internal type checks. |
| <code><a href="#@alma-cdk/openapix.LambdaIntegration.property.xAmazonApigatewayIntegration">xAmazonApigatewayIntegration</a></code> | <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration">XAmazonApigatewayIntegration</a></code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.LambdaIntegration.property.validator">validator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.LambdaIntegration.property.fn">fn</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="@alma-cdk/openapix.LambdaIntegration.property.type"></a>

```typescript
public readonly type: InternalIntegrationType;
```

- *Type:* <a href="#@alma-cdk/openapix.InternalIntegrationType">InternalIntegrationType</a>

Identifier to enable internal type checks.

---

##### `xAmazonApigatewayIntegration`<sup>Required</sup> <a name="xAmazonApigatewayIntegration" id="@alma-cdk/openapix.LambdaIntegration.property.xAmazonApigatewayIntegration"></a>

```typescript
public readonly xAmazonApigatewayIntegration: XAmazonApigatewayIntegration;
```

- *Type:* <a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration">XAmazonApigatewayIntegration</a>

---

##### `validator`<sup>Optional</sup> <a name="validator" id="@alma-cdk/openapix.LambdaIntegration.property.validator"></a>

```typescript
public readonly validator: string;
```

- *Type:* string

---

##### `fn`<sup>Required</sup> <a name="fn" id="@alma-cdk/openapix.LambdaIntegration.property.fn"></a>

```typescript
public readonly fn: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---


### MockIntegration <a name="MockIntegration" id="@alma-cdk/openapix.MockIntegration"></a>

Defines Mock integration.

#### Initializers <a name="Initializers" id="@alma-cdk/openapix.MockIntegration.Initializer"></a>

```typescript
import { MockIntegration } from '@alma-cdk/openapix'

new MockIntegration(props?: MockIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.MockIntegration.Initializer.parameter.props">props</a></code> | <code><a href="#@alma-cdk/openapix.MockIntegrationProps">MockIntegrationProps</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@alma-cdk/openapix.MockIntegration.Initializer.parameter.props"></a>

- *Type:* <a href="#@alma-cdk/openapix.MockIntegrationProps">MockIntegrationProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.MockIntegration.property.type">type</a></code> | <code><a href="#@alma-cdk/openapix.InternalIntegrationType">InternalIntegrationType</a></code> | Identifier to enable internal type checks. |
| <code><a href="#@alma-cdk/openapix.MockIntegration.property.xAmazonApigatewayIntegration">xAmazonApigatewayIntegration</a></code> | <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration">XAmazonApigatewayIntegration</a></code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.MockIntegration.property.validator">validator</a></code> | <code>string</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="@alma-cdk/openapix.MockIntegration.property.type"></a>

```typescript
public readonly type: InternalIntegrationType;
```

- *Type:* <a href="#@alma-cdk/openapix.InternalIntegrationType">InternalIntegrationType</a>

Identifier to enable internal type checks.

---

##### `xAmazonApigatewayIntegration`<sup>Required</sup> <a name="xAmazonApigatewayIntegration" id="@alma-cdk/openapix.MockIntegration.property.xAmazonApigatewayIntegration"></a>

```typescript
public readonly xAmazonApigatewayIntegration: XAmazonApigatewayIntegration;
```

- *Type:* <a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration">XAmazonApigatewayIntegration</a>

---

##### `validator`<sup>Optional</sup> <a name="validator" id="@alma-cdk/openapix.MockIntegration.property.validator"></a>

```typescript
public readonly validator: string;
```

- *Type:* string

---


### Schema <a name="Schema" id="@alma-cdk/openapix.Schema"></a>

Represents an OpenApi v3 Schema which can be deserialized from YAML-file, modified and then serialized back to YAML.

#### Initializers <a name="Initializers" id="@alma-cdk/openapix.Schema.Initializer"></a>

```typescript
import { Schema } from '@alma-cdk/openapix'

new Schema(props: SchemaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.Schema.Initializer.parameter.props">props</a></code> | <code><a href="#@alma-cdk/openapix.SchemaProps">SchemaProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@alma-cdk/openapix.Schema.Initializer.parameter.props"></a>

- *Type:* <a href="#@alma-cdk/openapix.SchemaProps">SchemaProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/openapix.Schema.get">get</a></code> | Get a value from given object path. |
| <code><a href="#@alma-cdk/openapix.Schema.has">has</a></code> | Check if definition has a value in given object path. |
| <code><a href="#@alma-cdk/openapix.Schema.inject">inject</a></code> | Inject multiple values to given paths. |
| <code><a href="#@alma-cdk/openapix.Schema.reject">reject</a></code> | Reject – i.e. remove values – from given object paths. |
| <code><a href="#@alma-cdk/openapix.Schema.rejectDeep">rejectDeep</a></code> | Reject deep within object – i.e. remove all nested object paths. |
| <code><a href="#@alma-cdk/openapix.Schema.set">set</a></code> | Set a value to given object path. |
| <code><a href="#@alma-cdk/openapix.Schema.toAsset">toAsset</a></code> | Return the OpenApi v3 document as an S3 Asset. |
| <code><a href="#@alma-cdk/openapix.Schema.toDocument">toDocument</a></code> | Return the actual OpenApi v3 document. |
| <code><a href="#@alma-cdk/openapix.Schema.toJson">toJson</a></code> | Serialize to JSON string. |
| <code><a href="#@alma-cdk/openapix.Schema.toYaml">toYaml</a></code> | Serialize to YAML string. |

---

##### `get` <a name="get" id="@alma-cdk/openapix.Schema.get"></a>

```typescript
public get(path: string): any
```

Get a value from given object path.

###### `path`<sup>Required</sup> <a name="path" id="@alma-cdk/openapix.Schema.get.parameter.path"></a>

- *Type:* string

---

##### `has` <a name="has" id="@alma-cdk/openapix.Schema.has"></a>

```typescript
public has(path: string): boolean
```

Check if definition has a value in given object path.

###### `path`<sup>Required</sup> <a name="path" id="@alma-cdk/openapix.Schema.has.parameter.path"></a>

- *Type:* string

---

##### `inject` <a name="inject" id="@alma-cdk/openapix.Schema.inject"></a>

```typescript
public inject(records?: {[ key: string ]: any}): void
```

Inject multiple values to given paths.

###### `records`<sup>Optional</sup> <a name="records" id="@alma-cdk/openapix.Schema.inject.parameter.records"></a>

- *Type:* {[ key: string ]: any}

---

##### `reject` <a name="reject" id="@alma-cdk/openapix.Schema.reject"></a>

```typescript
public reject(paths?: string[]): void
```

Reject – i.e. remove values – from given object paths.

###### `paths`<sup>Optional</sup> <a name="paths" id="@alma-cdk/openapix.Schema.reject.parameter.paths"></a>

- *Type:* string[]

---

##### `rejectDeep` <a name="rejectDeep" id="@alma-cdk/openapix.Schema.rejectDeep"></a>

```typescript
public rejectDeep(paths?: string[]): void
```

Reject deep within object – i.e. remove all nested object paths.

###### `paths`<sup>Optional</sup> <a name="paths" id="@alma-cdk/openapix.Schema.rejectDeep.parameter.paths"></a>

- *Type:* string[]

---

##### `set` <a name="set" id="@alma-cdk/openapix.Schema.set"></a>

```typescript
public set(path: string, value: any): void
```

Set a value to given object path.

###### `path`<sup>Required</sup> <a name="path" id="@alma-cdk/openapix.Schema.set.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@alma-cdk/openapix.Schema.set.parameter.value"></a>

- *Type:* any

---

##### `toAsset` <a name="toAsset" id="@alma-cdk/openapix.Schema.toAsset"></a>

```typescript
public toAsset(scope: Construct, id: string): Asset
```

Return the OpenApi v3 document as an S3 Asset.

###### `scope`<sup>Required</sup> <a name="scope" id="@alma-cdk/openapix.Schema.toAsset.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@alma-cdk/openapix.Schema.toAsset.parameter.id"></a>

- *Type:* string

---

##### `toDocument` <a name="toDocument" id="@alma-cdk/openapix.Schema.toDocument"></a>

```typescript
public toDocument(): IDocument
```

Return the actual OpenApi v3 document.

##### `toJson` <a name="toJson" id="@alma-cdk/openapix.Schema.toJson"></a>

```typescript
public toJson(): string
```

Serialize to JSON string.

##### `toYaml` <a name="toYaml" id="@alma-cdk/openapix.Schema.toYaml"></a>

```typescript
public toYaml(): string
```

Serialize to YAML string.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/openapix.Schema.fromAsset">fromAsset</a></code> | Parse OpenApi v3 schema by loading a YAML file from given path. |
| <code><a href="#@alma-cdk/openapix.Schema.fromInline">fromInline</a></code> | Parse OpenApi v3 schema from inline YAML content. |

---

##### `fromAsset` <a name="fromAsset" id="@alma-cdk/openapix.Schema.fromAsset"></a>

```typescript
import { Schema } from '@alma-cdk/openapix'

Schema.fromAsset(path: string)
```

Parse OpenApi v3 schema by loading a YAML file from given path.

###### `path`<sup>Required</sup> <a name="path" id="@alma-cdk/openapix.Schema.fromAsset.parameter.path"></a>

- *Type:* string

---

##### `fromInline` <a name="fromInline" id="@alma-cdk/openapix.Schema.fromInline"></a>

```typescript
import { Schema } from '@alma-cdk/openapix'

Schema.fromInline(content: string)
```

Parse OpenApi v3 schema from inline YAML content.

###### `content`<sup>Required</sup> <a name="content" id="@alma-cdk/openapix.Schema.fromInline.parameter.content"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.Schema.property.openApiSupportedVersions">openApiSupportedVersions</a></code> | <code>string</code> | A string representing supported SemVer range. |
| <code><a href="#@alma-cdk/openapix.Schema.property.openApiVersion">openApiVersion</a></code> | <code>string</code> | OpenApi version used by schema document. |

---

##### `openApiSupportedVersions`<sup>Required</sup> <a name="openApiSupportedVersions" id="@alma-cdk/openapix.Schema.property.openApiSupportedVersions"></a>

```typescript
public readonly openApiSupportedVersions: string;
```

- *Type:* string

A string representing supported SemVer range.

> [https://github.com/npm/node-semver](https://github.com/npm/node-semver)

---

##### `openApiVersion`<sup>Required</sup> <a name="openApiVersion" id="@alma-cdk/openapix.Schema.property.openApiVersion"></a>

```typescript
public readonly openApiVersion: string;
```

- *Type:* string

OpenApi version used by schema document.

---

*Example*

```typescript
'3.0.3'
```



## Protocols <a name="Protocols" id="Protocols"></a>

### IBaseIntegration <a name="IBaseIntegration" id="@alma-cdk/openapix.IBaseIntegration"></a>

- *Implemented By:* <a href="#@alma-cdk/openapix.AwsIntegration">AwsIntegration</a>, <a href="#@alma-cdk/openapix.CorsIntegration">CorsIntegration</a>, <a href="#@alma-cdk/openapix.HttpIntegration">HttpIntegration</a>, <a href="#@alma-cdk/openapix.Integration">Integration</a>, <a href="#@alma-cdk/openapix.LambdaIntegration">LambdaIntegration</a>, <a href="#@alma-cdk/openapix.MockIntegration">MockIntegration</a>, <a href="#@alma-cdk/openapix.IBaseIntegration">IBaseIntegration</a>

Interface implemented by all integrations.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IBaseIntegration.property.type">type</a></code> | <code><a href="#@alma-cdk/openapix.InternalIntegrationType">InternalIntegrationType</a></code> | Identifier to enable internal type checks. |
| <code><a href="#@alma-cdk/openapix.IBaseIntegration.property.xAmazonApigatewayIntegration">xAmazonApigatewayIntegration</a></code> | <code><a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration">XAmazonApigatewayIntegration</a></code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.IBaseIntegration.property.validator">validator</a></code> | <code>string</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="@alma-cdk/openapix.IBaseIntegration.property.type"></a>

```typescript
public readonly type: InternalIntegrationType;
```

- *Type:* <a href="#@alma-cdk/openapix.InternalIntegrationType">InternalIntegrationType</a>

Identifier to enable internal type checks.

---

##### `xAmazonApigatewayIntegration`<sup>Required</sup> <a name="xAmazonApigatewayIntegration" id="@alma-cdk/openapix.IBaseIntegration.property.xAmazonApigatewayIntegration"></a>

```typescript
public readonly xAmazonApigatewayIntegration: XAmazonApigatewayIntegration;
```

- *Type:* <a href="#@alma-cdk/openapix.XAmazonApigatewayIntegration">XAmazonApigatewayIntegration</a>

---

##### `validator`<sup>Optional</sup> <a name="validator" id="@alma-cdk/openapix.IBaseIntegration.property.validator"></a>

```typescript
public readonly validator: string;
```

- *Type:* string

---

### ICallbackObject <a name="ICallbackObject" id="@alma-cdk/openapix.ICallbackObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.ICallbackObject">ICallbackObject</a>

A map of possible out-of band callbacks related to the parent operation.

Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.



### IComponentsObject <a name="IComponentsObject" id="@alma-cdk/openapix.IComponentsObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IComponentsObject">IComponentsObject</a>

Holds a set of reusable objects for different aspects of the OAS.

All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IComponentsObject.property.callbacks">callbacks</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.ICallbackObject">ICallbackObject</a>}</code> | An object to hold reusable Callback Objects. |
| <code><a href="#@alma-cdk/openapix.IComponentsObject.property.examples">examples</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.IExampleObject">IExampleObject</a>}</code> | An object to hold reusable Example Objects. |
| <code><a href="#@alma-cdk/openapix.IComponentsObject.property.headers">headers</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.IHeaderObject">IHeaderObject</a>}</code> | An object to hold reusable Header Objects. |
| <code><a href="#@alma-cdk/openapix.IComponentsObject.property.links">links</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.ILinkObject">ILinkObject</a>}</code> | An object to hold reusable Link Objects. |
| <code><a href="#@alma-cdk/openapix.IComponentsObject.property.parameters">parameters</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.IParameterObject">IParameterObject</a>}</code> | An object to hold reusable Parameter Objects. |
| <code><a href="#@alma-cdk/openapix.IComponentsObject.property.requestBodies">requestBodies</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.IRequestBodyObject">IRequestBodyObject</a>}</code> | An object to hold reusable Request Body Objects. |
| <code><a href="#@alma-cdk/openapix.IComponentsObject.property.responses">responses</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.IResponseObject">IResponseObject</a>}</code> | An object to hold reusable Response Objects. |
| <code><a href="#@alma-cdk/openapix.IComponentsObject.property.schemas">schemas</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.ISchemaObject">ISchemaObject</a>}</code> | An object to hold reusable Schema Objects. |
| <code><a href="#@alma-cdk/openapix.IComponentsObject.property.securitySchemes">securitySchemes</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.ISecuritySchemeObject">ISecuritySchemeObject</a>}</code> | An object to hold reusable Security Scheme Objects. |

---

##### `callbacks`<sup>Optional</sup> <a name="callbacks" id="@alma-cdk/openapix.IComponentsObject.property.callbacks"></a>

```typescript
public readonly callbacks: {[ key: string ]: IReferenceObject | ICallbackObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.ICallbackObject">ICallbackObject</a>}

An object to hold reusable Callback Objects.

---

##### `examples`<sup>Optional</sup> <a name="examples" id="@alma-cdk/openapix.IComponentsObject.property.examples"></a>

```typescript
public readonly examples: {[ key: string ]: IReferenceObject | IExampleObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.IExampleObject">IExampleObject</a>}

An object to hold reusable Example Objects.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@alma-cdk/openapix.IComponentsObject.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: IReferenceObject | IHeaderObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.IHeaderObject">IHeaderObject</a>}

An object to hold reusable Header Objects.

---

##### `links`<sup>Optional</sup> <a name="links" id="@alma-cdk/openapix.IComponentsObject.property.links"></a>

```typescript
public readonly links: {[ key: string ]: IReferenceObject | ILinkObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.ILinkObject">ILinkObject</a>}

An object to hold reusable Link Objects.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@alma-cdk/openapix.IComponentsObject.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: IReferenceObject | IParameterObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.IParameterObject">IParameterObject</a>}

An object to hold reusable Parameter Objects.

---

##### `requestBodies`<sup>Optional</sup> <a name="requestBodies" id="@alma-cdk/openapix.IComponentsObject.property.requestBodies"></a>

```typescript
public readonly requestBodies: {[ key: string ]: IReferenceObject | IRequestBodyObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.IRequestBodyObject">IRequestBodyObject</a>}

An object to hold reusable Request Body Objects.

---

##### `responses`<sup>Optional</sup> <a name="responses" id="@alma-cdk/openapix.IComponentsObject.property.responses"></a>

```typescript
public readonly responses: {[ key: string ]: IReferenceObject | IResponseObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.IResponseObject">IResponseObject</a>}

An object to hold reusable Response Objects.

---

##### `schemas`<sup>Optional</sup> <a name="schemas" id="@alma-cdk/openapix.IComponentsObject.property.schemas"></a>

```typescript
public readonly schemas: {[ key: string ]: IReferenceObject | ISchemaObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.ISchemaObject">ISchemaObject</a>}

An object to hold reusable Schema Objects.

---

##### `securitySchemes`<sup>Optional</sup> <a name="securitySchemes" id="@alma-cdk/openapix.IComponentsObject.property.securitySchemes"></a>

```typescript
public readonly securitySchemes: {[ key: string ]: IReferenceObject | ISecuritySchemeObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.ISecuritySchemeObject">ISecuritySchemeObject</a>}

An object to hold reusable Security Scheme Objects.

---

### IContactObject <a name="IContactObject" id="@alma-cdk/openapix.IContactObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IContactObject">IContactObject</a>

The contact information for the exposed API.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IContactObject.property.email">email</a></code> | <code>string</code> | The email address of the contact person/organization. |
| <code><a href="#@alma-cdk/openapix.IContactObject.property.name">name</a></code> | <code>string</code> | The identifying name of the contact person/organization. |
| <code><a href="#@alma-cdk/openapix.IContactObject.property.url">url</a></code> | <code>string</code> | The URL pointing to the contact information. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@alma-cdk/openapix.IContactObject.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The email address of the contact person/organization.

MUST be in the format of an email address.

---

##### `name`<sup>Optional</sup> <a name="name" id="@alma-cdk/openapix.IContactObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The identifying name of the contact person/organization.

---

##### `url`<sup>Optional</sup> <a name="url" id="@alma-cdk/openapix.IContactObject.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL pointing to the contact information.

MUST be in the format of a URL.

---

### IDiscriminatorObject <a name="IDiscriminatorObject" id="@alma-cdk/openapix.IDiscriminatorObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IDiscriminatorObject">IDiscriminatorObject</a>

When request bodies or response payloads may be one of a number of different schemas, a discriminator object can be used to aid in serialization, deserialization, and validation.

The discriminator is a specific object in a schema which is used to inform the consumer of the specification of an alternative schema based on the value associated with it. When using the discriminator, inline schemas will not be considered.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IDiscriminatorObject.property.propertyName">propertyName</a></code> | <code>string</code> | The name of the property in the payload that will hold the discriminator value. |
| <code><a href="#@alma-cdk/openapix.IDiscriminatorObject.property.mapping">mapping</a></code> | <code>{[ key: string ]: string}</code> | An object to hold mappings between payload values and schema names or references. |

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@alma-cdk/openapix.IDiscriminatorObject.property.propertyName"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* string

The name of the property in the payload that will hold the discriminator value.

---

##### `mapping`<sup>Optional</sup> <a name="mapping" id="@alma-cdk/openapix.IDiscriminatorObject.property.mapping"></a>

```typescript
public readonly mapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An object to hold mappings between payload values and schema names or references.

---

### IDocument <a name="IDocument" id="@alma-cdk/openapix.IDocument"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IDocument">IDocument</a>

Describes a mutable OpenApi v3 Document.

Essentially the same as `SchemaProps` but without `readonly` definitions.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IDocument.property.info">info</a></code> | <code><a href="#@alma-cdk/openapix.IInfoObject">IInfoObject</a></code> | Provides metadata about the API. |
| <code><a href="#@alma-cdk/openapix.IDocument.property.openapi">openapi</a></code> | <code>string</code> | This string MUST be the semantic version number of the OpenAPI Specification version that the OpenAPI document uses. |
| <code><a href="#@alma-cdk/openapix.IDocument.property.paths">paths</a></code> | <code><a href="#@alma-cdk/openapix.IPathsObject">IPathsObject</a></code> | The available paths and operations for the API. |
| <code><a href="#@alma-cdk/openapix.IDocument.property.components">components</a></code> | <code><a href="#@alma-cdk/openapix.IComponentsObject">IComponentsObject</a></code> | An element to hold various schemas for the specification. |
| <code><a href="#@alma-cdk/openapix.IDocument.property.externalDocs">externalDocs</a></code> | <code><a href="#@alma-cdk/openapix.IExternalDocumentationObject">IExternalDocumentationObject</a></code> | Additional external documentation. |
| <code><a href="#@alma-cdk/openapix.IDocument.property.security">security</a></code> | <code><a href="#@alma-cdk/openapix.ISecurityRequirementObject">ISecurityRequirementObject</a>[]</code> | A declaration of which security mechanisms can be used across the API. |
| <code><a href="#@alma-cdk/openapix.IDocument.property.servers">servers</a></code> | <code><a href="#@alma-cdk/openapix.IServerObject">IServerObject</a>[]</code> | An array of Server Objects, which provide connectivity information to a target server. |
| <code><a href="#@alma-cdk/openapix.IDocument.property.tags">tags</a></code> | <code><a href="#@alma-cdk/openapix.ITagObject">ITagObject</a>[]</code> | A list of tags used by the specification with additional metadata. |

---

##### `info`<sup>Required</sup> <a name="info" id="@alma-cdk/openapix.IDocument.property.info"></a>

```typescript
public readonly info: IInfoObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IInfoObject">IInfoObject</a>

Provides metadata about the API.

The metadata MAY be used by tooling as required.

---

*Example*

```typescript
{
  title: "FancyPants API",
  version: "1.23.105",
}
```


##### `openapi`<sup>Required</sup> <a name="openapi" id="@alma-cdk/openapix.IDocument.property.openapi"></a>

```typescript
public readonly openapi: string;
```

- *Type:* string

This string MUST be the semantic version number of the OpenAPI Specification version that the OpenAPI document uses.

The openapi field SHOULD be used by tooling specifications and clients to interpret the OpenAPI document. This is not related to the API info.version string.

---

*Example*

```typescript
'3.0.0'
```


##### `paths`<sup>Required</sup> <a name="paths" id="@alma-cdk/openapix.IDocument.property.paths"></a>

```typescript
public readonly paths: IPathsObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IPathsObject">IPathsObject</a>

The available paths and operations for the API.

---

##### `components`<sup>Optional</sup> <a name="components" id="@alma-cdk/openapix.IDocument.property.components"></a>

```typescript
public readonly components: IComponentsObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IComponentsObject">IComponentsObject</a>

An element to hold various schemas for the specification.

---

##### `externalDocs`<sup>Optional</sup> <a name="externalDocs" id="@alma-cdk/openapix.IDocument.property.externalDocs"></a>

```typescript
public readonly externalDocs: IExternalDocumentationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IExternalDocumentationObject">IExternalDocumentationObject</a>

Additional external documentation.

---

##### `security`<sup>Optional</sup> <a name="security" id="@alma-cdk/openapix.IDocument.property.security"></a>

```typescript
public readonly security: ISecurityRequirementObject[];
```

- *Type:* <a href="#@alma-cdk/openapix.ISecurityRequirementObject">ISecurityRequirementObject</a>[]

A declaration of which security mechanisms can be used across the API.

The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. Individual operations can override this definition. To make security optional, an empty security requirement ({}) can be included in the array.

---

##### `servers`<sup>Optional</sup> <a name="servers" id="@alma-cdk/openapix.IDocument.property.servers"></a>

```typescript
public readonly servers: IServerObject[];
```

- *Type:* <a href="#@alma-cdk/openapix.IServerObject">IServerObject</a>[]

An array of Server Objects, which provide connectivity information to a target server.

If the servers property is not provided, or is an empty array, the default value would be a Server Object with a url value of /.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@alma-cdk/openapix.IDocument.property.tags"></a>

```typescript
public readonly tags: ITagObject[];
```

- *Type:* <a href="#@alma-cdk/openapix.ITagObject">ITagObject</a>[]

A list of tags used by the specification with additional metadata.

The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the Operation Object must be declared. The tags that are not declared MAY be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique.

---

### IEncodingObject <a name="IEncodingObject" id="@alma-cdk/openapix.IEncodingObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IEncodingObject">IEncodingObject</a>

A single encoding definition applied to a single schema property.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IEncodingObject.property.allowReserved">allowReserved</a></code> | <code>boolean</code> | Determines whether the parameter value SHOULD allow reserved characters, as defined by RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding. The default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded. |
| <code><a href="#@alma-cdk/openapix.IEncodingObject.property.contentType">contentType</a></code> | <code>string</code> | The Content-Type for encoding a specific property. |
| <code><a href="#@alma-cdk/openapix.IEncodingObject.property.explode">explode</a></code> | <code>boolean</code> | When this is true, property values of type array or object generate separate parameters for each value of the array, or key-value-pair of the map. |
| <code><a href="#@alma-cdk/openapix.IEncodingObject.property.headers">headers</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.IHeaderObject">IHeaderObject</a>}</code> | A map allowing additional information to be provided as headers, for example Content-Disposition. |
| <code><a href="#@alma-cdk/openapix.IEncodingObject.property.style">style</a></code> | <code>string</code> | Describes how a specific property value will be serialized depending on its type. |

---

##### `allowReserved`<sup>Optional</sup> <a name="allowReserved" id="@alma-cdk/openapix.IEncodingObject.property.allowReserved"></a>

```typescript
public readonly allowReserved: boolean;
```

- *Type:* boolean

Determines whether the parameter value SHOULD allow reserved characters, as defined by RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding. The default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@alma-cdk/openapix.IEncodingObject.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

The Content-Type for encoding a specific property.

Default value depends on the property type: for string with format being binary – application/octet-stream; for other primitive types – text/plain; for object - application/json; for array – the default is defined based on the inner type. The value can be a specific media type (e.g. application/json), a wildcard media type (e.g. image/*), or a comma-separated list of the two types.

---

##### `explode`<sup>Optional</sup> <a name="explode" id="@alma-cdk/openapix.IEncodingObject.property.explode"></a>

```typescript
public readonly explode: boolean;
```

- *Type:* boolean

When this is true, property values of type array or object generate separate parameters for each value of the array, or key-value-pair of the map.

For other types of properties this property has no effect. When style is form, the default value is true. For all other styles, the default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@alma-cdk/openapix.IEncodingObject.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: IReferenceObject | IHeaderObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.IHeaderObject">IHeaderObject</a>}

A map allowing additional information to be provided as headers, for example Content-Disposition.

Content-Type is described separately and SHALL be ignored in this section. This property SHALL be ignored if the request body media type is not a multipart.

---

##### `style`<sup>Optional</sup> <a name="style" id="@alma-cdk/openapix.IEncodingObject.property.style"></a>

```typescript
public readonly style: string;
```

- *Type:* string

Describes how a specific property value will be serialized depending on its type.

See Parameter Object for details on the style property. The behavior follows the same values as query parameters, including default values. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded.

---

### IExampleObject <a name="IExampleObject" id="@alma-cdk/openapix.IExampleObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IExampleObject">IExampleObject</a>

Example Object.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IExampleObject.property.description">description</a></code> | <code>string</code> | Long description for the example. |
| <code><a href="#@alma-cdk/openapix.IExampleObject.property.externalValue">externalValue</a></code> | <code>string</code> | A URL that points to the literal example. |
| <code><a href="#@alma-cdk/openapix.IExampleObject.property.summary">summary</a></code> | <code>string</code> | Short description for the example. |
| <code><a href="#@alma-cdk/openapix.IExampleObject.property.value">value</a></code> | <code>any</code> | Embedded literal example. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.IExampleObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Long description for the example.

CommonMark syntax MAY be used for rich text representation.

---

##### `externalValue`<sup>Optional</sup> <a name="externalValue" id="@alma-cdk/openapix.IExampleObject.property.externalValue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* string

A URL that points to the literal example.

This provides the capability to reference examples that cannot easily be included in JSON or YAML documents. The value field and externalValue field are mutually exclusive.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@alma-cdk/openapix.IExampleObject.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

Short description for the example.

---

##### `value`<sup>Optional</sup> <a name="value" id="@alma-cdk/openapix.IExampleObject.property.value"></a>

```typescript
public readonly value: any;
```

- *Type:* any

Embedded literal example.

The value field and externalValue field are mutually exclusive. To represent examples of media types that cannot naturally represented in JSON or YAML, use a string value to contain the example, escaping where necessary.

---

### IExtensible <a name="IExtensible" id="@alma-cdk/openapix.IExtensible"></a>

- *Implemented By:* <a href="#@alma-cdk/openapix.ICallbackObject">ICallbackObject</a>, <a href="#@alma-cdk/openapix.IComponentsObject">IComponentsObject</a>, <a href="#@alma-cdk/openapix.IContactObject">IContactObject</a>, <a href="#@alma-cdk/openapix.IDiscriminatorObject">IDiscriminatorObject</a>, <a href="#@alma-cdk/openapix.IDocument">IDocument</a>, <a href="#@alma-cdk/openapix.IEncodingObject">IEncodingObject</a>, <a href="#@alma-cdk/openapix.IExampleObject">IExampleObject</a>, <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>, <a href="#@alma-cdk/openapix.IExternalDocumentationObject">IExternalDocumentationObject</a>, <a href="#@alma-cdk/openapix.IHeaderObject">IHeaderObject</a>, <a href="#@alma-cdk/openapix.IInfoObject">IInfoObject</a>, <a href="#@alma-cdk/openapix.ILicenseObject">ILicenseObject</a>, <a href="#@alma-cdk/openapix.ILinkObject">ILinkObject</a>, <a href="#@alma-cdk/openapix.IMediaTypeObject">IMediaTypeObject</a>, <a href="#@alma-cdk/openapix.IOAuthFlowObject">IOAuthFlowObject</a>, <a href="#@alma-cdk/openapix.IOAuthFlowsObject">IOAuthFlowsObject</a>, <a href="#@alma-cdk/openapix.IOperationObject">IOperationObject</a>, <a href="#@alma-cdk/openapix.IParameterObject">IParameterObject</a>, <a href="#@alma-cdk/openapix.IPathItemObject">IPathItemObject</a>, <a href="#@alma-cdk/openapix.IPathsObject">IPathsObject</a>, <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a>, <a href="#@alma-cdk/openapix.IRequestBodyObject">IRequestBodyObject</a>, <a href="#@alma-cdk/openapix.IResponseObject">IResponseObject</a>, <a href="#@alma-cdk/openapix.IResponsesObject">IResponsesObject</a>, <a href="#@alma-cdk/openapix.ISchemaObject">ISchemaObject</a>, <a href="#@alma-cdk/openapix.ISecurityRequirementObject">ISecurityRequirementObject</a>, <a href="#@alma-cdk/openapix.ISecuritySchemeObject">ISecuritySchemeObject</a>, <a href="#@alma-cdk/openapix.IServerObject">IServerObject</a>, <a href="#@alma-cdk/openapix.IServerVariableObject">IServerVariableObject</a>, <a href="#@alma-cdk/openapix.ITagObject">ITagObject</a>, <a href="#@alma-cdk/openapix.IXmlObject">IXmlObject</a>

Allow Open Api Extensions via `x-` prefixed values.



### IExternalDocumentationObject <a name="IExternalDocumentationObject" id="@alma-cdk/openapix.IExternalDocumentationObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IExternalDocumentationObject">IExternalDocumentationObject</a>

Allows referencing an external resource for extended documentation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IExternalDocumentationObject.property.url">url</a></code> | <code>string</code> | The URL for the target documentation. |
| <code><a href="#@alma-cdk/openapix.IExternalDocumentationObject.property.description">description</a></code> | <code>string</code> | A short description of the target documentation. |

---

##### `url`<sup>Required</sup> <a name="url" id="@alma-cdk/openapix.IExternalDocumentationObject.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL for the target documentation.

Value MUST be in the format of a URL.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.IExternalDocumentationObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of the target documentation.

CommonMark syntax MAY be used for rich text representation.

---

### IHeaderObject <a name="IHeaderObject" id="@alma-cdk/openapix.IHeaderObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IHeaderObject">IHeaderObject</a>

The Header Object follows the structure of the Parameter Object with the following changes:.

1. name MUST NOT be specified, it is given in the corresponding headers map.
2. in MUST NOT be specified, it is implicitly in header.
3. All traits that are affected by the location MUST be applicable to a location of header (for example, style).


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IHeaderObject.property.allowEmptyValue">allowEmptyValue</a></code> | <code>boolean</code> | Sets the ability to pass empty-valued parameters. |
| <code><a href="#@alma-cdk/openapix.IHeaderObject.property.deprecated">deprecated</a></code> | <code>boolean</code> | Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. |
| <code><a href="#@alma-cdk/openapix.IHeaderObject.property.description">description</a></code> | <code>string</code> | A brief description of the parameter. |
| <code><a href="#@alma-cdk/openapix.IHeaderObject.property.required">required</a></code> | <code>boolean</code> | Determines whether this parameter is mandatory. |

---

##### `allowEmptyValue`<sup>Optional</sup> <a name="allowEmptyValue" id="@alma-cdk/openapix.IHeaderObject.property.allowEmptyValue"></a>

```typescript
public readonly allowEmptyValue: boolean;
```

- *Type:* boolean

Sets the ability to pass empty-valued parameters.

This is valid only for query parameters and allows sending a parameter with an empty value. Default value is false. If style is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@alma-cdk/openapix.IHeaderObject.property.deprecated"></a>

```typescript
public readonly deprecated: boolean;
```

- *Type:* boolean

Specifies that a parameter is deprecated and SHOULD be transitioned out of usage.

Default value is false.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.IHeaderObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A brief description of the parameter.

This could contain examples of use. CommonMark syntax MAY be used for rich text representation.

---

##### `required`<sup>Optional</sup> <a name="required" id="@alma-cdk/openapix.IHeaderObject.property.required"></a>

```typescript
public readonly required: boolean;
```

- *Type:* boolean

Determines whether this parameter is mandatory.

If the parameter location is "path", this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be included and its default value is false.

---

### IInfoObject <a name="IInfoObject" id="@alma-cdk/openapix.IInfoObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IInfoObject">IInfoObject</a>

The object provides metadata about the API.

The metadata MAY be used by the clients if needed, and MAY be presented in editing or documentation generation tools for convenience.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IInfoObject.property.title">title</a></code> | <code>string</code> | The title of the API. |
| <code><a href="#@alma-cdk/openapix.IInfoObject.property.version">version</a></code> | <code>string</code> | The version of the OpenAPI document (which is distinct from the OpenAPI Specification version or the API implementation version). |
| <code><a href="#@alma-cdk/openapix.IInfoObject.property.contact">contact</a></code> | <code><a href="#@alma-cdk/openapix.IContactObject">IContactObject</a></code> | The contact information for the exposed API. |
| <code><a href="#@alma-cdk/openapix.IInfoObject.property.description">description</a></code> | <code>string</code> | A short description of the API. |
| <code><a href="#@alma-cdk/openapix.IInfoObject.property.license">license</a></code> | <code><a href="#@alma-cdk/openapix.ILicenseObject">ILicenseObject</a></code> | The license information for the exposed API. |
| <code><a href="#@alma-cdk/openapix.IInfoObject.property.termsOfService">termsOfService</a></code> | <code>string</code> | A URL to the Terms of Service for the API. |

---

##### `title`<sup>Required</sup> <a name="title" id="@alma-cdk/openapix.IInfoObject.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title of the API.

---

##### `version`<sup>Required</sup> <a name="version" id="@alma-cdk/openapix.IInfoObject.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version of the OpenAPI document (which is distinct from the OpenAPI Specification version or the API implementation version).

---

##### `contact`<sup>Optional</sup> <a name="contact" id="@alma-cdk/openapix.IInfoObject.property.contact"></a>

```typescript
public readonly contact: IContactObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IContactObject">IContactObject</a>

The contact information for the exposed API.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.IInfoObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of the API.

CommonMark syntax MAY be used for rich text representation.

---

##### `license`<sup>Optional</sup> <a name="license" id="@alma-cdk/openapix.IInfoObject.property.license"></a>

```typescript
public readonly license: ILicenseObject;
```

- *Type:* <a href="#@alma-cdk/openapix.ILicenseObject">ILicenseObject</a>

The license information for the exposed API.

---

##### `termsOfService`<sup>Optional</sup> <a name="termsOfService" id="@alma-cdk/openapix.IInfoObject.property.termsOfService"></a>

```typescript
public readonly termsOfService: string;
```

- *Type:* string

A URL to the Terms of Service for the API.

MUST be in the format of a URL.

---

### ILicenseObject <a name="ILicenseObject" id="@alma-cdk/openapix.ILicenseObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.ILicenseObject">ILicenseObject</a>

The license information for the exposed API.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.ILicenseObject.property.name">name</a></code> | <code>string</code> | The license name used for the API. |
| <code><a href="#@alma-cdk/openapix.ILicenseObject.property.url">url</a></code> | <code>string</code> | A URL to the license used for the API. |

---

##### `name`<sup>Required</sup> <a name="name" id="@alma-cdk/openapix.ILicenseObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The license name used for the API.

---

##### `url`<sup>Optional</sup> <a name="url" id="@alma-cdk/openapix.ILicenseObject.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

A URL to the license used for the API.

MUST be in the format of a URL.

---

### ILinkObject <a name="ILinkObject" id="@alma-cdk/openapix.ILinkObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.ILinkObject">ILinkObject</a>

The Link object represents a possible design-time link for a response.

The presence of a link does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.
Unlike dynamic links (i.e. links provided in the response payload), the OAS linking mechanism does not require link information in the runtime response.
For computing links, and providing instructions to execute them, a runtime expression is used for accessing values in an operation and using them as parameters while invoking the linked operation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.ILinkObject.property.description">description</a></code> | <code>string</code> | A description of the link. |
| <code><a href="#@alma-cdk/openapix.ILinkObject.property.operationId">operationId</a></code> | <code>string</code> | The name of an existing, resolvable OAS operation, as defined with a unique operationId. |
| <code><a href="#@alma-cdk/openapix.ILinkObject.property.operationRef">operationRef</a></code> | <code>string</code> | A relative or absolute URI reference to an OAS operation. |
| <code><a href="#@alma-cdk/openapix.ILinkObject.property.parameters">parameters</a></code> | <code>{[ key: string ]: any}</code> | A map representing parameters to pass to an operation as specified with operationId or identified via operationRef. |
| <code><a href="#@alma-cdk/openapix.ILinkObject.property.requestBody">requestBody</a></code> | <code>any</code> | A literal value or {expression} to use as a request body when calling the target operation. |
| <code><a href="#@alma-cdk/openapix.ILinkObject.property.server">server</a></code> | <code><a href="#@alma-cdk/openapix.IServerObject">IServerObject</a></code> | A server object to be used by the target operation. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.ILinkObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the link.

CommonMark syntax MAY be used for rich text representation.

---

##### `operationId`<sup>Optional</sup> <a name="operationId" id="@alma-cdk/openapix.ILinkObject.property.operationId"></a>

```typescript
public readonly operationId: string;
```

- *Type:* string

The name of an existing, resolvable OAS operation, as defined with a unique operationId.

This field is mutually exclusive of the operationRef field.

---

##### `operationRef`<sup>Optional</sup> <a name="operationRef" id="@alma-cdk/openapix.ILinkObject.property.operationRef"></a>

```typescript
public readonly operationRef: string;
```

- *Type:* string

A relative or absolute URI reference to an OAS operation.

This field is mutually exclusive of the operationId field, and MUST point to an Operation Object. Relative operationRef values MAY be used to locate an existing Operation Object in the OpenAPI definition.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@alma-cdk/openapix.ILinkObject.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

A map representing parameters to pass to an operation as specified with operationId or identified via operationRef.

The key is the parameter name to be used, whereas the value can be a constant or an expression to be evaluated and passed to the linked operation. The parameter name can be qualified using the parameter location [{in}.]{name} for operations that use the same parameter name in different locations (e.g. path.id).

---

##### `requestBody`<sup>Optional</sup> <a name="requestBody" id="@alma-cdk/openapix.ILinkObject.property.requestBody"></a>

```typescript
public readonly requestBody: any;
```

- *Type:* any

A literal value or {expression} to use as a request body when calling the target operation.

---

##### `server`<sup>Optional</sup> <a name="server" id="@alma-cdk/openapix.ILinkObject.property.server"></a>

```typescript
public readonly server: IServerObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IServerObject">IServerObject</a>

A server object to be used by the target operation.

---

### IMediaTypeObject <a name="IMediaTypeObject" id="@alma-cdk/openapix.IMediaTypeObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IMediaTypeObject">IMediaTypeObject</a>

Each Media Type Object provides schema and examples for the media type identified by its key.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IMediaTypeObject.property.encoding">encoding</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.IEncodingObject">IEncodingObject</a>}</code> | A map between a property name and its encoding information. |
| <code><a href="#@alma-cdk/openapix.IMediaTypeObject.property.example">example</a></code> | <code>any</code> | Example of the media type. |
| <code><a href="#@alma-cdk/openapix.IMediaTypeObject.property.examples">examples</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.IExampleObject">IExampleObject</a>}</code> | Examples of the media type. |
| <code><a href="#@alma-cdk/openapix.IMediaTypeObject.property.schema">schema</a></code> | <code><a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.ISchemaObject">ISchemaObject</a></code> | The schema defining the content of the request, response, or parameter. |

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@alma-cdk/openapix.IMediaTypeObject.property.encoding"></a>

```typescript
public readonly encoding: {[ key: string ]: IEncodingObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.IEncodingObject">IEncodingObject</a>}

A map between a property name and its encoding information.

The key, being the property name, MUST exist in the schema as a property. The encoding object SHALL only apply to requestBody objects when the media type is multipart or application/x-www-form-urlencoded.

---

##### `example`<sup>Optional</sup> <a name="example" id="@alma-cdk/openapix.IMediaTypeObject.property.example"></a>

```typescript
public readonly example: any;
```

- *Type:* any

Example of the media type.

The example object SHOULD be in the correct format as specified by the media type. The example field is mutually exclusive of the examples field. Furthermore, if referencing a schema which contains an example, the example value SHALL override the example provided by the schema.

---

##### `examples`<sup>Optional</sup> <a name="examples" id="@alma-cdk/openapix.IMediaTypeObject.property.examples"></a>

```typescript
public readonly examples: {[ key: string ]: IReferenceObject | IExampleObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.IExampleObject">IExampleObject</a>}

Examples of the media type.

Each example object SHOULD match the media type and specified schema if present. The examples field is mutually exclusive of the example field. Furthermore, if referencing a schema which contains an example, the examples value SHALL override the example provided by the schema.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@alma-cdk/openapix.IMediaTypeObject.property.schema"></a>

```typescript
public readonly schema: IReferenceObject | ISchemaObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.ISchemaObject">ISchemaObject</a>

The schema defining the content of the request, response, or parameter.

---

### IOAuthFlowObject <a name="IOAuthFlowObject" id="@alma-cdk/openapix.IOAuthFlowObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IOAuthFlowObject">IOAuthFlowObject</a>

Configuration details for a supported OAuth Flow.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IOAuthFlowObject.property.scopes">scopes</a></code> | <code>{[ key: string ]: string}</code> | The available scopes for the OAuth2 security scheme. |
| <code><a href="#@alma-cdk/openapix.IOAuthFlowObject.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | The authorization URL to be used for this flow. |
| <code><a href="#@alma-cdk/openapix.IOAuthFlowObject.property.refreshUrl">refreshUrl</a></code> | <code>string</code> | The URL to be used for obtaining refresh tokens. |
| <code><a href="#@alma-cdk/openapix.IOAuthFlowObject.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | The token URL to be used for this flow. |

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@alma-cdk/openapix.IOAuthFlowObject.property.scopes"></a>

```typescript
public readonly scopes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The available scopes for the OAuth2 security scheme.

A map between the scope name and a short description for it. The map MAY be empty.

---

##### `authorizationUrl`<sup>Optional</sup> <a name="authorizationUrl" id="@alma-cdk/openapix.IOAuthFlowObject.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

The authorization URL to be used for this flow.

This MUST be in the form of a URL.
REQUIRED for oauth2 ("implicit", "authorizationCode").

---

##### `refreshUrl`<sup>Optional</sup> <a name="refreshUrl" id="@alma-cdk/openapix.IOAuthFlowObject.property.refreshUrl"></a>

```typescript
public readonly refreshUrl: string;
```

- *Type:* string

The URL to be used for obtaining refresh tokens.

This MUST be in the form of a URL.

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="@alma-cdk/openapix.IOAuthFlowObject.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

The token URL to be used for this flow.

This MUST be in the form of a URL.
REQUIRED for oauth2 ("password", "clientCredentials", "authorizationCode").

---

### IOAuthFlowsObject <a name="IOAuthFlowsObject" id="@alma-cdk/openapix.IOAuthFlowsObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IOAuthFlowsObject">IOAuthFlowsObject</a>

Allows configuration of the supported OAuth Flows.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IOAuthFlowsObject.property.authorizationCode">authorizationCode</a></code> | <code><a href="#@alma-cdk/openapix.IOAuthFlowObject">IOAuthFlowObject</a></code> | Configuration for the OAuth Authorization Code flow. |
| <code><a href="#@alma-cdk/openapix.IOAuthFlowsObject.property.clientCredentials">clientCredentials</a></code> | <code><a href="#@alma-cdk/openapix.IOAuthFlowObject">IOAuthFlowObject</a></code> | Configuration for the OAuth Client Credentials flow. |
| <code><a href="#@alma-cdk/openapix.IOAuthFlowsObject.property.implicit">implicit</a></code> | <code><a href="#@alma-cdk/openapix.IOAuthFlowObject">IOAuthFlowObject</a></code> | Configuration for the OAuth Implicit flow. |
| <code><a href="#@alma-cdk/openapix.IOAuthFlowsObject.property.password">password</a></code> | <code><a href="#@alma-cdk/openapix.IOAuthFlowObject">IOAuthFlowObject</a></code> | Configuration for the OAuth Resource Owner Password flow. |

---

##### `authorizationCode`<sup>Optional</sup> <a name="authorizationCode" id="@alma-cdk/openapix.IOAuthFlowsObject.property.authorizationCode"></a>

```typescript
public readonly authorizationCode: IOAuthFlowObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IOAuthFlowObject">IOAuthFlowObject</a>

Configuration for the OAuth Authorization Code flow.

Previously called accessCode in OpenAPI 2.0.

---

##### `clientCredentials`<sup>Optional</sup> <a name="clientCredentials" id="@alma-cdk/openapix.IOAuthFlowsObject.property.clientCredentials"></a>

```typescript
public readonly clientCredentials: IOAuthFlowObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IOAuthFlowObject">IOAuthFlowObject</a>

Configuration for the OAuth Client Credentials flow.

Previously called application in OpenAPI 2.0.

---

##### `implicit`<sup>Optional</sup> <a name="implicit" id="@alma-cdk/openapix.IOAuthFlowsObject.property.implicit"></a>

```typescript
public readonly implicit: IOAuthFlowObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IOAuthFlowObject">IOAuthFlowObject</a>

Configuration for the OAuth Implicit flow.

---

##### `password`<sup>Optional</sup> <a name="password" id="@alma-cdk/openapix.IOAuthFlowsObject.property.password"></a>

```typescript
public readonly password: IOAuthFlowObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IOAuthFlowObject">IOAuthFlowObject</a>

Configuration for the OAuth Resource Owner Password flow.

---

### IOperationObject <a name="IOperationObject" id="@alma-cdk/openapix.IOperationObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IOperationObject">IOperationObject</a>

Describes a single API operation on a path.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IOperationObject.property.responses">responses</a></code> | <code><a href="#@alma-cdk/openapix.IResponsesObject">IResponsesObject</a></code> | The list of possible responses as they are returned from executing this operation. |
| <code><a href="#@alma-cdk/openapix.IOperationObject.property.callbacks">callbacks</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.ICallbackObject">ICallbackObject</a>}</code> | A map of possible out-of band callbacks related to the parent operation. |
| <code><a href="#@alma-cdk/openapix.IOperationObject.property.deprecated">deprecated</a></code> | <code>boolean</code> | Declares this operation to be deprecated. |
| <code><a href="#@alma-cdk/openapix.IOperationObject.property.description">description</a></code> | <code>string</code> | A verbose explanation of the operation behavior. |
| <code><a href="#@alma-cdk/openapix.IOperationObject.property.externalDocs">externalDocs</a></code> | <code><a href="#@alma-cdk/openapix.IExternalDocumentationObject">IExternalDocumentationObject</a></code> | Additional external documentation for this operation. |
| <code><a href="#@alma-cdk/openapix.IOperationObject.property.operationId">operationId</a></code> | <code>string</code> | Unique string used to identify the operation. |
| <code><a href="#@alma-cdk/openapix.IOperationObject.property.parameters">parameters</a></code> | <code><a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.IParameterObject">IParameterObject</a>[]</code> | A list of parameters that are applicable for this operation. |
| <code><a href="#@alma-cdk/openapix.IOperationObject.property.requestBody">requestBody</a></code> | <code><a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.IRequestBodyObject">IRequestBodyObject</a></code> | The request body applicable for this operation. |
| <code><a href="#@alma-cdk/openapix.IOperationObject.property.security">security</a></code> | <code><a href="#@alma-cdk/openapix.ISecurityRequirementObject">ISecurityRequirementObject</a>[]</code> | A declaration of which security mechanisms can be used for this operation. |
| <code><a href="#@alma-cdk/openapix.IOperationObject.property.summary">summary</a></code> | <code>string</code> | A short summary of what the operation does. |
| <code><a href="#@alma-cdk/openapix.IOperationObject.property.tags">tags</a></code> | <code>string[]</code> | A list of tags for API documentation control. |

---

##### `responses`<sup>Required</sup> <a name="responses" id="@alma-cdk/openapix.IOperationObject.property.responses"></a>

```typescript
public readonly responses: IResponsesObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IResponsesObject">IResponsesObject</a>

The list of possible responses as they are returned from executing this operation.

---

##### `callbacks`<sup>Optional</sup> <a name="callbacks" id="@alma-cdk/openapix.IOperationObject.property.callbacks"></a>

```typescript
public readonly callbacks: {[ key: string ]: IReferenceObject | ICallbackObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.ICallbackObject">ICallbackObject</a>}

A map of possible out-of band callbacks related to the parent operation.

The key is a unique identifier for the Callback Object. Each value in the map is a Callback Object that describes a request that may be initiated by the API provider and the expected responses.

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@alma-cdk/openapix.IOperationObject.property.deprecated"></a>

```typescript
public readonly deprecated: boolean;
```

- *Type:* boolean

Declares this operation to be deprecated.

Consumers SHOULD refrain from usage of the declared operation. Default value is false.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.IOperationObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A verbose explanation of the operation behavior.

CommonMark syntax MAY be used for rich text representation.

---

##### `externalDocs`<sup>Optional</sup> <a name="externalDocs" id="@alma-cdk/openapix.IOperationObject.property.externalDocs"></a>

```typescript
public readonly externalDocs: IExternalDocumentationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IExternalDocumentationObject">IExternalDocumentationObject</a>

Additional external documentation for this operation.

---

##### `operationId`<sup>Optional</sup> <a name="operationId" id="@alma-cdk/openapix.IOperationObject.property.operationId"></a>

```typescript
public readonly operationId: string;
```

- *Type:* string

Unique string used to identify the operation.

The id MUST be unique among all operations described in the API. The operationId value is case-sensitive. Tools and libraries MAY use the operationId to uniquely identify an operation, therefore, it is RECOMMENDED to follow common programming naming conventions.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@alma-cdk/openapix.IOperationObject.property.parameters"></a>

```typescript
public readonly parameters: (IReferenceObject | IParameterObject)[];
```

- *Type:* <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.IParameterObject">IParameterObject</a>[]

A list of parameters that are applicable for this operation.

If a parameter is already defined at the Path Item, the new definition will override it but can never remove it. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object's components/parameters.

---

##### `requestBody`<sup>Optional</sup> <a name="requestBody" id="@alma-cdk/openapix.IOperationObject.property.requestBody"></a>

```typescript
public readonly requestBody: IReferenceObject | IRequestBodyObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.IRequestBodyObject">IRequestBodyObject</a>

The request body applicable for this operation.

The requestBody is only supported in HTTP methods where the HTTP 1.1 specification RFC7231 has explicitly defined semantics for request bodies. In other cases where the HTTP spec is vague, requestBody SHALL be ignored by consumers.

---

##### `security`<sup>Optional</sup> <a name="security" id="@alma-cdk/openapix.IOperationObject.property.security"></a>

```typescript
public readonly security: ISecurityRequirementObject[];
```

- *Type:* <a href="#@alma-cdk/openapix.ISecurityRequirementObject">ISecurityRequirementObject</a>[]

A declaration of which security mechanisms can be used for this operation.

The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. To make security optional, an empty security requirement ({}) can be included in the array. This definition overrides any declared top-level security. To remove a top-level security declaration, an empty array can be used.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@alma-cdk/openapix.IOperationObject.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

A short summary of what the operation does.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@alma-cdk/openapix.IOperationObject.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tags for API documentation control.

Tags can be used for logical grouping of operations by resources or any other qualifier.

---

### IParameterObject <a name="IParameterObject" id="@alma-cdk/openapix.IParameterObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IParameterObject">IParameterObject</a>

Describes a single operation parameter.

A unique parameter is defined by a combination of a name and location.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IParameterObject.property.in">in</a></code> | <code>string</code> | The location of the parameter. |
| <code><a href="#@alma-cdk/openapix.IParameterObject.property.name">name</a></code> | <code>string</code> | The name of the parameter. Parameter names are case sensitive. |
| <code><a href="#@alma-cdk/openapix.IParameterObject.property.allowEmptyValue">allowEmptyValue</a></code> | <code>boolean</code> | Sets the ability to pass empty-valued parameters. |
| <code><a href="#@alma-cdk/openapix.IParameterObject.property.deprecated">deprecated</a></code> | <code>boolean</code> | Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. |
| <code><a href="#@alma-cdk/openapix.IParameterObject.property.description">description</a></code> | <code>string</code> | A brief description of the parameter. |
| <code><a href="#@alma-cdk/openapix.IParameterObject.property.required">required</a></code> | <code>boolean</code> | Determines whether this parameter is mandatory. |

---

##### `in`<sup>Required</sup> <a name="in" id="@alma-cdk/openapix.IParameterObject.property.in"></a>

```typescript
public readonly in: string;
```

- *Type:* string

The location of the parameter.

Possible values are "query", "header", "path" or "cookie".

---

##### `name`<sup>Required</sup> <a name="name" id="@alma-cdk/openapix.IParameterObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the parameter. Parameter names are case sensitive.

If in is "path", the name field MUST correspond to a template expression occurring within the path field in the Paths Object. See Path Templating for further information.
If in is "header" and the name field is "Accept", "Content-Type" or "Authorization", the parameter definition SHALL be ignored.
For all other cases, the name corresponds to the parameter name used by the in property.

---

##### `allowEmptyValue`<sup>Optional</sup> <a name="allowEmptyValue" id="@alma-cdk/openapix.IParameterObject.property.allowEmptyValue"></a>

```typescript
public readonly allowEmptyValue: boolean;
```

- *Type:* boolean

Sets the ability to pass empty-valued parameters.

This is valid only for query parameters and allows sending a parameter with an empty value. Default value is false. If style is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@alma-cdk/openapix.IParameterObject.property.deprecated"></a>

```typescript
public readonly deprecated: boolean;
```

- *Type:* boolean

Specifies that a parameter is deprecated and SHOULD be transitioned out of usage.

Default value is false.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.IParameterObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A brief description of the parameter.

This could contain examples of use. CommonMark syntax MAY be used for rich text representation.

---

##### `required`<sup>Optional</sup> <a name="required" id="@alma-cdk/openapix.IParameterObject.property.required"></a>

```typescript
public readonly required: boolean;
```

- *Type:* boolean

Determines whether this parameter is mandatory.

If the parameter location is "path", this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be included and its default value is false.

---

### IPathItemObject <a name="IPathItemObject" id="@alma-cdk/openapix.IPathItemObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IPathItemObject">IPathItemObject</a>

Describes the operations available on a single path.

A Path Item MAY be empty, due to ACL constraints. The path itself is still exposed to the documentation viewer but they will not know which operations and parameters are available.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IPathItemObject.property.delete">delete</a></code> | <code><a href="#@alma-cdk/openapix.IOperationObject">IOperationObject</a></code> | A definition of a DELETE operation on this path. |
| <code><a href="#@alma-cdk/openapix.IPathItemObject.property.description">description</a></code> | <code>string</code> | An optional, string description, intended to apply to all operations in this path. |
| <code><a href="#@alma-cdk/openapix.IPathItemObject.property.get">get</a></code> | <code><a href="#@alma-cdk/openapix.IOperationObject">IOperationObject</a></code> | A definition of a GET operation on this path. |
| <code><a href="#@alma-cdk/openapix.IPathItemObject.property.head">head</a></code> | <code><a href="#@alma-cdk/openapix.IOperationObject">IOperationObject</a></code> | A definition of a HEAD operation on this path. |
| <code><a href="#@alma-cdk/openapix.IPathItemObject.property.options">options</a></code> | <code><a href="#@alma-cdk/openapix.IOperationObject">IOperationObject</a></code> | A definition of a OPTIONS operation on this path. |
| <code><a href="#@alma-cdk/openapix.IPathItemObject.property.parameters">parameters</a></code> | <code><a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.IParameterObject">IParameterObject</a>[]</code> | A list of parameters that are applicable for all the operations described under this path. |
| <code><a href="#@alma-cdk/openapix.IPathItemObject.property.patch">patch</a></code> | <code><a href="#@alma-cdk/openapix.IOperationObject">IOperationObject</a></code> | A definition of a PATCH operation on this path. |
| <code><a href="#@alma-cdk/openapix.IPathItemObject.property.post">post</a></code> | <code><a href="#@alma-cdk/openapix.IOperationObject">IOperationObject</a></code> | A definition of a POST operation on this path. |
| <code><a href="#@alma-cdk/openapix.IPathItemObject.property.put">put</a></code> | <code><a href="#@alma-cdk/openapix.IOperationObject">IOperationObject</a></code> | A definition of a PUT operation on this path. |
| <code><a href="#@alma-cdk/openapix.IPathItemObject.property.summary">summary</a></code> | <code>string</code> | An optional, string summary, intended to apply to all operations in this path. |
| <code><a href="#@alma-cdk/openapix.IPathItemObject.property.trace">trace</a></code> | <code><a href="#@alma-cdk/openapix.IOperationObject">IOperationObject</a></code> | A definition of a TRACE operation on this path. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@alma-cdk/openapix.IPathItemObject.property.delete"></a>

```typescript
public readonly delete: IOperationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IOperationObject">IOperationObject</a>

A definition of a DELETE operation on this path.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.IPathItemObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional, string description, intended to apply to all operations in this path.

CommonMark syntax MAY be used for rich text representation.

---

##### `get`<sup>Optional</sup> <a name="get" id="@alma-cdk/openapix.IPathItemObject.property.get"></a>

```typescript
public readonly get: IOperationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IOperationObject">IOperationObject</a>

A definition of a GET operation on this path.

---

##### `head`<sup>Optional</sup> <a name="head" id="@alma-cdk/openapix.IPathItemObject.property.head"></a>

```typescript
public readonly head: IOperationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IOperationObject">IOperationObject</a>

A definition of a HEAD operation on this path.

---

##### `options`<sup>Optional</sup> <a name="options" id="@alma-cdk/openapix.IPathItemObject.property.options"></a>

```typescript
public readonly options: IOperationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IOperationObject">IOperationObject</a>

A definition of a OPTIONS operation on this path.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@alma-cdk/openapix.IPathItemObject.property.parameters"></a>

```typescript
public readonly parameters: (IReferenceObject | IParameterObject)[];
```

- *Type:* <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.IParameterObject">IParameterObject</a>[]

A list of parameters that are applicable for all the operations described under this path.

These parameters can be overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined at the OpenAPI Object's components/parameters.

---

##### `patch`<sup>Optional</sup> <a name="patch" id="@alma-cdk/openapix.IPathItemObject.property.patch"></a>

```typescript
public readonly patch: IOperationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IOperationObject">IOperationObject</a>

A definition of a PATCH operation on this path.

---

##### `post`<sup>Optional</sup> <a name="post" id="@alma-cdk/openapix.IPathItemObject.property.post"></a>

```typescript
public readonly post: IOperationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IOperationObject">IOperationObject</a>

A definition of a POST operation on this path.

---

##### `put`<sup>Optional</sup> <a name="put" id="@alma-cdk/openapix.IPathItemObject.property.put"></a>

```typescript
public readonly put: IOperationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IOperationObject">IOperationObject</a>

A definition of a PUT operation on this path.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@alma-cdk/openapix.IPathItemObject.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

An optional, string summary, intended to apply to all operations in this path.

---

##### `trace`<sup>Optional</sup> <a name="trace" id="@alma-cdk/openapix.IPathItemObject.property.trace"></a>

```typescript
public readonly trace: IOperationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IOperationObject">IOperationObject</a>

A definition of a TRACE operation on this path.

---

### IPathsObject <a name="IPathsObject" id="@alma-cdk/openapix.IPathsObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IPathsObject">IPathsObject</a>

Holds the relative paths to the individual endpoints and their operations.

The path is appended to the URL from the Server Object in order to construct the full URL. The Paths MAY be empty, due to ACL constraints.



### IReferenceObject <a name="IReferenceObject" id="@alma-cdk/openapix.IReferenceObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a>

A simple object to allow referencing other components in the specification, internally and externally.



### IRequestBodyObject <a name="IRequestBodyObject" id="@alma-cdk/openapix.IRequestBodyObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IRequestBodyObject">IRequestBodyObject</a>

Describes a single request body.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IRequestBodyObject.property.content">content</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.IMediaTypeObject">IMediaTypeObject</a>}</code> | The content of the request body. |
| <code><a href="#@alma-cdk/openapix.IRequestBodyObject.property.description">description</a></code> | <code>string</code> | A brief description of the request body. |
| <code><a href="#@alma-cdk/openapix.IRequestBodyObject.property.required">required</a></code> | <code>boolean</code> | Determines if the request body is required in the request. |

---

##### `content`<sup>Required</sup> <a name="content" id="@alma-cdk/openapix.IRequestBodyObject.property.content"></a>

```typescript
public readonly content: {[ key: string ]: IMediaTypeObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.IMediaTypeObject">IMediaTypeObject</a>}

The content of the request body.

The key is a media type or media type range and the value describes it. For requests that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.IRequestBodyObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A brief description of the request body.

This could contain examples of use. CommonMark syntax MAY be used for rich text representation.

---

##### `required`<sup>Optional</sup> <a name="required" id="@alma-cdk/openapix.IRequestBodyObject.property.required"></a>

```typescript
public readonly required: boolean;
```

- *Type:* boolean

Determines if the request body is required in the request.

Defaults to false.

---

### IResponseObject <a name="IResponseObject" id="@alma-cdk/openapix.IResponseObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IResponseObject">IResponseObject</a>

Describes a single response from an API Operation, including design-time, static links to operations based on the response.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IResponseObject.property.description">description</a></code> | <code>string</code> | A short description of the response. |
| <code><a href="#@alma-cdk/openapix.IResponseObject.property.content">content</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.IMediaTypeObject">IMediaTypeObject</a>}</code> | A map containing descriptions of potential response payloads. |
| <code><a href="#@alma-cdk/openapix.IResponseObject.property.headers">headers</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.IHeaderObject">IHeaderObject</a>}</code> | Maps a header name to its definition. |
| <code><a href="#@alma-cdk/openapix.IResponseObject.property.links">links</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> \| <a href="#@alma-cdk/openapix.ILinkObject">ILinkObject</a>}</code> | A map of operations links that can be followed from the response. |

---

##### `description`<sup>Required</sup> <a name="description" id="@alma-cdk/openapix.IResponseObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of the response.

CommonMark syntax MAY be used for rich text representation.

---

##### `content`<sup>Optional</sup> <a name="content" id="@alma-cdk/openapix.IResponseObject.property.content"></a>

```typescript
public readonly content: {[ key: string ]: IReferenceObject | IMediaTypeObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.IMediaTypeObject">IMediaTypeObject</a>}

A map containing descriptions of potential response payloads.

The key is a media type or media type range and the value describes it. For responses that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@alma-cdk/openapix.IResponseObject.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: IReferenceObject | IHeaderObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.IHeaderObject">IHeaderObject</a>}

Maps a header name to its definition.

RFC7230 states header names are case insensitive. If a response header is defined with the name "Content-Type", it SHALL be ignored.

---

##### `links`<sup>Optional</sup> <a name="links" id="@alma-cdk/openapix.IResponseObject.property.links"></a>

```typescript
public readonly links: {[ key: string ]: IReferenceObject | ILinkObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.IReferenceObject">IReferenceObject</a> | <a href="#@alma-cdk/openapix.ILinkObject">ILinkObject</a>}

A map of operations links that can be followed from the response.

The key of the map is a short name for the link, following the naming constraints of the names for Component Objects.

---

### IResponsesObject <a name="IResponsesObject" id="@alma-cdk/openapix.IResponsesObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IResponsesObject">IResponsesObject</a>

A container for the expected responses of an operation.

The container maps a HTTP response code to the expected response.
The documentation is not necessarily expected to cover all possible HTTP response codes because they may not be known in advance. However, documentation is expected to cover a successful operation response and any known errors.
The default MAY be used as a default response object for all HTTP codes that are not covered individually by the specification.
The Responses Object MUST contain at least one response code, and it SHOULD be the response for a successful operation call.



### ISchemaObject <a name="ISchemaObject" id="@alma-cdk/openapix.ISchemaObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.ISchemaObject">ISchemaObject</a>

The Schema Object allows the definition of input and output data types.

These types can be objects, but also primitives and arrays. This object is an extended subset of the JSON Schema Specification Wright Draft 00. For more information about the properties, see JSON Schema Core and JSON Schema Validation. Unless stated otherwise, the property definitions follow the JSON Schema.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.ISchemaObject.property.deprecated">deprecated</a></code> | <code>boolean</code> | Specifies that a schema is deprecated and SHOULD be transitioned out of usage. |
| <code><a href="#@alma-cdk/openapix.ISchemaObject.property.discriminator">discriminator</a></code> | <code><a href="#@alma-cdk/openapix.IDiscriminatorObject">IDiscriminatorObject</a></code> | Adds support for polymorphism. |
| <code><a href="#@alma-cdk/openapix.ISchemaObject.property.example">example</a></code> | <code>any</code> | A free-form property to include an example of an instance for this schema. |
| <code><a href="#@alma-cdk/openapix.ISchemaObject.property.externalDocs">externalDocs</a></code> | <code><a href="#@alma-cdk/openapix.IExternalDocumentationObject">IExternalDocumentationObject</a></code> | Additional external documentation for this schema. |
| <code><a href="#@alma-cdk/openapix.ISchemaObject.property.nullable">nullable</a></code> | <code>boolean</code> | A true value adds "null" to the allowed type specified by the type keyword, only if type is explicitly defined within the same Schema Object. |
| <code><a href="#@alma-cdk/openapix.ISchemaObject.property.readOnly">readOnly</a></code> | <code>boolean</code> | Relevant only for Schema "properties" definitions. |
| <code><a href="#@alma-cdk/openapix.ISchemaObject.property.writeOnly">writeOnly</a></code> | <code>boolean</code> | Relevant only for Schema "properties" definitions. |
| <code><a href="#@alma-cdk/openapix.ISchemaObject.property.xml">xml</a></code> | <code><a href="#@alma-cdk/openapix.IXmlObject">IXmlObject</a></code> | This MAY be used only on properties schemas. |

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@alma-cdk/openapix.ISchemaObject.property.deprecated"></a>

```typescript
public readonly deprecated: boolean;
```

- *Type:* boolean

Specifies that a schema is deprecated and SHOULD be transitioned out of usage.

Default value is false.

---

##### `discriminator`<sup>Optional</sup> <a name="discriminator" id="@alma-cdk/openapix.ISchemaObject.property.discriminator"></a>

```typescript
public readonly discriminator: IDiscriminatorObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IDiscriminatorObject">IDiscriminatorObject</a>

Adds support for polymorphism.

The discriminator is an object name that is used to differentiate between other schemas which may satisfy the payload description. See Composition and Inheritance for more details.

---

##### `example`<sup>Optional</sup> <a name="example" id="@alma-cdk/openapix.ISchemaObject.property.example"></a>

```typescript
public readonly example: any;
```

- *Type:* any

A free-form property to include an example of an instance for this schema.

To represent examples that cannot be naturally represented in JSON or YAML, a string value can be used to contain the example with escaping where necessary.

---

##### `externalDocs`<sup>Optional</sup> <a name="externalDocs" id="@alma-cdk/openapix.ISchemaObject.property.externalDocs"></a>

```typescript
public readonly externalDocs: IExternalDocumentationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IExternalDocumentationObject">IExternalDocumentationObject</a>

Additional external documentation for this schema.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@alma-cdk/openapix.ISchemaObject.property.nullable"></a>

```typescript
public readonly nullable: boolean;
```

- *Type:* boolean

A true value adds "null" to the allowed type specified by the type keyword, only if type is explicitly defined within the same Schema Object.

Other Schema Object constraints retain their defined behavior, and therefore may disallow the use of null as a value. A false value leaves the specified or default type unmodified. The default value is false.

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@alma-cdk/openapix.ISchemaObject.property.readOnly"></a>

```typescript
public readonly readOnly: boolean;
```

- *Type:* boolean

Relevant only for Schema "properties" definitions.

Declares the property as "read only". This means that it MAY be sent as part of a response but SHOULD NOT be sent as part of the request. If the property is marked as being true and is in the required list, the required will take effect on the response only. A property MUST NOT be marked as both and writeOnly being true. Default value is false.

---

##### `writeOnly`<sup>Optional</sup> <a name="writeOnly" id="@alma-cdk/openapix.ISchemaObject.property.writeOnly"></a>

```typescript
public readonly writeOnly: boolean;
```

- *Type:* boolean

Relevant only for Schema "properties" definitions.

Declares the property as "write only". Therefore, it MAY be sent as part of a request but SHOULD NOT be sent as part of the response. If the property is marked as writeOnly being true and is in the required list, the required will take effect on the request only. A property MUST NOT be marked as both and writeOnly being true. Default value is false.

---

##### `xml`<sup>Optional</sup> <a name="xml" id="@alma-cdk/openapix.ISchemaObject.property.xml"></a>

```typescript
public readonly xml: IXmlObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IXmlObject">IXmlObject</a>

This MAY be used only on properties schemas.

It has no effect on root schemas. Adds additional metadata to describe the XML representation of this property.

---

### ISecurityRequirementObject <a name="ISecurityRequirementObject" id="@alma-cdk/openapix.ISecurityRequirementObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.ISecurityRequirementObject">ISecurityRequirementObject</a>

Lists the required security schemes to execute this operation.

The name used for each property MUST correspond to a security scheme declared in the Security Schemes under the Components Object.
Security Requirement Objects that contain multiple schemes require that all schemes MUST be satisfied for a request to be authorized. This enables support for scenarios where multiple query parameters or HTTP headers are required to convey security information.
When a list of Security Requirement Objects is defined on the OpenAPI Object or Operation Object, only one of the Security Requirement Objects in the list needs to be satisfied to authorize the request.



### ISecuritySchemeObject <a name="ISecuritySchemeObject" id="@alma-cdk/openapix.ISecuritySchemeObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.ISecuritySchemeObject">ISecuritySchemeObject</a>

Defines a security scheme that can be used by the operations.

Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), OAuth2's common flows (implicit, password, client credentials and authorization code) as defined in RFC6749, and OpenID Connect Discovery.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.ISecuritySchemeObject.property.type">type</a></code> | <code>string</code> | The type of the security scheme. |
| <code><a href="#@alma-cdk/openapix.ISecuritySchemeObject.property.bearerFormat">bearerFormat</a></code> | <code>string</code> | A hint to the client to identify how the bearer token is formatted. |
| <code><a href="#@alma-cdk/openapix.ISecuritySchemeObject.property.description">description</a></code> | <code>string</code> | A short description for security scheme. |
| <code><a href="#@alma-cdk/openapix.ISecuritySchemeObject.property.flow">flow</a></code> | <code><a href="#@alma-cdk/openapix.IOAuthFlowsObject">IOAuthFlowsObject</a></code> | An object containing configuration information for the flow types supported. |
| <code><a href="#@alma-cdk/openapix.ISecuritySchemeObject.property.in">in</a></code> | <code>string</code> | The location of the API key. |
| <code><a href="#@alma-cdk/openapix.ISecuritySchemeObject.property.name">name</a></code> | <code>string</code> | The name of the header, query or cookie parameter to be used. |
| <code><a href="#@alma-cdk/openapix.ISecuritySchemeObject.property.openIdConnectUrl">openIdConnectUrl</a></code> | <code>string</code> | OpenId Connect URL to discover OAuth2 configuration values. |
| <code><a href="#@alma-cdk/openapix.ISecuritySchemeObject.property.scheme">scheme</a></code> | <code>string</code> | The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235. |

---

##### `type`<sup>Required</sup> <a name="type" id="@alma-cdk/openapix.ISecuritySchemeObject.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the security scheme.

Valid values are "apiKey", "http", "oauth2", "openIdConnect".

---

##### `bearerFormat`<sup>Optional</sup> <a name="bearerFormat" id="@alma-cdk/openapix.ISecuritySchemeObject.property.bearerFormat"></a>

```typescript
public readonly bearerFormat: string;
```

- *Type:* string

A hint to the client to identify how the bearer token is formatted.

Bearer tokens are usually generated by an authorization server, so this information is primarily for documentation purposes.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.ISecuritySchemeObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description for security scheme.

CommonMark syntax MAY be used for rich text representation.

---

##### `flow`<sup>Optional</sup> <a name="flow" id="@alma-cdk/openapix.ISecuritySchemeObject.property.flow"></a>

```typescript
public readonly flow: IOAuthFlowsObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IOAuthFlowsObject">IOAuthFlowsObject</a>

An object containing configuration information for the flow types supported.

REQUIRED for oauth2.

---

##### `in`<sup>Optional</sup> <a name="in" id="@alma-cdk/openapix.ISecuritySchemeObject.property.in"></a>

```typescript
public readonly in: string;
```

- *Type:* string

The location of the API key.

Valid values are "query", "header" or "cookie".
REQUIRED for apiKey.

---

##### `name`<sup>Optional</sup> <a name="name" id="@alma-cdk/openapix.ISecuritySchemeObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the header, query or cookie parameter to be used.

REQUIRED for apiKey.

---

##### `openIdConnectUrl`<sup>Optional</sup> <a name="openIdConnectUrl" id="@alma-cdk/openapix.ISecuritySchemeObject.property.openIdConnectUrl"></a>

```typescript
public readonly openIdConnectUrl: string;
```

- *Type:* string

OpenId Connect URL to discover OAuth2 configuration values.

This MUST be in the form of a URL.
REQUIRED for openIdConnect.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@alma-cdk/openapix.ISecuritySchemeObject.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235.

The values used SHOULD be registered in the IANA Authentication Scheme registry.
REQUIRED for http.

---

### IServerObject <a name="IServerObject" id="@alma-cdk/openapix.IServerObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IServerObject">IServerObject</a>

An object representing a Server.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IServerObject.property.url">url</a></code> | <code>string</code> | REQUIRED. |
| <code><a href="#@alma-cdk/openapix.IServerObject.property.description">description</a></code> | <code>string</code> | An optional string describing the host designated by the URL. |
| <code><a href="#@alma-cdk/openapix.IServerObject.property.variables">variables</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/openapix.IServerVariableObject">IServerVariableObject</a>}</code> | A map between a variable name and its value. |

---

##### `url`<sup>Required</sup> <a name="url" id="@alma-cdk/openapix.IServerObject.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

REQUIRED.

A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that the host location is relative to the location where the OpenAPI document is being served. Variable substitutions will be made when a variable is named in {brackets}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.IServerObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional string describing the host designated by the URL.

CommonMark syntax MAY be used for rich text representation.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@alma-cdk/openapix.IServerObject.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: IServerVariableObject};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/openapix.IServerVariableObject">IServerVariableObject</a>}

A map between a variable name and its value.

The value is used for substitution in the server's URL template.

---

### IServerVariableObject <a name="IServerVariableObject" id="@alma-cdk/openapix.IServerVariableObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IServerVariableObject">IServerVariableObject</a>

An object representing a Server Variable for server URL template substitution.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IServerVariableObject.property.default">default</a></code> | <code>string</code> | The default value to use for substitution, which SHALL be sent if an alternate value is not supplied. |
| <code><a href="#@alma-cdk/openapix.IServerVariableObject.property.description">description</a></code> | <code>string</code> | An optional description for the server variable. |
| <code><a href="#@alma-cdk/openapix.IServerVariableObject.property.enum">enum</a></code> | <code>string[]</code> | An enumeration of string values to be used if the substitution options are from a limited set. |

---

##### `default`<sup>Required</sup> <a name="default" id="@alma-cdk/openapix.IServerVariableObject.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

The default value to use for substitution, which SHALL be sent if an alternate value is not supplied.

Note this behavior is different than the Schema Object's treatment of default values, because in those cases parameter values are optional. If the enum is defined, the value SHOULD exist in the enum's values.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.IServerVariableObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for the server variable.

CommonMark syntax MAY be used for rich text representation.

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@alma-cdk/openapix.IServerVariableObject.property.enum"></a>

```typescript
public readonly enum: string[];
```

- *Type:* string[]

An enumeration of string values to be used if the substitution options are from a limited set.

The array SHOULD NOT be empty.

---

### ITagObject <a name="ITagObject" id="@alma-cdk/openapix.ITagObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.ITagObject">ITagObject</a>

Adds metadata to a single tag that is used by the Operation Object.

It is not mandatory to have a Tag Object per tag defined in the Operation Object instances.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.ITagObject.property.name">name</a></code> | <code>string</code> | The name of the tag. |
| <code><a href="#@alma-cdk/openapix.ITagObject.property.description">description</a></code> | <code>string</code> | A short description for the tag. |
| <code><a href="#@alma-cdk/openapix.ITagObject.property.externalDocs">externalDocs</a></code> | <code><a href="#@alma-cdk/openapix.IExternalDocumentationObject">IExternalDocumentationObject</a></code> | Additional external documentation for this tag. |

---

##### `name`<sup>Required</sup> <a name="name" id="@alma-cdk/openapix.ITagObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the tag.

---

##### `description`<sup>Optional</sup> <a name="description" id="@alma-cdk/openapix.ITagObject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description for the tag.

CommonMark syntax MAY be used for rich text representation.

---

##### `externalDocs`<sup>Optional</sup> <a name="externalDocs" id="@alma-cdk/openapix.ITagObject.property.externalDocs"></a>

```typescript
public readonly externalDocs: IExternalDocumentationObject;
```

- *Type:* <a href="#@alma-cdk/openapix.IExternalDocumentationObject">IExternalDocumentationObject</a>

Additional external documentation for this tag.

---

### IXmlObject <a name="IXmlObject" id="@alma-cdk/openapix.IXmlObject"></a>

- *Extends:* <a href="#@alma-cdk/openapix.IExtensible">IExtensible</a>

- *Implemented By:* <a href="#@alma-cdk/openapix.IXmlObject">IXmlObject</a>

A metadata object that allows for more fine-tuned XML model definitions.

When using arrays, XML element names are not inferred (for singular/plural forms) and the name property SHOULD be used to add that information. See examples for expected behavior.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/openapix.IXmlObject.property.attribute">attribute</a></code> | <code>boolean</code> | Declares whether the property definition translates to an attribute instead of an element. |
| <code><a href="#@alma-cdk/openapix.IXmlObject.property.name">name</a></code> | <code>string</code> | Replaces the name of the element/attribute used for the described schema property. |
| <code><a href="#@alma-cdk/openapix.IXmlObject.property.namespace">namespace</a></code> | <code>string</code> | The URI of the namespace definition. |
| <code><a href="#@alma-cdk/openapix.IXmlObject.property.prefix">prefix</a></code> | <code>string</code> | The prefix to be used for the name. |
| <code><a href="#@alma-cdk/openapix.IXmlObject.property.wrapped">wrapped</a></code> | <code>boolean</code> | MAY be used only for an array definition. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@alma-cdk/openapix.IXmlObject.property.attribute"></a>

```typescript
public readonly attribute: boolean;
```

- *Type:* boolean

Declares whether the property definition translates to an attribute instead of an element.

Default value is false.

---

##### `name`<sup>Optional</sup> <a name="name" id="@alma-cdk/openapix.IXmlObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Replaces the name of the element/attribute used for the described schema property.

When defined within items, it will affect the name of the individual XML elements within the list. When defined alongside type being array (outside the items), it will affect the wrapping element and only if wrapped is true. If wrapped is false, it will be ignored.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@alma-cdk/openapix.IXmlObject.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The URI of the namespace definition.

Value MUST be in the form of an absolute URI.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@alma-cdk/openapix.IXmlObject.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The prefix to be used for the name.

---

##### `wrapped`<sup>Optional</sup> <a name="wrapped" id="@alma-cdk/openapix.IXmlObject.property.wrapped"></a>

```typescript
public readonly wrapped: boolean;
```

- *Type:* boolean

MAY be used only for an array definition.

Signifies whether the array is wrapped (for example, <books><book/><book/></books>) or unwrapped (<book/><book/>). Default value is false. The definition takes effect only when defined alongside type being array (outside the items).

---

## Enums <a name="Enums" id="Enums"></a>

### InternalIntegrationType <a name="InternalIntegrationType" id="@alma-cdk/openapix.InternalIntegrationType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/openapix.InternalIntegrationType.AWS">AWS</a></code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.InternalIntegrationType.CORS">CORS</a></code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.InternalIntegrationType.HTTP">HTTP</a></code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.InternalIntegrationType.LAMBDA">LAMBDA</a></code> | *No description.* |
| <code><a href="#@alma-cdk/openapix.InternalIntegrationType.MOCK">MOCK</a></code> | *No description.* |

---

##### `AWS` <a name="AWS" id="@alma-cdk/openapix.InternalIntegrationType.AWS"></a>

---


##### `CORS` <a name="CORS" id="@alma-cdk/openapix.InternalIntegrationType.CORS"></a>

---


##### `HTTP` <a name="HTTP" id="@alma-cdk/openapix.InternalIntegrationType.HTTP"></a>

---


##### `LAMBDA` <a name="LAMBDA" id="@alma-cdk/openapix.InternalIntegrationType.LAMBDA"></a>

---


##### `MOCK` <a name="MOCK" id="@alma-cdk/openapix.InternalIntegrationType.MOCK"></a>

---

