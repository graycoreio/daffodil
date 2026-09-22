import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCartStoreCreditMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCartStoreCreditMagentoDriver}
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
