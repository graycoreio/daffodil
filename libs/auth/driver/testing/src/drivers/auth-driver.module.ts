import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffAuthTestingDriver } from '../provider';

/**
 * @deprecated in favor of {@link provideDaffAuthTestingDriver}
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
