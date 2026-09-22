import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { combineReducers } from '@ngrx/store';

import { daffAuthorizeNetProvideExtraReducers } from '@daffodil/authorizenet/state';
import { DAFF_CUSTOMER_PAYMENT_AUTHORIZENET_PAYMENT_KIND } from '@daffodil/customer-payment-authorizenet';
import { DaffCustomerPaymentAuthorizeNetPaymentDriver } from '@daffodil/customer-payment-authorizenet/driver';
import {
  daffPaymentProvideAvailableProcessors,
  daffPaymentProvideExtraReducers,
  daffPaymentReducerFactory,
  provideDaffPaymentState,
} from '@daffodil/payment/state';

import { DaffCustomerPaymentAuthorizeNetActionTypes } from './actions/payment.actions';
import { daffCustomerPaymentAuthorizenetReducer } from './reducers/authorizenet.reducer';

/**
 * Registers customer Authorize.Net payments as an available payment processor with `@daffodil/payment/state`.
 * Includes {@link provideDaffPaymentState}.
 */
export const provideDaffCustomerPaymentAuthorizeNetPaymentState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffPaymentState(),
  daffPaymentProvideAvailableProcessors({
    kind: DAFF_CUSTOMER_PAYMENT_AUTHORIZENET_PAYMENT_KIND,
    action: DaffCustomerPaymentAuthorizeNetActionTypes.ApplyPaymentAction,
    driver: DaffCustomerPaymentAuthorizeNetPaymentDriver,
  }),
  ...daffPaymentProvideExtraReducers(combineReducers({
    payment: daffPaymentReducerFactory([DaffCustomerPaymentAuthorizeNetActionTypes.ApplyPaymentAction]),
  })),
  ...daffAuthorizeNetProvideExtraReducers(combineReducers({
    authorizeNet: daffCustomerPaymentAuthorizenetReducer,
  })),
]);
