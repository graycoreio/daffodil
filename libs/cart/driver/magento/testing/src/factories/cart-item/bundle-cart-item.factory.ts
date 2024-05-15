import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  MagentoCartItemTypeEnum,
  MagentoBundleCartItem,
} from '@daffodil/cart/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';

import { MockMagentoCartItem } from './cart-item.factory';

export class MockMagentoBundleCartItem extends MockMagentoCartItem implements MagentoBundleCartItem {
  __typename = MagentoCartItemTypeEnum.Bundle;
  bundle_options = [
    {
      id: faker.helpers.unique(faker.datatype.number),
      type: 'radio',
      label: faker.random.word(),
      price: faker.datatype.number({ min: 1, max: 99 }),
      quantity: 1,
      values: [{
        id: faker.helpers.unique(faker.datatype.number),
        label: faker.random.word(),
        price: faker.datatype.number({ min: 1, max: 99 }),
        quantity: 1,
      }],
    },
  ];
}

@Injectable({
  providedIn: 'root',
})
export class MagentoBundleCartItemFactory extends DaffModelFactory<MagentoBundleCartItem> {

  constructor(){
    super(MockMagentoBundleCartItem);
  }
}
