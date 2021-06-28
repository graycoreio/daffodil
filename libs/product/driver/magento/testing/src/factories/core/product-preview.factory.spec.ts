import { TestBed } from '@angular/core/testing';

import { MagentoProductPreview } from '@daffodil/product/driver/magento';

import { MagentoProductPreviewFactory } from './product-preview.factory';

describe('Product | Testing | Factories | MagentoProductPreviewFactory', () => {
  let factory: MagentoProductPreviewFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoProductPreviewFactory],
    });

    factory = TestBed.inject(MagentoProductPreviewFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoProductPreview;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a MagentoProduct with all required fields defined', () => {
      expect(result.__typename).toBeDefined();
      expect(result.uid).toBeDefined();
      expect(result.thumbnail.label).toBeDefined();
      expect(result.thumbnail.url).toBeDefined();
      expect(result.url_key).toBeDefined();
      expect(result.url_suffix).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.sku).toBeDefined();
      expect(result.price_range.maximum_price.regular_price).toBeDefined();
      expect(result.price_range.maximum_price.discount).toBeDefined();
    });
  });
});
