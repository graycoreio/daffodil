import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';
import { provideDaffPaymentDriver } from '@daffodil/payment/driver';
import { DaffPaymentTestingModule } from '@daffodil/payment/testing';

import { DaffPaymentInMemoryDriver } from './payment.service';
import { DaffPaymentInMemoryBackendService } from '../backend/payment.service';

/**
 * Provides the {@link DaffPaymentInMemoryDriver} as the {@link DaffPaymentDriver}.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffPaymentTestingModule,
  ],
})
export class DaffPaymentInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffPaymentInMemoryDriverModule> {
    return {
      ngModule: DaffPaymentInMemoryDriverModule,
      providers: [
        provideDaffPaymentDriver(DaffPaymentInMemoryDriver),
        provideDaffInMemoryBackends(DaffPaymentInMemoryBackendService),
      ],
    };
  }
}
