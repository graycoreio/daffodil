import { DaffAuthorizeNetConfig } from '../../drivers/interfaces/authorize-net-config.interface';

export interface AuthorizeNetRequest {
	cardData: AuthorizeNetCreditCard;
	authData: DaffAuthorizeNetConfig;
}

export interface AuthorizeNetCreditCard {
	cardNumber: string;
	cardCode: string;
	month: string;
	year: string;
}
