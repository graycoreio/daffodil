import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffCompositeCartItem,
  DaffCartItemInputType,
} from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffMockCartItem } from './cart-item.factory';

export class DaffMockCompositeCartItem extends DaffMockCartItem implements DaffCompositeCartItem {
  private optionId1 = faker.datatype.number(1000).toString();
  private optionId2 = faker.datatype.number(1000).toString();
  type = DaffCartItemInputType.Composite;
  options = [
    {
      id: this.optionId1,
      option_id: this.optionId1,
      option_label: faker.random.word(),
      value_label: faker.random.word(),
    },
    {
      id: this.optionId2,
      option_id: this.optionId2,
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
