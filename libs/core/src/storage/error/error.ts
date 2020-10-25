import { DaffInheritableError } from '../../errors/public_api';

export class DaffStorageServiceError extends DaffInheritableError {
  public static readonly code: string = 'DaffStorageServiceError';

	constructor(public message: string) {
		super(message);
	}
}
