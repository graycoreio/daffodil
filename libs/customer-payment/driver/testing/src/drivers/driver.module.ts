import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffCustomerPaymentDriver } from '@daffodil/customer-payment/driver';

import { DaffCustomerPaymentTestingDriver } from './payment.service';

/**
 * Provides the {@link DaffCustomerPaymentTestingDriver} as the {@link DaffCustomerPaymentDriver}.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerPaymentTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerPaymentTestingDriverModule> {
    return {
      ngModule: DaffCustomerPaymentTestingDriverModule,
      providers: [
        {
          provide: DaffCustomerPaymentDriver,
          useExisting: DaffCustomerPaymentTestingDriver,
        },
      ],
    };
  }
}
