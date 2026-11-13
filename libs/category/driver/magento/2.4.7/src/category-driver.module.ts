import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import { provideDaffCategoryMagentoDriver } from './provider';

/**
 * A module that provides the {@link DaffCategoryDriver} and {@link MAGENTO_CATEGORY_CONFIG_TOKEN} as the {@link DaffMagentoCategoryService} and
 * {@link MAGENTO_CATEGORY_CONFIG_DEFAULT} respectively
 *
 * @deprecated in favor of {@link provideDaffCategoryMagentoDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCategoryMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCategoryMagentoDriverModule> {
    return {
      ngModule: DaffCategoryMagentoDriverModule,
      providers: [
        provideDaffCategoryMagentoDriver(),
      ],
    };
  }
}
