import { TestBed } from '@angular/core/testing';

import { MagentoProductFilterTypeField } from '@daffodil/product/driver/magento';

import { MagentoProductFilterTypeFieldFactory } from './filter-type-field.factory';

describe('@daffodil/product/driver/magento/testing | Factories | MagentoProductFilterTypeFieldFactory', () => {
  let factory: MagentoProductFilterTypeFieldFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoProductFilterTypeFieldFactory],
    });

    factory = TestBed.inject(MagentoProductFilterTypeFieldFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: MagentoProductFilterTypeField;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return with all fields defined', () => {
      expect(result.name).toBeDefined();
      expect(result.type.name).toBeDefined();
    });
  });
});
