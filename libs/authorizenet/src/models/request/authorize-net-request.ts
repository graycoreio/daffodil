export interface AuthorizeNetRequest {
	cardData: AuthorizeNetCreditCard;
	authData: {
		clientKey: string;
		apiLoginID: string;
	};
}

export interface AuthorizeNetCreditCard {
	cardNumber: string;
	cardCode: string;
	month: string;
	year: string;
}
