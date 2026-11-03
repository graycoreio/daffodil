import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffAuthorizeNetPaymentDriver } from '@daffodil/authorizenet/driver';
import { provideDaffCustomerPaymentDriver } from '@daffodil/customer-payment/driver';
import { provideDaffCustomerPaymentAuthorizeNetPaymentDriver } from '@daffodil/customer-payment-authorizenet/driver';

import { DaffCustomerPaymentAuthorizeNetMagentoService } from './customer-payment.service';
import { DaffCustomerPaymentAuthorizeNetMagentoPaymentService } from './payment.service';

/**
 * Provides the Magento implementations of the `@daffodil/customer-payment-authorizenet/driver` interfaces.
 */
export const provideDaffCustomerPaymentAuthorizeNetMagentoDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffCustomerPaymentDriver(DaffCustomerPaymentAuthorizeNetMagentoService),
  // TODO: use provider function
  {
    provide: DaffAuthorizeNetPaymentDriver,
    useExisting: DaffCustomerPaymentAuthorizeNetMagentoPaymentService,
  },
  provideDaffCustomerPaymentAuthorizeNetPaymentDriver(DaffCustomerPaymentAuthorizeNetMagentoPaymentService),
]);
