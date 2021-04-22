import { Action } from '@ngrx/store';

import {
  DaffGenericCategory,
  DaffCategory,
  DaffGetCategoryResponse,
  DaffCategoryIdRequest,
} from '@daffodil/category';
import { DaffStateError } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

export enum DaffCategoryActionTypes {
  CategoryLoadAction = '[Daff-Category] Category Load Action',
  CategoryLoadSuccessAction = '[Daff-Category] Category Load Success Action',
  CategoryLoadFailureAction = '[Daff-Category] Category Load Failure Action'
}

/**
 * An action triggered to initialize a category load request.
 *
 * @param request - DaffCategoryRequest object
 */
export class DaffCategoryLoad implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadAction;

  constructor(public request: DaffCategoryIdRequest) { }
}

/**
 * An action triggered upon a successful category request.
 *
 * @param response - DaffGetCategoryResponse object
 */
export class DaffCategoryLoadSuccess<
  V extends DaffGenericCategory<V> = DaffCategory,
  W extends DaffProduct = DaffProduct
  > implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadSuccessAction;

  constructor(public response: DaffGetCategoryResponse<V, W>) { }
}

/**
 * An action triggered upon a failed category request.
 *
 * @param errorMessage - an error message
 */
export class DaffCategoryLoadFailure implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadFailureAction;

  constructor(public errorMessage: DaffStateError) { }
}

export type DaffCategoryActions<
  U extends DaffGenericCategory<U> = DaffCategory,
  W extends DaffProduct = DaffProduct
  > =
  | DaffCategoryLoad
  | DaffCategoryLoadSuccess<U, W>
  | DaffCategoryLoadFailure;
