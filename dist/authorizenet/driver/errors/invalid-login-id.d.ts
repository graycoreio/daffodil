import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the `apiLoginID` value with which the Authorize.net driver has been configured is invalid or missing.
 * @see {@link DaffAuthorizeNetConfig}
 */
export declare class DaffAuthorizeNetInvalidLoginIdError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
