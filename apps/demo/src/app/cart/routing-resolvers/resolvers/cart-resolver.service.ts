import { Injectable } from '@angular/core';
import { Store, ActionsSubject, Action } from '@ngrx/store';
import { Resolve, Router } from '@angular/router';
import { map, filter, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { fromCart } from '@daffodil/cart';

import { ResolveCart, ResolveCartSuccess, ResolveCartFailure, CartResolverActionTypes } from '../actions/cart-resolver.actions';

@Injectable({
  providedIn: 'root'
})
export class CartResolver implements Resolve<Observable<Action>> {
  constructor(
    private store: Store<fromCart.State>,
    private dispatcher: ActionsSubject,
    private router: Router
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
      take(1)
    );
  }
}
