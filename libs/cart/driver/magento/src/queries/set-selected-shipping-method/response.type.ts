import { MagentoGetCartResponse } from '../get-cart/public_api';

export interface MagentoSetSelectedShippingMethodResponse {
  setShippingMethodsOnCart: MagentoGetCartResponse;
}
