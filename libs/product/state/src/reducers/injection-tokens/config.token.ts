import { inject } from '@angular/core';
import { StoreConfig } from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';

import { DAFF_PRODUCT_META_REDUCERS } from './meta.token';
import { DaffProductReducersState } from '../product-reducers-state.interface';

export const {
  /**
   * An internal token to hold the Daffodil product feature store config.
   *
   * @docs-private
   */
  token: DAFF_PRODUCT_STORE_CONFIG,
  /**
   * Provider function for {@link DAFF_PRODUCT_STORE_CONFIG}.
   */
  provider: provideDaffProductStoreConfig,
} = createSingleInjectionToken<StoreConfig<DaffProductReducersState>>(
  'DAFF_PRODUCT_STORE_CONFIG',
  {
    providedIn: 'any',
    factory: () => ({
      metaReducers: inject(DAFF_PRODUCT_META_REDUCERS),
    }),
  },
);
