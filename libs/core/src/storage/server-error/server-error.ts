import { DaffError } from '../../errors/public_api';
import { DaffStorageServiceError } from '../error/error';

export const DAFF_SERVER_STORAGE_SERVICE_ERROR_CODE = 'DAFF_SERVER_STORAGE_FAILURE';

/**
 * An error thrown when there is an attempt to access storage on the server and none is available.
 */
export class DaffServerSideStorageError extends DaffStorageServiceError implements DaffError {
  public readonly code: string = DAFF_SERVER_STORAGE_SERVICE_ERROR_CODE;

  constructor(public message: string) {
    super(message);
  }
}
