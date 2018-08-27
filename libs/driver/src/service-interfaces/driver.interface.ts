import { DaffCartServiceInterface } from './cart/cart-service.interface';
import { DaffProductServiceInterface } from './product/product-service.interface';

export interface DaffDriverInterface {
  productService: DaffProductServiceInterface;
  cartService: DaffCartServiceInterface;
}
