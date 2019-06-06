import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffProductDriver } from 'product/src/drivers/injection-tokens/product-driver.token';
import { DaffShopifyProductService } from 'product/src/drivers/shopify/product.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffProductShopifyDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffProductShopifyDriverModule,
      providers: [
        {
          provide: DaffProductDriver,
          useExisting: DaffShopifyProductService
        }
      ]
    };
  }
}
