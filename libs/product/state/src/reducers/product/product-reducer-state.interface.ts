import { DaffStateError } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

/**
 * An interface describing product redux state. This state describes the product that is loaded for a product page.
 */
export interface DaffProductReducerState {
	/**
	 * The id of the currently selected product.
	 */
  selectedProductId: DaffProduct['id'];
	/**
	 * The quantity chosen for the selected product.
	 */
  qty: number;
	/**
	 * Whether the product page is loading.
	 */
  loading: boolean;
	/**
	 * Errors associated with loading a product page.
	 */
  errors: DaffStateError[];
}
