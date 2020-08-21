import {
  DaffProductImage,
  DaffProduct
} from '@daffodil/product';
import { DaffCartItemInputType } from './cart-item-input';

export enum DaffCartItemStockEnum {
	InStock = 'IN_STOCK',
	OutOfStock = 'OUT_OF_STOCK'
}

export interface DaffCartItem {
	item_id: number | string;
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
	stock_status: DaffCartItemStockEnum;
}
