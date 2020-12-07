import { DaffError } from '../../errors/public_api';
import { DaffStorageServiceError } from '../error/error';

/**
 * An error thrown when there is an attempt to access storage on the server and none is available.
 */
export class DaffServerStorageServiceError extends DaffStorageServiceError implements DaffError {
  public readonly code: string = 'DAFF_SERVER_STORAGE_FAILURE';

	constructor(public message: string) {
		super(message);
	}
}
