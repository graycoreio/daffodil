import { Action } from '@ngrx/store';

import {
  DaffCompositeProduct,
  DaffCompositeProductItem,
  DaffCompositeProductItemOption,
} from '@daffodil/product';

/**
 * Action types for Composite Product Actions.
 */
export enum DaffCompositeProductActionTypes {
	CompositeProductApplyOptionAction = '[Composite Product] Composite Product Apply Option Action'
}

/**
 * Applies a product option to a particular composite product.
 *
 * @param id - Id of the Composite Product
 * @param itemId - Id of the product item.
 * @param optionId - Id of the option of the product item that is chosen.
 */
export class DaffCompositeProductApplyOption<T extends DaffCompositeProduct> implements Action {
  readonly type = DaffCompositeProductActionTypes.CompositeProductApplyOptionAction;

  constructor(public id: T['id'], public itemId: DaffCompositeProductItem['id'], public optionId: DaffCompositeProductItemOption['id'], public qty?: number) {}
}

export type DaffCompositeProductActions<T extends DaffCompositeProduct = DaffCompositeProduct> =
	| DaffCompositeProductApplyOption<T>;
