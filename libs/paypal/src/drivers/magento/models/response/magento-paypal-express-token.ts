import { MagentoPaypalUrlsResponse } from './magento-paypal-urls';

export interface MagentoPaypalExpressToken {
	token: string;
	paypal_urls: MagentoPaypalUrlsResponse
}