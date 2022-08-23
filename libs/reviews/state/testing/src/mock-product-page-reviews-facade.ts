import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import { DaffProductReview } from '@daffodil/reviews';
import { DaffProductPageReviewsFacadeInterface } from '@daffodil/reviews/state';

/**
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffProductPageReviewsFacade implements DaffProductPageReviewsFacadeInterface {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  errors$: BehaviorSubject<DaffStateError[]> = new BehaviorSubject([]);
  productReviews$: BehaviorSubject<DaffProductReview[]> = new BehaviorSubject([]);

  dispatch(action) {};
}
