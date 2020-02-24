import { DaffProduct } from '@daffodil/product';

export interface DaffCartItemInput {
  productId: DaffProduct['id'];
  qty: number;
}
