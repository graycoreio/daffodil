import { DaffCategoryFilterReplacement } from '@daffodil/category';

import { MagentoAggregation } from '../../../models/public_api';
import { transformAggregateEqual } from './type/equal';
import { transformAggregateRange } from './type/range';

export const transformAggregate = (aggregate: MagentoAggregation): DaffCategoryFilterReplacement => {
  switch (aggregate.type){
    case 'price':
      return transformAggregateRange(aggregate);
    default:
      return transformAggregateEqual(aggregate);
  }
};
