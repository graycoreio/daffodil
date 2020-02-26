import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { MagentoProduct, MagentoMoney } from '@daffodil/cart';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoMoneyFactory } from './money.factory';

export class MockMagentoProduct implements MagentoProduct {
  id = faker.random.number(1000);
  image = {
    label: faker.random.words(3),
    url: faker.image.imageUrl()
  };
  manufacturer = faker.random.number(1000);
  name = faker.random.word();
  description = faker.random.words(5);
  price_range = {
    maximum_price: this.money(),
    minumum_price: this.money()
  };
  sku = faker.random.alphaNumeric(16);

  private money(): MagentoMoney {
    return (new MagentoMoneyFactory()).create()
  }
}

@Injectable({
  providedIn: 'root'
})
export class MagentoProductFactory extends DaffModelFactory<MagentoProduct> {

  constructor(){
    super(MockMagentoProduct);
  }
}
