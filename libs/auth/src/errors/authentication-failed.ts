export class DaffAuthenticationFailedError extends Error {
	readonly name = 'DaffAuthenticationFailedError';
  readonly code: string = 'AUTHENTICATION_FAILED';

	constructor(public message: string) {
		super(message);
	}
}
