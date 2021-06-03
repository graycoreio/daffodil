import {
  Dict,
  daffArrayToDict,
} from '@daffodil/core';

import { DaffCategoryFilterEqualOption } from '../../../../models/public_api';

/**
 * Converts a list of category equal filter options to a dict of options keyed by option value.
 */
export const daffCategoryFilterEqualOptionArrayToDict =
  (options: DaffCategoryFilterEqualOption[]): Dict<DaffCategoryFilterEqualOption> =>
    daffArrayToDict(options, option => option.value);
