import { TestBed } from '@angular/core/testing';

import { DaffFilter } from '@daffodil/core';
import {
  MagentoAggregation,
  MagentoProductFilterType,
} from '@daffodil/product/driver/magento';

import { MagentoProductAggregationPriceFactory } from './price.factory';

describe('Category | Driver | Magento | Testing | Factories | MagentoProductAggregationPriceFactory', () => {

  let factory: MagentoProductAggregationPriceFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoProductAggregationPriceFactory],
    });

    factory = TestBed.inject(MagentoProductAggregationPriceFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: MagentoAggregation;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a price aggregation', () => {
      expect(result.attribute_code).toEqual('price');
      expect(result.type).toEqual(MagentoProductFilterType.Range);
      expect(result.count).toBeDefined();
      expect(result.label).toBeDefined();
      expect(result.options).toBeDefined();
    });
  });
});
