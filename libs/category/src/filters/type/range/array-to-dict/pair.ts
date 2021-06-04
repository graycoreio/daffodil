import {
  Dict,
  daffArrayToDict,
} from '@daffodil/core';

import { DaffCategoryFilterRangePair } from '../../../../models/public_api';
import { daffCategoryComputeFilterRangePairLabel } from '../compute-pair-label';

/**
 * Transforms an {@link DaffCategoryFilterRangePair[]} to a {@link Dict<DaffCategoryFilterRangePair>}.
 */
export const daffCategoryFilterRangePairArrayToDict = <T>(pairs: DaffCategoryFilterRangePair<T>[]): Dict<DaffCategoryFilterRangePair<T>> =>
  daffArrayToDict(pairs, pair => daffCategoryComputeFilterRangePairLabel(pair.min.value, pair.max.value));
