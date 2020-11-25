import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffMockCompositeCartItem } from '@daffodil/cart/testing';
import { DaffCartItemStateEnum, DaffStatefulCompositeCartItem } from '@daffodil/cart/state';

export class DaffMockStatefulCompositeCartItem extends DaffMockCompositeCartItem implements DaffStatefulCompositeCartItem {
	daffState: DaffCartItemStateEnum.Default;
}

@Injectable({
  providedIn: 'root'
})
export class DaffStatefulCompositeCartItemFactory extends DaffModelFactory<DaffStatefulCompositeCartItem> {

  constructor(){
    super(DaffMockStatefulCompositeCartItem);
  }
}
