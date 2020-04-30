import { TestBed } from '@angular/core/testing';

import { MagentoProduct } from '@daffodil/product';

import { MagentoCoreProductFactory } from './product.factory';

describe('Product | Testing | Factories | MagentoCoreProductFactory', () => {
  let factory: MagentoCoreProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCoreProductFactory]
    });

    factory = TestBed.get(MagentoCoreProductFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoProduct;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a MagentoProduct with all required fields defined', () => {
			expect(result.__typename).toBeDefined();
      expect(result.id).toBeDefined();
      expect(result.image.label).toBeDefined();
      expect(result.image.url).toBeDefined();
      expect(result.thumbnail.label).toBeDefined();
      expect(result.thumbnail.url).toBeDefined();
      expect(result.url_key).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.description).toBeDefined();
      expect(result.short_description).toBeDefined();
      expect(result.media_gallery_entries).toBeDefined();
      expect(result.sku).toBeDefined();
      expect(result.price_range.maximum_price).toBeDefined();
    });
  });
});
