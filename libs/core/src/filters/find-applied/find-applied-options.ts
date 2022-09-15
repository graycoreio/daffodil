import { DaffFilterBase } from '../../filterable/public_api';

/**
 * Finds the applied options in the filter.
 */
export const daffFilterFindAppliedOptions = <T extends DaffFilterBase>(filter: T): T['options'][string][] =>
  Object.keys(filter.options).map((key) => <T['options'][string]>filter.options[key]).filter((option) => option.applied);
