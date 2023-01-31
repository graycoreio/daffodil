import { TestBed } from '@angular/core/testing';

import { MagentoSearchResultPageInfo } from '@daffodil/driver/magento';

import { MagentoSearchResultPageInfoFactory } from './page-info.factory';

describe('@daffodil/driver/magento/testing | MagentoSearchResultPageInfoFactory', () => {

  let factory: MagentoSearchResultPageInfoFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoSearchResultPageInfoFactory],
    });

    factory = TestBed.inject(MagentoSearchResultPageInfoFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: MagentoSearchResultPageInfo;

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
