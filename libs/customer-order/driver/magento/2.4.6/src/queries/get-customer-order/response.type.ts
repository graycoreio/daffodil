import { MagentoCustomerOrder } from '../../models/public_api';

export interface MagentoGetCustomerOrderResponse {
  customer: {
    email: string;
    orders: {
      items: [MagentoCustomerOrder];
    };
  };
}
