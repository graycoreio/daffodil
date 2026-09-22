import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffContentTestingDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffContentTestingDriver}
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
