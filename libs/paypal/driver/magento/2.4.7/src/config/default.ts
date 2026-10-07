import { DaffPaypalExpressDriverConfig } from '@daffodil/paypal/driver';

export const MAGENTO_PAYPAL_EXPRESS_DRIVER_CONFIG_DEFAULT: DaffPaypalExpressDriverConfig = {
  urls: {
    return: 'checkout/payment/paypal/return',
    cancel: 'checkout/payment/paypal/cancel',
  },
  params: {
    token: 'token',
    payerId: 'PayerID',
  },
};
