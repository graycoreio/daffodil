import { TestBed } from '@angular/core/testing';

import {
  DaffFilterRangeBase,
  DaffFilterType,
} from '@daffodil/core';
import { MagentoAggregation } from '@daffodil/product/driver/magento';
import { MagentoProductAggregationPriceFactory } from '@daffodil/product/driver/magento/testing';

import { transformAggregateRange } from './range';

describe('@daffodil/product/driver/magento | transformAggregateRange', () => {
  let priceAggregateFactory: MagentoProductAggregationPriceFactory;
  let aggregation: MagentoAggregation;
  let min: number;
  let max: number;

  let result: DaffFilterRangeBase<number>;

  beforeEach(() => {
    priceAggregateFactory = TestBed.inject(MagentoProductAggregationPriceFactory);

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

  it('should return a DaffFilterRangeBase<number> with the transformed fields', () => {
    expect(result.type).toEqual(DaffFilterType.RangeNumeric);
    expect(result.name).toEqual(aggregation.attribute_code);
    expect(result.label).toEqual(aggregation.label);
    expect(result.min).toEqual(min);
    expect(result.max).toEqual(max);
  });
});
