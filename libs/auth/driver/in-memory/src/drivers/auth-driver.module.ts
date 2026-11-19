import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffAuthInMemoryDriver } from '../provider';

/**
 * @deprecated in favor of {@link provideDaffAuthInMemoryDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffAuthInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffAuthInMemoryDriverModule> {
    return {
      ngModule: DaffAuthInMemoryDriverModule,
      providers: [
        provideDaffAuthInMemoryDriver(),
      ],
    };
  }
}
