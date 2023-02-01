import {
  MagentoOrderAddress,
  MagentoOrderCredit,
  MagentoOrderInvoice,
  MagentoOrderItem,
  MagentoOrderPayment,
  MagentoOrderShipment,
  MagentoOrderTotal,
} from '@daffodil/order/driver/magento/2.4.1';

export interface MagentoCustomerOrder {
  __typename?: 'CustomerOrder';
  id: string;
  order_date: string;
  status: string;
  carrier?: string;
  number: string;
  shipping_method?: string;
  items?: MagentoOrderItem[];
  billing_address: MagentoOrderAddress;
  shipping_address?: MagentoOrderAddress;
  shipments?: MagentoOrderShipment[];
  payment_methods?: MagentoOrderPayment[];
  credit_memos?: MagentoOrderCredit[];
  invoices: MagentoOrderInvoice[];
  total?: MagentoOrderTotal;
};
