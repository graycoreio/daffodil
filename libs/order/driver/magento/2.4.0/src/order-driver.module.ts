import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffOrderMagentoDriver } from './provider';

/**
 * @deprecated prefer {@link provideDaffOrderMagentoDriver}. Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffOrderMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffOrderMagentoDriverModule> {
    return {
      ngModule: DaffOrderMagentoDriverModule,
      providers: [
        provideDaffOrderMagentoDriver(),
      ],
    };
  }
}
