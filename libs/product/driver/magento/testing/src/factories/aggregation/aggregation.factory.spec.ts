import { TestBed } from '@angular/core/testing';

import { MagentoAggregation } from '@daffodil/product/driver/magento';

import { MagentoProductAggregationFactory } from './aggregation.factory';

describe('Category | Driver | Magento | Testing | Factories | MagentoProductAggregationFactory', () => {

  let factory: MagentoProductAggregationFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoProductAggregationFactory],
    });

    factory = TestBed.inject(MagentoProductAggregationFactory);
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
