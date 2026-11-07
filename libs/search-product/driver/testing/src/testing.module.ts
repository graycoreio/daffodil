import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffSearchProductTestingDriver } from './provider';

/**
 * Module for providing the product search result factory as a search result kind factory.
 *
 * @deprecated in favor of {@link provideDaffSearchProductTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffSearchProductTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffSearchProductTestingDriverModule> {
    return {
      ngModule: DaffSearchProductTestingDriverModule,
      providers: [
        provideDaffSearchProductTestingDriver(),
      ],
    };
  }
}
