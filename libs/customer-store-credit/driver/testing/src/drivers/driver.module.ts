import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCustomerStoreCreditDriver } from '@daffodil/customer-store-credit/driver';

import { DaffCustomerStoreCreditTestingDriver } from './store-credit.service';

/**
 * Provides the {@link DaffCustomerStoreCreditTestingDriver} as the {@link DaffCustomerStoreCreditDriver}.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerStoreCreditTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerStoreCreditTestingDriverModule> {
    return {
      ngModule: DaffCustomerStoreCreditTestingDriverModule,
      providers: [
        provideDaffCustomerStoreCreditDriver(DaffCustomerStoreCreditTestingDriver),
      ],
    };
  }
}
