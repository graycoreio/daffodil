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

/**
 * The module used to configure the {@link DaffExternalRouterDriver} for usage with Magento.
 *
 * ```ts
 * @NgModule({
 *   declarations: [],
 *   imports: [
 *     ...
 *     DaffExternalRouterDriverMagentoModule.forRoot({
 *       version: "2.4.1"
 *     })
 *   ],
 * })
 * export class AppModule{}
 * ```
 *
 * Note that this package depends upon ApolloClient, as the Magento driver uses GraphQl to make it's API calls.
 */
@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class DaffExternalRouterDriverMagentoModule {

  /**
   * Configures the package for the root injector. `forRoot` optionally takes a {@link DaffExternalRouterMagentoDriverConfig}.
   */
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
