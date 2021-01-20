import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the credit card expiration month is invalid.
 */
export declare class DaffAuthorizeNetInvalidCCExpMonthError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
