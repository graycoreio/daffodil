import { TestBed } from '@angular/core/testing';

import { MagentoProduct } from '@daffodil/product/driver/magento';

import { MagentoBundledProductFactory } from './bundle.factory';

describe('Composite Product | Driver | Magento | Testing | Factories | MagentoBundledProductFactory', () => {
  let factory: MagentoBundledProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoBundledProductFactory],
    });

    factory = TestBed.inject(MagentoBundledProductFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoProduct;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a MagentoBundledProduct with all required fields defined', () => {
      expect(result.__typename).toBeDefined();
      expect(result.uid).toBeDefined();
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
