import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffPaypalExpressDriverConfig } from '@daffodil/paypal/driver';

import { MAGENTO_PAYPAL_EXPRESS_DRIVER_CONFIG_DEFAULT } from './config/default';
import { provideDaffPaypalMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffPaypalMagentoDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffPaypalMagentoDriverModule {
  static forRoot(config: Partial<DaffPaypalExpressDriverConfig> = MAGENTO_PAYPAL_EXPRESS_DRIVER_CONFIG_DEFAULT): ModuleWithProviders<DaffPaypalMagentoDriverModule> {
    return {
      ngModule: DaffPaypalMagentoDriverModule,
      providers: [
        provideDaffPaypalMagentoDriver(config),
      ],
    };
  }
}
