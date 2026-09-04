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

import { DaffCustomerAddressEffects } from './effects/address.effects';
import { DaffCustomerEffects } from './effects/customer.effects';
import { daffCustomerAddressReducer } from './reducers/address/public_api';
import { daffCustomerAddressEntitiesReducer } from './reducers/address-entities/public_api';
import { daffCustomerReducer } from './reducers/customer/reducer';
import { DAFF_CUSTOMER_STORE_FEATURE_KEY } from './reducers/public_api';
import { DAFF_CUSTOMER_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_CUSTOMER_REDUCERS,
  provideDaffCustomerReducersFactory,
} from './reducers/token/reducers.token';

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
  providers: [
    provideDaffCustomerReducersFactory(() => daffComposeReducers([
      combineReducers({
        customer: daffCustomerReducer,
        address: daffCustomerAddressReducer,
        addressEntities: daffCustomerAddressEntitiesReducer,
      }),
      ...inject(DAFF_CUSTOMER_EXTRA_REDUCERS),
    ])),
  ],
})
export class DaffCustomerStateModule {}
