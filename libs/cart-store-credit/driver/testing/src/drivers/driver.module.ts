import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCartStoreCreditTestingDriver } from './provider';

/**
 * Provides the {@link DaffCartStoreCreditTestingDriver} as the {@link DaffCartStoreCreditDriver}.
 *
 * @deprecated in favor of {@link provideDaffCartStoreCreditTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCartStoreCreditTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffCartStoreCreditTestingDriverModule> {
    return {
      ngModule: DaffCartStoreCreditTestingDriverModule,
      providers: [
        provideDaffCartStoreCreditTestingDriver(),
      ],
    };
  }
}
