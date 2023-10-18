import {
  inject,
  InjectionToken,
} from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';
// these unused imports are a workaround
import { DaffCustomer } from '@daffodil/customer';

import { DAFF_CUSTOMER_EXTRA_REDUCERS } from './extra.token';
import { daffCustomerAddressReducer } from '../address/public_api';
import { daffCustomerAddressEntitiesReducer } from '../address-entities/public_api';
import { daffCustomerReducer } from '../customer/reducer';
import { DaffCustomerReducersState } from '../reducers.interface';

/**
 * An internal token to hold the Daffodil customer reducers.
 * Includes the extra and standard reducers.
 *
 * @docs-private
 */
export const DAFF_CUSTOMER_REDUCERS = new InjectionToken<ActionReducer<DaffCustomerReducersState>>(
  'DAFF_CUSTOMER_REDUCERS',
  {
    providedIn: 'any',
    factory: () => daffComposeReducers([
      combineReducers({
        customer: daffCustomerReducer,
        address: daffCustomerAddressReducer,
        addressEntities: daffCustomerAddressEntitiesReducer,
      }),
      ...inject(DAFF_CUSTOMER_EXTRA_REDUCERS),
    ]),
  },
);
