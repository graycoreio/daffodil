import { DaffDocsApiRole } from './enum';

const ROLE_MAP = <const>{
  [DaffDocsApiRole.COMPONENT]: 'Components',
  [DaffDocsApiRole.DIRECTIVE]: 'Directives',
  [DaffDocsApiRole.PIPE]: 'Pipes',
  [DaffDocsApiRole.SERVICE]: 'Services',
  [DaffDocsApiRole.MODULE]: 'Modules',
  [DaffDocsApiRole.GUARD]: 'Guards',
  [DaffDocsApiRole.RESOLVER]: 'Resolvers',
  [DaffDocsApiRole.REDUCER]: 'Reducers',
  [DaffDocsApiRole.ACTION]: 'Actions',
  [DaffDocsApiRole.FACADE]: 'Facades',
  [DaffDocsApiRole.SELECTOR]: 'Selectors',
  [DaffDocsApiRole.PROVIDER]: 'Providers',
  [DaffDocsApiRole.OPERATOR]: 'Operators',
  [DaffDocsApiRole.ERROR]: 'Errors',
  [DaffDocsApiRole.TOKEN]: 'Tokens',
  [DaffDocsApiRole.TYPE]: 'Types',
  [DaffDocsApiRole.CONSTANT]: 'Constants',
  [DaffDocsApiRole.HELPER]: 'Helpers',
  [DaffDocsApiRole.MOCK]: 'Mocks',
  [DaffDocsApiRole.MODEL_FACTORY]: 'Model Factories',
};

/**
 * Returns a human readable and plural label for the given role.
 */
export const daffDocsApiRoleGetSectionLabel = (value: DaffDocsApiRole): string => ROLE_MAP[value];
