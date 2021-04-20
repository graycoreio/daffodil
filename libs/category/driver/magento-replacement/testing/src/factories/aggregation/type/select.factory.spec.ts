import { TestBed } from '@angular/core/testing';

import {
  MagentoAggregation,
  MagentoCategoryFilterType,
} from '@daffodil/category/driver/magento-replacement';

import { DaffCategoryDriverMagentoAggregationSelectFactory } from './select.factory';

describe('Category | Driver | Magento | Testing | Factories | DaffCategoryDriverMagentoAggregationSelectFactory', () => {

  let factory: DaffCategoryDriverMagentoAggregationSelectFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryDriverMagentoAggregationSelectFactory],
    });

    factory = TestBed.inject(DaffCategoryDriverMagentoAggregationSelectFactory);
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
      expect(result.type).toEqual(MagentoCategoryFilterType.Equal);
      expect(result.count).toBeDefined();
      expect(result.label).toBeDefined();
      expect(result.options).toBeDefined();
    });
  });
});
