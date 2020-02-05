import { DaffProductImage } from '@daffodil/product';

export interface DaffCartItem {
  item_id: number | string;
  image?: DaffProductImage;
  product_id: number;
  parent_item_id: number;
  sku: string;
  name: string;
  description: string;
  qty: number;
  price: number;
  row_total: number;
}
