import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffProductDriver } from 'product/src';

import { DaffTestingProductService } from 'product/testing/src/drivers/testing/product.service';

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
