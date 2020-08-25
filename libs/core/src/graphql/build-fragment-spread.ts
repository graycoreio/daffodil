import { FragmentDefinitionNode } from 'graphql'

/**
 * Builds a string of fragment names that can be interpolated into a GraphQL query.
 * Each name is separated by a newline character: '\n'.
 * If an empty array is passed, an empty string is returned.
 * @param names A list of fragment names.
 */
export const daffBuildFragmentSpread = (names: FragmentDefinitionNode['name']['value'][]): string =>
  names.reduce((acc, name) => acc.concat(`...${name}\n`), '')
