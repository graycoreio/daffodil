import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCustomerStoreCreditInMemoryDriver } from '../provider';

/**
 * Provides the {@link DaffCustomerStoreCreditInMemoryDriver} as the {@link DaffCustomerStoreCreditDriver}.
 *
 * @deprecated in favor of {@link provideDaffCustomerStoreCreditInMemoryDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerStoreCreditInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerStoreCreditInMemoryDriverModule> {
    return {
      ngModule: DaffCustomerStoreCreditInMemoryDriverModule,
      providers: [
        provideDaffCustomerStoreCreditInMemoryDriver(),
      ],
    };
  }
}
