import { TestBed } from '@angular/core/testing';

import { MagentoSearchProductResult } from '@daffodil/search-product/driver/magento';

import { MagentoSearchProductResultFactory } from './product-result.factory';

describe('@daffodil/search-product/driver/magento/testing | MagentoSearchProductResultFactory', () => {
  let factory: MagentoSearchProductResultFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoSearchProductResultFactory],
    });

    factory = TestBed.inject(MagentoSearchProductResultFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoSearchProductResult;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a MagentoSearchProductResult with all required fields defined', () => {
      expect(result.thumbnail.label).toBeDefined();
      expect(result.thumbnail.url).toBeDefined();
      expect(result.url_key).toBeDefined();
      expect(result.url_suffix).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.short_description).toBeDefined();
      expect(result.sku).toBeDefined();
      expect(result.price_range.maximum_price.regular_price).toBeDefined();
      expect(result.price_range.maximum_price.discount).toBeDefined();
    });
  });
});
