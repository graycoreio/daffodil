import {
  DaffProductImage,
  DaffProduct
} from '@daffodil/product';
import { DaffCartItemInputType } from './cart-item-input';

export interface DaffCartItem {
	item_id: number | string;
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
