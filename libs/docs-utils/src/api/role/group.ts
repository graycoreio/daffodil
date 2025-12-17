import { DAFF_DOCS_API_ROLE_SORT_ORDER } from './sort';
import { DaffApiDoc } from '../../doc/public_api';

// TODO: move to daffio when docs becomes a public lib
/**
 * Sorts docs based on a predefined order.
 */
export const daffDocsApiRoleGroup = (docs: Array<DaffApiDoc>, order = DAFF_DOCS_API_ROLE_SORT_ORDER): Array<DaffApiDoc> =>
  docs.sort(({ role: a }, { role: b }) => {
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
