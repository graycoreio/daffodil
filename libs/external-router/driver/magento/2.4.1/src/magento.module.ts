import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffExternalRouterDriver } from '@daffodil/external-router/driver';

import { DaffExternalRouterMagentoDriver } from './magento.service';

/**
 * The module used to configure the {@link DaffExternalRouterDriver} for usage with Magento.
 *
 * ```ts
 * @NgModule({
 *   declarations: [],
 *   imports: [
 *     ...
 *     DaffExternalRouterDriverMagentoModule.forRoot()
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
   * Configures the package for the root injector.
   */
  static forRoot(): ModuleWithProviders<DaffExternalRouterDriverMagentoModule> {
    return {
      ngModule: DaffExternalRouterDriverMagentoModule,
      providers: [
        {
          provide: DaffExternalRouterDriver,
          useExisting: DaffExternalRouterMagentoDriver,
        },
      ],
    };
  }
}
