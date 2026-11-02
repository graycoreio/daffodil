import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffOrderTestingDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffOrderTestingDriver}
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
