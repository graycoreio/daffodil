import { daffArrayToDict } from '@daffodil/core';

import { DaffProductFilter } from '../../models/public_api';

/**
 * Converts a list of product filters into a dictionary of filters keyed by filter name.
 */
export const daffProductFilterArrayToDict = (filters: DaffProductFilter[]): Record<DaffProductFilter['name'], DaffProductFilter> =>
  daffArrayToDict(filters, filter => filter.name);
