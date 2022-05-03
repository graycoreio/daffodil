import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Resolve,
  Router,
} from '@angular/router';
import {
  Store,
  ActionsSubject,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  map,
  filter,
  take,
} from 'rxjs/operators';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartStateRootSlice,
  DaffResolveCart,
  DaffCartActionTypes,
  DaffCartActions,
} from '@daffodil/cart/state';

import { DaffCartResolverRedirectUrl } from './tokens/cart-resolver-redirect.token';

/**
 * Resolves the cart before navigation. Redirects to a given url when a failure occurs during Cart Load.
 * This url is `/` by default but can be overridden with the DaffCartResolverRedirectUrl injection token.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCartResolver implements Resolve<Observable<DaffCart>> {
  constructor(
    private store: Store<DaffCartStateRootSlice>,
    private dispatcher: ActionsSubject,
    private router: Router,
    @Inject(DaffCartResolverRedirectUrl) private redirectUrl: string,
  ) {}

  resolve(): Observable<DaffCart> {
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
          return action.payload;
        }

        this.router.navigateByUrl(this.redirectUrl);
        return null;
      }),
      take(1),
    );
  }
}
