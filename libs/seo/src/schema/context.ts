/*
 * The default type of data used in schema.
 */
export type SchemaContext<T> = T | {
  '@context': 'https://schema.org/';
};
