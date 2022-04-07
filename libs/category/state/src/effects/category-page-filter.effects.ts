import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  of,
  Observable,
  asyncScheduler,
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
} from '@daffodil/category';
import { DaffCategoryPageMetadata } from '@daffodil/category';
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
   * that request to a backend service.
   *
   * @param throttleWindow the amount of time to delay when apply/removing filters
   * in a sequence.
   */

  updateFilters$: (throttleWindow: number, scheduler: AsyncScheduler) => Observable<
  DaffProductGridLoadSuccess
  | DaffCategoryPageLoadSuccess
  | DaffCategoryPageLoadFailure
  > = createEffect(() => (throttleWindow = 300, scheduler = asyncScheduler) => this.actions$.pipe(
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
  ));
}
