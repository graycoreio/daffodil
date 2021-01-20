import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the credit card number is invalid.
 */
export declare class DaffAuthorizeNetInvalidCCNumberError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
