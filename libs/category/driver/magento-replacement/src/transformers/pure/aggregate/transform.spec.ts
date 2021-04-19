import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilter,
  DaffCategoryFilterType,
} from '@daffodil/category';
import { MagentoAggregation } from '@daffodil/category/driver/magento';
import {
  DaffCategoryDriverMagentoAggregationPriceFactory,
  DaffCategoryDriverMagentoAggregationSelectFactory,
} from '@daffodil/category/driver/magento/testing';

import { transformAggregate } from './transform';

describe('@daffodil/category/driver/magento | transformAggregate', () => {
  let priceAggregateFactory: DaffCategoryDriverMagentoAggregationPriceFactory;
  let selectAggregateFactory: DaffCategoryDriverMagentoAggregationSelectFactory;
  let aggregation: MagentoAggregation;

  let result: DaffCategoryFilter;

  beforeEach(() => {
    selectAggregateFactory = TestBed.inject(DaffCategoryDriverMagentoAggregationSelectFactory);
    priceAggregateFactory = TestBed.inject(DaffCategoryDriverMagentoAggregationPriceFactory);

    aggregation = selectAggregateFactory.create();

    result = transformAggregate(aggregation);
  });

  describe('for a price aggregate', () => {
    beforeEach(() => {
      aggregation = priceAggregateFactory.create();
      result = transformAggregate(aggregation);
    });

    it('should return a range filter', () => {
      expect(result.type).toEqual(DaffCategoryFilterType.RangeNumeric);
    });
  });

  describe('for a select aggregate', () => {
    beforeEach(() => {
      aggregation = selectAggregateFactory.create();
      result = transformAggregate(aggregation);
    });

    it('should return an equal filter', () => {
      expect(result.type).toEqual(DaffCategoryFilterType.Equal);
    });
  });
});
