import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError, withLatestFrom, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { DaffProductGridLoadSuccess, DaffProduct } from '@daffodil/product';

import { 
  DaffCategoryActionTypes, 
  DaffCategoryLoad, 
  DaffCategoryLoadSuccess, 
  DaffCategoryLoadFailure, 
  DaffChangeCategoryPageSize,
  DaffChangeCategoryCurrentPage,
	DaffChangeCategoryFilters,
	DaffChangeCategorySortingOption,
	DaffToggleCategoryFilter
} from '../actions/category.actions';
import { DaffCategoryDriver } from '../drivers/injection-tokens/category-driver.token';
import { DaffCategoryServiceInterface } from '../drivers/interfaces/category-service.interface';
import { DaffGetCategoryResponse } from '../models/get-category-response';
import { getDaffCategorySelectors } from '../selectors/category.selector';
import { DaffCategoryRequest } from '../models/requests/category-request';
import { DaffCategoryFilterRequest, DaffCategoryFromToFilterSeparator } from '../models/requests/filter-request';
import { DaffCategoryFilterType } from '../models/category-filter-base';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffGenericCategory } from '../models/generic-category';

@Injectable()
export class DaffCategoryEffects<
	T extends DaffCategoryRequest,
	V extends DaffGenericCategory<V>,
	U extends DaffCategoryPageConfigurationState<T>,
	W extends DaffProduct
> {

  constructor(
    private actions$: Actions,
    @Inject(DaffCategoryDriver) private driver: DaffCategoryServiceInterface<T, V, U>,
    private store: Store<any>
	){}
	
	private categorySelectors = getDaffCategorySelectors<T, V, U, W>();

  @Effect()
  loadCategory$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.CategoryLoadAction),
    switchMap((action: DaffCategoryLoad<T>) => {
			this.validateFilters(action.request.filter_requests);
			return this.processCategoryGetRequest(action.request)
		})
	)

  @Effect()
  changeCategoryPageSize$ : Observable<any> = this.actions$.pipe(
		ofType(DaffCategoryActionTypes.ChangeCategoryPageSizeAction),
    withLatestFrom(
			this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))
		),
    switchMap((
			[action, categoryRequest]: 
			[DaffChangeCategoryPageSize, T]
		) => this.processCategoryGetRequest({
			...categoryRequest,
			page_size: action.pageSize
		}))
  )

  @Effect()
  changeCategoryCurrentPage$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.ChangeCategoryCurrentPageAction),
    withLatestFrom(
			this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))
    ),
    switchMap((
			[action, categoryRequest]: 
			[DaffChangeCategoryCurrentPage, T]
		) => this.processCategoryGetRequest({
			...categoryRequest,
			current_page: action.currentPage
		}))
  )

  @Effect()
  changeCategoryFilters$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.ChangeCategoryFiltersAction),
    withLatestFrom(
			this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))
    ),
    switchMap((
			[action, categoryRequest]: 
			[DaffChangeCategoryFilters, T]
		) => {
			this.validateFilters(action.filters);
			return this.processCategoryGetRequest({
				...categoryRequest,
				filter_requests: action.filters
			})
		})
  )

  @Effect()
  toggleCategoryFilter$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.ToggleCategoryFilterAction),
    withLatestFrom(
			this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))
    ),
    switchMap((
			[action, categoryPageConfigurationState]: 
			[DaffToggleCategoryFilter, U]
		) => {
			this.validateFilters(categoryPageConfigurationState.filter_requests);
			return this.processCategoryGetRequest({
				...categoryPageConfigurationState
			})
		})
  )

  @Effect()
  changeCategorySort$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.ChangeCategorySortingOptionAction),
    withLatestFrom(
			this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))
    ),
    switchMap((
			[action, categoryRequest]: 
			[DaffChangeCategorySortingOption, T]
		) => this.processCategoryGetRequest({
			...categoryRequest,
			applied_sort_option: action.sort.option,
			applied_sort_direction: action.sort.direction
		}))
	)
	
	validateFilters(filters: DaffCategoryFilterRequest[]): void {
		if(!filters) return;
		filters.forEach((filter, i) => {
			if(filter.type === DaffCategoryFilterType.Range &&
				filter.value[0].split(DaffCategoryFromToFilterSeparator).length !== 2) {
				throw new Error('Category range filter is in an invalid format. Should be **-**');
			}

			for(let j=i+1; j < filters.length; j++) {
				if(filters[i].name === filters[j].name) {
					throw new Error('More than one category filter of the same name exists. These should' +
						' be combined into a single filter action with multiple values.')
				}
			}
		})
	}

  private processCategoryGetRequest(payload: T) {
    return this.driver.get(payload).pipe(
      switchMap((resp: DaffGetCategoryResponse<T, V, U>) => [
        new DaffProductGridLoadSuccess(resp.products),
        new DaffCategoryLoadSuccess(resp)
      ]),
      catchError(error => of(new DaffCategoryLoadFailure('Failed to load the category')))
    )
	}
}
