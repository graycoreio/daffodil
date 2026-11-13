import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffProductConfigurableTestingDriver } from './provider';

/**
 * Module for providing the configurable product factory to the product kind factory.
 *
 * @deprecated in favor of {@link provideDaffProductConfigurableTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffConfigurableProductTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffConfigurableProductTestingDriverModule> {
    return {
      ngModule: DaffConfigurableProductTestingDriverModule,
      providers: [
        provideDaffProductConfigurableTestingDriver(),
      ],
    };
  }
}
