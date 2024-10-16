import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DAFF_MAGENTO_CACHEABLE_OPERATIONS } from '@daffodil/driver/magento';
import { provideDaffExternalRouterDriver } from '@daffodil/external-router/driver';

import { DAFF_MAGENTO_RESOLVE_URL_QUERY_NAME } from './graphql/queries/resolve';
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
        provideDaffExternalRouterDriver(DaffExternalRouterMagentoDriver),
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: DAFF_MAGENTO_RESOLVE_URL_QUERY_NAME,
          multi: true,
        },
      ],
    };
  }
}
