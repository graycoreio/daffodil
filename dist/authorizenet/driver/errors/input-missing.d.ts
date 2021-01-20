import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when required information is missing from the request payload.
 */
export declare class DaffAuthorizeNetInputMissingError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
