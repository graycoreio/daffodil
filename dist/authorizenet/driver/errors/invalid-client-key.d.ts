import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the `clientKey` value with which the Authorize.net driver has been configured is invalid or missing.
 * @see {@link DaffAuthorizeNetConfig}
 */
export declare class DaffAuthorizeNetInvalidClientKeyError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
