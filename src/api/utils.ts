import { HTTPMethod } from './props';
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

const getMethodsFromSchemaPath = (path: Record<string, any>): {[key in HTTPMethod]?: any} =>
  Object.keys(path)
    .reduce((acc: {[key in HTTPMethod]?: any}, pathKey) => {
      if (pathKey in HTTPMethod) {
        acc[pathKey as HTTPMethod] = path[pathKey];
      }
      return acc;
    }, {});

export { getSchemaPaths, getMethodsFromSchemaPath };