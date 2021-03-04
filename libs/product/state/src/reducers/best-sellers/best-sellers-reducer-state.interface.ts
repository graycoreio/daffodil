import { DaffProduct } from '@daffodil/product';

export interface DaffBestSellersReducerState {
  productIds: DaffProduct['id'][];
  loading: boolean;
  errors: string[];
}
