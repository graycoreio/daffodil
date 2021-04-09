import {
  DaffCategoryFilterEqualToggleRequest,
  DaffCategoryFilter,
} from '../../../../models/public_api';

/**
 * Determines whether or not the requested equal filter option is applied.
 */
export const daffIsRequestedFilterEqualOptionApplied = (
  request: DaffCategoryFilterEqualToggleRequest,
  filter: DaffCategoryFilter,
): boolean => !!filter.options[request.value]?.applied;
