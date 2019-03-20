import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffProductDriver } from '@daffodil/product';

import { DaffInMemoryProductService } from './product.service';

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
