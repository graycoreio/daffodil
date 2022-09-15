import { DaffFilterEqual } from '../../../../filterable/public_api';

/**
 * Determines whether or not the {@link DaffFilterEqual} has any applied options.
 */
export const daffIsFilterEqualApplied = (filter: DaffFilterEqual): boolean =>
  Object.keys(filter.options).map((key) => filter.options[key]).findIndex(option => option.applied) > -1;
