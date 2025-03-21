import { TestBed } from '@angular/core/testing';

import { ShopifyCategory } from '@daffodil/driver/shopify';

import { DaffCategoryDriverShopifyCategoryFactory } from './collection.factory';

describe('@daffodil/category/driver/magento/testing | DaffCategoryDriverMagentoCategoryFactory', () => {

  let factory: DaffCategoryDriverShopifyCategoryFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryDriverShopifyCategoryFactory],
    });

    factory = TestBed.inject(DaffCategoryDriverShopifyCategoryFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: ShopifyCategory;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a category', () => {
      expect(result.title).toBeDefined();
      expect(result.handle).toBeDefined();
      expect(result.id).toBeDefined();
      expect(result.description).toBeDefined();
      expect(result.onlineStoreUrl).toBeDefined();
    });
  });
});
