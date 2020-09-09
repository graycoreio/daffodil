import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffProductDriver } from '@daffodil/product';

import { DaffTestingProductService } from './product.service';

/**
 * Module for providing DaffProductTestingService driver as the backend product service to your application.
 */
@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffProductTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffProductTestingDriverModule> {
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
