import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCartMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCartMagentoDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCartMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCartMagentoDriverModule> {
    return {
      ngModule: DaffCartMagentoDriverModule,
      providers: [
        provideDaffCartMagentoDriver(),
      ],
    };
  }
}
