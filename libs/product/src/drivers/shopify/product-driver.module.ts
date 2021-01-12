import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffProductDriver } from '../injection-tokens/product-driver.token';
import { DaffShopifyProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffProductShopifyDriverModule {
  static forRoot(): ModuleWithProviders<DaffProductShopifyDriverModule> {
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
