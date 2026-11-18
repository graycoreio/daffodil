import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { MAGENTO_PRODUCT_CONFIG_DEFAULT } from './config/public_api';
import { DaffProductMagentoDriverConfig } from './interfaces/public_api';
import { provideDaffProductMagentoDriver } from './provider';

/**
 * A module that provides the {@link DaffProductDriver} and {@link DaffProductMagentoDriverConfig} as the {@link DaffMagentoProductService} and
 * {@link MAGENTO_PRODUCT_CONFIG_DEFAULT} respectively
 *
 * @deprecated in favor of {@link provideDaffProductMagentoDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffProductMagentoDriverModule {
  static forRoot(config: DaffProductMagentoDriverConfig = MAGENTO_PRODUCT_CONFIG_DEFAULT): ModuleWithProviders<DaffProductMagentoDriverModule> {
    return {
      ngModule: DaffProductMagentoDriverModule,
      providers: [
        provideDaffProductMagentoDriver(config),
      ],
    };
  }
}
