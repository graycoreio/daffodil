import { inject } from '@angular/core';
import { StoreConfig } from '@ngrx/store';

// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffCart } from '@daffodil/cart';
import { createSingleInjectionToken } from '@daffodil/core';

import { DAFF_CART_META_REDUCERS } from './meta.token';
import { daffCartSetItemStateMetaReducer } from '../cart-item-entities/set-state-meta-reducer';
import { DaffCartReducersState } from '../cart-reducers-state.interface';

/**
 * An internal token to hold the Daffodil cart feature store config.
 *
 * @docs-private
 */
export const {
  token: DAFF_CART_STORE_CONFIG,
  provider: provideDaffCartStoreConfig,
} = createSingleInjectionToken<StoreConfig<DaffCartReducersState>>(
  'DAFF_CART_STORE_CONFIG',
  {
    providedIn: 'any',
    factory: () => ({
      metaReducers: [
        daffCartSetItemStateMetaReducer,
        ...inject(DAFF_CART_META_REDUCERS),
      ],
    }),
  },
);
