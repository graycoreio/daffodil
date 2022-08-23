import {
  inject,
  InjectionToken,
} from '@angular/core';
import { StoreConfig } from '@ngrx/store';

// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffProductReview } from '@daffodil/reviews';

import { DaffReviewsReducersState } from '../reducers-state.interface';
import { DAFF_REVIEWS_META_REDUCERS } from './meta.token';

/**
 * An internal token to hold the Daffodil product feature store config.
 *
 * @docs-private
 */
export const DAFF_REVIEWS_STORE_CONFIG = new InjectionToken<StoreConfig<DaffReviewsReducersState>>(
  'DAFF_REVIEWS_STORE_CONFIG',
  {
    factory: () => ({
      metaReducers: inject(DAFF_REVIEWS_META_REDUCERS),
    }),
  },
);
