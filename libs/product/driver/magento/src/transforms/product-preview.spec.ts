import { TestBed } from '@angular/core/testing';

import { DaffProduct } from '@daffodil/product';
import { MagentoProduct } from '@daffodil/product/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/driver/magento/testing';

import { transformMagentoProductPreview } from './product-preview';


describe('@daffodil/product/driver/magento | transformMagentoProductPreview', () => {
  let stubMagentoProduct: MagentoProduct;
  const mediaUrl = 'media url';
  let result: DaffProduct;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    stubMagentoProduct = new MagentoProductFactory().create();

    result = transformMagentoProductPreview(stubMagentoProduct, mediaUrl);
  });

  it('should transform to a daff product', () => {
    expect(result.id).toEqual(stubMagentoProduct.sku);
    expect(result.url).toEqual(`/${stubMagentoProduct.url_key}${stubMagentoProduct.url_suffix}`);
    expect(result.name).toEqual(stubMagentoProduct.name);
    expect(result.thumbnail).toBeDefined();
  });
});
