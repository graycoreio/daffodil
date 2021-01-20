import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the specified country is invalid for the specified address
 * or missing where it is required.
 */
export declare class DaffInvalidCountryError extends DaffInheritableError implements DaffError {
    readonly code: string;
    constructor(message?: string);
}
