import { DaffCartItem } from './cart-item';

/**
 * A cart item for a configurable product.
 */
export interface DaffConfigurableCartItem extends DaffCartItem {
  /**
   * A list of the chosen configurable attributes.
   */
  attributes: DaffConfigurableCartItemAttribute[];
}

/**
 * Defines a selected attribute for a configurable cart item.
 */
export interface DaffConfigurableCartItemAttribute {
  /**
   * A human-readable label for the attribute.
   */
  attribute_label: string;
  /**
   * A human-readable label for the particular value chosen for the attribute.
   */
  value_label: string;
}
