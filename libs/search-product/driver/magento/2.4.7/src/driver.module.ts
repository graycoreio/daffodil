import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffSearchProductMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffSearchProductMagentoDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffSearchProductMagentoDriverModule {
  /**
   * A module that provides the singleton of the product search Magento driver as the search driver.
   */
  static forRoot(): ModuleWithProviders<DaffSearchProductMagentoDriverModule> {
    return {
      ngModule: DaffSearchProductMagentoDriverModule,
      providers: [
        provideDaffSearchProductMagentoDriver(),
      ],
    };
  }
}
