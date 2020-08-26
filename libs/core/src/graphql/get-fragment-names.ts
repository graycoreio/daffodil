import { DocumentNode, FragmentDefinitionNode } from 'graphql';

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
export const daffGetFragmentNames = (...fragments: DocumentNode[]): string[] =>
  fragments.reduce((acc, fragment) => acc.concat(getFragmentNames(fragment)), [])

