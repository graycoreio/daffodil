import { MagentoPlaceOrderError } from './error/error.type';

export interface MagentoPlaceOrderResponse {
  placeOrder: {
    orderV2: {
      // eslint-disable-next-line id-blacklist
      number: string;
    };
    errors: Array<MagentoPlaceOrderError>;
  };
}
