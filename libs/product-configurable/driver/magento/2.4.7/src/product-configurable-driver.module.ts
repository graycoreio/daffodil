import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffProductConfigurableMagentoDriver } from './provider';

/**
 * A module that provides the product fragment for configurable products along with a configurable product transformer.
 *
 * @deprecated in favor of {@link provideDaffProductConfigurableMagentoDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffConfigurableProductMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffConfigurableProductMagentoDriverModule> {
    return {
      ngModule: DaffConfigurableProductMagentoDriverModule,
      providers: [
        provideDaffProductConfigurableMagentoDriver(),
      ],
    };
  }
}
