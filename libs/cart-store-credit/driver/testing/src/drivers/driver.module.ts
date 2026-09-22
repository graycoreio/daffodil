import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCartStoreCreditTestingDriver } from './provider';

/**
 * Provides the {@link DaffCartStoreCreditTestingDriver} as the {@link DaffCartStoreCreditDriver}.
 *
 * @deprecated in favor of {@link provideDaffCartStoreCreditTestingDriver}
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
