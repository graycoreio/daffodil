import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffAuthorizeNetPaymentDriver } from '@daffodil/authorizenet/driver';
import { provideDaffCustomerPaymentDriver } from '@daffodil/customer-payment/driver';
import { provideDaffCustomerPaymentAuthorizeNetPaymentDriver } from '@daffodil/customer-payment-authorizenet/driver';

import { DaffCustomerPaymentAuthorizeNetMagentoService } from './customer-payment.service';
import { DaffCustomerPaymentAuthorizeNetMagentoPaymentService } from './payment.service';

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
        provideDaffCustomerPaymentDriver(DaffCustomerPaymentAuthorizeNetMagentoService),
        // TODO: use provider function
        {
          provide: DaffAuthorizeNetPaymentDriver,
          useExisting: DaffCustomerPaymentAuthorizeNetMagentoPaymentService,
        },
        provideDaffCustomerPaymentAuthorizeNetPaymentDriver(DaffCustomerPaymentAuthorizeNetMagentoPaymentService),
      ],
    };
  }
}
