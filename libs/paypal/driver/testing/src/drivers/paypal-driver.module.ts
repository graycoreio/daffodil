import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffPaypalTestingDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffPaypalTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
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
