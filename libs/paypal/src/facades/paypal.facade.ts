import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';

import { DaffPaypalModule } from '../paypal.module';
import { DaffPaypalReducersState } from '../reducers/paypal-reducers.interface';
import { DaffPaypalFacadeInterface } from '../interfaces/paypal-facade.interface';
import { DaffPaypalTokenResponse } from '../models/paypal-token-response';
import { 
	selectPaypalTokenResponse,
	selectPaypalToken,
	selectPaypalStartUrl,
	selectPaypalLoading,
	selectPaypalError,
	selectPaypalEditUrl
} from '../selectors/paypal.selector';

@Injectable({
  providedIn: DaffPaypalModule
})
export class DaffPaypalFacade<T extends DaffPaypalTokenResponse> implements DaffPaypalFacadeInterface<T> {
  /**
   * The entire DaffPaypalTokenResponse object.
   */
	paypalTokenResponse$: Observable<T>;
	/**
	 * The paypal token nonce.
	 */
	paypalToken$: Observable<string>;
	/**
	 * A URL for the PayPal login page.
	 */
	paypalStartUrl$: Observable<string>;
	/**
	 * A PayPal URL that allows a customer to edit their checkout details.
	 */
	paypalEditUrl$: Observable<string>;
  /**
   * The loading state for retrieving a single paypal.
   */
  loading$: Observable<boolean>;
  /**
   * Errors associated with retrieving a single paypal.
   */
  error$: Observable<string>;

  constructor(private store: Store<DaffPaypalReducersState<T>>) {
    this.paypalTokenResponse$ = this.store.pipe(select(selectPaypalTokenResponse()));
    this.paypalToken$ = this.store.pipe(select(selectPaypalToken()));
    this.paypalStartUrl$ = this.store.pipe(select(selectPaypalStartUrl()));
    this.paypalEditUrl$ = this.store.pipe(select(selectPaypalEditUrl()));
    this.loading$ = this.store.pipe(select(selectPaypalLoading()));
    this.error$ = this.store.pipe(select(selectPaypalError()));
  }

  /**
   * Dispatches the given action.
   * @param action action to dispatch.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
