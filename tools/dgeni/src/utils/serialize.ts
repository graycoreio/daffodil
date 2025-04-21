export type Serializer<T = any> = (doc: T) => T;

export interface SerializableDoc {
  serializer: Serializer;
}

export const serializeFactory = <T extends Record<string, any> = Record<string, any>>(
  fields: Array<keyof T>,
  childSerializers: Partial<{[K in keyof T]?: Serializer<T[K]>}> = {},
  compose: Array<Serializer> = [],
): Serializer<T> =>
  (doc: T) => Object.keys(doc)
    .filter((key) => fields.includes(key) || childSerializers[key])
    .reduce((acc, key) => {
      if (doc.hasOwnProperty(key)) {
        (<any>acc)[key] = childSerializers[key]?.(doc[key]) || doc[key];
      }
      return acc;
    }, <T>(compose.length > 0 ? compose.reduce((acc, serializer) => ({
      ...acc,
      ...serializer(doc),
    }), {}) : {}));

export const arraySerializer = <T extends Record<string, any> = Record<string, any>>(serializer: Serializer<T>): Serializer<Array<T>> =>
  (list?: Array<T>): Array<T> => list?.map(serializer) || [];
