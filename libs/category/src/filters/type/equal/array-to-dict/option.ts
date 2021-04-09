import { Dict } from '@daffodil/core';

import { DaffCategoryFilterEqualOption } from '../../../../models/public_api';

const reducer = (acc, current: DaffCategoryFilterEqualOption): Dict<DaffCategoryFilterEqualOption>  => {
  acc[current.value] = current;
  return acc;
};

/**
 * Converts a list of category equal filter options to a dict of options keyed by option value.
 */
export const daffCategoryFilterEqualOptionArrayToDict =
  (options: DaffCategoryFilterEqualOption[]): Dict<DaffCategoryFilterEqualOption> =>
    options.reduce(reducer, <Dict<DaffCategoryFilterEqualOption>>{});
