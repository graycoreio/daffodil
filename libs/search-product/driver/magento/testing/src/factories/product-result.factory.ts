import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoProductTypeEnum } from '@daffodil/product/driver/magento';
import { MagentoSearchProductResult } from '@daffodil/search-product/driver/magento';

export class MockMagentoSearchProductResult implements MagentoSearchProductResult {
  __typename = MagentoProductTypeEnum.SimpleProduct;
  url_key = faker.random.alphaNumeric(16);
  url_suffix = '.html';
  name = faker.random.word();
	sku = faker.random.alphaNumeric(16);
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
}

/**
 * A factory for creating stub data for {@link MagentoSearchProductResult}s.
 */
@Injectable({
  providedIn: 'root',
})
export class MagentoSearchProductResultFactory extends DaffModelFactory<MagentoSearchProductResult> {

  constructor(){
    super(MockMagentoSearchProductResult);
  }
}
