import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffCompositeCartItem,
  DaffCartItemInputType,
} from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffMockCartItem } from './cart-item.factory';

// TODO: rename to have Mock first
/**
 * @role mock
 */
export class DaffMockCompositeCartItem extends DaffMockCartItem implements DaffCompositeCartItem {
  type = DaffCartItemInputType.Composite;
  options = [
    {
      id: faker.string.uuid(),
      option_label: faker.lorem.word(),
      value_label: faker.lorem.word(),
    },
    {
      id: faker.string.uuid(),
      option_label: faker.lorem.word(),
      value_label: faker.lorem.word(),
    },
  ];
}

@Injectable({
  providedIn: 'root',
})
export class DaffCompositeCartItemFactory extends DaffModelFactory<DaffCompositeCartItem> {

  constructor(){
    super(DaffMockCompositeCartItem);
  }
}
