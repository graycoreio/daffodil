import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import {
  DaffStatefulCartItem,
  DaffCartItemStateEnum,
} from '@daffodil/cart/state';
import { DaffMockCartItem } from '@daffodil/cart/testing';
import { DaffModelFactory } from '@daffodil/core/testing';

export class DaffMockStatefulCartItem extends DaffMockCartItem implements DaffStatefulCartItem {
  daffState = DaffCartItemStateEnum.Default;
  errors = [];
}

@Injectable({
  providedIn: 'root',
})
export class DaffStatefulCartItemFactory extends DaffModelFactory<DaffStatefulCartItem> {

  constructor(){
    super(DaffMockStatefulCartItem);
  }
}
