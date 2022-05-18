import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { get, has, set, unset } from 'lodash';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const omitDeep = require('omit-deep-lodash');

export interface SourceDefinition {
  readonly paths?: Record<string, Record<string, any>>;
}

export class Source {
  public static fromInline(schema: string): Source {
    const schemaJson = <SourceDefinition>yaml.load(schema);
    return new Source(schemaJson);
  }

  public static fromAsset(path: string): Source {
    const schema = fs.readFileSync(path, 'utf-8');
    return Source.fromInline(schema);
  }

  public definition: SourceDefinition;

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
