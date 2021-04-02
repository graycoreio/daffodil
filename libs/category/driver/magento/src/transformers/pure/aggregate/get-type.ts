import { DaffCategoryFilterType } from '@daffodil/category';

import { MagentoAggregation } from '../../../models/public_api';

export const getType = (type: MagentoAggregation['type']): DaffCategoryFilterType => {
  switch (type){
    case 'price':
      return DaffCategoryFilterType.RangeNumeric;
    default:
      return DaffCategoryFilterType.Equal;
  }
};
