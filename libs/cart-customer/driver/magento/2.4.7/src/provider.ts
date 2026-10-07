import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  provideDaffCartAddressDriver,
  provideDaffCartBillingAddressDriver,
  provideDaffCartDriver,
  provideDaffCartPaymentDriver,
  provideDaffCartShippingAddressDriver,
} from '@daffodil/cart/driver';

import { DaffMagentoCartCustomerAddressService } from './cart-address.service';
import { DaffMagentoCartCustomerBillingAddressService } from './cart-billing-address.service';
import { DaffMagentoCartCustomerShippingAddressService } from './cart-shipping-address.service';
import { DaffMagentoCartCustomerService } from './cart.service';
import { DaffMagentoCartCustomerPaymentService } from './payment.service';

/**
 * Provides the Magento customer cart implementations of the `@daffodil/cart/driver` interfaces.
 * These override some of the cart driver tokens, so this must be provided after `provideDaffCartMagentoDriver`.
 */
export const provideDaffCartCustomerMagentoDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffCartDriver(DaffMagentoCartCustomerService),
  provideDaffCartAddressDriver(DaffMagentoCartCustomerAddressService),
  provideDaffCartBillingAddressDriver(DaffMagentoCartCustomerBillingAddressService),
  provideDaffCartShippingAddressDriver(DaffMagentoCartCustomerShippingAddressService),
  provideDaffCartPaymentDriver(DaffMagentoCartCustomerPaymentService),
]);
