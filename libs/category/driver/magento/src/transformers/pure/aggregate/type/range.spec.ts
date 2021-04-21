import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterRangeBase,
  DaffCategoryFilterType,
} from '@daffodil/category';
import { MagentoAggregation } from '@daffodil/category/driver/magento';
import { DaffCategoryDriverMagentoAggregationPriceFactory } from '@daffodil/category/driver/magento/testing';

import { transformAggregateRange } from './range';

describe('@daffodil/category/driver/magento | transformers | transformAggregateRange', () => {
  let priceAggregateFactory: DaffCategoryDriverMagentoAggregationPriceFactory;
  let aggregation: MagentoAggregation;
  let min: number;
  let max: number;

  let result: DaffCategoryFilterRangeBase<number>;

  beforeEach(() => {
    priceAggregateFactory = TestBed.inject(DaffCategoryDriverMagentoAggregationPriceFactory);

    min = 0;
    max = 100;
    aggregation = priceAggregateFactory.create({
      options: [
        {
          value: `${min}-10`,
          count: 1,
          label: `${min}-10`,
        },
        {
          value: '10-90',
          count: 1,
          label: '10-90',
        },
        {
          value: `90-${max}`,
          count: 1,
          label: `90-${max}`,
        },
      ],
    });

    result = transformAggregateRange(aggregation);
  });

  it('should return a DaffCategoryFilterRangeBase<number> with the transformed fields', () => {
    expect(result.type).toEqual(DaffCategoryFilterType.RangeNumeric);
    expect(result.name).toEqual(aggregation.attribute_code);
    expect(result.label).toEqual(aggregation.label);
    expect(result.min).toEqual(min);
    expect(result.max).toEqual(max);
  });
});
