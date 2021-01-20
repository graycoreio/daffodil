import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when requests are not made over HTTPS.
 */
export declare class DaffAuthorizeNetInsecureConnectionError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
