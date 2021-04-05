import { Dict } from '@daffodil/core';

import { DaffCategoryFilterRangePair } from '../../../../models/public_api';
import { daffCategoryComputeFilterRangePairLabel } from '../compute-pair-label';

/**
 * Transforms a list of range pairs to a dict of range pairs.
 *
 * @param pairs The list of range pairs
 */
export const daffCategoryFilterRangePairArrayToDict = <T>(pairs: DaffCategoryFilterRangePair<T>[]): Dict<DaffCategoryFilterRangePair<T>> =>
  pairs.reduce((acc, pair) => {
    acc[daffCategoryComputeFilterRangePairLabel(pair.min, pair.max)] = pair;
    return acc;
  }, {});
