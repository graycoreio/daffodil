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
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoad,
  DaffCategoryPageLoadFailure,
  DaffCategoryPageActionTypes,
  DaffCategoryPageChangePageSize,
  DaffCategoryPageChangeCurrentPage,
  DaffCategoryPageChangeFilters,
  DaffCategoryPageToggleFilter,
  DaffCategoryPageChangeSortingOption,
} from '../actions/category-page.actions';
import { DaffStatefulCategoryPageConfigurationState } from '../models/public_api';
import { getDaffCategorySelectors } from '../selectors/category.selector';

@Injectable()
export class DaffCategoryPageEffects<
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
  loadCategoryPage$: Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryPageActionTypes.CategoryPageLoadAction),
    switchMap((action: DaffCategoryPageLoad) => {
      daffCategoryValidateFilters(action.request.filter_requests);
      return this.processCategoryGetRequest(action.request);
    }),
  );

  @Effect()
  changeCategoryPageSize$: Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryPageActionTypes.CategoryPageChangeSizeAction),
    withLatestFrom(
      this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState)),
    ),
    switchMap((
      [action, categoryRequest]:
			[DaffCategoryPageChangePageSize, DaffCategoryRequest],
    ) => this.processCategoryGetRequest({
      ...categoryRequest,
      page_size: action.pageSize,
    })),
  );

  @Effect()
  changeCategoryCurrentPage$: Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryPageActionTypes.CategoryPageChangeCurrentPageAction),
    withLatestFrom(
      this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState)),
    ),
    switchMap((
      [action, categoryRequest]:
			[DaffCategoryPageChangeCurrentPage, DaffCategoryRequest],
    ) => this.processCategoryGetRequest({
      ...categoryRequest,
      current_page: action.currentPage,
    })),
  );

  @Effect()
  changeCategoryFilters$: Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryPageActionTypes.CategoryPageChangeFiltersAction),
    withLatestFrom(
      this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState)),
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
    ofType(DaffCategoryPageActionTypes.CategoryPageToggleFilterAction),
    withLatestFrom(
      this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState)),
    ),
    switchMap((
      [action, categoryPageConfigurationState]:
			[DaffCategoryPageToggleFilter, DaffStatefulCategoryPageConfigurationState],
    ) => {
      daffCategoryValidateFilters(categoryPageConfigurationState.filter_requests);
      return this.processCategoryGetRequest({
        ...categoryPageConfigurationState,
      });
    }),
  );

  @Effect()
  changeCategorySort$: Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryPageActionTypes.CategoryPageChangeSortingOptionAction),
    withLatestFrom(
      this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState)),
    ),
    switchMap((
      [action, categoryRequest]:
			[DaffCategoryPageChangeSortingOption, DaffCategoryRequest],
    ) => this.processCategoryGetRequest({
      ...categoryRequest,
      applied_sort_option: action.sort.option,
      applied_sort_direction: action.sort.direction,
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
