import {
  inject,
  InjectionToken,
} from '@angular/core';
import { StoreConfig } from '@ngrx/store';

// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffCart } from '@daffodil/cart';

import { DAFF_CART_META_REDUCERS } from './meta.token';
import { DaffCartReducersState } from '../cart-reducers-state.interface';

/**
 * An internal token to hold the Daffodil cart feature store config.
 *
 * @docs-private
 */
export const DAFF_CART_STORE_CONFIG = new InjectionToken<StoreConfig<DaffCartReducersState>>(
  'DAFF_CART_STORE_CONFIG',
  {
    providedIn: 'any',
    factory: () => ({
      metaReducers: inject(DAFF_CART_META_REDUCERS),
    }),
  },
);
