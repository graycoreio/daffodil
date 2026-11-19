import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCartStoreCreditMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCartStoreCreditMagentoDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCartStoreCreditMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCartStoreCreditMagentoDriverModule> {
    return {
      ngModule: DaffCartStoreCreditMagentoDriverModule,
      providers: [
        provideDaffCartStoreCreditMagentoDriver(),
      ],
    };
  }
}
