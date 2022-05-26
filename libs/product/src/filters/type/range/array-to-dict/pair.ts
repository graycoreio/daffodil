import {
  Dict,
  daffArrayToDict,
} from '@daffodil/core';

import { DaffProductFilterRangePair } from '../../../../models/public_api';
import { daffProductComputeFilterRangePairLabel } from '../compute-pair-label';

/**
 * Transforms an {@link DaffProductFilterRangePair[]} to a {@link Dict<DaffProductFilterRangePair>}.
 */
export const daffProductFilterRangePairArrayToDict = <T>(pairs: DaffProductFilterRangePair<T>[]): Dict<DaffProductFilterRangePair<T>> =>
  daffArrayToDict(pairs, pair => daffProductComputeFilterRangePairLabel(pair.min.value, pair.max.value));
