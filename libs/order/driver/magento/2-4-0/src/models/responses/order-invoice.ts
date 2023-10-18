import { MagentoGraycoreOrderAddress } from './order-address';
import { MagentoGraycoreOrderPayment } from './order-payment';
import { MagentoGraycoreOrderShipmentItem } from './order-shipment-item';

export interface MagentoGraycoreOrderInvoice {
  __typename?: 'GraycoreOrderInvoice';
  items: MagentoGraycoreOrderShipmentItem[];
  grand_total: number;
  subtotal: number;
  shipping: number;
  discount: number;
  tax: number;
  billing_address: MagentoGraycoreOrderAddress;
  shipping_address: MagentoGraycoreOrderAddress;
  payment: MagentoGraycoreOrderPayment;
};
