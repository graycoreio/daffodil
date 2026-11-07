import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffSearchInMemoryDriver } from './provider';

/**
 * Provides the {@link DaffInMemorySearchDriver} as the {@link DaffSearchDriver}.
 *
 * @deprecated in favor of {@link provideDaffSearchInMemoryDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffSearchInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffSearchInMemoryDriverModule> {
    return {
      ngModule: DaffSearchInMemoryDriverModule,
      providers: [
        provideDaffSearchInMemoryDriver(),
      ],
    };
  }
}
