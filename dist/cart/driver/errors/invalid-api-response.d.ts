import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the platform's API response is missing required information
 * or malformed in an unrecoverable way.
 */
export declare class DaffCartInvalidAPIResponseError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
