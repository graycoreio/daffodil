import { Action } from '@ngrx/store';

import {
  DaffCategoryRequest,
  DaffGenericCategory,
  DaffCategory,
  DaffGetCategoryResponse,
  DaffCategoryIdRequest,
  DaffCategoryUrlRequest,
} from '@daffodil/category';
import { DaffStateError } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

/**
 * The possible types of category page actions.
 */
export enum DaffCategoryPageActionTypes {
  CategoryPageLoadAction = '[@daffodil/category] Category Page Load Action',
  CategoryPageLoadByUrlAction = '[@daffodil/category] Category Page Load By URL Action',
  CategoryPageLoadSuccessAction = '[@daffodil/category] Category Page Load Success Action',
  CategoryPageLoadFailureAction = '[@daffodil/category] Category Page Load Failure Action',
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
 * An action triggered to initialize a category page load request.
 * This is intended to be used for loading full category pages.
 * Queries the category by URL.
 *
 * @param request - DaffCategoryRequest object
 */
export class DaffCategoryPageLoadByUrl implements Action {
  readonly type = DaffCategoryPageActionTypes.CategoryPageLoadByUrlAction;

  constructor(public request: DaffCategoryUrlRequest) { }
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


export type DaffCategoryPageActions<
  U extends DaffGenericCategory<U> = DaffCategory,
  W extends DaffProduct = DaffProduct
> =
  | DaffCategoryPageLoad
  | DaffCategoryPageLoadByUrl
  | DaffCategoryPageLoadSuccess<U, W>
  | DaffCategoryPageLoadFailure;
