import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffOrderInMemoryDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffOrderInMemoryDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffOrderInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffOrderInMemoryDriverModule> {
    return {
      ngModule: DaffOrderInMemoryDriverModule,
      providers: [
        provideDaffOrderInMemoryDriver(),
      ],
    };
  }
}
