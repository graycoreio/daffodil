import {
  Injectable,
  Inject,
} from '@angular/core';
import { Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  tap,
  take,
} from 'rxjs/operators';

import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import {
  DaffProductCollectionDriverCall,
  DaffProductCollectionEffects,
} from '@daffodil/product/state';
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
> extends DaffProductCollectionEffects {
  constructor(
    actions$: Actions,
    collectionFacade: DaffSearchProductCollectionFacade,
    searchFacade: DaffSearchPageFacade,
    // TODO: should we reference the product kind driver here?
    @Inject(DaffSearchDriver) driver: DaffSearchProductDriverInterface<T>,
    @Inject(DAFF_SEARCH_ERROR_MATCHER) errorMatcher: ErrorTransformer,
  ) {
    const driverCall: DaffProductCollectionDriverCall =
      (action, request) => searchFacade.recent$.pipe(
        take(1),
        switchMap(recent => driver.search(recent[0], request).pipe(
          map(resp => new DaffSearchLoadSuccess<T>(resp)),
          catchError((error: DaffError) => of(new DaffSearchLoadFailure(errorMatcher(error)))),
        )),
      );
    super(
      actions$,
      driverCall,
      DAFF_SEARCH_PRODUCT_COLLECTION_ACTION_TYPES,
      collectionFacade,
    );
  }
}
