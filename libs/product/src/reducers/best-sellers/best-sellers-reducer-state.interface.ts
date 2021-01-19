import { DaffProduct } from '../../models/product';

export interface DaffBestSellersReducerState {
  productIds: DaffProduct['id'][],
  loading: boolean,
  errors: string[]
}
