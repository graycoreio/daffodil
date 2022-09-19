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
} from 'rxjs/operators';

import {
  DaffGenericCategory,
  DaffGetCategoryResponse,
  DAFF_CATEGORY_ERROR_MATCHER,
  DaffCategoryRequestKind,
  DaffCategoryIdRequest,
  DaffCategoryPageMetadata,
} from '@daffodil/category';
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
  DaffCategoryPageChangeCurrentPage,
  DaffCategoryPageChangePageSize,
  DaffCategoryPageChangeSortingOption,
  DaffCategoryPageProductCollectionActionTypes,
} from '../actions/category-page-filter.actions';
import {
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoad,
  DaffCategoryPageLoadFailure,
  DaffCategoryPageActionTypes,
  DaffCategoryPageLoadByUrl,
} from '../actions/category-page.actions';
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
  ) {}

  private categorySelectors = getDaffCategorySelectors<V, W>();

  loadCategoryPage$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(DaffCategoryPageActionTypes.CategoryPageLoadAction),
    switchMap((action: DaffCategoryPageLoad) => this.processCategoryGetRequest(action.request)),
  ));


  loadCategoryPageByUrl$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(DaffCategoryPageActionTypes.CategoryPageLoadByUrlAction),
    switchMap((action: DaffCategoryPageLoadByUrl) => this.driver.getByUrl(action.request).pipe(
      switchMap((resp: DaffGetCategoryResponse<V, W>) => [
        new DaffProductGridLoadSuccess(resp.products),
        new DaffCategoryPageLoadSuccess(resp),
      ]),
      catchError((error: DaffError) => of(new DaffCategoryPageLoadFailure(this.errorMatcher(error)))),
    )),
  ));


  changeCategoryPageSize$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeSizeAction),
    withLatestFrom(
      this.store.pipe(select(this.categorySelectors.selectCollectionMetadata)),
    ),
    switchMap(([action, metadata]: [DaffCategoryPageChangePageSize, DaffCategoryPageMetadata]) => this.processCategoryGetRequest({
      ...metadata,
      kind: DaffCategoryRequestKind.ID,
      filterRequests: daffFiltersToRequests(metadata.filters),
      pageSize: action.pageSize,
    })),
  ));


  changeCategoryCurrentPage$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeCurrentPageAction),
    withLatestFrom(
      this.store.pipe(select(this.categorySelectors.selectCollectionMetadata)),
    ),
    switchMap(([action, metadata]: [DaffCategoryPageChangeCurrentPage, DaffCategoryPageMetadata]) => this.processCategoryGetRequest({
      ...metadata,
      kind: DaffCategoryRequestKind.ID,
      filterRequests: daffFiltersToRequests(metadata.filters),
      currentPage: action.currentPage,
    })),
  ));


  changeCategorySort$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeSortingOptionAction),
    withLatestFrom(
      this.store.pipe(select(this.categorySelectors.selectCollectionMetadata)),
    ),
    switchMap(([action, metadata]: [DaffCategoryPageChangeSortingOption, DaffCategoryPageMetadata]) => this.processCategoryGetRequest({
      ...metadata,
      kind: DaffCategoryRequestKind.ID,
      filterRequests: daffFiltersToRequests(metadata.filters),
      appliedSortOption: action.sort.option,
      appliedSortDirection: action.sort.direction,
    })),
  ));

  private processCategoryGetRequest(payload: DaffCategoryIdRequest) {
    return this.driver.get(payload).pipe(
      switchMap((resp: DaffGetCategoryResponse<V, W>) => [
        new DaffProductGridLoadSuccess(resp.products),
        new DaffCategoryPageLoadSuccess(resp),
      ]),
      catchError((error: DaffError) => of(new DaffCategoryPageLoadFailure(this.errorMatcher(error)))),
    );
  }
}
