import {
  DaffCategoryFilterEqualToggleRequest,
  DaffCategoryFilterEqual,
} from '../../../../models/public_api';

/**
 * Determines whether or not any {@link DaffCategoryFilterEqual} options matching {@link DaffCategoryFilterEqualToggleRequest} are applied.
 */
export const daffIsEqualToggleRequestAppliedToFilter = (
  request: DaffCategoryFilterEqualToggleRequest,
  filter: DaffCategoryFilterEqual,
): boolean => !!filter.options[request.value]?.applied;
