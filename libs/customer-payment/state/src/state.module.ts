import {
  inject,
  NgModule,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {
  combineReducers,
  StoreModule,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';

import { DaffCustomerPaymentEffects } from './effects/payment.effects';
import { daffCustomerPaymentReducer } from './reducers/payment/public_api';
import { daffCustomerPaymentEntitiesReducer } from './reducers/payment-entities/public_api';
import { DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY } from './reducers/public_api';
import { DAFF_CUSTOMER_PAYMENT_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_CUSTOMER_PAYMENT_REDUCERS,
  provideDaffCustomerPaymentReducersFactory,
} from './reducers/token/reducers.token';

/**
 * Creates the customer feature store.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY, DAFF_CUSTOMER_PAYMENT_REDUCERS),
    EffectsModule.forFeature([
      DaffCustomerPaymentEffects,
    ]),
  ],
  providers: [
    provideDaffCustomerPaymentReducersFactory(() => daffComposeReducers([
      combineReducers({
        payment: daffCustomerPaymentReducer,
        paymentEntities: daffCustomerPaymentEntitiesReducer,
      }),
      ...inject(DAFF_CUSTOMER_PAYMENT_EXTRA_REDUCERS),
    ])),
  ],
})
export class DaffCustomerPaymentStateModule {}
