import { DaffProduct } from '../../models/product';

/**
 * Interface for product state.
 */
export interface DaffProductReducerState {
  selectedProductId: DaffProduct['id'],
  qty: number,
  loading: boolean,
  errors: string[]
}
