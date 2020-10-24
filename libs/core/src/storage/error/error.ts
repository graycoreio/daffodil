export class DaffStorageServiceError extends Error {
  public static readonly code: string = 'DaffStorageServiceError';

	constructor(public message: string) {
		super(message);
	}
}
