import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffCartStoreCreditDriver } from '@daffodil/cart-store-credit/driver';
import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';

import { DaffCartStoreCreditInMemoryDriver } from './store-credit.service';
import { DaffCartStoreCreditInMemoryBackendService } from '../backend/store-credit.service';

/**
 * Provides the {@link DaffCartStoreCreditInMemoryDriver} as the {@link DaffCartStoreCreditDriver}.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCartStoreCreditInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffCartStoreCreditInMemoryDriverModule> {
    return {
      ngModule: DaffCartStoreCreditInMemoryDriverModule,
      providers: [
        {
          provide: DaffCartStoreCreditDriver,
          useExisting: DaffCartStoreCreditInMemoryDriver,
        },
        provideDaffInMemoryBackends(DaffCartStoreCreditInMemoryBackendService),
      ],
    };
  }
}
