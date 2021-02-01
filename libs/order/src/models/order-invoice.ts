import { DaffOrderAddress } from './order-address';
import { DaffOrderPayment } from './order-payment';
import { DaffOrderShipmentItem } from './order-shipment-item';
import { DaffOrderShippingMethod } from './order-shipping-method';
import { DaffOrderTotal } from './order-total';

export interface DaffOrderInvoice {
  items: DaffOrderShipmentItem[];
  totals: DaffOrderTotal[];
  billing_address: DaffOrderAddress;
  shipping_address: DaffOrderAddress;
  payment: DaffOrderPayment;
  shipping_method: DaffOrderShippingMethod;
}
