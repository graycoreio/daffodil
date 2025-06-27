export interface Index<T = any> {
  doc: T;
  extraIndices: Array<any>;
};

export type Indexer<T = any> = (doc: T) => Index;

export interface IndexableDoc {
  indexer?: Indexer;
}

export const indexerFactory = <T extends Record<string, any> = Record<string, any>>(
  fields: Array<keyof T>,
  childIndexers: Partial<{[K in keyof T]?: Indexer<T[K]>}> = {},
  compose: Array<Indexer> = [],
): Indexer<T> =>
  (doc: T) => Object.keys(doc)
    .filter((key) => fields.includes(key) || childIndexers[key])
    .reduce((acc, key) => {
      if (doc.hasOwnProperty(key)) {
        if (childIndexers[key]) {
          const { doc: indexedDoc, extraIndices } = childIndexers[key]?.(doc[key]);
          (<any>acc.doc)[key] = indexedDoc;
          acc.extraIndices.push(...extraIndices);
        } else {
          (<any>acc.doc)[key] = doc[key];
        }
      }
      return acc;
    }, (compose.length > 0 ? compose.reduce((acc, indexer) => {
      const { doc: indexedDoc, extraIndices } = indexer(doc);
      acc.doc = {
        ...acc.doc,
        ...indexedDoc,
      };
      acc.extraIndices.push(...extraIndices);
      return acc;
    }, { doc: <T>{}, extraIndices: []}) : { doc: <T>{}, extraIndices: []}));

export const arrayIndexer = <T extends Record<string, any> = Record<string, any>>(indexer: Indexer<T>): Indexer<Array<T>> =>
  (list?: Array<T>): Index<Array<T>> => (list || [])?.reduce((acc, doc) => {
    const { doc: indexedDoc, extraIndices } = indexer(doc);
    acc.doc.push(indexedDoc);
    acc.extraIndices.push(...extraIndices);
    return acc;
  }, { doc: [], extraIndices: []});

/**
 * Indexes docs as extra indices.
 */
export const extraIndexer = <T extends Record<string, any> = Record<string, any>>(indexer: Indexer<T>): Indexer<Array<T>> =>
  (list?: Array<T>): Index<Array<T>> => (list || [])?.reduce((acc, doc) => {
    const { doc: indexedDoc, extraIndices } = indexer(doc);
    acc.extraIndices.push(indexedDoc, ...extraIndices);
    return acc;
  }, { doc: [], extraIndices: []});
