import { inject } from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';
import { daffComposeReducers } from '@daffodil/core/state';
// these unused imports are a workaround
import { DaffCustomer } from '@daffodil/customer';

import { DAFF_CUSTOMER_EXTRA_REDUCERS } from './extra.token';
import { daffCustomerAddressReducer } from '../address/public_api';
import { daffCustomerAddressEntitiesReducer } from '../address-entities/public_api';
import { daffCustomerReducer } from '../customer/reducer';
import { DaffCustomerReducersState } from '../reducers.interface';

export const {
  /**
   * An internal token to hold the Daffodil customer reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_CUSTOMER_REDUCERS,
  /**
   * Provider function for {@link DAFF_CUSTOMER_REDUCERS}.
   */
  provider: provideDaffCustomerReducers,
} = createSingleInjectionToken<ActionReducer<DaffCustomerReducersState>>(
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
