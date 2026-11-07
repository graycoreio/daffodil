import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCustomerMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCustomerMagentoDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerMagentoDriverModule> {
    return {
      ngModule: DaffCustomerMagentoDriverModule,
      providers: [
        provideDaffCustomerMagentoDriver(),
      ],
    };
  }
}
