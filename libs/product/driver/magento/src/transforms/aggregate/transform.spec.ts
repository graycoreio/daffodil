import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilter,
  DaffProductFilterType,
} from '@daffodil/product';
import { MagentoAggregation } from '@daffodil/product/driver/magento';
import {
  MagentoProductAggregationPriceFactory,
  MagentoProductAggregationSelectFactory,
} from '@daffodil/product/driver/magento/testing';

import { magentoProductTransformAggregate } from './transform';

describe('@daffodil/product/driver/magento | magentoProductTransformAggregate', () => {
  let priceAggregateFactory: MagentoProductAggregationPriceFactory;
  let selectAggregateFactory: MagentoProductAggregationSelectFactory;
  let aggregation: MagentoAggregation;

  let result: DaffProductFilter;

  beforeEach(() => {
    selectAggregateFactory = TestBed.inject(MagentoProductAggregationSelectFactory);
    priceAggregateFactory = TestBed.inject(MagentoProductAggregationPriceFactory);

    aggregation = selectAggregateFactory.create();

    result = magentoProductTransformAggregate(aggregation);
  });

  describe('for a price aggregate', () => {
    beforeEach(() => {
      aggregation = priceAggregateFactory.create();
      result = magentoProductTransformAggregate(aggregation);
    });

    it('should return a range filter', () => {
      expect(result.type).toEqual(DaffProductFilterType.RangeNumeric);
    });
  });

  describe('for a select aggregate', () => {
    beforeEach(() => {
      aggregation = selectAggregateFactory.create();
      result = magentoProductTransformAggregate(aggregation);
    });

    it('should return an equal filter', () => {
      expect(result.type).toEqual(DaffProductFilterType.Equal);
    });
  });
});
