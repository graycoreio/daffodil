import {
  DaffProductImage,
  DaffProduct
} from '@daffodil/product';
import { DaffCartItemInputType } from './cart-item-input';

export interface DaffCartItem {
	item_id: number | string;
	/**
	 * The state of the cart item intended to enhance the client side UX like indicating when a cart
	 * item was recently added/updated. For states that indicate the completion of some process, the state is given 
	 * a decay time based on the DaffCartItemStateDebounceTime injection token. For example when a cart item is
	 * added to the cart, the state of that item will be "New" for a designated time then will revert to the default state.
	 */
	state: DaffCartItemStateEnum;
	type: DaffCartItemInputType;
  image?: DaffProductImage;
  product_id: DaffProduct['id'];
  parent_item_id: number;
  sku: string;
  name: string;
  qty: number;
  price: number;
  row_total: number;
	total_discount: number;
	in_stock: boolean;
}

export enum DaffCartItemStateEnum {
	New = 'new',
	Updated = 'updated',
	Mutating = 'mutating',
	Default = 'default'
}
