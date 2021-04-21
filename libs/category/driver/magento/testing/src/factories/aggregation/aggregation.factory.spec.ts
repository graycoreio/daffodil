import { TestBed } from '@angular/core/testing';

import { MagentoAggregation } from '@daffodil/category/driver/magento';

import { DaffCategoryDriverMagentoAggregationFactory } from './aggregation.factory';

describe('Category | Driver | Magento | Testing | Factories | DaffCategoryDriverMagentoAggregationFactory', () => {

  let factory: DaffCategoryDriverMagentoAggregationFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryDriverMagentoAggregationFactory],
    });

    factory = TestBed.inject(DaffCategoryDriverMagentoAggregationFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: MagentoAggregation;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return an aggregation', () => {
      expect(result.attribute_code).toBeDefined();
      expect(result.type).toBeDefined();
      expect(result.count).toBeDefined();
      expect(result.label).toBeDefined();
      expect(result.options).toBeDefined();
    });
  });
});
