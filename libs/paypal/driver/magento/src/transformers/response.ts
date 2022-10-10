import { DaffPaypalExpressTokenResponse } from '@daffodil/paypal';

import { MagentoPaypalTokenResponse } from '../models/public_api';

export const magentoPaypalExpressResponseTransform = (result: MagentoPaypalTokenResponse): DaffPaypalExpressTokenResponse => ({
  token: result.createPaypalExpressToken.token,
  urls: {
    start: result.createPaypalExpressToken.paypal_urls.start,
    edit: result.createPaypalExpressToken.paypal_urls.edit,
  },
});
