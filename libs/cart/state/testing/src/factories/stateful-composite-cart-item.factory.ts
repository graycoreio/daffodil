import { Injectable } from '@angular/core';

import {
  DaffCartItemStateEnum,
  DaffStatefulCompositeCartItem,
} from '@daffodil/cart/state';
import { DaffMockCompositeCartItem } from '@daffodil/cart/testing';
import { DaffModelFactory } from '@daffodil/core/testing';

export class DaffMockStatefulCompositeCartItem extends DaffMockCompositeCartItem implements DaffStatefulCompositeCartItem {
	daffState: DaffCartItemStateEnum.Default;
}

@Injectable({
  providedIn: 'root',
})
export class DaffStatefulCompositeCartItemFactory extends DaffModelFactory<DaffStatefulCompositeCartItem> {

  constructor(){
    super(DaffMockStatefulCompositeCartItem);
  }
}
