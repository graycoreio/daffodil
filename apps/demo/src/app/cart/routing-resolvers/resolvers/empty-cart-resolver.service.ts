import { Injectable } from '@angular/core';
import {
  Resolve,
  Router,
} from '@angular/router';
import {
  ActionsSubject,
  Action,
} from '@ngrx/store';
import {
  Observable,
  of,
} from 'rxjs';
import {
  filter,
  switchMap,
} from 'rxjs/operators';

import { CartResolver } from './cart-resolver.service';
import {
  ResolveCartSuccess,
  CartResolverActionTypes,
} from '../actions/cart-resolver.actions';

@Injectable({
  providedIn: 'root',
})
export class EmptyCartResolver implements Resolve<Observable<Action>> {
  constructor(
    private router: Router,
    private cartResolver: CartResolver,
  ) {}

  resolve(): Observable<Action> {
    return this.cartResolver.resolve().pipe(
      filter(action => action.type === CartResolverActionTypes.ResolveCartSuccessAction),
      switchMap((action: ResolveCartSuccess) => {
        if(action.payload.items.length === 0) {
          this.router.navigateByUrl('/cart');
        }
        return of(action);
      }),
    );
  }
}
