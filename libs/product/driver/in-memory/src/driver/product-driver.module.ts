import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffProductInMemoryDriver } from './provider';

/**
 * Module for providing the DaffInMemoryProductService driver to your application.
 *
 * @deprecated in favor of {@link provideDaffProductInMemoryDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
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
