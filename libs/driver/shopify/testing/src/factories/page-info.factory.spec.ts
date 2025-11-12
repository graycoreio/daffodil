import { TestBed } from '@angular/core/testing';

import { ShopifyPageInfo } from '@daffodil/driver/shopify';

import { ShopifyPageInfoFactory } from './page-info.factory';

describe('@daffodil/product/driver/shopify/testing | ShopifyPageInfoFactory', () => {

  let factory: ShopifyPageInfoFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopifyPageInfoFactory],
    });

    factory = TestBed.inject(ShopifyPageInfoFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: ShopifyPageInfo;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.endCursor).toBeDefined();
      expect(result.hasNextPage).toBeDefined();
      expect(result.hasPreviousPage).toBeDefined();
      expect(result.startCursor).toBeDefined();
    });
  });
});
