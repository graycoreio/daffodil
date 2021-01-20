import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the credit card expiration date is in the past.
 */
export declare class DaffAuthorizeNetPastCCExpirationError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
