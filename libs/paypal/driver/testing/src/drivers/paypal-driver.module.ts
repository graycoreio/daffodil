import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffPaypalTestingDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffPaypalTestingDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffPaypalTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffPaypalTestingDriverModule> {
    return {
      ngModule: DaffPaypalTestingDriverModule,
      providers: [
        provideDaffPaypalTestingDriver(),
      ],
    };
  }
}
