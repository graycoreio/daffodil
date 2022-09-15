import {
  DaffFilterEqualToggleRequest,
  DaffFilterEqual,
} from '../../../../filterable/public_api';

/**
 * Determines whether or not any {@link DaffFilterEqual} options matching {@link DaffFilterEqualToggleRequest} are applied.
 */
export const daffIsEqualToggleRequestAppliedToFilter = (
  request: DaffFilterEqualToggleRequest,
  filter: DaffFilterEqual,
): boolean => !!filter.options[request.value]?.applied;
