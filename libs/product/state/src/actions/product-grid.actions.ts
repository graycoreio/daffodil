import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

/**
 * Action types for Product Grid Actions.
 */
export enum DaffProductGridActionTypes {
  ProductGridLoadAction = '[@daffodil/product] ProductGrid Load Action',
  ProductGridLoadSuccessAction = '[@daffodil/product] ProductGrid Load Success Action',
  ProductGridLoadFailureAction = '[@daffodil/product] ProductGrid Load Failure Action',
  ProductGridResetAction = '[@daffodil/product] ProductGrid Reset Action'
}

/**
 * Triggers a request for an array of products.
 */
export class DaffProductGridLoad implements Action {
  readonly type = DaffProductGridActionTypes.ProductGridLoadAction;

  constructor() {}
}

/**
 * An action called when a request for of an array of products succeeded.
 *
 * @param payload - An array of Products
 */
export class DaffProductGridLoadSuccess<T extends DaffProduct = DaffProduct> implements Action {
  readonly type = DaffProductGridActionTypes.ProductGridLoadSuccessAction;

  constructor(public payload: T[]) {}
}

/**
 * An action called when a request for an array of products failed.
 *
 * @param payload - An error message
 */
export class DaffProductGridLoadFailure implements Action {
  readonly type = DaffProductGridActionTypes.ProductGridLoadFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * Resets the state of the product grid redux store to its initial state.
 */
export class DaffProductGridReset implements Action {
  readonly type = DaffProductGridActionTypes.ProductGridResetAction;

  constructor() {}
}

export type DaffProductGridActions<T extends DaffProduct = DaffProduct> =
    | DaffProductGridLoad
    | DaffProductGridLoadSuccess<T>
    | DaffProductGridLoadFailure
    | DaffProductGridReset;
