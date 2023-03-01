import {
  ID,
  DaffIdentifiable,
} from '@daffodil/core';

import { DaffOrderAddress } from './order-address';
import { DaffOrderCoupon } from './order-coupon';
import { DaffOrderCredit } from './order-credit';
import { DaffOrderInvoice } from './order-invoice';
import { DaffOrderItem } from './order-item';
import { DaffOrderPayment } from './order-payment';
import { DaffOrderShipment } from './order-shipment';
import { DaffOrderTotal } from './order-total';

export interface DaffOrder extends DaffIdentifiable {
  customer_id: ID;
  email: string;
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
  /**
   * The field is set to the platform order object returned by the most recent driver call.
   * No fields are guaranteed here.
   */
  extra_attributes?: any;
}
