import { DaffError, DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when a cart item's requested quantity
 * exceeds that allowed by the platform for the specified product.
 */
export declare class DaffProductOutOfStockError extends DaffInheritableError implements DaffError {
    readonly code: string;
    constructor(message?: string);
}
