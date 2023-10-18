import {
  inject,
  InjectionToken,
} from '@angular/core';
import { StoreConfig } from '@ngrx/store';

// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffProduct } from '@daffodil/product';

import { DAFF_PRODUCT_META_REDUCERS } from './meta.token';
import { DaffProductReducersState } from '../product-reducers-state.interface';

/**
 * An internal token to hold the Daffodil product feature store config.
 *
 * @docs-private
 */
export const DAFF_PRODUCT_STORE_CONFIG = new InjectionToken<StoreConfig<DaffProductReducersState>>(
  'DAFF_PRODUCT_STORE_CONFIG',
  {
    providedIn: 'any',
    factory: () => ({
      metaReducers: inject(DAFF_PRODUCT_META_REDUCERS),
    }),
  },
);
