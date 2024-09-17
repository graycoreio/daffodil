import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffConfigurableCartItem,
  DaffCartItemInputType,
} from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffMockCartItem } from './cart-item.factory';

export class DaffMockConfigurableCartItem extends DaffMockCartItem implements DaffConfigurableCartItem {
  type = DaffCartItemInputType.Configurable;
  attributes = [
    {
      attribute_label: 'Color',
      value_label: 'Red',
    },
    {
      attribute_label: 'Size',
      value_label: 'M',
    },
  ];
}

@Injectable({
  providedIn: 'root',
})
export class DaffConfigurableCartItemFactory extends DaffModelFactory<DaffConfigurableCartItem> {

  constructor(){
    super(DaffMockConfigurableCartItem);
  }
}
