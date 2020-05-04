import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffProductDriver } from '../injection-tokens/product-driver.token';
import { DaffMagentoProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffProductMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffProductMagentoDriverModule> {
    return {
      ngModule: DaffProductMagentoDriverModule,
      providers: [
        {
          provide: DaffProductDriver,
          useExisting: DaffMagentoProductService
				}
      ]
    };
  }
}
