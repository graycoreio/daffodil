import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the specified region is invalid for the specified address
 * or missing where it is required.
 */
export declare class DaffInvalidRegionError extends DaffInheritableError implements DaffError {
    readonly code: string;
    constructor(message?: string);
}
