import { MagentoCustomerOrders } from '../../models/public_api';

export interface MagentoGetCustomerOrdersResponse {
  customer: {
    email: string;
    orders: MagentoCustomerOrders;
  };
}
