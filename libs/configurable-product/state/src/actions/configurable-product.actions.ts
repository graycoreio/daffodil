import { Action } from '@ngrx/store';

import { DaffConfigurableProduct } from '@daffodil/product';

/**
 * Action types for Configurable Product Actions.
 */
export enum DaffConfigurableProductActionTypes {
	ConfigurableProductApplyAttributeAction = '[Configurable Product] Configurable Product Apply Attribute Action',
	ConfigurableProductRemoveAttributeAction = '[Configurable Product] Configurable Product Remove Attribute Action',
	ConfigurableProductToggleAttributeAction = '[Configurable Product] Configurable Product Toggle Attribute Action',
}

/**
 * Applies an attribute to a particular configurable product.
 *
 * @param id - Id of the Configurable Product
 * @param attributeId - Id of the attribute to be applied
 * @param attributeValue - Value of the attribute to be applied
 */
export class DaffConfigurableProductApplyAttribute<T extends DaffConfigurableProduct> implements Action {
  readonly type = DaffConfigurableProductActionTypes.ConfigurableProductApplyAttributeAction;

  constructor(public id: T['id'], public attributeId: string, public attributeValue: string) {}
}

/**
 * Removes an applied attribute from a particular configurable product.
 *
 * @param id - Id of the Configurable Product
 * @param attributeId - Id of the attribute to be removed
 */
export class DaffConfigurableProductRemoveAttribute<T extends DaffConfigurableProduct> implements Action {
  readonly type = DaffConfigurableProductActionTypes.ConfigurableProductRemoveAttributeAction;

  constructor(public id: T['id'], public attributeId: string) {}
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
export class DaffConfigurableProductToggleAttribute<T extends DaffConfigurableProduct> implements Action {
  readonly type = DaffConfigurableProductActionTypes.ConfigurableProductToggleAttributeAction;

  constructor(public id: T['id'], public attributeId: string, public attributeValue: string) {}
}

export type DaffConfigurableProductActions<T extends DaffConfigurableProduct = DaffConfigurableProduct> =
    | DaffConfigurableProductApplyAttribute<T>
    | DaffConfigurableProductRemoveAttribute<T>
    | DaffConfigurableProductToggleAttribute<T>;
