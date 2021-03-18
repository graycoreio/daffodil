import { DaffStateError } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

/**
 * Interface for product grid state.
 */
export interface DaffProductGridReducerState<T extends DaffProduct = DaffProduct> {
  products: T[];
  loading: boolean;
  errors: DaffStateError[];
}
