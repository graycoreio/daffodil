import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffCartItemStateEnum,
  DaffStatefulCompositeCartItem,
} from '@daffodil/cart/state';
import { DaffMockCompositeCartItem } from '@daffodil/cart/testing';
import { DaffModelFactory } from '@daffodil/core/testing';

export class DaffMockStatefulCompositeCartItem extends DaffMockCompositeCartItem implements DaffStatefulCompositeCartItem {
	daffState: DaffCartItemStateEnum.Default;
  errors = [];
}

@Injectable({
  providedIn: 'root',
})
export class DaffStatefulCompositeCartItemFactory extends DaffModelFactory<DaffStatefulCompositeCartItem> {

  constructor(){
    super(DaffMockStatefulCompositeCartItem);
  }
}
