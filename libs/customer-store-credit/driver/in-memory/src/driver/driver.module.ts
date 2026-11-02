import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCustomerStoreCreditInMemoryDriver } from '../provider';

/**
 * Provides the {@link DaffCustomerStoreCreditInMemoryDriver} as the {@link DaffCustomerStoreCreditDriver}.
 *
 * @deprecated in favor of {@link provideDaffCustomerStoreCreditInMemoryDriver}
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
