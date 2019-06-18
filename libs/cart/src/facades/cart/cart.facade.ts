import { Injectable } from '@angular/core';

import { DaffCartModule, fromCart, DaffCart } from '@daffodil/cart';
import { Action, Store, select } from '@ngrx/store';
import { DaffStoreFacade } from 'libs/core/src';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: DaffCartModule
})
export class DaffCartFacade implements DaffStoreFacade<Action> {

  loading$: Observable<boolean>;
  cart$: Observable<DaffCart>;
  
  constructor(private store: Store<fromCart.State>) {
    this.store.pipe(select(fromCart.selectCartLoadingState));
    this.cart$ = this.store.pipe(select(fromCart.selectCartValueState));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
