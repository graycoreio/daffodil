import { Action } from '@ngrx/store';
import { DaffCompositeProduct } from '../models/composite-product';
import { DaffCompositeProductItem, DaffCompositeProductItemOption } from '../models/composite-product-item';
/**
 * Action types for Composite Product Actions.
 */
export declare enum DaffCompositeProductActionTypes {
    CompositeProductApplyOptionAction = "[Composite Product] Composite Product Apply Option Action"
}
/**
 * Applies a product option to a particular composite product.
 *
 * @param id - Id of the Composite Product
 * @param itemId - Id of the product item.
 * @param optionId - Id of the option of the product item that is chosen.
 */
export declare class DaffCompositeProductApplyOption<T extends DaffCompositeProduct> implements Action {
    id: T['id'];
    itemId: DaffCompositeProductItem['id'];
    optionId: DaffCompositeProductItemOption['id'];
    qty?: number;
    readonly type = DaffCompositeProductActionTypes.CompositeProductApplyOptionAction;
    constructor(id: T['id'], itemId: DaffCompositeProductItem['id'], optionId: DaffCompositeProductItemOption['id'], qty?: number);
}
export declare type DaffCompositeProductActions<T extends DaffCompositeProduct = DaffCompositeProduct> = DaffCompositeProductApplyOption<T>;
