import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  DaffAuthorizeNetConfig,
  provideDaffAuthorizeNetConfigToken,
  provideDaffAuthorizeNetDriver,
  provideDaffAuthorizeNetPaymentDriver,
  provideDaffAuthorizeNetPaymentId,
} from '@daffodil/authorizenet/driver';

import { MAGENTO_AUTHORIZE_NET_PAYMENT_ID } from './authorize-net-payment-id';
import { DaffMagentoAuthorizeNetService } from './authorize-net.service';
import { DaffMagentoAuthorizeNetPaymentService } from './payment.service';

/**
 * Provides the Magento implementations of the `@daffodil/authorizenet/driver` interfaces.
 *
 * Throws if `config` does not contain an `apiLoginID` and `clientKey`.
 */
export const provideDaffAuthorizeNetMagentoDriver = (config: DaffAuthorizeNetConfig): EnvironmentProviders => {
  if(!config.apiLoginID || !config.clientKey) {
    throw Error('You must provide an apiLoginID and clientKey for Authorize.Net configuration.');
  }

  return makeEnvironmentProviders([
    provideDaffAuthorizeNetConfigToken(config),
    provideDaffAuthorizeNetDriver(DaffMagentoAuthorizeNetService),
    provideDaffAuthorizeNetPaymentDriver(DaffMagentoAuthorizeNetPaymentService),
    provideDaffAuthorizeNetPaymentId(MAGENTO_AUTHORIZE_NET_PAYMENT_ID),
  ]);
};
