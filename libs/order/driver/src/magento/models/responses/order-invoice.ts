import { MagentoGraycoreOrderShipmentItem } from './order-shipment-item';
import { MagentoGraycoreOrderAddress } from './order-address';
import { MagentoGraycoreOrderPayment } from './order-payment';

export interface MagentoGraycoreOrderInvoice {
  items: MagentoGraycoreOrderShipmentItem[];
  grand_total: number;
  subtotal: number;
  billing_address: MagentoGraycoreOrderAddress;
  shipping_address: MagentoGraycoreOrderAddress;
  payment: MagentoGraycoreOrderPayment;
};
