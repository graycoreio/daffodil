import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCustomerStoreCreditMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCustomerStoreCreditMagentoDriver}
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
