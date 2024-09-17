import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffProductReview } from '@daffodil/reviews';

import { DaffProductReviewsFacadeInterface } from './product-facade.interface';
import { DaffReviewsStateRootSlice } from '../../reducers/reducers-state.interface';
import { getDaffReviewsSelectors } from '../../selectors/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductReviewsFacade<T extends DaffProductReview = DaffProductReview> implements DaffProductReviewsFacadeInterface<T> {
  private selectors = getDaffReviewsSelectors<T>();

  constructor(private store: Store<DaffReviewsStateRootSlice<T>>) {}

  getProductReview(id: T['id']): Observable<T> {
    return this.store.pipe(select(this.selectors.selectProductReview(id)));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
