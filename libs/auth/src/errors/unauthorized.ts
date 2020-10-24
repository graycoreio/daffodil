export class DaffUnauthorizedError extends Error {
  public static readonly code: string = 'UNAUTHORIZED';

	constructor(public message: string) {
		super(message);
	}
}
