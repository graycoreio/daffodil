import { DaffDocsApiRole } from './enum';

const ROLE_MAP = <const>{
  [DaffDocsApiRole.COMPONENT]: 'Component',
  [DaffDocsApiRole.DIRECTIVE]: 'Directive',
  [DaffDocsApiRole.PIPE]: 'Pipe',
  [DaffDocsApiRole.SERVICE]: 'Service',
  [DaffDocsApiRole.MODULE]: 'Module',
  [DaffDocsApiRole.GUARD]: 'Guard',
  [DaffDocsApiRole.RESOLVER]: 'Resolver',
  [DaffDocsApiRole.REDUCER]: 'Reducer',
  [DaffDocsApiRole.ACTION]: 'Action',
  [DaffDocsApiRole.FACADE]: 'Facade',
  [DaffDocsApiRole.SELECTOR]: 'Selector',
  [DaffDocsApiRole.PROVIDER]: 'Provider',
  [DaffDocsApiRole.OPERATOR]: 'Operator',
  [DaffDocsApiRole.ERROR]: 'Error',
  [DaffDocsApiRole.TOKEN]: 'Token',
  [DaffDocsApiRole.TYPE]: 'Type',
  [DaffDocsApiRole.CONSTANT]: 'Constant',
  [DaffDocsApiRole.HELPER]: 'Helper',
  [DaffDocsApiRole.MOCK]: 'Mock',
  [DaffDocsApiRole.MODEL_FACTORY]: 'Model Factory',
};

/**
 * Returns a human readable and plural label for the given role.
 */
export const daffDocsApiRoleGetTagLabel = (value: DaffDocsApiRole): string => ROLE_MAP[value];
