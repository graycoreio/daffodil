import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoProduct,
  MagentoProductTypeEnum,
  MagentoProductStockStatusEnum,
} from '@daffodil/product/driver/magento';

import { MockMagentoProductPreview } from './product-preview.factory';

export class MockMagentoCoreProduct extends MockMagentoProductPreview implements MagentoProduct {
  __typename = MagentoProductTypeEnum.SimpleProduct;
  canonical_url = faker.internet.url();
  meta_title = faker.random.word();
  meta_description = faker.random.words(3);
  stock_status = MagentoProductStockStatusEnum.InStock;
  description = {
    __typename: 'ComplexTextValue',
    html: faker.random.words(5),
  };
  short_description = {
    __typename: 'ComplexTextValue',
    html: faker.random.words(3),
  };
  media_gallery_entries = [];
}

/**
 * A factory for creating stub data for {@link MagentoProduct}s.
 */
@Injectable({
  providedIn: 'root',
})
export class MagentoCoreProductFactory extends DaffModelFactory<MagentoProduct> {

  constructor(){
    super(MockMagentoCoreProduct);
  }
}
