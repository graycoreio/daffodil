import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  provideDaffCustomerAddressDriver,
  provideDaffCustomerDriver,
} from '@daffodil/customer/driver';
import { DAFF_MAGENTO_CACHEABLE_OPERATIONS } from '@daffodil/driver/magento';

import { DaffCustomerMagentoAddressService } from './address.service';
import { DaffCustomerMagentoService } from './customer.service';
import {
  MAGENTO_GET_CUSTOMER_ADDRESSES_QUERY_NAME,
  MAGENTO_GET_CUSTOMER_QUERY_NAME,
} from './queries/public_api';

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
