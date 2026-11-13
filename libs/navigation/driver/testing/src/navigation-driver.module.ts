import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffNavigationTestingDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffNavigationTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffNavigationTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffNavigationTestingDriverModule> {
    return {
      ngModule: DaffNavigationTestingDriverModule,
      providers: [
        provideDaffNavigationTestingDriver(),
      ],
    };
  }
}
