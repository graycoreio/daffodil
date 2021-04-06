import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import {
  of,
  Observable,
} from 'rxjs';
import {
  switchMap,
  catchError,
  switchMapTo,
  map,
  debounceTime,
} from 'rxjs/operators';

import {
  DaffCategoryRequest,
  DaffGenericCategory,
  DaffGetCategoryResponse,
  DAFF_CATEGORY_ERROR_MATCHER,
  daffCategoryFiltersToRequests,
  DaffCategoryPageMetadata,
} from '@daffodil/category';
import {
  DaffCategoryDriver,
  DaffCategoryServiceInterface,
} from '@daffodil/category/driver';
import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import { DaffProductGridLoadSuccess } from '@daffodil/product/state';

import {
  DaffCategoryPageFilterActionTypes,
  DaffCategoryPageFilterActions,
} from '../actions/category-page-filter.actions';
import {
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoadFailure,
} from '../actions/category-page.actions';
import { DaffCategoryFacade } from '../facades/category.facade';

@Injectable()
export class DaffCategoryPageFilterEffects<
	V extends DaffGenericCategory<V>,
	W extends DaffProduct
> {

  constructor(
    private actions$: Actions,
    @Inject(DaffCategoryDriver) private driver: DaffCategoryServiceInterface<V, W>,
		@Inject(DAFF_CATEGORY_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    private facade: DaffCategoryFacade,
  ){}

  /**
   * Updates the filters applied to the category page. It will take the currently
   * applied filters from state, form them into a request, and attempt to apply
   * those request to a backend service.
   *
   * @param debounceFrame the amount of time to delay when apply/removing filters
   * in a sequence.
   */
  @Effect()
  updateFilters$: (debounceFrame?: number) => Observable<any> = (debounceFrame = 300) => this.actions$.pipe(
    ofType<DaffCategoryPageFilterActions>(
      DaffCategoryPageFilterActionTypes.CategoryPageChangeFiltersAction,
      DaffCategoryPageFilterActionTypes.CategoryPageReplaceFiltersAction,
      DaffCategoryPageFilterActionTypes.CategoryPageApplyFiltersAction,
      DaffCategoryPageFilterActionTypes.CategoryPageClearFiltersAction,
      DaffCategoryPageFilterActionTypes.CategoryPageRemoveFiltersAction,
      DaffCategoryPageFilterActionTypes.CategoryPageToggleFilterAction,
    ),
    switchMapTo(this.facade.metadata$),
    map((metadata): DaffCategoryRequest => ({
      ...metadata,
      filter_requests: daffCategoryFiltersToRequests(metadata.filters),
    })),
    debounceTime(debounceFrame),
    switchMap(payload => this.driver.get(payload).pipe(
      switchMap((resp: DaffGetCategoryResponse<V, W>) => [
        new DaffProductGridLoadSuccess(resp.products),
        new DaffCategoryPageLoadSuccess(resp),
      ]),
      catchError((error: DaffError) => of(new DaffCategoryPageLoadFailure(this.errorMatcher(error)))),
    )),
  );
}
