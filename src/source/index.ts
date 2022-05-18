import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { get, has, set, unset } from 'lodash';
import { OpenAPI3 } from 'openapi-typescript';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const omitDeep = require('omit-deep-lodash');

/**
 * Represents an OpenApi v3 Schema which can be deserialized from YAML-file, modified
 * and then serialized back to YAML.
 */
export class Schema {

  /** Parse OpenApi v3 schema from inline YAML content. */
  public static fromInline(content: string): Schema {
    const schemaJson = <OpenAPI3>yaml.load(content);
    return new Schema(schemaJson);
  }

  /** Parse OpenApi v3 schema by loading a YAML file from given path. */
  public static fromAsset(path: string): Schema {
    const schema = fs.readFileSync(path, 'utf-8');
    return Schema.fromInline(schema);
  }

  /** Holds the actual parsed OpenApi v3 Schema Definition. */
  private definition: OpenAPI3;

  /** Construct a new Schema instance from OpenApi v3 JSON.  */
  constructor(definition: any) {
    this.definition = definition;
  }

  public toYaml(): string {
    return yaml.dump(this.definition);
  }

  public has(path: string): boolean {
    return has(this.definition, path);
  }

  public get<T>(path: string): T {
    return get(this.definition, path);
  }

  public set(path: string, value: any): void {
    set(this.definition, path, value);
  }

  public inject(records: Record<string, any>): void {
    Object.keys(records).forEach(path => set(this.definition, path, records[path]));
  }

  public reject(paths: string[]): void {
    paths.forEach(path => unset(this.definition, path));
  }

  public rejectDeep(paths: string[]): void {
    this.definition = omitDeep(this.definition, ...paths);
  }
}
