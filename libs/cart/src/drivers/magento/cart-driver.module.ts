import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCartShippingMethodsDriver } from '../interfaces/cart-shipping-methods-service.interface';
import { DaffMagentoCartShippingMethodsService } from './cart-shipping-methods.service';

import { DaffCartShippingAddressDriver } from '../interfaces/cart-shipping-address-service.interface';
import { DaffMagentoCartShippingAddressService } from './cart-shipping-address.service';

import { DaffCartPaymentMethodsDriver } from '../interfaces/cart-payment-methods-service.interface';
import { DaffMagentoCartPaymentMethodsService } from './cart-payment-methods.service';

import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';
import { DaffMagentoBillingAddressTransformer } from './transforms/outputs/billing-address.service';
import { DaffMagentoCartAddressTransformer } from './transforms/outputs/cart-address.service';
import { DaffMagentoCartItemTransformer } from './transforms/outputs/cart-item.service';
import { DaffMagentoCartShippingInformationTransformer } from './transforms/outputs/cart-shipping-information.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoShippingAddressTransformer } from './transforms/outputs/shipping-address.service';

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
          provide: DaffCartShippingAddressDriver,
          useExisting: DaffMagentoCartShippingAddressService
        },
        {
          provide: DaffCartShippingMethodsDriver,
          useExisting: DaffMagentoCartShippingMethodsService
        },
        {
          provide: DaffCartPaymentMethodsDriver,
          useExisting: DaffMagentoCartPaymentMethodsService
        },
        DaffMagentoBillingAddressTransformer,
        DaffMagentoCartAddressTransformer,
        DaffMagentoCartItemTransformer,
        DaffMagentoCartShippingInformationTransformer,
        DaffMagentoCartShippingRateTransformer,
        DaffMagentoCartPaymentTransformer,
        DaffMagentoCartTransformer,
        DaffMagentoShippingAddressTransformer,

        DaffMagentoCartAddressInputTransformer,
        DaffMagentoShippingAddressInputTransformer
      ]
    };
  }
}
