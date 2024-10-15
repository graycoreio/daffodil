import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  provideDaffCartDriver,
  provideDaffCartBillingAddressDriver,
  provideDaffCartItemDriver,
  provideDaffCartPaymentDriver,
  provideDaffCartPaymentMethodsDriver,
  provideDaffCartShippingAddressDriver,
  provideDaffCartShippingInformationDriver,
  provideDaffCartShippingMethodsDriver,
  provideDaffCartOrderDriver,
  provideDaffCartCouponDriver,
  provideDaffCartAddressDriver,
} from '@daffodil/cart/driver';
import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';

import { DaffInMemoryCartService } from './cart/cart.service';
import { DaffInMemoryCartAddressService } from './cart-address/cart-address.service';
import { DaffInMemoryCartBillingAddressService } from './cart-billing-address/cart-billing-address.service';
import { DaffInMemoryCartCouponService } from './cart-coupon/cart-coupon.service';
import { DaffInMemoryCartItemService } from './cart-item/cart-item.service';
import { DaffInMemoryCartOrderService } from './cart-order/cart-order.service';
import { DaffInMemoryCartPaymentService } from './cart-payment/cart-payment.service';
import { DaffInMemoryCartPaymentMethodsService } from './cart-payment-methods/cart-payment-methods.service';
import { DaffInMemoryCartShippingAddressService } from './cart-shipping-address/cart-shipping-address.service';
import { DaffInMemoryCartShippingInformationService } from './cart-shipping-information/cart-shipping-information.service';
import { DaffInMemoryCartShippingMethodsService } from './cart-shipping-methods/cart-shipping-methods.service';
import { DaffInMemoryBackendCartRootService } from '../backend/public_api';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCartInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffCartInMemoryDriverModule> {
    return {
      ngModule: DaffCartInMemoryDriverModule,
      providers: [
        provideDaffCartDriver(DaffInMemoryCartService),
        provideDaffCartAddressDriver(DaffInMemoryCartAddressService),
        provideDaffCartBillingAddressDriver(DaffInMemoryCartBillingAddressService),
        provideDaffCartItemDriver(DaffInMemoryCartItemService),
        provideDaffCartPaymentDriver(DaffInMemoryCartPaymentService),
        provideDaffCartPaymentMethodsDriver(DaffInMemoryCartPaymentMethodsService),
        provideDaffCartShippingAddressDriver(DaffInMemoryCartShippingAddressService),
        provideDaffCartShippingInformationDriver(DaffInMemoryCartShippingInformationService),
        provideDaffCartShippingMethodsDriver(DaffInMemoryCartShippingMethodsService),
        provideDaffCartOrderDriver(DaffInMemoryCartOrderService),
        provideDaffCartCouponDriver(DaffInMemoryCartCouponService),
        provideDaffInMemoryBackends(
          DaffInMemoryBackendCartRootService,
        ),
      ],
    };
  }
}
