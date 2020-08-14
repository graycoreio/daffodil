import { DaffOrderItem } from './order-item';
import { DaffOrderAddress } from './order-address';
import { DaffOrderPayment } from './order-payment';
import { DaffOrderCoupon } from './order-coupon';
import { DaffOrderTotal } from './order-total';
import { DaffOrderShipment } from './order-shipment';
import { DaffOrderInvoice } from './order-invoice';
import { DaffOrderCredit } from './order-credit';

export interface DaffOrder {
  id: number | string;
  customer_id: number | string;
  created_at: string;
  updated_at: string;
  status: string;
  totals: DaffOrderTotal[];
  applied_codes: DaffOrderCoupon[];
  items: DaffOrderItem[];
  billing_addresses: DaffOrderAddress[];
  shipping_addresses: DaffOrderAddress[];
  shipments: DaffOrderShipment[];
  payment: DaffOrderPayment;
  invoices: DaffOrderInvoice[];
  credits: DaffOrderCredit[];
}
