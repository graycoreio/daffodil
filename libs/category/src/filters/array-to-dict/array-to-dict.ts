import {
  Dict,
  daffArrayToDict,
} from '@daffodil/core';

import { DaffCategoryFilter } from '../../models/public_api';

/**
 * Converts a list of category filters into a {@link Dict} of filters keyed by filter name.
 */
export const daffCategoryFilterArrayToDict = (filters: DaffCategoryFilter[]): Dict<DaffCategoryFilter> =>
  daffArrayToDict(filters, filter => filter.name);
