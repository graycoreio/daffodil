import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffRelatedProductsMagentoDriver } from './provider';

/**
 * A module that provides the {@link magentoRelatedProductsFragment} and {@link DaffMagentoRelatedProductsTransformers}.
 *
 * @deprecated in favor of {@link provideDaffRelatedProductsMagentoDriver}
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
