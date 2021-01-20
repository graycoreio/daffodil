import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the postal code is invalid.
 * It should be no more than 20 characters in length.
 */
export declare class DaffAuthorizeNetInvalidPostalCodeError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
