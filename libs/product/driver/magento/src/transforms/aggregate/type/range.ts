import {
  DaffProductFilterType,
  DaffProductFilterRangeNumeric,
} from '@daffodil/product';

import { MagentoAggregation } from '../../../models/public_api';

/**
 * The char that Magento uses to separate individual elements of the buckets
 * they return for range elements
 */
export const magentoBucketSeparator = '-';

export const transformAggregateRange = (aggregate: MagentoAggregation): DaffProductFilterRangeNumeric => ({
  label: aggregate.label,
  type: DaffProductFilterType.RangeNumeric,
  name: aggregate.attribute_code,
  min: parseInt(aggregate.options[0].value.split('-')[0], 10),
  max: parseInt(aggregate.options[aggregate.options.length - 1].value.split(magentoBucketSeparator)[1], 10),
  options: {},
});
