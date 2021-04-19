import { DaffCategoryFilter } from '@daffodil/category';

import {
  MagentoAggregation,
  MagentoCategoryFilterType,
} from '../../../models/public_api';
import { transformAggregateEqual } from './type/equal';
import { transformAggregateRange } from './type/range';

export const transformAggregate = (aggregate: MagentoAggregation): DaffCategoryFilter => {
  switch (aggregate.type) {
    case MagentoCategoryFilterType.Range:
      return transformAggregateRange(aggregate);
    case MagentoCategoryFilterType.Equal:
    case MagentoCategoryFilterType.Match:
    default:
      return transformAggregateEqual(aggregate);
  }
};
