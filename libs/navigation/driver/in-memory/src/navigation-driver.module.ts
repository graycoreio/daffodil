import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffNavigationInMemoryDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffNavigationInMemoryDriver}
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
