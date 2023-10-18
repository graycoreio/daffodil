import { MagentoGraycoreOrderAddress } from './order-address';
import { MagentoGraycoreOrderInvoice } from './order-invoice';
import { MagentoGraycoreOrderItem } from './order-item';
import { MagentoGraycoreOrderPayment } from './order-payment';
import { MagentoGraycoreOrderShipment } from './order-shipment';

export interface MagentoGraycoreOrder {
  __typename?: 'GraycoreOrder';
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
  items: MagentoGraycoreOrderItem[];
  billing_address: MagentoGraycoreOrderAddress;
  shipping_address: MagentoGraycoreOrderAddress;
  shipments: MagentoGraycoreOrderShipment[];
  payment: MagentoGraycoreOrderPayment;
  invoices: MagentoGraycoreOrderInvoice[];
  credits: MagentoGraycoreOrderInvoice[];
};
