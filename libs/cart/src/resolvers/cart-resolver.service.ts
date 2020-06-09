import { Injectable, Inject } from '@angular/core';
import { Store, ActionsSubject, Action } from '@ngrx/store';
import { Resolve, Router } from '@angular/router';
import { map, filter, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { 
	DaffResolveCart, 
	DaffCartActionTypes
} from '../actions/public_api';
import { DaffCartResolverRedirectUrl } from './tokens/cart-resolver-redirect.token';
import { DaffCartReducersState } from '../reducers/public_api';

/**
 * Resolves the cart before navigation. Redirects to the url provided by the DaffCartResolverRedirectUrl token when a 
 * failure occurs during Cart Load.
 */
@Injectable({
	providedIn: 'root'
})
export class DaffCartResolver implements Resolve<Observable<Action>> {
  constructor(
    private store: Store<DaffCartReducersState>,
    private dispatcher: ActionsSubject,
		private router: Router,
		@Inject(DaffCartResolverRedirectUrl) private redirectUrl: string
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
      take(1)
    );
  }
}
