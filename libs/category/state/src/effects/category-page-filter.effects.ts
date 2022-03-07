import { Location } from '@angular/common';
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
  EMPTY,
} from 'rxjs';
import { AsyncScheduler } from 'rxjs/internal/scheduler/AsyncScheduler';
import {
  switchMap,
  catchError,
  map,
  throttleTime,
  withLatestFrom,
} from 'rxjs/operators';

import {
  DaffGenericCategory,
  DaffGetCategoryResponse,
  DAFF_CATEGORY_ERROR_MATCHER,
  daffCategoryFiltersToRequests,
  DaffCategoryRequestKind,
  DaffCategoryIdRequest,
  DaffCategoryFilterType,
  DaffCategoryFilter,
  DaffCategoryFilterRequest,
} from '@daffodil/category';
import { DaffCategoryPageMetadata } from '@daffodil/category';
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
  DaffCategoryPageApplyFilters,
} from '../actions/category-page-filter.actions';
import {
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoadFailure,
  DaffCategoryPageActionTypes,
} from '../actions/category-page.actions';
import { DaffCategoryFacade } from '../facades/category.facade';

/**
 * IE compatible query params getter.
 */
// TODO: replace with URLSearchParams when IE support is dropped
const getQueryParams = (path: string): Record<string, string> => {
  const params = {};
  path.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    (_, key, value) => params[key] = decodeURIComponent(value),
  );
  return params;
};

const getFilterRequestsForQueryParams = (queryParams: Record<string, string>, filters: Dict<DaffCategoryFilter>): DaffCategoryFilterRequest[] =>
  Object.keys(queryParams).filter(queryParam =>
  // TODO: refactor when IE support is dropped
    filters[queryParam] && Object.keys(filters[queryParam].options).filter(optionId => optionId === queryParams[queryParam] && !filters[queryParam].options[optionId].applied).length > 0,
  ).map(queryParam => ({
    type: DaffCategoryFilterType.Equal,
    name: queryParam,
    value: [queryParams[queryParam]],
  }));

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
    private location: Location,
  ) {}

  /**
   * Applies category filters from query params.
   * Currently only works for equal filters.
   *
   * Checks if the filters and options exist and are unapplied before applying them.
   */
  @Effect()
  applyFiltersFromQueryParams$: Observable<typeof EMPTY | DaffCategoryPageApplyFilters> = this.actions$.pipe(
    ofType(DaffCategoryPageActionTypes.CategoryPageLoadSuccessAction),
    switchMap((action: DaffCategoryPageLoadSuccess<V, W>) => {
      const queryParams = getQueryParams(this.location.path());
      const filterRequests = getFilterRequestsForQueryParams(queryParams, action.response.categoryPageMetadata.filters);

      return filterRequests.length > 0
        ? of(new DaffCategoryPageApplyFilters(filterRequests))
        : EMPTY;
    }),
  );

  /**
   * Updates the filters applied to the category page. It will take the currently
   * applied filters from state, form them into a request, and attempt to apply
   * that request to a backend service.
   *
   * @param throttleWindow the amount of time to delay when apply/removing filters
   * in a sequence.
   */
  @Effect()
  updateFilters$: (throttleWindow: number, scheduler: AsyncScheduler) => Observable<
    DaffProductGridLoadSuccess
    | DaffCategoryPageLoadSuccess
    | DaffCategoryPageLoadFailure
  > = (throttleWindow = 300, scheduler = asyncScheduler) => this.actions$.pipe(
    ofType(
      DaffCategoryPageFilterActionTypes.CategoryPageChangeFiltersAction,
      DaffCategoryPageFilterActionTypes.CategoryPageReplaceFiltersAction,
      DaffCategoryPageFilterActionTypes.CategoryPageApplyFiltersAction,
      DaffCategoryPageFilterActionTypes.CategoryPageClearFiltersAction,
      DaffCategoryPageFilterActionTypes.CategoryPageRemoveFiltersAction,
      DaffCategoryPageFilterActionTypes.CategoryPageToggleFilterAction,
    ),
    withLatestFrom(this.facade.metadata$),
    map((
      [action, metadata]: [DaffCategoryPageFilterActions, DaffCategoryPageMetadata],
    ): DaffCategoryIdRequest => ({
      kind: DaffCategoryRequestKind.ID,
      id: metadata.id,
      filter_requests: daffCategoryFiltersToRequests(metadata.filters),
      applied_sort_option: metadata.applied_sort_option,
      applied_sort_direction: metadata.applied_sort_direction,
      current_page: metadata.current_page,
      page_size: metadata.page_size,
    })),
    throttleTime(throttleWindow, scheduler, { leading: true, trailing: true }),
    switchMap(payload => this.driver.get(payload).pipe(
      switchMap((resp: DaffGetCategoryResponse<V, W>) => [
        new DaffProductGridLoadSuccess(resp.products),
        new DaffCategoryPageLoadSuccess(resp),
      ]),
      catchError((error: DaffError) => of(new DaffCategoryPageLoadFailure(this.errorMatcher(error)))),
    )),
  );
}
