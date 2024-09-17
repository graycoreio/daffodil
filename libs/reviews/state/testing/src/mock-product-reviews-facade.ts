import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DaffProductReview } from '@daffodil/reviews';
import { DaffProductReviewsFacadeInterface } from '@daffodil/reviews/state';

/**
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffProductReviewsFacade implements DaffProductReviewsFacadeInterface {
  getProductReview(id: DaffProductReview['id']): BehaviorSubject<DaffProductReview> {
    return new BehaviorSubject(null);
  }

  dispatch(action) {};
}
