import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffSearchTestingDriver } from './provider';

/**
 * Provides the {@link DaffTestingSearchDriver} as the {@link DaffSearchDriver}.
 *
 * @deprecated in favor of {@link provideDaffSearchTestingDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffSearchTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffSearchTestingDriverModule> {
    return {
      ngModule: DaffSearchTestingDriverModule,
      providers: [
        provideDaffSearchTestingDriver(),
      ],
    };
  }
}
