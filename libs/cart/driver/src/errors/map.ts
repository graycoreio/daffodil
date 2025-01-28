import { DaffCartNotFoundError } from './cart-not-found';
import { DaffCartDriverErrorCodes } from './codes.enum';
import { DaffCartExpiredPaymentTokenError } from './expired-payment-token';
import { DaffCartInvalidAPIResponseError } from './invalid-api-response';
import { DaffInvalidCountryError } from './invalid-country';
import { DaffInvalidCouponCodeError } from './invalid-coupon-code';
import { DaffInvalidEmailError } from './invalid-email';
import { DaffInvalidRegionError } from './invalid-region';
import { DaffCartItemExceedsMaxQtyError } from './item-exceeds-max-qty';
import { DaffProductOutOfStockError } from './product-out-of-stock';
import { DaffUnauthorizedForCartError } from './unauthorized-for-cart';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffCartDriverErrorMap = {
  [DaffCartDriverErrorCodes.CART_NOT_FOUND]: DaffCartNotFoundError,
  [DaffCartDriverErrorCodes.PRODUCT_OUT_OF_STOCK]: DaffProductOutOfStockError,
  [DaffCartDriverErrorCodes.INVALID_COUPON_CODE]: DaffInvalidCouponCodeError,
  [DaffCartDriverErrorCodes.INVALID_COUNTRY]: DaffInvalidCountryError,
  [DaffCartDriverErrorCodes.INVALID_EMAIL]: DaffInvalidEmailError,
  [DaffCartDriverErrorCodes.INVALID_REGION]: DaffInvalidRegionError,
  [DaffCartDriverErrorCodes.INVALID_API_RESPONSE]: DaffCartInvalidAPIResponseError,
  [DaffCartDriverErrorCodes.EXPIRED_PAYMENT_METHOD]: DaffCartExpiredPaymentTokenError,
  [DaffCartDriverErrorCodes.ITEM_EXCEEDS_MAX_QTY]: DaffCartItemExceedsMaxQtyError,
  [DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART]: DaffUnauthorizedForCartError,
};
