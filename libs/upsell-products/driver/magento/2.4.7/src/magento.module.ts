import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffUpsellProductsMagentoDriver } from './provider';

/**
 * A module that provides the {@link magentoUpsellProductsFragment} and {@link DaffMagentoUpsellProductsTransformers}.
 *
 * @deprecated in favor of {@link provideDaffUpsellProductsMagentoDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffUpsellProductsMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffUpsellProductsMagentoDriverModule> {
    return {
      ngModule: DaffUpsellProductsMagentoDriverModule,
      providers: [
        provideDaffUpsellProductsMagentoDriver(),
      ],
    };
  }
}
