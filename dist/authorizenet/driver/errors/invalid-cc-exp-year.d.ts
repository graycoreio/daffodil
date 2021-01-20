import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the credit card expiration year is invalid.
 */
export declare class DaffAuthorizeNetInvalidCCExpYearError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
