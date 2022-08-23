import {
  EntityAdapter,
  createEntityAdapter,
} from '@ngrx/entity';

import { DaffProductReview } from '@daffodil/reviews';

/**
 * Product reviews Adapter for changing/overwriting entity state.
 */
export const daffProductReviewEntitiesAdapter = (() => {
  let cache;
  return <T extends DaffProductReview = DaffProductReview>(): EntityAdapter<T> =>
    cache = cache || createEntityAdapter<T>();
})();
