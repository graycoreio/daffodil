import { ID } from '@daffodil/core';

import { MagentoPaypalUrlsRequest } from './magento-paypal-urls';

export interface MagentoPaypalTokenRequest {
	cart_id: ID;
	code: string;
	urls: MagentoPaypalUrlsRequest;
	express_button?: boolean;
	use_paypal_credit?: boolean;
}
