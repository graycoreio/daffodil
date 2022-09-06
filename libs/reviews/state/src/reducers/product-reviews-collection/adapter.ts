import { defaultMemoize } from '@ngrx/store';

import { DaffCollectionStateAdapter } from '@daffodil/core/state';
import { DaffProductReviews } from '@daffodil/reviews';
import { DaffProductReviewsCollectionRequest } from '@daffodil/reviews';

import { DaffReviewsCollectionReducerState } from './state.interface';

export class DaffReviewsCollectionStateAdapter extends DaffCollectionStateAdapter<DaffReviewsCollectionReducerState> {
  setFilter(filter: DaffProductReviews['metadata']['filter'], state: DaffReviewsCollectionReducerState): DaffReviewsCollectionReducerState {
    return {
      ...state,
      filter,
      currentPage: 1,
    };
  }

  storeRequest(request: DaffProductReviewsCollectionRequest, state: DaffReviewsCollectionReducerState): DaffReviewsCollectionReducerState {
    return {
      ...super.storeRequest(request, state),
      filter: request.filter,
    };
  }

  setMetadata(metadata: DaffProductReviews['metadata'], state: DaffReviewsCollectionReducerState): DaffReviewsCollectionReducerState {
    return {
      ...super.setMetadata(metadata, state),
      filter: metadata.filter,
    };
  };
}

export const daffGetReviewsCollectionStateAdapter: () => DaffReviewsCollectionStateAdapter = defaultMemoize(() => new DaffReviewsCollectionStateAdapter()).memoized;
