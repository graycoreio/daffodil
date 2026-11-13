import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffGeographyTestingDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffGeographyTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffGeographyTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffGeographyTestingDriverModule> {
    return {
      ngModule: DaffGeographyTestingDriverModule,
      providers: [
        provideDaffGeographyTestingDriver(),
      ],
    };
  }
}
