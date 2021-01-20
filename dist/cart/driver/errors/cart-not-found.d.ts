import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when a cart driver call is sent with a cart identifier
 * that cannot be found by the platform.
 */
export declare class DaffCartNotFoundError extends DaffInheritableError implements DaffError {
    readonly code: string;
    constructor(message?: string);
}
