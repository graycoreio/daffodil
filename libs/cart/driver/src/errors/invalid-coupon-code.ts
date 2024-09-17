import { DaffCartCoupon } from '@daffodil/cart';
import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

import { DaffCartDriverErrorCodes } from './codes.enum';

/**
 * An error thrown when the specified coupon code cannot be applied to the cart.
 * Either the coupon code does not exist or the required conditions are not met.
 */
export class DaffInvalidCouponCodeError extends DaffInheritableError implements DaffError {
  public readonly code: string = DaffCartDriverErrorCodes.INVALID_COUPON_CODE;

  constructor(message?: string, public coupon?: DaffCartCoupon['code']) {
    super(message);
  }
}
