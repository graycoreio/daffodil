import {
  DaffCategoryFilterTypeReplacement,
  DaffCategoryFilterReplacement,
} from '../../../models/public_api';
import { DaffCategoryUnknownFilterType } from '../../errors/unknown-filter-type.error';
import { daffClearFilterEqual } from '../../type/equal/behaviors/clear/clear';
import { daffClearFilterRange } from '../../type/range/behaviors/clear/clear';

/**
 * Undoes the applied state of all applied filter options of a {@link DaffCategoryFilterReplacement}
 * returning the filter.
 *
 * @idempotent {filter}
 */
export const daffClearFilter = (filter: DaffCategoryFilterReplacement): DaffCategoryFilterReplacement => {
  switch (filter.type) {
    case DaffCategoryFilterTypeReplacement.RangeNumeric:
      return daffClearFilterRange(filter);
    case DaffCategoryFilterTypeReplacement.Equal:
      return daffClearFilterEqual(filter);
    default:
      throw new DaffCategoryUnknownFilterType('Unknown filter type');
  }
};
