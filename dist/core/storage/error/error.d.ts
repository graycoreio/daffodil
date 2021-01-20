import { DaffError, DaffInheritableError } from '../../errors/public_api';
export declare class DaffStorageServiceError extends DaffInheritableError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
