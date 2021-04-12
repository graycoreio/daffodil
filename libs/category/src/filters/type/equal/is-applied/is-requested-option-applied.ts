import {
  DaffCategoryFilterEqualToggleRequest,
  DaffCategoryFilter,
} from '../../../../models/public_api';

/**
 * Determines whether or not any {@link DaffCategoryFilter} options matching {@link DaffCategoryFilterEqualToggleRequest} are applied.
 */
export const daffIsRequestedFilterEqualOptionApplied = (
  request: DaffCategoryFilterEqualToggleRequest,
  filter: DaffCategoryFilter,
): boolean => !!filter.options[request.value]?.applied;
