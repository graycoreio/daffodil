import { DaffCategoryFilterEqual } from '../../../../models/public_api';

/**
 * Determines whether or not a filter has any applied options.
 */
export const daffIsFilterEqualApplied = (filter: DaffCategoryFilterEqual): boolean =>
  Object.keys(filter.options).map((key) => filter.options[key]).findIndex(option => option.applied) > -1;
