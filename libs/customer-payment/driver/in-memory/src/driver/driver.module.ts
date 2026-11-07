import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCustomerPaymentInMemoryDriver } from '../provider';

/**
 * Provides the {@link DaffCustomerPaymentInMemoryDriver} as the {@link DaffCustomerPaymentDriver}.
 *
 * @deprecated in favor of {@link provideDaffCustomerPaymentInMemoryDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerPaymentInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerPaymentInMemoryDriverModule> {
    return {
      ngModule: DaffCustomerPaymentInMemoryDriverModule,
      providers: [
        provideDaffCustomerPaymentInMemoryDriver(),
      ],
    };
  }
}
