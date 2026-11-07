import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffContactTestingDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffContactTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [CommonModule],
})
export class DaffContactTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffContactTestingDriverModule> {
    return {
      ngModule: DaffContactTestingDriverModule,
      providers: [
        provideDaffContactTestingDriver(),
      ],
    };
  }
}
