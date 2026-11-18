import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCustomerPaymentAuthorizeNetMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCustomerPaymentAuthorizeNetMagentoDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
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
