import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffModelFactory,
} from '@daffodil/core/testing';
import { MagentoProduct, MagentoProductTypeEnum } from '@daffodil/product';

export class MockMagentoProduct implements MagentoProduct {
	__typename = MagentoProductTypeEnum.SimpleProduct;
  id = faker.random.number(1000);
  image = {
    label: faker.random.words(3),
    url: faker.image.imageUrl()
  };
  name = faker.random.word();
  description = {
		html: faker.random.words(5)
	}
  sku = faker.random.alphaNumeric(16);
  url_key = faker.random.alphaNumeric(16);
  price = {
    regularPrice: {
			amount: {
				value: faker.random.number(1000),
				currency: null
			}
		}
  };
  short_description = {
		html: faker.random.words(3)
	}
  media_gallery_entries = null;
}

@Injectable({
  providedIn: 'root'
})
export class MagentoProductFactory extends DaffModelFactory<MagentoProduct> {

  constructor(){
    super(MockMagentoProduct);
  }
}
