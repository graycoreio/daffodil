import {
  DaffIdentifiable,
  ID,
} from '@daffodil/core';
import { DaffProductImage } from '@daffodil/product';

import { DaffOrder } from './order';

export enum DaffOrderItemType {
  Simple = 'simple',
  Composite = 'composite',
  Configurable = 'configurable'
}

export interface DaffOrderItem extends DaffIdentifiable {
  type: DaffOrderItemType;
  /**
   * @deprecated use id instead. Deprecated in version 0.78.0. Will be removed in version 0.81.0.
   */
  item_id: ID;
  qty_ordered: number;
  qty_canceled: number;
  qty_fulfilled: number;
  image: DaffProductImage;
  order_id: DaffOrder['id'];
  created_at: string;
  updated_at: string;
  product_id: ID;
  parent_item_id: ID;
  sku: string;
  name: string;
  weight: number;
  qty: number;
  price: number;
  discount_percent: number;
  discount_amount: number;
  tax_percent: number;
  tax_amount: number;
  row_total: number;
  row_total_with_discount: number;
  row_weight: number;
  tax_before_discount: number;
}
