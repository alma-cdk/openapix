import { writeFileSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { Asset } from 'aws-cdk-lib/aws-s3-assets';
import { paramCase } from 'change-case';
import { Construct } from 'constructs';
import { IDocument } from '..';


export interface SchemaAssetProps {
  dir?: string;
}

export class SchemaAsset extends Asset {

  private static resolveDir(props?: Pick<SchemaAssetProps, 'dir'>): string {
    return props?.dir || join(tmpdir(), '@alma-cdk', 'openapix');
  }

  private static resolveFileName(scope: Construct, id: string): string {
    return `${paramCase(scope.node.path)}-${paramCase(id)}.schema.yaml`;
  }

  private static resolveFilePath(dirPath: string, fileName: string): string {
    return join(dirPath, fileName);
  }

  private static write(filePath: string, document: IDocument): void {
    writeFileSync(filePath, JSON.stringify(document), 'utf-8');
  }

  constructor(scope: Construct, id: string, document: IDocument, props?: SchemaAssetProps) {

    const dirPath = SchemaAsset.resolveDir(props);
    const fileName = SchemaAsset.resolveFileName(scope, id);
    const filePath = SchemaAsset.resolveFilePath(dirPath, fileName);
    SchemaAsset.write(filePath, document);

    super(scope, id, {
      path: filePath,
    });
  }
}
