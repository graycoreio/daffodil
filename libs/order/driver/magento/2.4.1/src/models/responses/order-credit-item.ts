import { MagentoOrderItem } from './order-item'

export interface MagentoOrderCreditItem {
  __typename?: 'CreditMemoItem';
  order_item: MagentoOrderItem;
  quantity_refunded: number;
};
