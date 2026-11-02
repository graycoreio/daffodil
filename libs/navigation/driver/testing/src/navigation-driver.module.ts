import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffNavigationTestingDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffNavigationTestingDriver}
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
