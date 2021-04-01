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
  Store,
  select,
} from '@ngrx/store';
import {
  of,
  Observable,
} from 'rxjs';
import {
  switchMap,
  catchError,
  withLatestFrom,
  map,
} from 'rxjs/operators';

import {
  DaffCategoryRequest,
  DaffGenericCategory,
  daffCategoryValidateFilters,
  DaffGetCategoryResponse,
  DAFF_CATEGORY_ERROR_MATCHER,
  daffCategoryBuildRequestsFromFilters,
  daffToggleRequestOnFilters,
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
  DaffCategoryPageChangeFilters,
  DaffCategoryPageToggleFilter,
  DaffCategoryPageFilterActionTypes,
} from '../actions/category-page-filter.actions';
import {
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoadFailure,
} from '../actions/category-page.actions';
import { getDaffCategorySelectors } from '../selectors/category.selector';

@Injectable()
export class DaffCategoryPageFilterEffects<
	V extends DaffGenericCategory<V>,
	W extends DaffProduct
> {

  constructor(
    private actions$: Actions,
    @Inject(DaffCategoryDriver) private driver: DaffCategoryServiceInterface<V, W>,
		@Inject(DAFF_CATEGORY_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    private store: Store<any>,
  ){}

	private categorySelectors = getDaffCategorySelectors<V, W>();

  @Effect()
  changeCategoryFilters$: Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryPageFilterActionTypes.CategoryPageChangeFiltersAction),
    withLatestFrom(
      this.store.pipe(select(this.categorySelectors.selectCategoryPageMetadata)),
    ),
    switchMap((
      [action, categoryRequest]:
			[DaffCategoryPageChangeFilters, DaffCategoryRequest],
    ) => {
      daffCategoryValidateFilters(action.filters);
      return this.processCategoryGetRequest({
        ...categoryRequest,
        filter_requests: action.filters,
      });
    }),
  );

  @Effect()
  toggleCategoryFilter$: Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryPageFilterActionTypes.CategoryPageToggleFilterAction),
    withLatestFrom(
      this.store.pipe(select(this.categorySelectors.selectCategoryPageMetadata)),
    ),
    switchMap((
      [action, categoryPageMetadata]:
			[DaffCategoryPageToggleFilter, DaffCategoryPageMetadata],
    ) => this.processCategoryGetRequest({
      ...categoryPageMetadata,
      // TODO: should we do this in the reducer and pull it from categoryPageMetadata.filters?
      filter_requests: daffCategoryBuildRequestsFromFilters(daffToggleRequestOnFilters(action.filter, categoryPageMetadata.filters)),
    })),
  );

  private processCategoryGetRequest(payload: DaffCategoryRequest) {
    return this.driver.get(payload).pipe(
      switchMap((resp: DaffGetCategoryResponse<V, W>) => [
        new DaffProductGridLoadSuccess(resp.products),
        new DaffCategoryPageLoadSuccess(resp),
      ]),
      catchError((error: DaffError) => of(new DaffCategoryPageLoadFailure(this.errorMatcher(error)))),
    );
  }
}
