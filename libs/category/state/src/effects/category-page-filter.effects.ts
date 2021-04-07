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
  asyncScheduler,
  concat,
} from 'rxjs';
import { AsyncScheduler } from 'rxjs/internal/scheduler/AsyncScheduler';
import {
  switchMap,
  catchError,
  map,
  debounceTime,
  withLatestFrom,
} from 'rxjs/operators';

import {
  DaffGenericCategory,
  DaffGetCategoryResponse,
  DAFF_CATEGORY_ERROR_MATCHER,
  daffCategoryFiltersToRequests,
  DaffCategoryFilter,
  daffApplyRequestsToFilters,
  daffClearFilters,
  daffRemoveRequestsFromFilters,
  daffToggleRequestOnFilters,
} from '@daffodil/category';
import {
  DaffCategoryDriver,
  DaffCategoryServiceInterface,
} from '@daffodil/category/driver';
import {
  DaffError,
  Dict,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import { DaffProductGridLoadSuccess } from '@daffodil/product/state';

import {
  DaffCategoryPageFilterActionTypes,
  DaffCategoryPageFilterActions,
  DaffCategoryPagePreapplyFilters,
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
  updateFilters$: (debounceFrame?: number, scheduler?: AsyncScheduler) => Observable<
    DaffProductGridLoadSuccess
    | DaffCategoryPageLoadSuccess
    | DaffCategoryPageLoadFailure
    | DaffCategoryPagePreapplyFilters
  > = (debounceFrame = 300, scheduler = asyncScheduler) => this.actions$.pipe(
    ofType<DaffCategoryPageFilterActions>(
      DaffCategoryPageFilterActionTypes.CategoryPageChangeFiltersAction,
      DaffCategoryPageFilterActionTypes.CategoryPageReplaceFiltersAction,
      DaffCategoryPageFilterActionTypes.CategoryPageApplyFiltersAction,
      DaffCategoryPageFilterActionTypes.CategoryPageClearFiltersAction,
      DaffCategoryPageFilterActionTypes.CategoryPageRemoveFiltersAction,
      DaffCategoryPageFilterActionTypes.CategoryPageToggleFilterAction,
    ),
    withLatestFrom(this.facade.metadata$),
    map(([action, metadata]) => {
      const filters = this.updateFiltersFromAction(action, metadata.filters);
      return {
        request: {
          ...metadata,
          filter_requests: daffCategoryFiltersToRequests(filters),
        },
        filters,
      };
    }),
    switchMap(({ request, filters }) => concat(
      of(new DaffCategoryPagePreapplyFilters(filters)),
      of(request).pipe(
        debounceTime(debounceFrame, scheduler),
        switchMap(req => this.driver.get(req)),
        switchMap((resp: DaffGetCategoryResponse<V, W>) => [
          new DaffProductGridLoadSuccess(resp.products),
          new DaffCategoryPageLoadSuccess(resp),
        ]),
        catchError((error: DaffError) => of(new DaffCategoryPageLoadFailure(this.errorMatcher(error)))),
      ),
    )),
  );

  private updateFiltersFromAction(action: DaffCategoryPageFilterActions, filters: Dict<DaffCategoryFilter>): Dict<DaffCategoryFilter> {
    switch (action.type) {
      case DaffCategoryPageFilterActionTypes.CategoryPageChangeFiltersAction:
      case DaffCategoryPageFilterActionTypes.CategoryPageReplaceFiltersAction:
        return daffApplyRequestsToFilters(action.filters, daffClearFilters(filters));
      case DaffCategoryPageFilterActionTypes.CategoryPageApplyFiltersAction:
        return daffApplyRequestsToFilters(action.filters, filters);
      case DaffCategoryPageFilterActionTypes.CategoryPageClearFiltersAction:
        return {};
      case DaffCategoryPageFilterActionTypes.CategoryPageRemoveFiltersAction:
        return daffRemoveRequestsFromFilters(action.filters, filters);
      case DaffCategoryPageFilterActionTypes.CategoryPageToggleFilterAction:
        return daffToggleRequestOnFilters(action.filter, filters);
      default:
        return filters;
    }
  }
}
