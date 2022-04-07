import { ID } from '@daffodil/core';

/**
 * An interface describing upsell product redux state.
 * Stores the upsell product IDs for the current product that is loaded for a product page.
 */
export interface DaffUpsellProductsReducerState {
  /**
   * The upsell product IDs.
   */
  upsellProductIds: ID[];
}
