import {
  DaffCategoryEqualFilter,
  DaffCategoryFilterType,
} from '@daffodil/category';

import { MagentoAggregation } from '../../../../models/public_api';

export const transformAggregateEqual = (aggregate: MagentoAggregation): DaffCategoryEqualFilter => ({
  label: aggregate.label,
  type: DaffCategoryFilterType.Equal,
  name: aggregate.attribute_code,
  options: aggregate.options.map(option => ({
    applied: false,
    label: option.label,
    value: option.value,
    count: option.count,
  })),
});
