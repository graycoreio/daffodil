import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffAuthorizeNetConfig } from '@daffodil/authorizenet/driver';

import { provideDaffAuthorizeNetMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffAuthorizeNetMagentoDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffMagentoAuthorizeNetDriverModule {
  static forRoot(config: DaffAuthorizeNetConfig): ModuleWithProviders<DaffMagentoAuthorizeNetDriverModule> {
    return {
      ngModule: DaffMagentoAuthorizeNetDriverModule,
      providers: [
        provideDaffAuthorizeNetMagentoDriver(config),
      ],
    };
  }
}
