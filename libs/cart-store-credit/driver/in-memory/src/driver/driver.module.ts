import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCartStoreCreditInMemoryDriver } from './provider';

/**
 * Provides the {@link DaffCartStoreCreditInMemoryDriver} as the {@link DaffCartStoreCreditDriver}.
 *
 * @deprecated in favor of {@link provideDaffCartStoreCreditInMemoryDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
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
        provideDaffCartStoreCreditInMemoryDriver(),
      ],
    };
  }
}
