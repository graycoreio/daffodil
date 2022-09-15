import {
  DaffFilterRangeNumeric,
  DaffFilterRangeNumericRequest,
} from '../../../../filterable/public_api';
import { daffFilterRangeToRequest } from '../../range/to-request/filter-to-request';

/**
 * Transforms a {@link DaffFilterRangeNumeric} into a {@link DaffFilterRangeNumericRequest}
 */
export const daffFilterRangeNumericToRequest = (
  filter: DaffFilterRangeNumeric,
): DaffFilterRangeNumericRequest => <DaffFilterRangeNumericRequest>daffFilterRangeToRequest(filter);
