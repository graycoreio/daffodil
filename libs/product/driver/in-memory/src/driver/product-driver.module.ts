import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffProductTestingModule } from '@daffodil/product/testing';

import { provideDaffProductInMemoryDriver } from './provider';

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
        provideDaffProductInMemoryDriver(),
      ],
    };
  }
}
