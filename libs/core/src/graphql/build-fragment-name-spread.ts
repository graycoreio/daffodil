import { DocumentNode, FragmentDefinitionNode } from 'graphql'

const getFragmentNames = (fragment: DocumentNode) =>
  fragment.definitions.filter(def =>
    def.kind === 'FragmentDefinition'
  ).map(def =>
    (def as FragmentDefinitionNode).name.value
  )

/**
 * Builds a list of fragment names present inside the specified GraphQL document nodes.
 * Returns an empty array if no fragments have been defined or if null is passed.
 * @param fragments The created fragments.
 */
const daffGetFragmentNames = (...fragments: DocumentNode[]): string[] =>
  fragments.reduce((acc, fragment) => acc.concat(getFragmentNames(fragment)), [])

/**
 * Builds a string of fragment names that can be interpolated into a GraphQL query.
 * Each name is separated by a newline character: '\n'.
 * If an empty array is passed, an empty string is returned.
 * @param fragments A list of GraphQL documents that contain fragments.
 */
export const daffBuildFragmentNameSpread = (...fragments: DocumentNode[]): string =>
  daffGetFragmentNames(...fragments).reduce((acc, name) => acc.concat(`...${name}\n`), '')
