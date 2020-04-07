import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError, withLatestFrom, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { DaffProductGridLoadSuccess } from '@daffodil/product';

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
import { DaffCategoryRequest, DaffSortDirectionEnum } from '../models/requests/category-request';
import { DaffCategoryFilterRequest, DaffCategoryFromToFilterSeparator } from '../models/requests/filter-request';
import { DaffCategoryFilterType } from '../models/category-filter-base';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffGenericCategory } from '../models/generic-category';

@Injectable()
export class DaffCategoryEffects<
	T extends DaffCategoryRequest,
	U extends DaffGenericCategory<U>,
	V extends DaffCategoryPageConfigurationState
> {

  constructor(
    private actions$: Actions,
    @Inject(DaffCategoryDriver) private driver: DaffCategoryServiceInterface<T, U, V>,
    private store: Store<any>
  ){}

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
			this.store.pipe(select(getDaffCategorySelectors<U, V>().selectSelectedCategoryId)),
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectCategoryPageFilterRequests)),
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectCategoryPageAppliedSortOption)),
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectCategoryPageAppliedSortDirection))
		),
    switchMap((
			[action, categoryId, filterRequests, appliedSortOption, appliedSortDirection]: 
			[DaffChangeCategoryPageSize, string, DaffCategoryFilterRequest[], string, DaffSortDirectionEnum]
		) => this.processCategoryGetRequest(<T>{
      id: categoryId,
			page_size: action.pageSize,
			filter_requests: filterRequests,
			applied_sort_option: appliedSortOption,
			applied_sort_direction: appliedSortDirection
		}))
  )

  @Effect()
  changeCategoryCurrentPage$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.ChangeCategoryCurrentPageAction),
    withLatestFrom(
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectSelectedCategoryId)),
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectCategoryPageSize)),
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectCategoryPageFilterRequests)),
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectCategoryPageAppliedSortOption)),
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectCategoryPageAppliedSortDirection))
    ),
    switchMap((
			[action, categoryId, pageSize, filterRequests, appliedSortOption, appliedSortDirection]: 
			[DaffChangeCategoryCurrentPage, string, number, DaffCategoryFilterRequest[], string, DaffSortDirectionEnum]
		) => this.processCategoryGetRequest(<T>{
			id: categoryId,
			page_size: pageSize,
			current_page: action.currentPage,
			filter_requests: filterRequests,
			applied_sort_option: appliedSortOption,
			applied_sort_direction: appliedSortDirection
		}))
  )

  @Effect()
  changeCategoryFilters$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.ChangeCategoryFiltersAction),
    withLatestFrom(
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectSelectedCategoryId)), 
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectCategoryPageSize)),
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectCategoryPageAppliedSortOption)),
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectCategoryPageAppliedSortDirection))
    ),
    switchMap((
			[action, categoryId, pageSize, appliedSortOption, appliedSortDirection]: 
			[DaffChangeCategoryFilters, string, number, string, DaffSortDirectionEnum]
		) => {
			this.validateFilters(action.filters);
			return this.processCategoryGetRequest(<T>{
				id: categoryId,
				page_size: pageSize,
				filter_requests: action.filters,
				applied_sort_option: appliedSortOption,
				applied_sort_direction: appliedSortDirection
			})
		})
  )

  @Effect()
  toggleCategoryFilter$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.ToggleCategoryFilterAction),
    withLatestFrom(
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectSelectedCategoryId)),
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectCategoryPageSize)),
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectCategoryPageFilterRequests)),
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectCategoryPageAppliedSortOption)),
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectCategoryPageAppliedSortDirection))
    ),
    switchMap((
			[action, categoryId, pageSize, filterRequests, appliedSortOption, appliedSortDirection]: 
			[DaffToggleCategoryFilter, string, number, DaffCategoryFilterRequest[], string, DaffSortDirectionEnum]
		) => {
			this.validateFilters(filterRequests);
			return this.processCategoryGetRequest(<T>{
				id: categoryId,
				page_size: pageSize,
				filter_requests: filterRequests,
				applied_sort_option: appliedSortOption,
				applied_sort_direction: appliedSortDirection
			})
		})
  )

  @Effect()
  changeCategorySort$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.ChangeCategorySortingOptionAction),
    withLatestFrom(
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectSelectedCategoryId)), 
			this.store.pipe(select(getDaffCategorySelectors<U, V>().selectCategoryPageSize)),
      this.store.pipe(select(getDaffCategorySelectors<U, V>().selectCategoryPageFilterRequests))
    ),
    switchMap((
			[action, categoryId, pageSize, filterRequests]: 
			[DaffChangeCategorySortingOption, string, number, DaffCategoryFilterRequest[]]
		) => this.processCategoryGetRequest(<T> {
			id: categoryId,
			page_size: pageSize,
			filter_requests: filterRequests,
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
      switchMap((resp: DaffGetCategoryResponse<U, V>) => [
        new DaffProductGridLoadSuccess(resp.products),
        new DaffCategoryLoadSuccess(resp)
      ]),
      catchError(error => of(new DaffCategoryLoadFailure('Failed to load the category')))
    )
	}
}
