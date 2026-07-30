import { MagentoOrderCreditItem } from './order-credit-item';
import { MagentoOrderTotal } from './order-total';

export interface MagentoOrderCredit {
  __typename?: 'CreditMemo';
  items: MagentoOrderCreditItem[];
  total: MagentoOrderTotal;
}
