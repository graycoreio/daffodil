import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffCustomerPaymentEffects } from './effects/payment.effects';
import { DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY } from './reducers/public_api';
import { DAFF_CUSTOMER_PAYMENT_REDUCERS } from './reducers/token/reducers.token';

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
})
export class DaffCustomerPaymentStateModule {}
