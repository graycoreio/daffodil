import { DaffError, DaffInheritableError } from '@daffodil/core';
export declare class DaffAuthInvalidAPIResponseError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
