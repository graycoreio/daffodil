import { DaffError } from '../../errors/public_api';
import { DaffStorageServiceError } from '../error/error';
/**
 * An error thrown when there is an attempt to access storage on the server and none is available.
 */
export declare class DaffServerSideStorageError extends DaffStorageServiceError implements DaffError {
    message: string;
    readonly code: string;
    constructor(message: string);
}
