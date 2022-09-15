import { DaffFilter } from './filter';

/**
 * A given option of a particular filter, e.g. "Blue" is a DaffFilterOption
 * of the {@link DaffFilter} "Color".
 */
export type DaffFilterOption = DaffFilter['options'][string];
