import { DaffProduct } from '../../models/product';

/**
 * Interface for product grid state.
 */
export interface DaffProductGridReducerState {
  products: DaffProduct[],
  loading: boolean,
  errors: string[]
}
