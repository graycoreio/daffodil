import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCartShippingMethodsDriver } from '../interfaces/cart-shipping-methods-service.interface';
import { DaffMagentoCartShippingMethodsService } from './cart-shipping-methods.service';

import { DaffCartPaymentMethodsDriver } from '../interfaces/cart-payment-methods-service.interface';
import { DaffMagentoCartPaymentMethodsService } from './cart-payment-methods.service';

import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';

import { DaffMagentoCartAddressInputTransformer } from './transforms/inputs/cart-address.service';
import { DaffMagentoShippingAddressInputTransformer } from './transforms/inputs/shipping-address.service';

@NgModule({
  imports: [
    CommonModule,
  ]
})
export class DaffCartMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCartMagentoDriverModule> {
    return {
      ngModule: DaffCartMagentoDriverModule,
      providers: [
        {
          provide: DaffCartShippingMethodsDriver,
          useExisting: DaffMagentoCartShippingMethodsService
        },
        {
          provide: DaffCartPaymentMethodsDriver,
          useExisting: DaffMagentoCartPaymentMethodsService
        },
        DaffMagentoCartShippingRateTransformer,
        DaffMagentoCartPaymentTransformer,

        DaffMagentoCartAddressInputTransformer,
        DaffMagentoShippingAddressInputTransformer
      ]
    };
  }
}
