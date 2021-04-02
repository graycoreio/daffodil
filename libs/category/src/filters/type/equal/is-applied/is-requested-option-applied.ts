import { Dict } from '@daffodil/core';

import {
  DaffToggleCategoryFilterEqualRequest,
  DaffCategoryFilter,
} from '../../../../models/public_api';

/**
 * Determines whether or not the requested equal filter option is applied.
 */
export const daffIsRequestedFilterEqualOptionApplied = (
  request: DaffToggleCategoryFilterEqualRequest,
  filter: DaffCategoryFilter,
): boolean => filter.options[request.name].applied;
