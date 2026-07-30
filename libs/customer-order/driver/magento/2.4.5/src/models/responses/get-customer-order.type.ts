import { MagentoCustomerOrder } from './order.type';

export interface MagentoGetCustomerOrderResponse {
  customer: {
    email: string;
    orders: {
      items: [MagentoCustomerOrder];
    };
  };
}
