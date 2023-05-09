import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffCartStoreCreditDriver } from '@daffodil/cart-store-credit/driver';

import { DaffCartStoreCreditInMemoryDriver } from './store-credit.service';

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
      ],
    };
  }
}
