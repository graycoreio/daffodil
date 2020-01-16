import { DaffPaymentTokenRequest } from '@daffodil/checkout';

import { AuthorizeNetAuthData } from './authorize-net-auth-data';

export interface DaffAuthorizeNetTokenRequest extends DaffPaymentTokenRequest {
	authData: AuthorizeNetAuthData;
}
