import {
  DaffCategoryRangeFilter,
  DaffCategoryFilterType,
} from '@daffodil/category';

import { MagentoAggregation } from '../../../../models/public_api';

export const transformAggregateRange = (aggregate: MagentoAggregation): DaffCategoryRangeFilter => ({
  label: aggregate.label,
  type: DaffCategoryFilterType.Range,
  name: aggregate.attribute_code,
  min: aggregate.options[0].value.split('-')[0],
  max: aggregate.options[aggregate.options.length - 1].value.split('-')[1],
  options: [],
});
