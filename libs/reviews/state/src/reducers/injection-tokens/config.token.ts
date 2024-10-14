import { inject } from '@angular/core';
import { StoreConfig } from '@ngrx/store';

// workaround https://github.com/graycoreio/daffodil/issues/1667
import { createSingleInjectionToken } from '@daffodil/core';
import { DaffProductReview } from '@daffodil/reviews';

import { DAFF_REVIEWS_META_REDUCERS } from './meta.token';
import { DaffReviewsReducersState } from '../reducers-state.interface';

export const {
  /**
   * An internal token to hold the Daffodil product feature store config.
   *
   * @docs-private
   */
  token: DAFF_REVIEWS_STORE_CONFIG,
  provider: daffProvideReviewsStoreConfig,
} = createSingleInjectionToken<StoreConfig<DaffReviewsReducersState>>(
  'DAFF_REVIEWS_STORE_CONFIG',
  {
    factory: () => ({
      metaReducers: inject(DAFF_REVIEWS_META_REDUCERS),
    }),
  },
);
