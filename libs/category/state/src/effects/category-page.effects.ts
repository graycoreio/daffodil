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
  DaffCategoryPageConfigurationState,
  daffCategoryValidateFilters,
  DaffGetCategoryResponse,
} from '@daffodil/category';
import {
  DaffCategoryDriver,
  DaffCategoryServiceInterface,
} from '@daffodil/category/driver';
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
import { getDaffCategorySelectors } from '../selectors/category.selector';

@Injectable()
export class DaffCategoryPageEffects<
	T extends DaffCategoryRequest,
	V extends DaffGenericCategory<V>,
	U extends DaffCategoryPageConfigurationState<T>,
	W extends DaffProduct
> {

  constructor(
    private actions$: Actions,
    @Inject(DaffCategoryDriver) private driver: DaffCategoryServiceInterface<T, V, U, W>,
    private store: Store<any>,
  ){}

	private categorySelectors = getDaffCategorySelectors<T, V, U, W>();

  @Effect()
  loadCategoryPage$: Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryPageActionTypes.CategoryPageLoadAction),
    switchMap((action: DaffCategoryPageLoad<T>) => {
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
			[DaffCategoryPageChangePageSize, T],
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
			[DaffCategoryPageChangeCurrentPage, T],
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
			[DaffCategoryPageChangeFilters, T],
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
			[DaffCategoryPageToggleFilter, U],
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
			[DaffCategoryPageChangeSortingOption, T],
    ) => this.processCategoryGetRequest({
      ...categoryRequest,
      applied_sort_option: action.sort.option,
      applied_sort_direction: action.sort.direction,
    })),
  );

  private processCategoryGetRequest(payload: T) {
    return this.driver.get(payload).pipe(
      switchMap((resp: DaffGetCategoryResponse<T, V, U, W>) => [
        new DaffProductGridLoadSuccess(resp.products),
        new DaffCategoryPageLoadSuccess(resp),
      ]),
      catchError(error => of(new DaffCategoryPageLoadFailure('Failed to load the category'))),
    );
  }
}
