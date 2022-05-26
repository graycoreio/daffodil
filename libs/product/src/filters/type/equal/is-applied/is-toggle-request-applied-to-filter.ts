import {
  DaffProductFilterEqualToggleRequest,
  DaffProductFilterEqual,
} from '../../../../models/public_api';

/**
 * Determines whether or not any {@link DaffProductFilterEqual} options matching {@link DaffProductFilterEqualToggleRequest} are applied.
 */
export const daffIsEqualToggleRequestAppliedToFilter = (
  request: DaffProductFilterEqualToggleRequest,
  filter: DaffProductFilterEqual,
): boolean => !!filter.options[request.value]?.applied;
