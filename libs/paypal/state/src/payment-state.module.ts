import { NgModule } from '@angular/core';
import { combineReducers } from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';
import {
  DaffPaymentActions,
  daffPaymentProvideAvailableProcessors,
  daffPaymentProvideExtraReducers,
  daffPaymentReducerFactory,
  DaffPaymentReducerState,
  DaffPaymentStateModule,
} from '@daffodil/payment/state';
import { DAFF_PAYPAL_PAYMENT_KIND } from '@daffodil/paypal';
import { DaffPaypalExpressPaymentDriver } from '@daffodil/paypal/driver';

import {
  DaffPaypalActions,
  DaffPaypalActionTypes,
} from './actions/paypal.actions';
import { daffPaypalPaymentReducer } from './reducers/payment/reducer';

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
      payment: daffComposeReducers<DaffPaymentReducerState, DaffPaypalActions | DaffPaymentActions>([daffPaymentReducerFactory([DaffPaypalActionTypes.ApplyPaymentAction]), daffPaypalPaymentReducer]),
    })),
  ],
})
export class DaffPaypalPaymentStateModule {}
