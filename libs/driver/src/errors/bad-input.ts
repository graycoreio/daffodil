export class DaffBadInputError extends Error {
  public static readonly code: string = 'BAD_INPUT';

	constructor(public message: string) {
		super(message);
	}
}
