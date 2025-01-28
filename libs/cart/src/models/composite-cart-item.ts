import {
  DaffIdentifiable,
  ID,
} from '@daffodil/core';

import { DaffCartItem } from './cart-item';


/**
 * A cart item for a composite product.
 */
export interface DaffCompositeCartItem extends DaffCartItem {
  /**
   * A list of composite cart item options.
   */
  options: DaffCompositeCartItemOption[];
}

/**
 * A composite product option in a cart item.
 */
export interface DaffCompositeCartItemOption extends DaffIdentifiable {
  /**
   * A human-readable label for the option.
   */
  option_label: string;
  /**
   * A human-readable label for the particular value chosen for the option.
   */
  value_label: string;
}
