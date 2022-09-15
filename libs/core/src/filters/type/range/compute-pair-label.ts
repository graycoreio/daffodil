import { DaffFilterFromToFilterSeparator } from '../../../filterable/public_api';

export const daffFilterComputeRangePairLabel = (min, max): string =>
  `${min}${DaffFilterFromToFilterSeparator}${max}`;
