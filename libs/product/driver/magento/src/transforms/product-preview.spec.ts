import { TestBed } from '@angular/core/testing';

import {
  DaffProduct,
  DaffProductTypeEnum,
} from '@daffodil/product';
import {
  MagentoBundledProduct,
  MagentoProduct,
} from '@daffodil/product/driver/magento';
import {
  MagentoBundledProductFactory,
  MagentoProductFactory,
} from '@daffodil/product/driver/magento/testing';

import { MagentoProductStockStatusEnum } from '../models/product-preview.interface';
import { transformMagentoProductPreview } from './product-preview';


describe('@daffodil/product/driver/magento | transformMagentoProductPreview', () => {
  let stubMagentoProduct: MagentoProduct;
  let productFactory: MagentoProductFactory;
  let bundleProductFactory: MagentoBundledProductFactory;
  const mediaUrl = 'media url';
  let result: DaffProduct;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    productFactory = TestBed.inject(MagentoProductFactory);
    bundleProductFactory = TestBed.inject(MagentoBundledProductFactory);

    stubMagentoProduct = productFactory.create({
      stock_status: MagentoProductStockStatusEnum.InStock,
    });

    result = transformMagentoProductPreview(stubMagentoProduct, mediaUrl);
  });

  it('should transform to a daff product', () => {
    expect(result.id).toEqual(stubMagentoProduct.sku);
    expect(result.url).toEqual(`/${stubMagentoProduct.url_key}${stubMagentoProduct.url_suffix}`);
    expect(result.name).toEqual(stubMagentoProduct.name);
    expect(result.thumbnail).toBeDefined();
    expect(result.in_stock).toBeTrue();
  });

  describe('when the product is a simple product', () => {

    it('should return a simple product', () => {
      expect(transformMagentoProductPreview(stubMagentoProduct, mediaUrl).type).toEqual(DaffProductTypeEnum.Simple);
    });
  });

  describe('when the product is a bundled product', () => {
    let magentoBundledProduct: MagentoBundledProduct;

    beforeEach(() => {
      magentoBundledProduct = bundleProductFactory.create();
    });

    it('should return a composite product', () => {
      expect(transformMagentoProductPreview(magentoBundledProduct, mediaUrl).type).toEqual(DaffProductTypeEnum.Composite);
    });
  });
});
