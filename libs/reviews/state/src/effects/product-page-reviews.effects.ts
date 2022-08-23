import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  of,
  Observable,
} from 'rxjs';
import {
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';

import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import {
  DaffProductReview,
  DAFF_REVIEWS_ERROR_MATCHER,
} from '@daffodil/reviews';
import {
  DaffReviewsDriver,
  DaffProductReviewsServiceInterface,
} from '@daffodil/reviews/driver';

import {
  DaffReviewsProductActionTypes,
  DaffReviewsProductList,
  DaffReviewsProductListFailure,
  DaffReviewsProductListSuccess,
} from '../actions/product-reviews.actions';

/**
 * Effects for handling product actions and for triggering corresponding service requests.
 *
 * @param action$ - Redux action object
 * @param driver - A product service driver
 */
@Injectable()
export class DaffProductPageReviewsEffects<T extends DaffProductReview = DaffProductReview> {

  constructor(
    private actions$: Actions,
    @Inject(DaffReviewsDriver) private driver: DaffProductReviewsServiceInterface<T>,
    @Inject(DAFF_REVIEWS_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

  /**
   * Handles ReviewsProductListAction by making a service call for a product and returning a success or
   * failure action to the action stream.
   *
   * @returns An Observable of a ProductLoadAction
   */

  list$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(DaffReviewsProductActionTypes.ListAction),
    switchMap((action: DaffReviewsProductList) =>
      this.driver.list(action.payload)
        .pipe(
          map((resp) => new DaffReviewsProductListSuccess(resp)),
          catchError((error: DaffError) => of(new DaffReviewsProductListFailure(this.errorMatcher(error)))),
        ),
    ),
  ));
}
