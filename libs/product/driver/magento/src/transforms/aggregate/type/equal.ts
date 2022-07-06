
import {
  DaffProductFilterEqual,
  DaffProductFilterType,
  DaffProductFilterEqualOption,
} from '@daffodil/product';

import { MagentoAggregation } from '../../../models/public_api';

export const transformAggregateEqual = (aggregate: MagentoAggregation): DaffProductFilterEqual => ({
  label: aggregate.label,
  type: DaffProductFilterType.Equal,
  name: aggregate.attribute_code,
  options: aggregate.options.reduce((acc, option) => {
    acc[option.value] = {
      applied: false,
      label: option.label,
      count: option.count,
      value: option.value,
    };
    return acc;
  }, <Record<DaffProductFilterEqualOption['value'], DaffProductFilterEqualOption>>{}),
});
