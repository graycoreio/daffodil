import { DaffFilter } from './filter';

/**
 * A dictionary of {@link DaffFilter}s keyed by name.
 */
export type DaffFilters = Record<DaffFilter['name'], DaffFilter>;
