import {
  DaffCategoryFilterType,
  DaffCategoryFilter,
} from '../../../models/public_api';
import { DaffCategoryUnknownFilterType } from '../../errors/unknown-filter-type.error';
import { daffClearFilterEqual } from '../../type/equal/public_api';
import { daffClearFilterRange } from '../../type/range/public_api';

export const daffClearFilter = (filter: DaffCategoryFilter): DaffCategoryFilter => {
  switch (filter.type) {
    case DaffCategoryFilterType.RangeNumeric:
      return daffClearFilterRange(filter);
    case DaffCategoryFilterType.Equal:
      return daffClearFilterEqual(filter);
    default:
      throw new DaffCategoryUnknownFilterType('Unknown filter type');
  }
};
