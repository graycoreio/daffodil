import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when either the API Login ID or Public Client Key values are incorrect.
 */
export declare class DaffAuthorizeNetAuthFailedError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
