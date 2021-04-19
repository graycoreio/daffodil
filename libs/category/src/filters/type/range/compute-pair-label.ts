import { DaffCategoryFromToFilterSeparatorReplacement } from '../../../models/public_api';

export const daffCategoryComputeFilterRangePairLabel = (min, max): string =>
  `${min}${DaffCategoryFromToFilterSeparatorReplacement}${max}`;
