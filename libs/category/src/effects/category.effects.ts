import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError, withLatestFrom, mergeMap, concatMap } from 'rxjs/operators';
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
import { 
	selectSelectedCategoryId, 
	selectCategoryPageSize, 
	selectCategoryPageAppliedSortOption, 
	selectCategoryPageAppliedFilters, 
	selectCategoryPageAppliedSortDirection 
} from '../selectors/category.selector';
import { DaffCategoryRequest, DaffSortDirectionEnum } from '../models/requests/category-request';
import { DaffCategoryFilterAction } from '../models/requests/filter-action';

@Injectable()
export class DaffCategoryEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffCategoryDriver) private driver: DaffCategoryServiceInterface,
    private store: Store<any>
  ){}

  @Effect()
  loadCategory$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.CategoryLoadAction),
    mergeMap((action: DaffCategoryLoad) => this.processCategoryGetRequest(action.request))
  )

  @Effect()
  changeCategoryPageSize$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.ChangeCategoryPageSizeAction),
    withLatestFrom(
			this.store.pipe(select(selectSelectedCategoryId)),
      this.store.pipe(select(selectCategoryPageAppliedFilters)),
      this.store.pipe(select(selectCategoryPageAppliedSortOption)),
      this.store.pipe(select(selectCategoryPageAppliedSortDirection))
		),
    mergeMap((
			[action, categoryId, appliedFilters, appliedSortOption, appliedSortDirection]: 
			[DaffChangeCategoryPageSize, string, DaffCategoryFilterAction[], string, DaffSortDirectionEnum]
		) => this.processCategoryGetRequest({
      id: categoryId,
			page_size: action.pageSize,
			applied_filters: appliedFilters,
			applied_sort_option: appliedSortOption,
			applied_sort_direction: appliedSortDirection
		}))
  )

  @Effect()
  changeCategoryCurrentPage$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.ChangeCategoryCurrentPageAction),
    withLatestFrom(
      this.store.pipe(select(selectSelectedCategoryId)),
      this.store.pipe(select(selectCategoryPageSize)),
      this.store.pipe(select(selectCategoryPageAppliedFilters)),
      this.store.pipe(select(selectCategoryPageAppliedSortOption)),
      this.store.pipe(select(selectCategoryPageAppliedSortDirection))
    ),
    mergeMap((
			[action, categoryId, pageSize, appliedFilters, appliedSortOption, appliedSortDirection]: 
			[DaffChangeCategoryCurrentPage, string, number, DaffCategoryFilterAction[], string, DaffSortDirectionEnum]
		) => this.processCategoryGetRequest({
			id: categoryId,
			page_size: pageSize,
			current_page: action.currentPage,
			applied_filters: appliedFilters,
			applied_sort_option: appliedSortOption,
			applied_sort_direction: appliedSortDirection
		}))
  )

  @Effect()
  changeCategoryFilters$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.ChangeCategoryFiltersAction),
    withLatestFrom(
      this.store.pipe(select(selectSelectedCategoryId)), 
      this.store.pipe(select(selectCategoryPageSize)),
      this.store.pipe(select(selectCategoryPageAppliedSortOption)),
      this.store.pipe(select(selectCategoryPageAppliedSortDirection))
    ),
    mergeMap((
			[action, categoryId, pageSize, appliedSortOption, appliedSortDirection]: 
			[DaffChangeCategoryFilters, string, number, string, DaffSortDirectionEnum]
		) => this.processCategoryGetRequest({
			id: categoryId,
			page_size: pageSize,
			applied_filters: action.filters,
			applied_sort_option: appliedSortOption,
			applied_sort_direction: appliedSortDirection
		}))
  )

  @Effect()
  toggleCategoryFilter$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.ToggleCategoryFilterAction),
    withLatestFrom(
      this.store.pipe(select(selectCategoryPageAppliedFilters))
    ),
    mergeMap((
			[action, appliedFilters]: 
			[DaffToggleCategoryFilter, DaffCategoryFilterAction[]]
		) => of(new DaffChangeCategoryFilters(this.toggleCategoryFilter(action.filter, appliedFilters))))
  )

  @Effect()
  changeCategorySort$ : Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryActionTypes.ChangeCategorySortingOptionAction),
    withLatestFrom(
      this.store.pipe(select(selectSelectedCategoryId)), 
			this.store.pipe(select(selectCategoryPageSize)),
      this.store.pipe(select(selectCategoryPageAppliedFilters))
    ),
    mergeMap((
			[action, categoryId, pageSize, appliedFilters]: 
			[DaffChangeCategorySortingOption, string, number, DaffCategoryFilterAction[]]
		) => this.processCategoryGetRequest({
			id: categoryId,
			page_size: pageSize,
			applied_filters: appliedFilters,
			applied_sort_option: action.sort.option,
			applied_sort_direction: action.sort.direction
		}))
	)
	
	private toggleCategoryFilter(
		toggledFilter: DaffCategoryFilterAction, 
		appliedFilters: DaffCategoryFilterAction[]
	): DaffCategoryFilterAction[] {
		return appliedFilters.find(filter => this.areFiltersEqual(toggledFilter, filter))
		// filter is applied, remove it
		? appliedFilters.filter(filter => !this.areFiltersEqual(filter, toggledFilter))
		// filter is not applied, add it
		: appliedFilters.concat(toggledFilter);
	}

	private areFiltersEqual(filter1: DaffCategoryFilterAction, filter2: DaffCategoryFilterAction): boolean {
		return filter1.name === filter2.name && filter1.value === filter2.value;
	}

  private processCategoryGetRequest(payload: DaffCategoryRequest) {
    return this.driver.get(payload).pipe(
      concatMap((resp: DaffGetCategoryResponse) => [
        new DaffProductGridLoadSuccess(resp.products),
        new DaffCategoryLoadSuccess(resp)
      ]),
      catchError(error => of(new DaffCategoryLoadFailure('Failed to load the category')))
    )
  }
}
