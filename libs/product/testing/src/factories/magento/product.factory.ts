import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { MagentoProductTypeEnum } from '@daffodil/product';

import {
  DaffModelFactory,
} from '@daffodil/core/testing';
import { MagentoProduct } from '@daffodil/product';

export class MockMagentoProduct implements MagentoProduct {
	id = faker.random.number(1000);
	__typename = MagentoProductTypeEnum.SimpleProduct;
  image = {
    label: faker.random.words(3),
    url: faker.image.imageUrl()
  };
  name = faker.random.word();
  description = faker.random.words(5);
  sku = faker.random.alphaNumeric(16);
  url_key = faker.random.alphaNumeric(16);
  price = {
    regularPrice: faker.random.number(1000)
  };
  short_description = faker.random.words(3);
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
