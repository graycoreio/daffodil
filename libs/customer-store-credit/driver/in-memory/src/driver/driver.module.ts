import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffCustomerStoreCreditDriver } from '@daffodil/customer-store-credit/driver';
import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';

import { DaffCustomerStoreCreditInMemoryDriver } from './store-credit.service';
import { DaffCustomerStoreCreditInMemoryBackendService } from '../backend/store-credit.service';

/**
 * Provides the {@link DaffCustomerStoreCreditInMemoryDriver} as the {@link DaffCustomerStoreCreditDriver}.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerStoreCreditInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerStoreCreditInMemoryDriverModule> {
    return {
      ngModule: DaffCustomerStoreCreditInMemoryDriverModule,
      providers: [
        {
          provide: DaffCustomerStoreCreditDriver,
          useExisting: DaffCustomerStoreCreditInMemoryDriver,
        },
        provideDaffInMemoryBackends(DaffCustomerStoreCreditInMemoryBackendService),
      ],
    };
  }
}
