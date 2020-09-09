import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DaffCartDriver,
  DaffCartAddressDriver,
  DaffCartBillingAddressDriver,
  DaffCartShippingAddressDriver,
  DaffCartCouponDriver,
  DaffCartOrderDriver,
  DaffCartPaymentDriver,
  DaffCartShippingInformationDriver,
  DaffCartShippingMethodsDriver,
  DaffCartPaymentMethodsDriver
} from '@daffodil/cart';

import { DaffTestingCartService } from './cart/cart.service';
import { DaffTestingCartAddressService } from './cart-address/cart-address.service';
import { DaffTestingCartBillingAddressService } from './cart-billing-address/cart-billing-address.service';
import { DaffTestingCartShippingAddressService } from './cart-shipping-address/cart-shipping-address.service';
import { DaffTestingCartCouponService } from './cart-coupon/cart-coupon.service';
import { DaffTestingCartOrderService } from './cart-order/cart-order.service';
import { DaffTestingCartPaymentService } from './cart-payment/cart-payment.service';
import { DaffTestingCartShippingInformationService } from './cart-shipping-information/cart-shipping-information.service';
import { DaffTestingCartShippingMethodsService } from './cart-shipping-methods/cart-shipping-methods.service';
import { DaffTestingCartPaymentMethodsService } from './cart-payment-methods/cart-payment-methods.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffTestingCartDriverModule {
  static forRoot(): ModuleWithProviders<DaffTestingCartDriverModule> {
    return {
      ngModule: DaffTestingCartDriverModule,
      providers: [
        {
          provide: DaffCartDriver,
          useExisting: DaffTestingCartService
        },
        {
          provide: DaffCartAddressDriver,
          useExisting: DaffTestingCartAddressService
        },
        {
          provide: DaffCartBillingAddressDriver,
          useExisting: DaffTestingCartBillingAddressService
        },
        {
          provide: DaffCartShippingAddressDriver,
          useExisting: DaffTestingCartShippingAddressService
        },
        {
          provide: DaffCartCouponDriver,
          useExisting: DaffTestingCartCouponService
        },
        {
          provide: DaffCartOrderDriver,
          useExisting: DaffTestingCartOrderService
        },
        {
          provide: DaffCartPaymentDriver,
          useExisting: DaffTestingCartPaymentService
        },
        {
          provide: DaffCartShippingInformationDriver,
          useExisting: DaffTestingCartShippingInformationService
        },
        {
          provide: DaffCartShippingMethodsDriver,
          useExisting: DaffTestingCartShippingMethodsService
        },
        {
          provide: DaffCartPaymentMethodsDriver,
          useExisting: DaffTestingCartPaymentMethodsService
        },
      ]
    };
  }
}
