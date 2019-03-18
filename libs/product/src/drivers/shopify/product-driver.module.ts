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
