export class DaffInvalidAPIResponseError extends Error {
  public static readonly code: string = 'INVALID_API_RESPONSE';

	constructor(public message: string) {
		super(message);
	}
}
