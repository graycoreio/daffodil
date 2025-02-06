import { inject } from '@angular/core';
import { StoreConfig } from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';

import { DAFF_REVIEWS_META_REDUCERS } from './meta.token';
import { DaffReviewsReducersState } from '../reducers-state.interface';

export const {
  /**
   * An internal token to hold the Daffodil product feature store config.
   *
   * @docs-private
   */
  token: DAFF_REVIEWS_STORE_CONFIG,
  /**
   * Provider function for {@link DAFF_REVIEWS_STORE_CONFIG}.
   */
  provider: provideDaffReviewsStoreConfig,
} = createSingleInjectionToken<StoreConfig<DaffReviewsReducersState>>(
  'DAFF_REVIEWS_STORE_CONFIG',
  {
    factory: () => ({
      metaReducers: inject(DAFF_REVIEWS_META_REDUCERS),
    }),
  },
);
