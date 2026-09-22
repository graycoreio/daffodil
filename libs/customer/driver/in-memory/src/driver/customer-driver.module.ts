import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCustomerInMemoryDriver } from '../provider';

/**
 * Provides the {@link DaffCustomerInMemoryDriver} as the {@link DaffCustomerDriver}.
 *
 * @deprecated in favor of {@link provideDaffCustomerInMemoryDriver}
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
