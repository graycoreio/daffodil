import { daffArrayToDict } from '@daffodil/core';

import { DaffProductFilterRangePair } from '../../../../models/public_api';
import { daffProductComputeFilterRangePairLabel } from '../compute-pair-label';

/**
 * Transforms an {@link DaffProductFilterRangePair[]} to a dictionary.
 */
export const daffProductFilterRangePairArrayToDict = <T>(pairs: DaffProductFilterRangePair<T>[]): Record<string, DaffProductFilterRangePair<T>> =>
  daffArrayToDict(pairs, pair => daffProductComputeFilterRangePairLabel(pair.min.value, pair.max.value));
