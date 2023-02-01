import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DaffCustomerAddressDriver,
  DaffCustomerDriver,
} from '@daffodil/customer/driver';

import { DaffCustomerAddressTestingDriver } from './address.service';
import { DaffCustomerTestingDriver } from './customer.service';

/**
 * Provides the {@link DaffCustomerTestingDriver} as the {@link DaffCustomerDriver}.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerTestingDriverModule> {
    return {
      ngModule: DaffCustomerTestingDriverModule,
      providers: [
        {
          provide: DaffCustomerDriver,
          useExisting: DaffCustomerTestingDriver,
        },
        {
          provide: DaffCustomerAddressDriver,
          useExisting: DaffCustomerAddressTestingDriver,
        },
      ],
    };
  }
}
