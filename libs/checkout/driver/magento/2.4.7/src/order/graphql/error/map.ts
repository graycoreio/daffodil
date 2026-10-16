import { DaffCartNotFoundError } from '@daffodil/cart/driver';
import {
  DaffCheckoutInvalidAPIResponseError,
  DaffCheckoutMissingEmailError,
} from '@daffodil/checkout/driver';
import { DaffErrorCodeMap } from '@daffodil/core';

import { MagentoCheckoutPlaceOrderGraphQlErrorCode } from './codes';

export const MagentoCheckoutPlaceOrderErrorMap: DaffErrorCodeMap = {
  [MagentoCheckoutPlaceOrderGraphQlErrorCode.CART_NOT_FOUND]: DaffCartNotFoundError,
  [MagentoCheckoutPlaceOrderGraphQlErrorCode.CART_NOT_ACTIVE]: DaffCartNotFoundError,
  [MagentoCheckoutPlaceOrderGraphQlErrorCode.GUEST_EMAIL_MISSING]: DaffCheckoutMissingEmailError,
  [MagentoCheckoutPlaceOrderGraphQlErrorCode.UNABLE_TO_PLACE_ORDER]: DaffCheckoutInvalidAPIResponseError,
  [MagentoCheckoutPlaceOrderGraphQlErrorCode.UNDEFINED]: DaffCheckoutInvalidAPIResponseError,
};
