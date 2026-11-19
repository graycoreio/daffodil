import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCustomerStoreCreditMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCustomerStoreCreditMagentoDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerStoreCreditMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerStoreCreditMagentoDriverModule> {
    return {
      ngModule: DaffCustomerStoreCreditMagentoDriverModule,
      providers: [
        provideDaffCustomerStoreCreditMagentoDriver(),
      ],
    };
  }
}
