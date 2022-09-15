import { DaffFilterRangePair } from '../../../../filterable/public_api';
import { daffArrayToDict } from '../../../../utils/public_api';
import { daffFilterComputeRangePairLabel } from '../compute-pair-label';

/**
 * Transforms an {@link DaffFilterRangePair[]} to a dictionary.
 */
export const daffFilterRangePairArrayToDict = <T>(pairs: DaffFilterRangePair<T>[]): Record<string, DaffFilterRangePair<T>> =>
  daffArrayToDict(pairs, pair => daffFilterComputeRangePairLabel(pair.min.value, pair.max.value));
