import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  DaffPaypalExpressDriverConfig,
  provideDaffPaypalExpressDriver,
  provideDaffPaypalExpressDriverConfig,
  provideDaffPaypalExpressPaymentDriver,
} from '@daffodil/paypal/driver';

import { MAGENTO_PAYPAL_EXPRESS_DRIVER_CONFIG_DEFAULT } from './config/default';
import { DaffMagentoPaypalPaymentService } from './paypal-payment.service';
import { DaffMagentoPaypalService } from './paypal.service';

/**
 * Provides the Magento implementations of the `@daffodil/paypal/driver` interfaces.
 */
export const provideDaffPaypalMagentoDriver = (config: Partial<DaffPaypalExpressDriverConfig> = MAGENTO_PAYPAL_EXPRESS_DRIVER_CONFIG_DEFAULT): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffPaypalExpressDriver(DaffMagentoPaypalService),
  provideDaffPaypalExpressPaymentDriver(DaffMagentoPaypalPaymentService),
  provideDaffPaypalExpressDriverConfig({
    ...MAGENTO_PAYPAL_EXPRESS_DRIVER_CONFIG_DEFAULT,
    ...config,
  }),
]);
