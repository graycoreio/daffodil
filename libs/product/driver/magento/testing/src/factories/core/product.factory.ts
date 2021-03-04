import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoProduct,
  MagentoProductTypeEnum,
  MagentoProductStockStatusEnum,
} from '@daffodil/product/driver/magento';

export class MockMagentoCoreProduct implements MagentoProduct {
	__typename = MagentoProductTypeEnum.SimpleProduct;
  id = faker.random.uuid();
  url_key = faker.random.alphaNumeric(16);
  name = faker.random.word();
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
        value: faker.random.number({ min: 100, max: 1000 }),
        currency: null,
      },
      discount: {
        __typename: 'ProductDiscount',
        amount_off: faker.random.number({ min: 1, max: 99 }),
        percent_off: faker.random.number({ min: 1, max: 99 }),
      },
    },
  };
  short_description = {
    __typename: 'ComplexTextValue',
    html: faker.random.words(3),
  };
	media_gallery_entries = [];
}

@Injectable({
  providedIn: 'root',
})
export class MagentoCoreProductFactory extends DaffModelFactory<MagentoProduct> {

  constructor(){
    super(MockMagentoCoreProduct);
  }
}
