import { DocumentNode } from 'graphql';

import { daffFilterDuplicateFragments } from './filter-duplicate-fragments';

/**
 * Builds a string of fragment definitions that can be interpolated into a GraphQL query.
 * Each definition is separated by a newline character: '\n'.
 *
 * @param documents A list of GraphQL documents that should only contain fragments.
 */
export const daffBuildFragmentDefinition = (...documents: DocumentNode[]): string =>
  daffFilterDuplicateFragments(...documents).reduce((acc, fragment) => acc.concat(`${fragment.loc.source.body}\n`), '');
