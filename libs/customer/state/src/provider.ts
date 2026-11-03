import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import {
  combineReducers,
  provideState,
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
 * Provides the `@daffodil/customer/state` feature state and effects.
 */
export const provideDaffCustomerState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_CUSTOMER_STORE_FEATURE_KEY, DAFF_CUSTOMER_REDUCERS),
  provideEffects(
    DaffCustomerEffects,
    DaffCustomerAddressEffects,
  ),
  provideDaffCustomerReducersFactory(() => daffComposeReducers([
    combineReducers({
      customer: daffCustomerReducer,
      address: daffCustomerAddressReducer,
      addressEntities: daffCustomerAddressEntitiesReducer,
    }),
    ...inject(DAFF_CUSTOMER_EXTRA_REDUCERS),
  ])),
]);
