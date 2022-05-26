import { DaffProductFilterEqual } from '../../../../models/public_api';

/**
 * Determines whether or not the {@link DaffProductFilterEqual} has any applied options.
 */
export const daffIsFilterEqualApplied = (filter: DaffProductFilterEqual): boolean =>
  Object.keys(filter.options).map((key) => filter.options[key]).findIndex(option => option.applied) > -1;
