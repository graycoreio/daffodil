import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffMockCartItem } from '@daffodil/cart/testing';
import { DaffStatefulCartItem, DaffCartItemStateEnum } from '@daffodil/cart/state';

export class DaffMockStatefulCartItem extends DaffMockCartItem implements DaffStatefulCartItem {
	daffState = DaffCartItemStateEnum.Default;
}

@Injectable({
  providedIn: 'root'
})
export class DaffStatefulCartItemFactory extends DaffModelFactory<DaffStatefulCartItem> {

  constructor(){
    super(DaffMockStatefulCartItem);
  }
}
