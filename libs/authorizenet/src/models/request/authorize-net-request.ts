import { DaffAuthorizeNetConfig } from '../../drivers/interfaces/authorize-net-config.interface';
import { AuthorizeNetCreditCard } from './authorize-net-credit-card';

export interface AuthorizeNetRequest {
	cardData: AuthorizeNetCreditCard;
	authData: DaffAuthorizeNetConfig;
}
