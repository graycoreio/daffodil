import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffContentTestingDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffContentTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffContentTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffContentTestingDriverModule> {
    return {
      ngModule: DaffContentTestingDriverModule,
      providers: [
        provideDaffContentTestingDriver(),
      ],
    };
  }
}
