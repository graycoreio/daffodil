import { TestBed } from '@angular/core/testing';

import { MagentoPageInfo } from '@daffodil/category/driver/magento-replacement';

import { DaffCategoryDriverMagentoPageInfoFactory } from './page-info.factory';

describe('Category | Driver | Magento | Testing | Factories | DaffCategoryDriverMagentoPageInfoFactory', () => {

  let factory: DaffCategoryDriverMagentoPageInfoFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryDriverMagentoPageInfoFactory],
    });

    factory = TestBed.inject(DaffCategoryDriverMagentoPageInfoFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: MagentoPageInfo;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
    });
  });
});
