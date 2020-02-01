import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DaffCartDriver } from '../injection-tokens/cart-driver.token';
import { DaffShopifyCartService } from './cart.service';

import { DaffCartTransformer } from '../injection-tokens/cart-transformer.token';
import { DaffShopifyCartTransformerService } from './transforms/cart-transformer.service';

import { DaffCartItemTransformer } from '../injection-tokens/cart-item-transformer.token';
import { DaffShopifyCartItemTransformerService } from './transforms/cart-item-transformer.service';

import { DaffCartAddressTransformer } from '../injection-tokens/cart-address-transformer.token';
import { DaffShopifyCartAddressTransformerService } from './transforms/cart-address-transformer.service';

import { DaffCartPaymentTransformer } from '../injection-tokens/cart-payment-transformer.token';
import { DaffShopifyCartPaymentTransformerService } from './transforms/cart-payment-transformer.service';

import { DaffCartQueryManager } from '../injection-tokens/cart-query-manager.token';
import { DaffShopifyCartGraphQlQueryManagerService } from './queries/cart-query-manager.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class DaffCartShopifyDriverModule {
  static forRoot(): ModuleWithProviders<DaffCartShopifyDriverModule> {
    return {
      ngModule: DaffCartShopifyDriverModule,
      providers: [
        {
          provide: DaffCartDriver,
          useExisting: DaffShopifyCartService
        },
        {
          provide: DaffCartTransformer,
          useExisting: DaffShopifyCartTransformerService
        },
        {
          provide: DaffCartItemTransformer,
          useExisting: DaffShopifyCartItemTransformerService
        },
        {
          provide: DaffCartAddressTransformer,
          useExisting: DaffShopifyCartAddressTransformerService
        },
        {
          provide: DaffCartPaymentTransformer,
          useExisting: DaffShopifyCartPaymentTransformerService
        },
        {
          provide: DaffCartQueryManager,
          useExisting: DaffShopifyCartGraphQlQueryManagerService
        }
      ]
    };
  }
}
