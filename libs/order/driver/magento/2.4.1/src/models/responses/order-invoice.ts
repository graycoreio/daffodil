import { MagentoOrderInvoiceItem } from './order-invoice-item';
import { MagentoOrderTotal } from './order-total';

export interface MagentoOrderInvoice {
  __typename?: 'Invoice';
  items: MagentoOrderInvoiceItem[];
  total: MagentoOrderTotal;
};
