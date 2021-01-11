import { DaffPaypalTokenRequest } from '../../models/paypal-token-request';
import { DaffPaypalTokenResponse } from '../../models/paypal-token-response';

export interface DaffPaypalTransformerInterface<
  T extends DaffPaypalTokenRequest = DaffPaypalTokenRequest,
  V extends DaffPaypalTokenResponse = DaffPaypalTokenResponse
> {
	transformOut(tokenRequest: T, config?: any): any;
	transformIn(tokenResponse: any): V;
}
