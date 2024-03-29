import * as fs from 'fs';
import { Asset } from 'aws-cdk-lib/aws-s3-assets';
import { Construct } from 'constructs';
import * as yaml from 'js-yaml';
import { get, has, set, unset } from 'lodash';
import { SchemaAsset } from './asset';
import { IDocument } from './idocument';
import { SchemaProps } from './props';
import { getValidVersion } from './version';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const omitDeep = require('omit-deep-lodash');


/**
 * Represents an OpenApi v3 Schema which can be deserialized from YAML-file, modified
 * and then serialized back to YAML.
 */
export class Schema {

  /**
   * A string representing supported SemVer range.
   * @see https://github.com/npm/node-semver
   */
  public static openApiSupportedVersions: string = '3.0.x';

  /** Parse OpenApi v3 schema from inline YAML content. */
  public static fromInline(content: string): Schema {
    const schemaJson = <SchemaProps>yaml.load(content);
    return new Schema(schemaJson);
  }

  /** Parse OpenApi v3 schema by loading a YAML file from given path. */
  public static fromAsset(path: string): Schema {
    const schema = fs.readFileSync(path, 'utf-8');
    return Schema.fromInline(schema);
  }

  /**
   * Holds the actual parsed OpenApi v3 Schema Definition.
   * @see https://github.com/drwpow/openapi-typescript/blob/main/src/types.ts#L11-L22
   *
   * @todo info object?
   * @todo validate openapi string?
  */
  private document: IDocument;

  /**
   * OpenApi version used by schema document.
   *
   * @example
   * '3.0.3'
   */
  public openApiVersion: string;

  /** Construct a new Schema instance from OpenApi v3 JSON.  */
  constructor(props: SchemaProps) {
    this.document = props;

    this.openApiVersion = getValidVersion(
      Schema.openApiSupportedVersions,
      this.document.openapi,
    );
  }


  /** Serialize to YAML string. */
  public toYaml(): string {
    return yaml.dump(this.document);
  }

  /** Serialize to JSON string. */
  public toJson(): string {
    return JSON.stringify(this.document);
  }

  /** Return the actual OpenApi v3 document. */
  public toDocument(): IDocument {
    return this.document;
  }

  /** Return the OpenApi v3 document as an S3 Asset. */
  public toAsset(scope: Construct, id: string): Asset {
    return new SchemaAsset(scope, id, this.document);
  }

  /** Check if definition has a value in given object path. */
  public has(path: string): boolean {
    return has(this.document, path);
  }

  /** Get a value from given object path. */
  public get<T>(path: string): T {
    return get(this.document, path);
  }

  /** Set a value to given object path. */
  public set(path: string, value: any): void {
    set(this.document, path, value);
  }

  /** Inject multiple values to given paths. */
  public inject(records: Record<string, any> = {}): void {
    Object.keys(records).forEach(path => set(this.document, path, records[path]));
  }

  /** Reject – i.e. remove values – from given object paths. */
  public reject(paths: string[] = []): void {
    paths.forEach(path => unset(this.document, path));
  }

  /** Reject deep within object – i.e. remove all nested object paths. */
  public rejectDeep(paths: string[] = []): void {
    this.document = omitDeep(this.document, ...paths);
  }
}
