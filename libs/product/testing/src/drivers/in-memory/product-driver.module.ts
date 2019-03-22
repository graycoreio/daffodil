import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffProductDriver } from '../../../../src/drivers/injection-tokens/product-driver.token';
import { DaffInMemoryProductService } from './product.service';

/**
 * Module for providing DaffInMemoryProductService driver.
 */
@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffProductInMemoryDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffProductInMemoryDriverModule,
      providers: [
        {
          provide: DaffProductDriver,
          useExisting: DaffInMemoryProductService
        }
      ]
    };
  }
}
