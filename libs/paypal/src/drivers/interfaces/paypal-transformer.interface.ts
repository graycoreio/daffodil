import { DaffPaypalTokenRequest } from '../../models/paypal-token-request';
import { DaffPaypalTokenResponse } from '../../models/paypal-token-response';

export interface DaffPaypalTransformerInterface<T extends DaffPaypalTokenRequest, V extends DaffPaypalTokenResponse> {
	transformOut(tokenRequest: T, config?: any): any;
	transformIn(tokenResponse: any): V;
}
