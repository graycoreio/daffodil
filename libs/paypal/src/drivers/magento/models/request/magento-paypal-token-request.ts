import { MagentoPaypalUrlsRequest } from './magento-paypal-urls';

export interface MagentoPaypalTokenRequest {
	cart_id: string;
	code: string;
	urls: MagentoPaypalUrlsRequest;
	express_button?: boolean;
	use_paypal_credit?: boolean;
}
