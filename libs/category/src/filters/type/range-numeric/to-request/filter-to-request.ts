import {
  DaffCategoryFilterRangeNumeric,
  DaffCategoryFilterRangeNumericRequest,
} from '../../../../models/public_api';
import { daffCategoryFilterRangeToRequest } from '../../range/to-request/filter-to-request';

/**
 * Transforms a {@link DaffCategoryFilterRangeNumeric} into a {@link DaffCategoryFilterRangeNumericRequest}
 */
export const daffCategoryFilterRangeNumericToRequest = (
  filter: DaffCategoryFilterRangeNumeric,
): DaffCategoryFilterRangeNumericRequest => <DaffCategoryFilterRangeNumericRequest>daffCategoryFilterRangeToRequest(filter);
