import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffProductConfigurableMagentoDriver } from './provider';

/**
 * A module that provides the product fragment for configurable products along with a configurable product transformer.
 *
 * @deprecated in favor of {@link provideDaffProductConfigurableMagentoDriver}
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
