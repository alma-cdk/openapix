import { writeFileSync, mkdirSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { Stack } from 'aws-cdk-lib';
import { Asset } from 'aws-cdk-lib/aws-s3-assets';
import { paramCase } from 'change-case';
import { Construct } from 'constructs';
import { IDocument } from '..';


export interface SchemaAssetProps {
  dir?: string;
}

export class SchemaAsset extends Asset {

  /**
   * Resolve a tokenized value in the context of the current stack.
   *
   * This is required for the S3 uploaded definition to work.
   */
  public static resolveSchemaTokens(scope: Construct, document: IDocument): any {
    return Stack.of(scope).resolve(document);
  }

  /** Resolve the target directory for the schema asset. */
  private static resolveDir(props?: Pick<SchemaAssetProps, 'dir'>): string {
    return props?.dir || join(tmpdir(), '@alma-cdk', 'openapix');
  }

  /** The target directory must exists. */
  private static ensureDir(path: string): void {
    mkdirSync(path, { recursive: true });
  }

  /** Resolve filename for the generated file. */
  private static resolveFileName(scope: Construct, id: string): string {
    // TODO ensure does not conflict with anything
    return `${paramCase(scope.node.path)}-${paramCase(id)}.schema.yaml`;
  }

  /** Resolve the full path for the generated file. */
  private static resolveFilePath(dirPath: string, fileName: string): string {
    return join(dirPath, fileName);
  }

  /** S3 Asset requires the data to be available on filesystem, so let's write it there. */
  private static write(filePath: string, data: any): void {
    // TODO investigate if we can perform this in-memory
    writeFileSync(filePath, JSON.stringify(data), 'utf-8');
  }

  /**
   * Value of `IDocument` resolved for CloudFormation.
   * Essentially with CDK Tokens resolved into CloudFormation References.
   */
  public readonly cloudFormationDocument: any;

  /**
   * Construct a new Schema Definition Asset that will be uploaded into S3
   * and then referenced in CloudFormation template.
   */
  constructor(scope: Construct, id: string, document: IDocument, props?: SchemaAssetProps) {

    const dirPath = SchemaAsset.resolveDir(props);
    SchemaAsset.ensureDir(dirPath);

    const fileName = SchemaAsset.resolveFileName(scope, id);
    const filePath = SchemaAsset.resolveFilePath(dirPath, fileName);
    const data = SchemaAsset.resolveSchemaTokens(scope, document);

    // S3 Asset requires a file path, so let's write the data to filesystem
    SchemaAsset.write(filePath, data);

    super(scope, id, {
      path: filePath,
    });

    this.cloudFormationDocument = data;
  }
}
