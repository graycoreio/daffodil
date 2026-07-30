import { MagentoCustomerOrders } from './customer-orders.type';

export interface MagentoGetCustomerOrdersResponse {
  customer: {
    email: string;
    orders: MagentoCustomerOrders;
  };
}
