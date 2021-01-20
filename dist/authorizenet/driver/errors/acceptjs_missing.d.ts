import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when Accept.js has not been loaded.
 */
export declare class DaffAuthorizeNetAcceptjsMissingError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
