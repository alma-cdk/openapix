# TODO

## Validators

How to configure?

## Method Authorizer configuration

What to do with these? Should probably just be handled in OpenAPI schema.

Previous code:
```ts
if (customAuthorizer) {
  set(sourceDefinition.definition, `paths['${path}']['${method}']['security']`, [{ customAuthorizer: [] }]);
}
```

## Generating AWS headers

???

