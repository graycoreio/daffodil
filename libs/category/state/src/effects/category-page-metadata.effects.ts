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
  DaffCategoryRequestKind,
  DaffCategoryIdRequest,
} from '@daffodil/category';
import { DaffCategoryPageMetadata } from '@daffodil/category';
import {
  DaffCategoryDriver,
  DaffCategoryServiceInterface,
} from '@daffodil/category/driver';
import {
  DaffError,
  daffFiltersToRequests,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import { DaffProductGridLoadSuccess } from '@daffodil/product/state';

import {
  DaffCategoryPageProductCollectionActionTypes,
  DaffCategoryPageProductCollectionActions,
} from '../actions/category-page-filter.actions';
import {
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoadFailure,
} from '../actions/category-page.actions';
import { DaffCategoryProductCollectionFacade } from '../facades/public_api';
import { DAFF_CATEGORY_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffCategoryPageMetadataEffects<
  V extends DaffGenericCategory<V>,
  W extends DaffProduct
> {

  constructor(
    private actions$: Actions,
    @Inject(DaffCategoryDriver) private driver: DaffCategoryServiceInterface<V, W>,
    @Inject(DAFF_CATEGORY_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    private facade: DaffCategoryProductCollectionFacade,
  ){}

  /**
   * Updates the filters applied to the category page. It will take the currently
   * applied filters from state, form them into a request, and attempt to apply
   * that request to a backend service.
   *
   * @param throttleWindow the amount of time to delay when apply/removing filters
   * in a sequence.
   */

  update$: (throttleWindow: number, scheduler: AsyncScheduler) => Observable<
  DaffProductGridLoadSuccess
  | DaffCategoryPageLoadSuccess
  | DaffCategoryPageLoadFailure
  > = createEffect(() => (throttleWindow = 300, scheduler = asyncScheduler) => this.actions$.pipe(
      ofType(
        DaffCategoryPageProductCollectionActionTypes.CategoryPageReplaceFiltersAction,
        DaffCategoryPageProductCollectionActionTypes.CategoryPageApplyFiltersAction,
        DaffCategoryPageProductCollectionActionTypes.CategoryPageClearFiltersAction,
        DaffCategoryPageProductCollectionActionTypes.CategoryPageRemoveFiltersAction,
        DaffCategoryPageProductCollectionActionTypes.CategoryPageToggleFilterAction,
        DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeSizeAction,
        DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeCurrentPageAction,
        DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeSortingOptionAction,
      ),
      withLatestFrom(this.facade.metadata$),
      map((
        [action, metadata]: [DaffCategoryPageProductCollectionActions, DaffCategoryPageMetadata],
      ): DaffCategoryIdRequest => ({
        kind: DaffCategoryRequestKind.ID,
        id: metadata.id,
        filterRequests: daffFiltersToRequests(metadata.filters),
        appliedSortOption: metadata.appliedSortOption,
        appliedSortDirection: metadata.appliedSortDirection,
        currentPage: metadata.currentPage,
        pageSize: metadata.pageSize,
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
