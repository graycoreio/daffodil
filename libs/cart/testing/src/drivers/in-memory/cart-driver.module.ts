import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DaffCartDriver,
  DaffCartBillingAddressDriver,
  DaffCartItemDriver,
  DaffCartShippingAddressDriver,
  DaffCartShippingInformationDriver,
  DaffCartShippingMethodsDriver
} from '@daffodil/cart';

import { DaffInMemoryCartService } from './cart/cart.service';
import { DaffInMemoryCartBillingAddressService } from './cart-billing-address/cart-billing-address.service';
import { DaffInMemoryCartItemService } from './cart-item/cart-item.service';
import { DaffInMemoryCartShippingAddressService } from './cart-shipping-address/cart-shipping-address.service';
import { DaffInMemoryCartShippingInformationService } from './cart-shipping-information/cart-shipping-information.service';
import { DaffInMemoryCartShippingMethodsService } from './cart-shipping-methods/cart-shipping-methods.service';

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
        }
      ]
    };
  }
}
