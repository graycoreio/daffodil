import { MagentoCustomerOrders } from './customer-orders.type';

export interface MagentoGetCustomerOrdersResponse {
  customer: {
    orders: MagentoCustomerOrders;
  };
}
