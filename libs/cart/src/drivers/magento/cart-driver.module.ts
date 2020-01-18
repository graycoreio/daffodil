import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DaffCartDriver } from '../injection-tokens/cart-driver.token';
import { DaffMagentoCartService } from './cart.service';

import { DaffCartTransformer } from '../injection-tokens/cart-transformer.token';
import { DaffMagentoCartTransformerService } from './transforms/cart-transformer.service';

import { DaffCartItemTransformer } from '../injection-tokens/cart-item-transformer.token';
import { DaffMagentoCartItemTransformerService } from './transforms/cart-item-transformer.service';

import { DaffCartAddressTransformer } from '../injection-tokens/cart-address-transformer.token';
import { DaffMagentoCartAddressTransformerService } from './transforms/cart-address-transformer.service';

import { DaffCartPaymentTransformer } from '../injection-tokens/cart-payment-transformer.token';
import { DaffMagentoCartPaymentTransformerService } from './transforms/cart-payment-transformer.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class DaffCartMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCartMagentoDriverModule> {
    return {
      ngModule: DaffCartMagentoDriverModule,
      providers: [
        {
          provide: DaffCartDriver,
          useExisting: DaffMagentoCartService
        },
        {
          provide: DaffCartTransformer,
          useExisting: DaffMagentoCartTransformerService
        },
        {
          provide: DaffCartItemTransformer,
          useExisting: DaffMagentoCartItemTransformerService
        },
        {
          provide: DaffCartAddressTransformer,
          useExisting: DaffMagentoCartAddressTransformerService
        },
        {
          provide: DaffCartPaymentTransformer,
          useExisting: DaffMagentoCartPaymentTransformerService
        },
      ]
    };
  }
}
