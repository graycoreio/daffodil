import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  DaffCustomerAddressDriver,
  DaffCustomerDriver,
} from '@daffodil/customer/driver';
import {
  DaffInMemoryBackendInterface,
  provideDaffInMemoryBackends,
} from '@daffodil/driver/in-memory';

import { DaffCustomerAddressInMemoryDriver } from './address.service';
import { DaffCustomerInMemoryDriver } from './customer.service';
import { DaffCustomerAddressInMemoryBackendService } from '../backend/address.service';
import { DaffCustomerInMemoryBackendService } from '../backend/customer.service';

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
        {
          provide: DaffCustomerAddressDriver,
          useExisting: DaffCustomerAddressInMemoryDriver,
        },
        provideDaffInMemoryBackends<DaffInMemoryBackendInterface>(
          DaffCustomerInMemoryBackendService,
          DaffCustomerAddressInMemoryBackendService,
        ),
      ],
    };
  }
}
