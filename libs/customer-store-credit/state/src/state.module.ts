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

import { DaffCustomerStoreCreditEffects } from './effects/store-credit.effects';
import { DAFF_CUSTOMER_STORE_CREDIT_STORE_FEATURE_KEY } from './reducers/public_api';
import { daffCustomerStoreCreditReducer } from './reducers/store-credit/public_api';
import { DAFF_CUSTOMER_STORE_CREDIT_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_CUSTOMER_STORE_CREDIT_REDUCERS,
  provideDaffCustomerStoreCreditReducersFactory,
} from './reducers/token/reducers.token';

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
  providers: [
    provideDaffCustomerStoreCreditReducersFactory(() => daffComposeReducers([
      combineReducers({
        storeCredit: daffCustomerStoreCreditReducer,
      }),
      ...inject(DAFF_CUSTOMER_STORE_CREDIT_EXTRA_REDUCERS),
    ])),
  ],
})
export class DaffCustomerStoreCreditStateModule {}
