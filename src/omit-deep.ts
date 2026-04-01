import { omit } from "es-toolkit/compat";

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Object.prototype.toString.call(value) === "[object Object]";
}

function omitDeepInternal(value: unknown, props: string[]): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => omitDeepInternal(item, props));
  }

  if (!isPlainObject(value)) {
    return value;
  }

  const copied: Record<string, unknown> = {};

  for (const [key, entry] of Object.entries(value)) {
    copied[key] =
      entry === null || typeof entry === "undefined"
        ? entry
        : omitDeepInternal(entry, props);
  }

  return omit(copied, props);
}

export function omitDeep<T>(input: T, ...props: string[]): T {
  if (typeof input === "undefined") {
    return input;
  }

  return omitDeepInternal(input, props) as T;
}
