import {
  DaffFilterType,
  DaffFilter,
} from '../../../filterable/public_api';
import { DaffFilterUnknownType } from '../../errors/unknown-filter-type.error';
import { daffClearFilterEqual } from '../../type/equal/behaviors/clear/clear';
import { daffClearFilterRange } from '../../type/range/behaviors/clear/clear';

/**
 * Undoes the applied state of all applied filter options of a {@link DaffFilter}
 * returning the filter.
 *
 * @idempotent {filter}
 */
export const daffClearFilter = (filter: DaffFilter): DaffFilter => {
  switch (filter.type) {
    case DaffFilterType.RangeNumeric:
      return daffClearFilterRange(filter);
    case DaffFilterType.Equal:
      return daffClearFilterEqual(filter);
    default:
      throw new DaffFilterUnknownType('Unknown filter type');
  }
};
