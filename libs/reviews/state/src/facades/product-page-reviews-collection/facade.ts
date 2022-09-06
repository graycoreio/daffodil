import { Injectable } from '@angular/core';
import {
  select,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';

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
import { DaffProductPageReviewsCollectionFacadeInterface } from './interface';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductPageReviewsCollectionFacade<T extends DaffProductReview = DaffProductReview>
  extends DaffCollectionFacade<DaffReviewsStateRootSlice<T>, DaffProductReviews['metadata']>
  implements DaffProductPageReviewsCollectionFacadeInterface {
  selectedFilter$: Observable<DaffProductReviews['metadata']['filter']>;

  constructor(store: Store<DaffReviewsStateRootSlice<T>>) {
    const selectors = getDaffProductReviewsCollectionSelectors();

	  super(
      store,
      getDaffProductReviewsCollectionSelectors(),
    );

    this.selectedFilter$ = this.store.pipe(select(selectors.selectSelectedFilter));
  }
}
