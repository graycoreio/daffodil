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
  asyncScheduler,
  of,
} from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  throttleTime,
  withLatestFrom,
} from 'rxjs/operators';

import {
  daffCollectionBuildRequestFromMetadata,
  DaffError,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import { DaffProductPageFacade } from '@daffodil/product/state';
import {
  DaffProductReview,
  DAFF_REVIEWS_ERROR_MATCHER,
} from '@daffodil/reviews';
import {
  DaffProductReviewsServiceInterface,
  DaffReviewsDriver,
} from '@daffodil/reviews/driver';


import {
  DaffProductReviewsCollectionActionTypes,
  DaffReviewsProductListFailure,
  DaffReviewsProductListSuccess,
} from '../actions/public_api';
import { DaffProductPageReviewsCollectionFacade } from '../facades/public_api';

export const DAFF_PRODUCT_REVIEW_COLLECTION_ACTION_TYPES = [
  DaffProductReviewsCollectionActionTypes.ChangeCurrentPageAction,
  DaffProductReviewsCollectionActionTypes.ChangePageSizeAction,
  DaffProductReviewsCollectionActionTypes.ChangeSortingAction,
  DaffProductReviewsCollectionActionTypes.ChangeFilterAction,
];

@Injectable()
export class DaffProductReviewCollectionEffects<
  T extends DaffProductReview = DaffProductReview,
> {
  constructor(
    private actions$: Actions,
    private collectionFacade: DaffProductPageReviewsCollectionFacade,
    private productPageFacade: DaffProductPageFacade,
    @Inject(DaffReviewsDriver) private driver: DaffProductReviewsServiceInterface<T>,
    @Inject(DAFF_REVIEWS_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

  /**
   * Updates the product review collection according to the action.
   * It will take the request metedata, including currently
   * applied filters, from state, form them into a request,
   * and pass that into the {@link DaffProductCollectionDriverCall} provided to this class.
   *
   * @param throttleWindow the amount of time to delay when apply/removing filters
   * in a sequence.
   */
  update$ = createEffect(() => (throttleWindow = 300, scheduler = asyncScheduler) => this.actions$.pipe(
    ofType(...DAFF_PRODUCT_REVIEW_COLLECTION_ACTION_TYPES),
    withLatestFrom(
      this.collectionFacade.metadata$,
      this.productPageFacade.product$,
    ),
    throttleTime(throttleWindow, scheduler, { leading: true, trailing: true }),
    switchMap(([action, metadata, product]) => this.driver.list(
      product.id,
      daffCollectionBuildRequestFromMetadata(metadata),
    ).pipe(
      map(resp => new DaffReviewsProductListSuccess<T>(resp)),
      catchError((error: DaffError) => of(new DaffReviewsProductListFailure(this.errorMatcher(error)))),
    )),
  ));
}
