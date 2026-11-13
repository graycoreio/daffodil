import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffOrderTestingDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffOrderTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffOrderTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffOrderTestingDriverModule> {
    return {
      ngModule: DaffOrderTestingDriverModule,
      providers: [
        provideDaffOrderTestingDriver(),
      ],
    };
  }
}
