import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Store,
  ActionsSubject,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  map,
  filter,
  take,
} from 'rxjs/operators';

import { DaffCartStateRootSlice } from '@daffodil/cart/state';

import {
  ResolveCart,
  ResolveCartSuccess,
  ResolveCartFailure,
  CartResolverActionTypes,
} from '../actions/cart-resolver.actions';

@Injectable({
  providedIn: 'root',
})
export class CartResolver  {
  constructor(
    private store: Store<DaffCartStateRootSlice>,
    private dispatcher: ActionsSubject,
    private router: Router,
  ) {}

  resolve(): Observable<Action> {
    this.store.dispatch(new ResolveCart());

    return this.dispatcher.pipe(
      filter(action => action.type === CartResolverActionTypes.ResolveCartSuccessAction
        || action.type === CartResolverActionTypes.ResolveCartFailureAction),
      map((action: ResolveCartSuccess | ResolveCartFailure) => {
        if(!action.payload) {
          this.router.navigateByUrl('/cart');
          return new ResolveCartFailure(null);
        }
        return action;
      }),
      take(1),
    );
  }
}
