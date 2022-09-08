import { defaultMemoize } from '@ngrx/store';

import { DaffCollectionStateAdapter } from '@daffodil/core/state';
import { DaffProductReviews } from '@daffodil/reviews';
import { DaffProductReviewsCollectionRequest } from '@daffodil/reviews';

import { DaffReviewsCollectionReducerState } from './state.interface';

export class DaffReviewsCollectionStateAdapter extends DaffCollectionStateAdapter<DaffReviewsCollectionReducerState> {
  setFilter(appliedFilter: DaffProductReviews['metadata']['appliedFilter'], state: DaffReviewsCollectionReducerState): DaffReviewsCollectionReducerState {
    return {
      ...state,
      appliedFilter,
      currentPage: 1,
    };
  }

  storeRequest(request: DaffProductReviewsCollectionRequest, state: DaffReviewsCollectionReducerState): DaffReviewsCollectionReducerState {
    return {
      ...super.storeRequest(request, state),
      appliedFilter: request.appliedFilter,
    };
  }

  setMetadata(metadata: DaffProductReviews['metadata'], state: DaffReviewsCollectionReducerState): DaffReviewsCollectionReducerState {
    return {
      ...super.setMetadata(metadata, state),
      appliedFilter: metadata.appliedFilter,
    };
  };
}

export const daffGetReviewsCollectionStateAdapter: () => DaffReviewsCollectionStateAdapter = defaultMemoize(() => new DaffReviewsCollectionStateAdapter()).memoized;
