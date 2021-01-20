import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when an add to cart request is sent
 * for a product that cannot be found.
 */
export declare class DaffProductNotFoundError extends DaffInheritableError implements DaffError {
    readonly code: string;
    constructor(message?: string);
}
