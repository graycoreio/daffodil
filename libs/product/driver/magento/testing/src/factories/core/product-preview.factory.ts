import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoProductPreview,
  MagentoProductTypeEnum,
  MagentoProductStockStatusEnum,
} from '@daffodil/product/driver/magento';

export class MockMagentoProductPreview implements MagentoProductPreview {
  __typename = MagentoProductTypeEnum.SimpleProduct;
  uid = faker.string.uuid();
  url_key = faker.string.alphanumeric(16);
  url_suffix = '.html';
  name = faker.lorem.word();
  sku = faker.string.alphanumeric(16);
  stock_status = MagentoProductStockStatusEnum.InStock;
  image = {
    __typename: 'ProductImage',
    label: faker.lorem.words(3),
    url: faker.image.url(),
  };
  description = {
    __typename: 'ComplexTextValue',
    html: faker.lorem.words(5),
  };
  price_range = {
    __typename: 'PriceRange',
    maximum_price: {
      __typename: 'ProductPrice',
      regular_price: {
        __typename: 'Money',
        value: faker.number.int({ min: 100, max: 1000 }),
        currency: null,
      },
      discount: {
        __typename: 'ProductDiscount',
        amount_off: faker.number.int({ min: 1, max: 99 }),
        percent_off: faker.number.int({ min: 1, max: 99 }),
      },
    },
  };
}

@Injectable({
  providedIn: 'root',
})
export class MagentoProductPreviewFactory extends DaffModelFactory<MagentoProductPreview> {

  constructor(){
    super(MockMagentoProductPreview);
  }
}
