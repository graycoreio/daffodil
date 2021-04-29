import { TestBed } from '@angular/core/testing';

import {
  MagentoProduct,
  MagentoProductTypeEnum,
} from '@daffodil/product/driver/magento';

import { MagentoConfigurableProductFactory } from './configurable.factory';

describe('Product | Testing | Factories | MagentoConfigurableProductFactory', () => {
  let factory: MagentoConfigurableProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoConfigurableProductFactory],
    });

    factory = TestBed.inject(MagentoConfigurableProductFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoProduct;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a MagentoConfigurableProduct with all required fields defined', () => {
      expect(result.__typename).toEqual(MagentoProductTypeEnum.ConfigurableProduct);
      expect(result.uid).toBeDefined();
      expect(result.image.label).toBeDefined();
      expect(result.image.url).toBeDefined();
      expect(result.thumbnail.label).toBeDefined();
      expect(result.thumbnail.url).toBeDefined();
      expect(result.url_key).toBeDefined();
      expect(result.url_suffix).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.description).toBeDefined();
      expect(result.short_description).toBeDefined();
      expect(result.media_gallery_entries).toBeDefined();
      expect(result.sku).toBeDefined();
      expect(result.price_range.maximum_price.regular_price).toBeDefined();
      expect(result.price_range.maximum_price.discount).toBeDefined();
    });
  });
});
