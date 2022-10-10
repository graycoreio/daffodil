import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import { DaffPaypalExpressTokenResponse } from '@daffodil/paypal';

import { DaffPaypalFacadeInterface } from '../interfaces/paypal-facade.interface';
import { DaffPaypalStateRootSlice } from '../reducers/paypal-reducers.interface';
import { getDaffPaypalSelectors } from '../selectors/paypal.selector';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffPaypalFacade implements DaffPaypalFacadeInterface {
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
  error$: Observable<DaffStateError>;

  constructor(private store: Store<DaffPaypalStateRootSlice>) {
    const {
      selectPaypalStartUrl,
      selectPaypalEditUrl,
      selectPaypalLoading,
      selectPaypalError,
    } = getDaffPaypalSelectors();

    this.paypalStartUrl$ = this.store.pipe(select(selectPaypalStartUrl));
    this.paypalEditUrl$ = this.store.pipe(select(selectPaypalEditUrl));
    this.loading$ = this.store.pipe(select(selectPaypalLoading));
    this.error$ = this.store.pipe(select(selectPaypalError));
  }

  /**
   * Dispatches the given action.
   *
   * @param action action to dispatch.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
