import { Action } from '@ngrx/store';

import {
  DaffCategoryRequest,
  DaffGenericCategory,
  DaffCategory,
  DaffGetCategoryResponse,
  DaffCategoryIdRequest,
} from '@daffodil/category';
import { DaffStateError } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

export enum DaffCategoryPageActionTypes {
  CategoryPageLoadAction = '[@daffodil/category] Category Page Load Action',
  CategoryPageLoadSuccessAction = '[@daffodil/category] Category Page Load Success Action',
  CategoryPageLoadFailureAction = '[@daffodil/category] Category Page Load Failure Action',
  CategoryPageChangeSizeAction = '[@daffodil/category] Category Page Change Size Action',
  CategoryPageChangeCurrentPageAction = '[@daffodil/category] Category Page Change Current Page Action',
  CategoryPageChangeSortingOptionAction = '[@daffodil/category] Category Page Change Sorting Option Action',
}

/**
 * An action triggered to initialize a category page load request.
 * This is intended to be used for loading full category pages.
 * Queries the category by ID.
 *
 * @param request - DaffCategoryRequest object
 */
export class DaffCategoryPageLoad implements Action {
  readonly type = DaffCategoryPageActionTypes.CategoryPageLoadAction;

  constructor(public request: DaffCategoryIdRequest) { }
}

/**
 * An action triggered upon a successful category page request.
 *
 * @param response - DaffGetCategoryResponse object
 */
export class DaffCategoryPageLoadSuccess<
  V extends DaffGenericCategory<V> = DaffCategory,
  W extends DaffProduct = DaffProduct
  > implements Action {
  readonly type = DaffCategoryPageActionTypes.CategoryPageLoadSuccessAction;

  constructor(public response: DaffGetCategoryResponse<V, W>) { }
}

/**
 * An action triggered upon a failed category page request.
 *
 * @param errorMessage - an error message
 */
export class DaffCategoryPageLoadFailure implements Action {
  readonly type = DaffCategoryPageActionTypes.CategoryPageLoadFailureAction;

  constructor(public errorMessage: DaffStateError) { }
}

/**
 * An action for changing the number of products shown on each page for the selected category.
 *
 * @param pageSize - The number of products per page.
 */
export class DaffCategoryPageChangePageSize implements Action {
  readonly type = DaffCategoryPageActionTypes.CategoryPageChangeSizeAction;

  constructor(public pageSize: number) { }
}

/**
 * An action for changing the current page of products for the selected category.
 *
 * @param currentPage - The current page of products for the selected category.
 */
export class DaffCategoryPageChangeCurrentPage implements Action {
  readonly type = DaffCategoryPageActionTypes.CategoryPageChangeCurrentPageAction;

  constructor(public currentPage: number) { }
}

/**
 * An action for changing the sorting option for the selected category.
 *
 * @param sort - The sort option to be applied.
 */
export class DaffCategoryPageChangeSortingOption implements Action {
  readonly type = DaffCategoryPageActionTypes.CategoryPageChangeSortingOptionAction;

  constructor(
    public sort: {
      option: DaffCategoryRequest['applied_sort_option'];
      direction: DaffCategoryRequest['applied_sort_direction'];
    },
  ) { }
}

export type DaffCategoryPageActions<
  U extends DaffGenericCategory<U> = DaffCategory,
  W extends DaffProduct = DaffProduct
  > =
  | DaffCategoryPageLoad
  | DaffCategoryPageLoadSuccess<U, W>
  | DaffCategoryPageLoadFailure
  | DaffCategoryPageChangePageSize
  | DaffCategoryPageChangeCurrentPage
  | DaffCategoryPageChangeSortingOption;
