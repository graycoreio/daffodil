import { TestBed } from '@angular/core/testing';

import { MagentoAggregation } from '@daffodil/category/driver/magento';

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

    it('should return', () => {
    });
  });
});
