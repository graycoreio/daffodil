import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCustomerPaymentAuthorizeNetMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCustomerPaymentAuthorizeNetMagentoDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerPaymentAuthorizeNetMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerPaymentAuthorizeNetMagentoDriverModule> {
    return {
      ngModule: DaffCustomerPaymentAuthorizeNetMagentoDriverModule,
      providers: [
        provideDaffCustomerPaymentAuthorizeNetMagentoDriver(),
      ],
    };
  }
}
