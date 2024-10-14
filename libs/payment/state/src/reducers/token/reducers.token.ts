import { inject } from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';
import { daffComposeReducers } from '@daffodil/core/state';
// these unused imports are a workaround
import { DaffPaymentResponse } from '@daffodil/payment';

import { DAFF_PAYMENT_EXTRA_REDUCERS } from './extra.token';
import { DAFF_PAYMENT_AVAILABLE_PROCESSORS } from '../../injection-tokens/public_api';
import { daffPaymentReducerFactory } from '../payment/reducer';
import { DaffPaymentReducersState } from '../reducers.interface';

export const {
  /**
   * An internal token to hold the Daffodil payment reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_PAYMENT_REDUCERS,
  provider: daffProvidePaymentReducers,
} = createSingleInjectionToken<ActionReducer<DaffPaymentReducersState>>(
  'DAFF_PAYMENT_REDUCERS',
  {
    providedIn: 'any',
    factory: () => daffComposeReducers([
      combineReducers({
        payment: daffPaymentReducerFactory(inject(DAFF_PAYMENT_AVAILABLE_PROCESSORS).map(({ action }) => action)),
      }),
      ...inject(DAFF_PAYMENT_EXTRA_REDUCERS),
    ]),
  },
);
