import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterEqual,
  DaffCategoryFilterType,
} from '@daffodil/category';
import { MagentoAggregation } from '@daffodil/category/driver/magento';
import { DaffCategoryDriverMagentoAggregationSelectFactory } from '@daffodil/category/driver/magento/testing';

import { transformAggregateEqual } from './equal';

describe('@daffodil/category/driver/magento | transformers | transformAggregateEqual', () => {
  let selectAggregateFactory: DaffCategoryDriverMagentoAggregationSelectFactory;
  let aggregation: MagentoAggregation;

  let result: DaffCategoryFilterEqual;

  beforeEach(() => {
    selectAggregateFactory = TestBed.inject(DaffCategoryDriverMagentoAggregationSelectFactory);

    aggregation = selectAggregateFactory.create();

    result = transformAggregateEqual(aggregation);
  });

  it('should return a DaffCategoryFilterEqual with the transformed fields', () => {
    expect(result.type).toEqual(DaffCategoryFilterType.Equal);
    expect(result.name).toEqual(aggregation.attribute_code);
    expect(result.label).toEqual(aggregation.label);
    aggregation.options.forEach(option => {
      const resOpt = result.options[option.value];
      expect(resOpt.applied).toBeFalse();
      expect(resOpt.label).toEqual(option.label);
      expect(resOpt.count).toEqual(option.count);
      expect(resOpt.value).toEqual(option.value);
    });
  });
});
