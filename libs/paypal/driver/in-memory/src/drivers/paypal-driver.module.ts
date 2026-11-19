import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffPaypalInMemoryDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffPaypalInMemoryDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffPaypalInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffPaypalInMemoryDriverModule> {
    return {
      ngModule: DaffPaypalInMemoryDriverModule,
      providers: [
        provideDaffPaypalInMemoryDriver(),
      ],
    };
  }
}
