import { MagentoCart } from '../../models/public_api';

export interface MagentoCreateCartResponse {
  createEmptyCart: MagentoCart['id'];
}
