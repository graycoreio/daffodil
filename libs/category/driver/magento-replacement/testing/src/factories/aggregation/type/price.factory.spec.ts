import { TestBed } from '@angular/core/testing';

import { DaffCategoryFilterReplacement } from '@daffodil/category';
import { MagentoAggregation } from '@daffodil/category/driver/magento-replacement';

import { DaffCategoryDriverMagentoAggregationPriceFactory } from './price.factory';

describe('Category | Driver | Magento | Testing | Factories | DaffCategoryDriverMagentoAggregationPriceFactory', () => {

  let factory: DaffCategoryDriverMagentoAggregationPriceFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryDriverMagentoAggregationPriceFactory],
    });

    factory = TestBed.inject(DaffCategoryDriverMagentoAggregationPriceFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: MagentoAggregation;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
    });
  });
});
