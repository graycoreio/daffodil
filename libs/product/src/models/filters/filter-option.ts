import { DaffProductFilter } from './filter';

/**
 * A given option of a particular filter, e.g. "Blue" is a DaffProductFilterOption
 * of the {@link DaffProductFilter} "Color".
 */
export type DaffProductFilterOption = DaffProductFilter['options'][string];
