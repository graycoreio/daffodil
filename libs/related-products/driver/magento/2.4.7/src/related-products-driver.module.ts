import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffRelatedProductsMagentoDriver } from './provider';

/**
 * A module that provides the {@link magentoRelatedProductsFragment} and {@link DaffMagentoRelatedProductsTransformers}.
 *
 * @deprecated in favor of {@link provideDaffRelatedProductsMagentoDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffRelatedProductsMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffRelatedProductsMagentoDriverModule> {
    return {
      ngModule: DaffRelatedProductsMagentoDriverModule,
      providers: [
        provideDaffRelatedProductsMagentoDriver(),
      ],
    };
  }
}
