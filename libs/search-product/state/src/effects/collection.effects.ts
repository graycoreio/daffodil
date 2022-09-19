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

import { DaffError } from '@daffodil/core';
import {
  DaffCollectionRequest,
  daffCollectionBuildRequestFromMetadata,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import { DAFF_SEARCH_ERROR_MATCHER } from '@daffodil/search';
import { DaffSearchProductResult } from '@daffodil/search-product';
import { DaffSearchProductDriverInterface } from '@daffodil/search-product/driver';
import { DaffSearchDriver } from '@daffodil/search/driver';
import {
  DaffSearchPageFacade,
  DaffSearchLoadFailure,
  DaffSearchLoadSuccess,
} from '@daffodil/search/state';

import { DaffSearchProductCollectionActionTypes } from '../actions/product-collection.actions';
import { DaffSearchProductCollectionFacade } from '../facades/public_api';

export const DAFF_SEARCH_PRODUCT_COLLECTION_ACTION_TYPES = [
  DaffSearchProductCollectionActionTypes.SearchProductApplyFiltersAction,
  DaffSearchProductCollectionActionTypes.SearchProductRemoveFiltersAction,
  DaffSearchProductCollectionActionTypes.SearchProductReplaceFiltersAction,
  DaffSearchProductCollectionActionTypes.SearchProductToggleFiltersAction,
  DaffSearchProductCollectionActionTypes.SearchProductChangeCurrentPageAction,
  DaffSearchProductCollectionActionTypes.SearchProductChangePageSizeAction,
  DaffSearchProductCollectionActionTypes.SearchProductChangeSortingOptionAction,
  DaffSearchProductCollectionActionTypes.SearchProductClearFiltersAction,
];

@Injectable()
export class DaffSearchProductCollectionEffects<
  T extends DaffSearchProductResult = DaffSearchProductResult,
> {
  constructor(
    private actions$: Actions,
    private collectionFacade: DaffSearchProductCollectionFacade,
    private searchFacade: DaffSearchPageFacade,
    // TODO: should we reference the product kind driver here?
    @Inject(DaffSearchDriver) private driver: DaffSearchProductDriverInterface<T>,
    @Inject(DAFF_SEARCH_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

  /**
   * Updates the product collection according to the action.
   * It will take the request metedata, including currently
   * applied filters, from state, form them into a request,
   * and pass that into the {@link DaffProductCollectionDriverCall} provided to this class.
   *
   * @param throttleWindow the amount of time to delay when apply/removing filters
   * in a sequence.
   */
  update$ = createEffect(() => (throttleWindow = 300, scheduler = asyncScheduler) => this.actions$.pipe(
    ofType(...DAFF_SEARCH_PRODUCT_COLLECTION_ACTION_TYPES),
    withLatestFrom(
      this.collectionFacade.metadata$,
      this.searchFacade.recent$,
    ),
    map(([action, metadata, recent]): [string, DaffCollectionRequest] => [
      recent[0],
      daffCollectionBuildRequestFromMetadata(metadata),
    ]),
    throttleTime(throttleWindow, scheduler, { leading: true, trailing: true }),
    switchMap(([recent, request]) => this.driver.search(recent, request).pipe(
      map(resp => new DaffSearchLoadSuccess<T>(resp)),
      catchError((error: DaffError) => of(new DaffSearchLoadFailure(this.errorMatcher(error)))),
    )),
  ));
}
