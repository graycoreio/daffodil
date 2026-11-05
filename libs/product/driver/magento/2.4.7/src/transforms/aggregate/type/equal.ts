
import {
  DaffFilterEqual,
  DaffFilterType,
  DaffFilterEqualOption,
} from '@daffodil/core';

import { MagentoAggregation } from '../../../models/public_api';

export const transformAggregateEqual = (aggregate: MagentoAggregation): DaffFilterEqual => ({
  label: aggregate.label,
  type: DaffFilterType.Equal,
  name: aggregate.attribute_code,
  options: aggregate.options.reduce((acc, option) => {
    acc[option.value] = {
      applied: false,
      label: option.label,
      count: option.count,
      value: option.value,
    };
    return acc;
  }, <Record<DaffFilterEqualOption['value'], DaffFilterEqualOption>>{}),
});
