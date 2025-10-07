import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  MagentoNavigationDriverConfig,
  MAGENTO_NAVIGATION_DRIVER_CONFIG_DEFAULT,
} from './config/public_api';
import { provideDaffNavigationMagentoDriver } from './provider';

/**
 * @deprecated Deprecated in version 0.90.0. Will be removed in version 0.93.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffNavigationMagentoDriverModule {
  static forRoot(config: MagentoNavigationDriverConfig = MAGENTO_NAVIGATION_DRIVER_CONFIG_DEFAULT): ModuleWithProviders<DaffNavigationMagentoDriverModule> {
    return {
      ngModule: DaffNavigationMagentoDriverModule,
      providers: [
        provideDaffNavigationMagentoDriver(config),
      ],
    };
  }
}
