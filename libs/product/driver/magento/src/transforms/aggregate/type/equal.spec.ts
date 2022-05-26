import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterEqual,
  DaffProductFilterType,
} from '@daffodil/product';
import { MagentoAggregation } from '@daffodil/product/driver/magento';
import { MagentoProductAggregationSelectFactory } from '@daffodil/product/driver/magento/testing';

import { transformAggregateEqual } from './equal';

describe('@daffodil/product/driver/magento | transformAggregateEqual', () => {
  let selectAggregateFactory: MagentoProductAggregationSelectFactory;
  let aggregation: MagentoAggregation;

  let result: DaffProductFilterEqual;

  beforeEach(() => {
    selectAggregateFactory = TestBed.inject(MagentoProductAggregationSelectFactory);

    aggregation = selectAggregateFactory.create();

    result = transformAggregateEqual(aggregation);
  });

  it('should return a DaffProductFilterEqual with the transformed fields', () => {
    expect(result.type).toEqual(DaffProductFilterType.Equal);
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
