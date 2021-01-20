import { DaffCompositeCartItem } from '@daffodil/cart';
import { DaffStatefulCartItem } from './stateful-cart-item';
export interface DaffStatefulCompositeCartItem extends DaffCompositeCartItem, DaffStatefulCartItem {
}
