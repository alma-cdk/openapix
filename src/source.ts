import * as fs from 'fs';
import * as yaml from 'js-yaml';

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
}
