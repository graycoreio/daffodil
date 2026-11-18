import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCustomerInMemoryDriver } from '../provider';

/**
 * Provides the {@link DaffCustomerInMemoryDriver} as the {@link DaffCustomerDriver}.
 *
 * @deprecated in favor of {@link provideDaffCustomerInMemoryDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerInMemoryDriverModule> {
    return {
      ngModule: DaffCustomerInMemoryDriverModule,
      providers: [
        provideDaffCustomerInMemoryDriver(),
      ],
    };
  }
}
