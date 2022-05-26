import {
  DaffProductFilterRangeNumeric,
  DaffProductFilterRangeNumericRequest,
} from '../../../../models/public_api';
import { daffProductFilterRangeToRequest } from '../../range/to-request/filter-to-request';

/**
 * Transforms a {@link DaffProductFilterRangeNumeric} into a {@link DaffProductFilterRangeNumericRequest}
 */
export const daffProductFilterRangeNumericToRequest = (
  filter: DaffProductFilterRangeNumeric,
): DaffProductFilterRangeNumericRequest => <DaffProductFilterRangeNumericRequest>daffProductFilterRangeToRequest(filter);
