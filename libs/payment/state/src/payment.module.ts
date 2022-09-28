import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { DAFF_PAYMENT_STORE_FEATURE_KEY } from './reducers/public_api';
import { DAFF_PAYMENT_REDUCERS } from './reducers/token/reducers.token';

/**
 * Creates the payment feature store.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_PAYMENT_STORE_FEATURE_KEY, DAFF_PAYMENT_REDUCERS),
  ],
})
export class DaffPaymentStateModule {}
