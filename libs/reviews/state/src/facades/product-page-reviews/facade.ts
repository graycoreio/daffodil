import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import { DaffProductReview } from '@daffodil/reviews';

import { DaffProductPageReviewsFacadeInterface } from './facade.interface';
import { DaffReviewsStateRootSlice } from '../../reducers/reducers-state.interface';
import { getDaffReviewsSelectors } from '../../selectors/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductPageReviewsFacade<T extends DaffProductReview = DaffProductReview> implements DaffProductPageReviewsFacadeInterface {
  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;
  productReviews$: Observable<T[]>;

  private selectors = getDaffReviewsSelectors<T>();

  constructor(private store: Store<DaffReviewsStateRootSlice<T>>) {
    this.loading$ = this.store.pipe(select(this.selectors.selectProductPageReviewsLoading));
    this.errors$ = this.store.pipe(select(this.selectors.selectProductPageReviewsErrors));
    this.productReviews$ = this.store.pipe(select(this.selectors.selectProductPageReviews));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
