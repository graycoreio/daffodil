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
 * @deprecated
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
