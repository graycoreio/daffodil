import { NgModule } from '@angular/core';
import { combineReducers } from '@ngrx/store';

import { daffAuthorizeNetProvideExtraReducers } from '@daffodil/authorizenet/state';
import { DAFF_CUSTOMER_PAYMENT_AUTHORIZENET_PAYMENT_KIND } from '@daffodil/customer-payment-authorizenet';
import { DaffCustomerPaymentAuthorizeNetPaymentDriver } from '@daffodil/customer-payment-authorizenet/driver';
import {
  daffPaymentProvideAvailableProcessors,
  daffPaymentProvideExtraReducers,
  daffPaymentReducerFactory,
  DaffPaymentStateModule,
} from '@daffodil/payment/state';

import { DaffCustomerPaymentAuthorizeNetActionTypes } from './actions/payment.actions';
import { daffCustomerPaymentAuthorizenetReducer } from './reducers/authorizenet.reducer';

@NgModule({
  imports: [
    DaffPaymentStateModule,
  ],
  providers: [
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
  ],
})
export class DaffCustomerPaymentAuthorizeNetPaymentStateModule { }
