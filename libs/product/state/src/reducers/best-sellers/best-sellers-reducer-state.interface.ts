import { DaffStateError } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

export interface DaffBestSellersReducerState {
  productIds: DaffProduct['id'][];
  loading: boolean;
  errors: DaffStateError[];
}
