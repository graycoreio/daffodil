import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffProductDriver } from '@daffodil/product';

import { DaffTestingProductService } from './product.service';

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
