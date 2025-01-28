import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffCompositeCartItem,
  DaffCartItemInputType,
} from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffMockCartItem } from './cart-item.factory';

export class DaffMockCompositeCartItem extends DaffMockCartItem implements DaffCompositeCartItem {
  type = DaffCartItemInputType.Composite;
  options = [
    {
      id: faker.datatype.uuid(),
      option_label: faker.random.word(),
      value_label: faker.random.word(),
    },
    {
      id: faker.datatype.uuid(),
      option_label: faker.random.word(),
      value_label: faker.random.word(),
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
