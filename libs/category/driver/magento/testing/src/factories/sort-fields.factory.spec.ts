import { TestBed } from '@angular/core/testing';

import { MagentoSortFields } from '@daffodil/category/driver/magento';

import { DaffCategoryDriverMagentoSortFieldsFactory } from './sort-fields.factory';

describe('Category | Driver | Magento | Testing | Factories | DaffCategoryDriverMagentoSortFieldsFactory', () => {

  let factory: DaffCategoryDriverMagentoSortFieldsFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryDriverMagentoSortFieldsFactory],
    });

    factory = TestBed.inject(DaffCategoryDriverMagentoSortFieldsFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: MagentoSortFields;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.default).toBeDefined();
      expect(result.options).toBeDefined();
    });
  });
});
