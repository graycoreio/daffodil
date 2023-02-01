import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffCustomerAddressEffects } from './effects/address.effects';
import { DaffCustomerEffects } from './effects/customer.effects';
import { DAFF_CUSTOMER_STORE_FEATURE_KEY } from './reducers/public_api';
import { DAFF_CUSTOMER_REDUCERS } from './reducers/token/reducers.token';

/**
 * Creates the customer feature store.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_CUSTOMER_STORE_FEATURE_KEY, DAFF_CUSTOMER_REDUCERS),
    EffectsModule.forFeature([
      DaffCustomerEffects,
      DaffCustomerAddressEffects,
    ]),
  ],
})
export class DaffCustomerStateModule {}
