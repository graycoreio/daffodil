import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCustomerPaymentTestingDriver } from './provider';

/**
 * Provides the {@link DaffCustomerPaymentTestingDriver} as the {@link DaffCustomerPaymentDriver}.
 *
 * @deprecated in favor of {@link provideDaffCustomerPaymentTestingDriver}
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
        provideDaffCustomerPaymentTestingDriver(),
      ],
    };
  }
}
