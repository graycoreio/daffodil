import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import {
  ActionsSubject,
  Store,
} from '@ngrx/store';
import {
  Observable,
  of,
} from 'rxjs';
import {
  tap,
  filter,
  take,
  map,
} from 'rxjs/operators';

import { DaffCartStorageService } from '@daffodil/cart';
import {
  DaffCartActionTypes,
  DaffCartActions,
  DaffCartFacade,
  DaffCartResolveState,
  DaffCartStateRootSlice,
  DaffResolveCart,
} from '@daffodil/cart/state';

import {
  DaffCartRoutingConfiguration,
  DAFF_CART_ROUTING_CONFIG,
} from '../../config/config';
import { DaffResolveCartGuardRedirectUrl } from './redirect.token';

/**
 * A routing guard that will optionally redirect to a given url if the cart is not properly resolved.
 * It will initiate cart resolution.
 * The url has no default and the guard will not redirect if no value is specified.
 * Specify a redirect path with the {@link DaffResolvedCartGuardRedirectUrl} injection token.
 * The guard will wait until the cart has been resolved before performing the check and emitting.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffResolveCartGuard implements CanActivate {
  constructor(
    private store: Store<DaffCartStateRootSlice>,
    private dispatcher: ActionsSubject,
    private router: Router,
    @Inject(DaffResolveCartGuardRedirectUrl) private redirectUrl: string,
    private storage: DaffCartStorageService,
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    if (this.storage.getCartId()) {
      this.store.dispatch(new DaffResolveCart());

      return this.dispatcher.pipe(
        filter<DaffCartActions>(action =>
          action.type === DaffCartActionTypes.ResolveCartServerSideAction
            || action.type === DaffCartActionTypes.ResolveCartFailureAction
            || action.type === DaffCartActionTypes.ResolveCartSuccessAction
            || action.type === DaffCartActionTypes.ResolveCartPartialSuccessAction,
        ),
        map((action) => {
          if (
            action.type === DaffCartActionTypes.ResolveCartSuccessAction
            || action.type === DaffCartActionTypes.ResolveCartPartialSuccessAction
          ) {
            return true;
          }

          return this.router.parseUrl(this.redirectUrl);
        }),
        take(1),
      );
    } else {
      return of(this.router.parseUrl(this.redirectUrl));
    }
  }
}
