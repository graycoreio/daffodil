import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the platform response is missing key information or malformed in an unrecoverable way.
 */
export declare class DaffAuthorizeNetInvalidAPIResponseError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
