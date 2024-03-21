import { HTTPMethod, HTTPMethodValue } from './props';
import { Schema } from '../schema';

const getSchemaPaths = (schema: Schema) => {
  const paths = schema.get<Record<string, any>>('paths');
  if (typeof paths === 'undefined') return undefined;
  return Object.keys(paths).reduce((acc: Record<string, any>, path) => {
    if (!path.startsWith('x-')) {
      return { ...acc, [path]: paths[path] };
    }
    return acc;
  }, {});
};

const getMethodsFromSchemaPath = (path: Record<string, any>): {[key in HTTPMethodValue]?: any} => {
  return Object.entries(HTTPMethod).reduce((acc, [_, methodValue]) => {
    if (methodValue in path) {
      // TypeScript knows methodValue is a HTTPMethodValue, so it can be used as a key in acc
      acc[methodValue] = path[methodValue];
    }
    return acc;
  }, {} as {[key in HTTPMethodValue]?: any});
};

export { getSchemaPaths, getMethodsFromSchemaPath };