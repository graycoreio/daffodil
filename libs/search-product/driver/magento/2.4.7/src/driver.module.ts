import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffSearchProductMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffSearchProductMagentoDriver}
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
