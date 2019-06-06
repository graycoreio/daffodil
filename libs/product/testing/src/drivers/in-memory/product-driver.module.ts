import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffProductDriver } from 'product/src';

import { DaffInMemoryProductService } from 'product/testing/src/drivers/in-memory/product.service';

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
