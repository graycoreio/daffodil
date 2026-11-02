import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffProductConfigurableInMemoryDriver } from './provider';

/**
 * Module for providing the configurable product factory to the product kind factory.
 *
 * @deprecated in favor of {@link provideDaffProductConfigurableInMemoryDriver}
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
