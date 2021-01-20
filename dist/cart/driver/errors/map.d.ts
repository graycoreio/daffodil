import { DaffCartDriverErrorCodes } from './codes.enum';
import { DaffCartNotFoundError } from './cart-not-found';
import { DaffCartExpiredPaymentTokenError } from './expired-payment-token';
import { DaffCartInvalidAPIResponseError } from './invalid-api-response';
import { DaffInvalidCountryError } from './invalid-country';
import { DaffInvalidCouponCodeError } from './invalid-coupon-code';
import { DaffInvalidRegionError } from './invalid-region';
import { DaffProductNotFoundError } from './product-not-found';
import { DaffProductOutOfStockError } from './product-out-of-stock';
/**
 * A mapping from error codes to error class constructors.
 */
export declare const DaffCartDriverErrorMap: {
    [DaffCartDriverErrorCodes.CART_NOT_FOUND]: typeof DaffCartNotFoundError;
    [DaffCartDriverErrorCodes.PRODUCT_NOT_FOUND]: typeof DaffProductNotFoundError;
    [DaffCartDriverErrorCodes.PRODUCT_OUT_OF_STOCK]: typeof DaffProductOutOfStockError;
    [DaffCartDriverErrorCodes.INVALID_COUPON_CODE]: typeof DaffInvalidCouponCodeError;
    [DaffCartDriverErrorCodes.INVALID_COUNTRY]: typeof DaffInvalidCountryError;
    [DaffCartDriverErrorCodes.INVALID_REGION]: typeof DaffInvalidRegionError;
    [DaffCartDriverErrorCodes.INVALID_API_RESPONSE]: typeof DaffCartInvalidAPIResponseError;
    [DaffCartDriverErrorCodes.EXPIRED_PAYMENT_METHOD]: typeof DaffCartExpiredPaymentTokenError;
};
