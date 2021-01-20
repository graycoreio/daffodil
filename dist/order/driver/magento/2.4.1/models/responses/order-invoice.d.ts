import { MagentoOrderInvoiceItem } from './order-invoice-item';
import { MagentoOrderTotal } from './order-total';
export interface MagentoOrderInvoice {
    items: MagentoOrderInvoiceItem[];
    total: MagentoOrderTotal;
}
