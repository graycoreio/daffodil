import { MagentoGraycoreOrderItem } from './order-item';
import { MagentoGraycoreOrderAddress } from './order-address';
import { MagentoGraycoreOrderShipment } from './order-shipment';
import { MagentoGraycoreOrderPayment } from './order-payment';
import { MagentoGraycoreOrderInvoice } from './order-invoice';

export interface MagentoGraycoreOrder {
  id: number;
  order_number: string | number;
  customer_id: number;
  created_at: string;
  updated_at: string;
  grand_total: number;
  subtotal: number;
  shipping: number;
  discount: number;
  tax: number;
  status: string;
  applied_codes: string[];
  items: MagentoGraycoreOrderItem[]
  billing_address: MagentoGraycoreOrderAddress
  shipping_address: MagentoGraycoreOrderAddress
  shipments: MagentoGraycoreOrderShipment[]
  payment: MagentoGraycoreOrderPayment
  invoices: MagentoGraycoreOrderInvoice[]
  credits: MagentoGraycoreOrderInvoice[]
};
