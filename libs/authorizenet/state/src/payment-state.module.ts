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

/**
 * @deprecated in favor of {@link provideDaffAuthorizeNetPaymentState} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
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
