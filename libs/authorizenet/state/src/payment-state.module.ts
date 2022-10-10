import { NgModule } from '@angular/core';
import { combineReducers } from '@ngrx/store';

import { DAFF_AUTHORIZENET_PAYMENT_KIND } from '@daffodil/authorizenet';
import { DaffAuthorizeNetPaymentDriver } from '@daffodil/authorizenet/driver';
import {
  daffPaymentProvideAvailableProcessors,
  daffPaymentProvideExtraReducers,
  daffPaymentReducerFactory,
  DaffPaymentStateModule,
} from '@daffodil/payment/state';

import { DaffAuthorizeNetActionTypes } from './actions/authorizenet.actions';

@NgModule({
  imports: [
    DaffPaymentStateModule,
  ],
  providers: [
    daffPaymentProvideAvailableProcessors({
      kind: DAFF_AUTHORIZENET_PAYMENT_KIND,
      action: DaffAuthorizeNetActionTypes.ApplyPaymentAction,
      driver: DaffAuthorizeNetPaymentDriver,
    }),
    ...daffPaymentProvideExtraReducers(combineReducers({
      payment: daffPaymentReducerFactory([DaffAuthorizeNetActionTypes.ApplyPaymentAction]),
    })),
  ],
})
export class DaffAuthorizeNetPaymentStateModule { }
