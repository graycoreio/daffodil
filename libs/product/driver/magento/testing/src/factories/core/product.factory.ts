import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoProduct,
  MagentoProductTypeEnum,
  MagentoProductStockStatusEnum,
} from '@daffodil/product/driver/magento';

export class MockMagentoCoreProduct implements MagentoProduct {
  __typename = MagentoProductTypeEnum.SimpleProduct;
  uid = faker.datatype.uuid();
  url_key = faker.random.alphaNumeric(16);
  url_suffix = '.html';
  canonical_url = faker.internet.url();
  name = faker.random.word();
  meta_title = faker.random.word();
  meta_description = faker.random.words(3);
  sku = faker.random.alphaNumeric(16);
  stock_status = MagentoProductStockStatusEnum.InStock;
  image = {
    __typename: 'ProductImage',
    label: faker.random.words(3),
    url: faker.image.imageUrl(),
  };
  thumbnail = {
    __typename: 'ProductImage',
    label: faker.random.words(3),
    url: faker.image.imageUrl(),
  };
  description = {
    __typename: 'ComplexTextValue',
    html: faker.random.words(5),
  };
  price_range = {
    __typename: 'PriceRange',
    maximum_price: {
      __typename: 'ProductPrice',
      regular_price: {
        __typename: 'Money',
        value: faker.datatype.number({ min: 100, max: 1000 }),
        currency: null,
      },
      discount: {
        __typename: 'ProductDiscount',
        amount_off: faker.datatype.number({ min: 1, max: 99 }),
        percent_off: faker.datatype.number({ min: 1, max: 99 }),
      },
    },
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
