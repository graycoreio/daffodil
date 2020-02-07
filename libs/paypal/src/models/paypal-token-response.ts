import { DaffPaypalUrlsResponse } from './paypal-urls-response';

export interface DaffPaypalTokenResponse {
	token: string;
	urls: DaffPaypalUrlsResponse;
}
