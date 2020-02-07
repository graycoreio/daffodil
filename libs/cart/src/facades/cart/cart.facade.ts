import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action, Store, select } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';
import { DaffCart } from '../../models/cart';
import * as fromCart from '../../reducers';

@Injectable({
  providedIn: 'root'
})
export class DaffCartFacade implements DaffStoreFacade<Action> {

  loading$: Observable<boolean>;
  cart$: Observable<DaffCart>;
  
  constructor(private store: Store<fromCart.State>) {
    this.loading$ = this.store.pipe(select(fromCart.selectCartLoadingState));
    this.cart$ = this.store.pipe(select(fromCart.selectCartValueState));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
