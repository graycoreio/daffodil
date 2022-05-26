import { DaffProductFromToFilterSeparator } from '../../../models/public_api';

export const daffProductComputeFilterRangePairLabel = (min, max): string =>
  `${min}${DaffProductFromToFilterSeparator}${max}`;
