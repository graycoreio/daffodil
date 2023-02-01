import { MagentoCustomerOrder } from './order.type';

export interface MagentoGetCustomerOrderResponse {
  customer: {
    orders: {
      items: [MagentoCustomerOrder];
    };
  };
}
