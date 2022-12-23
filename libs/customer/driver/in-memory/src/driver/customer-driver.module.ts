import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffCustomerDriver } from '@daffodil/customer/driver';

import { DaffCustomerInMemoryDriver } from './customer.service';

/**
 * Provides the {@link DaffCustomerInMemoryDriver} as the {@link DaffCustomerDriver}.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerInMemoryDriverModule> {
    return {
      ngModule: DaffCustomerInMemoryDriverModule,
      providers: [
        {
          provide: DaffCustomerDriver,
          useExisting: DaffCustomerInMemoryDriver,
        },
      ],
    };
  }
}
