import { DaffError, DaffInheritableError } from '@daffodil/core';
export declare class DaffAuthenticationFailedError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
