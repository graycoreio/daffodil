import { DaffFilter } from './filter';

/**
 * A dictionary of {@link DaffFilter}s keyed by name.
 */
export type DaffFilters<T extends DaffFilter = DaffFilter> = Record<T['name'], T>;
