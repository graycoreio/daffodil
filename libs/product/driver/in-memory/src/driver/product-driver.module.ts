import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffProductInMemoryDriver } from './provider';

/**
 * Module for providing the DaffInMemoryProductService driver to your application.
 *
 * @deprecated in favor of {@link provideDaffProductInMemoryDriver}
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
