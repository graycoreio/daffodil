import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffProductConfigurableInMemoryDriver } from './provider';

/**
 * Module for providing the configurable product factory to the product kind factory.
 *
 * @deprecated in favor of {@link provideDaffProductConfigurableInMemoryDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffConfigurableProductInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffConfigurableProductInMemoryDriverModule> {
    return {
      ngModule: DaffConfigurableProductInMemoryDriverModule,
      providers: [
        provideDaffProductConfigurableInMemoryDriver(),
      ],
    };
  }
}
