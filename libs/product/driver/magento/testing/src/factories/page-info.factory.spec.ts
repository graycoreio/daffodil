import { TestBed } from '@angular/core/testing';

import { MagentoProductPageInfo } from '@daffodil/product/driver/magento';

import { MagentoProductPageInfoFactory } from './page-info.factory';

describe('@daffodil/product/driver/magento/testing | MagentoProductPageInfoFactory', () => {

  let factory: MagentoProductPageInfoFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoProductPageInfoFactory],
    });

    factory = TestBed.inject(MagentoProductPageInfoFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: MagentoProductPageInfo;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.current_page).toBeDefined();
      expect(result.page_size).toBeDefined();
      expect(result.total_pages).toBeDefined();
    });
  });
});
