import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffProductDriver } from '../../../../src/drivers/injection-tokens/product-driver.token';
import { DaffTestingProductService } from './product.service';

/**
 * Module for providing DaffProductTestingService driver.
 */
@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffProductTestingDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffProductTestingDriverModule,
      providers: [
        {
          provide: DaffProductDriver,
          useExisting: DaffTestingProductService
        }
      ]
    };
  }
}
