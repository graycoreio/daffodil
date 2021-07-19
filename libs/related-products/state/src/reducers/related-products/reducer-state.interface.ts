import { ID } from '@daffodil/core';

/**
 * An interface describing related product redux state.
 * This state describes the related products for the current product that is loaded for a product page.
 */
export interface DaffRelatedProductsReducerState {
	/**
	 * The id of the current product.
	 */
  relatedProductIds: ID[];
}
