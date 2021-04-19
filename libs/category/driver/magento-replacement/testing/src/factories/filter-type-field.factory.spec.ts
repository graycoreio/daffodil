import { TestBed } from '@angular/core/testing';

import { MagentoCategoryFilterTypeField } from '@daffodil/category/driver/magento';

import { DaffCategoryDriverMagentoCategoryFilterTypeFieldFactory } from './filter-type-field.factory';

describe('@daffodil/category/driver/magento/testing | Factories | DaffCategoryDriverMagentoCategoryFilterTypeFieldFactory', () => {
  let factory: DaffCategoryDriverMagentoCategoryFilterTypeFieldFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryDriverMagentoCategoryFilterTypeFieldFactory],
    });

    factory = TestBed.inject(DaffCategoryDriverMagentoCategoryFilterTypeFieldFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: MagentoCategoryFilterTypeField;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return with all fields defined', () => {
      expect(result.name).toBeDefined();
      expect(result.type.name).toBeDefined();
    });
  });
});
