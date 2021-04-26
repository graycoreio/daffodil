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
import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import { DaffProductGridLoadSuccess } from '@daffodil/product/state';

import {
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoad,
  DaffCategoryPageLoadFailure,
  DaffCategoryPageActionTypes,
  DaffCategoryPageChangePageSize,
  DaffCategoryPageChangeCurrentPage,
  DaffCategoryPageChangeSortingOption,
  DaffCategoryPageLoadByUri,
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
  ){}

	private categorySelectors = getDaffCategorySelectors<V, W>();

  @Effect()
  loadCategoryPage$: Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryPageActionTypes.CategoryPageLoadAction),
    switchMap((action: DaffCategoryPageLoad) => this.processCategoryGetRequest(action.request)),
  );

  @Effect()
  loadCategoryPageByUri$: Observable<any> = this.actions$.pipe(
    ofType<DaffCategoryPageLoadByUri>(DaffCategoryPageActionTypes.CategoryPageLoadByUriAction),
    switchMap(action => this.driver.getByUri(action.request).pipe(
      switchMap((resp: DaffGetCategoryResponse<V, W>) => [
        new DaffProductGridLoadSuccess(resp.products),
        new DaffCategoryPageLoadSuccess(resp),
      ]),
      catchError((error: DaffError) => of(new DaffCategoryPageLoadFailure(this.errorMatcher(error)))),
    )),
  );

  @Effect()
  changeCategoryPageSize$: Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryPageActionTypes.CategoryPageChangeSizeAction),
    withLatestFrom(
      this.store.pipe(select(this.categorySelectors.selectCategoryPageMetadata)),
    ),
    switchMap(([action, metadata]: [DaffCategoryPageChangePageSize, DaffCategoryPageMetadata]) => this.processCategoryGetRequest({
      ...metadata,
      kind: DaffCategoryRequestKind.ID,
      page_size: action.pageSize,
    })),
  );

  @Effect()
  changeCategoryCurrentPage$: Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryPageActionTypes.CategoryPageChangeCurrentPageAction),
    withLatestFrom(
      this.store.pipe(select(this.categorySelectors.selectCategoryPageMetadata)),
    ),
    switchMap(([action, metadata]: [DaffCategoryPageChangeCurrentPage, DaffCategoryPageMetadata]) => this.processCategoryGetRequest({
      ...metadata,
      kind: DaffCategoryRequestKind.ID,
      current_page: action.currentPage,
    })),
  );

  @Effect()
  changeCategorySort$: Observable<any> = this.actions$.pipe(
    ofType(DaffCategoryPageActionTypes.CategoryPageChangeSortingOptionAction),
    withLatestFrom(
      this.store.pipe(select(this.categorySelectors.selectCategoryPageMetadata)),
    ),
    switchMap(([action, metadata]: [DaffCategoryPageChangeSortingOption, DaffCategoryPageMetadata]) => this.processCategoryGetRequest({
      ...metadata,
      kind: DaffCategoryRequestKind.ID,
      applied_sort_option: action.sort.option,
      applied_sort_direction: action.sort.direction,
    })),
  );

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
