export class DaffAuthenticationFailedError extends Error {
  public static readonly code: string = 'AUTHENTICATION_FAILED';

	constructor(public message: string) {
		super(message);
	}
}
