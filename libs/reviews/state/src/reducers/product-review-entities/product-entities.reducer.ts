import { EntityState } from '@ngrx/entity';

import { DaffProductReview } from '@daffodil/reviews';

import {
  DaffReviewsProductActions,
  DaffReviewsProductActionTypes,
} from '../../actions/public_api';
import { daffProductReviewEntitiesAdapter } from './product-entities-reducer-adapter';

/**
 * Adds product review entities into state on list success.
 */
export function daffReviewsProductEntitiesReducer<T extends DaffProductReview = DaffProductReview>(
  state = daffProductReviewEntitiesAdapter<T>().getInitialState(),
  action: DaffReviewsProductActions<T>): EntityState<T> {
  const adapter = daffProductReviewEntitiesAdapter<T>();
  switch (action.type) {
    case DaffReviewsProductActionTypes.ListSuccessAction:
      return adapter.upsertMany(
        Object.values(action.payload.data),
        state,
      );
    default:
      return state;
  }
}
