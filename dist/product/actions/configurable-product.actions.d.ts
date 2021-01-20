import { Action } from '@ngrx/store';
import { DaffConfigurableProduct } from '../models/configurable-product';
/**
 * Action types for Configurable Product Actions.
 */
export declare enum DaffConfigurableProductActionTypes {
    ConfigurableProductApplyAttributeAction = "[Configurable Product] Configurable Product Apply Attribute Action",
    ConfigurableProductRemoveAttributeAction = "[Configurable Product] Configurable Product Remove Attribute Action",
    ConfigurableProductToggleAttributeAction = "[Configurable Product] Configurable Product Toggle Attribute Action"
}
/**
 * Applies an attribute to a particular configurable product.
 *
 * @param id - Id of the Configurable Product
 * @param attributeId - Id of the attribute to be applied
 * @param attributeValue - Value of the attribute to be applied
 */
export declare class DaffConfigurableProductApplyAttribute<T extends DaffConfigurableProduct> implements Action {
    id: T['id'];
    attributeId: string;
    attributeValue: string;
    readonly type = DaffConfigurableProductActionTypes.ConfigurableProductApplyAttributeAction;
    constructor(id: T['id'], attributeId: string, attributeValue: string);
}
/**
 * Removes an applied attribute from a particular configurable product.
 *
 * @param id - Id of the Configurable Product
 * @param attributeId - Id of the attribute to be removed
 */
export declare class DaffConfigurableProductRemoveAttribute<T extends DaffConfigurableProduct> implements Action {
    id: T['id'];
    attributeId: string;
    readonly type = DaffConfigurableProductActionTypes.ConfigurableProductRemoveAttributeAction;
    constructor(id: T['id'], attributeId: string);
}
/**
 * Toggles an attribute of a particular configurable product. If the attribute type of the configurable product already has
 * a different value than the one provided in the action, the attribute value in state will be overwritten by the value provided
 * in the action.
 *
 * @param id - Id of the Configurable Product
 * @param attributeId - Id of the attribute to be toggled
 * @param attributeValue - Value of the attribute to be toggled
 */
export declare class DaffConfigurableProductToggleAttribute<T extends DaffConfigurableProduct> implements Action {
    id: T['id'];
    attributeId: string;
    attributeValue: string;
    readonly type = DaffConfigurableProductActionTypes.ConfigurableProductToggleAttributeAction;
    constructor(id: T['id'], attributeId: string, attributeValue: string);
}
export declare type DaffConfigurableProductActions<T extends DaffConfigurableProduct = DaffConfigurableProduct> = DaffConfigurableProductApplyAttribute<T> | DaffConfigurableProductRemoveAttribute<T> | DaffConfigurableProductToggleAttribute<T>;
