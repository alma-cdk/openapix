import * as fs from 'fs';
import * as yaml from 'js-yaml';

export interface OpenApiXSourceDefinition {
  readonly paths?: Record<string, Record<string, any>>;
}

export class OpenApiXSource {
  public static fromInline(schema: string): OpenApiXSource {
    const schemaJson = <OpenApiXSourceDefinition>yaml.load(schema);
    return new OpenApiXSource(schemaJson);
  }

  public static fromAsset(path: string): OpenApiXSource {
    const schema = fs.readFileSync(path, 'utf-8');
    return OpenApiXSource.fromInline(schema);
  }

  public definition: OpenApiXSourceDefinition;

  constructor(definition: any) {
    this.definition = definition;
  }

  public toYaml(): string {
    return yaml.dump(this.definition);
  }
}
