import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffNavigationInMemoryDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffNavigationInMemoryDriver} Deprecated in version 0.90.0. Will be removed in version 0.93.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffNavigationInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffNavigationInMemoryDriverModule> {
    return {
      ngModule: DaffNavigationInMemoryDriverModule,
      providers: [
        provideDaffNavigationInMemoryDriver(),
      ],
    };
  }
}
