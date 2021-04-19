import { DaffCategoryFilterEqualOption } from '@daffodil/category';
import {
  DaffCategoryFilterEqual,
  DaffCategoryFilterType,
} from '@daffodil/category';
import { Dict } from '@daffodil/core';

import { MagentoAggregation } from '../../../../models/public_api';

export const transformAggregateEqual = (aggregate: MagentoAggregation): DaffCategoryFilterEqual => ({
  label: aggregate.label,
  type: DaffCategoryFilterType.Equal,
  name: aggregate.attribute_code,
  options: aggregate.options.reduce((acc, option) => {
    acc[option.value] = {
      applied: false,
      label: option.label,
      count: option.count,
      value: option.value,
    };
    return acc;
  }, <Dict<DaffCategoryFilterEqualOption>>{}),
});
