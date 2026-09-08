import {
  inject,
  NgModule,
} from '@angular/core';
import {
  combineReducers,
  StoreModule,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';

import { DAFF_PAYMENT_AVAILABLE_PROCESSORS } from './injection-tokens/public_api';
import { daffPaymentReducerFactory } from './reducers/payment/reducer';
import { DAFF_PAYMENT_STORE_FEATURE_KEY } from './reducers/public_api';
import { DAFF_PAYMENT_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_PAYMENT_REDUCERS,
  provideDaffPaymentReducersFactory,
} from './reducers/token/reducers.token';

/**
 * Creates the payment feature store.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_PAYMENT_STORE_FEATURE_KEY, DAFF_PAYMENT_REDUCERS),
  ],
  providers: [
    provideDaffPaymentReducersFactory(() => daffComposeReducers([
      combineReducers({
        payment: daffPaymentReducerFactory(inject(DAFF_PAYMENT_AVAILABLE_PROCESSORS).map(({ action }) => action)),
      }),
      ...inject(DAFF_PAYMENT_EXTRA_REDUCERS),
    ])),
  ],
})
export class DaffPaymentStateModule {}
