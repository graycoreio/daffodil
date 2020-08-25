import { DocumentNode, FragmentDefinitionNode } from 'graphql';

/**
 * Builds a list of fragment names present inside the specified GraphQL document node.
 * Returns an empty array if no fragments have been defined or if null is passed.
 * @param fragment The created fragment.
 */
export const daffGetFragmentNames = (fragment: DocumentNode): string[] =>
  fragment ? fragment.definitions.filter(def =>
    def.kind === 'FragmentDefinition'
  ).map(def =>
    (def as FragmentDefinitionNode).name.value
  ) : []
