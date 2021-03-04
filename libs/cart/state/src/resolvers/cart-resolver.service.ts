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
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  map,
  filter,
  take,
} from 'rxjs/operators';

import {
  DaffResolveCart,
  DaffCartActionTypes,
} from '../actions/public_api';
import { DaffCartReducersState } from '../reducers/public_api';
import { DaffCartResolverRedirectUrl } from './tokens/cart-resolver-redirect.token';

/**
 * Resolves the cart before navigation. Redirects to a given url when a failure occurs during Cart Load.
 * This url is `/` by default but can be overridden with the DaffCartResolverRedirectUrl injection token.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCartResolver implements Resolve<Observable<Action>> {
  constructor(
    private store: Store<DaffCartReducersState>,
    private dispatcher: ActionsSubject,
		private router: Router,
		@Inject(DaffCartResolverRedirectUrl) private redirectUrl: string,
  ) {}

  resolve(): Observable<Action> {
    this.store.dispatch(new DaffResolveCart());

    return this.dispatcher.pipe(
      filter(action => action.type === DaffCartActionTypes.CartLoadSuccessAction
        || action.type === DaffCartActionTypes.CartLoadFailureAction
				|| action.type === DaffCartActionTypes.CartCreateFailureAction
				|| action.type === DaffCartActionTypes.CartStorageFailureAction),
      map((action) => {
        if(action.type !== DaffCartActionTypes.CartLoadSuccessAction) {
          this.router.navigateByUrl(this.redirectUrl);
        }
        return action;
      }),
      take(1),
    );
  }
}
