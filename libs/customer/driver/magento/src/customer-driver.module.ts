import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  provideDaffCustomerAddressDriver,
  provideDaffCustomerDriver,
} from '@daffodil/customer/driver';

import { DaffCustomerMagentoAddressService } from './address.service';
import { DaffCustomerMagentoService } from './customer.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerMagentoDriverModule> {
    return {
      ngModule: DaffCustomerMagentoDriverModule,
      providers: [
        provideDaffCustomerDriver(DaffCustomerMagentoService),
        provideDaffCustomerAddressDriver(DaffCustomerMagentoAddressService),
      ],
    };
  }
}
