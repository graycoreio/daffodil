import { TestBed } from '@angular/core/testing';

import { MagentoProductSortFields } from '@daffodil/product/driver/magento';

import { MagentoProductSortFieldsFactory } from './sort-fields.factory';

describe('@daffodil/product/driver/magento/testing | MagentoProductSortFieldsFactory', () => {

  let factory: MagentoProductSortFieldsFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoProductSortFieldsFactory],
    });

    factory = TestBed.inject(MagentoProductSortFieldsFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: MagentoProductSortFields;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.default).toBeDefined();
      expect(result.options).toBeDefined();
    });
  });
});
