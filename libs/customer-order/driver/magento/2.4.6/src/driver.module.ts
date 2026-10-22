import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCustomerOrderMagentoDriver } from './provider';

/**
 * @deprecated prefer {@link provideDaffCustomerOrderMagentoDriver}. Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerOrderMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerOrderMagentoDriverModule> {
    return {
      ngModule: DaffCustomerOrderMagentoDriverModule,
      providers: [
        provideDaffCustomerOrderMagentoDriver(),
      ],
    };
  }
}
