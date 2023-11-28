import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffProductDriver } from '@daffodil/product/driver';
import {
  DaffDefaultProductFactory,
  DaffProductTestingModule,
  daffProvideProductExtraFactoryTypes,
} from '@daffodil/product/testing';

import { DaffInMemoryProductService } from './product.service';

/**
 * Module for providing the DaffInMemoryProductService driver to your application.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffProductTestingModule,
  ],
})
export class DaffProductInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffProductInMemoryDriverModule> {
    return {
      ngModule: DaffProductInMemoryDriverModule,
      providers: [
        {
          provide: DaffProductDriver,
          useExisting: DaffInMemoryProductService,
        },
        daffProvideProductExtraFactoryTypes(DaffDefaultProductFactory),
      ],
    };
  }
}
