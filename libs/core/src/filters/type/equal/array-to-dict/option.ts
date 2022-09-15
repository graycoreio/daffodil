import { DaffFilterEqualOption } from '../../../../filterable/public_api';
import { daffArrayToDict } from '../../../../utils/public_api';

/**
 * Converts a list of equal filter options to a dict of options keyed by option value.
 */
export const daffFilterEqualOptionArrayToDict =
  (options: DaffFilterEqualOption[]): Record<DaffFilterEqualOption['value'], DaffFilterEqualOption> =>
    daffArrayToDict(options, option => option.value);
