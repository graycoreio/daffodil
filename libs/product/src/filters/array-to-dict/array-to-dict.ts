import {
  Dict,
  daffArrayToDict,
} from '@daffodil/core';

import { DaffProductFilter } from '../../models/public_api';

/**
 * Converts a list of product filters into a {@link Dict} of filters keyed by filter name.
 */
export const daffProductFilterArrayToDict = (filters: DaffProductFilter[]): Dict<DaffProductFilter> =>
  daffArrayToDict(filters, filter => filter.name);
