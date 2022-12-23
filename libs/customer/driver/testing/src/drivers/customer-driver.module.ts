import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffCustomerDriver } from '@daffodil/customer/driver';

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
      ],
    };
  }
}
