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
  DaffCategoryPageChangeFilters,
  DaffCategoryPageToggleFilter,
  DaffCategoryPageFilterActionTypes,
} from '../actions/category-page-filter.actions';
import {
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoadFailure,
} from '../actions/category-page.actions';
import { DaffStatefulCategoryPageConfigurationState } from '../models/public_api';
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
    ofType(DaffCategoryPageFilterActionTypes.CategoryPageToggleFilterAction),
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
