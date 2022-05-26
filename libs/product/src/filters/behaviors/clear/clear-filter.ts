import {
  DaffProductFilterType,
  DaffProductFilter,
} from '../../../models/public_api';
import { DaffProductUnknownFilterType } from '../../errors/unknown-filter-type.error';
import { daffClearFilterEqual } from '../../type/equal/behaviors/clear/clear';
import { daffClearFilterRange } from '../../type/range/behaviors/clear/clear';

/**
 * Undoes the applied state of all applied filter options of a {@link DaffProductFilter}
 * returning the filter.
 *
 * @idempotent {filter}
 */
export const daffClearFilter = (filter: DaffProductFilter): DaffProductFilter => {
  switch (filter.type) {
    case DaffProductFilterType.RangeNumeric:
      return daffClearFilterRange(filter);
    case DaffProductFilterType.Equal:
      return daffClearFilterEqual(filter);
    default:
      throw new DaffProductUnknownFilterType('Unknown filter type');
  }
};
