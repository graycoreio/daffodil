import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffContactTestingDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffContactTestingDriver}
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
