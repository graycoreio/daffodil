import { Action } from '@ngrx/store';

import { DaffCollectionRequest } from '@daffodil/core';
import { DaffStateError } from '@daffodil/core/state';
import {
  DaffProductReview,
  DaffProductReviews,
} from '@daffodil/reviews';

/**
 * Action types for Product Review Actions.
 */
export enum DaffReviewsProductActionTypes {
  ListAction = '[@daffodil/reviews/state] List Product Reviews Action',
  ListSuccessAction = '[@daffodil/reviews/state] List Product Reviews Success Action',
  ListFailureAction = '[@daffodil/reviews/state] List Product Reviews Failure Action',
}

/**
 * Triggers a request for a Product's reviews.
 *
 * @param payload - Id of requested Product
 */
export class DaffReviewsProductList implements Action {
  readonly type = DaffReviewsProductActionTypes.ListAction;

  constructor(public payload: string, public collectionRequest: DaffCollectionRequest = {}) {}
}

/**
 * An action called when listing the reviews for a product succeeded.
 */
export class DaffReviewsProductListSuccess<T extends DaffProductReview = DaffProductReview> implements Action {
  readonly type = DaffReviewsProductActionTypes.ListSuccessAction;

  constructor(public payload: DaffProductReviews<T>) {}
}

/**
 * An action called when listing the reviews for a product failed.
 */
export class DaffReviewsProductListFailure implements Action {
  readonly type = DaffReviewsProductActionTypes.ListFailureAction;

  constructor(public payload: DaffStateError) {}
}

export type DaffReviewsProductActions<T extends DaffProductReview = DaffProductReview> =
  | DaffReviewsProductList
  | DaffReviewsProductListSuccess<T>
  | DaffReviewsProductListFailure;
