import {
  DaffProductImage,
  DaffProduct
} from '@daffodil/product';

export interface DaffCartItem {
  item_id: number | string;
  image?: DaffProductImage;
  product_id: DaffProduct['id'];
  parent_item_id: number;
  sku: string;
  name: string;
  qty: number;
  price: number;
  row_total: number;
  total_discount: number;
}
