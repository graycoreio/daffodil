import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffCustomerPaymentDriver } from '@daffodil/customer-payment/driver';

import { DaffCustomerPaymentInMemoryDriver } from './payment.service';

/**
 * Provides the {@link DaffCustomerPaymentInMemoryDriver} as the {@link DaffCustomerPaymentDriver}.
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
        {
          provide: DaffCustomerPaymentDriver,
          useExisting: DaffCustomerPaymentInMemoryDriver,
        },
      ],
    };
  }
}
