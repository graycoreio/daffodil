import {
  DaffCategoryFilterRangePair,
  DaffCategoryFilterRangeNumeric,
  DaffCategoryFilterRangeNumericRequest,
} from '../../../../models/public_api';
import { daffCategoryFilterRangeToRequest } from '../../range/to-request/filter-to-request';

export const daffCategoryFilterRangeNumericToRequest = (
  filter: DaffCategoryFilterRangeNumeric,
  options: DaffCategoryFilterRangePair<number>[],
): DaffCategoryFilterRangeNumericRequest => <DaffCategoryFilterRangeNumericRequest>daffCategoryFilterRangeToRequest(filter, options);
