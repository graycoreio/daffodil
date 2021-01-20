import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the specified coupon code cannot be applied to the cart.
 * Either the coupon code does not exist or the required conditions are not met.
 */
export declare class DaffInvalidCouponCodeError extends DaffInheritableError implements DaffError {
    readonly code: string;
    constructor(message?: string);
}
