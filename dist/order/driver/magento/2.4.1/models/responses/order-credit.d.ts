import { MagentoOrderCreditItem } from './order-credit-item';
import { MagentoOrderTotal } from './order-total';
export interface MagentoOrderCredit {
    items: MagentoOrderCreditItem[];
    total: MagentoOrderTotal;
}
