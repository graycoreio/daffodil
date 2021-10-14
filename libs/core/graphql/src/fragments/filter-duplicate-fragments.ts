import { DocumentNode } from 'graphql';

/**
 * Filters a list of fragments, removing duplicates.
 */
export const daffFilterDuplicateFragments = (...documents: DocumentNode[]): DocumentNode[] =>
  // TODO(griest024): extract to core util
  documents.filter((doc, index) => documents.slice(index + 1).indexOf(doc) === -1);
