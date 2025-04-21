import { DaffDocsApiRole } from './enum';

const ORDER = [
  DaffDocsApiRole.COMPONENT,
  DaffDocsApiRole.DIRECTIVE,
  DaffDocsApiRole.PIPE,
  DaffDocsApiRole.SERVICE,
  DaffDocsApiRole.MODULE,
  DaffDocsApiRole.GUARD,
  DaffDocsApiRole.RESOLVER,
  DaffDocsApiRole.REDUCER,
  DaffDocsApiRole.ACTION,
  DaffDocsApiRole.FACADE,
  DaffDocsApiRole.SELECTOR,
  DaffDocsApiRole.PROVIDER,
  DaffDocsApiRole.TOKEN,
  DaffDocsApiRole.OPERATOR,
  DaffDocsApiRole.ERROR,
  DaffDocsApiRole.TYPE,
  DaffDocsApiRole.CONSTANT,
  DaffDocsApiRole.HELPER,
  DaffDocsApiRole.MODEL_FACTORY,
  DaffDocsApiRole.MOCK,
];

// TODO: move to daffio when docs becomes a public lib
/**
 * Sorts roles based on a predefined order.
 */
export const daffDocsApiRoleSort = (roles: Array<DaffDocsApiRole>, order = ORDER): Array<DaffDocsApiRole> =>
  roles.sort((a, b) => {
    const aIndex = order.indexOf(a);
    const bIndex = order.indexOf(b);
    if (aIndex === bIndex) {
      return 0;
    }
    if (aIndex < 0) {
      return 1;
    }
    if (bIndex < 0) {
      return -1;
    }
    return aIndex - bIndex;
  });
