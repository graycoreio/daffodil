import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the payment token used for the payment method update has expired.
 * This happens when the a place order request happens too long after payment update.
 * The payment must be updated again before an order can be placed.
 */
export declare class DaffCartExpiredPaymentTokenError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
