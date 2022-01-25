import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  MagentoCartItemTypeEnum,
  MagentoBundleCartItem,
} from '@daffodil/cart/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoProductStockStatusEnum } from '@daffodil/product/driver/magento';

import { MockMagentoCartItem } from './cart-item.factory';

export class MockMagentoBundleCartItem extends MockMagentoCartItem implements MagentoBundleCartItem {
  __typename = MagentoCartItemTypeEnum.Bundle;
  bundle_options = [
    {
      id: faker.datatype.uuid(),
      uid: faker.datatype.uuid(),
      type: 'radio',
      label: faker.random.word(),
      price: faker.datatype.number({ min: 1, max: 99 }),
      quantity: 1,
      values: [{
        id: faker.datatype.uuid(),
        uid: faker.datatype.uuid(),
        label: faker.random.word(),
        price: faker.datatype.number({ min: 1, max: 99 }),
        quantity: 1,
      }],
    },
  ];
  product = {
    ...this.createProduct(),
    items: [{
      uid: this.bundle_options[0].uid,
      options: [{
        uid: this.bundle_options[0].values[0].uid,
        product: {
          stock_status: faker.random.arrayElement([MagentoProductStockStatusEnum.InStock, MagentoProductStockStatusEnum.OutOfStock]),
        },
      }],
    }],
  };
}

@Injectable({
  providedIn: 'root',
})
export class MagentoBundleCartItemFactory extends DaffModelFactory<MagentoBundleCartItem> {

  constructor(){
    super(MockMagentoBundleCartItem);
  }
}
