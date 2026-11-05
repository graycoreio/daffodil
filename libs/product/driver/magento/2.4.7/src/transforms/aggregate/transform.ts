import { DaffFilter } from '@daffodil/core';

import { transformAggregateEqual } from './type/equal';
import { transformAggregateRange } from './type/range';
import {
  MagentoAggregation,
  MagentoProductFilterType,
} from '../../models/public_api';

export const magentoProductTransformAggregate = (aggregate: MagentoAggregation): DaffFilter => {
  switch (aggregate.type) {
    case MagentoProductFilterType.Range:
      return transformAggregateRange(aggregate);
    case MagentoProductFilterType.Equal:
    case MagentoProductFilterType.Match:
    default:
      return transformAggregateEqual(aggregate);
  }
};
