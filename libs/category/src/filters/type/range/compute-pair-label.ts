import { DaffCategoryFromToFilterSeparator } from '../../../models/public_api';

export const daffCategoryComputeFilterRangePairLabel = (min, max): string =>
  `${min}${DaffCategoryFromToFilterSeparator}${max}`;
