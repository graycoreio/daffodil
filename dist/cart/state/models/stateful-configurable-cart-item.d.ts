import { DaffConfigurableCartItem } from '@daffodil/cart';
import { DaffStatefulCartItem } from './stateful-cart-item';
export interface DaffStatefulConfigurableCartItem extends DaffConfigurableCartItem, DaffStatefulCartItem {
}
