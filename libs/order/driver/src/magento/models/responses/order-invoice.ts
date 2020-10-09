import { MagentoGraycoreOrderShipmentItem } from './order-shipment-item';
import { MagentoGraycoreOrderAddress } from './order-address';
import { MagentoGraycoreOrderPayment } from './order-payment';

export interface MagentoGraycoreOrderInvoice {
  items: MagentoGraycoreOrderShipmentItem[];
  grand_total: number;
  subtotal: number;
  subtotal_including_tax: number;
  subtotal_with_discount_excluding_tax: number;
  subtotal_with_discount_including_tax: number;
  discount: number;
  tax: number;
  billing_address: MagentoGraycoreOrderAddress;
  shipping_address: MagentoGraycoreOrderAddress;
  payment: MagentoGraycoreOrderPayment;
};
