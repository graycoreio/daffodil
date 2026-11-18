import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffAuthTestingDriver } from '../provider';

/**
 * @deprecated in favor of {@link provideDaffAuthTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffAuthTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffAuthTestingDriverModule> {
    return {
      ngModule: DaffAuthTestingDriverModule,
      providers: [
        provideDaffAuthTestingDriver(),
      ],
    };
  }
}
