export class DaffCountryNotFoundError extends Error {
  public static readonly code: string = 'COUNTRY_NOT_FOUND';

	constructor(public message: string) {
		super(message);
	}
}
