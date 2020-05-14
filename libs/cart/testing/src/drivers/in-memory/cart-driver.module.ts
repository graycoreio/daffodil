import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DaffCartDriver,
  DaffCartBillingAddressDriver,
  DaffCartItemDriver,
  DaffCartPaymentDriver,
  DaffCartPaymentMethodsDriver,
  DaffCartShippingAddressDriver,
  DaffCartShippingInformationDriver,
  DaffCartShippingMethodsDriver,
  DaffCartOrderDriver,
  DaffCartCouponDriver
} from '@daffodil/cart';

import { DaffInMemoryCartService } from './cart/cart.service';
import { DaffInMemoryCartBillingAddressService } from './cart-billing-address/cart-billing-address.service';
import { DaffInMemoryCartItemService } from './cart-item/cart-item.service';
import { DaffInMemoryCartPaymentService } from './cart-payment/cart-payment.service';
import { DaffInMemoryCartPaymentMethodsService } from './cart-payment-methods/cart-payment-methods.service';
import { DaffInMemoryCartShippingAddressService } from './cart-shipping-address/cart-shipping-address.service';
import { DaffInMemoryCartShippingInformationService } from './cart-shipping-information/cart-shipping-information.service';
import { DaffInMemoryCartShippingMethodsService } from './cart-shipping-methods/cart-shipping-methods.service';
import { DaffInMemoryCartOrderService } from './cart-order/cart-order.service';
import { DaffInMemoryCartCouponService } from './cart-coupon/cart-coupon.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffCartInMemoryDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffCartInMemoryDriverModule,
      providers: [
        {
          provide: DaffCartDriver,
          useExisting: DaffInMemoryCartService
        },
        {
          provide: DaffCartBillingAddressDriver,
          useExisting: DaffInMemoryCartBillingAddressService
        },
        {
          provide: DaffCartItemDriver,
          useExisting: DaffInMemoryCartItemService
        },
        {
          provide: DaffCartPaymentDriver,
          useExisting: DaffInMemoryCartPaymentService
        },
        {
          provide: DaffCartPaymentMethodsDriver,
          useExisting: DaffInMemoryCartPaymentMethodsService
        },
        {
          provide: DaffCartShippingAddressDriver,
          useExisting: DaffInMemoryCartShippingAddressService
        },
        {
          provide: DaffCartShippingInformationDriver,
          useExisting: DaffInMemoryCartShippingInformationService
        },
        {
          provide: DaffCartShippingMethodsDriver,
          useExisting: DaffInMemoryCartShippingMethodsService
        },
        {
          provide: DaffCartOrderDriver,
          useExisting: DaffInMemoryCartOrderService
        },
        {
          provide: DaffCartCouponDriver,
          useExisting: DaffInMemoryCartCouponService
        }
      ]
    };
  }
}
