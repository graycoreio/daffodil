import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the cardholder name is invalid.
 * It should be no more than 64 characters in length.
 */
export declare class DaffAuthorizeNetInvalidCCNameError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
