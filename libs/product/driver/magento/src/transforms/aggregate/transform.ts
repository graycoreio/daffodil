import { DaffProductFilter } from '@daffodil/product';

import {
  MagentoAggregation,
  MagentoProductFilterType,
} from '../../models/public_api';
import { transformAggregateEqual } from './type/equal';
import { transformAggregateRange } from './type/range';

export const magentoProductTransformAggregate = (aggregate: MagentoAggregation): DaffProductFilter => {
  switch (aggregate.type) {
    case MagentoProductFilterType.Range:
      return transformAggregateRange(aggregate);
    case MagentoProductFilterType.Equal:
    case MagentoProductFilterType.Match:
    default:
      return transformAggregateEqual(aggregate);
  }
};
