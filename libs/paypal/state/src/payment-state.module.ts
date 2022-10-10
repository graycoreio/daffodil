import { NgModule } from '@angular/core';
import { combineReducers } from '@ngrx/store';

import {
  daffPaymentProvideAvailableProcessors,
  daffPaymentProvideExtraReducers,
  daffPaymentReducerFactory,
  DaffPaymentStateModule,
} from '@daffodil/payment/state';
import { DAFF_PAYPAL_PAYMENT_KIND } from '@daffodil/paypal';
import { DaffPaypalExpressPaymentDriver } from '@daffodil/paypal/driver';

import { DaffPaypalActionTypes } from './actions/paypal.actions';

@NgModule({
  imports: [
    DaffPaymentStateModule,
  ],
  providers: [
    ...daffPaymentProvideAvailableProcessors({
      kind: DAFF_PAYPAL_PAYMENT_KIND,
      driver: DaffPaypalExpressPaymentDriver,
      action: DaffPaypalActionTypes.ApplyPaymentAction,
    }),
    ...daffPaymentProvideExtraReducers(combineReducers({
      payment: daffPaymentReducerFactory([DaffPaypalActionTypes.ApplyPaymentAction]),
    })),
  ],
})
export class DaffPaypalPaymentStateModule {}
