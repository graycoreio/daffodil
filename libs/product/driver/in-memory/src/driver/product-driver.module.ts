import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';
import { provideDaffProductDriver } from '@daffodil/product/driver';
import {
  DaffDefaultProductFactory,
  DaffProductTestingModule,
  provideDaffProductExtraFactoryTypes,
} from '@daffodil/product/testing';

import { DaffInMemoryProductService } from './product.service';
import { DaffInMemoryBackendProductService } from '../backend/product.service';

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
        provideDaffProductDriver(DaffInMemoryProductService),
        provideDaffProductExtraFactoryTypes(DaffDefaultProductFactory),
        provideDaffInMemoryBackends(DaffInMemoryBackendProductService),
      ],
    };
  }
}
