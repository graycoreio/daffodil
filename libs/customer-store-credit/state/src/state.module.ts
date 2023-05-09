import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffCustomerStoreCreditEffects } from './effects/store-credit.effects';
import { DAFF_CUSTOMER_STORE_CREDIT_STORE_FEATURE_KEY } from './reducers/public_api';
import { DAFF_CUSTOMER_STORE_CREDIT_REDUCERS } from './reducers/token/reducers.token';

/**
 * Creates the customer store credit feature store.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_CUSTOMER_STORE_CREDIT_STORE_FEATURE_KEY, DAFF_CUSTOMER_STORE_CREDIT_REDUCERS),
    EffectsModule.forFeature([
      DaffCustomerStoreCreditEffects,
    ]),
  ],
})
export class DaffCustomerStoreCreditStateModule {}
