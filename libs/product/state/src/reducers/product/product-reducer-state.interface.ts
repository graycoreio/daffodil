import { DaffOperationState } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

/**
 * An interface describing product redux state. This state describes the current product that is loaded for a product page.
 */
export interface DaffProductReducerState extends DaffOperationState {
  /**
   * The id of the current product.
   */
  currentProductId: DaffProduct['id'];
  /**
   * The quantity chosen for the current product.
   *
   * @deprecated Deprecated in version 0.95.0. Will be removed in version 0.98.0.
   */
  qty: number;
}
