import { MagentoOrderAddress } from './order-address';
import { MagentoOrderCredit } from './order-credit';
import { MagentoOrderInvoice } from './order-invoice';
import { MagentoOrderItem } from './order-item';
import { MagentoOrderPayment } from './order-payment';
import { MagentoOrderShipment } from './order-shipment';
import { MagentoOrderTotal } from './order-total';

export interface MagentoOrder {
  __typename?: 'GraycoreGuestOrder';
  id: string;
  order_date: string;
  status: string;
  carrier: string;
  number: string;
  shipping_method: string;
  email: string;
  items: MagentoOrderItem[];
  billing_address: MagentoOrderAddress;
  shipping_address: MagentoOrderAddress;
  shipments: MagentoOrderShipment[];
  payment_methods: MagentoOrderPayment[];
  credit_memos: MagentoOrderCredit[];
  invoices: MagentoOrderInvoice[];
  total: MagentoOrderTotal;
};
