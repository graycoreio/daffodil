import { AuthorizeNetAuthData } from './authorize-net-auth-data';
import { AuthorizeNetCreditCard } from './authorize-net-credit-card';

export interface AuthorizeNetRequest {
	cardData: AuthorizeNetCreditCard;
	authData: AuthorizeNetAuthData;
}
