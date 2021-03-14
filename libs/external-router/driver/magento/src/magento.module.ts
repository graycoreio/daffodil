import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffExternalRouterDriver } from '@daffodil/external-router/driver';

import {
  DaffExternalRouterMagentoDriverConfig,
  DAFF_EXTERNAL_ROUTER_DRIVER_MAGENTO_CONFIG,
  daffExternalRouterDriverMagentoConfigurationDefault,
} from './config';
import { DaffExternalRouterMagentoDriver } from './magento.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class DaffExternalRouterDriverMagentoModule {
  static forRoot(config: DaffExternalRouterMagentoDriverConfig = daffExternalRouterDriverMagentoConfigurationDefault): ModuleWithProviders<DaffExternalRouterDriverMagentoModule> {
    return {
      ngModule: DaffExternalRouterDriverMagentoModule,
      providers: [
        {
          provide: DAFF_EXTERNAL_ROUTER_DRIVER_MAGENTO_CONFIG,
          useValue: config,
        },
        {
          provide: DaffExternalRouterDriver,
          useExisting: DaffExternalRouterMagentoDriver,
        },
      ],
    };
  }
}
