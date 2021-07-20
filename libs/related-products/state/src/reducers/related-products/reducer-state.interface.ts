import { ID } from '@daffodil/core';

/**
 * An interface describing related product redux state.
 * Stores the related product IDs for the current product that is loaded for a product page.
 */
export interface DaffRelatedProductsReducerState {
	/**
	 * The related product IDs.
	 */
  relatedProductIds: ID[];
}
