import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffProductTestingDriver } from './provider';

/**
 * Module for providing the {@link DaffProductTestingService} driver as the {@link DaffProductDriver}.
 *
 * @deprecated in favor of {@link provideDaffProductTestingDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffProductTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffProductTestingDriverModule> {
    return {
      ngModule: DaffProductTestingDriverModule,
      providers: [
        provideDaffProductTestingDriver(),
      ],
    };
  }
}
