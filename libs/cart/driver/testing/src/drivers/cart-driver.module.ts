import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  provideDaffCartDriver,
  provideDaffCartAddressDriver,
  provideDaffCartBillingAddressDriver,
  provideDaffCartShippingAddressDriver,
  provideDaffCartCouponDriver,
  provideDaffCartOrderDriver,
  provideDaffCartPaymentDriver,
  provideDaffCartShippingInformationDriver,
  provideDaffCartShippingMethodsDriver,
  provideDaffCartPaymentMethodsDriver,
  provideDaffCartItemDriver,
} from '@daffodil/cart/driver';

import { DaffTestingCartService } from './cart/cart.service';
import { DaffTestingCartAddressService } from './cart-address/cart-address.service';
import { DaffTestingCartBillingAddressService } from './cart-billing-address/cart-billing-address.service';
import { DaffTestingCartCouponService } from './cart-coupon/cart-coupon.service';
import { DaffTestingCartItemService } from './cart-item/cart-item.service';
import { DaffTestingCartOrderService } from './cart-order/cart-order.service';
import { DaffTestingCartPaymentService } from './cart-payment/cart-payment.service';
import { DaffTestingCartPaymentMethodsService } from './cart-payment-methods/cart-payment-methods.service';
import { DaffTestingCartShippingAddressService } from './cart-shipping-address/cart-shipping-address.service';
import { DaffTestingCartShippingInformationService } from './cart-shipping-information/cart-shipping-information.service';
import { DaffTestingCartShippingMethodsService } from './cart-shipping-methods/cart-shipping-methods.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffTestingCartDriverModule {
  static forRoot(): ModuleWithProviders<DaffTestingCartDriverModule> {
    return {
      ngModule: DaffTestingCartDriverModule,
      providers: [
        provideDaffCartDriver(DaffTestingCartService),
        provideDaffCartItemDriver(DaffTestingCartItemService),
        provideDaffCartAddressDriver(DaffTestingCartAddressService),
        provideDaffCartBillingAddressDriver(DaffTestingCartBillingAddressService),
        provideDaffCartShippingAddressDriver(DaffTestingCartShippingAddressService),
        provideDaffCartCouponDriver(DaffTestingCartCouponService),
        provideDaffCartOrderDriver(DaffTestingCartOrderService),
        provideDaffCartPaymentDriver(DaffTestingCartPaymentService),
        provideDaffCartShippingInformationDriver(DaffTestingCartShippingInformationService),
        provideDaffCartShippingMethodsDriver(DaffTestingCartShippingMethodsService),
        provideDaffCartPaymentMethodsDriver(DaffTestingCartPaymentMethodsService),
      ],
    };
  }
}
