import { MagentoOrderItem } from './order-item';
import { MagentoOrderAddress } from './order-address';
import { MagentoOrderShipment } from './order-shipment';
import { MagentoOrderPayment } from './order-payment';
import { MagentoOrderInvoice } from './order-invoice';
import { MagentoOrderTotal } from './order-total';
import { MagentoOrderCredit } from './order-credit';

export interface MagentoOrder {
  __typename?: 'GraycoreGuestOrder';
  id: string;
  order_date: string;
  status: string;
  carrier: string;
  number: string;
  shipping_method: string;
  items: MagentoOrderItem[];
  billing_address: MagentoOrderAddress;
  shipping_address: MagentoOrderAddress;
  shipments: MagentoOrderShipment[];
  payment_methods: MagentoOrderPayment[];
  credit_memos: MagentoOrderCredit[];
  invoices: MagentoOrderInvoice[];
  total: MagentoOrderTotal;
};
