export class DaffInvalidAPIResponseError extends Error {
	readonly name = 'DaffInvalidAPIResponseError';
  readonly code: string = 'INVALID_API_RESPONSE';

	constructor(public message: string) {
		super(message);
	}
}
