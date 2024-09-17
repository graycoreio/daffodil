import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  DaffCollectionFacadeInterface,
  DaffCollectionFacade,
} from '@daffodil/core/state';
import {
  DaffProductReview,
  DaffProductReviews,
} from '@daffodil/reviews';

import { DaffReviewsStateRootSlice } from '../../reducers/reducers-state.interface';
import { getDaffProductReviewsCollectionSelectors } from '../../selectors/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductPageReviewsCollectionFacade<T extends DaffProductReview = DaffProductReview>
  extends DaffCollectionFacade<DaffReviewsStateRootSlice<T>, DaffProductReviews['metadata']>
  implements DaffCollectionFacadeInterface<DaffProductReviews['metadata']> {
  constructor(store: Store<DaffReviewsStateRootSlice<T>>) {
    super(
      store,
      getDaffProductReviewsCollectionSelectors(),
    );
  }
}
