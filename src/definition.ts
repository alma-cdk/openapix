import * as fs from 'fs';
import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as assets from 'aws-cdk-lib/aws-s3-assets';
import { Construct } from 'constructs';
import { omit, set, get } from 'lodash';import { OpenApiXIntegration } from './integrations/base';
import { OpenApiXSource } from './source';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const omitDeep = require('omit-deep-lodash');


type Method = 'ANY'|'DELETE'|'GET'|'HEAD'|'OPTIONS'|'PATCH'|'POST'|'PUT';
type OpenApiMethodIntegrations = Record<string, OpenApiXIntegration> // TODO add validation for method
type OpenApiPathIntegrations = Record<string, OpenApiMethodIntegrations>


export interface OpenApiXDefinitionProps {
  readonly upload?: boolean;
  readonly source: string | OpenApiXSource;
  readonly integrations?: OpenApiPathIntegrations;
  readonly injectPaths?: Record<string, any>;
  readonly rejectPaths?: string[];
  readonly rejectDeepPaths?: string[];
}

export class OpenApiXDefinition extends apigateway.ApiDefinition {
  private definition?: any;
  private s3Location?: apigateway.ApiDefinitionS3Location;
  private upload: boolean;
  private scope: Construct;


  constructor(scope: Construct, props: OpenApiXDefinitionProps) {
    super();

    this.scope = scope;

    const { upload = false, source, integrations = {}, injectPaths = {}, rejectPaths = [], rejectDeepPaths = [] } = props;

    this.upload = upload;

    let schemaSource: OpenApiXSource;

    if (typeof source === 'string') {
      schemaSource = OpenApiXSource.fromAsset(source);
    } else {
      schemaSource = source;
    }

    const sourceDefinition = schemaSource.definition;

    Object.keys(integrations).map(path => {
      this.ensurePath(sourceDefinition, path);
      const integrationsForPath = integrations[path];
      Object.keys(integrationsForPath).map(m => {
        const method = m.toLowerCase();
        this.ensureMethod(sourceDefinition, path, method);
        this.ensureNoIntegration(sourceDefinition, path, method);

        const integration = integrationsForPath[method.toUpperCase() as Method]!;

        //schemaJson.paths![path][method]['x-amazon-apigateway-integration'] = integration.xAmazonIntegration;
        set(sourceDefinition, `paths['${path}']['${method}']['x-amazon-apigateway-integration']`, integration.xAmazonIntegration);
      });
    });

    //Object.keys(injectPaths).forEach(path => set(schemaJson, path, injectPaths[path]));
    this.injectPaths(sourceDefinition, injectPaths);

    //rejectPaths.forEach(path => omit(schemaJson, path));
    this.rejectPaths(sourceDefinition, rejectPaths);

    //rejectDeepPaths.forEach(path => omitDeep(schemaJson, path));
    this.rejectDeepPaths(sourceDefinition, rejectDeepPaths);

    const newSchema = sourceDefinition;

    if (this.upload) {
      const newSchemaPath = __dirname + 'open-api-schema.compiled.yaml';
      fs.writeFileSync(newSchemaPath, JSON.stringify(newSchema), 'utf-8');
      const asset = new assets.Asset(scope, 'DefinitionAsset', {
        path: newSchemaPath,
      });

      this.s3Location = {
        bucket: asset.bucket.bucketArn,
        key: asset.s3ObjectKey,
      };
    } else {
      this.definition = newSchema;
    }
  }

  bind(_scope: Construct): apigateway.ApiDefinitionConfig {

    if (this.upload) {
      return {
        s3Location: this.s3Location,
      };
    }

    return {
      inlineDefinition: this.definition,
    };
  }

  private ensurePath(schemaJson: any, path: string): void {
    const value = get(schemaJson, `paths[${path}]`);

    if (typeof value === 'undefined') {
      cdk.Annotations.of(this.scope).addError(`OpenAPI schema is missing path for: ${path}`);
    }
  }

  private ensureMethod(schemaJson: any, path: string, method: string): void {
    const value = get(schemaJson, `paths[${path}][${method}]`);

    if (typeof value === 'undefined') {
      cdk.Annotations.of(this.scope).addError(`OpenAPI schema is missing method ${method} for path: ${path}`);
    }
  }

  private ensureNoIntegration(schemaJson: any, path: string, method: string): void {
    const value = get(schemaJson, `paths[${path}][${method}]['x-amazon-apigateway-integration']`);
    if (typeof value !== 'undefined') {
      cdk.Annotations.of(this.scope).addError(`OpenAPI schema already has x-amazon-apigateway-integration configuration for method ${method} in path: ${path}`);
    }
  }

  private injectPaths(schemaJson: any, injectPaths: Record<string, any> = {}): void {
    Object.keys(injectPaths).forEach(path => set(schemaJson, path, injectPaths[path]));
  }

  private rejectPaths(schemaJson: any, rejectPaths: string[] = []): void {
    schemaJson = omit(schemaJson, rejectPaths);
  }

  private rejectDeepPaths(schemaJson: any, rejectDeepPaths: string[] = []): void {
    schemaJson = omitDeep(schemaJson, ...rejectDeepPaths);
  }
}
