import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when Accept.js has been loaded incorrectly.
 * This can be caused by the script being loaded from a local source
 * or when the browser or proxy has improperly cached an older version of the script.
 */
export declare class DaffAuthorizeNetAcceptjsInvalidError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
