import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffModelFactory,
} from '@daffodil/core/testing';
import { MagentoProduct, MagentoProductTypeEnum, MagentoProductStockStatusEnum } from '@daffodil/product';

export class MockMagentoCoreProduct implements MagentoProduct {
	private price = faker.random.number({min: 1, max: 1000});
	private discount = faker.random.number({min: 0, max: this.price - 1});
	private discountedPrice = this.price - this.discount;
	__typename = MagentoProductTypeEnum.SimpleProduct;
  id = faker.random.number({min: 1, max: 1000});
  url_key = faker.random.alphaNumeric(16);
  name = faker.random.word();
	sku = faker.random.alphaNumeric(16);
	stock_status = MagentoProductStockStatusEnum.InStock;
  image = {
    __typename: 'ProductImage',
    label: faker.random.words(3),
    url: faker.image.imageUrl()
  };
  thumbnail = {
    __typename: 'ProductImage',
    label: faker.random.words(3),
    url: faker.image.imageUrl()
  };
  description = {
    __typename: 'ComplexTextValue',
		html: faker.random.words(5)
	}
  price_range = {
    __typename: 'PriceRange',
		maximum_price: {
      __typename: 'ProductPrice',
			regular_price: {
        __typename: 'Money',
				value: this.price,
				currency: null
			},
			final_price: {
				__typename: 'Money',
				value: this.discountedPrice,
				currency: null
			},
			discount: {
				__typename: 'ProductDiscount',
				amount_off: this.discount,
				percent_off: Math.floor((this.discount/this.price) * 100)
			}
		}
  };
  short_description = {
    __typename: 'ComplexTextValue',
		html: faker.random.words(3)
	}
	media_gallery_entries = [];
}

@Injectable({
  providedIn: 'root'
})
export class MagentoCoreProductFactory extends DaffModelFactory<MagentoProduct> {

  constructor(){
    super(MockMagentoCoreProduct);
  }
}
