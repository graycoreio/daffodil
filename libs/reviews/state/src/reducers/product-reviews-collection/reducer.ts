import {
  daffCollectionReducerInitialState,
  getCollectionStateAdapter,
} from '@daffodil/core/state';
import { DaffProductReview } from '@daffodil/reviews';

import {
  DaffReviewsProductActionTypes,
  DaffReviewsProductActions,
  DaffProductReviewsCollectionActions,
  DaffProductReviewsCollectionActionTypes,
} from '../../actions/public_api';
import { DaffReviewsCollectionReducerState } from './state.interface';

export const daffReviewsCollectionReducerInitialState: DaffReviewsCollectionReducerState = daffCollectionReducerInitialState;

/**
 * Handles the reduction of review actions into the collection metadata state.
 */
export function daffReviewsCollectionReducer<T extends DaffProductReview = DaffProductReview>(
  state = daffReviewsCollectionReducerInitialState,
  action: DaffReviewsProductActions<T> | DaffProductReviewsCollectionActions,
): DaffReviewsCollectionReducerState {
  const adapter = getCollectionStateAdapter<DaffReviewsCollectionReducerState>();

  switch (action.type) {
    case DaffReviewsProductActionTypes.ListAction:
      return adapter.storeRequest(action.collectionRequest, state);

    case DaffReviewsProductActionTypes.ListSuccessAction:
      return adapter.setMetadata(action.payload.metadata, state);

    case DaffReviewsProductActionTypes.ListFailureAction:
      return daffReviewsCollectionReducerInitialState;

    case DaffProductReviewsCollectionActionTypes.ChangePageSizeAction:
      return adapter.setPageSize(action.pageSize, state);

    case DaffProductReviewsCollectionActionTypes.ChangeCurrentPageAction:
      return adapter.setCurrentPage(action.currentPage, state);

    case DaffProductReviewsCollectionActionTypes.ChangeSortingAction:
      return adapter.setSort(action.sort.option, action.sort.direction, state);

    default:
      return state;
  }
}
