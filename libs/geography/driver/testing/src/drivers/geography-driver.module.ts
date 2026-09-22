import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffGeographyTestingDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffGeographyTestingDriver}
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
