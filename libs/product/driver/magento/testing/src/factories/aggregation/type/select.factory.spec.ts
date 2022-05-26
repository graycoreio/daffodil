import { TestBed } from '@angular/core/testing';

import {
  MagentoAggregation,
  MagentoProductFilterType,
} from '@daffodil/product/driver/magento';

import { MagentoProductAggregationSelectFactory } from './select.factory';

describe('Category | Driver | Magento | Testing | Factories | MagentoProductAggregationSelectFactory', () => {

  let factory: MagentoProductAggregationSelectFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoProductAggregationSelectFactory],
    });

    factory = TestBed.inject(MagentoProductAggregationSelectFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: MagentoAggregation;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a select aggregation', () => {
      expect(result.attribute_code).toEqual('select');
      expect(result.type).toEqual(MagentoProductFilterType.Equal);
      expect(result.count).toBeDefined();
      expect(result.label).toBeDefined();
      expect(result.options).toBeDefined();
    });
  });
});
