import {
  DocumentNode,
  FragmentDefinitionNode,
} from 'graphql';

import { unique } from '@daffodil/core';

export const getFragmentNames = (fragment: DocumentNode) =>
  fragment.definitions.filter(def =>
    def.kind === 'FragmentDefinition',
  ).map(def =>
    (<FragmentDefinitionNode>def).name.value,
  );

/**
 * Builds a list of the first fragment name present inside the specified GraphQL document nodes.
 * Returns an empty array if no fragments have been defined or if null is passed.
 *
 * @param fragments The created fragments.
 */
const daffGetFragmentNames = (...fragments: DocumentNode[]): string[] =>
  fragments.reduce((acc, fragment) => {
    const names = getFragmentNames(fragment);
    if (names[0]) {
      acc.push(names[0]);
    }
    return acc;
  }, []);

/**
 * Builds a string of fragment names that can be interpolated into a GraphQL query.
 * Each name is separated by a newline character: '\n'.
 * If an empty array is passed, an empty string is returned.
 * Only the first fragment name from each passed fragment is returned.
 *
 * @param fragments A list of GraphQL documents that contain fragments.
 */
export const daffBuildFragmentNameSpread = (...fragments: DocumentNode[]): string =>
  unique(daffGetFragmentNames(...fragments)).reduce((acc, name) => acc.concat(`...${name}\n`), '');
