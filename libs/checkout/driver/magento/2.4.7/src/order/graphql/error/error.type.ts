import { MagentoCheckoutPlaceOrderGraphQlErrorCode } from './codes';

export interface MagentoPlaceOrderError {
  code: MagentoCheckoutPlaceOrderGraphQlErrorCode;
  message: string;
}
