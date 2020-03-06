import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action, Store, select } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';
import { DaffCart } from '../../models/cart';
import { State } from '../../reducers';
import {
  selectCartLoading,
  selectCartValue,
  selectCartErrors
} from '../../selectors';

@Injectable({
  providedIn: 'root'
})
export class DaffCartFacade implements DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  cart$: Observable<DaffCart>;
  errors$: Observable<string[]>;

  constructor(private store: Store<State>) {
    this.loading$ = this.store.pipe(select(selectCartLoading));
    this.cart$ = this.store.pipe(select(selectCartValue));
    this.errors$ = this.store.pipe(select(selectCartErrors));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
