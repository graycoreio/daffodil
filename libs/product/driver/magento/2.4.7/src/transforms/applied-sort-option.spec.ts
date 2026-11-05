
import { DaffSortDirectionEnum } from '@daffodil/core';
import {
  MagentoSortFieldAction,
  MagentoSortDirectionEnum,
} from '@daffodil/product/driver/magento/2.4.7';


import { magentoAppliedSortOptionTransform } from './applied-sort-option';

describe('@daffodil/product/driver/magento | magentoAppliedSortOptionTransform', () => {
  it('should return a MagentoSortOptionAction', () => {
    const expectedReturn: MagentoSortFieldAction = {
      sortOption: MagentoSortDirectionEnum.Ascending,
    };
    expect(magentoAppliedSortOptionTransform('sortOption', DaffSortDirectionEnum.Ascending)).toEqual(expectedReturn);
  });
});
