import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffProduct } from '@daffodil/product';
import { DaffProductReviews } from '@daffodil/reviews';
import { DaffProductReviewsServiceInterface } from '@daffodil/reviews/driver';
import { DaffProductReviewsFactory } from '@daffodil/reviews/testing';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffReviewsTestingService implements DaffProductReviewsServiceInterface {
  constructor(
    private productReviewsFactory: DaffProductReviewsFactory,
  ) {}

  list(productId: DaffProduct['id']): Observable<DaffProductReviews> {
    return of(this.productReviewsFactory.create());
  }
}
