import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCartInMemoryDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCartInMemoryDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCartInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffCartInMemoryDriverModule> {
    return {
      ngModule: DaffCartInMemoryDriverModule,
      providers: [
        provideDaffCartInMemoryDriver(),
      ],
    };
  }
}
