import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCartStoreCreditInMemoryDriver } from './provider';

/**
 * Provides the {@link DaffCartStoreCreditInMemoryDriver} as the {@link DaffCartStoreCreditDriver}.
 *
 * @deprecated in favor of {@link provideDaffCartStoreCreditInMemoryDriver}
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
