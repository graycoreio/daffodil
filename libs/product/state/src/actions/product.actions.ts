import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import { DaffProductDriverResponse } from '@daffodil/product/driver';

/**
 * Action types for Product Actions.
 */
export enum DaffProductActionTypes {
  ProductLoadAction = '[@daffodil/product] Product Load Action',
  ProductLoadSuccessAction = '[@daffodil/product] Product Load Success Action',
  ProductLoadFailureAction = '[@daffodil/product] Product Load Failure Action',
}

/**
 * Triggers a request for a Product.
 *
 * @param payload - Id of requested Product
 */
export class DaffProductLoad implements Action {
  readonly type = DaffProductActionTypes.ProductLoadAction;

  constructor(public payload: string) {}
}

/**
 * An action called when a request for a Product succeeded.
 *
 * @param payload - A Product
 */
export class DaffProductLoadSuccess<T extends DaffProduct = DaffProduct> implements Action {
  readonly type = DaffProductActionTypes.ProductLoadSuccessAction;

  constructor(public payload: DaffProductDriverResponse<T>) {}
}

/**
 * An action called when a request for a Product failed.
 *
 * @param payload - An error message
 */
export class DaffProductLoadFailure implements Action {
  readonly type = DaffProductActionTypes.ProductLoadFailureAction;

  constructor(public payload: DaffStateError) {}
}

export type DaffProductActions<T extends DaffProduct = DaffProduct> =
  | DaffProductLoad
  | DaffProductLoadSuccess<T>
  | DaffProductLoadFailure;
