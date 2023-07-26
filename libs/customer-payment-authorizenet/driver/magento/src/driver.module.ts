import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffAuthorizeNetPaymentDriver } from '@daffodil/authorizenet/driver';
import { DaffCustomerPaymentAuthorizeNetPaymentDriver } from '@daffodil/customer-payment-authorizenet/driver';
import { DaffCustomerPaymentDriver } from '@daffodil/customer-payment/driver';

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
        {
          provide: DaffCustomerPaymentDriver,
          useExisting: DaffCustomerPaymentAuthorizeNetMagentoService,
        },
        {
          provide: DaffAuthorizeNetPaymentDriver,
          useExisting: DaffCustomerPaymentAuthorizeNetMagentoPaymentService,
        },
        {
          provide: DaffCustomerPaymentAuthorizeNetPaymentDriver,
          useExisting: DaffCustomerPaymentAuthorizeNetMagentoPaymentService,
        },
      ],
    };
  }
}
