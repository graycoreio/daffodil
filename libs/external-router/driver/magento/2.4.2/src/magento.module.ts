import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffExternalRouterMagentoDriver } from './provider';

/**
 * The module used to configure the {@link DaffExternalRouterDriver} for usage with Magento.
 *
 * @example
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
 *
 * @deprecated prefer {@link provideDaffExternalRouterMagentoDriver}. Deprecated in version 0.95.0. Will be removed in version 0.98.0.
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
        provideDaffExternalRouterMagentoDriver(),
      ],
    };
  }
}
