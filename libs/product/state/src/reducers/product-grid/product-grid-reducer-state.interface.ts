import { DaffStateError } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

/**
 * Interface for product grid redux state.
 */
export interface DaffProductGridReducerState<T extends DaffProduct = DaffProduct> {
  /**
   * The array of products that have already been loaded.
   */
  products: T[];
  /**
   * Whether a grid of products is loading.
   */
  loading: boolean;
  /**
   * Errors associated with loading a grid of products.
   */
  errors: DaffStateError[];
}
