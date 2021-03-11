import { Action } from '@ngrx/store';

import {
  DaffCategoryRequest,
  DaffGenericCategory,
  DaffCategory,
  DaffCategoryPageConfigurationState,
  DaffGetCategoryResponse,
} from '@daffodil/category';
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
export class DaffCategoryLoad<T extends DaffCategoryRequest = DaffCategoryRequest> implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadAction;

  constructor(public request: T) { }
}

/**
 * An action triggered upon a successful category request.
 *
 * @param response - DaffGetCategoryResponse object
 */
export class DaffCategoryLoadSuccess<
  T extends DaffCategoryRequest = DaffCategoryRequest,
  V extends DaffGenericCategory<V> = DaffCategory,
  U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>,
  W extends DaffProduct = DaffProduct
> implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadSuccessAction;

  constructor(public response: DaffGetCategoryResponse<T, V, U, W>) { }
}

/**
 * An action triggered upon a failed category request.
 *
 * @param errorMessage - an error message
 */
export class DaffCategoryLoadFailure implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadFailureAction;

  constructor(public errorMessage: string) { }
}

export type DaffCategoryActions<
  T extends DaffCategoryRequest = DaffCategoryRequest,
  U extends DaffGenericCategory<U> = DaffCategory,
  V extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>,
  W extends DaffProduct = DaffProduct
> =
  | DaffCategoryLoad<T>
  | DaffCategoryLoadSuccess<T, U, V, W>
  | DaffCategoryLoadFailure;
