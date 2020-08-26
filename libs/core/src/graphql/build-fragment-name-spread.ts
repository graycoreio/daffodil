import { DocumentNode } from 'graphql'

import { daffGetFragmentNames } from './get-fragment-names'

/**
 * Builds a string of fragment names that can be interpolated into a GraphQL query.
 * Each name is separated by a newline character: '\n'.
 * If an empty array is passed, an empty string is returned.
 * @param fragments A list of GraphQL documents that contain fragments.
 */
export const daffBuildFragmentNameSpread = (...fragments: DocumentNode[]): string =>
  daffGetFragmentNames(...fragments).reduce((acc, name) => acc.concat(`...${name}\n`), '')
